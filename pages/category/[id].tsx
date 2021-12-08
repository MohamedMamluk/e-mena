import React from 'react'
import '../../axios'
import { Id, GetPosts } from '../../types/index'
import SectionHeader from '../../components/common/SectionHeader'
import { useRouter } from 'next/router'

import axios from 'axios'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import CategorySectionCard from '../../components/common/CategorySectionCard'

const category = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data)
  const router = useRouter()

  return (
    <div className="max-w-[1300px] mx-auto px-2" style={{ direction: 'rtl' }}>
      <div className="flex items-center justify-center w-full md:!justify-start">
        <SectionHeader
          title={`اخبار ${
            router.query.id == 'league' ? 'League of Legends' : router.query.id
          }`}
        />
      </div>

      {data.posts.map((post, index) => (
        <CategorySectionCard post={post} key={index} />
      ))}
    </div>
  )
}

export default category
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params as Id
  const res = await axios.get(`/posts?category=${id}`)
  const data: GetPosts = res.data
  return {
    props: {
      data
    },
    revalidate: false
  }
}

export const getStaticPaths = async () => {
  const res = await axios.get(`/posts`)
  const data: GetPosts = await res.data

  const paths = data.posts.map((item) => ({
    params: { id: item.category }
  }))

  return {
    paths,
    fallback: false
  }
}
