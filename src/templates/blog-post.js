import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import HomeLayout from '../layouts/HomeLayout'

const BlogPost = ({ data }) => {
  const {
    frontmatter: { title, description, date, tags, featuredimage },
    html,
  } = data.markdownRemark

  return (
    <HomeLayout>
      <Helmet>
        <title>{title} | Blog</title>
        <meta name='description' content={description} />
      </Helmet>
      <article className='blogPost'>
        <header className='blogPost-header'>
          <h1 className='title title--big'>{title}</h1>

          <div className='blogPost-headerDetails'>
            <span>{date}</span> | <span>{tags[0]}</span>
          </div>
        </header>

        {featuredimage && (
          <figure className='blogPost-featureImage'>
            <img src={featuredimage.childImageSharp.fluid.src} alt='' />
          </figure>
        )}

        <div
          className='blogPost-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </HomeLayout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1440, maxHeight: 720, quality: 80) {
              src
            }
          }
        }
      }
    }
  }
`
