export const dynamic = "force-dynamic"; 

export async function GET() {
    return Response.json({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    });
}

// https://dummyjson.com/posts?skip=5&limit=10

