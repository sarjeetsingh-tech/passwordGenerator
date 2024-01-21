import { useCallback, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(8);
  const [isChars, setIsChars] = useState(false);
  const [isNums, setIsNums] = useState(false);
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);



  const generatePassword = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let modifiedStr = str;

    if (isNums) {
      modifiedStr += "1234567890";
    }

    if (isChars) {
      modifiedStr += "!@#$%^&*(){}[]?|\\/";
    }

    for (let i = 1; i <= count; i++) {
      password += modifiedStr.charAt(Math.floor(Math.random() * modifiedStr.length));
    }

    setPassword(password);
    console.log(password);
  },[isChars,isNums,setPassword]);


  useEffect(() => { generatePassword() }, [count,isChars,isNums])


  const handleCopyClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200);
    navigator.clipboard.writeText(password)
  };




  return (
    <>
    <div className=' h-screen'>
    <div className=" h-[95%] flex flex-col items-center justify-center bg-gray-100">
      <div className="text-4xl font-bold mb-8">Password Generator</div>
      <div className="w-full md:w-[80%] lg:w-[40%] p-6 bg-white rounded-lg shadow-lg">
        <div>
          <input
            type="text"
            className=" w-full lg:w-3/4 p-2 border border-gray-300 rounded mb-4"
            placeholder="Generated Password"
            value={password}
            readOnly
          />
          <button
            className={`bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded w-full lg:w-1/4 transition-transform duration-300 ease-in-out ${isClicked ? 'transform scale-90' : ''
              }`}
            onClick={handleCopyClick}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-row justify-around mt-6">
          <div className="flex items-center">
            <label htmlFor="rng" className="mr-2 font-light">
              Length:
            </label>
            <input
              id="rng"
              type="range"
              className="w-24"
              max={20}
              min={8}
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <span className="ml-2 font-light">{count}</span>
          </div>

          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
              <input type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="nums" onChange={() => { setIsNums((prev) => !prev) }}  />
              <span
                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="nums">
              Numbers
            </label>
          </div>
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
              <input type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="check" onChange={() => { setIsChars((prev) => !prev) }}  />
              <span
                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor"  strokeWidth="1">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
              Special Chars
            </label>
          </div>
        </div>
      </div>
      
    </div>
    <div className='flex justify-end mr-5 text-lg text-slate-700 font-medium'>By Sarjeet Singh</div>
    </div>
    </>
  );
}

export default App;
