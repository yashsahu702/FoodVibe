import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useSearchParams } from 'react-router-dom'

const ProtectedRoute = ({element}) => {
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart.length)
    return cart.length > 0 ? element : <Navigate to='/'/>
}

export default ProtectedRoute