import styled, { css } from 'styled-components'

export const FooterStyled = styled.footer`
  font-family: var(--font-mono);
  .links {
    margin: 0 5px;
    position: relative;
    counter-increment: item 1;
    cursor: pointer;
    a {
      padding: 10px;
      &:hover,
      &:focus {
        color: var(--slate)
      }
  }
`


export const StyledHeader = styled.header`
display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: transparent;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: rgba(209, 214, 220, 0.47);
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};
  ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
    padding-left: 10px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--blue);
  font-family: var(--font-mono);
  counter-reset: item 0;
  

  z-index: 12;
  @media (max-width: 768px) {
    justify-content: start;
    .sideMenu{
      //nothing needed yet
    }
    .logo {
      margin: auto;
    };
  }
  .logo {
   
    a {
      color: var(--blue);
      width: 42px;
      height: 42px;
      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }
      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

export const StyledLinks = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-right: 20px;
    list-style: none;
    list-style-type: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xl);
      cursor: pointer;
      a {
        padding: 10px;
        // &:before {
        //   content: '0' counter(item) '.';
        //   margin-right: 5px;
        //   color: var(--slate);
        //   font-size: var(--fz-xxs);
        //   text-align: right;
        // }
        &:hover,
        &:focus {
          color: var(--slate)
        }
      }
    }
  }

  .resume-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
    }
    &:after {
      display: none !important;
    }
  }
`;