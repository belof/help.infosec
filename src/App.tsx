import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OSINT from './pages/OSINT';
import Blog from './pages/Blog';
import Links from './pages/Links';
import GithubLinks from './pages/GithubLinks';
import SecurityTools from './pages/SecurityTools';
import AttackInfo from './pages/AttackInfo';
import Legal from './pages/Legal';
import ArticleDetail from './components/ArticleDetail';
import Sandbox from './pages/Sandbox';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="osint" element={<OSINT />} />
        <Route path="blog" element={<Blog />} />
        <Route path="links" element={<Links />} />
        <Route path="github" element={<GithubLinks />} />
        <Route path="security" element={<SecurityTools />} />
        <Route path="attacks" element={<AttackInfo />} />
        <Route path="legal" element={<Legal />} />
        <Route path="blog/:slug" element={<ArticleDetail />} />
		<Route path="sandbox" element={<Sandbox />} />
      </Route>
    </Routes>
  );
}

export default App;