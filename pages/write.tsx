import React from 'react'
import SectionHeader from '../components/common/SectionHeader'
import InputContainer from '../components/common/InputContainer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'
import Link from 'next/link'
import { EditorState } from 'draft-js'

import { convertToRaw } from 'draft-js'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
interface PostWriting {
  image: string
  title: string
  subTitle: string
  category: string
  content: string
}
const write = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  )
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hldG9zIiwiZW1haWwiOiJjaGV0b3NAZ21haWwuY29tIiwidXNlcklkIjoiNjFhODdlZWU5MTcwNGExNzcwZjM2NmQ0Iiwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3Njb250ZW50LmZhbHkzLTEuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS85MDAxODQyM18yNTk4NjY1OTkzNzQzNTE5XzgwOTk2MjE2OTY3MTkyOTAzNjhfbi5qcGc_X25jX2NhdD0xMTEmY2NiPTEtNSZfbmNfc2lkPTA5Y2JmZSZfbmNfb2hjPXBydlpXajFmeEhBQVg5R3lRdlYmX25jX2h0PXNjb250ZW50LmZhbHkzLTEuZm5hJm9oPTJlODA2ZGY3NDU5ZmJiZTE3YzQ3MjkwMmJmNjA4MDZjJm9lPTYxQ0M5RUE4IiwiaWF0IjoxNjM4OTU4MTkyLCJleHAiOjE2NzA1MTU3OTJ9.kJ_jVHDP2agUaNoLElWXellPBzXnhLTgQN5FTXGh1VQ'
  const [data, setData] = React.useState<HTMLInputElement['files']>()
  const [loaded, setLoaded] = React.useState(false)
  const [uploaded, setUploaded] = React.useState(false)
  const [progress, setProgress] = React.useState(false)

  const [postData, setPostData] = React.useState<PostWriting>({
    image: '',
    title: '',
    subTitle: '',
    category: '',
    content: ''
  })
  //form functions
  const handleSubmit = async (e) => {
    e.preventDefault()
    const file = data[0]
    setLoaded(true)
    setProgress(true)
    const formData = new FormData()
    formData.append('image', file)
    try {
      const {
        data: { url }
      } = await axios.post(
        `https://e-mena.herokuapp.com/api/v1/auth/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      setPostData({ ...postData, image: url })
      setProgress(false)
      setUploaded(true)
    } catch (error) {
      console.log(error)
    }
  }
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)

    let state = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    setPostData({ ...postData, content: state })
  }
  const submitPost = async () => {
    const post = await axios.post(
      'https://e-mena.herokuapp.com/api/v1/posts',
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  }
  const dispatch = useDispatch()
  const { holdPost } = bindActionCreators(actionCreators, dispatch)
  return (
    <div
      className="max-w-[1300px] mx-auto px-2 flex flex-col gap-8"
      style={{ direction: 'rtl' }}
    >
      <div className="flex items-center justify-center w-full md:!justify-start">
        <SectionHeader title="انشاء خبر"></SectionHeader>
      </div>
      <InputContainer
        label="تحميل صورة الخبر الرئيسية:"
        classes="flex items-center gap-4"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-2"
        >
          <div className="flex items-center w-full mx-auto relative">
            <input
              type="file"
              onChange={(e) => {
                setData(e.target.files)
              }}
              style={{ direction: 'ltr', border: '1px solid red' }}
              id="image"
              name="image"
              accept="image/*"
              required
            />
          </div>

          <button
            type="submit"
            className={`bg-red-500 text-gray-100 px-7 whitespace-nowrap py-1  text-xl rounded-lg ${
              progress || uploaded ? '!bg-gray-500 !text-gray-200' : ''
            }`}
            disabled={progress || uploaded}
          >
            رفع الصورة
          </button>
        </form>
        <h1 className={`${loaded && 'hidden'}`}>
          {!data ? 'اختار صورة' : 'اضغط على رفع الصورة'}
        </h1>
        <h1 className={`hidden ${progress && '!block'}`}>جارى الرفع</h1>

        <h1 className={`hidden ${uploaded && '!block'}`}> تم الرفع</h1>
      </InputContainer>
      <InputContainer label="عنوان الخبر:" classes="flex items-center gap-4">
        <input
          type="text"
          className="text-black rounded-lg px-2"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          required
        />
      </InputContainer>
      <InputContainer
        label="نبذة مختصرة عن الخبر"
        classes="flex items-center gap-4"
      >
        <textarea
          required
          minLength={100}
          maxLength={250}
          className="text-black min-w-[250px] min-h-[150px] rounded-lg px-2"
          value={postData.subTitle}
          onChange={(e) =>
            setPostData({ ...postData, subTitle: e.target.value })
          }
        />
      </InputContainer>
      <InputContainer label="تصنيف الخبر:" classes="flex items-center gap-4">
        <div className="flex flex-row items-center gap-1 text-base font-poppins">
          <label htmlFor="league">League of Legends</label>
          <input
            type="radio"
            value="league"
            name="category"
            id="league"
            onChange={(e) =>
              setPostData({ ...postData, category: e.target.value })
            }
          />
        </div>
        <div className="flex flex-row items-center gap-1 text-base font-poppins">
          <label htmlFor="valorant">Valorant</label>
          <input
            type="radio"
            value="valorant"
            id="valorant"
            name="category"
            onChange={(e) =>
              setPostData({ ...postData, category: e.target.value })
            }
          />
        </div>
        <div className="flex flex-row items-center gap-1 text-base font-poppins">
          <label htmlFor="pubg">PUBG</label>
          <input
            type="radio"
            id="pubg"
            value="PUBG"
            name="category"
            onChange={(e) =>
              setPostData({ ...postData, category: e.target.value })
            }
          />
        </div>
      </InputContainer>
      <InputContainer
        label="الخبر:"
        classes="flex flex-col  mx-auto items-center gap-4"
      ></InputContainer>{' '}
      <Editor
        editorState={editorState}
        toolbarClassName="text-black"
        editorClassName="bg-white text-black p-10 font-mkzy"
        // editorStyle={{ maxWidth: '800px' }}
        wrapperStyle={{ maxWidth: '100%' }}
        toolbarStyle={{ direction: 'ltr' }}
        // wrapperClassName="border border-red-500 min-h-[300px]"
        onEditorStateChange={onEditorStateChange}
      />
      <div className="flex items-start justify-center">
        <Link href="/preview">
          <a
            onClick={() => holdPost(postData)}
            className="text-white bg-red-500 px-8 py-3 rounded-lg"
          >
            معاينة الخبر
          </a>
        </Link>
      </div>
    </div>
  )
}

export default write
