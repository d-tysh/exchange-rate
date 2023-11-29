# Currency Converter

## Description

This project is a currency converter that provides real-time exchange rates between selected currencies. It consists of two main components: a header displaying the current exchange rates, and a conversion component allowing users to convert between different currencies.

### Header with Exchange Rates

The header section prominently displays the up-to-date exchange rates for USD (US Dollar) and EUR (Euro) in relation to UAH (Ukrainian Hryvnia). The exchange rates are fetched dynamically from any public API, ensuring accuracy and reliability.

### Currency Converter

The conversion component do currency conversion with a user-friendly interface. It includes:

- Separate input and select elements for the first and second currencies.
- The first currency input and select allow users to specify the amount to be converted and the currency to convert from.
- The second currency input and select provide options for the target currency and automatically update the converted amount when the user inputs a value or changes the currency.

Conversion is bidirectional, meaning changes in either the first or second currency trigger an immediate recalculation in the opposite direction. Furthermore, switching currencies in the select dropdowns updates the conversion values accordingly.

Check out the live project [d-tysh.github.io/exchange-rate](https://d-tysh.github.io/exchange-rate/).