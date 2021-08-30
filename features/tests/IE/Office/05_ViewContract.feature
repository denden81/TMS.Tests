@ie
@office

Feature: Check waybills
    As a admin
    I want to check View Contract

        #создаем накладную
    Scenario Outline: 05_View Contract
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
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

        # проверяем заполнение контракта
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Импорт в перевозке"
        And I scroll to elements "Комментарии в перевозке"
        And I expects that element "Грид перевозки" contains the text "<contract>"

        Examples:
            | TK     | shipping warehouse | delivery warehouse | vendorcode            | number vendorcode | login coordinator        | contract                       |
            | Ителла | Ethicon LLC Brazil        | MD Лесной          | TRILOC II CUP 32/44mm | 47500             | MD Transport Coordinator | ETHICON-LLC-2009 от 22.07.09 |
