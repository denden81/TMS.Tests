@ie
@office

Feature: Check waybills
    As a admin
    I want to check make waybills and delete marking

        #создаем накладную
    Scenario Outline: 10_Delete Marking No
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
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
        # добавить артикул
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible

        # добавить 2ой артикул
        And I add vendor code "<vendorcode2>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible

        Then I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"

        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"

        # удаляем артикул
        And I scroll to elements "Линк история накладной"
        When I click on this element "Позиции в накладной"
        And I click on this element "Второй чекбокс в Позиции в накладной"
        And I click on this element "Удалить выбранные позиции в накладной"
        And thes element "Окно удаления позиции накладной" contains the text "Удаление позиций накладной"
        Then I click on this element "Нет в окне удаления позиции в накладной"
        And I expect this element "Loader" is not visible

        # проверяем массу в накладной
        And thes element "Масса накладной плановая брутто" contains the text "<vendorcodemassgross>"

        # проверяем запись в истории
        And I scroll to elements "Линк история накладной"
        And I click on this element "Линк история накладной"
        And thes element "Грид накладной" contains the text "<vendorcode2historydelete>"

         # перевести статус "В перевозке"
        And I scroll to elements "Кабинет в хедере"
        And I click on this element "В перевозке накладной"
        And I accept the alertbox
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в статусе Создана"
        And I click on this element "Линк перевозки в статусе Создана"
        And thes element "Грид перевозки статус Создана" contains the text "Создана"

        # проверяем заполнение импорта
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Импорт в перевозке"
        And I scroll to elements "Комментарии в перевозке"
        And thes element "Количество артикулов перевозки" contains the text "1"
        And thes element "Количество штук перевозки" contains the text "<number vendorcode>"

        Examples:
            | TK     | shipping warehouse | delivery warehouse | vendorcode            | vendorcodemassgross | vendorcode2           | vendorcode2massgross | vendorcode2historydelete                      | number vendorcode | login coordinator        |
            | Ителла | Ethicon LLC Brazil        | MD Лесной          | TRILOC II CUP 32/44mm | 11875               | TRILOC II CUP 32/58mm | 11875                | Позиция 13058 (TRILOC II CUP 32/58mm) удалена | 47500             | MD Transport Coordinator |
