import { data } from "autoprefixer";
import React, { useState } from "react";

const CompanyInfo = () => {
    const [companyData, setCompanyData] = useState({});
  const url =
    "https://www.alphavantage.co/query?function=OVERVIEW&symbol=AKAM&apikey=09OMDA7K4NR4UN0A";
    //"https://www.alphavantage.co/query?function=OVERVIEW&symbol=AKAM&apikey=09OMDA7K4NR4UN0A"
  fetch(url).then((res) => {
    res.json().then((data) => {
      console.log("Hellod data", data);
      setCompanyData(data.Symbol)
    });
  });
  return <h1>{JSON.stringify(data)}</h1>;
};

export default CompanyInfo;
