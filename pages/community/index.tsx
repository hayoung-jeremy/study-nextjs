import type { NextPage } from "next"

const Community: NextPage = () => {
  return (
    <section className="text-[#eee] py-16 px-5">
      {[...Array(10)].map((item, index) => {
        return (
          <article
            key={index}
            className="flex flex-col items-start gap-2 mb-6 last:mb-0"
          >
            {/* pill */}
            <h2 className="text-xs bg-[#444] py-0.5 px-2.5 rounded-full text-white font-medium">
              동네질문
            </h2>

            {/* question */}
            <div className="mt-2 text-[#ccc]">
              <span className="text-signature-color font-medium">Q.</span> What
              is the best mandu restaurant?
            </div>
            <div className="mt-4 w-full flex justify-between items-center text-[#aaa] text-xs font-medium ">
              <span>니꼬</span>
              <span>18시간 전</span>
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
          </article>
        )
      })}
      <button className="fixed bottom-12 right-5 w-12 h-12 rounded-full bg-[#ffb833] hover:bg-[#d69722] transition-all flex items-center justify-center shadow-2xl">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </section>
  )
}

export default Community