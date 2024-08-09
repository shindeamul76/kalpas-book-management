
import { UserRole } from "@kalpas/utils/types/user-type";
import { _UserModel as UserModel } from "@kalpas/utils/zod/user-zod-model";
import { z } from "zod";


export const schemaUserBaseBodyParams = UserModel.pick({
    id: true,
    email: true,
    username: true,
    password: true,
    role: true
}).partial();



const schemaUserEditParams = z.object({
    email: z.string().email().toLowerCase().optional(),
    username: z.string().optional(),
    password: z.string().min(6).optional(),
    role: z.enum([UserRole.AUTHOR, UserRole.BORROWER])
});

export const schemaUserLoginParams = z.object({
    email: z.string().email().toLowerCase().optional(),
    username: z.string().optional(),
    password: z.string().min(6),
});

const schemaUserCreateParams = z.object({
    id: z.string().optional(),
    email: z.string().email().toLowerCase(),
    username: z.string(),
    password: z.string().min(6),
    role: z.enum([UserRole.AUTHOR, UserRole.BORROWER])
  });

  export const schemaUserEditBodyParams = schemaUserBaseBodyParams
  .merge(schemaUserEditParams)
  .omit({})
  .partial()
  .strict();

export const schemaUserCreateBodyParams = schemaUserBaseBodyParams
  .merge(schemaUserCreateParams)
  .omit({})
  .strict();

export const schemaUserLoginBodyParams = schemaUserBaseBodyParams
  .merge(schemaUserLoginParams)
  .omit({})
  .strict();


  export const schemaUserReadPublic = UserModel.pick({
    id: true,
    email: true,
    username: true,
    role: true
}).partial();
