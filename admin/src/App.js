import React,{ Component } from "react";
import { HashRouter as Router,Switch,Route } from "react-router-dom";
import { connect } from "react-redux";
import { createRoute } from "./global";
import { NoPage,Login } from "./pages";
import { blank } from "./layout";

class App extends Component {

    render() {

        const rous = createRoute();
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={blank(Login)} />
                    {rous}
                    <Route component={NoPage} />
                </Switch>
            </Router>
        );

    }
}

export default connect()(App);
