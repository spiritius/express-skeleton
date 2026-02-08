import Router from "express";
import {
  getPosts,
  getPostById,
  getPostComments,
  getPostAuthor,
} from "../controllers";
import { isValidId } from "../middlewares/is-valid-id";

const router = Router();

router.get("/", getPosts);
router.get("/:id", [isValidId], getPostById);
router.get("/:id/author", [isValidId], getPostAuthor);
router.get("/:id/comments", getPostComments);
// router.get("/:id/author", getPostAuthor);

export default router;
