import type { NextPage } from "next"
import { Layout, ProductPreview } from "../../components/common"

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <main className=" flex flex-col gap-[1px]">
        {[...Array(3)].map((_, i) => (
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

export default Bought
