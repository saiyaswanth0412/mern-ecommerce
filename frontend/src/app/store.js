import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from '../features/auth/AuthSlice'
import ProductSlice from '../features/products/ProductSlice'
import UserSlice from '../features/user/UserSlice'
import BrandSlice from '../features/brands/BrandSlice'

export const store=configureStore({
    reducer:{
        AuthSlice,
        ProductSlice,
        UserSlice,
        BrandSlice,
    }
})