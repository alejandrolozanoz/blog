import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import HomeLayout from '../layouts/HomeLayout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  date,
  featuredimage,
  html,
}) => {
  const PostContent = contentComponent || Content

  return (
    <article className='blogPost'>
      {helmet || ''}
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

      <PostContent content={content} />
    </article>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const {
    frontmatter: { title, description, tags, date, featuredimage },
    html,
  } = data.markdownRemark

  return (
    <HomeLayout>
      <BlogPostTemplate
        content={html}
        contentComponent={HTMLContent}
        description={description}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{title}</title>
            <meta name='description' content={description} />
          </Helmet>
        }
        tags={tags}
        title={title}
        date={date}
        featuredimage={featuredimage}
      />
    </HomeLayout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
