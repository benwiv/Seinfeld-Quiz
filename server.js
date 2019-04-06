const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({extended:true}));

const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.use("/api",apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});