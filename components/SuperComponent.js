import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {

  constructor(props) {
    super(props);
    this.someVariable = 'Just some variable';
  }

  render() {
    return (
      <BaseLayout>
        <h1> I am Blogs Page </h1>
      </BaseLayout>
    );
  }
}

export default SuperComponent;
