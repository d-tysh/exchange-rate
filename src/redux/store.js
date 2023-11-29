import { configureStore } from "@reduxjs/toolkit";
import { currenciesReducer } from "./currencies/slice";

export const store = configureStore({
    reducer: {
        currencies: currenciesReducer
    }
})