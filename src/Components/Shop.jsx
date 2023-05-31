import React, { useContext } from 'react'
import MealsList from './MealsList';
import { AppContext } from './Context';

import Filters from './Filters';


const Shop = () => {


    const {meals} = useContext(AppContext);

  
    return (
        <section className='shop-container'>
            <Filters/>      
            <MealsList meals={meals} />
        </section>
    )
}

export default Shop
