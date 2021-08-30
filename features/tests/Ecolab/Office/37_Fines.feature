@ecolab
@drivers

Feature: check fines
    As a Transport Coordinator
    I want to check fines

    Scenario Outline: 37_Check Fines
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
        And thes element "Грид накладной статус Не проверена" contains the text "Не проверена"
        #перевести в статус Cоздана
        And I moving waybills status forward "Создана"
       # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"
       # перевести статус "В подборке"
        And I moving waybills status forward "В подборке"
        # перевести статус в "Собрана"
        And I moving waybills status forward "Собрана"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        When I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        #кликнуть на кнопку "Расчитать распределение по ТК" и выбрать тк
        And I click calculate and select "<TK>" transport company
        # перевести статус перевозки "ТС заказано"
        And I moving status forward "ТС заказано"

        # заполнить ставку
        And I add numbers "50000" to the inputfields "Ставка за перевозку в перевозке"
        And I press "Enter"
        And I expect this element "Loader" is not visible

        # перевести статус перевозки "Подтверждена"
        And I moving status forward "Подтверждена"
        # перевести статус перевозки "ТС прибыло на погрузку"
        And I moving status forward "ТС прибыло на погрузку"
        # перевести статус перевозки "Перевозка завершена"
        And I moving status forward "Перевозка завершена"
        # заполнить Штраф несвоевременный возврат документов
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Штрафы"
        And I click on this element "Добавляем тип Штрафа"
        And I click on this element "Несвоевременный возврат документов в Штрафах"
        And I expect this element "Loader" is not visible
        And I click on this element "Добавляем тип начислений в Штрафе"
        And I click on this element "Абсолютный тип начислений в Штрафе"
        And I expect this element "Loader" is not visible
        And I add "5000" to the inputfields "Значение штрафа в Штрафе"
        And I add "возврат кота" to the inputfields "Комментарий в Штрафе"
        And I click on this element "Добавляем штраф в Штрафах"
        And I expect this element "Loader" is not visible
        # заполнить Штраф несвоевременое прибытие под загрузку
       # And I scroll to elements "Линк история перевозки"
       # And I click on this element "Добавляем тип Штрафа"
       # And I click on this element "Несвоевременное прибытие под загрузку в Штрафах"
       # And I expect this element "Loader" is not visible
       # And I click on this element "Добавляем тип начислений в Штрафе"
       # And I click on this element "Абсолютный тип начислений в Штрафе"
       # And I add "5000" to the inputfields "Значение штрафа в Штрафе"
       # And I add "возврат кота" to the inputfields "Комментарий в Штрафе"
       # And I click on this element "Добавляем штраф в Штрафах"
       # And I expect this element "Loader" is not visible
        # заполнить Штраф срыв поставки
       # And I scroll to elements "Линк история перевозки"
      #  And I click on this element "Добавляем тип Штрафа"
      #  And I click on this element "Срыв поставки в Штрафах"
      #  And I expect this element "Loader" is not visible
      #  And I click on this element "Добавляем тип начислений в Штрафе"
      #  And I click on this element "Абсолютный тип начислений в Штрафе"
      #  And I add "5000" to the inputfields "Значение штрафа в Штрафе"
      #  And I add "возврат кота" to the inputfields "Комментарий в Штрафе"
      #  And I click on this element "Добавляем штраф в Штрафах"
      #  And I expect this element "Loader" is not visible
        # заполнить Штраф другое
     #   And I scroll to elements "Линк история перевозки"
     #   And I click on this element "Добавляем тип Штрафа"
     #   And I click on this element "Другое в Штрафах"
     #   And I expect this element "Loader" is not visible
     #   And I click on this element "Добавляем тип начислений в Штрафе"
      #  And I click on this element "Абсолютный тип начислений в Штрафе"
      #  And I add "5000" to the inputfields "Значение штрафа в Штрафе"
      #  And I add "возврат кота" to the inputfields "Комментарий в Штрафе"
      #  And I click on this element "Добавляем штраф в Штрафах"
      #  And I expect this element "Loader" is not visible

         # заполнить Штраф Проценты несвоевременный возврат документов
      #  And I scroll to elements "Линк история перевозки"
      #  And I click on this element "Добавляем тип Штрафа"
      #  And I click on this element "Несвоевременный возврат документов в Штрафах"
      #  And I expect this element "Loader" is not visible
      #  And I click on this element "Добавляем тип начислений в Штрафе"
      #  And I click on this element "Проценты тип начислений в Штрафе"
      #  And I expect this element "Loader" is not visible
      #  And I add "10" to the inputfields "Значение штрафа в Штрафе"
      #  And I add "возврат кота" to the inputfields "Комментарий в Штрафе"
      #  And I click on this element "Добавляем штраф в Штрафах"
      #  And I expect this element "Loader" is not visible
        # заполнить Штраф Проценты несвоевременое прибытие под загрузку
      #  And I scroll to elements "Линк история перевозки"
      #  And I click on this element "Добавляем тип Штрафа"
      #  And I click on this element "Несвоевременное прибытие под загрузку в Штрафах"
      #  And I expect this element "Loader" is not visible
      #  And I click on this element "Добавляем тип начислений в Штрафе"
      #  And I click on this element "Проценты тип начислений в Штрафе"
      #  And I add "10" to the inputfields "Значение штрафа в Штрафе"
      #  And I add "возврат кота" to the inputfields "Комментарий в Штрафе"
      #  And I click on this element "Добавляем штраф в Штрафах"
      #  And I expect this element "Loader" is not visible
        # заполнить Штраф Проценты срыв поставки
        And I scroll to elements "Линк история перевозки"
        And I click on this element "Добавляем тип Штрафа"
        And I click on this element "Срыв поставки в Штрафах"
        And I expect this element "Loader" is not visible
        And I click on this element "Добавляем тип начислений в Штрафе"
        And I click on this element "Проценты тип начислений в Штрафе"
        And I add "10" to the inputfields "Значение штрафа в Штрафе"
        And I add "возврат кота" to the inputfields "Комментарий в Штрафе"
        And I click on this element "Добавляем штраф в Штрафах"
        And I expect this element "Loader" is not visible
        # заполнить Штраф Проценты другое
      #  And I scroll to elements "Линк история перевозки"
      #  And I click on this element "Добавляем тип Штрафа"
      #  And I click on this element "Другое в Штрафах"
      #  And I expect this element "Loader" is not visible
      #  And I click on this element "Добавляем тип начислений в Штрафе"
      #  And I click on this element "Проценты тип начислений в Штрафе"
      #  And I add "10" to the inputfields "Значение штрафа в Штрафе"
      #  And I add "возврат кота" to the inputfields "Комментарий в Штрафе"
      #  And I click on this element "Добавляем штраф в Штрафах"
      #  And I expect this element "Loader" is not visible

        # проверяем общую стоимость перевозки
        And thes element "Грид перевозки весь" contains the text "40000"

        Examples:
            | TK      | shipping warehouse | delivery warehouse | vendorcode | number vendorcode | login coordinator            |
            | Автобал | 011_M0000000510    | Пенза              | 0193537    | 120               | Ecolab Transport Coordinator |
