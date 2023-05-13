import { validationResult } from "express-validator";

class blogController {
  static async createBlogPost(req, res, next) {
    const { title, body } = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      console.log('err: ', errors)
        return res.status(400).json({
          message: "Request Error",
          data: null
        })
    }

    const result = {
      message: "Create Blog Post Success",
      data: {
        post_id: 1,
        title: title,
        // image: "imageFile.png",
        body: body,
        created_at: "12/06/2020",
        author: {
          uid: 1,
          name: "Testing",
        },
      },
    };
    res.status(201).json(result);
  }
}

export default blogController;