import { CityService } from "./city.services.js";

const cityServices = new CityService();

export const createCity = async (req, res) => {
  try {
    const city = await cityServices.createCity(req.body);
    return res.status(201).json(city);
  } catch (err) {
    return res.status(500).json(err);
  }
};
