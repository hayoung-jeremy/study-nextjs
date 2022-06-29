import type { NextPage } from "next"
import { Button, Input } from "../../components/common"
import { cls } from "../../src/utils/className"

const EditProfile: NextPage = () => {
  return (
    <section className="py-10 px-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-[#444]" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-[#555] rounded-md text-sm font-medium text-[#ccc]"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      {/* email */}
      <Input label="Email address" kind="text" required name="email" />

      {/* phone */}
      <Input label="Phone number" kind="phone" required name="email" />

      {/* update button */}
      <Button text="Update profile" />
    </section>
  )
}

export default EditProfile
