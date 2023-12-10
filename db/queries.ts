"use server";
import {z} from "zod";
import {revalidatePath} from "next/cache";

import {prisma} from "@/lib/prisma";

export async function getComments() {
  try {
    const data = await prisma.comments.findMany();

    if (data) return {data: data, error: null};
  } catch (error) {
    return {data: null, error: error};
  }
}

export async function addComment(prevState: any, formData: FormData) {
  const schema = z.object({
    comment: z.string().min(1),
    username: z.string().min(1),
  });

  const parse = schema.safeParse({
    comment: formData.get("comment"),
    username: formData.get("username"),
  });

  if (!parse.success) {
    return {message: "Failed to create product"};
  }

  const productData = parse.data;

  try {
    await prisma.comments.create({
      data: {
        comment: productData.comment,
        username: productData.username,
        timeAgo: new Date(),
      },
    });
    revalidatePath("/public");

    return {message: `Added todo ${productData.comment}`};
  } catch (e) {
    return {message: "Failed to create todo"};
  }
}
