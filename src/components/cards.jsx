import React from 'react'
import { ShareIcon, HeartIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';


const Card = ({data,idx}) => {
  return (
    <>
    
    <div key={idx} className="flex text-white rounded-xl overflow-hidden mb-6"
    style={{
       boxShadow: '0px 8px 10px rgba(255, 0, 0, 0.2), 0px -8px 10px rgba(255, 0, 0, 0.2)',
      padding: '1px',
      borderRadius: '0.5rem',
    }}
    >
  {/* Left Image */}
  <div className='p-4 bg-black w-[11rem]'>
      <div className='flex max-w-[14rem] overflow-hidden'>
        <img src={data?.image} alt={data?.title} 
        style={{height:"20vh"}}
        />
          <div className=''>
              <h2 className="text-xl text-left px-4 font-semibold text-gray-300">{data?.title}</h2>
              <p className="text-xs text-left px-4 text-blue-400">{data?.year}, {data?.director}</p>
              <div className='flex px-2'>
              <p className="text-xs text-left px-1 text-gray-300 rounded-sm border border-gray-700 border-2 mt-1">{data?.duration}</p>
              <p className="text-sm text-left px-4 text-gray-400  mt-1">{data?.Genres}</p>
              </div>
            </div>
          </div>
          <p className="text-md text-gray-300 mt-2"
          style={{width:"21rem", textAlign:"start", padding:"30px 0px"}} 
          >{data?.description}</p>
            <div className="flex gap-4 mt-4 px-4 text-gray-400">
  <ShareIcon className="h-6 w-6 cursor-pointer" />
  <HeartIcon className="h-6 w-6 cursor-pointer" />
  <ChatBubbleBottomCenterTextIcon className="h-6 w-6 cursor-pointer" />
</div>
      </div>
  {/* Center Content */}

  {/* Right Image */}
  
 
<div
  className="relative overflow-hidden  rounded-r-lg"
  style={{ width: "21rem", height: "50vh" }}
>
  {/* Main Image */}
  <img
    src={data?.images}
    alt="scene"
    className="object-fill object-top object-top-right"
  style={{width:"21rem", height:"50vh", objectFit:'none',objectPosition: "top right"  }}
  />

  {/* Left Side Gradient Overlay */}
  <div
    className="absolute top-0 left-0 h-full"
    style={{
      width: "40%",
      background: "linear-gradient(to right, rgba(0,0,0,0.9), transparent)",
      zIndex: 10,
    }}
  />
</div>

</div>

    </>
  )
}

export default Card;