import React from 'react';

import { ContainerCategorySkeleton, CategoryImage, CategoryTitle } from'./styles';

export const Loading = props => {
    console.log(props)
    return (
        <ContainerCategorySkeleton>
            <CategoryImage light={props.light} />
            <CategoryTitle light={props.light} />
        </ContainerCategorySkeleton>
    )
}