import React from 'react'
import usePostsInfo from './PostsInfo'

export default function PostFeed() {
  return (
    <section className='postFeed'>
      <h3 className='title'>Artículos más recientes</h3>

      {usePostsInfo().map((postInfo, key) => {
        const { title } = postInfo.node.frontmatter

        return <p key={key}>{title}</p>
      })}
    </section>
  )
}
