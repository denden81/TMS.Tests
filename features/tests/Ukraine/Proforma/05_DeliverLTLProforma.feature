@ukraine
@proforma

Feature: Check Deliver LTL Proforma
    As a admin
    I want to check waybills Deliver LTL Proforma

        # создаем накладную
    Scenario Outline: 05_Deliver LTL Proforma
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Поставка в опциях способа доставки"
        # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible
        Then I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
       # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"

         # перевести статус "В подборке"
        And I moving waybills status forward "В подборке"

         # перевести статус в "Собрана"
        And I moving waybills status forward "Собрана"

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible

        # выбрать тип тс "палетная доставка"
        And I scroll to elements "Кабинет в хедере"
        And I click on this element "Тип ТС в перевозке"
        And I click in standart type tc element "<type tc>"
        And I pause for 3000ms
        And I accept the alertbox
        And I pause for 3000ms
        # сбрасываем ставку за перевозку
        And I accept the alertbox
        And I expect this element "Loader" is not visible

        #кликнуть на кнопку "Расчитать распределение по ТК"
        And I scroll to elements "Линк маршрут перевозки"
        And I click calculate and select "<TK>" transport company
        # перевести статус перевозки "ТС заказано"
        And I moving status forward "ТС заказано"
		# перевести статус перевозки "Подтверждена"
        And I moving status forward "Подтверждена"
 		# перевести статус перевозки "ТС прибыло на погрузку"
        And I moving status forward "ТС прибыло на погрузку"
        # перевести статус перевозки "ТС убыло с погрузки"
        And I moving status forward "ТС убыло с погрузки"
        # перевести статус перевозки "ТС прибыло на выгрузку"
        And I moving status forward "ТС прибыло на выгрузку"
        # кликнуть на линк перевозки и сменить статус накладной на принята
        And I scroll to elements "Линк маршрут перевозки"
        And I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной"
        And I click on this element "Сменить статус накладной на Принята"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС убыло с выгрузки"
        And I moving status forward "ТС убыло с выгрузки"
        # перевести статус перевозки "Перевозка завершена"
        And I moving status forward "Перевозка завершена"

          # заполнить ставку
        And I scroll to elements "Кабинет в хедере"
        And I clear thes inputfield "Ставка за перевозку в перевозке"
        And I expect this element "Loader" is not visible
        And I pause for 3000ms
        And I expect this element "Loader" is not visible
        And I add numbers "40000" to the inputfields "Ставка за перевозку в перевозке"
        And I press "Enter"
        And I expect this element "Loader" is not visible

         # заполнить дополнительные затраты Простой
        And I scroll to elements "Штрафы"
        And I click on this element "Дополнительные затраты"
        And I scroll to elements "Штрафы"
        And I click on this element "Добавляем плечо Доп затрат"
        And I click on this element "сохраняем плечо Доп затрат"
        And I click on this element "Добавляем затрату в Доп затратах"
        And I click on this element "Простой в Доп затратах"
        And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        And I add "возврат кота" to the inputfields "Значение комментария в Доп затратах"
        And I click button Add Additional Cost
        And I expect this element "Loader" is not visible
        		# перевести статус перевозки "Сумма подтверждена"
        And I moving status forward "Сумма подтверждена"
        		# перевести статус перевозки "Счет выставлен"
        And I moving status forward "Счет выставлен"

         # читаем номер перевозки и вводим его в поиск в проформе
        And I scroll to elements "Кабинет в хедере"
        And I read number carriages and add him in Proforma LTL

        And I have a screen that is 1920 by 900 pixels
        # суммы Ставка за перевозку, Ставка за простой, Ставка за самовыгрузку вводим с пробелами. как они отображаются на гриде
        And I check rate "40 000",rate simple "7 000" in LTL Proforma

        Examples:
            | TK      | shipping warehouse                                              | delivery warehouse                 | vendorcode | number vendorcode | login coordinator         | type tc  |
            | ТОВ ХФК | вул. Садова 26-а, смт. Гостомель, Київська обл., 08290, Україна | 08300 Бориспіль вул. Запорізька 28 | 8077501    | 225000            | Ukr Transport Coordinator | LTL тент |
