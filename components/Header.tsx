import React, { useContext } from 'react'
import Link from 'next/link'
interface Category {
  name: string
  slug: string
}
const categories: Category[] = [
  { name: 'React', slug: 'react' },
  { name: 'Music', slug: 'music' },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8"></div>
      <div>
        <Link href="/">
          <span className="curser-pointer text-4xl font-bold text-white">
            Aviv's Blog - coming soon!
          </span>
        </Link>
        <div className="hidden md:float-left md:contents">
          {categories.map((category: Category) => {
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
              ></Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
