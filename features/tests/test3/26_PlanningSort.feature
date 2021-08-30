@ie
@planning

Feature: Check sort in planning
    As a Transport Coordinator
    I want to check sort planning

    Scenario Outline: 26_Planning Sort
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "Планирование"
        And I expect this element "Loader" is not visible
        And I wait on elements "Planning Grid"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        # сортируем по фио
        When I click on this element "Колонка Inbound в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Inbound#"
        Then I click on this element "Колонка Inbound в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Inbound#"

        # сортируем по Статус накладной
        When I click on this element "Колонка Статус накладной в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Статус накладной"
        Then I click on this element "Колонка Статус накладной в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Статус накладной"

        # сортируем по Документы проверены
        When I click on this element "Колонка Документы проверены в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Документы проверены"
        Then I click on this element "Колонка Документы проверены в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Документы проверены"

        # сортируем по Перевозка
        When I click on this element "Колонка Перевозка в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Перевозка"
        Then I click on this element "Колонка Перевозка в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Перевозка"

        # сортируем по Сектор
        When I click on this element "Колонка Сектор в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Сектор"
        Then I click on this element "Колонка Сектор в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Сектор"

        # сортируем по Delivery invoice# из ASN
        When I click on this element "Колонка Delivery Invoice в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Delivery invoice# из ASN"
        Then I click on this element "Колонка Delivery Invoice в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Delivery invoice# из ASN"

        # сортируем по Delivery invoice# 2 из ASN
        When I click on this element "Колонка Delivery Invoice 2 в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Delivery invoice# 2 из ASN"
        Then I click on this element "Колонка Delivery Invoice 2 в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Delivery invoice# 2 из ASN"

        # сортируем по Склад отгрузки
        When I click on this element "Колонка Склад отгрузки в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Склад отгрузки"
        Then I click on this element "Колонка Склад отгрузки в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Склад отгрузки"

        # сортируем по Склад доставки
        When I click on this element "Колонка Склад доставки в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Склад доставки"
        Then I click on this element "Колонка Склад доставки в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Склад доставки"

        #увеличиваем разрешение чтобы влезли все столбцы
        And I have a screen that is 1920 by 900 pixels

        # сортируем по Приоритет
        When I click on this element "Колонка Приоритет в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Приоритет"
        Then I click on this element "Колонка Приоритет в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Приоритет"

        # сортируем по Дата инвойса
        When I click on this element "Колонка Дата Инвойса в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Дата инвойса"
        Then I click on this element "Колонка Дата Инвойса в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningHeader" contains the text "Дата инвойса"

        Examples:
            | login coordinator        |
            | MD Transport Coordinator |
