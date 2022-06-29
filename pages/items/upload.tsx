import type { NextPage } from "next"

import { Button, Input, Layout, TextArea } from "../../components/common"

const Upload: NextPage = () => {
  return (
    <Layout canGoBack title="상품 등록">
      <section className="p-5 text-[#eee]">
        {/* upload image */}
        <article>
          <label className="w-full flex items-center justify-center border-2 border-dashed border-[#aaa] py-16 rounded-lg hover:text-signature-color hover:border-signature-color transition-all cursor-pointer">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
        </article>

        <div className="flex flex-col mt-5 gap-3">
          <Input name="name" label="Name" />
          <Input name="price" label="Price" kind="price" type="number" />
          <TextArea label="Description" name="description" />
          <Button text="Upload product" />
        </div>
      </section>
    </Layout>
  )
}

export default Upload
