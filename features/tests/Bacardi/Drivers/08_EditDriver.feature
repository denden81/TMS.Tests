@bacardi
@drivers

Feature: Check driver
    As a Transport Coordinator
    I want to check create driver

    Scenario Outline: 08_Edit Driver
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

        #редактирование водителя
        And I click on this element "Редактирование водителя"
        And I expects that element "footerDriver" contains the text "Водитель"
        And I add "  " to the inputfields "ФИО водителя"
        And I click on this element "Сохранить водителя"
        And I expects that element "Ошибки редактирования водителя" contains the text "Заполните ФИО"

        Examples:
            | driver telefon | TK       | driver passport | issue by   | number license | data license | attorney no | comment               |
            | +79020304051    | ЛТ Групп | 5845701020      | ОВД Москва | 45127845       | 10/10/2020   | 45127846    | самый лучший водитель |
