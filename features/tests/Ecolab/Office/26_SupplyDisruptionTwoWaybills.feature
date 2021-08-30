@ecolab
@office

Feature: Check  status Supply Disruption in two waybills
    As a admin
    I want to check status Supply Disruption waybills

        # создаем 1ю накладную
    Scenario Outline: 26_Check Status Supply Disruption In Two Waybills:Холостая подача 2 накладных
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        When I click on this element "Добавить новую накладную"
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
        # перевести в статус создана
        When I click on this element "Создана в накладной"
        When I accept the alertbox
        And thes element "Грид накладной статус Создана" contains the text "Создана"

        # перекодим в кабинет и создаем 2ю накладную
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
        When I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number waybills2" to the inputfields "Номер накладной"
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
        # перевести в статус создана
        When I click on this element "Создана в накладной"
        When I accept the alertbox
        And thes element "Грид накладной статус Создана" contains the text "Создана"
       # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"

       # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        And I scroll to elements "Кабинет в хедере"

        # читаем номер у 2ой перевозки и заполняем его в поле в МО
        And I read number carriages "ecolab" and add him in MO
        And I click on this element "Кнопка ОК в Массовых операциях"
        And I expect this element "Loader" is not visible

        # проверяем статус 1ой накладной
        And I click in random element "random number"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

        # проверяем статус 2ой накладной
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        Then I click in random element "random number waybills2"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

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
        # удаляем накладную из перевозки
        And I scroll to elements "Линк маршрут перевозки"
        When I click on this element "Линк маршрут перевозки"
        Then I click on this element "Удалить накладную из перевозки"
        And I accept the alertbox
        And I expect this element "Loader" is not visible

        # выбираем опцию в сплывающем окне
        And I wait on elements "PopUp"
        And I click on this element "Вывод списка опции при создании копии"
        And I click on this element "Выбрать опцию Срыв поставки при копировании"
        And I click on this element "Подтвердить выбранную опцию при копировании"
        And I expect this element "Loader" is not visible
        # проверяем статус перевозки Холостая подача
        And thes element "Грид перевозки весь" contains the text "Срыв поставки"
        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        When I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "переведена в статус Срыв поставки"
        # перекодим в кабинет
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
        And I pause for 4000ms
        And I click on this element "statusOfCarriage"
        And I click on this element "Создана перевозка"
        And thes element "tmsGridCellLeft" contains the text "Создана"
        Then I click in random element "random number waybills2"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        # проверяем статус перевозки
        And I scroll to elements "Кабинет в хедере"
        And thes element "Грид перевозки статус Создана" contains the text "Создана"
        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "Перевозка создана как копия перевозки"

        Examples:
            | TK      | shipping warehouse | delivery warehouse | vendorcode | number vendorcode | login coordinator            |
            | Автобал | 011_M0000000510    | Пенза              | 0193537    | 120               | Ecolab Transport Coordinator |
