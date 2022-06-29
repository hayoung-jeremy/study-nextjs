import type { NextPage } from "next"
import { Layout } from "../../components/common"
import FloatingButton from "../../components/common/floatingButton"

const Stream: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <section className="py-10 px-4 text-[#eee]">
        <ul className="flex flex-col gap-5">
          {[...Array(3)].map((_, i) => (
            <li key={i}>
              <div className="w-full bg-[#333] aspect-video rounded-md shadow-xl"></div>
              <h2 className="text-lg font-medium text-[#ccc] mt-2">
                {"Let's try potatoes"}
              </h2>
            </li>
          ))}
        </ul>
        <FloatingButton buttonType="live" />
      </section>
    </Layout>
  )
}

export default Stream
