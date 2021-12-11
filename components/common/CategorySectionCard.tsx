import React from 'react'
import { Post } from '../../types'
import Link from 'next/link'
interface CardProps {
  post: Post
}
const CategorySectionCard: React.FC<CardProps> = ({ post }) => {
  var date = new Date(post.createdAt)
  var dateString = date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <Link href={`/post/${post._id}`} passHref>
      <a className=" flex flex-col gap-2 md:!flex-row-reverse md:!h-52 font-mkzy h-[450px] my-5 bg-[#202020] rounded-lg overflow-hidden group ">
        <div id="image__container" className="  h-56 md:!h-full md:!w-2/6 ">
          <img
            className="h-full object-cover w-full  object-top"
            src={post.image}
            alt="Article Image"
          />
        </div>
        <div className="flex flex-col items-center justify-between md:!w-4/6 md:items-start px-3 gap-3">
          <div
            id="article__info"
            className="text-center h-2/3 flex flex-col justify-evenly"
          >
            <p id="article__info-date" className="text-right">
              {dateString}
            </p>
            <h3
              id="article__info-title"
              className="md:!text-right text-2xl md:!text-3xl text-red-500"
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
          <div className="h-1/3 w-full flex flex-col items-center    md:!justify-start md:!flex-row">
            <h1 className="bg-red-600 group-hover:bg-gray-200 group-hover:text-red-600 text-center px-8 py-2 text-xl rounded-lg transition-all duration-300">
              اقرأ اكثر
            </h1>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CategorySectionCard
