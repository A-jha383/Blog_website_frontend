import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <div id="page-body">
    <Router>
       <Route path="/" component={HomePage} exact />
       <Route path="/about" component={AboutPage}/>
       <Route path="/articles-list" component={ArticleList}/>
       <Route path="/article" component={ArticlePage}/>
    </Router>
    </div>
  );
}

export default App;
