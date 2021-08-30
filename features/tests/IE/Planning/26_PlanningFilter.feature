@ie
@planning

Feature: Check filter in planning
    As a Transport Coordinator
    I want to check filter planning

    Scenario Outline: 26_Planning Sort
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Inbound IE в опциях способа доставки"
        # Добавление рандомного номера заказа накладной
        And I add "random order number IE" to the inputfields "Номер заказа накладной"
        # Добавление даты инвойса номера заказа накладной
        And I set date delivery invoice
        # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible
        And thes element "Название артикула" contains the text "<vendorcode>"
        And I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"
        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"
        # заполняем сумму по инвойсу
        And I scroll to elements "Линк история накладной"
        When I click on this element "Импорт в накладной"
        And I add "54500" to the inputfields "Сумма товаров по инвойсу"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        # заполняем валюту по инвойсу
       # Then I click on this element "Иконка выбора валюты в накладной"
       # When I click on this element "Выбрать валюту RUB в накладной"
       # And I expect this element "Loader" is not visible
        # перевести статус "В перевозке"
        And I scroll to elements "Кабинет в хедере"
        And I click on this element "В перевозке накладной"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        Then thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

        # переходим в кабинет
        And I open the url "/Planning#/Planning/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Planning Grid"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Planning Grid"

        # проверяем поиск по inbound и статус
        And I add "random number" to the inputfields "Inbound в Планировании"
        And I expect this element "Loader" is not visible
        And I expects that element "PlanningLine" contains the text "random number"
        And I click on this element "Иконку выбора статуса накладной в планировании"
        Then I click on this element "Статус накладной В перевозке в планировании"
        And I expect this element "Loader" is not visible
        When I expects that element "PlanningLine" contains the text "В перевозке"
        # проверяем поиск по документам
      #  Then I click on this element "Иконку выбора статуса документа в планировании"
      #  Then I click on this element "Статус документа Не проверено в планировании"
      #  And I expect this element "Loader" is not visible
      #  When I expects that element "PlanningLine" contains the text "Не проверено"

        # проверяем поиск по сектору
        Then I click on this element "Иконку выбора сектора в планировании"
        And I click on this element "сектор MD в планировании"
        And I expect this element "Loader" is not visible
        When I expects that element "PlanningLine" contains the text "J&J MD"

         # проверяем поиск по складу отгрузки
        Then I click on this element "Иконка Склад отгрузки в планировании"
        And I add "<shipping warehouse>" to the inputfields "Склад отгрузки в планировании"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        When I expects that element "PlanningLine" contains the text "<shipping warehouse>"

        # проверяем поиск по складу доставки
        Then I click on this element "Иконка Склад доставки в планировании"
        And I add "<delivery warehouse>" to the inputfields "Склад доставки в планировании"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        When I expects that element "PlanningLine" contains the text "<delivery warehouse>"

        # проверяем поиск по приоритету
        Then I click on this element "Иконка выбора приоритета в планировании"
        And I click on this element "Приоритет стандарт в планировании"
        And I expect this element "Loader" is not visible
        When I expects that element "PlanningLine" contains the text "<delivery warehouse>"
      #  проверяем поиск по дате инвойса
      #  And I set date delivery invoice filter planning
      #  And I expect this element "Loader" is not visible
        And I expects that element "PlanningLine" contains the text "random number"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I wait on elements "Client Orders Grid"

        Examples:
            | TK     | shipping warehouse | delivery warehouse | vendorcode            | number vendorcode | login coordinator        |
            | Ителла | Ethicon LLC Brazil        | MD Лесной          | TRILOC II CUP 32/44mm | 47500             | MD Transport Coordinator |
