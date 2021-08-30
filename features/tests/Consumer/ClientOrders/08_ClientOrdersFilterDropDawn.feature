@consumer
@clientorders

Feature: Check filter in client orders drop dawn
    As a Transport Coordinator
    I want to check filter client orders

    Scenario: 08_Check filter in client orders tab drop dawn
        Given I log in as a "Consumer Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Заказы"
        And I wait on elements "Client Orders Grid"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        # проверяем статус
        And I add "00942294" to the inputfields "PO в Заказах"
        And I expect this element "Loader" is not visible
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
        When I click on this element "Иконка выбора статуса в Заказах"
        Then I click on this element "Не проверен статус в Заказах"
        And I expect this element "Loader" is not visible
        When thes element "clientOrder" contains the text "00942294"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        # проверяем тип накладной
        And I add "00942294" to the inputfields "PO в Заказах"
        And I expect this element "Loader" is not visible
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
       # When I click on this element "Иконка выбора типа накладной в Заказах"
       # Then I click on this element "Тип накладной TR в Заказах"
       # And I expect this element "Loader" is not visible
        When thes element "clientOrder" contains the text "00942294"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        # проверяем тип сборки
        And I add "00942294" to the inputfields "PO в Заказах"
        And I expect this element "Loader" is not visible
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
        #When I click on this element "Иконка выбора типа сборки в Заказах"
        #Then I click on this element "Тип сборки смешанная в Заказах"
        #And I expect this element "Loader" is not visible
        When thes element "clientOrder" contains the text "00942294"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"
