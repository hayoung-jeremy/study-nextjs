import Link from "next/link"
import React from "react"

interface Props {
  id: number
  title?: string
  option?: string
  price?: number
  liked?: number
  comment?: number
  onGoToProductDetail?: () => void
}

const ProductPreview = ({
  id,
  title,
  option,
  price,
  liked,
  comment,
  onGoToProductDetail,
}: Props) => {
  return (
    <Link href={`/items/${id}`}>
      <a
        onClick={onGoToProductDetail}
        className="flex justify-between bg-[#333] cursor-pointer py-4 px-5"
      >
        <div className="flex gap-3">
          <div className="bg-[#444] w-20 h-20 rounded" />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium">{title}</h3>
            <span className="text-[#aaa] text-sm">{option}</span>
            <span className="font-medium mt-1">${price}</span>
          </div>
        </div>

        <div className="flex gap-3 items-end">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{liked}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>{comment}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
