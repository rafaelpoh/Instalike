import express, { json, Router } from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postsroutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// function buscaPostPorId(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }

// app.get("/posts/:id", (req, res) => {
//   const index = buscaPostPorId(req.params.id);
//   res.status(200).json(posts[index]);
// });
