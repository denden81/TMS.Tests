@bacardi
@office

Feature: Check alternative filter
    As a Transport Coordinator
    I want to check alternative filter

    Scenario Outline: 02_Check Alternative Filter
        Given I log in as a "Bac Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #проверка кнопки "выбрать",выбрать 1 значение,сохранить.
        And I click on this element "iconAlternativeFilter"
        And I add "<customer>" to the inputfields "fieldSearchAlternativeFilter"
        And I pause for 1000ms
        And I click on this element "checkboxSearchAlternativeFilter"
        And I click on this element "chooseSearchAlternativeFilter"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "<customer>"
        And I wait on elements "iconFullAlternativeFilter"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка кнопки "выбрать все",нажать выбрать всё,сохранить
        When I click on this element "iconAlternativeFilter"
        And I add "<customer>" to the inputfields "fieldSearchAlternativeFilter"
        And I pause for 1000ms
        And I click on this element "selectAllAlternativeFilter"
        And I click on this element "chooseSearchAlternativeFilter"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "<customer>"
        And I wait on elements "iconFullAlternativeFilter"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка кнопки "очистить все",нажать выбрать 1 значение,очистить все,сохранить
        When I click on this element "iconAlternativeFilter"
        And I add "<customer>" to the inputfields "fieldSearchAlternativeFilter"
        And I pause for 1000ms
        And I click on this element "checkboxSearchAlternativeFilter"
        And I click on this element "clearAllAlternativeFilter"
        And I click on this element "chooseSearchAlternativeFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "iconEmptyAlternativeFilter"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка кнопки "сбросить фильтр",нажать выбрать 1 значение,сохранить,сбросить все,сохранить
        When I click on this element "iconAlternativeFilter"
        And I add "<customer>" to the inputfields "fieldSearchAlternativeFilter"
        And I pause for 1000ms
        And I click on this element "checkboxSearchAlternativeFilter"
        And I click on this element "chooseSearchAlternativeFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "iconFullAlternativeFilter"
        And I click on this element "iconAlternativeFilter"
        And I click on this element "resetAllAlternativeFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "iconEmptyAlternativeFilter"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка кнопки "закрыть",нажать выбрать все,закрыть
        When I click on this element "iconAlternativeFilter"
        And I add "<customer>" to the inputfields "fieldSearchAlternativeFilter"
        And I pause for 1000ms
        And I click on this element "checkboxSearchAlternativeFilter"
        And I click on this element "closeAlternativeFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "iconEmptyAlternativeFilter"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible

        Examples:
            | customer                |
            | ООО Метро Кэш энд Керри |
