@vistakon
@office
@Pending
#у виистакона пока нет накладных в архиве, чтобы их откатывать

Feature: Check old pickup waybills
    As a admin
    I want to check old pickup waybills goes forward and back

        # находим накладную
    Scenario Outline: 16_Pickup Old Forward And Back
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        # установка 2018 года и проверка накладной 0030577592
        And I expect this element "Loader" is not visible
        And I set date years "2018"
        And I expect this element "Loader" is not visible
        Then I click in standart element "0030577592"
        And I expect this element "Loader" is not visible
        And thes element "Грид накладной" contains the text "В архиве"

         # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в архиве"
        And I click on this element "Линк перевозки в архиве"
        And I expect this element "Loader" is not visible
        And thes element "Грид перевозки статус В архиве" contains the text "В архиве"

        # откат с Архива в ТС прибыло на погрузку в перевозке
        And I scroll to elements "Кабинет в хедере"
        Then I click on this element "Перевести статус в перевозке"
        And thes element "Грид перевозки откат статуса" contains the text "Перевод в статус"
        When I click on this element "Иконка поиска статуса отката"
        And I add "ТС прибыло на погрузку" to the inputfields "В поле поиска статуса отката"
        And I press "Enter"
        And I add "Откатываем тестовую накладную" to the inputfields "В поле комментария статуса отката"
        Then I click on this element "Сохранить откат статуса"
        And I expect this element "Loader" is not visible
        And thes element "Грид перевозки статус ТС прибыло на погрузку" contains the text "ТС прибыло на погрузку"

        # откат с ТС прибыло на погрузку  до Подтверждена в перевозке
        When I click on this element "Перевести статус в перевозке"
        And thes element "Грид перевозки откат статуса" contains the text "Перевод в статус"
        Then I click on this element "Иконка поиска статуса отката"
        And I add "Подтверждена" to the inputfields "В поле поиска статуса отката"
        And I press "Enter"
        And I add "Откатываем тестовую накладную" to the inputfields "В поле комментария статуса отката"
        When I click on this element "Сохранить откат статуса"
        And I expect this element "Loader" is not visible
        And thes element "Грид перевозки статусе Подтверждена" contains the text "Подтверждена"
        # удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        Then I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
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
        And I scroll to elements "Кабинет в хедере"
        And I click on this element "ТС прибыло на погрузку в перевозке"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС убыло с погрузки в перевозке"
        And I scroll to elements "Кабинет в хедере"
        When I click on this element "ТС убыло с погрузки в перевозке"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        And thes element "Грид перевозки статус В архиве" contains the text "В архиве"

        Examples:
            | TK      | login coordinator         |
            | Даймекс | Vis Transport Coordinator |
