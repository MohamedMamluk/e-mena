import React from 'react'
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { convertFromRaw, convertToRaw } from 'draft-js'
import { useSelector } from 'react-redux'
import { State } from '../state'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import SectionHeader from '../components/common/SectionHeader'
import PreviewButtons from '../components/common/PreviewButtons'
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

const preview = () => {
  const post = useSelector((state: State) => state.post)
  const [preview, setPreview] = React.useState(EditorState.createEmpty())
  React.useEffect(() => {
    const postContent = convertFromRaw(JSON.parse(post.content))
    setPreview(EditorState.createWithContent(postContent))
  }, [])
  var date = new Date()
  var dateString = date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
  const writer = {
    name: 'chetos',
    image:
      'https://scontent.faly3-1.fna.fbcdn.net/v/t1.6435-9/90018423_2598665993743519_8099621696719290368_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=prvZWj1fxHAAX9GyQvV&_nc_ht=scontent.faly3-1.fna&oh=2e806df7459fbbe17c472902bf60806c&oe=61CC9EA8'
  }
  return (
    <section
      style={{ direction: 'rtl' }}
      className="max-w-[1300px] mx-auto px-2 flex flex-col items-center gap-8"
    >
      <SectionHeader title="معاينة الخبر" />
      <div id="post__image" className="max-w-3xl h-96">
        <img src={post.image} alt="" className="h-full object-cover" />
        <div className="flex justify-between w-full">
          <p>{dateString}</p>
          <p>{post.category}</p>
        </div>
      </div>
      <div>
        <h1>{post.title}</h1>
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
      <div className="w-full flex flex-row justify-between">
        <PreviewButtons
          name="نشر"
          borderColor="border-green-600"
          textColor="text-green-600"
          hoverBG="bg-green-600"
          onClick={() => console.log('publish')}
        />
        <PreviewButtons
          name="تعديل"
          borderColor="border-yellow-600"
          textColor="text-yellow-600"
          hoverBG="bg-yellow-600"
          onClick={() => console.log('edit')}
        />
        <button className="border border-red-600 text-red-600  hover:bg-red-600 hover:text-white px-8 py-2 rounded-lg text-2xl">
          حذف
        </button>
      </div>
    </section>
  )
}

export default preview
