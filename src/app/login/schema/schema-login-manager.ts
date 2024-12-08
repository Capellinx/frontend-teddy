import {z} from 'zod';

export const schemaLoginManager = z.object({
  username: z.string(),
  password: z.string()
})