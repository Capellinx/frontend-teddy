import {z} from 'zod';

export const updateCostumerSchema = z.object({
  name: z.string().optional(),
  salary: z.number().optional(),
  company: z.number().optional(),
})