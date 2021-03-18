import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "./Header"
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const Routes: React.SFC = () => {
    // eslint-disable-next-line
    const [loggedIn, setLoggedIn] = React.useState(true);
    return (
        <Router>
            <div>
                <Header></Header>
                <Switch>
                    <Redirect exact={true} from="/" to="products"></Redirect>
                    <Route exact={true} path="/products" component={ProductsPage}></Route>
                    <Route path="/products/:id" component={ProductPage}></Route>
                    <Route path="/admin">
                        {loggedIn ? <AdminPage /> : <Redirect to="/login"></Redirect>}
                    </Route>
                    <Route path="/login" component={LoginPage}></Route>
                    <Route component={NotFoundPage}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;