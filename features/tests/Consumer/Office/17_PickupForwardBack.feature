@consumer
@office

Feature: Check pickup waybills
    As a admin
    I want to check pickup waybills goes forward and back

        #создаем накладную
    Scenario Outline:17_Pickup Forward And Back: Самовывоз вперед назад
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Самовывоз в опциях способа доставки"
        And I expect this element "Loader" is not visible
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
        And I scroll to elements "Линк перевозки в статусе Подтверждена"
        And I click on this element "Линк перевозки в статусе Подтверждена"
        And I expect this element "Loader" is not visible
  		# перевести статус перевозки "ТС прибыло на погрузку"
        And I moving status forward "ТС прибыло на погрузку"
        # перевести статус перевозки "ТС убыло с погрузки в перевозке"
        And I scroll to elements "Кабинет в хедере"
        When I click on this element "ТС убыло с погрузки в перевозке"
        And I accept the alertbox
        And thes element "Грид перевозки статус В архиве" contains the text "В архиве"
        #откат с Архива в ТС прибыло на погрузку в перевозке
        And I revert status "ТС прибыло на погрузку"
        # откат с ТС прибыло на погрузку  до Подтверждена в перевозке
        And I revert status "Подтверждена"

        #удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"

        Examples:
            | TK     | shipping warehouse | delivery warehouse                                                     | vendorcode | number vendorcode | login coordinator              |
            | Ителла | CONSMSKFM          | Российская Федерация 440516 Пензенский р-н с. Саловка Полевая ул. д.15 | 1603706S   | 105000            | Consumer Transport Coordinator |
