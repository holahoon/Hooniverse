import { type ReactNode } from "react"

import PageHeader from "@/components/layout/page-header"

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: "Hooniverse blog",
  description: "This is DK's blog",
}

export default function BlogLayout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <PageHeader header="TIL">
        <p>Today I learned.</p>
        <p>And sharing with the world.</p>
      </PageHeader>

      <div className="flex">{children}</div>
    </>
  )
}
