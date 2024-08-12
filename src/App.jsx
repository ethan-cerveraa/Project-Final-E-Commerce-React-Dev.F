import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ErrorPage from './components/ErrorPage';
import NavbarComponent from './components/NavbarComponent';
import BoxProducts from './components/BoxProducts';
import ProductDetail from './components/ProductDetail';
import LoadingComponent from './components/LoadingComponent';
import './App.css';


function App() {
    const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';
    const [productArray, setProductArray] = useState([]);
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        fillValues();
    }, []);
    const fillValues = () => {
        axios
            .get(`${BASE_URL}item`)
            .then(({ data }) => {
                setProductArray(data);
                console.log(productArray);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="App">
            <Routes>
                <Route index element={<Navigate replace to='/home'/>}/>
                <Route
                    path='/home'
                    element={
                        <>
                            <NavbarComponent
                                results={productArray}
                                search={(data) => {
                                    setProductArray([]);
                                    if(data.length===0){
                                        fillValues();
                                        setProductInfo({});
                                    }else{
                                        
                                        setProductArray(data);
                                    }
                                }}
                            />
                            <Container fluid className='px-5 mt-5'>
                                {
                                    productArray.length === 0 ? (
                                        <LoadingComponent/>
                                    ) : (
                                        Object.values(productInfo).length === 0 ? (
                                            <BoxProducts
                                                products={productArray}
                                                func={(data) => setProductInfo(data)}
                                            />
                                        ) : (
                                            <ProductDetail
                                            />
                                        )
                                    )
                                }
                            </Container>
                        </>
                    }
                />
                <Route
                    path='/product/:id'
                    element={
                        <>
                            <NavbarComponent/>
                            <ProductDetail/>
                        </>
                    }
                />
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
