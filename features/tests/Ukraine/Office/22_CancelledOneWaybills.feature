@ukraine
@office

Feature: Check  status Cancelled in one waybills
    As a admin
    I want to check status Cancelled waybills

        # создаем накладную
    Scenario Outline: 22_Сheck Status Cancelled One Waybills:Отменена
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        And I click on this element "Способ доставки"
        And I click on this element "Поставка в опциях способа доставки"
        # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        And I click on this element "Добавить позиции"
        And I expect this element "Loader" is not visible
        Then I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        #кликнуть на кнопку "Расчитать распределение по ТК" и выбрать тк
        And I click calculate and select "<TK>" transport company
        # перевести статус перевозки "ТС заказано"
        And I moving status forward "ТС заказано"
        # перевести статус перевозки "Подтверждена"
        And I moving status forward "Подтверждена"

        # перевести статус перевозки "Отменена"
        When I click on this element "Отменена в перевозке"
        And I accept the alertbox
        And thes element "Подтвердите действие во всплываюшем окне перевозки" contains the text "Подтвердите действие"
        Then I click on this element "Ок в попапе при создании копии в перевозке"
        And I expect this element "Loader" is not visible

        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        When I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "Перевозка создана как копия перевозки"

        # перекодим в кабинет
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        Then I click in random element "random number"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в статусе Отменена"
        And I click on this element "Линк перевозки в статусе Отменена"
        And I expect this element "Loader" is not visible

        # проверяем статус перевозки
        And I scroll to elements "Кабинет в хедере"
        And thes element "Грид перевозки весь" contains the text "Отменена"


        Examples:
            | TK      | shipping warehouse                                              | delivery warehouse                 | vendorcode | number vendorcode | login coordinator         |
            | ТОВ ХФК | вул. Садова 26-а, смт. Гостомель, Київська обл., 08290, Україна | 08300 Бориспіль вул. Запорізька 28 | 8077501    | 225000            | Ukr Transport Coordinator |
