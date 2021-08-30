@vistakon
@office

Feature: Check filter status of carriage
    As a Transport Coordinator
    I want to check status filter of carriage

    Scenario: 02_Check Filter Status Of Carriage
        Given I log in as a "Vis Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #проверка фильтра "Создана" у колонки "Статус перевозки"
        And I click on this element "statusOfCarriage"
        And I click on this element "Создана перевозка"
        And thes element "tmsGridCellLeft" contains the text "Создана"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "ТС заказано" у колонки "Статус перевозки"
        When I click on this element "statusOfCarriage"
        And I click on this element "ТС заказано"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "ТС заказано"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Подтверждена" у колонки "Статус перевозки"
        When I click on this element "statusOfCarriage"
        And I click on this element "Подтверждена"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "Подтверждена"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
