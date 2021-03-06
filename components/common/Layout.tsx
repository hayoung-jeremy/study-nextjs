import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { cls } from "@libs/client/utils"

interface Props {
  title?: string
  canGoBack?: boolean
  hasTabBar?: boolean
  children: React.ReactNode
}

const Layout = ({ title, canGoBack, hasTabBar, children }: Props) => {
  const router = useRouter()
  const onGoBack = () => {
    router.back()
  }

  return (
    <section className="text-[#eee] relative">
      {/* navigation */}
      <header className="bg-[#292929] max-w-lg w-full h-12 fixed border-b border-b-[#3a3a3a] top-0 left-[50%] translate-x-[-50%] flex items-center justify-center shadow-lg">
        {canGoBack && (
          <button
            onClick={onGoBack}
            className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        {title && <h1 className="text-lg font-medium">{title}</h1>}
      </header>

      <main className={cls(hasTabBar ? "pb-16" : "", "pt-12")}>{children}</main>

      {/* tab bar */}
      {hasTabBar && (
        <nav className="bg-[#292929] max-w-lg w-full h-16 fixed border-t border-t-[#3a3a3a] bottom-0 left-[50%] translate-x-[-50%] flex items-center justify-around shadow-lg gap-2">
          <Link href="/">
            <a
              className={cls(
                "flex flex-col items-center min-w-[48px] w-fit",
                router.pathname === "/" ? "text-signature-color" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-[10px] font-medium mt-[1px]">???</span>
            </a>
          </Link>
          <Link href="/community">
            <a
              className={cls(
                "flex flex-col items-center min-w-[48px] w-fit",
                router.pathname === "/community" ? "text-signature-color" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span className="text-[10px] font-medium mt-[1px]">????????????</span>
            </a>
          </Link>
          <Link href="/chats">
            <a
              className={cls(
                "flex flex-col items-center min-w-[48px] w-fit",
                router.pathname === "/chats" ? "text-signature-color" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-[10px] font-medium mt-[1px]">??????</span>
            </a>
          </Link>
          <Link href="/streams">
            <a
              className={cls(
                "flex flex-col items-center min-w-[48px] w-fit",
                router.pathname === "/streams" ? "text-signature-color" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-[10px] font-medium mt-[1px]">?????????</span>
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={cls(
                "flex flex-col items-center min-w-[48px] w-fit",
                router.pathname === "/profile" ? "text-signature-color" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-[10px] font-medium mt-[1px]">
                ?????? ??????
              </span>
            </a>
          </Link>
        </nav>
      )}
    </section>
  )
}

export default Layout
