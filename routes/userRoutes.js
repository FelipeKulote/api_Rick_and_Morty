import { authentication } from "../midlewares/auth.js";

export class UserRoutes {
  constructor(controller, router) {
    this.userController = controller;
    this.router = router;
  }

  route() {
    this.router.post("/create", (req, res) =>
    this.userController.create(req, res)
    );
    this.router.get("/", authentication, (req, res) =>
      this.userController.find(req, res)
    );
    this.router.patch("/update/:id", authentication, (req, res) =>
      this.userController.update(req, res)
    );
    this.router.delete("/delete/:id", authentication, (req, res) =>
      this.userController.delete(req, res)
    );
    this.router.get("/find/:id", authentication, (req, res) =>
      this.userController.findById(req, res)
    );
    return this.router;
  }
}
