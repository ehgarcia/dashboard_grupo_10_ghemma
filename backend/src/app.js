const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes.js");


app.use(userRoutes)


app.use("/api", userRoutes);

app.listen('4000', () => console.log('Servidor corriendo en el puerto 4000'))