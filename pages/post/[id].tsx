import React from 'react'
import '../../axios'
import { Id, GetPost, GetPosts } from '../../types/index'
import axios from 'axios'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { convertFromRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import SectionHeader from '../../components/common/SectionHeader'
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
      <SectionHeader title="معاينة الخبر" />
      <div>
        <div
          id="post__image"
          className="max-w-4xl h-64 md:h-96 rounded-xl overflow-hidden"
        >
          <img src={post.image} alt="" className="h-full object-cover" />
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
        // editorStyle={{ maxWidth: '800px' }}
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
          <h1 className="text-3xl">مصطفى عمرو</h1>
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
