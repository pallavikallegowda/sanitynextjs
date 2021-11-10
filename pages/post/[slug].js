import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import groq from 'groq'
import client from '../../client'
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/Head'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
export function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}
export async function getStaticProps({ params }) {
  const { slug } = params
  const query = groq`
  *[_type =='post' && slug.current  == '${slug}'][0]
  
  `
  const data = await client.fetch(query)
  return {
    revalidate: 60 * 60 * 24,
    props: {
      post: data
    }
  }
}

export default function SinglePost({ post }) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading.....</h1>
  }
  if (!post) {
    return (
      <>
        <Head>
          <meta name='robots' content='noindex' />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }
  return (
    <div className='container'>
      <div>
        <h1 className='mb-5'>{post.title}</h1>
        <img className='mb-5  h-90 w-90' src={urlFor(post.mainImage).url()} />
        <p>
          <BlockContent blocks={post.body} />
        </p>
      </div>
    </div>
  )
}
