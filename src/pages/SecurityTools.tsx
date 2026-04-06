import { useState } from 'react';
import { securityTools } from '../data/securityTools';

const categoryColors: Record<string, string> = {
  SIEM: 'border-blue-500',
  EDR: 'border-purple-500',
  Antivirus: 'border-green-500',
  NDR: 'border-yellow-500',
  SOAR: 'border-red-500',
  XDR: 'border-pink-500'
};

const SecurityTools = () => {
  const [filter, setFilter] = useState<string>('all');
  const categories = ['all', ...new Set(securityTools.map(tool => tool.category))];

  const filteredTools = filter === 'all' 
    ? securityTools 
    : securityTools.filter(tool => tool.category === filter);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">🛡️ Системы защиты от атак</h1>
      <p className="text-gray-400 mb-6">SIEM, EDR, антивирусы и другие средства обнаружения вторжений</p>
      
      {/* Фильтр по категориям */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === cat 
                ? 'bg-green-700 text-white' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-800/60'
            }`}
          >
            {cat === 'all' ? 'Все' : cat}
          </button>
        ))}
      </div>
      
      {/* Список инструментов */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredTools.map(tool => (
          <div
            key={tool.id}
            className={`bg-gray-900/50 border-l-4 ${categoryColors[tool.category]} border-r border-t border-b border-green-800 rounded-lg p-5 hover:border-green-500 transition`}
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-green-400">{tool.name}</h2>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">{tool.category}</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Вендор: {tool.vendor}</p>
            <p className="text-gray-300 mt-3">{tool.description}</p>
            <div className="mt-3">
              <p className="text-sm font-semibold text-green-300">Ключевые возможности:</p>
              <ul className="list-disc list-inside text-sm text-gray-400 mt-1">
                {tool.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-green-400 hover:text-green-300 text-sm"
            >
              Официальный сайт →
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-green-900/20 border border-green-700 rounded-lg text-center text-sm text-gray-400">
        💡 Современная защита строится на комбинации SIEM (мониторинг событий), EDR (защита конечных точек) и NDR (мониторинг сети). 
        Kaspersky предоставляет комплексное решение KATA/KEDR/SIEM для полного покрытия.
      </div>
    </div>
  );
};

export default SecurityTools;