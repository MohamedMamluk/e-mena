import axios from 'axios'
import React from 'react'
import { Post, PostWriting } from '../types'
export const submitPost = async (postData: PostWriting, token: string) => {
  try {
    const res = await axios.post(
      'https://e-mena.herokuapp.com/api/v1/posts',
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const data = res.data
    return data.post
  } catch (error) {
    alert(error)
  }
}
export const signout = async () => {
  localStorage.clear()
}
export const validatePost = (
  postData: PostWriting,
  setValid: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setValid(true)

  if (!postData.image) {
    alert('برجاء مراجعة الصورة')
    setValid(false)
  }
  if (!postData.title || postData.title.length < 15) {
    alert('برجاء التأكد من ان العنوان يحتوى على 15 حرف على الاقل')
    setValid(false)
  }
  if (!postData.subTitle) {
    alert('برجاء التأكد من ان الملخص يحتوى على 50 حرف على الاقل')
    setValid(false)
  }
  if (!postData.category) {
    alert('برجاء التأكد من اختيار التصنيف')
    setValid(false)
  }
  if (!postData.content) {
    alert('برجاء التأكد كتابة نص الخبر')
    setValid(false)
  }
}
