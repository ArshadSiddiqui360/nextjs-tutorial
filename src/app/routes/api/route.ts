import { type NextRequest } from "next/server";
import { headers } from "next/headers";

// export async function GET() {
//     return new Response("API Data");
// }

export async function GET( request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));

    // return new Response("API Data");
    return new Response("<h1>API Data</h1>", {
        headers: {
            "content-type": "text/html",
        }
    });
}