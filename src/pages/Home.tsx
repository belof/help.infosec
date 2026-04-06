const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-120px)] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Основной фон: градиент + шум + сетка */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Шум (зернистость) */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          mixBlendMode: 'overlay'
        }}></div>
        
        {/* Тонкая точечная сетка */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
        
        {/* 🆕 Гексагональная сетка (фоновая картинка) */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%2310b981' stroke-width='0.5' d='M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 L50 0 Z M50 20 L70 30 L70 50 L50 60 L30 50 L30 30 L50 20 Z M50 40 L60 45 L60 55 L50 60 L40 55 L40 45 L50 40 Z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px'
        }}></div>

        {/* Декоративные светящиеся линии */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>
      </div>

      <div className="text-center z-10 max-w-4xl w-full">
        {/* Аватар */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-green-500 bg-black/40 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <span className="text-4xl">🔒</span>
        </div>

        {/* Имя */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Nikolai Belov
          </span>
        </h1>

        {/* Специализация */}
        <p className="text-xl md:text-2xl text-green-300/90 font-mono mb-8 tracking-wide border-b border-green-500/30 inline-block pb-2">
          Information Security Specialist
        </p>

        {/* Терминальный блок */}
        <div className="max-w-2xl mx-auto mt-4 bg-black/60 backdrop-blur-sm border border-green-500/40 rounded-lg p-5 text-left font-mono text-sm shadow-xl">
          <div className="flex items-center gap-2 border-b border-green-500/30 pb-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-green-400 text-xs ml-2">user@nikolai:~</span>
          </div>
          <div className="space-y-2">
            <p><span className="text-green-500">$</span> whoami</p>
            <p className="text-gray-300 ml-4">Nikolai Belov — Information Security Specialist, 10+ years in IT, focused on offensive security and incident response.</p>
            <p><span className="text-green-500">$</span> skills --category=infosec</p>
            <p className="text-gray-300 ml-4">▪ Penetration Testing (Web, AD, Network)<br/>▪ OSINT & Threat Intelligence<br/>▪ Kaspersky KATA/KEDR/SIEM<br/>▪ DLP & Security Policies<br/>▪ PowerShell & Automation</p>
            <p><span className="text-green-500">$</span> contact --method</p>
            <p className="text-gray-300 ml-4">▪ Telegram: <span className="text-green-400">@nnbelov</span><br/>▪ Email: <span className="text-green-400">belov.nikola@yandex.ru</span><br/>▪ GitHub: <span className="text-green-400">github.com/nnbelov</span></p>
            <p><span className="text-green-500">$</span> <span className="animate-pulse">█</span></p>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/osint"
            className="px-6 py-2 bg-green-600 hover:bg-green-500 text-black font-mono font-semibold rounded-md transition-all shadow-[0_0_10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]"
          >
            OSINT Challenge →
          </a>
          <a
            href="/security"
            className="px-6 py-2 bg-transparent border border-green-500 hover:bg-green-500/10 text-green-400 font-mono font-semibold rounded-md transition-all"
          >
            🛡️ Защита от атак
          </a>
          <a
            href="/github"
            className="px-6 py-2 bg-transparent border border-green-500 hover:bg-green-500/10 text-green-400 font-mono font-semibold rounded-md transition-all"
          >
            🐙 GitHub Tools
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;