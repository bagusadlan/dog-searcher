import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SearchPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-2 md:p-24">
      <Button type="submit">
        <Link href="/">Back</Link>
      </Button>
    </main>
  )
}
