import styled, {css} from 'styled-components';
import { skeletonStyle } from '../../Styles/skeleton';

export const ContainerCategorySkeleton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryImage = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
`;

export const CategoryTitle = styled.div`
    width: 15px;
    height: 15px;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 50%;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
`;
