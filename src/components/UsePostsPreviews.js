import { graphql, useStaticQuery } from 'gatsby'

const usePostsPreviews = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query GET_POSTS_PREVIEWS {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
                featuredpost
                description
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

export default usePostsPreviews
