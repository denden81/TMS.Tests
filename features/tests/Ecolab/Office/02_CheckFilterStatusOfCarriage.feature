@ecolab
@office

Feature: Check filter status of carriage
    As a Transport Coordinator
    I want to check status filter of carriage

    Scenario: 02_Check filter status of carriage
        Given I log in as a "Ecolab Transport Coordinator" on homepage
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #проверка фильтра "Создана" у колонки "Статус перевозки"
        And I click on this element "statusOfCarriage"
        And I click on this element "Создана перевозка"
        And thes element "tmsGridCellLeft" contains the text "Создана"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "ТС заказано" у колонки "Статус перевозки"
        When I click on this element "statusOfCarriage"
        And I click on this element "ТС заказано"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "ТС заказано"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Подтверждена" у колонки "Статус перевозки"
        When I click on this element "statusOfCarriage"
        And I click on this element "Подтверждена"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "Подтверждена"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "ТС прибыло на погрузку" у колонки "Статус перевозки"
        And I set date years "2019"
        And I expect this element "Loader" is not visible
        When I click on this element "statusOfCarriage"
        And I click on this element "ТС прибыло на погрузку"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "ТС прибыло на погрузку"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Отменена" у колонки "Статус перевозки"
        And I set date years "2019"
        And I expect this element "Loader" is not visible
        When I click on this element "statusOfCarriage"
        And I click on this element "Отменена"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "Отменена"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Срыв поставки" у колонки "Статус перевозки"
        # не нашлось с таким статусом
       #And I click on this element "statusOfCarriage"
       #And I click on this element "Срыв поставки"
       #And I expect this element "Loader" is not visible
       #And I expects that element "tmsGridCellLeft" contains the text "Срыв поставки"
       #And I click on this element "RemoveFilter"
      #Then I expect this element "Loader" is not visible
        #проверка фильтра "Холостая подача" у колонки "Статус перевозки"
        # не нашлось с таким статусом
      #When I click on this element "statusOfCarriage"
       #And I click on this element "Холостая подача"
       #And I expect this element "Loader" is not visible
       #And I expects that element "tmsGridCellLeft" contains the text "Холостая подача"
       #And I click on this element "RemoveFilter"
      #Then I expect this element "Loader" is not visible
        #проверка фильтра "ТС убыло с погрузки" у колонки "Статус перевозки"
        And I set date years "2019"
        And I expect this element "Loader" is not visible
        When I click on this element "statusOfCarriage"
        And I click on this element "ТС убыло с погрузки"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "ТС убыло с погрузки"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "ТС прибыло на выгрузку" у колонки "Статус перевозки"
        # не нашлось с таким статусом
      #When I click on this element "statusOfCarriage"
       #And I click on this element "ТС прибыло на выгрузку"
       #And I expect this element "Loader" is not visible
       #And I expects that element "tmsGridCellLeft" contains the text "ТС прибыло на выгрузку"
       #And I click on this element "RemoveFilter"
      #Then I expect this element "Loader" is not visible
        #проверка фильтра "ТС убыло с выгрузки" у колонки "Статус перевозки"
        # не нашлось с таким статусом
      #When I click on this element "statusOfCarriage"
      # And I click on this element "ТС убыло с выгрузки"
      # And I expect this element "Loader" is not visible
      # And I expects that element "tmsGridCellLeft" contains the text "ТС убыло с выгрузки"
      # And I click on this element "RemoveFilter"
      #Then I expect this element "Loader" is not visible
        #проверка фильтра "Перевозка завершена" у колонки "Статус перевозки"
        When I click on this element "statusOfCarriage"
        And I click on this element "Перевозка завершена"
        And I expect this element "Loader" is not visible
        And I expects that element "tmsGridCellLeft" contains the text "Перевозка завершена"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Сумма подтверждена" у колонки "Статус перевозки"
        # не нашлось с таким статусом
      #When I click on this element "statusOfCarriage"
       #And I click on this element "Сумма подтверждена"
       #And I expect this element "Loader" is not visible
       #And I expects that element "tmsGridCellLeft" contains the text "Сумма подтверждена"
       #And I click on this element "RemoveFilter"
      #Then I expect this element "Loader" is not visible
        #проверка фильтра "Счет выставлен" у колонки "Статус перевозки"
        # не нашлось с таким статусом
      #When I click on this element "statusOfCarriage"
       #And I add "Счет выставлен" to the inputfields "fieldstatusOfCarriage"
       #And I click on this element "Счет выставлен"
       #And I expect this element "Loader" is not visible
       #And I expects that element "tmsGridCellLeft" contains the text "Счет выставлен"
       #And I click on this element "RemoveFilter"
      #Then I expect this element "Loader" is not visible
        #проверка фильтра "В архиве у колонки "Статус перевозки"
        When I click on this element "statusOfCarriage"
        And I add "В архиве" to the inputfields "fieldstatusOfCarriage"
        And I click on this element "В архиве перевозка"
        And thes element "tmsGridCellLeft" contains the text "В архиве"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Сумма не подтверждена" у колонки "Статус перевозки"
        #не нашлось с таким статусом
      #When I click on this element "statusOfCarriage"
       #And I add "Сумма не подтверждена" to the inputfields "fieldstatusOfCarriage"
       #And I click on this element "Сумма не подтверждена"
       #And I expect this element "Loader" is not visible
       #And I expects that element "tmsGridCellLeft" contains the text "Сумма не подтверждена"
       #And I click on this element "RemoveFilter"
      #Then I expect this element "Loader" is not visible
