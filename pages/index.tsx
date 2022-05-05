import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components'
interface Post {
  title: string
  excerpt: string
}

const posts: Post[] = [
  {
    title: 'React testing',
    excerpt: 'Learn React testing, create fast websites!',
  },
  { title: 'React coding', excerpt: 'Learn React coding' },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Aviv Eldan's website</title>
        <link rel="icon" href="/ae_icon.png" />
      </Head>
      <div className="grid grid-cols-1 gap-12 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post: Post, index) => {
            return <PostCard post={post} key={post.title} />
          })}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
