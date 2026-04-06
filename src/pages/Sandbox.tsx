import { useState } from 'react';
import { sandboxTools } from '../data/sandboxTools';

const categoryLabels: Record<string, string> = {
  'легкая': '🪶 Лёгкие песочницы',
  'виртуализация': '💻 Виртуализация',
  'контейнеризация': '🐳 Контейнеризация',
  'автоматизация': '🤖 Автоматические системы',
  'облачные': '☁️ Облачные сервисы'
};

const Sandbox = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredTools = filter === 'all' 
    ? sandboxTools 
    : sandboxTools.filter(tool => tool.category === filter);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">🧪 Песочницы (Sandbox) для безопасного анализа</h1>
      <p className="text-gray-400 mb-6">
        Изолированные среды для тестирования подозрительных файлов, ссылок и приложений. 
        Инструменты для анализа вредоносного ПО, отладки и исследования поведения программ.
      </p>

      {/* Фильтр по категориям */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'all' 
              ? 'bg-green-700 text-white' 
              : 'bg-green-900/40 text-green-300 hover:bg-green-800/60'
          }`}
        >
          Все
        </button>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === key 
                ? 'bg-green-700 text-white' 
                : 'bg-green-900/40 text-green-300 hover:bg-green-800/60'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Список инструментов */}
      <div className="grid gap-6">
        {filteredTools.map(tool => (
          <div key={tool.id} className="bg-gray-900/50 border border-green-800 rounded-lg p-5 hover:border-green-500 transition">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <h2 className="text-xl font-bold text-green-400">{tool.name}</h2>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">{categoryLabels[tool.category]}</span>
            </div>
            
            <div className="mt-3 grid md:grid-cols-2 gap-4 text-sm">
              {/* Установка */}
              <div className="bg-black/40 p-3 rounded border border-green-800/50">
                <p className="font-semibold text-green-300 mb-1">📦 Установка:</p>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap break-words">{tool.install}</pre>
              </div>
              {/* Использование */}
              <div className="bg-black/40 p-3 rounded border border-green-800/50">
                <p className="font-semibold text-green-300 mb-1">⚙️ Пример использования:</p>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap break-words">{tool.usage}</pre>
              </div>
            </div>

            {/* Плюсы и минусы */}
            <div className="mt-3 grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-300">✅ Плюсы:</p>
                <ul className="list-disc list-inside text-gray-400 mt-1 space-y-1">
                  {tool.pros.map((pro, idx) => <li key={idx}>{pro}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-300">❌ Минусы:</p>
                <ul className="list-disc list-inside text-gray-400 mt-1 space-y-1">
                  {tool.cons.map((con, idx) => <li key={idx}>{con}</li>)}
                </ul>
              </div>
            </div>

            {/* Ссылка на официальный ресурс */}
            <div className="mt-3 text-right">
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline text-sm">
                Официальный сайт →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Дисклеймер */}
      <div className="mt-10 p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg text-center text-sm text-gray-400">
        ⚠️ <strong>Важно:</strong> Все инструменты следует использовать только в законных целях — для анализа собственных файлов, 
        тестирования своих систем или с явного разрешения владельца. Не запускайте вредоносное ПО на реальных рабочих машинах. 
        Всегда соблюдайте законодательство РФ (ст. 272–274 УК РФ) и корпоративные политики безопасности.
      </div>
    </div>
  );
};

export default Sandbox;