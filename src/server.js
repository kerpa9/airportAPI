import { envs } from "./config/enviroments/enviroment.js";
import app from "./app.js";
import { authenticate, syncUP } from "./config/database/database.js";

async function main() {
  try {
    await authenticate();
    await syncUP();
  } catch (err) {
    console.error(err);
  }
}

main();

app.listen(envs.PORT, () => {
  console.log(`Server on port 😂  localhost:${envs.PORT}`);
});
