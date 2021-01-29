import React from 'react'
import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { useRouter } from 'next/router'
import Navbar from "components/Navbars/AuthNavbar.js";

import Link from "next/link";
import Footer from "components/Footers/Footer.js";
import netlifyAuth from '../../netlifyAuth'

const  Index = () => { 


    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

    useEffect(() => {
        netlifyAuth.initialize((user) => {
            setLoggedIn(!!user)
            setUser(user)
        })
    }, [loggedIn])


    let [user, setUser] = useState(null)



    let login = () => {
        netlifyAuth.authenticate((user) => {
          setLoggedIn(!!user)
          setUser(user)
          netlifyAuth.closeModal()
        })
      }
      
      let logout = () => {
        netlifyAuth.signout(() => {
          setLoggedIn(false)
          setUser(null)
        })
      }



    const router = useRouter()
    const  answers  = router.query;
    console.log("charts page received this", answers)
    const realAnswers = {q1: "option1", q2: "option1", q3: "option2", q4: "option1", q5: "option4"};
    
    //localStorage.getItem("answers");
    
    console.log('realAnswers', realAnswers);
    //console.log('submittedAnswers', submittedAnswers);
    // debugger;
    let incorrectAnswers = 0;
    let correctAnswers = 0;
    const notAnswered = 0

// for(var i =0; i< Object.keys(submittedAnswers).length; i++) {
//     if(Object.entries(submittedAnswers)[i][1] !== Object.entries(realAnswers)[i][1]) {
//         incorrectAnswers++
//     }
//     else {
//         correctAnswers++
//     }
// }

const data = {
    labels: ['Correct', 'Incorrect', 'Not Answered'],
    datasets: [
      {
        label: '# of Answers',
        data: [correctAnswers, incorrectAnswers, notAnswered],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
         
        ],
        borderWidth: 1,
      },
    ],
  }



    return <>
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
         
      <div className="px-6">
        
        <div className="text-center mt-12">
       
        </div>
        <h1>Hello User </h1>   <button onClick={login}>
    Login here
    </button>


        {loggedIn ? (
  <div>
    You are logged in!
 
  {user && <>Welcome {user?.user_metadata.full_name}!</>}

  <Pie data={data} />


    <br /> 
   <button onClick={logout}>

      Log out here.
    </button>
  </div>
) : (
  <button onClick={login}>
    
  </button>
)}



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
               <Link href="question6"> Next6 </Link>
              </button>
            </div>
          </div>
      </section>
    </main>
    <Footer />
  </>

}

export default Index