@ecolab
@office

Feature: Check set status delete waybills
    As a admin
    I want to check status delete

        # создаем 1ю накладную
    Scenario Outline: 22_Check Status Delete In Waybills
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
        # перевести в статус создана
        When I click on this element "Создана в накладной"
        When I accept the alertbox
        And thes element "Грид накладной статус Создана" contains the text "Создана"

        # перевести статус "Удалена"
        And I click on this element "Удалена в накладной"
        And I accept the alertbox
        And thes element "Грид накладной" contains the text "Удалена"
        # проверить что кнопки перевода статуса нет
        And I wait the element "В перевозке накладной" to not be checked

        Examples:
            | shipping warehouse | delivery warehouse | vendorcode | number vendorcode | login coordinator            |
            | 011_M0000000510    | Пенза              | 0193537    | 120               | Ecolab Transport Coordinator |
