import type { NextPage } from "next"
import { cls } from "../../src/utils/className"

const StreamDetail: NextPage = () => {
  return (
    <section className="py-10 px-4 text-[#eee]">
      {/* video stream */}
      <div className="w-full bg-[#333] aspect-video rounded-md shadow-xl"></div>
      <h2 className="text-2xl font-semibold text-[#ccc] mt-2">
        {"Let's try potatoes"}
      </h2>

      {/* chats */}
      <article className="py-10 h-[50vh] px-4 flex flex-col gap-4 overflow-y-auto">
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
      </article>

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

export default StreamDetail