import {configureStore} from "@reduxjs/toolkit"
import sliceReducer from '../Slices/sliceFile'
export const store=configureStore({
    reducer:{
        counter:sliceReducer
    }
})