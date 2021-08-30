@ecolab
@drivers

Feature: Edit Driver And TC
    As a Transport Coordinator
    I want to check Edit Driver And TC

    Scenario Outline: 12_Edit DriverAnd TC
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        # создание накладной для проверки водителя
        Then I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Доставка в опциях способа доставки"
        # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible
        Then I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"
        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"
       # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        Then I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        #кликнуть на кнопку "Расчитать распределение по ТК" и выбрать тк
        And I click calculate and select "<TK>" transport company
            # перевести статус перевозки "ТС заказано"
        And I moving status forward "ТС заказано"
        		# перевести статус перевозки "Подтверждена"
        And I moving status forward "Подтверждена"
        # заполнить водителя
        When I click on this element "Выбрать водителя"
        And thes element "Выбор водителя в перевозке" contains the text "Выберите водителя"
        Then I click on this element "Иконка Выбрать водителя"
        And I add "<driver name>" to the inputfields "В поле поиска водителя"
        And I click on this element "Подтвердить выбор водителя из списка"
        And I click on this element "Сохранить водителя"
        And I expect this element "Loader" is not visible
       # проверить что водитель сохранен
        And I expects that element "Грид перевозки" contains the text "<driver name>"
        # заполнить ТС
        When I click on this element "Выберите ТС"
        And I expects that element "header TC" contains the text "Выберите ТС"
        Then I click on this element "Иконка Выбрать ТС"
        And I add "<TC>" to the inputfields "В поле поиска ТС"
        And I click on this element "Подтвердить выбор ТС из списка"
        And I click on this element "Сохранить ТС"
        And I expect this element "Loader" is not visible
        # проверить что ТС сохранен
        And I expects that element "Грид перевозки" contains the text "<TC>"

        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "<TC history>"
        And thes element "Грид перевозки весь" contains the text "<driver history>"

        Examples:
            | driver name               | driver history                                | TK      | TC            | TC history                   | shipping warehouse | delivery warehouse | vendorcode | number vendorcode | login coordinator            |
            | Авдеев Николай Николаевич | водитель изменен на Авдеев Николай Николаевич | Автобал | DAF M201РК750 | ТС изменено на DAF M201РК750 | 011_M0000000510    | Пенза              | 0193537    | 120               | Ecolab Transport Coordinator |
