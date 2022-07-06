import type { NextPage } from "next"
import { Button, Input, Layout } from "../../components/common"

const EditProfile: NextPage = () => {
  return (
    <Layout title="프로필 편집" canGoBack>
      <main className="flex flex-col gap-3 px-5 pt-5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#444]" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-[#555] rounded-md text-sm font-medium text-[#ccc]"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        {/* email */}
        <Input label="Email address" kind="text" name="email" />

        {/* phone */}
        <Input label="Phone number" kind="phone" name="email" />

        {/* update button */}
        <Button text="Update profile" />
      </main>
    </Layout>
  )
}

export default EditProfile
