# jssandbox

## Run

Before run scripts run "npm install" in terminal for dependencies' downloading

## Current tasks

- [x] Посмотреть, как работает функция $.extend() ($ - jQuery)
- [ ] Посмотреть логику для одиночного json'а
- [ ] Посмотреть логику для массива json'ов

## Current notes

Вся обработка (парсинг json, содержащего график) происходит
в функциях вида draw***MODE***Charts(), где ***MODE*** - режим запуска mongoose

Для обработки одиночного json'а функция wsProcess не нужна. Напрямую вызывается processJsonLogEvents().