import type { NextPage } from "next"

import { cls } from "../../src/utils/className"

const write: NextPage = () => {
  return (
    <form className="px-5 py-10 text-[#eee]">
      <textarea
        rows={4}
        className={cls(
          "appearance-none w-full border-[#555] rounded-md bg-[#333] mb-2 p-3",
          "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
        )}
        placeholder="Ask a question!"
      />
      <button className="flex-1 py-3 bg-[#ff9634] rounded-lg focus:outline-none text-white font-medium hover:bg-[#f38f32] transition-all w-full">
        Submmit
      </button>
    </form>
  )
}

export default write
