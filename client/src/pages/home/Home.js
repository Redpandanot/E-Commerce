import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import "./Home.scss";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { axiosClient } from '../../utils/axiosClient';
import { useSelector } from 'react-redux';

function Home() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [topPicks, setTopPicks] = useState(null);

  useEffect(()=>{
    fetchData();
  },[])

  async function fetchData(){
    const topPicksResponse = await axiosClient.get('/products?filters[topPicks][$eql=true]&populate=image')

    setTopPicks(topPicksResponse.data.data);
  }
  return (
    <div className='Home'>
      <Hero/>
      <section className='collection container'>
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="subheading">
            Shop from the best, our Film and TV Posters collection.
          </p>
        </div>
        <div className="content">
          {categories?.map((category)=> <Category key={category.id} category={category}/>)}
        </div>
      </section>

      <section className='collection container'>
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">
            All New Designs, Same Old Details.
          </p>
        </div>
        <div className="content">
        {topPicks?.map((product)=> <Product key={product.id} product={product} />) }
        </div>
      </section>
    </div>
  )
}

export default Home