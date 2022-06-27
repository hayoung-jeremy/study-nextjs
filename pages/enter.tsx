import React, { useState } from "react"
import { cls } from "../src/utils/className"

const Enter = () => {
  const [method, setMethod] = useState<"email" | "phone">("email")
  const onEmailClick = () => setMethod("email")
  const onPhoneClick = () => setMethod("phone")
  return (
    <section className="mt-16 px-5 bg-[#222]">
      <h3 className="text-3xl text-center font-bold text-[#eee]">
        Welcome to Carrot
      </h3>
      <main className="mt-16">
        {/* tab menu */}
        <div className="flex flex-col items-center ">
          <h5 className="text-gray-500 font-medium text-sm">Enter using:</h5>
          <div className="w-full grid grid-cols-2 mt-8">
            <button
              onClick={onEmailClick}
              className={cls(
                "font-medium text-base px-4 py-3 rounded-t-lg",
                method === "email"
                  ? "border-b-2 border-b-signature-color text-signature-color "
                  : "text-gray-500 border-b-2 border-b-[#666]"
              )}
            >
              Email
            </button>
            <button
              onClick={onPhoneClick}
              className={cls(
                "font-medium text-base px-4 py-3 rounded-t-lg",
                method === "phone"
                  ? "border-b-2 border-b-signature-color text-signature-color "
                  : "text-gray-500 border-b-2 border-b-[#666]"
              )}
            >
              Phone
            </button>
          </div>
        </div>
        {/* form */}
        <form className="flex flex-col mt-8">
          <label htmlFor="input" className="text-sm font-medium text-[#aaa]">
            {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone number" : null}
          </label>
          <div className="mt-1">
            {method === "email" ? (
              <input
                id="input"
                type="email"
                required
                className={cls(
                  "appearance-none w-full px-3 py-2 border-[#555] rounded-[4px] bg-[#333]",
                  "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
                )}
              />
            ) : null}
            {method === "phone" ? (
              <div className="flex items-center rounded">
                <span className="flex items-center justify-center px-3 py-2 rounded-l border border-[#555] border-r-0 bg-[#333] text-[#aaa] select-none">
                  +82
                </span>
                <input
                  id="input"
                  type="number"
                  required
                  className={cls(
                    "appearance-none w-full px-3 py-2 border-[#555] rounded-r-[4px] bg-[#333]",
                    "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
                  )}
                />
              </div>
            ) : null}
          </div>
          <button className="py-3 border border-signature-color mt-3 rounded text-signature-color font-medium hover:bg-[#fac25b11] transition-all">
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form>
        {/* github & twitter */}
        <div>
          <div>
            <div
              className={cls(
                "relative flex items-center justify-center mt-2 text-sm text-gray-500",
                "before:absolute before:top-[50%] before:left-0 before:bg-[#666] before:w-[35%] before:h-[1px]",
                "after:absolute after:top-[50%] after:right-0 after:bg-[#666] after:w-[35%] after:h-[1px]"
              )}
            >
              <span>Or enter with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <button className="border border-blue-400 px-3 py-3 rounded flex items-center justify-center text-blue-400 hover:bg-[rgba(96,165,250,.1)] transition-all">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="border-purple-400 border px-3 py-3 rounded flex items-center justify-center text-[rgba(192,132,252,1)] hover:bg-[rgba(192,132,252,.1)] transition-all">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Enter
