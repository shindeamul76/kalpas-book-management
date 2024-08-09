import { z } from 'zod';
import { UserRole } from '../types/user-type';


export const _UserModel = z.object({
  id: z.string().uuid().optional(),
  username: z.string().min(1), 
  email: z.string().email(),
  password: z.string().min(6), 
  role: z.enum([UserRole.AUTHOR, UserRole.BORROWER]), 
  });
  
  
 