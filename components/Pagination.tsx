import React from 'react'
import Pagination from '@mui/material/Pagination'

interface PaginationProps {
  postsPerPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalPosts: number
}

const PaginationWrapper: React.FC<PaginationProps> = ({
  postsPerPage,
  setPage,
  totalPosts
}) => {
  const pages = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
    console.log(pages)
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <div className="flex justify-center ">
      <Pagination
        count={pages.length}
        color="secondary"
        size="large"
        className=" bg-white rounded-full"
        onChange={handleChange}
        style={{ direction: 'ltr', color: 'white' }}
      />
    </div>
  )
}

export default PaginationWrapper
