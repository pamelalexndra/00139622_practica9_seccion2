import { PORT } from "./keys/keys.js";
import app from "./app.js";

const PORT = {PORT}

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);