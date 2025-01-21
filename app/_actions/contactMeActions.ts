'use server';

// External Dependencies
import { revalidatePath } from 'next/cache';
import { Prisma, ContactMeMessage as ContactMeMessageTypes } from '@prisma/client';

// Internal Dependencies
import { prisma } from '@/utilities/prismaUtils/prismaClient';

export type DataToCreateContactMeMessageTypes = Omit<ContactMeMessageTypes, 'id' | 'createdAt'>;

export const createContactMeMessage = async (dataToCreateContactMeMessage: DataToCreateContactMeMessageTypes) => {
  const { contactInfo, contactMessage } = dataToCreateContactMeMessage;

  try {
    await prisma.contactMeMessage.create({
      data: {
        contactInfo,
        contactMessage,
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
