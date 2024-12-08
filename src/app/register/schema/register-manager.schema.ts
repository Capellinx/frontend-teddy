import {z} from 'zod';

export const registerManagerSchema = z.object({
  name: z.string({ required_error: "Nome é obrigatório"}),
  password: z.string({ required_error: "Senha é obrigatória"}),
})

export type TRegisterManager = z.infer<typeof registerManagerSchema>