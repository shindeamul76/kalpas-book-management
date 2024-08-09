import {  _BookModel as Book } from "@kalpas/utils/zod/book-zod-model";
import { z } from "zod";

export const schemaBookBaseBodyParams = Book.pick({
    id: true,
    title: true,
    author: true,
    library: true,
    borrower: true,
    coverImage: true
}).partial();


const schemaBookEditParams = z.object({
    title: z.string().optional(),
    author: z.string().uuid().optional(),
    library: z.string().uuid().optional(),
    borrower: z.string().uuid().nullable().optional(),
    coverImage: z.string().url().optional(),
});


export const schemaBookCreateParams = z.object({
    title: z.string(),
    author: z.string().uuid(),
    library: z.string().uuid(),
    borrower: z.string().uuid().nullable().optional(),
    coverImage: z.string().url(),
});

export const schemaBookEditBodyParams = schemaBookBaseBodyParams
    .merge(schemaBookEditParams)
    .omit({})
    .partial()
    .strict();

export const schemaBookCreateBodyParams = schemaBookBaseBodyParams
    .merge(schemaBookCreateParams)
    .omit({})
    .strict();

export const schemaBookReadPublic = Book.pick({
    id: true,
    title: true,
    author: true,
    library: true,
    coverImage: true
}).partial();
