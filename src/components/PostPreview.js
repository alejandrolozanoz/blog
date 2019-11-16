import React from 'react'
import { Link } from 'gatsby'

export default function PostPreview(props) {
  const { title, url, image, tags } = props
  let imageBg = {}

  if (image) {
    imageBg = image.childImageSharp.fluid.src
  }

  const styles = {
    backgroundImage: 'url(' + imageBg + ')',
  }

  return (
    <Link className='postPreview' to={url}>
      <article className='postPreview-content' style={styles}>
        <div className='tags'>
          {/* {tags.map(tag => (
            <span className='tag'>{tag}</span>
          ))} */}
          <span className='tag'>{tags[0]}</span>
        </div>

        <h4 className='postPreview-title'>{title}</h4>
      </article>
    </Link>
  )
}
