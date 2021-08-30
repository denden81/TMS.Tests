@consumer
@office

Feature: Check inbound old waybills
    As a admin
    I want to check inbound old waybills goes forward and back

        # находим накладную
    Scenario Outline:20_Inbound Old Forward And Back:Самоввоз старая вперед и назад
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        # установка 2018 года и проверка накладной 0180102259
        And I expect this element "Loader" is not visible
        And I set date years "2018"
        And I expect this element "Loader" is not visible
        When I click in standart element "0180102259"
        And I expect this element "Loader" is not visible
        And I check status archived and "<TK>" transport company
        And thes element "Грид накладной" contains the text "В архиве"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в архиве"
        And I click on this element "Линк перевозки в архиве"
        And thes element "Грид перевозки статус В архиве" contains the text "В архиве"

        #откат с Архива в ТС прибыло на выгрузку в перевозке
        And I revert status "ТС прибыло на выгрузку"
        # откат с ТС прибыло на выгрузку до ТС убыло с погрузки в перевозке
        And I revert status "ТС убыло с погрузки"
        # откат с ТС заказано до Создана в перевозке
        And I revert status "Создана"
        # удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And thes element "Грид накладной" contains the text "Создана"
        # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС убыло с погрузки"
        And I moving status forward "ТС убыло с погрузки"
        # перевести статус перевозки "ТС прибыло на выгрузку"
        And I moving status forward "ТС прибыло на выгрузку"
        # перевести статус перевозки "ТС убыло с выгрузки"
        And I moving status forward "ТС убыло с выгрузки"
        # перевести статус перевозки "В архиве"
        And I moving status forward "В архиве"
        # кликнуть на линк перевозки и сменить статус накладной на Принята
        And I scroll to elements "Линк маршрут перевозки"
        And I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной в статусе Доставлена"
        And I click on this element "Сменить статус накладной на Принята"
        And I accept the alertbox
        And I expect this element "Loader" is not visible

        # сменить статус накладной В архиве
        And I click on this element "Сменить статус накладной на Архив"
        And I accept the alertbox
        And I expect this element "Loader" is not visible

        Examples:
            | login coordinator        |
            | MD Transport Coordinator |
