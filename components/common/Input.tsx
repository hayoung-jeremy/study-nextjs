import React from "react"
import type { UseFormRegisterReturn } from "react-hook-form"

import { cls } from "../../libs/client/utils"

interface Props {
  label: string
  name: string
  kind?: "text" | "phone" | "price"
  type?: string
  register?: UseFormRegisterReturn
}

const Input = ({ label, name, kind = "text", type, register }: Props) => {
  return (
    <div className="text-[#eee]">
      <label
        htmlFor={name}
        className="text-sm font-medium text-[#aaa] mb-1.5 block"
      >
        {label}
      </label>
      {kind === "text" && (
        <input
          id={name}
          type={type}
          {...register}
          className={cls(
            "block appearance-none w-full px-3 py-2 border border-[#555] rounded-[4px] bg-[#333]",
            "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
          )}
        />
      )}
      {kind === "phone" && (
        <div className="flex items-center rounded">
          <span className="flex items-center justify-center px-3 py-2 rounded-l border border-[#555] border-r-0 bg-[#333] text-[#aaa] select-none">
            +82
          </span>
          <input
            id={name}
            type={type}
            {...register}
            className={cls(
              "block appearance-none w-full px-3 py-2 border border-[#555] rounded-r-[4px] bg-[#333]",
              "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
            )}
          />
        </div>
      )}
      {kind === "price" && (
        <div className="relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-[#aaa] text-sm">$</span>
          </div>
          <input
            id={name}
            type={type}
            {...register}
            placeholder="0.00"
            className={cls(
              "appearance-none w-full pl-7 pr-14 py-2 border border-[#555] rounded-md bg-[#333]",
              "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
            )}
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-[#aaa]">USD</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Input
