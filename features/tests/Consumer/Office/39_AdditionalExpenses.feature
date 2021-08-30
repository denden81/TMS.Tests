@consumer
@drivers

Feature: additional expensive
    As a Transport Coordinator
    I want to check additional expensive

    Scenario Outline: 39_Additional expensive:Дополнительные затраты
        Given I log in as a "<login coordinator>" on homepage
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
        And I moving waybills status forward "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        Then I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        # кликнуть на кнопку "Расчитать распределение по ТК"
        And I click calculate and select "<TK>" transport company
        # перевести статус перевозки "ТС заказано"
        And I moving status forward "ТС заказано"
        # перевести статус перевозки "Подтверждена"
        And I moving status forward "Подтверждена"
        # заполнить дополнительные затраты Возврат
        And I scroll to elements "Штрафы"
        And I click on this element "Дополнительные затраты"
        And I scroll to elements "Штрафы"
        And I click on this element "Добавляем плечо Доп затрат"
        And I click on this element "сохраняем плечо Доп затрат"
        And I click on this element "Добавляем затрату в Доп затратах"
        And I click on this element "Возврат в Доп затратах"
        And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        And I add "возврат кота" to the inputfields "Значение комментария в Доп затратах"
        And I click button Add Additional Cost

        # заполнить дополнительные затраты Возврат охраны
        And I click on this element "Добавляем плечо Доп затрат"
        And I click on this element "сохраняем плечо Доп затрат"
        And I click on this element "Добавляем затрату в Доп затратах"
        And I click on this element "Возврат охраны в Доп затратах"
        And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        And I add "возврат кота1" to the inputfields "Значение комментария в Доп затратах"
        And I click button Add Additional Cost

        # заполнить дополнительные затраты Возврат паллет
       #And I click on this element "Добавляем плечо Доп затрат"
       #And I click on this element "сохраняем плечо Доп затрат"
       #And I click on this element "Добавляем затрату в Доп затратах"
       #And I click on this element "Возврат паллет в Доп затратах"
       #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
       #And I add "возврат кота2" to the inputfields "Значение комментария в Доп затратах"
       #And I click button Add Additional Cost
        # заполнить дополнительные затраты Дополнительная точка выгрузки
        #And I click on this element "Добавляем плечо Доп затрат"
        #And I click on this element "сохраняем плечо Доп затрат"
        #And I click on this element "Добавляем затрату в Доп затратах"
        #And I click on this element "Дополнительная точка выгрузки в Доп затратах"
        #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        #And I add "возврат кота3" to the inputfields "Значение комментария в Доп затратах"
        #And I click button Add Additional Cost
        # заполнить дополнительные затраты Охрана
        #And I click on this element "Добавляем плечо Доп затрат"
        #And I click on this element "сохраняем плечо Доп затрат"
        #And I click on this element "Добавляем затрату в Доп затратах"
        #And I click on this element "Охрана в Доп затратах"
        #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        #And I add "возврат кота4" to the inputfields "Значение комментария в Доп затратах"
        #And I click button Add Additional Cost
        # заполнить дополнительные затраты Простой
        #And I click on this element "Добавляем плечо Доп затрат"
        #And I click on this element "сохраняем плечо Доп затрат"
        #And I click on this element "Добавляем затрату в Доп затратах"
        #And I click on this element "Простой в Доп затратах"
        #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        #And I add "возврат кота5" to the inputfields "Значение комментария в Доп затратах"
        #And I click button Add Additional Cost
       # заполнить дополнительные затраты Самовыгрузка
       #And I click on this element "Добавляем плечо Доп затрат"
       # And I click on this element "сохраняем плечо Доп затрат"
       # And I click on this element "Добавляем затрату в Доп затратах"
       # And I click on this element "Самовыгрузка в Доп затратах"
       # And I add "7000" to the inputfields "Значение затраты в Доп затратах"
       # And I add "возврат кота" to the inputfields "Значение комментария в Доп затратах"
       # And I click button Add Additional Cost

        # заполнить дополнительные затраты Страхование
        #And I click on this element "Добавляем плечо Доп затрат"
        #And I click on this element "сохраняем плечо Доп затрат"
        #And I click on this element "Добавляем затрату в Доп затратах"
        #And I click on this element "Страхование в Доп затратах"
        #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        #And I add "возврат кота6" to the inputfields "Значение комментария в Доп затратах"
        #And I click button Add Additional Cost

        # заполнить дополнительные затраты Холостая подача
       # And I click on this element "Добавляем плечо Доп затрат"
       # And I click on this element "сохраняем плечо Доп затрат"
       # And I click on this element "Добавляем затрату в Доп затратах"
       # And I click on this element "Холостая подача в Доп затратах"
       # And I add "7000" to the inputfields "Значение затраты в Доп затратах"
       # And I add "возврат кота7" to the inputfields "Значение комментария в Доп затратах"
       # And I click button Add Additional Cost

        # заполнить дополнительные затраты Другое 1
       # And I click on this element "Добавляем плечо Доп затрат"
       # And I click on this element "сохраняем плечо Доп затрат"
       # And I click on this element "Добавляем затрату в Доп затратах"
       # And I click on this element "Другое 1 в Доп затратах"
       # And I add "7000" to the inputfields "Значение затраты в Доп затратах"
       # And I add "возврат кота8" to the inputfields "Значение комментария в Доп затратах"
       # And I click button Add Additional Cost
        # заполнить дополнительные затраты Другое 2
        #And I click on this element "Добавляем плечо Доп затрат"
        #And I click on this element "сохраняем плечо Доп затрат"
        #And I click on this element "Добавляем затрату в Доп затратах"
        #And I click on this element "Другое 2 в Доп затратах"
        #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        #And I add "возврат кота9" to the inputfields "Значение комментария в Доп затратах"
        #And I click button Add Additional Cost
            # заполнить дополнительные затраты Другое 3
        #And I click on this element "Добавляем плечо Доп затрат"
        #And I click on this element "сохраняем плечо Доп затрат"
        #And I click on this element "Добавляем затрату в Доп затратах"
        #And I click on this element "Другое 3 в Доп затратах"
        #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        #And I add "возврат кота10" to the inputfields "Значение комментария в Доп затратах"
        #And I click button Add Additional Cost
        # заполнить дополнительные затраты Другое 4
        #And I click on this element "Добавляем плечо Доп затрат"
        #And I click on this element "сохраняем плечо Доп затрат"
        #And I click on this element "Добавляем затрату в Доп затратах"
        #And I click on this element "Другое 4 в Доп затратах"
        #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        #And I add "возврат кота11" to the inputfields "Значение комментария в Доп затратах"
        #And I click button Add Additional Cost

        # заполнить дополнительные затраты Другое 5
        #And I click on this element "Добавляем плечо Доп затрат"
        #And I click on this element "сохраняем плечо Доп затрат"
        #And I click on this element "Добавляем затрату в Доп затратах"
        #And I click on this element "Другое 5 в Доп затратах"
        #And I add "7000" to the inputfields "Значение затраты в Доп затратах"
        #And I add "возврат кота12" to the inputfields "Значение комментария в Доп затратах"
        #And I click button Add Additional Cost
        # проверяем запись в истории
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Линк история перевозки"
        And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Возврат в размере"
        And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Возврат охраны в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Возврат паллет в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Дополнительная точка выгрузки в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Охрана в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Простой в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Самовыгрузка в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Страхование в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Холостая подача в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Другое 1 в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Другое 2 в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Другое 3 в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Другое 4 в размере"
        #And thes element "Грид перевозки весь" contains the text "добавлена дополнительная затрата типа Другое 5 в размере"
        And thes element "Грид перевозки весь" contains the text "14000"

        Examples:
            | TK     | shipping warehouse | delivery warehouse | vendorcode | number vendorcode | login coordinator              |
            | Ителла | CONSMSKFM          | Пенза              | 1603706S   | 105000            | Consumer Transport Coordinator |
