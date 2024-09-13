"use client"
import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
const Cook= () => {
  return (
    <div className='relative' id="cook-section">
      <div className='mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          {/* {left section} */}
        
              <div className='col-span-6 flex justify-center'>
                <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true} >
                <Image className="rounded-3xl px-2"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/car86.jpg`}
                alt="car86"
                width={635}
                height={808}/>

                </Fade>
                
              </div>

      
          
          {/* {right section} */}
          <div className='col-span-6 flex flex-col justify-center  space-x-5 mt-3'>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <h2 className='px-5 text-pink text-lg font-normal mb-3 ls-51 uppercase'>和我們一起拍攝</h2>

            </Fade>
              <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
              <h3 className='text-3xl lg:text-4xl font-semibold text-start text-black'>有興趣的可以一起來參加拍攝</h3>

              </Fade>
              <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                  <p className='text-grey md:text-lg font-normal mb-10 text-start mt-2'>
                  拍攝地點：選擇合適的拍攝地點，比如室內攝影棚、戶外場地、城市街道、自然風光等。確保地點能夠增強你想要呈現的效果。<br/>
                  時間安排：選擇拍攝時間，比如日間拍攝可以利用自然光，黃昏或夜晚拍攝可以用不同的光線效果。

                  </p>
                  <p className='text-grey md:text-lg font-normal mb-10 text-start mt-1'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vel repellat
                  veritatis porro...
                  </p>
                  <div className='flex align-middle justify-center md:justify-start'>
                    <button className='text-xl bg-pink text-white rounded-full py-5 px-5 lg:px-10'>Learn more</button>
                  </div>

              </Fade>
              
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cook