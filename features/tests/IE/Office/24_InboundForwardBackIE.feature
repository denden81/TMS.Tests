@ie
@office

Feature: Check inbound waybills
    As a admin
    I want to check inbound waybills goes forward and back

        #создаем накладную
    Scenario Outline: 24_Inbound Forward And Back IE:Самоввоз вперед и назад
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Самоввоз в опциях способа доставки"
        And I expect this element "Loader" is not visible
        # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible
        And thes element "Название артикула" contains the text "<vendorcode>"
        Then I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"
        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"

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
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной в статусе Доставлена"
        And I click on this element "Сменить статус накладной на Принята"
        And I accept the alertbox
        And I expect this element "Loader" is not visible

        # кликнуть на линк перевозки и сменить статус накладной В архиве
        And I click on this element "Сменить статус накладной на Архив"
        And I accept the alertbox
        And I expect this element "Loader" is not visible

        #откат с Архива в ТС прибыло на выгрузку в перевозке
        And I revert status "ТС прибыло на выгрузку"

        # откат с ТС прибыло на выгрузку до ТС убыло с погрузки в перевозке
        And I revert status "ТС убыло с погрузки"

         # откат с ТС заказано до Создана в перевозке
        And I revert status "Создана"

        #удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        And I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And thes element "Грид накладной" contains the text "Создана"

        Examples:
            | TK     | shipping warehouse | delivery warehouse | vendorcode            | number vendorcode | login coordinator        |
            | Ителла | Ethicon LLC Brazil        | MD Долгопрудный    | TRILOC II CUP 32/44mm | 47500             | MD Transport Coordinator |
