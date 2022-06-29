import type { NextPage } from "next"
import { Button, Layout, TextArea } from "../../components/common"
import { cls } from "../../src/utils/className"

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <section className="text-[#eee]">
        {/* pill */}
        <h2 className="ml-5 my-3 text-xs bg-[#444] py-0.5 px-2.5 rounded-full text-white font-medium w-fit">
          동네질문
        </h2>

        {/* user profile */}
        <div className="px-5 flex items-center gap-3 py-4 border-b border-b-[#444] cursor-pointer mb-5">
          <div className="w-10 h-10 bg-[#333] rounded-full" />
          <div>
            <p className="text-sm font-medium text-[#aaa]">Steve Jebs</p>
            <p className="text-xs font-medium text-[#ccc]">
              View profile &rarr;
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5">
          {/* question */}
          <div className="mt-2 text-[#ccc]">
            <span className="text-signature-color font-medium">Q.</span> What is
            the best mandu restaurant?
          </div>

          {/* comments */}
          <ul className="flex gap-5 border-y w-full py-2 border-y-[#444] text-[#ccc]">
            <li className="flex gap-2 items-center text-sm">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </li>
            <li className="flex gap-2 items-center text-sm">
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
              <span>답변 1</span>
            </li>
          </ul>
        </div>

        {/* answer */}
        <ul className="flex flex-col gap-4 px-5 my-5">
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-50 rounded-full" />
            <div>
              <span className="text-sm block font-medium text-[#ccc]">
                Steve Jebs
              </span>
              <span className="text-xs block font-medium text-[#aaa]">
                2시간 전
              </span>
              <p className="text-[#ccc] mt-1">
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-50 rounded-full" />
            <div>
              <span className="text-sm block font-medium text-[#ccc]">
                Steve Jebs
              </span>
              <span className="text-xs block font-medium text-[#aaa]">
                2시간 전
              </span>
              <p className="text-[#ccc] mt-1">
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </li>
        </ul>

        {/* reply */}
        <div className="px-5 flex flex-col gap-3">
          <TextArea placeholder="Answer this question!" />
          <Button text="Reply" />
        </div>
      </section>
    </Layout>
  )
}

export default CommunityPostDetail
