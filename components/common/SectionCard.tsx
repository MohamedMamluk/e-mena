import React from 'react'
import { Post } from '../../types'
import Link from 'next/link'
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
  return (
    <Link href={`/post/${post._id}`} passHref>
      <a
        className="  bg-[#202020] rounded-xl overflow-hidden h-[400px] 
     md:h-[450px] lg:h-[400px] xl:h-[380px] group "
      >
        <div id="image__container" className="h-56 relative bg-red-500">
          <img
            className="h-full object-cover w-full  object-top"
            src={post.image}
            alt="Article Image"
          />
          <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-gray-200 group-hover:text-red-600 text-xl md:!text-2xl absolute left-3 transform -translate-y-1/2 flex items-center justify-center transition-all duration-300">
            أقرأ
          </div>
        </div>
        <div id="article__info" className="py-3 px-2 text-center">
          <p id="date" className="text-right">
            {dateString}
          </p>
          <h3
            id="article__info-title"
            className="md:!text-right text-xl md:!text-2xl text-red-500"
          >
            {post.title}
          </h3>
          <h4
            id="article__info-subtitle"
            className="md:!text-right text-base lg:tracking-wide "
          >
            {post.subTitle.slice(0, 250)}
          </h4>
        </div>
      </a>
    </Link>
  )
}

export default SectionCard
