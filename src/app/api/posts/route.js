import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connect from "@/utils/db";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();

    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse("Database connection error", { status: 500 });
  }
};
