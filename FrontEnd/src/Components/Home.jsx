import React from 'react';
import '../Stylesheets/landing.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const Home = () => {
// console.log(import.meta.env.VITE_BACKEND_URL);

  useGSAP(()=>{
    var tl=gsap.timeline()
    tl.from("#main",{
      y:-1000,
      opacity:0,
      duration:0.7
    })
    tl.from('#arrow',{
      y:70,
      duration:0.83,
      repeat:-1,
      opacity:0,
      yoyo:true
    })
    tl.from("#content",{
      scale:2,
      opacity:0,
      duration:0.7
    })
   

  })
  return (
    <div className="bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900
      w-full min-h-screen flex flex-col justify-between p-6">

      <div className="flex justify-center mt-10">
        <h1 className="text-white text-5xl font-bold text-center drop-shadow-lg">
         <h1 className="text-indigo-400" id='main'>CodeZone ⚡</h1>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-white mt-10">

        <img
          src="/images/245.png"
          alt="Coding Visual"
          className="w-[350px] h-[300px] object-cover rounded-xl shadow-lg"
        />

        <div className="max-w-xl text-lg leading-relaxed text-center md:text-left px-4">
          <h2>
             <div id='content'>
              <span className="font-semibold text-indigo-300">CodeZone</span> is a powerful coding platform that supports multiple languages like <span className="font-bold">Java, Python, C++, and more</span>. Track your progress with our <span className="text-indigo-300">Attempts</span> feature, which saves all your submissions for review and improvement.
              </div>
          </h2>
        </div>
      </div>
      <div className='flex justify-center'>
        <h1 id='arrow'>⬇️</h1>
      </div>

      <div className="flex justify-center my-10">
        <a id='btn'
          href="/login"
          className="no-underline px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-lg font-medium transition duration-300 shadow-md hover:shadow-xl"
        >
          🚀 Start Coding
        </a>
      </div>
    </div>
  );
};

export default Home;
