import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../../mybooks-ds/src/components/Button';

const App = () => {
  return (
    <div>
      <Button>click aqui</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
