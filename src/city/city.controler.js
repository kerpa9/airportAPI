import { validateCity } from "./city.schema.js";
import { CityService } from "./city.services.js";

const cityServices = new CityService();

export const createCity = async (req, res) => {
  try {
    const { hasError, errorMessage, cityData } = validateCity(req.body);

    if (hasError) {
      return res.status(422).json({
        status: "Error",
        message: errorMessage,
      });
    }

    const city = await cityServices.createCity(cityData);
    return res.status(201).json(city);
  } catch (err) {
    return res.status(500).json(err);
  }
};
