import type { NextPage } from "next"
import { cls } from "../../src/utils/className"

const ChatDetail: NextPage = () => {
  return (
    <section className="flex flex-col gap-3 px-5 pt-10 text-[#eee] min-h-screen pb-20">
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 bg-[#444] rounded-full" />
        <div className="max-w-[50%] w-fit text-sm text-[#ccc] border border-[#444] py-1 px-2.5 rounded-md">
          Hi how much are you selling them for?
        </div>
      </div>
      <div className="flex flex-row-reverse items-start gap-2">
        <div className="w-8 h-8 bg-[#444] rounded-full" />
        <div className="max-w-[50%] w-fit text-sm text-[#ccc] border border-[#444] py-1 px-2.5 rounded-md">
          I want ￦20,000
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 bg-[#444] rounded-full" />
        <div className="max-w-[50%] w-fit text-sm text-[#ccc] border border-[#444] py-1 px-2.5 rounded-md">
          미쳤어
        </div>
      </div>

      {/* chat input */}
      <aside className="fixed w-full mx-auto max-w-md bottom-[20px] inset-x-0">
        <div className="flex items-center relative">
          <input
            type="text"
            className={cls(
              "appearance-none w-full pl-3 py-2 pr-12 border-[#555] rounded-[4px] bg-[#333]",
              "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
            )}
          />
          <button className="absolute inset-y-0 flex items-center justify-center w-10 right-0 bg-[#555] rounded-r-md cursor-pointer">
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
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
          </button>
        </div>
      </aside>
    </section>
  )
}

export default ChatDetail
