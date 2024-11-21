import express, { json } from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
  {
    id: 1,
    descricao: "Foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato brincando com bola de lã",
    imagem: "https://placekitten.com/400/300",
  },
  {
    id: 3,
    descricao: "Gatinho dormindo em uma caixa",
    imagem: "https://placekitten.com/200/200",
  },
  {
    id: 4,
    descricao: "Gato preto em uma noite de lua cheia",
    imagem: "https://source.unsplash.com/random/400x300/?blackcat,night",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscaPostPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })

}

app.get("/posts/:id", (req, res) => {
    const index = buscaPostPorId(req.params.id);
    res.status(200).json(posts[index]);
  });