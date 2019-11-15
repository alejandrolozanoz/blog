import { graphql, useStaticQuery } from 'gatsby'

const usePostsInfo = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ALL_MARKDOWN_QUERY {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                featuredpost
                description
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
