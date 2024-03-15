import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);

  const options = Object.keys(CurrencyInfo); //to extract all the keys and store them in a variable

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593672715438-d88a70629abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundPosition:'right',
          backgroundSize:'50% auto',
          backgroundRepeat:'no-repeat',
        }}
      >
        <div className="w-full flex justify-center" >
          <div
            className="w-full max-w-md mx-auto border border-gray-60
        rounded-lg p-5 backdrop-blur-sm bg-white/30"
            style={{ width: 'calc(50% - 1rem)' }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault(); //it prevents the form to get submitted on any url or any address and instead execute the convert() line called below
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => {
                    if(amount < 0){
                      setAmount(0);
                    }
                    else{
                      setAmount(amount)}
                    }
                  }
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5 mb-8">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -transalte-y-1/2
              border-2 border-white rounded-md bg-blue-600 text-white px-2"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="w-1/2 h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundPosition: 'left',
          backgroundSize: '50% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Add some content here if needed */}
      </div>
    </>
  );
}

export default App;
