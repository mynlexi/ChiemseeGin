import styled from "styled-components";


export const StyledMenu = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledHamburgerButton = styled.button`
  
    outline: none;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    z-index: 15;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  
  
  
`;

export const StyledSidebar = styled.aside`
    
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: start;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--white);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 14;
    transform: translateX(${props => (props.sideCartOpen ? 0 : 100)}vw);
    visibility: ${props => (props.sideCartOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
    
  
  nav {
    display: flex;
    margin-top: 2rem;
    -webkit-box-pack: justify;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--dark-navy);
    font-family: var(--font-mono);
    text-align: center;
    
  }

  .cartitem {
    min-height: 125px;
    max-height: 225px;
    
    
  }
  ol {
    padding: 0;
    margin: auto;
    height: 24px;

    list-style: none;
    width: 100%;
    bottom: 0px;
    li {
    
      position: relative;
      height: 24px;
      margin: 0 auto;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
      // &:before {
        
      //   content: '0' counter(item) '';
      //   display: block;
      //   margin-bottom: 5px;
      //   color: var(--light-navy);
      //   font-size: var(--fz-sm);
      // }
    }
    a {
      display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    width: 100%;
    padding: 3px 20px 20px;
    &:hover,
    &:active,
    &:focus {
      color: var(--green);
      outline: none;
      }
    }
  }

  .cart-item--remove {
    stroke-width: 2;
    &:hover {
      stroke-width: 3;
    }
  }
  .resume-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

export const CartImage = styled.img`
  margin: auto;
  background: none;
  position: relative;
  left: auto;
  right: auto;
  top: auto;
  bottom: auto;
  height: auto;
  transform-style: preserve-3d;
  max-height: 120px;
  max-width: 120px;
`
// .ham-box {
//   display: inline-block;
//   position: relative;
//   width: var(--hamburger-width);
//   height: 24px;
// }
// .ham-box-inner {
//   position: absolute;
//   top: 50%;
//   right: 0;
//   width: var(--hamburger-width);
//   height: 2px;
//   border-radius: var(--border-radius);
//   background-color: var(--green);
//   transition-duration: 0.22s;
//   transition-property: transform;
//   transition-delay: ${props => (props.sideCartOpen ? `0.12s` : `0s`)};
//   transform: rotate(${props => (props.sideCartOpen ? `225deg` : `0deg`)});
//   transition-timing-function: cubic-bezier(
//     ${props => (props.sideCartOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
//   );
//   &:before,
//   &:after {
//     content: '';
//     display: block;
//     position: absolute;
//     left: auto;
//     right: 0;
//     width: var(--hamburger-width);
//     height: 2px;
//     border-radius: 4px;
//     background-color: var(--green);
//     transition-timing-function: ease;
//     transition-duration: 0.15s;
//     transition-property: transform;
//   }
//   &:before {
//     width: ${props => (props.sideCartOpen ? `100%` : `120%`)};
//     top: ${props => (props.sideCartOpen ? `0` : `-10px`)};
//     opacity: ${props => (props.sideCartOpen ? 0 : 1)};
//     transition: ${({ sideCartOpen }) =>
//   sideCartOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
//   }
//   &:after {
//     width: ${props => (props.sideCartOpen ? `100%` : `80%`)};
//     bottom: ${props => (props.sideCartOpen ? `0` : `-10px`)};
//     transform: rotate(${props => (props.sideCartOpen ? `-90deg` : `0`)});
//     transition: ${({ sideCartOpen }) => (sideCartOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
//   }