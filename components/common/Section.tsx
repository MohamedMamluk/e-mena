import React from 'react'
import SectionCard from './SectionCard'
import SectionHeader from './SectionHeader'
import { Post } from '../../types/index'
interface SectionProps {
  posts: Post[]
  title: string
}
const Section: React.FC<SectionProps> = ({ posts, title }) => {
  return (
    <section
      style={{ direction: 'rtl' }}
      className="max-w-[1400px] mx-auto mt-16 px-4"
    >
      <SectionHeader title={title}></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {posts.map((post, index) => (
          <SectionCard post={post} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Section
