import React from 'react'
import { BrowserRouter, Routes as MainRoutes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Feature/Brands/Home'
import Brands from './Feature/Brands'
import NotFound from './NotFound'
const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <MainRoutes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/brands" element={<Brands />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </MainRoutes>
            </BrowserRouter>
        </div>
    )
}
export default Routes
