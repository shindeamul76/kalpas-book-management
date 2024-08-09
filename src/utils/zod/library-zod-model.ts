import { z } from "zod";


export const _LibraryModel = z.object({
    id: z.string().uuid().optional(),
    name: z.string().min(1),
    address: z.string().uuid(), 
});