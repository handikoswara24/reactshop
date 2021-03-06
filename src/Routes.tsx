import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header"
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";

const Routes: React.SFC = () => {
    return (
        <Router>
            <div>
                <Header></Header>
                <Route path="/products" component={ProductsPage}></Route>
                <Route path="/admin" component={AdminPage}></Route>
            </div>
        </Router>
    )
}

export default Routes;