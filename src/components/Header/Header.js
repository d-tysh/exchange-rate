export const Header = ({getCurrencyValue}) => {
    return (
        <div className="w-[100%] flex justify-between text-white bg-blue-500 py-2 px-5 h-fit text-base">
            <p>Exchange rate</p>
            <ul className="flex gap-4">
                <li>USD: {getCurrencyValue('usd')}</li>
                <li>EUR: {getCurrencyValue('eur')}</li>
            </ul>
        </div>
    )
}