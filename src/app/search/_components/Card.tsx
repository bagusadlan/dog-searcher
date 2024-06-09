'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  url: string
  onClick: (url: string) => void
}

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export default function Card({ url, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(url)}
      layoutId={`card-${url}`}
      className="mb-2 rounded-sm"
    >
      <Image
        src={url}
        className="bg-base-100 cursor-pointer rounded-sm"
        width={500}
        height={500}
        loading="lazy"
        blurDataURL={rgbDataURL(128, 128, 128)}
        placeholder="blur"
        alt="Dog image"
      />
    </motion.div>
  )
}
