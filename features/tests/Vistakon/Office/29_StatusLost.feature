@vistakon
@office

Feature: Check status Lost
    As a admin
    I want to check status Lost in waybills

        # создаем накладную
    Scenario Outline: 29_Status Lost
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
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
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке сразу собрана"
        # перевести статус "В подборке"
        # And I moving waybills status forward "В подборке"
        # перевести статус в "Собрана"
        #And I moving waybills status forward "Собрана"
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
 		# перевести статус перевозки "ТС прибыло на погрузку"
        And I moving status forward "ТС прибыло на погрузку"
        # перевести статус перевозки "ТС убыло с погрузки"
        And I moving status forward "ТС убыло с погрузки"
        # перевести статус перевозки "ТС прибыло на выгрузку"
        And I moving status forward "ТС прибыло на выгрузку"
        # кликнуть на линк накладной
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной"
        When I click on this element "Линк накладной"
        And thes element "Грид накладной" contains the text "Доставлена"
        # перевести в статус потеряна
        Then I click on this element "Потеряна в накладной"
        And I accept the alertbox
        And thes element "Грид накладной" contains the text "Потеряна"
        # проверяем запись в истории
        And I scroll to elements "Линк история накладной"
        And I click on this element "Линк история накладной"
        And thes element "Грид перевозки весь" contains the text "переведена в статус Потеряна"

        Examples:
            | TK      | shipping warehouse | delivery warehouse | vendorcode   | number vendorcode | login coordinator         |
            | Даймекс | VC3000             | VC3001             | 733905098321 | 67000             | Vis Transport Coordinator |
