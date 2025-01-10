'use server';

// External Dependencies
import { revalidatePath } from 'next/cache';
import { Prisma } from '@prisma/client';

// Internal Dependencies
import { prisma } from '@/utilities/prismaUtils/prismaClient';

export const createContactMeMessage = async (contactInfo: string, message: string) => {
  try {
    await prisma.contactMeMessage.create({
      data: {
        contactInfo,
        message,
        // author: {
        //   connect: {
        //     email: '',
        // },
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Todo: complete and optimize Prisma error handlings with https://www.prisma.io/docs/orm/reference/error-reference#error-codes
      if (error.code === 'P2002') {
        console.error('Unique constraint failed on the {constraint}');
      }
    }
  }

  revalidatePath('/posts/contact');
};
