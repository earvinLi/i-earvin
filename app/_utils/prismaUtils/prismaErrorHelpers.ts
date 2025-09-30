// External Dependencies
import { Prisma } from '@prisma/client';

// Todo: complete and optimize Prisma error handlings with https://www.prisma.io/docs/orm/reference/error-reference#error-codes
export const handlePrismaError = (prismaError: Prisma.PrismaClientKnownRequestError) => {
  if (prismaError.code === 'P2002') {
    console.error('Unique constraint failed on the {constraint}');
  }
};
