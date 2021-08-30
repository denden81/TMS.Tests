@bacardi
@office

Feature: Check filter
    As a Transport Coordinator
    I want to check filter

    Scenario: 02_Check Filter
        Given I log in as a "Bac Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
       #проверка что дата сбрасывается и показывает на 2 месяца назад
        And I check filter date
       #установка 2017 года и проверка нахождения накладной 0030510182
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "0030510182" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "0030510182"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
         #установка 2017 года и проверка нахождения накладной 003051018
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "003051018" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "0030510182"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #установка 2017 года и проверка нахождения перевозки TR15445
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "TR15445" carriage
        Then I expects that element "scrollContainer" contains the text "TR15445"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
