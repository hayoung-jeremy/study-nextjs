import { useState } from "react"
import type { NextPage } from "next"

import { FloatingButton, Layout, ProductPreview } from "@components/common"

const Home: NextPage = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [isFavorites, setIsFavorites] = useState(false)

  return (
    <Layout title="홈" hasTabBar>
      <main className=" flex flex-col gap-[1px]">
        {[...Array(10)].map((_, i) => (
          <ProductPreview
            key={i}
            id={i}
            title="iphone 14"
            option="Black"
            price={80 + i}
            liked={i + 1}
            comment={i}
          />
        ))}
        <FloatingButton buttonType="add" href="/items/upload" />
      </main>
    </Layout>
  )
}

export default Home
