@ie
@office

Feature: Check waybills
    As a admin
    I want to make waybills and shipping and change total summ invoice two waybills delete MO

        # создаем накладную
    Scenario Outline: 16_Change Total Summ Invoice Two Waybills Delete MO
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
        And I add numbers "54500" to the inputfields "Сумма товаров по инвойсу"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        # заполняем валюту по инвойсу
        #Then I click on this element "Иконка выбора валюты в накладной"
        #And I click on this element "Выбрать валюту RUB в накладной"
        #And I expect this element "Loader" is not visible
        #And I expect this element "Loader" is not visible

        # переходим в кабинет и создаем еше одну накладную
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number waybills2" to the inputfields "Номер накладной"
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
        And I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"
        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"
        # заполняем сумму по инвойсу
        And I scroll to elements "Линк история накладной"
        When I click on this element "Импорт в накладной"
        And I add numbers "54500" to the inputfields "Сумма товаров по инвойсу"
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

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        And I scroll to elements "Кабинет в хедере"

        # читаем номер у 2ой перевозки и заполняем его в поле в МО
        And I read number carriages "ie" and add him in MO
        And I click on this element "Кнопка ОК в Массовых операциях"
        And I expect this element "Loader" is not visible
        # проверяем статус 1ой накладной
        And I click in random element "random number"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

        # перетаскиваем 1 накладную на другую
        #And I open the url "/"
       # And I expect this element "Loader" is not visible
       # And I click on this element "predstavlenie1"
       # And I wait on elements "Office"
       # And I click on this element "Reload"
       # And I expect this element "Loader" is not visible
       # And I set filter "random number all" deliveryNumber
       # And I drags element "random number" to element "random number waybills2"
       # And I accept the alertbox
       # And I expect this element "Loader" is not visible

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        # проверяем запись в импорте
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Импорт в перевозке"
        And I scroll to elements "Комментарии в перевозке"
        And thes element "Total сумма по инвойсам" contains the text "109000"
        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "Total сумма по инвойсам установлена в 109000"

        #переходим в кабинет
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
        And I check filter "random number" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "random number"
        And I click on this element "firstCheckbox"
        And I wait on elements "firstCheckboxIsChecked"
        And I wait on elements "multiselectPanel"

        And I click on this element "Выбрать массовую операцию"
        And I click on this element "Выбрать удаление накладной из списка массовых операций"
        And I click on this element "Кнопка ОК в Массовых операциях"
        And I expect this element "Loader" is not visible

         # проверяем статус накладной
        When I click in random element "random number waybills2"
        And thes element "Грид накладной" contains the text "В перевозке"

         # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        # проверяем запись в импорте
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Импорт в перевозке"
        And I scroll to elements "Комментарии в перевозке"
        And thes element "Total сумма по инвойсам" contains the text "54500"
        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "Total сумма по инвойсам установлена в 54500"

        Examples:
            | TK     | shipping warehouse | delivery warehouse | vendorcode            | number vendorcode | login coordinator        |
            | Ителла | Ethicon LLC Brazil        | MD Лесной          | TRILOC II CUP 32/44mm | 47500             | MD Transport Coordinator |
