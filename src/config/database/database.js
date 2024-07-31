import { Sequelize } from "sequelize";
import { envs } from "../enviroments/enviroment.js";

const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully. 😊");
  } catch (err) {
    throw new Error("Error al autenticar", err);
  }
}

export async function syncUP() {
  try {
    await sequelize.sync();
  } catch (err) {
    throw new Error("Error al sincronizar", err);
  }
}

export default sequelize;
