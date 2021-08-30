@consumer
@office

Feature: Check waybills
    As a admin
    I want to check waybills goes forward and back

        #создаем накладную
    Scenario Outline:15_Deliver Forward and Back
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Доставка в опциях способа доставки"
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
        #кликнуть на кнопку "Расчитать распределение по ТК" и выбрать тк
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
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной"
        And I click on this element "Сменить статус накладной на Принята"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС убыло с выгрузки"
        And I moving status forward "ТС убыло с выгрузки"
        # перевести статус перевозки "Перевозка завершена"
        And I moving status forward "Перевозка завершена"
		# перевести статус перевозки "Сумма подтверждена"
        And I moving status forward "Сумма подтверждена"
		# перевести статус перевозки "Счет выставлен"
        And I moving status forward "Счет выставлен"
        # перевести статус перевозки "В архиве"
        And I moving status forward "В архиве"
        # кликнуть на линк перевозки и сменить статус накладной на архив
        And I scroll to elements "Линк накладной в статусе Принята"
        And I click on this element "Сменить статус накладной на Архив"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        # откат с Архива в Счет выставлен в перевозке
        And I revert status "Счет выставлен"
        # откат с Счет выставлен до Сумма подтверждена в перевозке
        And I revert status "Сумма подтверждена"
        # откат с Сумма подтверждена до Перевозка завершена в перевозке
        And I revert status "Перевозка завершена"
  		# откат с Перевозка завершена до ТС убыло с выгрузки в перевозке
        And I revert status "ТС убыло с выгрузки"
        # откат с ТС убыло с выгрузки до ТС прибыло на выгрузку в перевозке
        And I revert status "ТС прибыло на выгрузку"
        # откат с ТС прибыло на выгрузку до ТС убыло с погрузки в перевозке
        And I revert status "ТС убыло с погрузки"
        # откат с ТС убыло с погрузки до ТС прибыло на погрузку в перевозке
        And I revert status "ТС прибыло на погрузку"
        # откат с ТС прибыло на погрузку  до Подтверждена в перевозке
        And I revert status "Подтверждена"
        # откат с Подтверждена до ТС заказано в перевозке
        And I revert status "ТС заказано"
        # откат с ТС заказано до Создана в перевозке
        And I revert status "Создана"

        #удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"

        Examples:
            | TK     | shipping warehouse | delivery warehouse                                                     | vendorcode | number vendorcode | login coordinator              |
            | Ителла | CONSMSKFM          | Российская Федерация 440516 Пензенский р-н с. Саловка Полевая ул. д.15 | 1603706S   | 105000            | Consumer Transport Coordinator |
