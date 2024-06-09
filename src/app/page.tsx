import Image from 'next/image'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-2 md:p-24">
      <div className="flex w-full flex-col gap-2 md:flex-row max-w-md items-center">
        <Input type="search" placeholder="Search dog by breed" />
        <Link href="/search">
          <Button type="submit">Search</Button>
        </Link>
      </div>
    </main>
  )
}
