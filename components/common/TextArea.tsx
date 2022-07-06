import React from "react"
import { cls } from "../../libs/client/utils"

interface Props {
  label?: string
  name?: string
  [key: string]: any
}

const TextArea = ({ label, name, ...rest }: Props) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-[#aaa] mb-1.5 block"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        {...rest}
        rows={4}
        className={cls(
          "appearance-none w-full border-[#555] rounded-md bg-[#333] p-3",
          "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
        )}
      />
    </div>
  )
}

export default TextArea
