import type { NextPage } from "next"
import { Layout } from "../../components/common"

const ItemDetail: NextPage = () => {
  return (
    <Layout title="item" canGoBack>
      <section className="px-5 text-[#eee] py-10">
        <main>
          {/* product image */}
          <div className="h-96 bg-[#333]" />

          {/* user profile */}
          <div className="flex items-center gap-3 py-3 border-b border-b-[#444] cursor-pointer">
            <div className="w-12 h-12 bg-[#333] rounded-full" />
            <div>
              <p className="text-sm font-medium text-[#aaa]">Steve Jebs</p>
              <p className="text-xs font-medium text-[#ccc]">
                View profile &rarr;
              </p>
            </div>
          </div>

          {/* product info */}
          <article className="mt-5">
            <h1 className="text-3xl font-bold">Galaxy S50</h1>
            <span className="text-3xl mt-3">$140</span>
            <p className="text-[#ccc] my-6">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between">
              <button className="flex-1 py-3 bg-[#ff9634] rounded-lg focus:outline-none text-white font-medium hover:bg-[#f38f32] transition-all">
                Talk to seller
              </button>
              <button className="focus:outline-none p-3 flex items-center justify-center text-[#ccc]">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </article>
        </main>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Similar items</h2>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div className="w-56 mb-4 h-56 bg-[#333]" />
                <h3 className="text-[#aaa]">Galaxy S60</h3>
                <p className="text-sm leading-4 text-[#ccc] font-medium">$6</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ItemDetail
