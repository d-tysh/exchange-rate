import { useEffect, useState } from "react";

export const Converter = ({getCurrencyValue}) => {
    const [firstCurrency, setFirstCurrency] = useState('UAH');
    const [secondCurrency, setSecondCurrency] = useState('USD');
    const [firstAmount, setFirstAmount] = useState(0);
    const [secondAmount, setSecondAmount] = useState(0);

    useEffect(() => {
        setSecondAmount((firstAmount * (getCurrencyValue(firstCurrency) || 1) / (getCurrencyValue(secondCurrency) || 1)).toFixed(2));
    }, [firstAmount, firstCurrency, getCurrencyValue, secondCurrency])

    const handleFirstAmount = (e) => {
        let { value } = e.target;

        if (/^0+/.test(value)) {
            value = value.replace(/^0+/, '');
        }

        setFirstAmount(value || 0);
        const currencyRatio = ((getCurrencyValue(firstCurrency) || 1) / (getCurrencyValue(secondCurrency) || 1));
        setSecondAmount((value * currencyRatio).toFixed(2));
    }

    return (
        <div className="border w-[100%] flex flex-col items-center gap-4 py-4">
            <div>
                <input 
                    type="number"
                    min='0'
                    onChange={handleFirstAmount}
                    value={firstAmount} 
                    className="border mr-2 px-2 py-1 hover:border-gray-500"
                />
                <select 
                    name="firstCurrencySelect"
                    min='0'
                    value={firstCurrency}
                    onChange={(e) => setFirstCurrency(e.target.value)}
                    className="border mr-2 px-2 py-1 hover:border-gray-500 cursor-pointer bg-slate-300"
                >
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div>
                <input 
                    type="number"
                    value={secondAmount} 
                    className="border mr-2 px-2 py-1 hover:border-gray-500"
                    readOnly
                />
                <select 
                    name="secondCurrencySelect"
                    value={secondCurrency}
                    onChange={(e) => setSecondCurrency(e.target.value)}
                    className="border mr-2 px-2 py-1 hover:border-gray-500 cursor-pointer bg-slate-300"
                >
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        </div>
    )
}
