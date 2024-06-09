'use client'
import React, { useState } from 'react'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Modal from './_components/Modal'
import ImageGallery from './_components/ImageGallery'

export default function SearchPage() {
  const [selected, setSelected] = useState<string>('')

  return (
    <main className="container">
      <Link href="/">
        <Button type="submit">Back</Button>
      </Link>
      <ImageGallery setSelected={setSelected}/>
      <Modal selected={selected} setSelected={setSelected} />
    </main>
  )
}
