import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { EditorProps } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { convertFromRaw } from 'draft-js'
import { useSelector, useDispatch } from 'react-redux'
import { submitPost } from '../utils'
import { actionCreators, State } from '../state'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import SectionHeader from '../components/common/SectionHeader'
import PreviewButtons from '../components/common/PreviewButtons'
import { PostWriting, Writer } from '../types'
import { bindActionCreators } from 'redux'
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

const preview = () => {
  const post = useSelector((state: State) => state.post)
  const dispatch = useDispatch()
  const { clearPost } = bindActionCreators(actionCreators, dispatch)
  const [token, setToken] = React.useState('')
  const [user, setUser] = React.useState<Writer>()
  const [preview, setPreview] = React.useState(EditorState.createEmpty())
  const [authorized, setAuthorized] = React.useState(false)
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      const userData = user.user
      const userToken = user.token
      setToken(userToken)
      setUser(userData)
      if (user.user.role === 'admin' || user.user.role === 'writer')
        setAuthorized(true)
    }
  }, [])
  React.useEffect(() => {
    if (post.content.length === 0) return
    const postContent = convertFromRaw(JSON.parse(post.content))
    setPreview(EditorState.createWithContent(postContent))
  }, [])
  var date = new Date()
  var dateString = date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
  const router = useRouter()
  const handleSubmit = async (postwritten: PostWriting, token: string) => {
    try {
      const postdata = await submitPost(postwritten, token)
      const postId = postdata._id
      router.push(`/post/${postId}`)
    } catch (error) {
      console.log(error)
    }
  }
  if (!authorized || post.content.length === 0)
    return (
      <h1 className="text-3xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 flex flex-col items-center py-8">
        <span className="text-red-700 text-5xl">،عفوا</span> انت غير مسموح لك
        انت تكون هنا فى الوقت الحالى
        <Link href="/" passHref>
          <a className="text-blue-500">العودة للصفحة الرئيسية</a>
        </Link>
      </h1>
    )

  return (
    <section
      style={{ direction: 'rtl' }}
      className="max-w-[1300px] mx-auto px-2 flex flex-col items-center gap-8"
    >
      <SectionHeader title="معاينة الخبر" />
      <div className="w-full">
        <div
          id="post__image"
          className="w-full h-64 md:h-96 rounded-xl overflow-hidden"
        >
          <img
            src={post.image}
            alt="Article image"
            className="w-full h-full object-cover"
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
        editorClassName=" font-mkzy"
        wrapperStyle={{ maxWidth: '100%' }}
        readOnly
        toolbarStyle={{ display: 'none' }}
      />
      <div className="flex items-center gap-4 w-11/12">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src={user.image}
            alt="Writer Image"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg text-red-400">كتب بواسطة</p>
          <h1 className="text-3xl">{user.name}</h1>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <PreviewButtons
          name="نشر"
          borderColor="border-green-600"
          textColor="text-green-600"
          hoverBG="bg-green-600"
          onClick={() => handleSubmit(post, token)}
        />
        <PreviewButtons
          name="تعديل"
          borderColor="border-yellow-600"
          textColor="text-yellow-600"
          hoverBG="bg-yellow-600"
          onClick={() => router.push('/edit')}
        />
        <button
          onClick={async () => {
            await router.push('/')
            clearPost()
          }}
          className="border border-red-600 text-red-600  hover:bg-red-600 hover:text-white px-8 py-2 rounded-lg text-2xl"
        >
          حذف
        </button>
      </div>
    </section>
  )
}

export default preview
