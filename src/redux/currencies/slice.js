const { createSlice } = require("@reduxjs/toolkit")
const { fetchCurrencies } = require("./actions")

const currenciesInitState = {
    currenciesList: [],
    isLoading: false,
    isError: null
}

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: currenciesInitState,
    extraReducers: builder => {
        builder
            .addCase(fetchCurrencies.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchCurrencies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currenciesList = action.payload;
            })
            .addCase(fetchCurrencies.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
    }
})

export const currenciesReducer = currenciesSlice.reducer;