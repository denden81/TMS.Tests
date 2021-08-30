@ecolab
@office

Feature: Check filter
    As a Transport Coordinator
    I want to check filter

    Scenario: 02_Check filter
        Given I log in as a "Ecolab Transport Coordinator" on homepage
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
       #проверка что дата сбрасывается и показывает на 2 месяца назад
        And I check filter date
       #установка 2017 года и проверка нахождения накладной SНАVP-000269
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "SНАVP-000269" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "SНАVP-000269"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
         #установка 2017 года и проверка нахождения накладной SНАVP-000269
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "SНАVP-00026" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "SНАVP-000269"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #установка 2017 года и проверка нахождения перевозки TR12616
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "TR12616" carriage
        Then I expects that element "scrollContainer" contains the text "TR12616"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
