import { MODULES_ROUTES } from "../../config/routes.config";
import { Router } from "express";
import { GET, POST } from "./controller";

const router = Router();

// router.route(MODULES_ROUTES.users).get(GET);
router.route(MODULES_ROUTES.users).post(POST);

export default router;
