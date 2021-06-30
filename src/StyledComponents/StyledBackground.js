import styled from "styled-components/native";

const StyledBackground = styled.ImageBackground`

    object-fit: cover;
    background-size: cover;
    overflow: hidden;
    height: ${ props => props.theme.imageHeight.m };
    margin: ${ props => props.theme.spacing.m };
    padding: ${ props => props.theme.spacing.m };
    border-radius: ${ props => props.theme.borderRadius.m };
    justify-content: center;
`

export default StyledBackground