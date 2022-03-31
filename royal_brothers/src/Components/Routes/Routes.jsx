import React from 'react'
import {Routes as ROUTES, Route} from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Navbar } from '../Navbar/Navbar'
import { NotFound } from '../NotFound/NotFound'
import { SignUp } from '../SignUp/SignUp'
import {Store} from '../Store/Store'
import { Tariff } from '../Tariff/Tariff'
import { ProductPage } from '../Product/product'

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
        <Route exact path="/product" element={<ProductPage />} />
        {/* {Write all the routes here} */}
        <Route exact path="*" element={<NotFound />} />
      </ROUTES>
      <Footer />
    </>
  );
}
