import {z} from 'zod';

export const registerCostumerSchema = z.object({
  name: z.string(),
  salary: z.coerce.number(),
  company: z.coerce.number(),
})