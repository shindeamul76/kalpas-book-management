import { z } from "zod";


export const _BookModel = z.object({
    id: z.string().uuid().optional(),
    title: z.string().min(1),
    author: z.string().uuid(), 
    library: z.string().uuid(), 
    borrower: z.string().uuid().nullable(), 
    coverImage: z.string().url(),
});