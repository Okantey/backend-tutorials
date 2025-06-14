import express from "express";
import { handleCreatePost } from "../controllers/posts.controller.js";

const router = express.Router()

//method POST /create
//desc create a new post
//access PUBLIC

router.post("/create", handleCreatePost)

// //method GET
// //desc get all posts
// //access PUBLIC

// router.get("/all-posts")


// //method PATCH
// //desc Edit a blog post
// //access PUBLIC

// router.patch("/edit/:id")


// //method DELETE
// //desc Delete a blog post
// //access PUBLIC

// router.delete("/delete/:id")


export { router as postRoutes }