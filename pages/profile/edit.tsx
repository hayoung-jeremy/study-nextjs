import type { NextPage } from "next"
import { cls } from "../../src/utils/className"

const EditProfile: NextPage = () => {
  return (
    <section className="py-10 px-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-[#444]" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-[#555] rounded-md text-sm font-medium text-[#ccc]"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      {/* email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-[#aaa]">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          className={cls(
            "appearance-none w-full px-3 py-2 border-[#555] rounded-[4px] bg-[#333]",
            "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
          )}
        />
      </div>

      {/* phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium text-[#aaa]">
          Phone number
        </label>
        <div className="flex items-center rounded">
          <span className="flex items-center justify-center px-3 py-2 rounded-l border border-[#555] border-r-0 bg-[#333] text-[#aaa] select-none">
            +82
          </span>
          <input
            id="phone"
            type="number"
            required
            className={cls(
              "appearance-none w-full px-3 py-2 border-[#555] rounded-r-[4px] bg-[#333]",
              "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
            )}
          />
        </div>
      </div>

      <button className="flex-1 py-3 bg-[#ff9634] rounded-lg outline-none text-white font-medium hover:bg-[#f38f32] transition-all w-full">
        Update profile
      </button>
    </section>
  )
}

export default EditProfile
