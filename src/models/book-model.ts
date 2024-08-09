
import { IBook } from '@kalpas/utils/types/book-type';
import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const bookSchema: Schema<IBook>= new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true,
      },
    title: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        ref: 'User', 
        required: true 
    },
    library: { 
        type: String, 
        ref: 'Library', 
        required: true 
    },
    borrower: { 
        type: String, 
        ref: 'User', 
        default: null 
    },
    coverImage: { 
        type: String,
        required: true 
    } 
});


export const Book = mongoose.model<IBook>('Book',bookSchema);
