import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './core/components/Navbar';
import Search from 'pages/Search';

const Routes = () => (
    <BrowserRouter>
        <Navbar text="Bootcamp DevSuperior"/>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search" exact>
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;