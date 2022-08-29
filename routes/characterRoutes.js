export class CharacterRoutes {
  constructor(controller, router) {
    this.characterController = controller;
    this.router = router;
  }

  route() {
    this.router.get("/", (req, res) => this.characterController.find(req, res));
    this.router.post("/create", (req, res) =>
      this.characterController.create(req, res)
    );
    this.router.patch("/update/:id", (req, res) =>
      this.characterController.update(req, res)
    );
    this.router.delete("/delete/:id", (req, res) =>
      this.characterController.delete(req, res)
    );
    this.router.get("/find/:id", (req, res) =>
      this.characterController.findById(req, res)
    );
    this.router.get("/search", (req, res) =>
      this.characterController.findByName(req, res)
    );
    return this.router;
  }
}
