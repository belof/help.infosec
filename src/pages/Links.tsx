import { linkCategories } from '../data/links';

const Links = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Полезные ссылки</h1>
      <p className="text-gray-400 mb-8">Инструменты, ресурсы и материалы для ИБ-специалиста</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {linkCategories.map((category) => (
          <div key={category.name} className="bg-gray-900/50 border border-green-800 rounded-lg p-5">
            <h2 className="text-xl font-bold mb-4">{category.icon} {category.name}</h2>
            <div className="space-y-3">
              {category.links.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition"
                >
                  <div className="font-semibold text-green-400">{link.title}</div>
                  <div className="text-sm text-gray-400">{link.description}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;