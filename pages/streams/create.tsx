import type { NextPage } from "next"
import { Button, Input } from "../../components/common"
import { cls } from "../../src/utils/className"

const Create: NextPage = () => {
  return (
    <section className="py-10 px-4 text-[#eee]">
      <div className="flex flex-col gap-3 mb-3">
        <Input name="name" label="Name" />
        <Input name="price" label="Price" kind="price" type="number" />
      </div>

      {/* description */}
      <div className="mb-4">
        <label className="text-sm font-medium text-[#aaa] mb-1 block">
          Description
        </label>
        <div>
          <textarea
            rows={4}
            className={cls(
              "appearance-none w-full border-[#555] rounded-md bg-[#333] p-3",
              "focus:ring-[#fac25b66] focus:border-[#fac25b66] focus:outline-none"
            )}
          />
        </div>
      </div>

      <Button text="Go Live" />
    </section>
  )
}

export default Create
