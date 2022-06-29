import { useState } from "react"
import type { NextPage } from "next"

import { Layout } from "../components/common"
import FloatingButton from "../components/common/floatingButton"
import { ProductPreview } from "../components/home"

const Home: NextPage = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [isFavorites, setIsFavorites] = useState(false)

  return (
    <Layout title="홈" hasTabBar>
      <section className="bg-[#222] text-[#eee]">
        <main className=" flex flex-col gap-[1px]">
          {[...Array(10)].map((_, i) => (
            <ProductPreview
              key={i}
              productName="iphone 14"
              productOption="Black"
              productPrice={80 + i}
              countComment={i + 1}
              countLiked={i}
            />
          ))}
          <FloatingButton buttonType="add" />
        </main>
      </section>
    </Layout>
  )
}

export default Home
