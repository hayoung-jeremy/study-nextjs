import type { NextPage } from "next"
import { Button } from "../../components/common"
import { cls } from "../../src/utils/className"

const Create: NextPage = () => {
  return (
    <section className="py-10 px-4 text-[#eee]">
      <div className="my-5">
        {/* name */}
        <label htmlFor="input" className="text-sm font-medium text-[#aaa]">
          name{" "}
        </label>
        <div className="mt-1">
          <input
            id="input"
            type="email"
            required
            className={cls(
              "appearance-none w-full px-3 py-2 border-[#555] rounded-[4px] bg-[#333]",
              "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
            )}
          />
        </div>

        {/* price input */}
        <label
          htmlFor="price"
          className="text-sm font-medium text-[#aaa] mb-1 block"
        >
          Price
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-[#aaa] text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className={cls(
              "appearance-none w-full pr-3 pl-7 py-2 border-[#555] rounded-md bg-[#333]",
              "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
            )}
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-[#aaa]">USD</span>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="mb-4">
        <label className="text-sm font-medium text-[#aaa] mb-1 block">
          Description
        </label>
        <div>
          <textarea
            rows={4}
            className={cls(
              "appearance-none w-full border-[#555] rounded-md bg-[#333] p-3",
              "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
            )}
          />
        </div>
      </div>

      {/* upload button */}
      <Button text="Go Live" />
    </section>
  )
}

export default Create
