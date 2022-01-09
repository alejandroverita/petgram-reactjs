import React, {useState, useEffect} from 'react';

import {List, Item} from './styles';

import { Category } from '../Category';

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([]);

    const [showFixed, setShowFixed] = useState(false);

    //Show Categories fetching the data
    useEffect(function(){
        window.fetch('https://petgram-server-alejandroverita-alejandroverita.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
        })
    }, [])

    //Show categories when scroll is higher 200px
    useEffect(()=>{
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        //Avoid memoryLeak
        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {
                categories.map(category => 
                    <Item key = {category.id}>
                        <Category {...category} />
                    </Item>
                )
            }
        </List>
    )
    
    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
}
