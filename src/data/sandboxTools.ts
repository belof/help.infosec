export interface SandboxTool {
  id: number;
  name: string;
  category: 'легкая' | 'виртуализация' | 'контейнеризация' | 'автоматизация' | 'облачные';
  install: string;
  usage: string;
  pros: string[];
  cons: string[];
  url: string;
}

export const sandboxTools: SandboxTool[] = [
  {
    id: 1,
    name: 'Firejail',
    category: 'легкая',
    install: 'sudo apt update && sudo apt install firejail firejail-profiles -y',
    usage: 'firejail firefox https://example.com\nfirejail --net=eth0 curl -vI https://example.com',
    pros: ['Ограничивает доступ к файловой системе и сети', 'Простая настройка', 'Быстрый запуск', 'Есть готовые профили для многих приложений'],
    cons: ['Защита не на уровне ядра (использует namespaces)', 'Может быть обойдён при определённых условиях'],
    url: 'https://firejail.wordpress.com/'
  },
  {
    id: 2,
    name: 'VirtualBox',
    category: 'виртуализация',
    install: 'sudo apt install virtualbox -y',
    usage: '1. Скачайте образ ОС (Windows, Linux)\n2. Создайте новую ВМ в VirtualBox\n3. Настройте сеть: NAT или "Внутренняя сеть"\n4. Запустите ВМ и установите ОС',
    pros: ['Полная изоляция на уровне гипервизора', 'Можно запускать любые ОС (Windows, Linux, macOS)', 'Снимки состояния (snapshots)'],
    cons: ['Требует много ресурсов (RAM, CPU, диск)', 'Время на настройку и установку', 'Неудобно для быстрых одноразовых задач'],
    url: 'https://www.virtualbox.org/'
  },
  {
    id: 3,
    name: 'Docker',
    category: 'контейнеризация',
    install: 'sudo apt install docker.io -y',
    usage: 'docker run -it --rm kalilinux/kali-rolling bash\n# Проброс GUI (для приложений с графикой):\nxhost +local:docker\ndocker run -it --rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix kalilinux/kali-rolling firefox',
    pros: ['Быстрый запуск (секунды)', 'Малое потребление ресурсов', 'Много готовых образов (Kali, Ubuntu, etc.)'],
    cons: ['Общее ядро с хостом (риск выхода из контейнера)', 'Требует осторожности с привилегиями', 'Сложнее с GUI-приложениями'],
    url: 'https://www.docker.com/'
  },
  {
    id: 4,
    name: 'Cuckoo Sandbox',
    category: 'автоматизация',
    install: 'Установка сложная, рекомендуется по официальной документации:\nhttps://cuckoo.sh/docs/installation/index.html\n\n# Кратко (Ubuntu):\nsudo apt install -y cuckoo\n# Требуется настройка виртуальных машин и модулей',
    usage: 'cuckoo submit --timeout=60 /path/to/sample.exe\n# Результаты в веб-интерфейсе (localhost:8000)',
    pros: ['Полноценная автоматизированная система', 'Поддержка множества форматов файлов', 'Расширяемая архитектура'],
    cons: ['Очень сложная установка и настройка', 'Требует выделенного сервера', 'Устаревшая кодовая база (но работает)'],
    url: 'https://cuckoo.sh/'
  },
  {
    id: 5,
    name: 'CAPEv2',
    category: 'автоматизация',
    install: 'git clone https://github.com/kevoreilly/CAPEv2\ncd CAPEv2\n# Далее следовать инструкции (требуется Python, VirtualBox)',
    usage: 'capesubmit --options "timeout=60" /path/to/malware.exe\n# Анализ с распаковкой и подробным отчётом',
    pros: ['Форк Cuckoo с улучшениями', 'Лучше распаковывает вредоносное ПО', 'Активно поддерживается'],
    cons: ['Также сложен в настройке', 'Требует ресурсов', 'Документация не всегда полная'],
    url: 'https://github.com/kevoreilly/CAPEv2'
  },
  {
    id: 6,
    name: 'ANY.RUN',
    category: 'облачные',
    install: 'Не требуется установка. Работает в браузере.\nРегистрация (есть бесплатный тариф) на https://any.run',
    usage: 'Загрузите файл или укажите URL. Система автоматически проанализирует в изолированной среде, покажет сетевые подключения, изменения в реестре, скриншоты.',
    pros: ['Не требует ресурсов хоста', 'Очень простой интерфейс', 'Быстрый анализ', 'Интерактивное взаимодействие'],
    cons: ['Бесплатная версия имеет ограничения (очередь, время анализа)', 'Конфиденциальность данных (загружаемые образы могут оставаться в облаке)'],
    url: 'https://any.run/'
  },
  {
    id: 7,
    name: 'urlscan.io',
    category: 'облачные',
    install: 'Браузерный сервис, без установки. Доступен по адресу https://urlscan.io',
    usage: 'Введите URL в строку поиска. Сервис откроет сайт в браузере, сделает скриншот, покажет сетевые запросы, редиректы, связи с другими доменами.',
    pros: ['Мгновенный анализ ссылок без риска', 'История сканирований', 'API для автоматизации', 'Бесплатно'],
    cons: ['Анализирует только веб-страницы (не файлы)', 'Некоторые сайты могут блокировать сканер'],
    url: 'https://urlscan.io/'
  }
];