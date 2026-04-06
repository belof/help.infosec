import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const Articles = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Статьи</h1>
      <div className="grid gap-4">
        {articles.map(article => (
          <Link to={`/blog/${article.slug}`} key={article.id} className="block bg-gray-900 p-4 rounded-lg border border-green-700">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-400">{article.description}</p>
            <span className="text-green-400 text-sm">#{article.tags.join(', ')}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;