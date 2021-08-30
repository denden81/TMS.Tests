@bacardi
@office

Feature:  Change Date Document MO
    As a admin
    I want to check Change Date Document MO

        # создаем 1ю накладную
    Scenario Outline: 38_Change Date Document MO
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        # выделяем  накладные чекбоксами
        And I click on this element "firstCheckbox"
        And I click on this element "secondCheckbox"

        # выбираем в МО опцию "изменить дату доставки перевозки на месяц вперед"
        And I click on this element "Выбрать массовую операцию"
        And I click on this element "Дата возврата документов факт в Массовых операциях"
        And I set date delivery document MO
        And I click on this element "Кнопка ОК в Массовых операциях"
        And I expect this element "Loader" is not visible

       # проверяем что даты выставились
        And I check date back document MO
        Examples:
            | login coordinator |
            | Bac Archiveman    |
