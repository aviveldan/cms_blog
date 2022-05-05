import React from 'react'
interface Post {
  title: string
  excerpt: string
}
interface PostCardProps {
  post: Post
}
const PostCard = (props: PostCardProps) => {
  return (
    <div>
      {props.post.title}
      {props.post.excerpt}
    </div>
  )
}

export default PostCard
