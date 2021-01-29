import Link from "next/link";
import { useRouter } from 'next/router'
import NavbarwithLogin from "components/Navbars/NavbarwithLogin";
import Footer from "components/Footers/Footer.js";

const CSSQuestions = () => {
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
            <div className="container mx-auto px-4 pb-32 pt-48"><div className="items-center flex flex-wrap"><div className="w-full md:w-5/12 ml-auto px-12 md:px-4"><div className="md:pr-12"><div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"><i className="fas fa-file-alt text-xl"></i></div><h3 className="text-3xl font-semibold">Lets start with a CSS Quiz...</h3><p className="mt-4 text-lg leading-relaxed text-gray-600">The questions in this quiz vary in complexity from beginner level to more advanced to maybe some of the trickiest css things. Try to solve as many as you can without googling. Remeber this is just a quiz and not a test  :) .</p><ul className="list-none mt-6"><li className="py-2"><div className="flex items-center"><div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"><i className="fas fa-fingerprint"></i></span></div><div><h4 className="text-gray-600">Built by Developers for Developers</h4></div></div></li><li className="py-2"><div className="flex items-center"><div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"><i className="fab fa-html5"></i></span></div><div><h4 className="text-gray-600">Real World CSS problems...</h4></div></div></li><li className="py-2"><div className="flex items-center"><div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"><i className="far fa-paper-plane"></i></span></div><div><h4 className="text-gray-600">Modern CSS Concepts...</h4></div></div></li></ul></div></div><div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0"><img alt="..." className="max-w-full rounded-lg shadow-xl" style={{transform: "scale(1)" , perspective : "1040px" , rotateY : "-11deg" , rotateX : "2deg" , rotate : "2deg" }} src={require("../../assets/img/documentation.png")} /></div></div></div>
            </div>


            <div className="w-full px-4 lg:order-3 lg:text-right lg:self-center flex justify-center">
              
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button
                  className="bg-green-800 active:bg-green-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href="cssquestions/css-specificity-class-vs-id"> Lets Go... </Link>
                </button>
              </div>
            </div>

            </section>
            
          </main>


        <Footer />
        </>
      );
    }  
  
    


export default CSSQuestions;