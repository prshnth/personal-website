import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const NavContainer = styled.header`
  display: flex;
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  top: 0;
  right: 0;
`

const NavLink = styled(Link)`
  font-size: 20px;
  padding: 3px 10px;
  margin: 0 5px;
  color: #d5d0e5;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &.active {
    transform: scale(1.1);
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.1);
  }
`

const Header = ({ siteTitle }) => {
  return (
    <NavContainer>
      <NavLink to="/" activeClassName="active">{`Home`}</NavLink>
      <NavLink to="/projects" activeClassName="active">{`Projects`}</NavLink>
      <NavLink to="/blog" activeClassName="active">{`Blog`}</NavLink>
    </NavContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
