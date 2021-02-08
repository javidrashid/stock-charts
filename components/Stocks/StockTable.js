import React , {useState} from "react";
import PropTypes from "prop-types";

// components
export default function StockTable({ companyname, color }) {
    //const staticData = staticData
    const [companyData, setCompanyData] = useState({});
    const url =`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companyname}&apikey=process.env.NEXT_PUBLIC_APIKEY`;
    //const url = testdata
    React.useEffect(() => {
        fetch(url).then((res) => {
            res.json().then((data) => {
              console.log("Hellod data", data['50DayMovingAverage']);
              setCompanyData(data)
            });
          });
    }, [])

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-gray-800 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                {companyData.Name}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Company Parameter
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Value
                </th>
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
             
              {
                Object.entries(companyData).map(([key, val]) => (
                <tr>
                    <th  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">{key}</th>
                    <td className="w-half border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                        {val}
                    </td>
                </tr>
                )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

StockTable.defaultProps = {
  color: "light",
  companyname : "AAPL"
};

StockTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
