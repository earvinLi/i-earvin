'use server';

// External Dependencies
import { revalidatePath } from 'next/cache';
import { Prisma, PostComment as PostCommentTypes } from '@prisma/client';

// Internal Dependencies
import { prisma } from '@/utils/prismaUtils/prismaClient';

export type DataToCreatePostCommentTypes = Omit<PostCommentTypes, 'id' | 'createdAt'>;

export const createPostComment = async (dataToCreatePostComment: DataToCreatePostCommentTypes) => {
  const { postId, commenter, commentContent } = dataToCreatePostComment;

  try {
    await prisma.postComment.create({
      data: {
        postId,
        commenter,
        commentContent,
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

  revalidatePath(`/posts/${postId}`);
};
