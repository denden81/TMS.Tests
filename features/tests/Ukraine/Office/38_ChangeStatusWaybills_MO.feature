@ukraine
@office

Feature: Change Status Waybills MO
    As a admin
    I want to check Change Status Waybills MO

        # создаем 1ю накладную
    Scenario Outline: 38_Change Status Waybills MO
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "RemoveFilter"
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Поставка в опциях способа доставки"
        # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible
        Then I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Создана" contains the text "Создана"

        # перекодим в кабинет и создаем 2ю накладную
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number waybills2" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Поставка в опциях способа доставки"
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
        Then I expects that element "scrollContainer" contains the text "random number"
        Then I expects that element "scrollContainer" contains the text "random number 2"
        And I click on this element "firstCheckbox"
        And I click on this element "secondCheckbox"

        # выбираем в МО опцию "изменить статус накладных"
        And I click on this element "Выбрать массовую операцию"
        And I click on this element "Изменение статуса накладной в Массовых операциях"
        And I click on this element "Кнопка ОК в Массовых операциях"
        And I expect this element "Loader" is not visible

        # проверяем статус 1ой накладной
        And I click in random element "random number"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

        # проверяем статус 2ой накладной
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click in random element "random number waybills2"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

        Examples:
            | shipping warehouse                                              | delivery warehouse                 | vendorcode | number vendorcode | login coordinator         |
            | вул. Садова 26-а, смт. Гостомель, Київська обл., 08290, Україна | 08300 Бориспіль вул. Запорізька 28 | 8077501    | 225000            | Ukr Transport Coordinator |
