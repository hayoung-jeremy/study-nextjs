import type { NextPage } from "next"
import { Button, Input, Layout, TextArea } from "../../components/common"
import { cls } from "../../src/utils/className"

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <section className="py-10 px-4 text-[#eee]">
        <div className="flex flex-col gap-3 mb-3">
          <Input name="name" label="Name" />
          <Input name="price" label="Price" kind="price" type="number" />
          <TextArea label="Description" name="description" />
          <Button text="Go Live" />
        </div>
      </section>
    </Layout>
  )
}

export default Create
