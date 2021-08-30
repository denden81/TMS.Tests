@ukr
@office

Feature: Check checkbox
    As a Transport Coordinator
    I want to check checkbox

    Scenario: 03_Check Checkbox
        Given I log in as a "Ukr Transport Coordinator" on homepage
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #установка 2017 года и проверка главного чекбокса
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "SO-0148" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "SO-0148"
        And I click on this element "mainCheckbox"
        And I wait on elements "mainCheckboxIsChecked"
        And I wait on elements "multiselectPanel"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
          #установка 2017 года и проверка одиночного чекбокса
        And I set date years "2017"
        And I expect this element "Loader" is not visible
        And I check filter "SO-0148" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "SO-0148"
        And I click on this element "secondCheckbox"
        And I wait on elements "secondCheckboxIsChecked"
        And I wait on elements "multiselectPanel"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
