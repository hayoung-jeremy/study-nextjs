import type { NextPage } from "next"
import { Button, TextArea } from "../../components/common"

const Write: NextPage = () => {
  return (
    <form className="px-5 py-10 text-[#eee]">
      <TextArea placeholder="Ask a question!" />
      <Button text="Submmit" />
    </form>
  )
}

export default Write
