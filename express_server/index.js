import express from "express";
import axios from "axios";

const app = express();
const port = 6969;

app.get("/api/get_privacydata", async (req, res) => {
  const fastapi_base_url = "http://127.0.0.1:8000/fastapi";

  try {
    const response = await axios.post(`${fastapi_base_url}/getsummary`, {
      sitename: "Reddit",
    });
    console.log(response);
    res.json(response.data);


  } catch (error) {
    console.error("Error communicating with FastAPI:", error.message);
    res.status(500).send({ error: "Failed to fetch summary from FastAPI" });
  }
});

app.listen(port, () => {
  console.log(`listning on port ${port}`);
});
