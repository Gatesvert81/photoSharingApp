import styled from "styled-components/native";

const StyledText = styled.Text`

    &.title{
        font-family: ${ props => props.theme.textVariants.h1.fontFamily };
        font-size: ${ props => props.theme.textVariants.h1.fontSize } ;
        color: ${ props => props.theme.colors.white };
    }

    &.text{
        font-family: ${ props => props.theme.textVariants.h2.fontFamily };
        font-size: ${ props => props.theme.textVariants.h2.fontSize } ;
        color: ${ props => props.theme.colors.white }; 
    }

`

export default StyledText