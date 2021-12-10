import Head from 'next/head'
import '../axios'
import { GetPosts } from '../types'
import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import axios from 'axios'
import { InferGetServerSidePropsType } from 'next'
import Swiper from '../components/SwiperComponent/Swiper'
import Section from '../components/common/Section'
import StreamsSection from '../components/streams/StreamsSection'
export default function Home({
  data
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <div className=" py-2  mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Swiper posts={data.posts} msg={data.msg} length={data.length} />
      <Section posts={data.posts.slice(0, 4)} title="اخر الاخبار" />
      <StreamsSection />
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
