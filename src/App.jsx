import { DollarSign, UserCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [Custom, setCustom] = useState("");
  const [NumberPPl, setNumberPPl] = useState("");
  const [Selected, setSelected] = useState(null);

  const options = ["5", "15", "20", "25", "50"];

const handlebutton= (item)=>{
  setCustom("");
  setSelected(item)

}

const handleinput= (e)=>{
  const value= Number(e.target.value);
  setCustom(value)
  setSelected(value || null)
}
const tipTotal = (bill * Selected) / 100 || 0;

const tipPerPerson = NumberPPl > 0
  ? tipTotal / NumberPPl
  : 0;

const totalPerPerson = NumberPPl > 0
  ? ((bill + tipTotal) / NumberPPl).toFixed(2)
  : 0;

  const handleReset = () => {
  setBill(0);
  setSelected(0);
  setNumberPPl(0);
};
  return (
    <>
      <section className="min-h-screen w-full bgColr p-4 flex items-center font-mono">
        <div
          id="parentCard"
          className="mx-auto w-4xl bg-white p-6 h-fit rounded-xl shadow-xl drop-shadow-xl "
        >
          <div id="card" className="flex gap-4 flex-col md:flex-row">
            <div id="form" className="w-full">
              <label className="block text-gray-500 font-semibold mb-0.5 ">
                Bill
              </label>
              <div className="flex items-center gap-x-4 justify-between w-full p-1 rounded bg-gray-200 border-2 border-gray-200  hover:border-green-600 mb-10">
                <DollarSign
                  className="opacity-70 text-green-950 font-bold"
                  size={19}
                />
                <input
               
                  value={bill}
                  placeholder="00"
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="outline-0  p-1 text-xl text-green-900 font-bold text-end"
                />
              </div>

              <label className="block text-gray-500 font-semibold mb-2 ">
                Select Tip %
              </label>
              <div className="grid grid-rows-2 grid-cols-3  gap-4 mb-10 ">
                {/* predefined amounts */}

                {options &&
                  options.map((item) => (
                    <button
                      onClick={() => handlebutton(item)}
                      className={`bg-emerald-900 cursor-pointer customfont  rounded font-semibold text-xl p-2 hover:bg-green-300 hover:text-black 
                        ${Selected===item? "text-black bg-green-300":"text-white "}
                         `}
                    >
                      {item}%
                    </button>
                  ))}

                {/* custom input */}
                <input
                  type="text"
                  value={Custom}
                  placeholder="Custom"
                  onChange={(e) => handleinput(e)}
                  className=" p-2 text-xl text-end text-green-900 font-semibold outline-green-400"
                />
              </div>

              <label className="block text-gray-500 font-semibold mb-0.5 ">
                Number of people
              </label>
              <div className="flex items-center gap-x-4 justify-between w-full p-1 rounded bg-gray-200 border-2 border-gray-200  hover:border-green-600 mb-10">
                <UserCircle
                  className="opacity-70 text-green-950 font-bold"
                  size={19}
                />
                <input
                  type="text"
                  value={NumberPPl}
                  placeholder="0"
                  onChange={(e) => setNumberPPl(Number(e.target.value))}
                  className="outline-0  p-1 text-xl text-green-900 font-bold text-end"
                />
              </div>
            </div>

            <div
              id="displaySummery"
              className="bg-emerald-900 w-full rounded-xl p-4 "
            >
              <div className="text-white flex flex-col gap-y-5 h-80 py-5 ">
                <div className="flex w-full gap-10 justify-between">
                  <h2>
                    Tip Amount <br />{" "}
                    <span className="opacity-45 text-xs">/ person</span>
                  </h2>
                  <div className="flex items-center text-emerald-200 font-bold   ">
                    <DollarSign className="opacity-70 text-3xl  font-bold" />
                    <p className="text-3xl">{ tipPerPerson===0?"0.00":tipPerPerson}</p>
                  </div>
                </div>

                <div className="flex w-full gap-10 justify-between">
                  <h2>
                    Total <br />{" "}
                    <span className="opacity-45 text-xs">/ person</span>
                  </h2>
                  <div className="flex items-center text-emerald-200 font-bold  ">
                    <DollarSign className="opacity-70 text-3xl  font-bold" />
                    <p className="text-3xl">{ totalPerPerson===0?"0.00":totalPerPerson}</p>
                  </div>
                </div>

                <button
                onClick={()=> handleReset()}
                 className="w-full text-black  bg-emerald-300 p-2 rounded-xl mt-auto font-bold text-xl opacity-65 cursor-pointer hover:opacity-80">
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
