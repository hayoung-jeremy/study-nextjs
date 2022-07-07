import type { NextPage } from "next"
import Link from "next/link"

import { Layout } from "@components/common"

const chat: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <section className="text-[#eee] py-10 ">
        {[...Array(3)].map((_, i) => {
          return (
            <Link href={`/chats/${i}`} key={i}>
              <a className="px-5 flex items-center gap-3 py-3 border-b last:border-b-0 border-b-[#444] cursor-pointer">
                <div className="w-12 h-12 bg-[#333] rounded-full" />
                <div>
                  <p className="font-medium text-[#aaa]">Steve Jebs</p>
                  <p className="text-sm text-[#ccc]">
                    See you tomorrow in the corner at 2pm!
                  </p>
                </div>
              </a>
            </Link>
          )
        })}
      </section>
    </Layout>
  )
}

export default chat
