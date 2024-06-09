import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { WobbleCard } from '@/components/ui/wobble-card'
import { images } from './data'
import Card from './Card'

type Props = {
  setSelected: Dispatch<SetStateAction<string>>
}

export default function ImageGallery({ setSelected }: Props) {
  return (
    <div className="columns gap-2 sm:columns-2 md:columns-3 lg:columns-4">
      {images.map((item, index) => (
        <Card key={index} url={item} setSelected={setSelected} />
      ))}
    </div>
  )
}
