import React from 'react'

const product = {
    id: 1,
    title: "Apple Watch Series 7 GPS",
    price: 599,
    image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg"
}

function ProductCard({ product }) {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">

            <img className="p-8 rounded-t-lg" src={product.image} alt="product" />

            <div className="px-5 pb-5">
                
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.title}</h5>
                
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <svg key={index} className={`w-4 h-4 ${index < 4 ? 'text-yellow-300' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">5.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

function Products() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {Array.from({ length: 10 }).map((_, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    )
}

export default Products
