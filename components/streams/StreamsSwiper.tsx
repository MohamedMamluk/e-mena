import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import Link from 'next/link'
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination])
interface Stream {
  streams: {
    user_login: string
    game_name: string
    type: 'live'
    thumbnail_url: string
    user_name: string
  }[]
}
const StreamSwiper: React.FC<Stream> = ({ streams }) => {
  React.useEffect(() => {
    console.log(window.innerWidth)
  }, [])
  return (
    <section id="swiper" className=" h-96">
      <Swiper
        className="h-full"
        slidesPerView={
          (typeof window !== 'undefined' && window.innerWidth <= 768) ||
          streams.length == 1
            ? 1
            : 2
        }
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
      >
        {streams.map((stream, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${stream.thumbnail_url.replace(
                '{width}x{height}',
                '1920x1080'
              )}})`,
              backgroundSize: 'cover'
            }}
            className="relative"
          >
            <a href={`https://twitch.tv/${stream.user_login}`} target="_blank">
              <div
                id="shade"
                className="absolute inset-0 bg-gray-800 opacity-70 hover:opacity-50"
              ></div>
              <div
                id="stream__info"
                style={{ direction: 'ltr' }}
                className="absolute z-30 left-10 flex flex-col gap-1 text-white bottom-11 font-poppins"
              >
                <h2 id="stream__info-name" className="text-2xl  font-bold">
                  {stream.user_name}
                </h2>
                <h3
                  id="stream__info-game"
                  className="text-red-700 font-bold text-lg"
                >
                  {stream.game_name}
                </h3>
                <p
                  id="stream__info-status"
                  className="text-green-700 text-sm flex items-center gap-1"
                >
                  {' '}
                  <span className="w-4 h-4 shadow-xl rounded-full bg-green-700 block"></span>
                  {stream.type}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default StreamSwiper
