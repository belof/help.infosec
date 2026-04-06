import { useState } from 'react';
import { legalDocs } from '../data/legalDocs';

const categoryLabels: Record<string, { name: string; color: string }> = {
  policy: { name: '📋 Политики', color: 'border-blue-500' },
  regulation: { name: '📜 Регламенты', color: 'border-yellow-500' },
  agreement: { name: '🤝 Соглашения', color: 'border-green-500' },
  responsibility: { name: '⚖️ Ответственность', color: 'border-red-500' },
  law: { name: '📖 Законы РФ', color: 'border-purple-500' }
};

const Legal = () => {
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredDocs = activeCategory === 'all' 
    ? legalDocs 
    : legalDocs.filter(doc => doc.category === activeCategory);

  const selected = legalDocs.find(d => d.id === selectedDoc);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">📚 Правовые документы по ИБ</h1>
      <p className="text-gray-400 mb-6">Политики, регламенты, соглашения и нормативные документы в области информационной безопасности</p>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1 rounded-full text-sm ${
            activeCategory === 'all' 
              ? 'bg-green-700 text-white' 
              : 'bg-green-900/40 text-green-300 hover:bg-green-800/60'
          }`}
        >
          Все
        </button>
        {Object.entries(categoryLabels).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeCategory === key 
                ? 'bg-green-700 text-white' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-800/60'
            }`}
          >
            {value.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {filteredDocs.map(doc => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc.id)}
              className={`p-4 bg-gray-900/50 border-l-4 rounded-lg cursor-pointer transition ${
                categoryLabels[doc.category]?.color || 'border-gray-500'
              } ${selectedDoc === doc.id ? 'bg-gray-800' : 'hover:bg-gray-800/50'}`}
            >
              <h3 className="font-bold text-green-400">{doc.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{doc.description}</p>
              <span className="text-xs text-gray-500">{categoryLabels[doc.category]?.name || doc.category}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-green-800 rounded-lg p-5">
          {selected ? (
            <>
              <h2 className="text-xl font-bold mb-2 text-green-400">{selected.title}</h2>
              <div className="text-sm text-gray-300 mb-3">
                {categoryLabels[selected.category]?.name || selected.category}
              </div>
              <div 
                className="prose prose-invert prose-sm max-w-none text-gray-300"
                dangerouslySetInnerHTML={{ __html: selected.content }}
              />
            </>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>Выберите документ из списка слева</p>
              <p className="text-sm mt-2">Здесь будет отображаться содержание</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Legal;