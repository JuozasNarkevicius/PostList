import { List, Create, Details, Navbar } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={List}/>
        <Route path="/create" component={Create}/>
        <Route path="/posts/:id" component={Details}/>
      </Switch>
    </div>
  </Router>
)

export default App;
