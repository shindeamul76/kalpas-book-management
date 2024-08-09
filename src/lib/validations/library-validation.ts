import { z } from 'zod';
import { _LibraryModel as Library } from '@kalpas/utils/zod/library-zod-model'; 

export const schemaLibraryBaseBodyParams = Library.pick({
    id: true,
    name: true,
    address: true
}).partial();

const schemaLibraryEditParams = z.object({
    name: z.string().optional(),
    address: z.string().optional()
});

export const schemaLibraryCreateParams = z.object({
    name: z.string(),
    address: z.string()
});

export const schemaLibraryEditBodyParams = schemaLibraryBaseBodyParams
    .merge(schemaLibraryEditParams)
    .omit({})
    .partial()
    .strict();

export const schemaLibraryCreateBodyParams = schemaLibraryBaseBodyParams
    .merge(schemaLibraryCreateParams)
    .omit({})
    .strict();

export const schemaLibraryReadPublic = Library.pick({
    id: true,
    name: true,
    address: true
}).partial();
