import { Document } from 'mongoose';
import { z } from 'zod';
import { _LibraryModel } from '../zod/library-zod-model';
import { IBook } from './book-type';



export interface ILibrary extends Document {
    id: string;
    name: string;
    address: string; 
}

export interface LibraryWithBooks extends ILibrary {
    books: IBook[];
}

export type TLibrary = z.infer<typeof _LibraryModel>;

export type LibraryBaseType = {
    name: string;
    address: string;
};

export const LIBRARY_CREATE_SUCCESS = "Library Created Successfully";

export const LIBRARY_UPDATE_SUCCESS = "Library Updated Successfully";

export const LIBRARY_FETCH_SUCCESS = "Library Fetched Successfully";

export const LIBRARY_DELETE_SUCCESS = "Library Deleted Successfully";

export const LIBRARY_DOES_NOT_EXIST = "Library Does Not Exist";

export const LIBRARY_BOOKS_FETCH_SUCCESS = "Books Retrieved Successfully for Library";


