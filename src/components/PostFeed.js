import React from 'react'
import usePostsInfo from './PostsInfo'
import { Link } from 'gatsby'

export default function PostFeed() {
  return (
    <section className="postFeed">
      <h3 className="title">Artículos más recientes</h3>

      {usePostsInfo().map((postInfo, key) => {
        const {
          fields: { slug },
          frontmatter: { title, description, featuredimage },
        } = postInfo.node

        return (
          <Link to={slug}>
            <article className="postPreview">
              <h4 key={key}>{title}</h4>

              <img
                src={featuredimage && featuredimage.childImageSharp.fluid.src}
                alt=""
              />
            </article>
          </Link>
        )
      })}
    </section>
  )
}
