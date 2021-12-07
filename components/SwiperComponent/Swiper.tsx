import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination])

import { GetPosts } from '../../types'
const SwiperContainer: React.FC<GetPosts> = ({ posts }) => {
  return (
    <section id="swiper" className=" h-[50vh] md:h-[80vh]">
      <Swiper
        className="h-full"
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="  bg-gray-900 opacity-60 absolute inset-0">
              <img
                src={post.image}
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
            <div
              className="absolute z-50 flex flex-col justify-center items-center gap-4 w-full text-center"
              style={{
                transform: 'translate(-50% , -50%)',
                top: '50%',
                left: '50%'
              }}
            >
              <h1 style={{ direction: 'rtl' }} className="text-3xl font-mkzy">
                {post.title}
              </h1>
              <button className="bg-red-500 font-mkzy text-white px-6 py-2 rounded-lg text-xl">
                اقرأ اكثر
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SwiperContainer
