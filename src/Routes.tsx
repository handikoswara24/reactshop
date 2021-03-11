import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header"
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";

const Routes: React.SFC = () => {
    return (
        <Router>
            <div>
                <Header></Header>
                <Switch>
                    <Route exact={true} path="/products" component={ProductsPage}></Route>
                    <Route path="/products/:id" component={ProductPage}></Route>
                    <Route path="/admin" component={AdminPage}></Route>
                    <Route component={NotFoundPage}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;