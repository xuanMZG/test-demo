import { Route, Switch } from 'react-router-dom';
import reload from './pages/hook/reload.js';
import view from './pages/view';

const Routers = () => {
  return (
    <Switch>
      <Route exact key="/hook/reload" path="/hook/reload" component={reload} />
      <Route exact key="/" path="/" component={view} />
    </Switch>
  );
};

export default Routers;
