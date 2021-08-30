@ie
@planned

Feature: Check grid in planning
    As a Transport Coordinator
    I want to check grid planning

    Scenario Outline: 25_Planning Grid
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Планирование"
        And I expect this element "Loader" is not visible
        And I wait on elements "Planning Grid"

        And I expects that element "PlanningHeader" contains the text "Inbound#"
        And I expects that element "PlanningHeader" contains the text "Статус накладной"
        And I expects that element "PlanningHeader" contains the text "Документы проверены"
        And I expects that element "PlanningHeader" contains the text "Перевозка"
        And I expects that element "PlanningHeader" contains the text "Перевозка"
        And I expects that element "PlanningHeader" contains the text "Delivery invoice# из ASN"
        And I expects that element "PlanningHeader" contains the text "Delivery invoice# 2 из ASN"
        And I expects that element "PlanningHeader" contains the text "Склад отгрузки"
        And I expects that element "PlanningHeader" contains the text "Склад доставки"
        And I expects that element "PlanningHeader" contains the text "Приоритет"
        And I expects that element "PlanningHeader" contains the text "Дата инвойса"
        And I have a screen that is 1920 by 1024 pixels
        And I expects that element "PlanningHeader" contains the text "Delivery invoice#"
        #Then I expects that element "PlanningHeader" contains the text "Finance invoice#"
        And I open the url "/logout"

        #заходим юзером с ролью склад1 и переходим в накладную
        Given I log in as a "<login sklad>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        # проверяем что вкладки планирования нет
        And I wait the element "Планирование" to not be checked
        And I open the url "/logout"
        # заходим юзером с ролью склад1 и переходим в планирование
        Given I log in as a "<login customer>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        # проверяем что вкладки планирования нет
        And I wait the element "Планирование" to not be checked
        And I open the url "/logout"

        # заходим юзером с ролью транспортная компания и переходим в планирование
        Given I log in as a "<transport company>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        # проверяем что вкладки планирования нет
        And I wait the element "Планирование" to not be checked
        And I open the url "/logout"

        Examples:
            | login coordinator        | login customer            | login sklad    | transport company          |
            | MD Transport Coordinator | Consumer Customer Service | MD sklad       | Consumer Transport Company |
