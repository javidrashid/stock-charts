import Link from "next/link";
import { useRouter } from 'next/router'
import NavbarwithLogin from "components/Navbars/NavbarwithLogin";
import Footer from "components/Footers/Footer.js";

import Cookies from 'js-cookie'


const QuestionPage = ()  => { 
    const router = useRouter()
    const { pid } = router.query;
    const submission = {
      results : []
    }

    const endQuiz = (e) => {
      console.log('localStorage p3', localStorage.answers);
    }

    const setAnswer = (e) => { 
      localStorage.setItem('answers', JSON.stringify(Object.assign({}, JSON.parse(localStorage.getItem('answers')) , {'q3' : e.target.value})));
   }

    return (
        <>
         <NavbarwithLogin fixed />
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
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    
                    <i className="fab fa-css3-alt fa-css"></i>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                    onClick={(e) => endQuiz(e)}
                      className="bg-gray-800 active:bg-red-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      End Quiz
                     
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">

                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Full form of CSS is?
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  displays, fonts, border-box
                </div>
                
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center text-left">
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option1" value="option1" onChange={(e) => setAnswer(e)}/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" htmlFor="option1">
                      CSS is Cascaded style sheets.
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option2" value="option2" onChange={(e) => setAnswer(e)}/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" htmlFor="option2">
                      CSS is cascading style sheets
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option3" value="option3" onChange={(e) => setAnswer(e)}/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" htmlFor="option3">
                      CSS is cascaded styles
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option4" value="option4" onChange={(e) => setAnswer(e)}/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" htmlFor="option4">
                      CSS is css
                    </label>
                    
                  </div>
                </div>
                {/* <div className="w-full px-4 lg:order-3 lg:text-right lg:self-center flex justify-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-gray-800 active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Previous
                    </button>
                  </div>
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-gray-800 active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <Link href={`question/${pid}`}> Next </Link>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
        </div>
            </div>
            
              <div className="w-full px-4 lg:order-3 lg:text-right lg:self-center flex justify-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-gray-800 active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Previous
                    </button>
                  </div>
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-gray-800 active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                     <Link href="parent-selector-in-css"> Next4 </Link>
                    </button>
                  </div>
                </div>
            </section>
          </main>
          <Footer />
        </>
      );
    }  

    export default QuestionPage;