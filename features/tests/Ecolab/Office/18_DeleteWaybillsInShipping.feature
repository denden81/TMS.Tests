@ecolab
@office

Feature: Check delete waybills
    As a admin
    I want to check delete waybills in shipping

        #создаем накладную
    Scenario Outline:18_Delete Waybills In Shipping
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
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"
        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"
       # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible

        # удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        Then I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And thes element "Грид накладной" contains the text "Создана"

        # проверяем запись в истории
        And I scroll to elements "Линк история накладной"
        Then I click on this element "Линк история накладной"
        And thes element "Грид перевозки весь" contains the text "удалена из перевозки TR"

        Examples:
            | shipping warehouse | delivery warehouse | vendorcode | number vendorcode | login coordinator            |
            | 011_M0000000510    | Пенза              | 0193537    | 120               | Ecolab Transport Coordinator |
