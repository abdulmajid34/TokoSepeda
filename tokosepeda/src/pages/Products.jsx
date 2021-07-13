import React from 'react'
import { useSelector } from 'react-redux'

function Products() {
    const products = useSelector(state => state.products)
    console.log(products, 'HASIL DATA NYA');

    return (
        <div>
            <p>{JSON.stringify(products, null, 2)}</p>
        </div>
    )
}

export default Products
