import React from "react"
import { cls } from "../../libs/utils"

interface Props {
  text: string
  type?: "default" | "outlined"
}

const Button = ({ text, type = "default" }: Props) => {
  return (
    <button
      className={cls(
        "flex-1 w-full py-3 rounded outline-none font-medium transition-all",
        type === "outlined"
          ? "border border-signature-color bg-transparent text-signature-color hover:bg-[#fac25b11]"
          : "text-white hover:bg-[#e68730] bg-[#ff9634]"
      )}
    >
      {text}
    </button>
  )
}

export default Button
