import { validationResult } from "express-validator";
import Blog from "../models/Blog.js";

class blogController {
  static async createBlogPost(req, res, next) {
      
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            const err = new Error('Invalid value');
            err.errorStatus = 400;
            err.data = errors.array();
            throw err;
        }

        if(!req.file) {
            const err = new Error('Image harus diupload');
            err.errorStatus = 422;
            err.data = errors.array();
            throw err;
        }

        // get data
        const { title, body } = req.body;
        const image = req.file.path;

        const Posting = new Blog({
            title: title,
            body: body,
            image: image,
            author: {
            uid: 1,
            name: 'aripp'
            } 
        });
        
        // insert
        await Posting.save()
            .then(result => {
            res.status(201).json({
                message: "Create Blog Post Success",
                data: result
            });
            })
            .catch(err => {
            console.error(`CreateBlogPost: ${err}`)
            next(err);
            });
    }

    static async getAllBlogPost(req, res, next) {
        await Blog.find()
            .then(result => {
                res.status(200).json({
                    message: "Success fetch blog post",
                    data: result
                })
            })
            .catch(error => {
                next(error);
            });
    }
}

export default blogController;