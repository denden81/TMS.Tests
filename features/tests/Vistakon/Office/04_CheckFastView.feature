@vistakon
@office

Feature: Check fast view
    As a Transport Coordinator
    I want to check fast view

    Scenario: 04_Check Fast View
        Given I log in as a "Vis Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
       #установка 2016 года и проверка нахождения накладной 0001234945
        And I set date years "2016"
        And I expect this element "Loader" is not visible
        And I check filter "0081007377" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "0081007377"
        When I click on this element "iconFastViewDeliveryNote"
        And I expects that element "fastViewModalContent" contains the text "Быстрый просмотр"
        Then I expects that element "fastViewModalTitle" contains the text "Накладная"
        And I pause for 4000ms
        When I click on this element "fastViewButtonClose"
        And I expect this element "Loader" is not visible
        And I click on this element "iconFastViewCarriage"
        Then I expects that element "fastViewModalContent" contains the text "Быстрый просмотр"
        When I expects that element "fastViewModalTitle" contains the text "Перевозка"
        And I pause for 4000ms
        And I click on this element "fastViewButtonClose"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
