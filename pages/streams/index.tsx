import type { NextPage } from "next"
import Layout from "../../components/layout"

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
        <button className="fixed bottom-12 right-5 w-12 h-12 rounded-full bg-[#ffb833] hover:bg-[#d69722] transition-all flex items-center justify-center shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </section>
    </Layout>
  )
}

export default Stream
