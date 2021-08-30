@vistakon
@office

Feature: Check filter
    As a Transport Coordinator
    I want to check filter

    Scenario: 02_Check Filter
        Given I log in as a "Vis Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
       #проверка что дата сбрасывается и показывает на 2 месяца назад
        And I check filter date
       #установка 2016 года и проверка нахождения накладной 0081007377
        And I expect this element "Loader" is not visible
        And I set date years "2016"
        And I expect this element "Loader" is not visible
        And I check filter "0081007377" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "0081007377"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
         #установка 2016 года и проверка нахождения накладной 00810073
        And I set date years "2016"
        And I expect this element "Loader" is not visible
        And I check filter "00810073" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "0081007377"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #установка 2016 года и проверка нахождения перевозки TR00014
        And I set date years "2016"
        And I expect this element "Loader" is not visible
        And I check filter "TR00014" carriage
        Then I expects that element "scrollContainer" contains the text "TR00014"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
