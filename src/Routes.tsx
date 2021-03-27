import * as React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./Header"

import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const AdminPage = React.lazy(() => import("./AdminPage"));

const RoutesWrap = () => {
    return (
        <Router>
            <Route component={Routes}></Route>
        </Router>
    );
};

interface IState {
    loggedIn: boolean
}

class Routes extends React.Component<RouteComponentProps, IState> {
    public constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            loggedIn: true
        }
    }
    public render() {
        return (

            <div>
                <Header></Header>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} timeout={500} classNames="animate">
                        <Switch>
                            <Redirect exact={true} from="/" to="products"></Redirect>
                            <Route exact={true} path="/products" component={ProductsPage}></Route>
                            <Route path="/products/:id" component={ProductPage}></Route>
                            <Route path="/admin">
                                {this.state.loggedIn ? (
                                    <Suspense fallback={<div className="page-container">Loading...</div>}><AdminPage /></Suspense>)
                                    : <Redirect to="/login"></Redirect>}
                            </Route>
                            <Route path="/login" component={LoginPage}></Route>
                            <Route component={NotFoundPage}></Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>

            </div>

        )
    }

}

export default RoutesWrap;