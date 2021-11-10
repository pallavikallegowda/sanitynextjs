import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import client from '../client'
import SocialIcons from './SocialIcons'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
export default function Hero({ home }) {
  return (
    <div>
      <div className='relative h-144'>
        <div className='absolute  w-full h-full bg-blue-900 bg-opacity-70 z-10'></div>
        <Image
          layout='fill'
          className='absolute object-cover'
          src={urlFor(home.mainImage).url()}
        />
        <div className='absolute h-full w-full text-white flex flex-col justify-end pb-16 px-6 z-20'>
          <h1 className='text-4xl font-bold mb-4'>{home.title}</h1>
          <p className='text-xl text-gray-100 mb-6'>{home.description}</p>
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}
