export interface SecurityTool {
  id: number;
  name: string;
  category: 'SIEM' | 'EDR' | 'Antivirus' | 'NDR' | 'SOAR' | 'XDR';
  description: string;
  features: string[];
  vendor: string;
  url: string;
}

export const securityTools: SecurityTool[] = [
  {
    id: 1,
    name: 'Kaspersky SIEM',
    category: 'SIEM',
    vendor: 'Kaspersky',
    description: 'Платформа для сбора, корреляции и анализа событий безопасности в реальном времени.',
    features: ['Корреляция событий', 'Расследование инцидентов', 'Интеграция с KATA/KEDR', 'Автоматические отчёты'],
    url: 'https://www.kaspersky.ru/enterprise-security/kaspersky-siem'
  },
    // Бесплатные SIEM и системы обнаружения угроз
  {
    id: 11,
    name: 'Wazuh',
    category: 'SIEM',
    vendor: 'Open Source',
    description: 'Универсальная платформа для мониторинга безопасности, объединяющая SIEM и XDR возможности. Проводит анализ логов, контроль целостности файлов, обнаружение вторжений и оценку уязвимостей.',
    features: ['Анализ логов', 'Контроль целостности файлов', 'Обнаружение вторжений', 'Оценка уязвимостей', 'Интеграция с Elastic Stack'],
    url: 'https://wazuh.com/'
  },
  {
    id: 12,
    name: 'Security Onion',
    category: 'SIEM',
    vendor: 'Open Source',
    description: 'Бесплатный Linux дистрибутив для охоты за угрозами, мониторинга безопасности и управления логами. Объединяет Elastic Stack, Suricata, Zeek и Wazuh.',
    features: ['Анализ сетевого трафика', 'Обнаружение вторжений', 'Управление логами', 'Охота за угрозами', 'Визуализация'],
    url: 'https://securityonionsolutions.com/software'
  },
  {
    id: 13,
    name: 'ELK Stack (Elasticsearch, Logstash, Kibana)',
    category: 'SIEM',
    vendor: 'Elastic',
    description: 'Мощный набор инструментов для поиска, анализа и визуализации логов. При правильной настройке превращается в полноценную SIEM-систему.',
    features: ['Централизованный сбор логов', 'Полнотекстовый поиск', 'Визуализация и дашборды', 'Масштабируемость', 'Алгоритмы машинного обучения'],
    url: 'https://www.elastic.co/what-is/elk-stack'
  },
  {
    id: 14,
    name: 'Graylog',
    category: 'SIEM',
    vendor: 'Graylog',
    description: 'Платформа для централизованного управления логами с мощной корреляцией событий и функциями SIEM.',
    features: ['Централизованный сбор логов', 'Корреляция событий', 'Поиск и аналитика', 'Уведомления и алерты', 'Интеграции'],
    url: 'https://graylog.org/'
  },
  {
    id: 15,
    name: 'AlienVault OSSIM',
    category: 'SIEM',
    vendor: 'AT&T Cybersecurity',
    description: 'Открытая SIEM-платформа с интегрированными системами обнаружения вторжений (Snort, Suricata) и управления уязвимостями.',
    features: ['Корреляция событий', 'Обнаружение вторжений', 'Управление уязвимостями', 'Инвентаризация активов', 'Мониторинг доступности'],
    url: 'https://cybersecurity.att.com/products/ossim'
  },
  {
    id: 16,
    name: 'Apache Metron',
    category: 'SIEM',
    vendor: 'Apache',
    description: 'Масштабируемая SIEM-платформа от Apache, предназначенная для обработки больших объемов данных и обнаружения угроз в реальном времени.',
    features: ['Масштабируемость', 'Обнаружение угроз в реальном времени', 'Обогащение данных', 'Сохранение истории', 'Интеграция с Hadoop'],
    url: 'https://metron.apache.org/'
  },
  {
    id: 17,
    name: 'MozDef (Mozilla Defense Platform)',
    category: 'SIEM',
    vendor: 'Mozilla',
    description: 'SIEM-платформа от Mozilla для автоматизации процессов мониторинга безопасности и реагирования на инциденты.',
    features: ['Автоматизация инцидентов', 'Сбор логов', 'Мониторинг безопасности', 'Интеграции', 'Визуализация'],
    url: 'https://github.com/mozilla/MozDef'
  },
  {
    id: 18,
    name: 'CISA Logging Made Easy (LME)',
    category: 'SIEM',
    vendor: 'CISA',
    description: 'Бесплатная open-source платформа от CISA (Агентство кибербезопасности США) для централизации логов, усиления обнаружения угроз и оповещений.',
    features: ['Централизация логов', 'Обнаружение угроз', 'Оповещения в реальном времени', 'Простота установки', 'Подходит для малого бизнеса'],
    url: 'https://github.com/cisagov/LoggingMadeEasy'
  },
  {
    id: 19,
    name: 'Snort',
    category: 'NDR',
    vendor: 'Cisco',
    description: 'Одна из самых известных систем обнаружения и предотвращения вторжений (IDS/IPS). Анализирует сетевой трафик в реальном времени.',
    features: ['Анализ пакетов', 'Обнаружение атак', 'Модульная архитектура', 'Правила сообщества', 'IDS/IPS'],
    url: 'https://www.snort.org/'
  },
  {
    id: 20,
    name: 'Suricata',
    category: 'NDR',
    vendor: 'OISF',
    description: 'Высокопроизводительная система обнаружения вторжений (IDS/IPS) с поддержкой многопоточности и анализа протоколов прикладного уровня.',
    features: ['Высокая производительность', 'Анализ прикладных протоколов', 'Многопоточность', 'Гибкие правила', 'IDS/IPS'],
    url: 'https://suricata.io/'
  },
  {
    id: 21,
    name: 'Zeek (formerly Bro)',
    category: 'NDR',
    vendor: 'Zeek Project',
    description: 'Мощная платформа для анализа сетевого трафика, ориентированная на безопасность. Позволяет создавать пользовательские скрипты для обнаружения аномалий.',
    features: ['Анализ сетевого трафика', 'Скриптовый язык', 'Обнаружение аномалий', 'Метаданные соединений', 'Архитектура событий'],
    url: 'https://zeek.org/'
  },
  {
    id: 22,
    name: 'OSSEC',
    category: 'EDR',
    vendor: 'Open Source',
    description: 'Популярная хостовая система обнаружения вторжений (HIDS) с функциями анализа логов, контроля целостности файлов и активного реагирования.',
    features: ['Анализ логов', 'Контроль целостности файлов', 'Обнаружение руткитов', 'Активное реагирование', 'Кроссплатформенность'],
    url: 'https://www.ossec.net/'
  },
  {
    id: 23,
    name: 'TheHive',
    category: 'SOAR',
    vendor: 'TheHive Project',
    description: 'Масштабируемая платформа для реагирования на инциденты безопасности (IR), позволяющая расследовать, анализировать и реагировать на угрозы.',
    features: ['Управление инцидентами', 'Аналитика угроз', 'Автоматизация', 'Интеграции с MISP и Cortex', 'Совместная работа'],
    url: 'https://thehive-project.org/'
  },
  {
    id: 24,
    name: 'MISP (Malware Information Sharing Platform)',
    category: 'SOAR',
    vendor: 'MISP Project',
    description: 'Платформа с открытым исходным кодом для обмена информацией об угрозах (Threat Intelligence).',
    features: ['Хранение индикаторов компрометации', 'Обмен данными об угрозах', 'Автоматический импорт/экспорт', 'Корреляция событий', 'Визуализация'],
    url: 'https://www.misp-project.org/'
  },
  {
    id: 2,
    name: 'Kaspersky Endpoint Detection and Response (KEDR)',
    category: 'EDR',
    vendor: 'Kaspersky',
    description: 'Обнаружение и реагирование на угрозы на конечных точках.',
    features: ['Мониторинг процессов', 'Анализ поведения', 'Автоматическая изоляция', 'Расследование инцидентов'],
    url: 'https://www.kaspersky.ru/enterprise-security/edr'
  },
  {
    id: 3,
    name: 'Kaspersky Endpoint Security',
    category: 'Antivirus',
    vendor: 'Kaspersky',
    description: 'Комплексная защита конечных точек от всех типов угроз.',
    features: ['Антивирус', 'Файрвол', 'Контроль устройств', 'Защита от шифровальщиков', 'Контроль программ'],
    url: 'https://www.kaspersky.ru/endpoint-security'
  },
  {
    id: 4,
    name: 'Kaspersky Anti Targeted Attack (KATA)',
    category: 'XDR',
    vendor: 'Kaspersky',
    description: 'Защита от целевых атак и сложных угроз.',
    features: ['Анализ сетевого трафика', 'Песочница', 'Обнаружение C&C', 'Интеграция с SIEM'],
    url: 'https://www.kaspersky.ru/enterprise-security/anti-targeted-attack'
  },
  {
    id: 5,
    name: 'Splunk Enterprise Security',
    category: 'SIEM',
    vendor: 'Splunk',
    description: 'Платформа для мониторинга и анализа событий безопасности.',
    features: ['Корреляция событий', 'Управление инцидентами', 'Визуализация угроз', 'Автоматизация'],
    url: 'https://www.splunk.com/'
  },
  {
    id: 6,
    name: 'CrowdStrike Falcon',
    category: 'EDR',
    vendor: 'CrowdStrike',
    description: 'Облачная платформа для защиты конечных точек.',
    features: ['Анализ поведения', 'Обнаружение угроз в реальном времени', 'Автоматическое реагирование'],
    url: 'https://www.crowdstrike.com/'
  },
  {
    id: 7,
    name: 'Microsoft Defender for Endpoint',
    category: 'EDR',
    vendor: 'Microsoft',
    description: 'Встроенная EDR-платформа в экосистеме Microsoft.',
    features: ['Обнаружение угроз', 'Расследование', 'Автоматическое исправление', 'Интеграция с M365'],
    url: 'https://www.microsoft.com/security'
  },
  {
    id: 8,
    name: 'QRadar SIEM',
    category: 'SIEM',
    vendor: 'IBM',
    description: 'Платформа для управления информацией и событиями безопасности.',
    features: ['Корреляция', 'Анализ поведения пользователей', 'Искусственный интеллект'],
    url: 'https://www.ibm.com/qradar'
  },
  {
    id: 9,
    name: 'Wazuh',
    category: 'SIEM',
    vendor: 'Open Source',
    description: 'Бесплатная SIEM-платформа с открытым исходным кодом.',
    features: ['Мониторинг целостности', 'Обнаружение угроз', 'Соответствие стандартам', 'Активный ответ'],
    url: 'https://wazuh.com/'
  },
  {
    id: 10,
    name: 'Snort',
    category: 'NDR',
    vendor: 'Cisco',
    description: 'Система обнаружения вторжений (IDS/IPS).',
    features: ['Анализ пакетов', 'Обнаружение атак', 'Модульная архитектура', 'Правила сообщества'],
    url: 'https://www.snort.org/'
  }
];