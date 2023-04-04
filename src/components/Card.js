import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Card = (props) => {
  let review = props.reviews;
  return (
    <div className='flex flex-col md:relative '>

      <div className='w-11/12'>

        <div className='absolute top-[-7rem] z-[10] mx-auto '>
          <img
            className='aspect-square rounded-full w-[140px] h-[140px] z-20 '
            src={review.Image} alt="MastPhoto" />
          <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
        top-[-6px] z-[-10] left-[10px] '></div>
        </div>

        <div className='text-center mt-7'>
          <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
          <p className='text-violet-400 uppercase text-sm '>{review.job}</p>
        </div>

        <div className='text-violet-400 m-auto mt-5'>
          <FaQuoteLeft />
        </div>

        <div className='text-center mt-4 text-slate-500'>
          {review.text}
        </div>

        <div className='text-violet-400 m-auto mt-5'>
          <FaQuoteRight />
        </div>
      </div>
    </div>
  )
}

export default Card
