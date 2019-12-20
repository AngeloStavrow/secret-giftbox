const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/gif/:gift", function(request, response) {
  const gift = request.params.gift !== "null" ? request.params.gift : "puppies";
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${gift}&limit=50&offset=0&rating=G&lang=en`
  )
    .then(data => data.json())
    .then(json => {
      const index = Math.floor(Math.random() * Math.floor(50));
      response
        .status(200)
        .send(JSON.stringify(json.data[index].images.original));
    });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("👂 Your app is listening on port " + listener.address().port);
});
