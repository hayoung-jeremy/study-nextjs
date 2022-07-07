import React from "react"
import { FieldErrors, useForm } from "react-hook-form"
import { cls } from "@libs/client/utils"

interface LoginForm {
  username: string
  password: string
  email: string
}

const Forms = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    reset, // 모든 form 항목 내용 지우기
    resetField, // 특정 input 항목 내용 지우기
  } = useForm<LoginForm>({
    mode: "onChange",
  })
  const onValid = (data: LoginForm) => {
    console.log(data)
  }
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors)
  }
  console.log(errors)

  return (
    <div className="">
      <form
        className="p-5 w-full flex flex-col gap-3"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <div>
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
            className="bg-[#3f3b36] text-[#eee] w-full outline-none focus:outline-none"
          />
          <span className="text-red-400">{errors.username?.message}</span>
        </div>
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              validate: {
                gmailIsNotAvailable: value =>
                  !value.includes("@gmail.com") || "Gmail is not allowed",
              },
            })}
            type="text"
            placeholder="email"
            className="bg-[#3f3b36] text-[#eee] w-full outline-none"
          />
          <span className="text-red-400">{errors.email?.message}</span>
        </div>
        <div>
          <input
            {...register("password", { required: "Password is required" })}
            type="text"
            placeholder="password"
            className={cls(
              "bg-[#3f3b36] text-[#eee] w-full outline-none",
              errors.password ? "border border-red-400" : ""
            )}
          />
          <span className="text-red-400">{errors.password?.message}</span>
        </div>
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
