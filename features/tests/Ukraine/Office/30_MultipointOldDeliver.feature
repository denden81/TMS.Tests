@ukraine
@office

Feature: Check Multipoint Old Deliver in grid
    As a admin
    I want to check Multipoint Old Deliver grid

        # создаем 1ю накладную
    Scenario Outline: 30_Drag Multipoint Old Deliver
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        # установка 2017 года и нахождения накладной SO-014395
        And I expect this element "Loader" is not visible
        And I set date years "2016"
        And I expect this element "Loader" is not visible
        Then I click in standart element "SO-014395"
        And I expect this element "Loader" is not visible
        And I check status archived and "<TK>" transport company
        And thes element "Грид накладной" contains the text "В архиве"

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в архиве"
        And I click on this element "Линк перевозки в архиве"
        And thes element "Грид перевозки статус В архиве" contains the text "В архиве"

        #откат с Архива в Счет выставлен в перевозке
        And I revert status "Счет выставлен"

        # откат с Счет выставлен до Сумма подтверждена в перевозке
        And I revert status "Сумма подтверждена"

        # откат с Сумма подтверждена до Перевозка завершена в перевозке
        And I revert status "Перевозка завершена"
        ######2 точка отката

		# откат с Перевозка завершена до ТС убыло с выгрузки в перевозке
        And I revert status "ТС убыло с выгрузки"

        # откат с ТС убыло с выгрузки до ТС прибыло на выгрузку в перевозке
        And I revert status "ТС прибыло на выгрузку"
        ######1 точка отката

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

        # кликнуть на кнопку "Расчитать распределение по ТК"
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
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной"
        And I click on this element "Сменить статус накладной на Принята"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС убыло с выгрузки"
        And I moving status forward "ТС убыло с выгрузки"
        ####### 2 точка отгрузки
        # подвигать мышой чтобы пропала подсказка на кнопке перевода статуса
        And I move the element "кнопка ТС прибыло на выгрузку в перевозке" with an offset of 500,100
        # перевести статус перевозки "ТС прибыло на выгрузку"
        And I moving status forward "ТС прибыло на выгрузку"
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
        And I click on this element "Сменить статус накладной на Архив"
        And I accept the alertbox
        And I expect this element "Loader" is not visible

        Examples:
            | TK      | login coordinator         |
            | ТОВ ХФК | Ukr Transport Coordinator |
