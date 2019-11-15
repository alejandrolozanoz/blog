import React from 'react'
import usePostsInfo from './PostsInfo'

export default function PostFeed() {
  return (
    <section className='postFeed'>
      <h3 className='title'>Artículos más recientes</h3>

      {usePostsInfo().map((postInfo, key) => {
        const { title, description } = postInfo.node.frontmatter

        return (
          <article className='postPreview'>
            <h4 key={key}>{title}</h4>
            <p>{description}</p>
          </article>
        )
      })}
    </section>
  )
}
