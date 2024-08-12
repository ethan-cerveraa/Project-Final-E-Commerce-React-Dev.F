import React from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product';
import SidebarSearch from './SidebarSearch';
import './BoxProducts.css';

const BoxProducts = ({ products }) => {

    return (
        <>  
            <Row>
                <div className="col-2">
                    <SidebarSearch/>
                </div>
                <div className='col'>
                    <div id='box-products' className='row row-cols-4'>
                        {
                            products.map((product, index) => (
                                product.image !== undefined && (
                                    <Product
                                        details={product}
                                        key={index}
                                    />
                                )))
                        }
                    </div>
                </div>
            </Row>
        </>
    );
};

export default BoxProducts;