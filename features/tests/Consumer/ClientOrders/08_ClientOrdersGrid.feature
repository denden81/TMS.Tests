@consumer
@clientorders

Feature: Check grid in client orders
    As a Transport Coordinator
    I want to check grid client orders

    Scenario: 08_Check grid in client orders
        Given I log in as a "Consumer Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Заказы"
        And I wait on elements "Client Orders Grid"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"
        When I expects that element "clientOrderHeader" contains the text "Дата создания заказа"
        Then I expects that element "clientOrderHeader" contains the text "Дата документа"
        When I expects that element "clientOrderHeader" contains the text "РО#"
        Then I expects that element "clientOrderHeader" contains the text "Статус"
        When I expects that element "clientOrderHeader" contains the text "Склад отгрузки"
        Then I expects that element "clientOrderHeader" contains the text "Склад доставки"
        When I expects that element "clientOrderHeader" contains the text "Дата доставки"
        Then I expects that element "clientOrderHeader" contains the text "Ожидаемая дата доставки"
        When I expects that element "clientOrderHeader" contains the text "Тип накладной"
        Then I expects that element "clientOrderHeader" contains the text "Тип сборки накладной"
        When I expects that element "clientOrderHeader" contains the text "Количество паллет"
        And I have a screen that is 1920 by 900 pixels
        Then I expects that element "clientOrderHeader" contains the text "Коробов mixed в накладной"
