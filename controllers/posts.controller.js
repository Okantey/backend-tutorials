import mongoose from "mongoose";
import asyncHandler from "express-async-handler"
import Post from "../models/Post.js";


const handleCreatePost = asyncHandler(async (req, res) => {
  const { title, author, content } = req.body

  const postExists = await Post.findOne({ title })
  if (postExists) {
    res.status(400).json({
      message: `Posts with title ${title} already exists`
    })
    return
  }

  const newPost = await Post.create({
    title, content, author
  })

  await newPost.save()

  res.status(201).json({
    message: "Post created successfully!",
    newPost

  })



})


export { handleCreatePost }