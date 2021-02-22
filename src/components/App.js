import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { NavLink, Switch, Route } from "react-router-dom";

import AppHeader from "./AppHeader";
import Dashboard from "./Dashboard";
import Course from "./Course";
import Jobs from "./jobs/Jobs";
import PageNotFound from "./PageNotFound";
import Applications from "./Applications";

import rootReducer from "../reduxDariusz/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <>
      <nav className="navbar  sticky-top bg-light flex-md-nowrap p-0 ">
        <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">
          React Test
        </NavLink>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <AppHeader />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <NavLink className="nav-link" to="#">
              Sign out
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container-fluid border-top">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link " exact to="/">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/active-jobs">
                    Jobs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/courses">
                    Courses
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/active-jobs" component={Jobs} />
              <Route path="/courses" component={Course} />
              <Route
                path="/application/:jobTitle/:id"
                component={Applications}
              />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
