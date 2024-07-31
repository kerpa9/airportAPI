import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Passenger = sequelize.define("passenger", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: "passenger_id",
  },

  nroPassport: {
    type: DataTypes.BIGINT,
    unique: true,
    allowNull: false,
    field: "nro_passport",
  },

  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  surname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  gender: {
    type: DataTypes.ENUM("FEMALE", "MALE", "PREFER NOT TO SAY"),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },

  celphone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "created_by",
  },

  photo: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "sinFoto",
  },

  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default Passenger;
