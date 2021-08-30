@bacardi
@drivers

Feature: Check driver
    As a Transport Coordinator
    I want to check create driver

    Scenario Outline: 07_Create Driver
        Given I log in as a "Bac Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        When I open the url "/TruckDrivers#/TruckDrivers/"
        And I expect this element "Loader" is not visible
        #добавляем водителя
        And I click on this element "Добавить Водителя"
        And I expects that element "footerDriver" contains the text "Водитель"
        And I click on this element "Выбрать ТК для водителя"
        And I add "<TK>" to the inputfields "ТК для водителя"
        And I click on this element "Подтвердить ТК для водителя"
        And I add "random driver number" to the inputfields "ФИО водителя"
        And I add "<driver telefon>" to the inputfields "Телефон водителя"
        And I add "<driver passport>" to the inputfields "Паспорт"
        And I add "<issue by>" to the inputfields "Кем выдано"
        And I add "<number license>" to the inputfields "Номер лицензии"
        And I add "<data license>" to the inputfields "Дата лицензии"
        And I add "<attorney no>" to the inputfields "Номер доверенности"
        And I add "<comment>" to the inputfields "Комментарий"
        And I click on this element "Сохранить водителя"
        And I expect this element "Loader" is not visible
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #проверяем что водитель создан вводя его в поиске по имени
        And I add "random driver number" to the inputfields "Поле поиска по ФИО"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "random driver number"

        # создание накладной для проверки водителя
        And I open the url "/"
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
        Then I click on this element "Добавить новую накладную"
        And thes element "Окно создания новой перевозки" contains the text "Создание накладной"
        # Добавление рандомного номера накладной
        And I add "random number" to the inputfields "Номер накладной"
        When I click on this element "Способ доставки"
        And I click on this element "Доставка в опциях способа доставки"
       # Добавление склада отгрузки и доставки
        And I add shipping warehouses "<shipping warehouse>" and delivery warehouses "<delivery warehouse>"
        # добавить артикулы
        And I add vendor code "<vendorcode>" to the inputfields "Позиция в накладной"
        And I add "<number vendorcode>" to the inputfields "Количество позиции"
        Then I click on this element "Добавить позиции"
        When I click on this element "Сохранить накладную"
        And thes element "Грид накладной статус Создана" contains the text "Создана"
        # перевести статус "В перевозке"
        And I moving waybills status forward "В перевозке"
        # кликнуть на линк перевозки
        When I scroll to elements "Линк перевозки"
        When I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        # кликнуть на кнопку "Расчитать распределение по ТК" и выбрать тк
        And I click calculate and select "<TK>" transport company
        # заполнить ставку
        And I scroll to elements "Кабинет в хедере"
        And I add numbers "50000" to the inputfields "Ставка за перевозку в перевозке"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС заказано"
        And I moving status forward "ТС заказано"
        # перевести статус перевозки "Подтверждена"
        And I moving status forward "Подтверждена"
        # заполнить водителя
        When I click on this element "Выбрать водителя"
        And thes element "Выбор водителя в перевозке" contains the text "Выберите водителя"
        Then I click on this element "Иконка Выбрать водителя"
        And I add "random driver number" to the inputfields "В поле поиска водителя"
        And I click on this element "Подтвердить выбор водителя из списка"
        And I click on this element "Сохранить водителя"
        # проверить что водитель сохранен
        And I expects that element "Грид перевозки" contains the text "random driver number"

        Examples:
            | driver telefon | TK       | driver passport | issue by   | shipping warehouse | delivery warehouse | vendorcode | number vendorcode | number license | data license | attorney no | comment               |
            | +79020304051      | ЛТ Групп | 5845701020      | ОВД Москва | Склад Истры        | Пенза              | 1102001281 | 7000              | 45127845       | 10/10/2020   | 45127846    | самый лучший водитель |
