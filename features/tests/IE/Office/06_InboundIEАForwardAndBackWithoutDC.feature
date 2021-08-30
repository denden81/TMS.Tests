@ie
@office

Feature: Check inbound waybills
    As a admin
    I want to check waybills goes forward and back

        # создаем накладную
    Scenario Outline: 06_Inbound IE Forward And Back Without DC
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Inbound IE в опциях способа доставки"
        # Добавление рандомного номера заказа накладной
        And I add "random order number IE" to the inputfields "Номер заказа накладной"
        # Добавление даты инвойса номера заказа накладной
        And I set date delivery invoice
        # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible
        And thes element "Название артикула" contains the text "<vendorcode>"
        And I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"
        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"
        # заполняем сумму по инвойсу
        And I scroll to elements "Линк история накладной"
        When I click on this element "Импорт в накладной"
        And I add "54500" to the inputfields "Сумма товаров по инвойсу"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        # заполняем валюту по инвойсу
       # Then I click on this element "Иконка выбора валюты в накладной"
       # When I click on this element "Выбрать валюту RUB в накладной"
       # And I expect this element "Loader" is not visible
        # перевести статус "В перевозке"
        And I scroll to elements "Кабинет в хедере"
        And I click on this element "В перевозке накладной"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        Then thes element "Грид накладной статус В перевозке" contains the text "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в статусе Создана"
        And I click on this element "Линк перевозки в статусе Создана"
        And thes element "Грид перевозки статус Создана" contains the text "Создана"
        #кликнуть на кнопку "Расчитать распределение по ТК" и выбрать тк
        And I click calculate and select "<TK>" transport company
        		# перевести статус перевозки "ТС прибыло на погрузку"
        And I moving status forward "ТС прибыло на погрузку"
        # перевести статус перевозки "ТС убыло с погрузки"
        And I moving status forward "ТС убыло с погрузки"

        # перевести статус перевозки "ТС прибыло на таможню"
        And I scroll to elements "Кабинет в хедере"
        Then I click on this element "ТС прибыло на таможню в перевозке"
        And I accept the alertbox
        And thes element "Грид перевозки статус ТС прибыло на таможню" contains the text "ТС прибыло на таможню"

        # перевести статус перевозки "ДТ подана"
        And I scroll to elements "Кабинет в хедере"
        When I click on this element "ДТ подана в перевозке"
        And I accept the alertbox
        And thes element "Грид перевозки статус ДТ подана" contains the text "ДТ подана"

        # перевести статус перевозки "ДТ выпущена"
        And I scroll to elements "Кабинет в хедере"
        Then I click on this element "ДТ выпущена в перевозке"
        And I accept the alertbox
        And thes element "Грид перевозки статус ДТ выпущена" contains the text "ДТ выпущена"
        # перевести статус перевозки "ТС убыло с СВХ"
        And I scroll to elements "Кабинет в хедере"
        When I click on this element "ТС убыло с СВХ в перевозке"
        And I accept the alertbox
        And thes element "Грид перевозки статус ТС убыло с СВХ" contains the text "ТС убыло с СВХ"
        # перевести статус перевозки "ТС прибыло на выгрузку"
        And I moving status forward "ТС прибыло на выгрузку"
        # перевести статус перевозки "ТС убыло с выгрузки"
        And I moving status forward "ТС убыло с выгрузки"
        # перевести статус перевозки "В архиве"
        And I moving status forward "В архиве"
        # кликнуть на линк перевозки и сменить статус накладной на архив
        And I scroll to elements "Линк маршрут перевозки"
        When I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной в статусе Доставлена"
        And I click on this element "Сменить статус накладной на Принята"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        # кликнуть на линк перевозки и сменить статус накладной на архив
        And I click on this element "Сменить статус накладной на Архив"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        # откат с Архива в ТС прибыло на выгрузку в перевозке
        And I revert status "ТС прибыло на выгрузку"
        # откат с ТС прибыло в Убыло с СВХ на выгрузку в перевозке
        And I scroll to elements "Кабинет в хедере"
        When I click on this element "Перевести статус в перевозке"
        And thes element "Грид перевозки откат статуса" contains the text "Перевод в статус"
        Then I click on this element "Иконка поиска статуса отката"
        And I add "ТС убыло с СВХ" to the inputfields "В поле поиска статуса отката"
        And I press "Enter"
        And I add "Откатываем тестовую накладную" to the inputfields "В поле комментария статуса отката"
        When I click on this element "Сохранить откат статуса"
        And thes element "Грид перевозки статус ТС убыло с СВХ" contains the text "ТС убыло с СВХ"
        # откат с ТС прибыло в Убыло с СВХ на выгрузку в перевозке
        And I scroll to elements "Кабинет в хедере"
        Then I click on this element "Перевести статус в перевозке"
        And thes element "Грид перевозки откат статуса" contains the text "Перевод в статус"
        When I click on this element "Иконка поиска статуса отката"
        And I add "ТС прибыло на таможню" to the inputfields "В поле поиска статуса отката"
        And I press "Enter"
        And I add "Откатываем тестовую накладную" to the inputfields "В поле комментария статуса отката"
        Then I click on this element "Сохранить откат статуса"
        And thes element "Грид перевозки статус ТС прибыло на таможню" contains the text "ТС прибыло на таможню"
        # откат с ТС прибыло на таможню на ТС убыло с погрузки в перевозке
        And I revert status "ТС убыло с погрузки"
        # откат с ТС убыло с погрузки до ТС прибыло на погрузку в перевозке
        And I revert status "ТС прибыло на погрузку"
        # откат с ТС прибыло на погрузку до Создана в перевозке
        And I revert status "Создана"
        # удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And thes element "Грид накладной статус Создана" contains the text "Создана"

        Examples:
            | TK     | shipping warehouse | delivery warehouse | vendorcode            | number vendorcode | login coordinator        |
            | Ителла | Ethicon LLC Brazil        | MD Лесной          | TRILOC II CUP 32/44mm | 47500             | MD Transport Coordinator |
