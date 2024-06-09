import axios from 'axios'

// ** Local Components Import
import ImageGallery from '../_components/ImageGallery'

export default async function SearchPage({
  params
}: {
  params: { query: string }
}) {
  const { data } = await axios.get(
    `https://dog.ceo/api/breed/${params.query}/images/random/12`
  )

  const images = data.message

  return (
    <>
      <ImageGallery images={images} />
    </>
  )
}
