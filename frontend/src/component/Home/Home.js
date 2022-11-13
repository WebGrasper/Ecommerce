import React, { Fragment, useEffect } from 'react';
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from '../layout/MetaData';
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
    name: "Blue Tshirt",
    images: [{ url: "www.google.com" }],
    price: "3000",
    _id: "team",
};

const Home = () => {
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(
        (state) => state.products
    );
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <Fragment>
            <MetaData title="Ecommerce" />
            <div className='banner'>
                <p>
                    Welcome to CommerceX
                </p>
                <h1>
                    Find Amazing Products Below
                </h1>
                <a href='#container'>
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>
            <h2 className='homeHeading'>Featured Products</h2>
            <div className='container' id='container'>
                {products && products.map((product) =>
                    <Product product={product} />
                )}
            </div>

        </Fragment>
    );
};

export default Home;