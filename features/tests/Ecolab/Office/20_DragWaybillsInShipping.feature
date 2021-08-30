@ecolab
@office

Feature: Check drag waybills in grid
    As a admin
    I want to check drag waybills grid

        # создаем 1ю накладную
    Scenario Outline: 20_Check Drag Waybills
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

        # перекодим в кабинет и создаем 2ю накладную
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number waybills2" to the inputfields "Номер накладной"
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
       # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"

        # перетаскиваем 1 накладную на другую
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        When I drags element "random number" to element "random number waybills2"
        And I expect this element "Loader" is not visible

        # проверяем статус 1ой накладной
        And I click in random element "random number"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

        # проверяем статус 2ой накладной
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        Then I click in random element "random number waybills2"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        Then I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "В перевозку были добавлены накладные"

        Examples:
            | shipping warehouse | delivery warehouse | vendorcode | number vendorcode | login coordinator            |
            | 011_M0000000510    | Пенза              | 0193537    | 120               | Ecolab Transport Coordinator |
