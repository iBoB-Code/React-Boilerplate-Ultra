import React from 'react';
import { Link } from 'react-router-dom';

export class NotFoundPage extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.is404 = true;
    }
  }

  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>{"La page que vous cherchez n'existe pas!"}</h2>
        <p>
          <Link to="/">{"Retourner à l'accueil"}</Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
