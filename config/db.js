if (process.env.NODE_ENV == "production") {
    module.exports = { mongoURI:"mongodb+srv://carolbraulino:q6rdi8x3OeEki9d3@cluster0.qstld.mongodb.net/ProjetoSpotify?retryWrites=true&w=majority"}
} else {
    module.exports = { mongoURI: "mongodb://localhost/projetospotify"}
}