import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";


export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product Detail Page</h1>
            <Suspense fallback={<p>Loading Product Details...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Review Details...</p>}>
                <Reviews />
            </Suspense>
            
        </div>
    )
}