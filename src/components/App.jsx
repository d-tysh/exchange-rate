import { useDispatch, useSelector } from "react-redux";
import { Converter } from "./Converter/Converter";
import { Header } from "./Header/Header";
import { useState } from "react";
import { fetchCurrencies } from "redux/currencies/actions";
import { selectCurrenciesList, selectIsError, selectIsLoading } from "redux/currencies/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const currenciesList = useSelector(selectCurrenciesList);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useState(() => {
    dispatch(fetchCurrencies());
  }, [])

  const getCurrencyValue = (currency) => {
    const currValue = currenciesList.find(item => item.cc === currency.toUpperCase());
    return currValue ? currValue.rate.toFixed(2) : null;
  }

  return (
    <div className="flex items-center flex-col w-[400px] mx-auto mt-4">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Sorry, something went wrong...</div>}
      {
        !isLoading && !isError && currenciesList &&
        <>
          <Header currenciesList={currenciesList} getCurrencyValue={getCurrencyValue} />
          <Converter currenciesList={currenciesList} getCurrencyValue={getCurrencyValue} />
        </>
      }
    </div>
  );
};
