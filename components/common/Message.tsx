import React from "react"
import { cls } from "../../libs/client/utils"

interface Props {
  message: string
  reversed?: boolean
  avatarUrl?: string
}

const Message = ({ message, reversed, avatarUrl }: Props) => {
  return (
    <div
      className={cls(
        "flex items-start gap-2",
        reversed ? "flex-row-reverse" : ""
      )}
    >
      <div className="w-8 h-8 bg-[#444] rounded-full" />
      <div className="max-w-[50%] w-fit text-sm text-[#ccc] border border-[#444] py-1 px-2.5 rounded-md">
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Message
