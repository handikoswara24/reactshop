import * as React from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";

import logo from "./logo.svg";

const Header = (prop: RouteComponentProps) => {
    const [search, setSearch] = React.useState("");
    React.useEffect(() => {
        const searchParams = new URLSearchParams(prop.location.search);
        setSearch(searchParams.get("search") || "");
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            prop.history.push(`/products?search=${search}`);
        }
    }

    return (
        <header className="header">
            <div className="search-container">
                <input type="search" placeholder="Search" value={search} onChange={handleSearchChange} onKeyDown={handleSearchKeyDown}></input>
            </div>
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">React Shop</h1>
            <nav>
                <NavLink to="/products" className="header-link" activeClassName="header-link-active">Products</NavLink>
                <NavLink to="/admin" className="header-link" activeClassName="header-link-active">Admin</NavLink>
            </nav>
        </header>
    );
};

export default withRouter(Header);