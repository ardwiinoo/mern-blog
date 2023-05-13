# **Standar API**

[METHOD] : {root.api}/{version}/{grouping}/{endpoint}

**SAMPLE:**

[POST] : <http://mern-api.ardwiinoo.my.id/v1/auth/login>

---

## **Standar Status Response**

| CODE   |      STATUS      |  DESC |
|----------|:-------------:|------:|
| 200 | OK | Call API Success |
| 201 | CREATED |  Post Success |
| 400 | BAD REQUEST | Error on Client Side (Bisa input yang salah dll) |
| 401 | UNAUTHORIZED | User not authorized to the request |
| 403 | FORBIDDEN | User not allowed to access |
| 404 | NOT FOUND | Request Endpoint Not Found |
| 500 | INTERNAL SERVER ERROR | Error on Server Side |
| 502 | BAD GATEWAY | Invalid Response From Another Request |

---

## **GROUP: Authentication**

[1] - Register

{root.api}/{version}/auth/register

req:

```json
{
    "name": "Testing",
    "email": "test@gmail.com",
    "password": "12345678"
}
```

res:

```json
    "message": "Register Success",
    "data": {
        "id": 1,
        "name": "Testing",
        "email": "test@gmail.com",
        "password": "12345678"
    }
```

[2] - Login

---

## **GROUP: Blog**

[1] - Create Blog Post

[POST] : {root.api}/{version}/blog/post

req:

```json
{
    "title": "Title Blog",
    "image": "imageFile.png",
    "body": "Lorem ipsum dolor sir amet..."
}
```

res:

```json
{
    "message": "Create Blog Post Success",
    "data": {
        "post_id": 1,
        "title": "Title Blog",
        "image": "imageFile.png",
        "body": "Lorem ipsum dolor sir amet...",
        "created_at": "12/06/2023",
        "author": {
            "uid": 1,
            "name": "Testing"
        }
    }
}
```

err-response:

```js
    201 --> Blog Post Berhasil Dibuat
    400 --> Input yang anda masukkan tidak valid
```

[2] - Get Blog Post

[3] - Update Blog Post

[4] - Delete Blog Post
