@vistakon
@drivers

Feature: Check driver
    As a Transport Coordinator
    I want to check sort driver

    Scenario: 10_Sort Driver
        Given I log in as a "Vis Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "Водители"
        And I expect this element "Loader" is not visible
        #сортируем по Id
        When I click on this element "Колонка Id"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Id"
        Then I click on this element "Колонка Id"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Id"
         #сортируем по фио
        When I click on this element "Колонка ФИО"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "ФИО"
        Then I click on this element "Колонка ФИО"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "ФИО"
        #сортируем по телефону
        When I click on this element "Колонка Телефон"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Телефон"
        Then I click on this element "Колонка Телефон"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Телефон"
        #сортируем по паспорту
        When I click on this element "Колонка Паспорт"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Паспорт"
        Then I click on this element "Колонка Паспорт"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Паспорт"
        #сортируем по кем выдан
        When I click on this element "Колонка Кем выдан"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Кем выдан"
        Then I click on this element "Колонка Кем выдан"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Кем выдан"
        #сортируем по Водительское удостоверение
        When I click on this element "Колонка Водительское удостоверение"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Водительское удостоверение"
        Then I click on this element "Колонка Водительское удостоверение"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Водительское удостоверение"
        #сортируем по Дата вод. удостоверения
        When I click on this element "Колонка Дата вод удостоверения"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Дата вод. удостоверения"
        Then I click on this element "Колонка Дата вод удостоверения"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Дата вод. удостоверения"
        #сортируем по Номер доверенности
        When I click on this element "Колонка Номер доверенности"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Номер доверенности"
        Then I click on this element "Колонка Номер доверенности"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Номер доверенности"
        #сортируем по Комментарий
        When I click on this element "Колонка комментарий"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Комментарий"
        Then I click on this element "Колонка комментарий"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Комментарий"
        #сортируем по Транспортная компания
        When I click on this element "Колонка ТК"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Транспортная компания"
        Then I click on this element "Колонка ТК"
        And I expect this element "Loader" is not visible
        And I expects that element "footerGridDriver" contains the text "Транспортная компания"
