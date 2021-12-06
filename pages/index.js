import Head from 'next/head'
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
export default function Home() {
  return (
    <div className=" min-h-screen py-2 max-w-3xl mx-auto">
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
    </div>
  )
}
