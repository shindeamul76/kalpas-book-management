
import { ILibrary } from '@kalpas/utils/types/library-type';
import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const librarySchema: Schema<ILibrary>= new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true,
      },
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String,
        required: true 
    } 
});


export const Library = mongoose.model<ILibrary>('Library',librarySchema);
