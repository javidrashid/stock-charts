import React from "react";
import Link from "next/link";

import Footer from "components/Footers/Footer.js";

import Cookies from 'js-cookie'


import { useEffect, useState } from 'react'

import NavbarwithLogin from "components/Navbars/NavbarwithLogin";



export default function Index() {
    
    return (
    <>
      {/* <IndexNavbar fixed /> */}
      <NavbarwithLogin fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-700">
                CSS For EveryOne - A Beautifully designed CSS Course for every developer...
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
               CSS For Everyone is a one stop shop for all your CSS things. Learn How to USE CSS in React, Angular, Vue, NextJS, Nuxt or for that matter in any Web Project.
                . Track your Progress via Quizzes and Ineractive Lessons!!!
              </p>
              <div className="mt-12">
                <Link href="/cssquestions">
                <a
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started With the Quiz
                </a>
                </Link>
                <Link href="/cssquestions">
                <a
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                >
                  Learn From Udemy
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={require("../assets/img/pattern_nextjs.png")}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-gray-800 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    CSS For everyone is for EveryOne!
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Dealign with CSS has never been easy, There has been a plethora of Choices among differenrt developers, different framdworks.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        CSS and Web Performance
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Notus NextJS comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        CSS, SASS and WebPack
                      </h6>
                      <p className="mb-4 text-gray-600">
                        We will show you how to write CSS in Angular, React or Vue Apps...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">CSS in Web Frameworks</h6>
                      <p className="mb-4 text-gray-600">
                        Whether you write CSS in Angular, React or Vue. We have got you covered!!!.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Beginner?
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Are you a beginner, This course has been exclusively desifned inb such a way that you fall in love with CSS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Some of the core concepts that you will learn in this course include.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Flex Box
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Grid
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  border-box
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tailwind css
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Bootstrap
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Bulma
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  styled components
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  CSSOM
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-btn.png")}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-2.png")}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-menu.png")}
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-btn-pink.png")}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Modern CSS Concepts Used in Top JavaScript Frameworks
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                We will be explaining how to write CSS in ReactJs Web Apps, Angular, Vue, Next, Svelte and NextJS.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Whetehr you prefer Styled Componnets or CSS in JS or any other approach, This course is designed to help everyone.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  styled components
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  CSS in JS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Flex Box vs Grid
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  CSSOM
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Debugging CSS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  POSTCSS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  AutoPrefixer
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Fonts
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        

       
      </section>

      <section className="block relative z-1 bg-gray-700">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            
          </div>
        </div>
      </section>

      

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Be the first to know more about this.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Just drop in your email address below and we will keep you posted on the launch...
                
              </p>
              <div className="text-center mt-16"></div>
              <div className="w-full  px-4">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-gray-500 text-center mb-3 font-bold"></div>
            <form name="contact" method="POST" data-netlify="true"  >
            <input type="hidden" name="form-name" value="contact" />
                <div className="relative w-full mb-3"><label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password">Email</label><input type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email" name="email" /></div>
                <div className="text-center mt-6"><button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit">Notify me!</button></div>
            </form>
        </div>
    </div>
</div>

            </div>
           
          </div>
        
        </div>
      </section>
      <Footer />
    </>
  );
}
