@ukr
@office

Feature: Check filter
    As a Transport Coordinator
    I want to check filter

    Scenario: 02_Check Filter
        Given I log in as a "Ukr Transport Coordinator" on homepage
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
       #проверка что дата сбрасывается и показывает на 2 месяца назад
        And I check filter date
       #установка 2017 года и проверка нахождения накладной SO-016162
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "SO-016162" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "SO-016162"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
         #установка 2017 года и проверка нахождения накладной SO-016162
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "SO-01616" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "SO-016162"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #установка 2017 года и проверка нахождения перевозки TR05029
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "TR05029" carriage
        Then I expects that element "scrollContainer" contains the text "TR05029"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
