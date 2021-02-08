import React , {useState} from "react";
export default function CompanyList({  color }) {
    const [companyname, setCompanyName] = useState('AKAM');
    const [companylist, setCompanyList] = useState([]);
    const url =`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyname}&apikey=process.env.NEXT_PUBLIC_KEY`;

    const handleChange = (e) => {
        setCompanyName(e.target.value)
    }
    const updateChart = (p) => {
        setCompanyName(p)
    }
    React.useEffect(() => {
        fetch(url).then((res) => { 
            const cList = [];
            res.json().then((data) => {
              console.log("list of companies", data.bestMatches);
                if(data.bestMatches.length > 0) {
                    data.bestMatches.forEach(elem => {
                        debugger;
                       cList.push(Object.values(elem))
                        
                     })
                }
                
             });
             setCompanyList(cList);
             console.log('so cList is', cList);
             console.log('so companylist is', companylist);
          });
    }, [])

  return (
    <>
              <div className="px-4 mx-auto">
                <div className="flex flex-wrap">
                  <div className=" px-4 flex-1">
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Small
                    </button>
                    <input type="text"  style={{"border" : "1px solid red"}}/>
                  
                  </div>

                  <h1>test start</h1>
                  <div id="app" className="flex justify-center mt-12">
    <div>
      <div className="w-full relative">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700 sr-only"
        >
          Email
        </label>
        <div
          className="mt-1 relative border border-gray-300 overflow-hidden rounded-md shadow-sm"
        >
          <input
            id="email"
            className="w-full px-3 py-3"
            autoComplete="off"
            placeholder="you@example.com"
            onChange = {(e) => handleChange(e)} 
          />
        </div>
        <div
          className="absolute w-full z-50 bg-white border border-gray-300 mt-1 max-height-48 overflow-hidden overflow-y-scroll rounded-md shadow-md"
        >
          <ul className="py-1">
            <li
              className="px-3 py-2 cursor-pointer hover:bg-gray-200"
            >
               {companylist.map(c => (
                       <p key={c[0]} onClick={updateChart(c)}>{c[1]}</p>
                   ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


                  <h1> test end</h1>
                 </div>
              </div>

    </>
  );
}


