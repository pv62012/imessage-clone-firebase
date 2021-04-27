
import React from 'react'
import {auth, provider} from './firebase'
function Login() {

    const sigin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .catch((error) =>alert(error.message))
    }
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-56 h-56 md:h-96 md:w-96">
          <img
            src="icon.jpg"
            alt="Imessage"
            className=" object-contain w-full h-full"
          />
        </div>
        <button onClick={sigin} className="bg-[#3ea4fb] px-10 py-1 mt-12 rounded-lg text-white uppercase hover:bg-white hover:text-[#3ea4fb] cursor-pointer">
          Sign In
        </button>
      </div>
    );
}

export default Login
