@consumer
@office

Feature:  Change Date Waybills MO
    As a admin
    I want to check Change Date Waybills MO

        # создаем 1ю накладную
    Scenario Outline: 43_Change Date Waybills MO
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

        # переходим в кабинет и создаем 2ю накладную
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
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
        And thes element "Грид накладной статус Создана" contains the text "Создана"

        # переходим в кабинет и выделяем эти накладные чекбоксами
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I add "random number" and "random number 2" to search "waybills" field in grid
        And I expect this element "Loader" is not visible
        When I expects that element "scrollContainer" contains the text "random number"
        Then I expects that element "scrollContainer" contains the text "random number 2"
        And I click on this element "firstCheckbox"
        And I click on this element "secondCheckbox"

        #выбираем в МО опцию "изменить дату отгрузки накладных на месяц назад"
        And I click on this element "Выбрать массовую операцию"
        And I click on this element "Дата отгрузки в Массовых операциях"
        And I set date ship MO
        And I click on this element "Кнопка ОК в Массовых операциях"
        And I expect this element "Loader" is not visible

        # выделяем опять накладные чекбоксами
        And I click on this element "firstCheckbox"
        And I click on this element "secondCheckbox"
         #выбираем в МО опцию "изменить дату доставки накладных на месяц вперед"
        And I click on this element "Выбрать массовую операцию"
        And I click on this element "Дата доставки в Массовых операциях"
        And I set date delivery MO
        And I click on this element "Кнопка ОК в Массовых операциях"
        And I expect this element "Loader" is not visible

        # проверяем статус 1ой накладной
        And I click in random element "random number"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # проверяем что дата выставлена та которая заполнена в МО.
        And I scroll to elements "Линк маршрут накладной"
        And I check date ship ShipmentInvoicePlan MO
        And I check date delivery DeliveryInvoicePlan MO

        # проверяем статус 2ой накладной
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        Then I click in random element "random number waybills2"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # проверяем что дата выставлена та которая заполнена в МО.
        And I scroll to elements "Линк маршрут накладной"
        And I check date ship ShipmentInvoicePlan MO
        And I check date delivery DeliveryInvoicePlan MO

        Examples:
            | shipping warehouse | delivery warehouse                                                     | vendorcode | number vendorcode | login coordinator              |
            | CONSMSKFM          | Российская Федерация 440516 Пензенский р-н с. Саловка Полевая ул. д.15 | 1603706S   | 105000            | Consumer Transport Coordinator |
