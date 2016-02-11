# jssandbox

## Run

Before run scripts run "npm install" in terminal for dependencies' downloading

## Current tasks

- [x] Посмотреть, как работает функция $.extend() ($ - jQuery).
- [ ] Понять, как провести границу между графиками и таблицей сообщений.
- [ ] Понять, каким образом осуществить переход от добавления одной точки к добавлению всего графика.
  - Есть ли разница между текущей реализацией и рисованием сразу всего графика?
  - Перерисовывается ли график каждый раз?
  - В drawChart() цикл для рисования всех точек по порядку?
  - Вызываются ли в return'е drawChart() данные из тела метода?
- [ ] Выяснить почему мы попадаем в initDataArray только в случае передачи массива.
- [x] Решить проблему с замыканием в single.js.
- [ ] Посмотреть логику для одиночного json'а.
- [ ] Выяснить разницу для single, chain и rampup.
- [ ] Посмотреть логику для массива json'ов.
- [ ] Заменить период отправки сообщений на сервере на loadMetricsPeriodSec (если не заменён).
- [ ] Вернуть appendMessageToTable() для json.marker == "perfAvg".
- [x] Выяснить, в каком виде заполняется chartArray.
- [x] Выяснить, что содержит поле charts chartArray.
- [ ] Выяснить, как действует метод update для элементов charts в chartArray.
- [x] Вспомнить enter(), exit(), update() в d3.

## Current notes

~~Вся обработка (парсинг json, содержащего график) происходит
в функциях вида draw***MODE***Charts(), где ***MODE*** - режим запуска mongoose~~

Два случая:

- Обработка json происходит в return'е метода drawChart().

- Обработка происходит в simplifyChart

В решении проблемы перехода к добавлению целого графика обратить внимание на функцию update().

Предположительно ключ к решению в main.js single.initDataArray (ссылается на simplifyChart()),
т.к. там обрабатывается сразу массив точек.

Очень долго запускается debugging для node в webstorm ide.

## Current analysis

Previous analysis is in git history.

## Code changes

- processJsonLogEvents():
  - Condition of marker and loggerName check;
  - Name of isContains variable;
  - In forEach a name of an element is "each";
