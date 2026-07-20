"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

export type FaqItem = {
  question: string
  /** Rendered in the accordion; may contain links. */
  answer: React.ReactNode
}

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <li key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
            >
              <span className="text-[15.5px] font-medium text-foreground">
                {item.question}
              </span>
              <Plus
                className={`size-4 shrink-0 text-brand transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              />
            </button>
            {/* Always in the DOM (visibility toggled with CSS) so the answer
                text and its links are server-rendered for search engines. */}
            <div
              className={`pb-5 pr-8 text-[15px] leading-[1.65] text-foreground/70 [&_a]:text-brand [&_a]:underline-offset-4 hover:[&_a]:underline ${
                isOpen ? "" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
