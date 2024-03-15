import { useId } from "react"; //not necessary to use this hook, this is used to optimise ur code
import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], //giving a default array so that if no currency options is available we have a default array to loop through
  selectCurrency = "usd", //the currency selected from thr drop down list, selecting "usd" as default selected value
  amountDisable = false, //amountDisable false means user can  change amount (not a necessary varible)
  currencyDisable = false,
  className = "", //to use any user required css
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-red-300 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } //if change in amount exists and converting the target.value to number bcz js considers it as a string
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-orange-500 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
         // disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
