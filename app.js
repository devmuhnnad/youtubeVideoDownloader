const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const { getVideoFormats } = require("./worker");

app.post("/youtube", async (req, res) => {
  const videoLink = req.body.link;

  if (!videoLink) {
    res.json({ success: false, message: "Bad Request" });

    return;
  }

  const formats = await getVideoFormats(videoLink);

  if (formats.length === 0) {
    res.json({ success: false, message: "Failed Parsing the link" });
    return;
  }

  res.json({ success: true, formats });
});

app.use(express.static("public"));

app.listen(process.env.PORT || 80, () => {
  console.log("SERVER STARTED");
});
