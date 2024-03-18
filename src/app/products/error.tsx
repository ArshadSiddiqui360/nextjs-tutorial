"use client";

// export default function ErrorBoundary( { error }: { error : Error } ) {
//     return (
//         // <div>Error in Review-ID</div>
//         <div>{error.message}</div>
//     ) 
// }

export default function ErrorBoundary(
    {
        error, reset,
    }: {
            error : Error;
            reset: () => void;
    } ) {

    return (
        // <div>Error in Review-ID</div>
        <div>
            {error.message}
            <button onClick={reset}>Try Again</button>
        </div>
    ) 
}