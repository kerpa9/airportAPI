import z from "zod";
import { extractValidationData } from "../common/utils/extractErrorData.js";
export const passengerSchema = z.object({
  nroPassport: z.string().min(8).max(10),
  name: z.string().min(2).max(100),
  surname: z.string().min(2).max(100),
  birthdate: z.string({
    invalid_type_error: "Birthdate must be a correct format",
    required_error: "Birthdate is require",
  }),

  gender: z.enum(["MALE", "FEMALE", "PREFER NOT TO SAY"]),
  email: z.string().email({ required_error: "email is require" }),
  celphone: z.string().min(5).max(25),
  createdBy: z.number(),
});

export function validatePassenger(data) {
  const result = passengerSchema.safeParse(data);

  const {
    hasError,
    errorMessage,
    data: passengerData,
  } = extractValidationData(result);
  return {
    hasError,
    errorMessage,
    passengerData,
  };
}

export function validatePartialPassengers(data) {
  const result = passengerSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessage,
    data: passengerData,
  } = extractValidationData(result);
  return {
    hasError,
    errorMessage,
    passengerData,
  };
}
