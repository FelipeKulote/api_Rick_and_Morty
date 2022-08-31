import { authentication } from "../midlewares/auth.js";

export class CharacterRoutes {
  constructor(controller, router) {
    this.characterController = controller;
    this.router = router;
  }

  route() {
    this.router.get("/all-characters", authentication, (req, res) =>
      this.characterController.find(req, res)
    );
    this.router.post("/create-characters", authentication, (req, res) =>
      this.characterController.create(req, res)
    );
    this.router.patch("/update-characters/:id", authentication, (req, res) =>
      this.characterController.update(req, res)
    );
    this.router.delete("/delete-characters/:id", authentication, (req, res) =>
      this.characterController.delete(req, res)
    );
    this.router.get("/find-characters/:id", authentication, (req, res) =>
      this.characterController.findById(req, res)
    );
    this.router.get("/search", authentication, (req, res) =>
      this.characterController.findCharacterByName(req, res)
    );
    return this.router;
  }
}
