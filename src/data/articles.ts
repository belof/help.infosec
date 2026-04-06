export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  date: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Основы пентеста',
    slug: 'osnovy-pentesta',
    description: 'Введение в тестирование на проникновение.',
    content: '<p>Пентест — это моделирование атак для выявления уязвимостей.</p>',
    tags: ['pentest'],
    date: '2026-03-01'
  },
  {
    id: 2,
    title: 'Продвинутый OSINT',
    slug: 'osint',
    description: 'Методы сбора данных из открытых источников.',
    content: '<p>OSINT — искусство находить информацию.</p>',
    tags: ['osint'],
    date: '2026-03-10'
  },
  {
    id: 3,
    title: 'Этапы пентеста от разведки до отчёта',
    slug: 'etapy-pentesta',
    description: 'Полный цикл тестирования на проникновение методологии инструменты документация.',
    content: '<h2>1. Разведка (Reconnaissance)</h2><p>Сбор информации о цели: пассивная (OSINT) и активная (сканирование). Инструменты: Nmap, Shodan, Maltego.</p><h2>2. Сканирование и анализ уязвимостей</h2><p>Поиск открытых портов, сервисов и потенциальных уязвимостей. Инструменты: Nessus, OpenVAS, Nikto.</p><h2>3. Эксплуатация (Exploitation)</h2><p>Использование найденных уязвимостей для получения доступа. Инструменты: Metasploit, Burp Suite, SQLmap.</p><h2>4. Пост-эксплуатация (Post-Exploitation)</h2><p>Закрепление в системе, повышение привилегий, сбор данных.</p><h2>5. Отчёт</h2><p>Документирование найденных уязвимостей, рисков и рекомендаций по устранению.</p>',
    tags: ['pentest', 'beginner'],
    date: '2026-03-25'
  },
  {
    id: 4,
    title: 'OWASP Top 10 главные угрозы веб-приложений',
    slug: 'owasp-top-10',
    description: 'Разбор актуальных угроз веб-безопасности и методы защиты.',
    content: '<h2>A01 — Broken Access Control</h2><p>Нарушение контроля доступа — IDOR, повышение привилегий.</p><h2>A02 — Cryptographic Failures</h2><p>Ошибки шифрования, передача данных в открытом виде.</p><h2>A03 — Injection</h2><p>SQLi, Command Injection, NoSQLi.</p><h2>A04 — Insecure Design</h2><p>Ошибки на уровне архитектуры приложения.</p><h2>A05 — Security Misconfiguration</h2><p>Небезопасные настройки серверов, открытые порты.</p><p>И другие 5 угроз: Vulnerable Components, Authentication Failures, Software Integrity Failures, Logging Failures, SSRF.</p>',
    tags: ['pentest', 'web'],
    date: '2026-03-28'
  },
  {
    id: 5,
    title: 'Инструменты пентестера от Nmap до Burp Suite',
    slug: 'tools-pentester',
    description: 'Обзор основных инструментов для тестирования на проникновение.',
    content: '<h2>🔍 Nmap</h2><p>Сканирование сети, определение открытых портов и ОС.</p><h2>🎯 Burp Suite</h2><p>Перехват и модификация HTTP-трафика, сканирование веб-уязвимостей.</p><h2>⚡ Metasploit</h2><p>Фреймворк для разработки и выполнения эксплойтов.</p><h2>🔑 John the Ripper / Hydra</h2><p>Подбор паролей и брутфорс.</p><h2>🐍 Python для пентеста</h2><p>Написание скриптов автоматизации, парсеров, эксплойтов.</p>',
    tags: ['pentest', 'tools'],
    date: '2026-03-30'
  }
];