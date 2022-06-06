import React from 'react'

const Callcomp = () => {
  return (
    <div className=' flex flex-col  p-4 lg:flex-row '>
        
        <div className="flex flex-col   pr-3 mb-12 items-center content-center lg:mt-12 lg:mr-2">
         <div className=" text-5xl lg:text-7xl text-teal-500 font-bold text-center lg:text-left ">Call our store and takeaway when it suits you best.</div>
         <div className="text-lg lg:text-2xl mt-12 lg:mt-16 text-gray-600 text-center lg:text-left ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
         </div> 
         <div className='rounded-sm mt-12 lg:mt-16 lg:pr-44'> 
         <a href="#" className='  bg-teal-500 rounded-lg text-xl p-2 text-white'>Ph. +61 233 2333</a> 
         </div>    
        </div>
        <div className='flex lg:min-h-auto pr-4 lg:min-w-max lg:mt-0 mt-12 justify-center'>
          <img src='https://assets.website-files.com/5e865e09d8efa3310676b585/5eb0bcb8036072a55de52baf_Food%20Takeaway.png'  />
        </div>

    </div>
  )
}

export default Callcomp