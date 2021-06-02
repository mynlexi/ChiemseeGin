import styled from 'styled-components';

export const ShopCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  height: 25rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ShopImageContainer = styled.div`
  background-image: url('${props => props.imageUrl ? props.imageUrl: ''}');
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  transform-style: preserve-3d;
  max-height: 500px;
  max-width:500px;


  @media only screen and (max-width: 767px){
    margin: auto;
    background: none;
    position: relative;
    left: auto;
    right: auto;
    top: auto;
    bottom: auto;
    height: auto;
  }
`


export const ProductImage = styled.img`
  display: none;
  max-width: 100%;
  height: 100%;
  @media only screen and (max-width: 767px)
  {
    display: block;
    margin: auto;
    max-height: 230px;
    max-width:278px;
  }

`

export const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0 auto;
`;

