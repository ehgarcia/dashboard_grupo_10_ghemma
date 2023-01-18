const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.routes.js");
const productsRoutes = require("./routes/products.routes.js")
const categorysRoutes = require('./routes/categorysRoutes')


app.use(usersRoutes)


app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.use('/api/categorys', categorysRoutes)

app.listen('3050', () => console.log('Servidor corriendo en el puerto 3050'))