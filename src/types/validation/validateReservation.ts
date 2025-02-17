import { z } from "zod";

export const validateSchemaReservation = z.object({
    id_table: z.string(),
    reservation_date: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), "Invalid date format")
      .transform((val) => new Date(val)),
    reservation_time: z
      .string()
      .regex(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/, "Invalid time format"),
    guest_count: z.string(),
  });
  
export type schemaReservation = z.infer<typeof validateSchemaReservation>;