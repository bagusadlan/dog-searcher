import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'

type Props = {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

export default function Modal({ selected, setSelected }: Props) {
  if (!selected) return

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 cursor-pointer flex items-center justify-center max-h-[100dvh] py-8"
      onClick={() => setSelected('')}
    >
      <motion.div
        layoutId={`card-${selected}`}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center max-w-[700px] mx-2"
      >
        <Image
          src={selected}
          className="bg-base-100 cursor-default"
          width={400}
          height={400}
          alt="Dog image"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </div>
  )
}
