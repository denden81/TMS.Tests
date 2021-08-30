@consumer
@office

Feature: Check waybills Deliver Forward CS
    As a admin
    I want to check waybills goes forward

        #создаем накладную
    Scenario Outline:46_Check waybills Deliver Forward CS
        Given I log in as a "<login cs>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
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
         # проверить что кнопки перевода статуса нет
        And I wait the element "В подборке накладной" to not be checked
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        # проверить что кнопки перевода статуса нет
        And I scroll to elements "Кабинет в хедере"
        And I wait the element "ТС заказано в перевозке" to not be checked

        Examples:
            | TK     | shipping warehouse | delivery warehouse                                                     | vendorcode | number vendorcode | login cs                  |
            | Ителла | CONSMSKFM          | Российская Федерация 440516 Пензенский р-н с. Саловка Полевая ул. д.15 | 1603706S   | 105000            | Consumer Customer Service |
