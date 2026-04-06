export interface GithubLink {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export const githubLinks: GithubLink[] = [
  {
    id: 1,
    title: 'THE BIG BROTHER V4.0',
    description: 'Платформа для анализа открытых источников информации (OSINT). Включает перечисление имен пользователей, визуальную разведку с использованием четырехвекторного анализа, отслеживание с помощью Sky Radar, анализ криптокошельков, разведку SSL-трафика, восстановление цифрового следа, извлечение EXIF-данных, расширенную разведку сети и сетевую разведку.',
    url: 'https://github.com/chadi0x/TheBigBrother',
    tags: ['OSINT', 'All-in-One']
  },
  {
    id: 2,
    title: 'obsidian-git',
    description: 'Интеграция системы контроля версий Git с автоматическим коммитом и синхронизацией и другими расширенными функциями в Obsidian.md.',
    url: 'https://github.com/Vinzent03/obsidian-git',
    tags: ['Git', 'Productivity']
  },
  {
    id: 3,
    title: 'Auto_Tor_IP_changer',
    description: 'Автоматическая смена IP-адреса на основе проекта Tor.',
    url: 'https://github.com/FDX100/Auto_Tor_IP_changer',
    tags: ['Privacy', 'Tor', 'Anonymity']
  },
  {
    id: 4,
    title: 'apt-loki-simulate',
    description: 'Пример симуляции угрозы постоянного характера (APT) для обнаружения Loki. Форк от оригинального репозитория.',
    url: 'https://github.com/li-xin-yi/apt-loki-simulate',
    tags: ['APT', 'Detection', 'Loki']
  },
  {
    id: 5,
    title: 'Email-Scraper',
    description: 'Инструмент для извлечения email-адресов с веб-сайтов, социальных сетей и других платформ. Расширение для браузера.',
    url: 'https://github.com/codewithharit/Email-Scraper',
    tags: ['OSINT', 'Email', 'Scraping']
  },
  {
    id: 6,
    title: 'Terra',
    description: 'OSINT-инструмент для сбора информации из Twitter и Instagram.',
    url: 'https://github.com/xadhrit/terra',
    tags: ['OSINT', 'Twitter', 'Instagram']
  },
  {
    id: 7,
    title: 'Darkdump',
    description: 'OSINT-инструмент для поиска ссылок в глубокой сети (Dark Web).',
    url: 'https://github.com/LoopUE/darkdump',
    tags: ['OSINT', 'Dark Web', 'Deep Web']
  },
  {
    id: 8,
    title: 'Darkdump — статья',
    description: 'Статья об инструменте Darkdump: поиск в глубокой сети (Dark Web).',
    url: 'https://te.legra.ph/Darkdump--poisk-v-glubokoj-seti-Dark-Web-06-07',
    tags: ['OSINT', 'Dark Web', 'Article']
  },
  {
    id: 9,
    title: 'Master OSINT Toolkit',
    description: 'Python-инструментарий для OSINT: геолокация изображений, профили в соцсетях, проверка утечек email, поиск доменов, извлечение метаданных, Google Dorks.',
    url: 'https://github.com/techenthusiast167/Master-OSINT-Toolkit-',
    tags: ['OSINT', 'Python', 'All-in-One']
  },
  {
    id: 10,
    title: 'Awesome-OSINT (jivoi)',
    description: 'Один из самых полных каталогов OSINT-инструментов на GitHub. Более 1000 инструментов по категориям.',
    url: 'https://github.com/jivoi/awesome-osint',
    tags: ['OSINT', 'Collection']
  },
  {
    id: 11,
    title: 'OSINT Stuff Tool Collection (Cipher387)',
    description: 'Огромная коллекция из 1000+ OSINT-инструментов с удобной сортировкой по функциям.',
    url: 'https://github.com/cipher387/osint_stuff_tool_collection',
    tags: ['OSINT', 'Collection']
  },
  {
    id: 12,
    title: 'Awesome OSINT (awesomelistsio)',
    description: 'Высококачественная подборка OSINT-инструментов и ресурсов для расследований.',
    url: 'https://github.com/awesomelistsio/awesome-osint',
    tags: ['OSINT', 'Collection']
  },
  {
    id: 13,
    title: 'Maigret',
    description: 'Мощный инструмент для поиска профилей пользователя по нику в более чем 3000 соцсетях и сервисах.',
    url: 'https://github.com/soxoj/maigret',
    tags: ['OSINT', 'Username Search']
  },
  {
    id: 14,
    title: 'PhoneInfoga',
    description: 'Продвинутый инструмент для разведки по номерам телефонов.',
    url: 'https://github.com/sundowndev/phoneinfoga',
    tags: ['OSINT', 'Phone']
  },
  {
    id: 15,
    title: 'theHarvester',
    description: 'Инструмент для сбора email, поддоменов и имен хостов из различных публичных источников.',
    url: 'https://github.com/laramies/theHarvester',
    tags: ['OSINT', 'Email', 'Subdomain']
  },
  {
    id: 16,
    title: 'Recon-ng',
    description: 'Полнофункциональная платформа для веб-разведки с модульной архитектурой.',
    url: 'https://github.com/lanmaster53/recon-ng',
    tags: ['OSINT', 'Framework']
  },
  {
    id: 17,
    title: 'SpiderFoot',
    description: 'Автоматизированный инструмент OSINT с более чем 200 модулями для сбора данных.',
    url: 'https://github.com/smicallef/spiderfoot',
    tags: ['OSINT', 'Automation']
  },

  // === Пентест инструменты ===
  {
    id: 18,
    title: 'MetaLLM',
    description: 'Metasploit-подобный фреймворк для тестирования безопасности AI/ML систем. 61 модуль для атак на LLM, RAG и MLOps.',
    url: 'https://github.com/scthornton/MetaLLM',
    tags: ['Pentest', 'AI Security']
  },
  {
    id: 19,
    title: 'BlacksmithAI',
    description: 'Open-source фреймворк для пентеста с использованием нескольких AI-агентов для автоматизации всех этапов оценки безопасности.',
    url: 'https://github.com/blacksmith-ai/blacksmithai',
    tags: ['Pentest', 'AI Security']
  },
  {
    id: 20,
    title: 'Strix Agent',
    description: 'Автономные AI-агенты, которые действуют как реальные хакеры: динамически запускают код, находят уязвимости и валидируют их PoC.',
    url: 'https://github.com/strix-agent/strix',
    tags: ['Pentest', 'AI Security']
  },
  {
    id: 21,
    title: 'CyberStrike',
    description: 'AI-powered автономный инструмент для пентеста с 4 специализированными агентами и 120+ тест-кейсами OWASP.',
    url: 'https://github.com/CyberStrike/CyberStrike',
    tags: ['Pentest', 'AI Security']
  },
  {
    id: 22,
    title: 'Auto_Recon',
    description: 'Многоуровневый автоматизированный инструмент для разведки и рекогносцировки при пентесте.',
    url: 'https://github.com/Tib3rius/AutoRecon',
    tags: ['Pentest', 'Reconnaissance']
  },
  {
    id: 23,
    title: 'BloodHound',
    description: 'Инструмент для визуализации путей атак в Active Directory.',
    url: 'https://github.com/BloodHoundAD/BloodHound',
    tags: ['Pentest', 'Active Directory']
  },
  {
    id: 24,
    title: 'Betterleaks',
    description: 'Сканер секретов от автора Gitleaks. Находит утечки паролей, API-ключей и токенов в репозиториях.',
    url: 'https://github.com/zricethezav/betterleaks',
    tags: ['Defense', 'Secrets Scanning']
  },
  {
    id: 25,
    title: 'Cloud-audit',
    description: 'Быстрый open-source сканер безопасности AWS с автоматическими рекомендациями по устранению найденных проблем.',
    url: 'https://github.com/mariuszgebala/cloud-audit',
    tags: ['Defense', 'Cloud Security', 'AWS']
  },
  {
    id: 26,
    title: 'VulHunt CE',
    description: 'Фреймворк для обнаружения уязвимостей в скомпилированном ПО с использованием многоуровневого анализа.',
    url: 'https://github.com/binarly-io/VulHunt',
    tags: ['Defense', 'Vulnerability Detection']
  },
  {
    id: 27,
    title: 'mquire',
    description: 'Инструмент для анализа Linux memory dumps без необходимости внешней отладочной информации.',
    url: 'https://github.com/trailofbits/mquire',
    tags: ['Defense', 'Memory Forensics']
  },
  {
    id: 28,
    title: 'Plumber',
    description: 'Сканер пайплайнов GitLab CI/CD для выявления несоответствий безопасности и дрейфа конфигураций.',
    url: 'https://github.com/plumber-cicd/plumber',
    tags: ['Defense', 'DevSecOps']
  },
  {
    id: 29,
    title: 'LME (Logging Made Easy)',
    description: 'Платформа от CISA для централизации логов и обнаружения угроз, предназначенная для малого и среднего бизнеса.',
    url: 'https://github.com/cisagov/LoggingMadeEasy',
    tags: ['Defense', 'SIEM']
  },
  {
    id: 30,
    title: 'MozDef',
    description: 'SIEM-платформа от Mozilla для автоматизации мониторинга безопасности и реагирования на инциденты.',
    url: 'https://github.com/mozilla/MozDef',
    tags: ['Defense', 'SIEM']
  },
  {
    id: 31,
    title: 'Wazuh',
    description: 'Универсальная open-source платформа для мониторинга безопасности, объединяющая SIEM и XDR возможности.',
    url: 'https://github.com/wazuh/wazuh',
    tags: ['Defense', 'SIEM', 'EDR']
  },
  {
    id: 32,
    title: 'TheHive',
    description: 'Масштабируемая платформа для реагирования на инциденты безопасности (SOAR).',
    url: 'https://github.com/TheHive-Project/TheHive',
    tags: ['Defense', 'SOAR']
  },
  {
    id: 33,
    title: 'MISP',
    description: 'Платформа с открытым исходным кодом для обмена информацией об угрозах (Threat Intelligence).',
    url: 'https://github.com/MISP/MISP',
    tags: ['Defense', 'Threat Intelligence']
  },
];