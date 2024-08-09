import { Book } from "@kalpas/models/book-model";
import { IBook } from "@kalpas/utils/types/book-type";


export const getAllBooksQuery = async (): Promise<IBook[]> => {
    return await Book.find({}).populate('author').populate('library').populate('borrower');
}


export const getBookByIdQuery = async (id: string): Promise<IBook | null> => {
    return await Book.findOne({ id }).populate('author').populate('library').populate('borrower');
}


export const createBookQuery = async (data: any): Promise<IBook> => {
    return await Book.create(data);
}


export const updateBookByIdQuery = async (id: string, data: any): Promise<IBook | null> => {
    return await Book.findOneAndUpdate({ id }, data, { new: true }).populate('author').populate('library').populate('borrower');
}


export const deleteBookByIdQuery = async (id: string): Promise<IBook | null> => {
    return await Book.findOneAndDelete({ id }).populate('author').populate('library').populate('borrower');
}
