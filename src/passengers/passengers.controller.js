import {
  validatePassenger,
  validatePartialPassengers,
} from "./passenger.schema.js";
import { PassengerService } from "./passengersService.js";

const passengerService = new PassengerService();

export const findAllPassengers = async (req, res) => {
  try {
    const passengers = await passengerService.findAllPassenger(req.body);
    return res.status(201).json(passengers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Función para crear un pasajero
export const createPassengers = async (req, res) => {
  try {
    const { hasError, errorMessage, passengerData } = validatePassenger(
      req.body
    );
    if (hasError) {
      res.status(422).json({
        status: "error",
        message: errorMessage,
      });
    }
    const passenger = await passengerService.createPassenger(passengerData);
    return res.status(201).json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Función para obtener un pasajero
export const getOnePassenger = async (req, res) => {
  try {
    const { id } = req.params;
    const passenger = await passengerService.findOnePassenger(id);
    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id: ${id} not found`,
      });
    }

    return res.status(201).json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Función para actualizar un pasajero

export const updatePassenger = async (req, res) => {
  try {
    const { errorMessage, hasError, passengerData } = validatePartialPassengers(
      req.body
    );
    if (hasError) {
      return res.status(422).json({
        status: `Error: ${errorMessage}`,
        message: `Passenger with id: ${id} not found`,
      });
    }

    // Obtener el pasajero que se va a actualizar
    const { id } = req.params;

    //Buscar el pasajero que se va a actualizar
    const passenger = await passengerService.findOnePassenger(id);
    // Validar si el pasajero existe
    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id: ${id} not found`,
      });
    }
    // En caso de que exista se procede a actualizar el pasajero
    const updatePassenger = await passengerService.updatePassenger(
      passenger,
      passengerData
    );
    // Retornamos el pasajero actualizado
    return res.json(updatePassenger);
  } catch (error) {
    return res.status(500).json({
      status: `fail, ${error} `,
      message: "¡Something went very wrong!",
    });
  }
};

// Borrar las información, utilizando la softdelete;

export const deletePassenger = async (req, res) => {
  try {
    const { id } = req.params;
    const passenger = await passengerService.findOnePassenger(id);
    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id ${id} not found`,
      });
    }

    await passengerService.deletePassenger(passenger);

    return res.status(204).json({});
  } catch (error) {
    return res.status(500).json({
      status: `fail, ${error} `,
      message: "¡Something went very wrong!",
    });
  }
};
