import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://bank.gov.ua/NBUStatService/v1';

export const fetchCurrencies = createAsyncThunk(
    'currencies/fetchCurrencies',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/statdirectory/exchange?json');
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)