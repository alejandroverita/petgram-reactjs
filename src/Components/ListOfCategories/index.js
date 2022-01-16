import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

import {List, Item} from './styles';

import {Loading} from '../Loading';
import { Category } from '../Category';

function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    
    const [loading, setLoading] = useState(false);
    
    //Show Categories fetching the data
    useEffect(function(){
        setLoading(true)
        window.fetch('https://petgram-server-alejandroverita-alejandroverita.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
        })
    }, [])

    return { categories, loading }
}

const ListOfCategoriesComponent = () => {
    const {categories, loading } = useCategoriesData();
    
    const [showFixed, setShowFixed] = useState(false);

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
        <List fixed={fixed}>
            {
                loading 
                ? 
                <Item key = 'loading'>
                    <Loading />
                </Item>
                : 
                categories.map(category => 
                    <Item key = {category.id}>
                        <Category {...category} path={`/pet/${category.id}`}/>
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

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
