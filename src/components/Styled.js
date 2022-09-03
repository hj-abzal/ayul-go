import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    transition: all 0.45s linear;
  }`

export const Container = styled.div`
  border-bottom: ${props => props.theme.border};
`

export const BackgroundDifferent = styled.div`
  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.primary};
`


export const Triangle = styled.div`
  border-bottom: ${props => props.theme.borderTriangle};
`