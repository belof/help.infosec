import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 flex flex-col">
      <nav className="flex flex-wrap gap-6 mb-8 border-b border-green-700 pb-4">
        <Link to="/" className="hover:text-green-200">Главная</Link>
        <Link to="/osint" className="hover:text-green-200">OSINT Challenge</Link>
        <Link to="/blog" className="hover:text-green-200">Статьи</Link>
        <Link to="/links" className="hover:text-green-200">🔗 Полезные ссылки</Link>
        <Link to="/github" className="hover:text-green-200">🐙 GitHub Tools</Link>
		<Link to="/sandbox" className="hover:text-green-200">🧪 Sandbox</Link>
        <Link to="/security" className="hover:text-green-200">🛡️ Защита от атак</Link>
        <Link to="/attacks" className="hover:text-green-200">⚔️ Об атаках</Link>
        <Link to="/legal" className="hover:text-green-200">📚 Правовые документы</Link>
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="mt-12 pt-6 border-t border-green-800 text-xs text-gray-500 text-center space-y-2">
        <p>© 2026 Белов Николай. Все материалы размещены исключительно в <strong>учебных и ознакомительных целях</strong>.</p>
        <p>Представленные документы, законы, регламенты, политики и методики не являются официальными юридическими консультациями. 
        Автор не несёт ответственности за любые действия, предпринятые на основании информации с данного сайта.</p>
        <p><strong>🔗 Внешние ссылки:</strong> Автор не несёт ответственности за содержание внешних ресурсов, их доступность, безопасность или возможные изменения. 
        Переход по ссылкам осуществляется на усмотрение пользователя. Автор действует как <strong>информационный посредник</strong> (ст. 1253.1 ГК РФ).</p>
        <p>⚖️ Сайт не направлен на причинение вреда, не пропагандирует противоправные действия и не нарушает законодательство РФ. 
        Информация предоставлена «как есть» без каких-либо гарантий. Ответственность автора исключена в соответствии со <strong>ст. 1100 ГК РФ</strong> 
        (отсутствие умысла на причинение вреда) и <strong>ст. 437 ГК РФ</strong> (информация не является офертой).</p>
        <p><strong>🛡️ О легальности информации:</strong> В соответствии с <strong>п. 2 ст. 1280 ГК РФ</strong> (в ред. проекта № 509708-8 о «белых хакерах»), 
        предоставленная информация об исследовании уязвимостей предназначена исключительно для правомерного тестирования собственных или 
        законно приобретенных программных продуктов на персональных компьютерах пользователя. Автор не призывает к нарушению законодательства.</p>
        <p>🔒 Сайт создан в рамках портфолио специалиста по информационной безопасности. Все товарные знаки принадлежат их владельцам.</p>
      </footer>
    </div>
  );
};

export default Layout;