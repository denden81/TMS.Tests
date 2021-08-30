@consumer
@office

Feature: Check filter
    As a Transport Coordinator
    I want to check filter

    Scenario: 02_Check filter:Проверка сброса фильтров и поиска накладной и перевозки.
        Given I log in as a "Consumer Transport Coordinator" on homepage
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
       #проверка что дата сбрасывается и показывает на 2 месяца назад
        And I check filter date
       #установка 2016 года и проверка нахождения накладной 0001234945
        And I expect this element "Loader" is not visible
        And I set date years "2016"
        And I expect this element "Loader" is not visible
        And I check filter "0001234945" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "0001234945"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
         #установка 2016 года и проверка нахождения накладной 00012349
        And I set date years "2016"
        And I expect this element "Loader" is not visible
        And I check filter "00012349" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "0001234945"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #установка 2016 года и проверка нахождения перевозки TR57646
        And I set date years "2016"
        And I expect this element "Loader" is not visible
        And I check filter "TR101875" carriage
        Then I expects that element "scrollContainer" contains the text "TR101875"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
