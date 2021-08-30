@bacardi
@orders

Feature: Check order
    As a Transport Coordinator
    I want to check order at prise on waybills

    Scenario Outline: 06_Check Order At Price
        Given I log in as a "Bac Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        #Создание приказа
        When I click on this element "Orders"
        And I expect this element "Loader" is not visible
        And I click on this element "OrdersAtPrice"
        And I click on this element "IconPlus"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        And I wait on elements "OrdersClose"
        And I add "random order number" to the inputfields "Номер"
        Then I set order date "from month early"
        And I click on this element "SelectSubCompany"
        And I click on this element "SelectBacardi"
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
         #добавить детали приказа изотерм
        And I click on this element "Добавить Детали приказа"
        And I click on this element "Выбрать направление"
        And I add "<directions>" to the inputfields "Направление"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать ТК"
        And I add "<TK>" to the inputfields "ТК"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать Тип ТС"
        And I add "<type tc iso>" to the inputfields "Тип ТС"
        And I click on this element "Подтвердить"
        And I add "9560" to the inputfields "AddRate"
        And I click on this element "SaveDetailsOrder"
        And I expects that element "OrderFooter" contains the text "<directions>"
        And I expects that element "OrderFooter" contains the text "<TK>"
        And I expects that element "OrderFooter" contains the text "<type tc iso>"
        And I click on this element "OrdersClose"
        And I expect this element "Loader" is not visible
        # создание накладной для проверки приказа
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
        And I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        When I click on this element "Способ доставки"
        And I click on this element "Доставка в опциях способа доставки"
        # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add "<vendorcode>" to the inputfields "Позиция в накладной"
        And I pause for 4000ms
        Then I press "Enter"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        When I click on this element "Добавить позиции"
        Then I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # перевести статус "В перевозке"
        When I click on this element "В перевозке накладной"
        Then I accept the alertbox
        And I expect this element "Loader" is not visible
        # кликнуть на линк перевозки
        When I scroll to elements "Линк перевозки"
        Then I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        #кликнуть на кнопку "Расчитать распределение по ТК"
        When I click on this element "Рассчитать распределение по ТК"
        And I expect this element "Loader" is not visible
        #выбрать определенную ТК из списка
        Then I click on this element "Выберите ТК из списка"
        And I expect this element "Loader" is not visible
        And I add "<TK>" to the inputfields "ТК в поле поиска"
        And I click on this element "Подтвердить"
        #Проверить что компания с приказом присутствует, сумма приказа такая же как в приказе.
        And I expects that element "listTK" contains the text "9560"
        And I open the url "/logout"

        Examples:
            | directions          | TK       | type tc ref | type tc iso     | shipping warehouse | delivery warehouse | vendorcode | number vendorcode |
            | Склад Истры - Пенза | ЛТ Групп | 20т-33п-Реф | 20т-33п-Изотерм | Склад Истры        | Пенза              | 1102001281 | 7000              |


    Scenario: 06_Check Order At Price ч2
        And I open the url "/logout"
        Given I log in as a "Bac Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        #сбрасываем даты приказу, чтобы он не мешал
        And I open the url "/TarificationOrder#/TarificationOrderByPrices"
        And I expect this element "Loader" is not visible
        When I click in random element "random order number"
        And I expect this element "Loader" is not visible
        And I wait on elements "OrdersClose"
        And I set order date "from/to month early"
        Then I click on this element "OrdersClose"
        And I expect this element "Loader" is not visible

