import React from 'react'
import '../../axios'
import { Id, GetPosts } from '../../types/index'
import axios from 'axios'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
const category = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data)

  return <div></div>
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
