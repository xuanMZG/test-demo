import { Route, Switch } from 'react-router-dom';
import reload from './pages/hook/reload.js';
import vue from './pages/hook/vue';
import view from './pages/view';

const Routers = () => {
  return (
    <Switch>
      <Route exact key="/hook/reload" path="/hook/reload" component={reload} />
      <Route exact key="/hook/vue" path="/hook/vue" component={vue} />
      <Route exact key="/" path="/" component={view} />
    </Switch>
  );
};

export default Routers;
