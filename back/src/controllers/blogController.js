import { validationResult } from "express-validator";

class blogController {
  static async createBlogPost(req, res, next) {
    try {
      const { title, body } = req.body;

      const errors = validationResult(req);

      if(!errors.isEmpty()) {
        const err = new Error('Invalid value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
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
    } catch(error) {
      next(error);
    }
  }
}

export default blogController;