import Link from 'next/link'

// ** Components Import
import { Button } from '@/components/ui/button'

export default function SearchLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="container py-12 md:py-20 text-center">
      <div className="flex justify-end mb-8">
        <Link href="/">
          <Button type="submit">Back</Button>
        </Link>
      </div>
      {children}
    </main>
  )
}
