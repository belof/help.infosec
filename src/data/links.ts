// src/data/links.ts

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
  // ========== ОСТАВЛЯЕМ СУЩЕСТВУЮЩИЕ КАТЕГОРИИ ==========
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
    name: 'Пентест (классика)',
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
  },

  // ========== НОВЫЕ КАТЕГОРИИ ИЗ РЕПОЗИТОРИЯ arch3rPro ==========
  {
    name: 'Reconnaissance & OSINT (продвинутый)',
    icon: '🔎',
    links: [
      { title: 'Amass', url: 'https://github.com/OWASP/Amass', description: 'Сбор поддоменов и OSINT' },
      { title: 'SpiderFoot', url: 'https://github.com/smicallef/spiderfoot', description: 'Автоматизированный OSINT-фреймворк' },
      { title: 'Recon-ng', url: 'https://github.com/lanmaster53/recon-ng', description: 'Модульный веб-разведчик' },
      { title: 'Photon', url: 'https://github.com/s0md3v/Photon', description: 'OSINT-сканер' },
      { title: 'Sn1per', url: 'https://github.com/1N3/Sn1per', description: 'Автоматизированный сканер уязвимостей' }
    ]
  },
  {
    name: 'Web Application Testing',
    icon: '🌐',
    links: [
      { title: 'Nikto', url: 'https://github.com/sullo/nikto', description: 'Сканер веб-серверов' },
      { title: 'Dirb', url: 'https://github.com/v0re/dirb', description: 'Поиск скрытых директорий' },
      { title: 'XSStrike', url: 'https://github.com/s0md3v/XSStrike', description: 'Расширенное обнаружение XSS' },
      { title: 'SQLmap', url: 'https://github.com/sqlmapproject/sqlmap', description: 'Автоматическая инъекция SQL' },
      { title: 'JWT Tool', url: 'https://github.com/ticarpi/jwt_tool', description: 'Тестирование JWT-токенов' }
    ]
  },
  {
    name: 'Password Attacks',
    icon: '🔑',
    links: [
      { title: 'Hashcat', url: 'https://github.com/hashcat/hashcat', description: 'Самый быстрый взломщик паролей' },
      { title: 'John the Ripper', url: 'https://github.com/openwall/john', description: 'Классический подбор паролей' },
      { title: 'Hydra', url: 'https://github.com/vanhauser-thc/thc-hydra', description: 'Брутфорс сетевых сервисов' }
    ]
  },
  {
    name: 'Exploitation Frameworks',
    icon: '💣',
    links: [
      { title: 'Metasploit', url: 'https://github.com/rapid7/metasploit-framework', description: 'Главный фреймворк для пентеста' },
      { title: 'BeEF', url: 'https://github.com/beefproject/beef', description: 'Атаки на браузеры' },
      { title: 'RouterSploit', url: 'https://github.com/threat9/routersploit', description: 'Эксплойты для роутеров' }
    ]
  },
  {
    name: 'Post-Exploitation & Lateral Movement',
    icon: '🎯',
    links: [
      { title: 'Empire', url: 'https://github.com/EmpireProject/Empire', description: 'Постэксплуатационный фреймворк' },
      { title: 'Mimikatz', url: 'https://github.com/gentilkiwi/mimikatz', description: 'Извлечение учётных данных' },
      { title: 'BloodHound', url: 'https://github.com/BloodHoundAD/BloodHound', description: 'Пути атак в Active Directory' }
    ]
  },
  {
    name: 'Wireless & Bluetooth',
    icon: '📡',
    links: [
      { title: 'Aircrack-ng', url: 'https://github.com/aircrack-ng/aircrack-ng', description: 'Аудит Wi-Fi' },
      { title: 'Kismet', url: 'https://github.com/kismetwireless/kismet', description: 'Обнаружение беспроводных сетей' },
      { title: 'Bettercap', url: 'https://github.com/bettercap/bettercap', description: 'MITM-атаки и мониторинг' }
    ]
  },
  {
    name: 'Defense & Evasion',
    icon: '🛡️',
    links: [
      { title: 'Veil', url: 'https://github.com/Veil-Framework/Veil', description: 'Генерация необнаруживаемых пейлоадов' },
      { title: 'Shellter', url: 'https://github.com/ShellterDevelopers/Shellter', description: 'Внедрение шелл-кода в PE-файлы' },
      { title: 'Chameleon', url: 'https://github.com/geekspeed/Chameleon', description: 'Обход антивирусов' }
    ]
  },
  {
    name: 'Docker & CTF Utilities',
    icon: '🐳',
    links: [
      { title: 'Docker for Pentesters', url: 'https://github.com/arch3rPro/PentestTools#docker', description: 'Контейнеры с инструментами' },
      { title: 'CTF Tools', url: 'https://github.com/arch3rPro/PentestTools#ctf', description: 'Набор для соревнований' }
    ]
  }
];
