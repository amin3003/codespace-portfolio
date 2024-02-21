import { NextResponse } from "next/server";
import connect from "../../../../db";
import Post from "../../../../models/Post";

export const GET = async (request) => {
    try {
        await connect();
    } catch (error) {
        return new NextResponse("Error in fetching posts" + error, { status: 500 })
    }
}