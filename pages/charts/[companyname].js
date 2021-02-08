import React from "react";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Navbar from "components/Navbars/IndexNavbar.js";

import Link from "next/link";
import StockTable from "components/Stocks/StockTable";
import CompanyList from "components/Stocks/CompanyList";

const Stock = dynamic(import("components/Stocks/Stock.js"), {
  ssr: false,
});

const Index = () => {
  const router = useRouter();
  const pid = router.query;
  console.log("In URL", pid);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              {/*<CompanyList /> */}

              <div className="px-6">
                <div className="text-center mt-12"></div>

                <Stock companyname={pid.companyname}></Stock>
                <StockTable companyname={pid.companyname} color="dark" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
