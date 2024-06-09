import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'

type Props = {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

export default function Modal({ selected, setSelected }: Props) {
  if (!selected) return

  return (
    <div
      className="fixed flex inset-0 z-50 bg-black/50 cursor-pointer max-h-[100dvh] items-center justify-center"
      onClick={() => setSelected('')}
    >
      <motion.div layoutId={`card-${selected}`} transition={{ duration: 0.3 }} className='max-w-[700px]'>
        <Image
          src={selected}
          width={1000}
          height={1000}
          alt="Dog image"
          onClick={(e) => e.stopPropagation()}
          className="w-full image-full bg-base-100 cursor-default"
        />
      </motion.div>
    </div>
  )
}
