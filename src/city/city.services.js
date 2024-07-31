import City from "./city.model.js";

export class CityService {
  async createCity(data) {
    return await City.create(data);
  }
}
