import React from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrnecy = "usd",
  amountDisabled = false,
  currencyDisabled=false,
  className=''
}) {
  return <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block"> <input type="number" className=" outline-none w-full bg-transparent py-1.5" /></label>
    </div>
  </div>;
}
