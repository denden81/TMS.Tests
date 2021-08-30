@consumer
@office

Feature: Check 4 Cross Dock waybills
    As a admin
    I want to check 4 Cross Dock waybills goes forward and back

        # создаем накладную
    Scenario Outline: 36_4 Cross Dock waybills goes forward and back
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "RemoveFilter"
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

        # Добавление 2го склада доставки
        And I scroll to elements "Склад доставки 2ой в кроссдоковой накладной"
        When I click on this element "Склад доставки 2ой в кроссдоковой накладной"
        And thes element "Выбор склада в окне новой перевозки" contains the text "Выбор склада"
        And I add "<delivery warehouse 2>" to the inputfields "В строку поиска"
        Then I click on this element "Поиск"
        And I expect this element "Loader" is not visible
        And I click on this element "Выбрать первое значение в списке"
        And I click on this element "Сохранить склад"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"
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
        ######2 перевозка
        # кликнуть на линк перевозки и сменить статус накладной на в перевозке
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной в статусе Создана"
        And I click on this element "Линк накладной в статусе Создана"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # перевести статус "В перевозке"
        And I click on this element "В перевозке накладной"
        And I accept the alertbox
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"

        # Добавление 3го склада доставки
        And I scroll to elements "Склад доставки 3тий в кроссдоковой накладной"
        When I click on this element "Склад доставки 3тий в кроссдоковой накладной"
        And thes element "Выбор склада в окне новой перевозки" contains the text "Выбор склада"
        And I add "<delivery warehouse 3>" to the inputfields "В строку поиска"
        Then I click on this element "Поиск"
        And I expect this element "Loader" is not visible
        And I click on this element "Выбрать первое значение в списке"
        And I click on this element "Сохранить склад"
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
         # Выбор направления
        And I choice "<Direction>" of direction
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
        ######3 перевозка
        # кликнуть на линк перевозки и сменить статус накладной на в перевозке
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной в статусе Создана"
        And I click on this element "Линк накладной в статусе Создана"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # перевести статус "В перевозке"
        And I click on this element "В перевозке накладной"
        And I accept the alertbox
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"
        # Добавление 4го склада доставки
        And I scroll to elements "Склад доставки 4тый в кроссдоковой накладной"
        When I click on this element "Склад доставки 4тый в кроссдоковой накладной"
        And thes element "Выбор склада в окне новой перевозки" contains the text "Выбор склада"
        And I add "<delivery warehouse 4>" to the inputfields "В строку поиска"
        Then I click on this element "Поиск"
        And I expect this element "Loader" is not visible
        And I click on this element "Выбрать первое значение в списке"
        And I click on this element "Сохранить склад"
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
         # Выбор направления
        And I choice "<Direction>" of direction
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
        #######4 перевозка
         # кликнуть на линк перевозки и сменить статус накладной на в перевозке
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной в статусе Создана"
        And I click on this element "Линк накладной в статусе Создана"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # перевести статус "В перевозке"
        And I click on this element "В перевозке накладной"
        And I accept the alertbox
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
         # Выбор направления
        And I choice "<Direction>" of direction
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

        Examples:
            | TK     | shipping warehouse | delivery warehouse                        | delivery warehouse 2              | delivery warehouse 3                         | delivery warehouse 4              | vendorcode | number vendorcode | login coordinator              |Direction       |
            | Ителла | CONSMSKFM          | 400050, Волгоград, ул. Хиросимы, 16 Б     | г. Волгоград. ул Армавирская 11-24| 400078, Волгоград, Пр-т Ленина, д. 67, оф 506| г. Волгоград, ул. Чарджуйская д.33| 1603706S   | 105000            | Consumer Transport Coordinator |Москва~Волгоград|
