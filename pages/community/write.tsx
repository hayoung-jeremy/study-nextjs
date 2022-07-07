import type { NextPage } from "next"

import { Button, Layout, TextArea } from "@components/common"

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <a>
        <form className="px-5 py-10 text-[#eee] flex flex-col gap-3">
          <TextArea placeholder="Ask a question!" />
          <Button text="Submmit" />
        </form>
      </a>
    </Layout>
  )
}

export default Write
