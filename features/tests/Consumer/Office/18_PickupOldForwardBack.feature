@consumer
@office

Feature: Check old pickup waybills
    As a admin
    I want to check old pickup waybills goes forward and back

        # находим накладную
    Scenario Outline:18_Pickup Old Forward And Back: Старая самовывоз вперед и назад
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        # установка 2018 года и проверка накладной 0081004216
        And I expect this element "Loader" is not visible
        And I set date years "2018"
        And I expect this element "Loader" is not visible
        Then I click in standart element "0081004216"
        And I expect this element "Loader" is not visible
        And I check status archived and "<TK>" transport company
        And thes element "Грид накладной" contains the text "В архиве"

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в архиве"
        And I click on this element "Линк перевозки в архиве"
        And thes element "Грид перевозки статус В архиве" contains the text "В архиве"
        # откат с Архива в ТС прибыло на погрузку в перевозке
        And I revert status "ТС прибыло на погрузку"
        # откат с ТС прибыло на погрузку  до Подтверждена в перевозке
        And I revert status "Подтверждена"
        # удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        Then I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"
        # создаем перевозку
        And I scroll to elements "Создать перевозку в накладной"
        Then I click on this element "Создать перевозку в накладной"
        And I expect this element "Loader" is not visible
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
        Examples:
            | TK     | login coordinator              |
            | Ителла | Consumer Transport Coordinator |
