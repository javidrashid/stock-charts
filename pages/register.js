import React from "react";
import Link from 'next/link';
// layout for page

import Auth from "layouts/Auth";

import SignUpForm from 'components/Forms/SignUpForm'
import IndexNavbar from 'components/Navbars/IndexNavbar';
import { auth, github_auth, google_auth } from "../config/firebase";
import { useRouter } from "next/router";


export default function Register() {
  const router = useRouter();
  const handleSignInWithGoogle = (e) => {
   console.log('Invoking Login with Google...')
    var provider = google_auth.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.signInWithPopup(provider).then( () => {
      router.push('/orders')
    })
    .catch(err => {
       console.log(err);
    })
  }

  const handleSignInWithGithub = (e) => {
    return auth.signInWithPopup(github_auth).then(() => {
      router.push('/orders')
    })
    .catch(() => {
      alert('There is an error signing up with Github most likely due to mis configuration or permission denied...')
    })
  }

  return (
    <>
   
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleSignInWithGithub(e)}
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/github.svg")}
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleSignInWithGoogle(e)}
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg")}
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <SignUpForm />
                
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              
              <div className="w-1/2">
                <Link href="/login">
                  <a href="#" className="text-gray-300">
                    <small>I need to Log In</small>
                  </a>
                </Link>
              </div>
            </div>  
          </div>

          
        </div>
        
      </div>
      
    </>
  );
}

Register.layout = Auth;
