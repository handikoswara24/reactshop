import * as React from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";

interface IUser {
    id: number,
    name: string,
    isAdmin: boolean
}

const adminUsersData: IUser[] = [
    { id: 1, name: "Fred", isAdmin: true },
    { id: 2, name: "Bob", isAdmin: false },
    { id: 3, name: "Jane", isAdmin: true }
];

const AdminProducts = () => {
    return (<div>Some options to administer products</div>);
};

const AdminUser = (props: RouteComponentProps<{ id: string }>) => {
    let user: IUser;
    if (props.match.params.id) {
        const id: number = parseInt(props.match.params.id, 10);
        user = adminUsersData.filter(u => u.id === id)[0];
    }
    else {
        return null;
    }
    return (
        <div>
            <div>
                <b>Id : </b>
                <span>{user.id.toString()}</span>
            </div>
            <div>
                <b>Is Admin : </b>
                <span>{user.isAdmin.toString()}</span>
            </div>
        </div>
    );
};

const AdminUsers = () => {
    return (
        <div>
            <ul className="admin-sections">
                {
                    adminUsersData.map(user => (
                        <li>
                            <NavLink to={`/admin/users/${user.id}`} activeClassName="admin-link-active">
                                {user.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

const AdminPage: React.SFC = () => {
    return (
        <div className="page-container">
            <h1>Admin Panel</h1>
            <ul className="admin-sections">
                <li key="users">
                    <NavLink to={`/admin/users`} activeClassName="admin-linkactive">
                        Users
                    </NavLink>
                </li>
                <li key="products">
                    <NavLink to={`/admin/products`} activeClassName="admin-linkactive">
                        Products
                    </NavLink>
                </li>
            </ul>
            <Route path="/admin/users" component={AdminUsers}></Route>
            <Route path="/admin/products" component={AdminProducts}></Route>
            <Route path="/admin/users/:id" component={AdminUser}></Route>
            {/* <p>You should only be here if you have logged in</p> */}
        </div>
    );
}

export default AdminPage;