import React from "react";
import { useEffect, useState } from "react";

import Link from "next/link";
import netlifyIdentity from "netlify-identity-widget";
// components

export default function NavbarwithLogin(props) {
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-600 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                CSS For Everyone
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (false ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
           
          </div>
        </div>
      </nav>
    </>
  );
}
