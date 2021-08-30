@ecolab
@drivers

Feature: Check driver
    As a Transport Coordinator
    I want to check search driver

    Scenario Outline: 10_Check search driver
        Given I log in as a "Ecolab Transport Coordinator" on homepage
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

        #проверяем поиск по телефону
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I add "<driver telefon>" to the inputfields "Поле поиска по телефону"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "<driver telefon>"

        #проверяем поиск по паспорту
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I add "<driver passport>" to the inputfields "Поле поиска по паспорту"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "<driver passport>"

        #проверяем поиск Кем выдан
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I add "<issue by>" to the inputfields "Поле поиска кем выдан"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "<issue by>"

        #проверяем поиск по Водительскому удостоверению
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I add "<number license>" to the inputfields "Водительское удостоверение"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "<number license>"

         #проверяем поиск по Дата водительского удостоверения
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I add "<data license>" to the inputfields "Поле поиска по Дата вод. удостоверения"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "<data license>"

         #проверяем поиск по Номер доверенности
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I add "<attorney no>" to the inputfields "Поле поиска по Номеру доверенности"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "<attorney no>"

        #проверяем поиск по Комментарию
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        And I add "<comment>" to the inputfields "Поле поиска по Комментарий"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "<comment>"
        Then I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #увеличиваем разрешение чтобы влезли все столбцы
        And I have a screen that is 1920 by 900 pixels

        #проверяем поиск по ТК
        And I click on this element "Поиск Транспортной компании у водителя"
        And I add "<TK>" to the inputfields "Поиск Транспортной компании водителя"
        And I click "<TK>" on the element "Поиск Транспортной компании водителя"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "<TK>"

        Examples:
            | driver telefon | TK      | driver passport | issue by   | number license | data license | attorney no | comment               |
            | 102030405      | Автобал | 5845701020      | ОВД Москва | 45127845       | 10/10/2020   | 45127846    | самый лучший водитель |
