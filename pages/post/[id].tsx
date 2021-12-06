import React from 'react'
import '../../axios'
import { Id, GetPost, GetPosts } from '../../types/index'
import axios from 'axios'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
const post = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data.writer)

  return (
    <div>
      <img src={data.writer.image} alt="" />
    </div>
  )
}

export default post
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params as Id
  const res = await axios.get(`/posts/${id}`)
  const data: GetPost = res.data
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
    params: { id: item._id }
  }))

  return {
    paths,
    fallback: false
  }
}
