import React from 'react'
import Head from 'next/head'
import '../../axios'
import { Id, GetPosts } from '../../types/index'
import SectionHeader from '../../components/common/SectionHeader'
import { useRouter } from 'next/router'
import PaginationWrapper from '../../components/Pagination'
import axios from 'axios'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import CategorySectionCard from '../../components/common/CategorySectionCard'

const category = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const postsPerPage = 5
  const [page, setPage] = React.useState(1)
  const indexOfLastPost = postsPerPage * page
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const postsToShow = data.posts.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div
      className="max-w-[1300px] mx-auto px-2 py-8"
      style={{ direction: 'rtl' }}
    >
      <Head>
        <title>{`${router.query.id} news`}</title>
        <meta
          name="description"
          content={`check out ${router.query.id} news`}
        />
        <link rel="canonical" href="https://e-mena.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${router.query.id} news`} />
        <meta property="og:type" content="news.esports" />
        <meta
          property="og:url"
          content={`https://e-mena.vercel.app/category/${router.query.id}`}
        />
        <meta property="og:image" content="/E-Mena.png" />
        <meta
          property="og:description"
          content={`Check out the latest ${router.query.id} news`}
        />
        <meta property="og:site_name" content="E-MENA" />
        <meta name="twitter:title" content={`${router.query.id} news`} />

        <meta
          name="twitter:description"
          content={`Check out the latest ${router.query.id} news`}
        />

        <meta name="twitter:image" content="/E-Mena.png" />

        <meta
          name="twitter:site"
          content={`https://e-mena.vercel.app/category/${router.query.id}`}
        />

        <meta name="twitter:creator" content="Mamluk"></meta>
        <link rel="icon" href="/E-Mena.png" />
      </Head>
      <div className="flex items-center justify-center w-full md:!justify-start">
        <SectionHeader
          title={`اخبار ${
            router.query.id == 'league' ? 'League of Legends' : router.query.id
          }`}
        />
      </div>

      {postsToShow.map((post, index) => (
        <CategorySectionCard post={post} key={index} />
      ))}
      <PaginationWrapper
        postsPerPage={postsPerPage}
        setPage={setPage}
        totalPosts={data.length}
      />
    </div>
  )
}

export default category
//SSR
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params as Id
  const res = await axios.get(`/posts?category=${id}`)
  const data: GetPosts = res.data
  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export const getStaticPaths = async () => {
  const res = await axios.get(`/posts`)
  const data: GetPosts = await res.data

  const paths = data.posts.map((item) => ({
    params: { id: item.category }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}
