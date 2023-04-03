class blogController {
  static async createBlogPost(req, res, next) {
    const { title, body } = req.body;

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
