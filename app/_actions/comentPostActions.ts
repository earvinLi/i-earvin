'use server';

// External Dependencies
import { revalidatePath } from 'next/cache';
import { Prisma, PostComment as PostCommentTypes } from '@prisma/client';

// Internal Dependencies
import { prisma } from '@/utils/prismaUtils/prismaClient';
import { handlePrismaError } from '@/utils/prismaUtils/prismaErrorHelpers';

type DataToCreatePostComment = Omit<PostCommentTypes, 'id' | 'createdAt'>;

export const createPostComment = async (dataToCreatePostComment: DataToCreatePostComment) => {
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) handlePrismaError(error);
  }

  revalidatePath(`/posts/${postId}`);
};

type DataToDeletePostComment = { postCommentId: string; postId: string };

export const deletePostComment = async (dataToDeletePostComment: DataToDeletePostComment) => {
  const { postCommentId, postId } = dataToDeletePostComment;

  try {
    await prisma.postComment.delete({
      where: { id: postCommentId },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) handlePrismaError(error);
  }

  revalidatePath(`/posts/${postId}`);
};
