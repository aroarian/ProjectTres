import React from "react";
import { Route, Switch } from "react-router-dom";
import MarketPage from "../views/MarketPage";
import NotFound from "../views/NotFound";
import Users from "../views/allusers";
import SingleUser from "../views/SingleUser";
import AppliedRoute from "../components/AppliedRoute";
import Orders from "../views/OrderHistory";
import ShoppingCart from "../views/ShoppingCart";
import NewUser from "../views/NewUser";
import OrderHistory from "../views/OrderHistory"

export default ({childProps}) =>
  <Switch>
    <AppliedRoute path="/market" exact component={MarketPage} props={childProps} />
    <AppliedRoute path="/users" exact component={Users} props={childProps} />
    <AppliedRoute path="/users/new" exact component={NewUser} props={childProps} />
    <AppliedRoute path="/users/:id" exact component={SingleUser} props={childProps} />
    <AppliedRoute path="/orders" exact component={Orders} props={childProps} />
    <AppliedRoute path="/cart" exact component={ShoppingCart} props={childProps} />
    <AppliedRoute path="/history" exact component={OrderHistory} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;