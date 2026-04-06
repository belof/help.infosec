export interface LinkCategory {
  name: string;
  icon: string;
  links: {
    title: string;
    url: string;
    description: string;
  }[];
}

export const linkCategories: LinkCategory[] = [
  {
    name: 'OSINT',
    icon: '🕵️',
    links: [
      { title: 'Shodan', url: 'https://www.shodan.io', description: 'Поиск устройств в интернете' },
      { title: 'Maltego', url: 'https://www.maltego.com', description: 'Визуализация связей' },
      { title: 'theHarvester', url: 'https://github.com/laramies/theHarvester', description: 'Сбор email и поддоменов' },
      { title: 'Sherlock', url: 'https://github.com/sherlock-project/sherlock', description: 'Поиск по никам' },
      { title: 'HaveIBeenPwned', url: 'https://haveibeenpwned.com', description: 'Проверка утечек' },
      { title: 'Censys', url: 'https://search.censys.io', description: 'Альтернатива Shodan' }
    ]
  },
  {
    name: 'Пентест',
    icon: '🔐',
    links: [
      { title: 'PortSwigger Web Security', url: 'https://portswigger.net/web-security', description: 'Лаборатории по веб-безопасности' },
      { title: 'Hack The Box', url: 'https://www.hackthebox.com', description: 'Практика пентеста' },
      { title: 'TryHackMe', url: 'https://tryhackme.com', description: 'Обучение кибербезопасности' },
      { title: 'PentesterLab', url: 'https://pentesterlab.com', description: 'Практические задания' },
      { title: 'VulnHub', url: 'https://www.vulnhub.com', description: 'Уязвимые машины' }
    ]
  },
  {
    name: 'Полезные инструменты',
    icon: '🛠️',
    links: [
      { title: 'Burp Suite', url: 'https://portswigger.net/burp', description: 'Тестирование веб-приложений' },
      { title: 'Nmap', url: 'https://nmap.org', description: 'Сканер сети' },
      { title: 'Wappalyzer', url: 'https://www.wappalyzer.com', description: 'Определение технологий' },
      { title: 'Gobuster', url: 'https://github.com/OJ/gobuster', description: 'Поиск директорий' },
      { title: 'Metasploit', url: 'https://www.metasploit.com', description: 'Фреймворк для пентеста' }
    ]
  },
  {
    name: 'Kaspersky / SIEM',
    icon: '🛡️',
    links: [
      { title: 'Kaspersky Cybersecurity', url: 'https://www.kaspersky.ru', description: 'Официальный сайт' },
      { title: 'Kaspersky Open Source', url: 'https://github.com/kaspersky', description: 'GitHub Kaspersky' },
      { title: 'Kaspersky Threat Intelligence', url: 'https://opentip.kaspersky.com', description: 'Анализ угроз' },
      { title: 'Kaspersky VirusDesk', url: 'https://virusdesk.kaspersky.ru', description: 'Проверка файлов' }
    ]
  },
  {
    name: 'Баги и CVE',
    icon: '🐛',
    links: [
      { title: 'CVE Details', url: 'https://www.cvedetails.com', description: 'База уязвимостей' },
      { title: 'Exploit Database', url: 'https://www.exploit-db.com', description: 'Эксплойты' },
      { title: 'HackerOne', url: 'https://www.hackerone.com', description: 'Баг-баунти' },
      { title: 'Bugcrowd', url: 'https://www.bugcrowd.com', description: 'Баг-баунти' }
    ]
  }
];