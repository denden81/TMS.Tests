@ecolab
@orders

Feature: Check order
    As a Transport Coordinator
    I want to check order at prise on waybills

    Scenario Outline: 06_Check order at price: Приказ по ценам
        Given I log in as a "Ecolab Transport Coordinator" on homepage
        #Создание приказа
        When I click on this element "Orders"
        And I expect this element "Loader" is not visible
        When I click on this element "OrdersAtPrice"
        When I click on this element "IconPlus"
        When I accept the alertbox
        And I expect this element "Loader" is not visible
        And I wait on elements "OrdersClose"
        And I add "random order number" to the inputfields "Номер"
        When I set order date "from month early"
        And I click on this element "SelectSubCompany"
        And I click on this element "SelectEcolab"
        And I click on this element "AddSubCompany"
        #добавить детали приказа реф
        And I click on this element "Добавить Детали приказа"
        And I click on this element "Выбрать направление"
        And I add "<directions>" to the inputfields "Направление"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать ТК"
        And I add "<TK>" to the inputfields "ТК"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать Тип ТС"
        And I add "<type tc ref>" to the inputfields "Тип ТС"
        And I click on this element "Подтвердить"
        And I add "9560" to the inputfields "AddRate"
        And I click on this element "SaveDetailsOrder"
        And I expects that element "OrderFooter" contains the text "<directions>"
        And I expects that element "OrderFooter" contains the text "<TK>"
        And I expects that element "OrderFooter" contains the text "<type tc ref>"

         #добавить детали приказа тент
        And I click on this element "Добавить Детали приказа"
        And I click on this element "Выбрать направление"
        And I add "<directions>" to the inputfields "Направление"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать ТК"
        And I add "<TK>" to the inputfields "ТК"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать Тип ТС"
        And I add "<type tc tent>" to the inputfields "Тип ТС"
        And I click on this element "Подтвердить"
        And I add "9560" to the inputfields "AddRate"
        And I click on this element "SaveDetailsOrder"
        And I expects that element "OrderFooter" contains the text "<directions>"
        And I expects that element "OrderFooter" contains the text "<TK>"
        And I expects that element "OrderFooter" contains the text "<type tc tent>"

         # создание накладной для проверки приказа
        And I open the url "/"
        And I expect this element "Loader" is not visible
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Доставка в опциях способа доставки"
        #Добавление склада отгрузки
       # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        When I click on this element "Добавить позиции"
        When I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"
        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"
        # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"
        # кликнуть на линк перевозки
        When I scroll to elements "Линк перевозки"
        When I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        #кликнуть на кнопку "Расчитать распределение по ТК"
        When I click on this element "Рассчитать распределение по ТК"
        And I expect this element "Loader" is not visible
        #выбрать определенную ТК из списка
        When I click on this element "Выберите ТК из списка"
        And I expect this element "Loader" is not visible
        And I add "<TK>" to the inputfields "ТК в поле поиска"
        And I click on this element "Подтвердить"
        #Проверить что компания с приказом присутствует, сумма приказа такая же как в приказе.
        And I expects that element "listTK" contains the text "9560"
        And I open the url "/logout"

        Examples:
            | directions     | TK      | type tc ref | type tc tent | shipping warehouse | delivery warehouse | vendorcode | number vendorcode |
            | Москва - Пенза | Автобал | FTL ref 20t | FTL tent 20t | 011_M0000000510    | Пенза              | 0193537    | 120               |


    Scenario: 06_Check order at price ч2: Приказ по ценам
        And I open the url "/logout"
        Given I log in as a "Ecolab Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        #сбрасываем даты приказу, чтобы он не мешал
        When I open the url "/TarificationOrder#/TarificationOrderByPrices"
        And I expect this element "Loader" is not visible
        When I click in random element "random order number"
        And I expect this element "Loader" is not visible
        And I wait on elements "OrdersClose"
        When I set order date "from/to month early"
        When I click on this element "OrdersClose"
        And I expect this element "Loader" is not visible
