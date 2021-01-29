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
      console.log('localStorage p2', localStorage.answers);
    }

    const setAnswer = (e) => {
      //localStorage.setItem('q2', e.target.value);
      //submission.results.push(localStorage.getItem('q2'));

      localStorage.setItem('answers', JSON.stringify(Object.assign({}, JSON.parse(localStorage.getItem('answers')) , {'q2' : e.target.value})));
   }
    return (
        <>
          <NavbarwithLogin transparent />
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
                  Which of the follwing css would produce a horizontally centered div?
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
                      <div className="iframe-container ml-32">
                      <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520id%253D%2522my-div%2522%253EThis%2520div%2520should%2520be%2520centered%2520horizontally%253C%252Fdiv%253E%250A%250A%250A%250A%2523my-div%2520%257B%250A%2520%2520margin%253A0%2520auto%253B%250A%2520%2520width%253A50%2525%253B%250A%2520%2520border%253A1px%2520solid%2520red%253B%250A%257D%250A"
                    style={{"width": 437,  "height": 474, "border":0, transform: "scale(1)", overflow:"hidden"}}
                    sandbox="allow-scripts allow-same-origin">
                  </iframe>
                        </div>
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option2" value="option2" onChange={(e) => setAnswer(e)}/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" htmlFor="option2">
                    <div className="iframe-container ml-32">
                      <iframe
  src="https://carbon.now.sh/embed/o339bYywP383P51rpVAQ"
  style={{"width": 437,  "height": 474, "border":0, transform: "scale(1)", overflow:"hidden"}}
                    sandbox="allow-scripts allow-same-origin">
                  </iframe>
                        </div>
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option3" value="option3" onChange={(e) => setAnswer(e)}/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" htmlFor="option3">
                    <div className="iframe-container ml-32">
                      <iframe
  src="https://carbon.now.sh/embed/o339bYywP383P51rpVAQ"
  style={{"width": 437,  "height": 474, "border":0, transform: "scale(1)", overflow:"hidden"}}
                    sandbox="allow-scripts allow-same-origin">
                  </iframe>
                        </div>
                    </label>
                    
                  </div>
                  <div className="w-full lg:w-9/12 px-4 rounded">
                    <input type="radio" name="answer" id="option4" value="option4" onChange={(e) => setAnswer(e)}/>
                    <label className="mb-4 text-lg leading-relaxed text-gray-800 ml-4" htmlFor="option4">
                    <div className="iframe-container ml-32">
                      <iframe
  src="https://carbon.now.sh/embed/cawrkT3MuiwMd8VnkeeY"
  style={{"width": 437,  "height": 474, "border":0, transform: "scale(1)", overflow:"hidden"}}
                    sandbox="allow-scripts allow-same-origin">
                  </iframe>
                        </div>
                    </label>
                    
                  </div>
                </div>
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
                     <Link href="css-full-form"> Next3 </Link>
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