import React from 'react'
import { Post } from '../../types'
interface CardData {
  post: Post
}
const SectionCard: React.FC<CardData> = ({ post }) => {
  var date = new Date(post.createdAt)
  var dateString = date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
  console.log(dateString)
  return (
    <article className="  bg-[#202020] rounded-xl overflow-hidden h-[400px] sm:h-[350px] md:h-[450px] lg:h-[400px] xl:h-[380px]  ">
      <div id="image__container" className="h-56 relative bg-red-500">
        <img
          className="h-full object-cover w-full  object-top"
          src={post.image}
          alt="Article Image"
        />
        <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-gray-200 hover:text-red-600 text-xl md:!text-2xl absolute left-3 transform -translate-y-1/2 flex items-center justify-center">
          <p>اقرأ</p>
        </div>
      </div>
      <div id="article__info" className="py-3 px-2">
        <p id="date">{dateString}</p>
        <h3
          id="article__info-title"
          className="text-center text-xl md:!text-2xl text-red-500"
        >
          {post.title}
        </h3>
        <h4
          id="article__info-subtitle"
          className="text-center text-base lg:tracking-wide "
        >
          {post.subTitle.slice(0, 250)}
        </h4>
      </div>
    </article>
  )
}

export default SectionCard
