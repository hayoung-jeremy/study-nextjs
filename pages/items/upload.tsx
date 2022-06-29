import type { NextPage } from "next"
import { cls } from "../../src/utils/className"

const Upload: NextPage = () => {
  return (
    <section className="py-16 px-5 text-[#eee]">
      <article>
        <label className="w-full flex items-center justify-center border-2 border-dashed border-[#aaa] py-16 rounded-lg hover:text-signature-color hover:border-signature-color transition-all cursor-pointer">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input type="file" className="hidden" />
        </label>
      </article>

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
      <button className="flex-1 py-3 bg-[#ff9634] rounded-lg focus:outline-none text-white font-medium hover:bg-[#f38f32] transition-all w-full">
        Upload product
      </button>
    </section>
  )
}

export default Upload
