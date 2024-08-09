import { Document } from 'mongoose';
import { z } from 'zod';
import { _BookModel } from '../zod/book-zod-model';


export interface IBook extends Document {
    id: string;
    title: string;
    author: string; 
    library: string; 
    borrower: string | null;
    coverImage: string;
}

export type TBook = z.infer<typeof _BookModel>;

export type BookBaseType = {
    title: string;
    author: string;
    library: string;
    coverImage: string;
};

export type BookReqBodyType = BookBaseType & {
    borrower?: string | null;
};

export const BOOK_CREATE_SUCCESS = "Book Created Successfully";

export const BOOK_UPDATE_SUCCESS = "Book Updated Successfully";

export const BOOK_FETCH_SUCCESS = "Book Fetched Successfully";

export const BOOK_DOES_NOT_EXISTS = "Book Not Exists";

