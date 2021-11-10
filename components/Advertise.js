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
    <div className='container-fluid'>
      <style jsx>{`
        .backgroundbody {
          background: rgb(131, 58, 180);
          background: linear-gradient(
            90deg,
            rgba(131, 58, 180, 1) 0%,
            rgba(69, 252, 228, 1) 100%
          );
        }
      `}</style>

      <div className='row backgroundbody '>
        <div className='col-md-4 px-0'>
          <img src={urlFor(home.mainImage).url()} />
        </div>

        <div className='col-md-8 p-3'>
          <h1 className='text-5xl text-white font-bold my-5'>{home.title}</h1>
          <p className='text-xl text-gray-100 mb-6'>{home.description}</p>
        </div>
      </div>
    </div>
  )
}
