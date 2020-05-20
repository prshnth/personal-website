import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const BlogCardContainer = styled(Link)`
  background-color: #1d1d34;
  color: #d5d0e5;
  padding: 20px;
  width: 600px;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 10px 10px 6px -2px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  @media (max-width: 400px) {
    width: 300px;
  }
`

const BlogCard = ({ posts }) => {
  return (
    <>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        return (
          <BlogCardContainer
            key={node.frontmatter.slug}
            to={node.frontmatter.slug}
          >
            <header>
              <h3>{title}</h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </BlogCardContainer>
        )
      })}
    </>
  )
}

export default BlogCard
