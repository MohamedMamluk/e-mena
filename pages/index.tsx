import '../axios'
import { GetPosts } from '../types'

import React from 'react'
import axios from 'axios'
import Head from 'next/head'
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
        <title>E-MENA</title>
        <meta
          name="description"
          content="E-MENA is a news website focusing on the MiddleEast and Africa E-sports teams and tournaments, watch your favorite streamers from Twitch and get your news all from one place: E-MENA. "
        />
        <link rel="canonical" href="https://e-mena.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Discover what is happening in the MENA E-Sports scene."
        />
        <meta property="og:type" content="news.esports" />
        <meta property="og:url" content="https://e-mena.vercel.app/" />
        <meta property="og:image" content="/E-Mena.png" />
        <meta
          property="og:description"
          content="E-MENA is a news website focusing on the MiddleEast and Africa E-sports teams and tournaments, watch your favorite streamers from Twitch and get your news all from one place: E-MENA."
        />
        <meta property="og:site_name" content="E-MENA" />
        <meta
          name="twitter:title"
          content="Discover what is happening in the MENA E-Sports scene."
        />

        <meta
          name="twitter:description"
          content="E-MENA is a news website focusing on the MiddleEast and Africa E-sports teams and tournaments, watch your favorite streamers from Twitch and get your news all from one place: E-MENA."
        />

        <meta name="twitter:image" content="/E-Mena.png" />

        <meta name="twitter:site" content="E-MENA" />

        <meta name="twitter:creator" content="Mamluk"></meta>
        <link rel="icon" href="/E-Mena.png" />
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
    },
    revalidate: 10
  }
}
