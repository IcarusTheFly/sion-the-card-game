'use client'

// import { Button } from "@nextui-org/react"
import { Button } from "@nextui-org/button"
import { Plus } from "lucide-react"
import Link from "next/link"
// import { useMediaQuery } from "@react-hook/media-query"

export default function FloatingNewDeckButton() {
//   const isMobile = useMediaQuery('(max-width: 768px)')

//   if (!isMobile) {
//     return null
//   }

  return (
    <Button
      as={Link}
      href="/decks/new"
      className="fixed bottom-4 right-4 w-14 h-14 min-w-0 rounded-full border-2 border-yellow-400 bg-blue-900 text-yellow-400 shadow-lg z-50"
      aria-label="Crear nuevo mazo"
    >
      <Plus className="w-6 h-6" />
    </Button>
  )
}