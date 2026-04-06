export interface OSINTTask {
  id: number;
  title: string;
  level: 'beginner' | 'advanced' | 'tech' | 'expert';
  legend: string;
  goal: string;
  tools: string;
}

export const osintTasks: OSINTTask[] = [
  {
    id: 1,
    title: 'Камера в тени',
    level: 'beginner',
    legend: 'В городском паблике жалуются на странную веб-камеру. Найдите работающую веб-камеру с открытым доступом.',
    goal: 'Найти IP веб-камеры и определить её модель.',
    tools: 'Shodan, Google Dorks (inurl:"view.shtml")'
  },
  {
    id: 2,
    title: 'Забытый документ',
    level: 'beginner',
    legend: 'В открытом доступе найден PDF-файл с метаданными. Найдите любой PDF с метаданными.',
    goal: 'Извлечь автора и версию создателя.',
    tools: 'Google Dorks (filetype:pdf), exiftool'
  },
  {
    id: 3,
    title: 'Технологии на сайте',
    level: 'beginner',
    legend: 'Определите, на чём сделан любой региональный портал.',
    goal: 'Название CMS и версия (если видна).',
    tools: 'Wappalyzer, BuiltWith'
  },
  {
    id: 4,
    title: 'Утёкшие данные',
    level: 'beginner',
    legend: 'Проверьте свой email в утечках.',
    goal: 'Название сервиса и тип утечки.',
    tools: 'haveibeenpwned.com'
  },
  {
    id: 5,
    title: 'Поддомены GitHub',
    level: 'beginner',
    legend: 'Найдите поддомены github.com.',
    goal: 'Список из 5 поддоменов.',
    tools: 'crt.sh, SecurityTrails'
  },
  {
    id: 6,
    title: 'Тень в соцсетях',
    level: 'advanced',
    legend: 'Найдите профили человека по нику @nnbelov.',
    goal: 'Найти 3 разные соцсети по нику.',
    tools: 'Namechk, Sherlock, WhatsMyName'
  },
  {
    id: 7,
    title: 'Фото с GPS',
    level: 'advanced',
    legend: 'Найдите фото на Flickr с геотегом.',
    goal: 'Определить координаты и место съёмки.',
    tools: 'Flickr, GeoSetter'
  },
  {
    id: 8,
    title: 'Машина времени',
    level: 'advanced',
    legend: 'Восстановите удалённую страницу сайта.',
    goal: 'Найти удалённую страницу в архиве.',
    tools: 'Wayback Machine (archive.org)'
  },
  {
    id: 9,
    title: 'ИТ-сотрудники',
    level: 'advanced',
    legend: 'Найдите ИТ-сотрудников любой компании.',
    goal: '3+ имени и должности.',
    tools: 'LinkedIn, Facebook'
  },
  {
    id: 10,
    title: 'EXIF разведка',
    level: 'advanced',
    legend: 'Проанализируйте EXIF фото с сайта компании.',
    goal: 'Найти GPS-координаты (если есть).',
    tools: 'exiftool, FotoForensics'
  },
  {
    id: 11,
    title: 'Сканирование Shodan',
    level: 'tech',
    legend: 'Просканируйте IP 8.8.8.8 через Shodan.',
    goal: 'Какие порты открыты?',
    tools: 'Shodan, Censys'
  },
  {
    id: 12,
    title: 'DNS-записи',
    level: 'tech',
    legend: 'Получите DNS-записи для yandex.ru.',
    goal: 'Выписать A, MX, TXT, NS записи.',
    tools: 'dig, dnsrecon'
  },
  {
    id: 13,
    title: 'Открытая директория',
    level: 'tech',
    legend: 'Найдите сайт с открытой директорией.',
    goal: 'Ссылка на директорию с бэкапами.',
    tools: 'Google Dorks (intitle:"index of")'
  },
  {
    id: 14,
    title: 'WordPress Fingerprint',
    level: 'tech',
    legend: 'Найдите сайт на WordPress.',
    goal: 'Версия WP и установленные плагины.',
    tools: 'wpscan, Wappalyzer'
  },
  {
    id: 15,
    title: 'Web технологии',
    level: 'tech',
    legend: 'Определите стек технологий сайта.',
    goal: 'Сервер, фреймворк, аналитика.',
    tools: 'BuiltWith, Wappalyzer'
  },
  {
    id: 16,
    title: 'Ник → данные',
    level: 'expert',
    legend: 'Постройте цепочку: ник → email → соцсети → утечки.',
    goal: 'Связный отчёт с источниками.',
    tools: 'Sherlock, holehe, Dehashed'
  },
  {
    id: 17,
    title: 'Геолокация по фото',
    level: 'expert',
    legend: 'Постройте карту офисов компании по фото.',
    goal: 'Найти посты с геотегами, координаты.',
    tools: 'Instagram, Google Maps'
  },
  {
    id: 18,
    title: 'История домена',
    level: 'expert',
    legend: 'Найдите историю владельцев домена kaspersky.com.',
    goal: 'Предыдущие владельцы и даты.',
    tools: 'SecurityTrails, Whois History'
  },
  {
    id: 19,
    title: 'GitHub сотрудники',
    level: 'expert',
    legend: 'Найдите сотрудников компании с публичными репозиториями.',
    goal: 'Список имён и ролей.',
    tools: 'GitHub API, поиск'
  },
  {
    id: 20,
    title: 'Полное досье на личность',
    level: 'expert',
    legend: 'Соберите досье на публичную личность.',
    goal: 'Структурированный отчёт.',
    tools: 'Все вышеперечисленные инструменты'
  }
];