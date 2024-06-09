import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const imageLoader = ({ src }: { src: string }) => {
  return `${src}`
}

type Props = {
  url: string
  setSelected: Dispatch<SetStateAction<string>>
}

export default function Card({ url, setSelected }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelected(url)}
      layoutId={`card-${url}`}
      className="mb-2 rounded-sm"
    >
      <Image
        loader={imageLoader}
        src={url}
        width={500}
        height={500}
        alt="Dog image"
        className="w-full image-full bg-base-100 cursor-pointer rounded-sm"
      />
    </motion.div>
  )
}
