"use server";
import {prisma} from "@/lib/prisma";
// import {z} from "zod";
// import {revalidatePath, revalidateTag} from "next/cache";

export async function getComments() {
  try {
    const data = await prisma.comments.findMany();

    if (data) return {data: data, error: null};
  } catch (error) {
    return {data: null, error: error};
  }
}
