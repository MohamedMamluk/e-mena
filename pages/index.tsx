import Head from 'next/head'
import '../axios'
import { GetPosts } from '../types'
import React from 'react'
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import axios from 'axios'
import { InferGetServerSidePropsType } from 'next'
import Swiper from '../components/SwiperComponent/Swiper'
export default function Home({
  data
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  console.log(data)
  return (
    <div className=" h-screen py-2  mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Swiper posts={data.posts} msg={data.msg} length={data.length} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/posts')
  const data: GetPosts = await res.data
  return {
    props: {
      data
    }
  }
}
