import React from 'react'
import Head from 'next/head'
import '../../axios'
import { Id, GetPost, GetPosts } from '../../types/index'
import Link from 'next/link'
import axios from 'axios'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { convertFromRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
const post = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { post, writer } = data
  const [preview, setPreview] = React.useState(EditorState.createEmpty())
  React.useEffect(() => {
    setPreview(
      EditorState.createWithContent(
        convertFromRaw(JSON.parse(data.post.content))
      )
    )
  }, [])
  const router = useRouter()
  var date = new Date(post.createdAt)
  var dateString = date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <section
      style={{ direction: 'rtl' }}
      className="max-w-[1300px] mx-auto px-2 flex flex-col items-center gap-10 pb-8"
    >
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.subTitle} />
        <link rel="canonical" href="https://e-mena.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="news.esports" />
        <meta
          property="og:url"
          content={`https://e-mena.vercel.app/post/${router.query.id}`}
        />
        <meta property="og:image" content={post.image} />
        <meta property="og:description" content={post.subTitle} />
        <meta property="og:site_name" content="E-MENA" />
        <meta name="twitter:title" content={post.title} />

        <meta name="twitter:description" content={post.subTitle} />

        <meta name="twitter:image" content={post.image} />

        <meta
          name="twitter:site"
          content={`https://e-mena.vercel.app/post/${router.query.id}`}
        />

        <meta name="twitter:creator" content="Mamluk"></meta>
        <link rel="icon" href="/E-Mena.png" />
      </Head>
      <div id="routes" className="w-full flex gap-3 items-start text-lg">
        <Link href="/">
          <a className="text-red-400">الرئيسية</a>
        </Link>
        /
        <Link href={`/category/${post.category}`}>
          <a className="text-red-400">
            {post.category == 'league' ? 'League of Legends' : post.category}
          </a>
        </Link>
        /<span>{post.title}</span>
      </div>
      <div className="w-full">
        <div
          id="post__image"
          className="w-full h-64 md:h-96 rounded-xl overflow-hidden"
        >
          <img
            src={post.image}
            alt="Article Image"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex justify-between w-full mt-2">
          <p>{dateString}</p>
          <p className="text-white text-lg px-2  bg-red-500 rounded-full ">
            {post.category == 'league' ? 'League of Legends' : post.category}
          </p>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl">{post.title}</h1>
      </div>
      <Editor
        editorState={preview}
        toolbarClassName="text-black"
        editorClassName=" font-mkzy object-cover"
        wrapperStyle={{ maxWidth: '100%' }}
        readOnly
        toolbarStyle={{ display: 'none' }}
      />
      <div className="flex items-center gap-4 w-11/12">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src={writer.image}
            alt="Writer Image"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg text-red-400">كتب بواسطة</p>
          <h1 className="text-3xl">{writer.name}</h1>
        </div>
      </div>
    </section>
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
    revalidate: 1
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
    fallback: 'blocking'
  }
}
