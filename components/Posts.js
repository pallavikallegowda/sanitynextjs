import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import client from '../client'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
export default function Posts({ posts }) {
  return (
    <div className='container'>
      <div className='row'>
        {posts &&
          posts.map((post) => (
            <div key={post.slug.current} className='col-md-3'>
              <div className='row mb-3'>
                <div className='col-md-10'>
                  <img
                    className='rounded-full h-24 w-24 mb-2'
                    src={urlFor(post.mainImage).url()}
                  />
                </div>
                <div className='col-md-12'>
                  <Link href={`post/${post.slug.current}`}>
                    <a className=' text-gray-600 text-decoration-none hover:text-gray-900'>
                      <p className=''>{post.title}</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
