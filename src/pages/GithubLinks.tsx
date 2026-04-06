import { useState } from 'react';
import { githubLinks } from '../data/githubLinks';

const GithubLinks = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const allTags = ['all', ...new Set(githubLinks.flatMap(link => link.tags))];
  
  const filteredLinks = filter === 'all' 
    ? githubLinks 
    : githubLinks.filter(link => link.tags.includes(filter));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">🐙 Полезные ссылки GitHub</h1>
      <p className="text-gray-400 mb-6">Инструменты, ресурсы и материалы для ИБ-специалиста</p>
      
      {/* Фильтр по тегам */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === tag 
                ? 'bg-green-700 text-white' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-800/60'
            }`}
          >
            {tag === 'all' ? 'Все' : tag}
          </button>
        ))}
      </div>
      
      {/* Список ссылок */}
      <div className="grid gap-4">
        {filteredLinks.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900/50 border border-green-800 rounded-lg p-5 hover:border-green-500 transition hover:bg-gray-800/50"
          >
            <h2 className="text-xl font-bold text-green-400 mb-2">{link.title}</h2>
            <p className="text-gray-300 mb-3">{link.description}</p>
            <div className="flex flex-wrap gap-2">
              {link.tags.map(tag => (
                <span key={tag} className="text-xs bg-green-900/40 px-2 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-3 truncate">{link.url}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GithubLinks;