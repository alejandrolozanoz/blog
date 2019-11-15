import { graphql, useStaticQuery } from 'gatsby'

const usePostsInfo = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ALL_MARKDOWN_QUERY {
        allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                featuredpost
                description
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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

export default usePostsInfo
