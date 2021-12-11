import { ParsedUrlQuery } from 'querystring'

export interface User {
  name: string
  email: string
  image: string
  userId: string
  role: string
}
export interface Post {
  _id: string
  title: string
  subTitle: string
  category: string
  content: string
  image: string
  createdAt: string
  writer: string
}
export interface PostWriting {
  image: string
  title: string
  subTitle: string
  category: string
  content: string
}
export interface Writer {
  name: string
  image: string
}
export interface GetPosts {
  msg: string
  posts: Post[]
  length: number
}
export interface GetPost {
  msg: string
  post: Post
  writer: Writer
}
export interface Id extends ParsedUrlQuery {
  id: string
}
export interface PostWriting {
  image: string
  title: string
  subTitle: string
  category: string
  content: string
}
