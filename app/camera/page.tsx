import React from 'react'
import Image from 'next/image'




const camera = () => {


  return (
   
      <div className='mx-auto max-w-2xl lg:max-w-7xl mt-36 flex justify-center ' >
        <div className='text-center '>
          <h2 className='text-pink text-lg font-normal mb-3 '>111 Track Day Gmotor </h2>
          <h3 className='text-3xl lg:text-5xl font-semibold text-black'> </h3>
        </div>
        {/* {Gallery Photos} */}
        <div className='grid grid-cols-1  md:grid-cols-12 my-16 sm:space-x-6 sapce-y-6 md:space-y-0 px-6 '>
          <div className='col-span-12 flex justify-center '>
            <div className='grid grid-rows-1 grid-flow-row '>
              {/* {Top photo} */}
              <div className='row-span-1   mb-5 mt-5' >
                <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carr1.jpg`}
                alt="86"
                width={960}
                height={405}
                className='  rounded-3xl inner-img'
                />

              </div>
              {/* {Bottom Section} */}
              <div className='grid grid-cols-2 gap-2 '>
              <div >
           
                  <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carr4.jpg`}
                  alt="86"
                  width={450}
                  height={405}
                   className='  rounded-3xl inner-img'
                 
                  />
                </div>
                <div >
                  <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carr3.jpg`}
                  alt="86"
                  width={450}
                  height={300}
                   className='  rounded-3xl inner-img'
                 
                  />
                </div>
                <div >
                  <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carr2.jpg`}
                  alt="86"
                  width={450}
                  height={300}
                  className='  rounded-3xl inner-img'
                 
                  />
                </div>
                <div >
                  <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carr5.jpg`}
                  alt="86"
                  width={450}
                  height={300}
                   className='  rounded-3xl inner-img'
                 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default camera