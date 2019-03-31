import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Headline = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  h1 {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  color: white;
  textdecoration: none;
`

const Header = ({ site.title }) => (
  <HeaderWrapper>

     <header className="site-head">
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-row">
                                <StyledLink to="/">
                                    {site.logo ?
                                        <img className="site-logo" src={site.logo} alt={site.title} />
                                        : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                    }
                                </StyledLinkLink>
                            </div>
         
                        </div>
                        { isHome ?
                            <div className="site-banner">
                                <h1 className="site-banner-title">{site.title}</h1>
                                <p className="site-banner-desc">{site.description}</p>
                            </div> :
                            null}
                        <nav className="site-nav">
                            <div className="site-nav-left">
                                {/* The navigation items as setup in Ghost */}
                                <Navigation data={site.navigation} navClass="site-nav-item" />
                            </div>
                            <div className="site-nav-right">
                                <Link className="site-nav-button" to="/about">About</Link>
                            </div>
                        </nav>
                    </div>
     </header>
     
  </HeaderWrapper>
)

export default Header





