"use client"

/** Prints only the offer checklist (see the html[data-print] rules in globals.css). */
export function PrintChecklistButton() {
  function printChecklist() {
    const root = document.documentElement
    root.dataset.print = "sjekkliste"
    window.addEventListener("afterprint", () => delete root.dataset.print, { once: true })
    window.print()
  }

  return (
    <button
      type="button"
      onClick={printChecklist}
      className="cursor-pointer text-[15px] font-medium text-brand underline-offset-4 hover:underline print:hidden"
    >
      Skriv ut
    </button>
  )
}
