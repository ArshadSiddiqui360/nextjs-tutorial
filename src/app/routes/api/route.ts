import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

// export async function GET() {
//     return new Response("API Data");
// }

export async function GET( request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    cookies().set("resutPerPage", "20");
    console.log(cookies().get("resutPerPage"));

    const theme = request.cookies.get("theme");
    console.log(theme);

    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));

    // return new Response("API Data");
    return new Response("<h1>API Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}