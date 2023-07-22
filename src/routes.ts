import { Router } from "express";
import { firstController } from "./app/controller/FirstController";
import { users } from "./app/controller/UserController";

const router: Router = Router()

//Routes
router.get("/", firstController.home);

router.get("/user", users.ListAllUsers);

router.get("/user/:id", users.ListUserById);

router.post("user", users.RegisterUser);

router.put("/user", users.UpdateUser);

router.delete("/user", users.DeleteUser);

export { router };