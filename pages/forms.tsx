import React from "react"
import { FieldErrors, useForm } from "react-hook-form"

interface LoginForm {
  username: string
  password: string
  email: string
}

const Forms = () => {
  const { register, watch, handleSubmit } = useForm<LoginForm>()
  const onValid = (data: LoginForm) => {
    console.log(data)
  }
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors)
  }
  return (
    <div className="">
      <form
        className="p-5 w-full flex flex-col gap-3"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              message: "The username should be longer than 5 characters.",
              value: 5,
            },
          })}
          type="text"
          placeholder="name"
          className="bg-[#3f3b36] text-[#eee]"
        />
        <input
          {...register("email", { required: "Email is required" })}
          type="text"
          placeholder="email"
          className="bg-[#3f3b36] text-[#eee]"
        />
        <input
          {...register("password", { required: "Password is required" })}
          type="text"
          placeholder="password"
          className="bg-[#3f3b36] text-[#eee]"
        />
        <input
          type="submit"
          value="Create Account"
          className="bg-[#3f3b36] text-[#eee] py-3"
        />
      </form>
    </div>
  )
}

export default Forms
