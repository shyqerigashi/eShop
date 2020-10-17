import React from 'react';

//Components
import { ProductBox } from '../../components/ProductBox/ProductBox';

//styles
import "./Products.scss";

import product1 from './../../assets/images/product-1.jpg';

export const Products = () => {
    return (
        <div className="Products">
            <div className="container">
                <div className="row has_gutter">
                    <div className="column-3">
                        <ProductBox
                            id={1}
                            title="Basic Slim Fit T-Shirt"
                            price="79.99"
                            image={product1}
                        />
                    </div>
                    <div className="column-3">
                        <ProductBox
                            id={1}
                            title="Basic Slim Fit T-Shirt"
                            price="79.99"
                            image={product1}
                        />
                    </div>
                    <div className="column-3">
                        <ProductBox
                            id={1}
                            title="Basic Slim Fit T-Shirt"
                            price="79.99"
                            image={product1}
                        />
                    </div>
                    <div className="column-3">
                        <ProductBox
                            id={1}
                            title="Basic Slim Fit T-Shirt"
                            price="79.99"
                            image={product1}
                        />
                    </div>
                    <div className="column-3">
                        <ProductBox
                            id={1}
                            title="Basic Slim Fit T-Shirt"
                            price="79.99"
                            image={product1}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
