'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

// ** Components Import
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    router.push(`/search/${encodeURIComponent(search)}`)
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-2 md:p-24">
      <form
        onSubmit={handleSearch}
        className="flex w-full flex-col gap-2 md:flex-row max-w-md items-center"
      >
        <Input
          type="search"
          placeholder="Search dog by breed"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" disabled={!search}>
          Search
        </Button>
      </form>
    </main>
  )
}
