import Head from 'next/head'
import '../axios'
import { GetPosts } from '../types'
import React from 'react'
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import axios from 'axios'
import { InferGetServerSidePropsType } from 'next'
export default function Home({
  data
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  console.log(data)
  return (
    <div className=" h-screen py-2 max-w-3xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello</h1>
      <Button
        active="red"
        className="bg-red-500  hover:bg-green-500 focus:!bg-black"
        ripple="light"
      >
        E-MENA
      </Button>
      <div className=" px-4 border-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        explicabo tenetur, totam tempore dolorum dignissimos pariatur ducimus
        voluptatibus repellat perspiciatis labore saepe ab similique quod
        dolores eveniet distinctio ex itaque!
      </div>
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
