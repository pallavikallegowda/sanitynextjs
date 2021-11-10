import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import client from '../client'
import groq from 'groq'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import Advertise from '../components/Advertise'

export async function getStaticProps() {
  const query = groq`
  {
  "posts":*[_type == 'post']{title, mainImage, publishedAt,slug,
  'categories': categories[]->title,
  'authorName': author->name,
  'authorSlug': author->slug,
  'authorImage': author->image

  },
  
  "home": *[_type == 'homepage']
  }

`
  const data = await client.fetch(query)
  return {
    props: {
      posts: data.posts,
      home: data.home[0]
    }
  }
}

export default function Home({ posts, home }) {
  console.log(posts)
  return (
    <div className='bg-gray-300'>
      <div className='max-w-screen-2xl mx-auto bg-white'>
        <Hero home={home}></Hero>
        <div className='px-6'>
          <h2 className='my-10 text-gray-900 font-bold  text-2xl text-center'>
            Latest Posts
          </h2>
        </div>
        <Posts posts={posts} />
        <Advertise home={home}></Advertise>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  )
}
