@consumer
@orders

Feature: Check order to consolidate
    As a Transport Coordinator
    I want to check order at consolidate on waybills

    Scenario Outline: 07_Check order to consolidate:Проверить приказ по закреплению
        Given I log in as a "Consumer Transport Coordinator" on homepage
        #Создание приказа
        And I open the url "/TarificationOrder#/TarificationOrderByCarrier/"
        And I expect this element "Loader" is not visible
        And I click on this element "IconPlus"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        And I wait on elements "OrdersClose"
        And I add "random order number" to the inputfields "Номер"
        Then I set order date "from month early"
        And I click on this element "SelectSubCompany"
        And I click on this element "SelectConsumer"
        And I click on this element "AddSubCompany"
        #добавить детали приказа реф
        And I click on this element "Добавить Детали приказа"
        And I expect this element "Loader" is not visible
        And I click on this element "Выбрать направление"
        And I add "<directions>" to the inputfields "Направление"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать ТК"
        And I add "<TK>" to the inputfields "ТК"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать Тип ТС"
        And I add "<type tc ref>" to the inputfields "Тип ТС"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать Вид услуги"
        And I add "FTL" to the inputfields "Вид услуги"
        And I click on this element "Подтвердить"
        And I click on this element "SaveDetailsOrder"
        And I expects that element "OrderFooter" contains the text "<directions>"
        And I expects that element "OrderFooter" contains the text "<TK>"
        And I expects that element "OrderFooter" contains the text "<type tc ref>"
        And I expects that element "OrderFooter" contains the text "FTL"

        #добавить детали приказа тент
        And I click on this element "Добавить Детали приказа"
        And I click on this element "Выбрать направление"
        And I add "<directions>" to the inputfields "Направление"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать ТК"
        And I add "<TK>" to the inputfields "ТК"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать Тип ТС"
        And I add "<type tc tent>" to the inputfields "Тип ТС"
        And I click on this element "Подтвердить"
        And I click on this element "Выбрать Вид услуги"
        And I add "FTL" to the inputfields "Вид услуги"
        And I click on this element "Подтвердить"
        And I click on this element "SaveDetailsOrder"
        And I expects that element "OrderFooter" contains the text "<directions>"
        And I expects that element "OrderFooter" contains the text "<TK>"
        And I expects that element "OrderFooter" contains the text "<type tc tent>"

         # создание накладной для проверки приказа
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I wait on elements "Office"
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
        And thes element "Грид накладной статус Создана" contains the text "Создана"
       # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        Then I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        #кликнуть на кнопку "Расчитать распределение по ТК"
        When I click on this element "Рассчитать распределение по ТК"
        And I expect this element "Loader" is not visible
        #Проверить что компания с приказом по закреплению присутствует
        And I expects that element "Fixed transport company" contains the text "<TK>"
        And I open the url "/logout"

        Examples:
            | directions   | TK        | type tc ref | type tc tent | shipping warehouse | delivery warehouse | vendorcode | number vendorcode |
            | Москва~Пенза | Essers EU | 20т-66п-Реф | 20т-66п-Тент | CONSMSKFM          | Пенза              | 1603706S   | 105000            |

    Scenario: 07_Check order to consolidate ч2
        #сбрасываем даты приказу, чтобы он не мешал
        And I open the url "/logout"
        Given I log in as a "Consumer Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I open the url "/TarificationOrder#/TarificationOrderByCarrier/"
        And I expect this element "Loader" is not visible
        And I click in random element "random order number"
        And I expect this element "Loader" is not visible
        And I wait on elements "OrdersClose"
        And I set order date "from/to month early"
        Then I click on this element "OrdersClose"
        And I expect this element "Loader" is not visible
