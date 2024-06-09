'use client'

import { useState } from 'react'
import Card from './Card'
import Modal from './Modal'

type Props = {
  images: string[]
}

export default function ImageGallery({ images }: Props) {
  const [selected, setSelected] = useState<string>('')

  return (
    <>
      <div className="columns gap-2 sm:columns-2 md:columns-3 lg:columns-4">
        {images.map((item, index) => (
          <Card key={index} url={item} onClick={setSelected} />
        ))}
      </div>
      <Modal selected={selected} setSelected={setSelected} />
    </>
  )
}
