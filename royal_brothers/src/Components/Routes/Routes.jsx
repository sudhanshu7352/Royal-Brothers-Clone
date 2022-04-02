import React from 'react'
import {Routes as ROUTES, Route} from 'react-router-dom'
import { Checkout } from '../Checkout/checkout'
import { Footer } from '../Footer/Footer'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Navbar } from '../Navbar/Navbar'
import { NotFound } from '../NotFound/NotFound'
import { SignUp } from '../SignUp/SignUp'
import {Store} from '../Store/Store'
import { Tariff } from '../Tariff/Tariff'
import {Payment} from '../Payment/Payment'
import { Product } from "../Product/product";
import {Thanks} from "../Thanks/Thanks"

export const Routes = () => {
  return (
    <>
      <Navbar />
      <ROUTES>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/tariff" element={<Tariff/>} />
        <Route exact path="/checkout" element={<Checkout/>} />
        <Route exact path="/payment" element={<Payment/>} />
        <Route exact path="/tariff" element={<Tariff />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/thanks" element={<Thanks/>} />
        {/* {Write all the routes here} */}
        <Route exact path="*" element={<NotFound />} />
      </ROUTES>
      <Footer />
    </>
  );
};
