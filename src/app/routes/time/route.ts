export async function GET() {
    return Response.json({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    });
}