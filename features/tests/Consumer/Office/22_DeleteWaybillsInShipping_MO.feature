@consumer
@office

Feature: Check delete waybills with MO
    As a admin
    I want to check delete waybills with MO in shipping

        #создаем накладную
    Scenario Outline: 22_Delete waybills shipping with MO
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
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"

        # перекодим в кабинет
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I check filter "random number" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "random number"
        And I click on this element "firstCheckbox"
        And I wait on elements "firstCheckboxIsChecked"
        And I wait on elements "multiselectPanel"
        And I click on this element "Выбрать массовую операцию"
        And I click on this element "Выбрать удаление накладной из списка массовых операций"
        And I click on this element "Кнопка ОК в Массовых операциях"
        And I expect this element "Loader" is not visible

        # проверяем статус накладной
        When I click in random element "random number"
        And thes element "Грид накладной" contains the text "Создана"

        # проверяем запись в истории
        And I scroll to elements "Линк история накладной"
        Then I click on this element "Линк история накладной"
        And thes element "Грид перевозки весь" contains the text "удалена из перевозки TR"

        Examples:
            | shipping warehouse | delivery warehouse                                                     | vendorcode | number vendorcode | login coordinator              |
            | CONSMSKFM          | Российская Федерация 440516 Пензенский р-н с. Саловка Полевая ул. д.15 | 1603706S   | 105000            | Consumer Transport Coordinator |
