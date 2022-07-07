import type { NextPage } from "next"
import { Layout, ProductPreview } from "@components/common"

const Liked: NextPage = () => {
  return (
    <Layout title="관심목록" canGoBack>
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
      </main>
    </Layout>
  )
}

export default Liked
