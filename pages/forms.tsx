import React from "react"
import { useForm } from "react-hook-form"

const Forms = () => {
  const { register, watch } = useForm()
  return (
    <div className="">
      <form className="p-5 w-full flex flex-col gap-3">
        <input {...register("username")} type="text" placeholder="name" />
        <input {...register("email")} type="text" placeholder="email" />
        <input {...register("password")} type="text" placeholder="password" />
      </form>
    </div>
  )
}

export default Forms
