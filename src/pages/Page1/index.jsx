import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Link } from "react-router-dom"; // withRouter

export default function Page1(props) {
  const { match } = props;

  const subPage = (title) => (
    <>
      <h1>{match.path}</h1>
      <h1>{title}</h1>
    </>
  );

  return (
    <>
      <ul>
        <li>
          <Link to={`${match.path}/subpage-1`}>Sub-page 1</Link>
        </li>
        <li>
          <Link to={`${match.path}/subpage-2`}>Sub-page 2</Link>
        </li>
      </ul>
      <Route
        exact
        path={`${match.path}`}
        render={() => <Redirect to={`${match.path}/subpage-1`} />}
      />
      <Route
        path={`${match.path}/subpage-1`}
        render={() => subPage("SUB-PAGE 1")}
      />
      <Route
        path={`${match.path}/subpage-2`}
        render={() => subPage("SUB-PAGE 2")}
      />
    </>
  );
}

Page1.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
