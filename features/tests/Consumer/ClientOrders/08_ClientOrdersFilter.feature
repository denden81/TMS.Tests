@consumer
@clientorders

Feature: Check filter in client orders
    As a Transport Coordinator
    I want to check filter client orders

    Scenario: 08_Check filter in client orders tab
        Given I log in as a "Consumer Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Заказы"
        And I wait on elements "Client Orders Grid"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        # проверяем поиск по дате создания документа и проверяем поиск по номеру po
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
        And I add "18.07.2019" to the inputfields "Дата создания документа в Заказах"
        And I expect this element "Loader" is not visible
        And I add "00942294" to the inputfields "PO в Заказах"
        And I expect this element "Loader" is not visible
        When I expects that element "scrollContainer" contains the text "00942294"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        # проверяем поиск по дате доставки документа
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
        And I add "22.07.2019" to the inputfields "Дата доставки в Заказах"
        And I expect this element "Loader" is not visible
        When I expects that element "scrollContainer" contains the text "00942294"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        # проверяем поиск по ожидаемой дате доставки документа
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
        And I add "26.07.2019" to the inputfields "Ожидаемая дата доставки в Заказах"
        And I expect this element "Loader" is not visible
        When I expects that element "scrollContainer" contains the text "6221476074"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        # проверяем поиск по кол-во паллет
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
        And I add "0,063" to the inputfields "Колличество паллет в Заказах"
        And I expect this element "Loader" is not visible
        And I add "00942294" to the inputfields "PO в Заказах"
        And I expect this element "Loader" is not visible
        When I expects that element "scrollContainer" contains the text "00942294"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        And I have a screen that is 1920 by 900 pixels

        # проверяем поиск по коробов mixed
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
        And I add "123" to the inputfields "Коробов mixed в накладной в Заказах"
        And I expect this element "Loader" is not visible
        And I add "6221486573" to the inputfields "PO в Заказах"
        And I expect this element "Loader" is not visible
        When I expects that element "scrollContainer" contains the text "6221486573"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        # проверяем поиск по коробов total
        And I set date years "2016" orders
        And I expect this element "Loader" is not visible
        And I add "123" to the inputfields "Коробов total в накладной в Заказах"
        And I expect this element "Loader" is not visible
        And I add "6221486573" to the inputfields "PO в Заказах"
        And I expect this element "Loader" is not visible
        When I expects that element "scrollContainer" contains the text "6221486573"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"
