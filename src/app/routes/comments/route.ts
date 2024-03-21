import { type NextRequest } from "next/server";
import { comments } from "./data";

export async function GET( request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter( (comment) => comment.text.includes(query)) : comments;

    // return Response.json(comments);
    return Response.json(filteredComments);
}

// Post Method
export async function POST( request: Request ) {

    const comment = await request.json();

    const newComments = {
        id: comments.length + 1,
        text: comment.text
    }

    comments.push(newComments);

    return new Response(JSON.stringify(newComments), {
        headers: {
            "content-type": "application/json",
        },
        status: 201,
    });
}