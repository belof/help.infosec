import { osintTasks } from '../data/osintTasks';

const levelLabels = {
  beginner: '🔰 Новичок',
  advanced: '📈 Продвинутый',
  tech: '⚙️ Технический',
  expert: '🧠 Эксперт',
};

const OSINTChallenge = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">OSINT Challenge</h1>
      <p className="text-gray-400 mb-8">20 реальных сценариев открытой разведки. Каждая легенда — часть учебного расследования.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {osintTasks.map(task => (
          <div 
            key={task.id} 
            className="bg-[#0f1217] border border-green-900 rounded-lg p-5 transition-all hover:border-green-500"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs bg-green-900/40 px-2 py-1 rounded-full">{levelLabels[task.level]}</span>
              <span className="text-xs text-green-600">#{task.id}</span>
            </div>
            <h2 className="text-xl font-bold mt-2 text-green-300">{task.title}</h2>
            <div className="mt-3 text-sm text-gray-300">
              <div className="mb-2 italic bg-black/30 p-2 rounded">📖 {task.legend}</div>
              <div className="mb-1">🎯 <span className="font-semibold">Цель:</span> {task.goal}</div>
              <div>🛠 <span className="font-semibold">Инструменты:</span> {task.tools}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Дисклеймер об учебном использовании */}
      <div className="mt-12 p-5 bg-yellow-900/20 border border-yellow-600 rounded-lg text-sm text-gray-300 text-center space-y-2">
        <p className="font-bold text-yellow-400">⚠️ ВАЖНО: Исключительно учебные цели</p>
        <p>
          Все задания предназначены <strong>только для отработки навыков OSINT на собственных или специально разрешённых тестовых объектах</strong>.
          Запрещено использовать описанные методы для несанкционированного сбора информации о реальных людях, компаниях или государственных учреждениях без явного согласия.
        </p>
        <p>
          В соответствии с законодательством РФ (включая <strong>ст. 272–274.1 УК РФ</strong>, <strong>152-ФЗ «О персональных данных»</strong>, 
          <strong>149-ФЗ «Об информации…»</strong>) несанкционированный доступ, сбор и распространение данных влечёт административную и уголовную ответственность.
          Автор не несёт ответственности за любые действия, совершённые с использованием материалов сайта.
        </p>
        <p className="text-xs text-gray-400">
          🛡️ Все упомянутые инструменты следует применять только в среде, где у вас есть письменное разрешение на тестирование (например, в собственной лаборатории, на CTF-полигонах или по договору пентеста).
        </p>
      </div>
    </div>
  );
};

export default OSINTChallenge;