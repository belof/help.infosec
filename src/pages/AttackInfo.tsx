import { attackInfo } from '../data/attackInfo';

const AttackInfo = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">⚔️ Информация об атаках</h1>
      <p className="text-gray-400 mb-6">Актуальные методы и тенденции кибератак 2025–2026 годов</p>
      
      <div className="grid gap-6">
        {attackInfo.map(attack => (
          <div key={attack.id} className="bg-gray-900/50 border border-red-800 rounded-lg p-5 hover:border-red-500 transition">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h2 className="text-xl font-bold text-red-400">{attack.title}</h2>
              <span className="text-xs px-2 py-1 bg-red-900/40 rounded-full">{attack.date}</span>
            </div>
            <p className="text-gray-300 mt-3">{attack.description}</p>
            <div className="mt-3">
              <p className="text-sm font-semibold text-red-300">Техники:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {attack.techniques.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-red-900/30 px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm font-semibold text-yellow-400">Воздействие:</p>
              <p className="text-sm text-gray-400">{attack.impact}</p>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              Источник: <a href={attack.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">{attack.source}</a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg text-center text-sm text-gray-400">
        📊 Данные основаны на отчетах IBM X-Force, Cloudflare и других аналитических центров за 2025–2026 годы.
        <br />Понимание тактик противника — основа построения эффективной защиты.
      </div>
    </div>
  );
};

export default AttackInfo;