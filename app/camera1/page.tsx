import React from 'react'
import Image from 'next/image'

interface carImage {
  imgSrc: string;

}
const carImage: carImage[] = [
  {
    imgSrc:'/ca14.jpg'
  },
  {
    imgSrc:'/ca11.jpg'
  },
  {
    imgSrc:'/ca12.jpg'
  },
  {
    imgSrc:'/ca13.jpg'
  },
  {
    imgSrc:'/ca14.jpg'
  },
  {
    imgSrc:'/ca15.jpg'
  },
  {
    imgSrc:'/ca16.jpg'
  },
  {
    imgSrc:'/ca17.jpg'
  },
  {
    imgSrc:'/ca18.jpg'
  },
  {
    imgSrc:'/ca19.jpg'
  },
  {
    imgSrc:'/ca20.jpg'
  },
  {
    imgSrc:'/ca21.jpg'
  },
  {
    imgSrc:'/ca22.jpg'
  },
  {
    imgSrc:'/ca23.jpg'
  },
  {
    imgSrc:'/ca24.jpg'
  },
  {
    imgSrc:'/ca25.jpg'
  },
  {
    imgSrc:'/ca26.jpg'
  },
  {
    imgSrc:'/ca27.jpg'
  },
  {
    imgSrc:'/ca28.jpg'
  },
  {
    imgSrc:'/ca29.jpg'
  },
  {
    imgSrc:'/ca30.jpg'
  },
  {
    imgSrc:'/ca31.jpg'
  },
  {
    imgSrc:'/ca32.jpg'
  },
  {
    imgSrc:'/ca33.jpg'
  },
  {
    imgSrc:'/ca34.jpg'
  },
  {
    imgSrc:'/ca35.jpg'
  },
  {
    imgSrc:'/ca36.jpg'
  },
  {
    imgSrc:'/ca37.jpg'
  },
  {
    imgSrc:'/ca38.jpg'
  },
  {
    imgSrc:'/ca39.jpg'
  },
  {
    imgSrc:'/ca40.jpg'
  },
  {
    imgSrc:'/ca41.jpg'
  },{
    imgSrc:'/ca42.jpg'
  },
  {
    imgSrc:'/ca43.jpg'
  },

]


const camera = () => {


  return (
   
      <div className='mx-auto max-w-2xl lg:max-w-7xl mt-36 ' >
        <div className='text-center '>
          <h2 className='text-pink lg:text-5xl font-normal mb-3 '>大慶體育館</h2>
          {/* <h3 className='text-3xl lg:text-5xl font-semibold text-black'> </h3> */}
        </div>
        {/* {Gallery Photos} */}
        <div className='grid grid-cols-1  md:grid-cols-12 my-16 sm:space-x-6 sapce-y-6 md:space-y-0 px-6 '>
          <div className='col-span-12 flex justify-center '>
            <div className='grid grid-rows-1 grid-flow-row '>
              {/* {Top photo} */}
              <div className='row-span-1   mb-5 mt-5' >
                <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/car1/ca34.jpg`}
                alt="86"
                width={960}
                height={405}
                className='  rounded-3xl inner-img'
                />

              </div>
              {/* {Bottom Section} */}
              <div className='grid grid-cols-2 gap-2 '>
              {
                carImage.map((items, i) => (
                  
                    <div  key={i}>
           
                    <Image 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/car1${items.imgSrc}`}
                    alt="86"
                    width={450}
                    height={405}
                    className='  rounded-3xl inner-img'
              
                    />
                   </div>

                  

                ))

              }
              </div>
              {/* <div className='grid grid-cols-2 gap-2 '>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
     
    
  )
}

export default camera