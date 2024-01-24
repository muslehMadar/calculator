import mongoose from "mongoose"


const schema = mongoose.Schema

const articleSchema = new schema({
    title: String,
    body: String,
    numberOfLikes: Number
})

const Article = mongoose.model("Article", articleSchema)

export default Article
