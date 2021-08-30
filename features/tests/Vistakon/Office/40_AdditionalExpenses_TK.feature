@vistakon
@office

Feature: additional expensive TK
    As a Transport Coordinator
    I want to check additional expensive TK

    Scenario Outline: 40_Check Additional Expensive TK
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        And I click on this element "predstavlenie1"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
        # создание накладной для проверки водителя
        And I click on this element "Добавить новую накладную"
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
        And I open the url "/logout"

       #заходим транспортной компанией и заполняем доп затраты
        Given I log in as a "<transport company>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I wait on elements "Office"
        # ищем накладную в поиске
        And I check filter "random number" deliveryNumber
        Then I expects that element "scrollContainer" contains the text "random number"
        And I click on this element "Заявку на перевозку транспортной компании"
        And thes element "Грид заявки на перевозку статусе Подтверждена" contains the text "Подтверждена"

        # заполнить дополнительные затраты Возврат
        And I scroll to elements "Штрафы"
        And I click on this element "Дополнительные затраты"
        And I scroll to elements "Штрафы"
        And I click on this element "Добавляем плечо Доп затрат"
        And I expect this element "Loader" is not visible
        And I click on this element "сохраняем плечо Доп затрат"
        And I click on this element "Добавляем затрату в Доп затратах"
        And I click on this element "Возврат в Доп затратах"
        And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        And I add "возврат кота" to the inputfields "Значение комментария в Доп затратах"
        And I click button Add Additional Cost
        And I expect this element "Loader" is not visible
        # заполнить дополнительные затраты Возврат охраны
        And I click on this element "Добавляем плечо Доп затрат"
        And I expect this element "Loader" is not visible
        And I click on this element "сохраняем плечо Доп затрат"
        And I click on this element "Добавляем затрату в Доп затратах"
        And I click on this element "Возврат охраны в Доп затратах"
        And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        And I add "возврат кота" to the inputfields "Значение комментария в Доп затратах"
        And I click button Add Additional Cost
        And I expect this element "Loader" is not visible


        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Возврат в размере"
        And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Возврат охраны в размере"
        And thes element "Грид перевозки весь" contains the text "14000"

        Examples:
            | TK      | shipping warehouse | delivery warehouse | vendorcode   | number vendorcode | login coordinator         | transport company     |
            | Даймекс | VC3000             | VC3001             | 733905098321 | 67000             | Vis Transport Coordinator | Vis Transport Company |
