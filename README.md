# jssandbox

## Run

Before run scripts run "npm install" in terminal for dependencies' downloading

## Current tasks

- [x] Посмотреть, как работает функция $.extend() ($ - jQuery).
- [ ] Посмотреть логику для одиночного json'а.
- [ ] Выяснить разницу для single, chain и rampup.
- [ ] Посмотреть логику для массива json'ов.
- [ ] Заменить период отправки сообщений на сервере на loadMetricsPeriodSec (если не заменён).
- [ ] Вернуть appendMessageToTable() для json.marker == "perfAvg".
- [ ] Выяснить, в каком виде заполняется chartArray.
- [ ] Выяснить, что содержит поле charts chartArray.
- [ ] Выяснить, как действует метод update для элементов charts в chartArray.

## Current notes

~~Вся обработка (парсинг json, содержащего график) происходит
в функциях вида draw***MODE***Charts(), где ***MODE*** - режим запуска mongoose~~

Обработка json происходит в методе drawChart().

Очень долго запускается debugging для node в webstorm ide.



## Current analysis

Для обработки одиночного json'а функция wsProcess не нужна. Напрямую вызывается processJsonLogEvents().

В начале processJsonLogEvents() из json.contextMap достаются следующие конфигурационные параметры:
- runId;
- loadMetricsPeriodSec - reporting period in sec;
- scenarioTypeChainLoad - chain of operations to perform (e.g. create,append,update,read,delete);
- scenarioTypeRumpupConnCounts - number of connections to use (e.g. 1,10,100).
- scenarioTypeRumpupSizes - sizes of data items (e.g. 1KB,10KB,100KB)
Для single defined только первые два параметра.

Далее в runId точки заменяются на на underscores.

Далее json обрабатывается, только если есть json.marker и json.loggerName.

Далее json обрабатывается,если jsn.marker не null.

Далее проверяется есть ли данный runId уже в chartsArray.

Если нет, и при этом json.contextMap.scenarioName - rampup, то вызывается drawRampupCharts().

Далее выполняется switch по json.marker. Нас интересует только json.marker == "perfAvg".

Проверяется наличие runId в chartsArray (***заново и немного по-другому ?!***).

Если не найден вызывается draw***MODE***Charts() для соответствующего режима.

=========================================================

В начале drawSingleCharts() если json - массив, то выбирается первый элемент массива и присваивается переменной temp,
иначе сам json присваивается переменной temp.

Далее runId достаётся из json.contextMap через cfcConstants (***хотя до этого иначе ?!***).

Также достаётся scenarioName (***зачем ?!***) и период (***хотя они уже доставались в методе processJsonEvents()***).
Период достаётся через parseInt().

Меняется значение по умолчанию для константы last (***полученный период не сравнивается с периодом по умолчанию ??!!*** ).

Задаются форматы для описания графиков в виде массивов (в переменных tpAndBwData и latAndDurData).

Затем для каждого измерения соответствующей переменной указываются вышеописанные форматы (через jQuery.extend()).

Далее проверяется массив ли json (***через (jsonValue !== undefined) and (jsonValue.length > 0) ?!***).

Если json не массив, то добавляется элемент scenarioChartObject в chartsArray через функцию getScenarioChartObject().
Данный объект включает runId, scenarioName и массив из 4ёх графиков, полученных через метод draw***METRIC***Charts(),
где ***METRIC*** - соответствующая метрика, в который передаётся переменная с форматом описания графика и json.

## Code changes

- processJsonLogEvents():
  - Condition of marker and loggerName check;
  - Name of isContains variable;
  - In forEach a name of an element is "each";
