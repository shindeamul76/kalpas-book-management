import bcrypt from 'bcryptjs'

export const matchPassword = async (password: string, existingPassword: string): Promise<Boolean> => {
    return await bcrypt.compare(password, existingPassword);
}