import styled from 'styled-components';
import {scale} from '../../Styles/animation';

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    //desaparece el scroll sin perder la funcionalidad 
    &::-webkit-scrollbar {
        display: none;
    };
    &.fixed {
        background-color: white;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        ${scale({time:'0.3s'})}
        z-index: 1;
    }

  `

export const Item = styled.li` 
    padding: 0 8px;
    list-style: none;
`