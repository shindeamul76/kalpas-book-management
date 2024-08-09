import { Library } from "@kalpas/models/library-model";
import { ILibrary, LibraryWithBooks } from "@kalpas/utils/types/library-type";
import { Book } from "@kalpas/models/book-model"; 


export const getAllLibrariesQuery = async (): Promise<ILibrary[]> => {
    return await Library.find({});
}


export const getLibraryByIdQuery = async (id: string): Promise<LibraryWithBooks | null> => {
    return await Library.findOne({ id }).then(async (library) => {
        if (library) {
            const books = await Book.find({ library: id }).populate('borrower');
            return { ...library.toObject(), books } as LibraryWithBooks;
        }
        return null;
    });
}



export const createLibraryQuery = async (data: any): Promise<ILibrary> => {
    return await Library.create(data);
}

export const updateLibraryByIdQuery = async (id: string, data: any): Promise<ILibrary | null> => {
    return await Library.findOneAndUpdate({ id }, data, { new: true });
}


export const deleteLibraryByIdQuery = async (id: string): Promise<ILibrary | null> => {
    return await Library.findOneAndDelete({ id });
}
