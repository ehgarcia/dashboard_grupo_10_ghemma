const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.routes.js");
const productsRoutes = require("./routes/products.routes.js")


app.use(usersRoutes)


app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);

app.listen('4000', () => console.log('Servidor corriendo en el puerto 4000'))