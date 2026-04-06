import { useParams, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) return <Navigate to="/blog" />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticleDetail;