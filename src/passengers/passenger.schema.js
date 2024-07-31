import z from "zod";
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

export const extractValidationData = (resultValidation) => {
  let errorMessage;
  let data;
  const hasError = !resultValidation.success;

  if (hasError) errorMessage = JSON.parse(resultValidation.error.message);

  if (!hasError) data = resultValidation.data;

  return {
    hasError,
    errorMessage,
    data,
  };
};
