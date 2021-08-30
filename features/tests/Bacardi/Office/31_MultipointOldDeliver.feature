@bacardi
@office

Feature: Check Multipoint Old Deliver in grid
    As a admin
    I want to check Multipoint Old Deliver grid

        # создаем 1ю накладную
    Scenario Outline: 31_Multipoint Old Deliver
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        # установка 2017 года и нахождения накладной 0030459077
        And I expect this element "Loader" is not visible
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        Then I click in standart element "0030459077"
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
         # кликнуть на линк накладной и откатить ее из архива
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной в статусе В Архиве"
        And I click on this element "Линк накладной в статусе В архиве"
        And thes element "Грид накладной статусе В архиве" contains the text "В архиве"
        # откат с Архива на Принята в накладной
        When I click on this element "Перевести статус в перевозке"
        And thes element "Грид перевозки откат статуса" contains the text "Перевод в статус"
        Then I click on this element "Иконка поиска статуса отката в накладной"
        And I add "Принята" to the inputfields "В поле поиска статуса отката"
        And I press "Enter"
        And I add "Откатываем тестовую накладную" to the inputfields "В поле комментария статуса отката"
        When I click on this element "Сохранить откат статуса"
        And thes element "Грид накладной статусе Принята" contains the text "Принята"

        # откат с Принята на Доставлена в накладной
        When I click on this element "Перевести статус в перевозке"
        And thes element "Грид перевозки откат статуса" contains the text "Перевод в статус"
        Then I click on this element "Иконка поиска статуса отката в накладной"
        And I add "Доставлена" to the inputfields "В поле поиска статуса отката"
        And I press "Enter"
        And I add "Откатываем тестовую накладную" to the inputfields "В поле комментария статуса отката"
        When I click on this element "Сохранить откат статуса"
        And thes element "Грид накладной статусе Доставлена" contains the text "Доставлена"

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в статусе Прибыло на выгрузку"
        And I click on this element "Линк перевозки в статусе Прибыло на выгрузку"
        And I expect this element "Loader" is not visible
        # откат с ТС прибыло на выгрузку до ТС убыло с погрузки в перевозке
        And I revert status "ТС убыло с погрузки"

        #кликнуть на линк накладной и откатить ее из доставлена
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной в статусе Отгружена"
        And I click on this element "Линк накладной в статусе Отгружена"
        And thes element "Грид накладной статусе Отгружена" contains the text "Отгружена"

        # откат с отгружена на собрана в накладной
        When I click on this element "Перевести статус в перевозке"
        And thes element "Грид перевозки откат статуса" contains the text "Перевод в статус"
        Then I click on this element "Иконка поиска статуса отката в накладной"
        And I add "Собрана" to the inputfields "В поле поиска статуса отката"
        And I press "Enter"
        And I add "Откатываем тестовую накладную" to the inputfields "В поле комментария статуса отката"
        When I click on this element "Сохранить откат статуса"
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в статусе Прибыло на погрузку"
        And I click on this element "Линк перевозки в статусе Прибыло на погрузку"
        And I expect this element "Loader" is not visible
        # откат с ТС прибыло на погрузку  до Подтверждена в перевозке
        And I revert status "Подтверждена"
        # откат с Подтверждена до ТС заказано в перевозке
        And I revert status "ТС заказано"
        # откат с ТС заказано до Создана в перевозке
        And I revert status "Создана"

        # кликнуть на кнопку "Расчитать распределение по ТК"
        And I scroll to elements "Линк маршрут перевозки"
        And I click calculate and select "<TK>" transport company
        # заполнить ставку
        And I scroll to elements "Кабинет в хедере"
        And I add numbers "50000" to the inputfields "Ставка за перевозку в перевозке"
        And I press "Enter"
        And I expect this element "Loader" is not visible
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
            | TK       | login coordinator         |
            | ЛТ Групп | Bac Transport Coordinator |
