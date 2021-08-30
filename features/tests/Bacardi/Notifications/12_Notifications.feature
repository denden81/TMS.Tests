@bacardi
@notifications

Feature: Check Notifications
    As a admin
    I want to check notifications any roles

    Scenario Outline: 12_Check Notifications: ч1
        # Add mail in out account
        Given I log in as a user Administrator on homepage
        #добавляем мыло транспортному координатору
        And I click on this element "Сброс фильтра в админке"
        And I expect this element "Loader" is not visible
        And I add "<coordinator>" to the inputfields "Поиск по логину"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        When I expects that element "Грид Админки" contains the text "<coordinator>"
        And I click on this element "Редактирование пользователя"
        And I add "testmail16" to the inputfields "inputEmail"
        And I click on this element "buttonSave"
        And I expect this element "Loader" is not visible
        Then I expects that element "Грид Админки" contains the text "<coordinator>"
        #добавляем мыло катомер сервису
        And I add "<customer>" to the inputfields "Поиск по логину"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        When I expects that element "Грид Админки" contains the text "<customer>"
        And I click on this element "Редактирование пользователя"
        And I add "testmail17" to the inputfields "inputEmail"
        And I click on this element "buttonSave"
        And I expect this element "Loader" is not visible
        Then I expects that element "Грид Админки" contains the text "<customer>"
        #добавляем мыло транспортной компании
        And I add "<transport_tk>" to the inputfields "Поиск по логину"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        When I expects that element "Грид Админки" contains the text "<transport_tk>"
        And I click on this element "Редактирование пользователя"
        And I add "testmail18" to the inputfields "inputEmail"
        And I click on this element "buttonSave"
        And I expect this element "Loader" is not visible
        Then I expects that element "Грид Админки" contains the text "<transport_tk>"
        #добавляем мыло складу отгрузки
        And I add "<comment sklad>" to the inputfields "Поиск по комментарию др"
        And I press "Enter"
        And I add "<sklad>" to the inputfields "Поиск по логину"
        And I press "Enter"
        And I expect this element "Loader" is not visible
        When I expects that element "Грид Админки" contains the text "<sklad>"
        And I click on this element "Редактирование пользователя"
        And I add "testmail19" to the inputfields "inputEmail"
        And I click on this element "buttonSave"
        And I expect this element "Loader" is not visible
        Then I expects that element "Грид Админки" contains the text "<sklad>"
        And I click on this element "Сброс фильтра в админке"
       And I open the url "/logout"

        Examples:
            | coordinator | customer          | transport_tk          | sklad          | comment sklad  |
            | test_bac2   | test_bac_customer | test_bac_transport_tk | test_bac_sklad | Склад отгрузки |

        #заходим юзером с ролью кастомер сервис и создаем накладную
    Scenario Outline: 12_Check Notifications: ч2
        # create waybills
        Given I log in as a "<login customer>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
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
        And I moving waybills status forward "В перевозке"
        And I open the url "/logout"

        #заходим юзером с ролью тк и создаем накладную
        Given I log in as a "<login coordinator>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        Then I click in random element "random number"
        And thes element "Грид накладной статус В перевозке" contains the text "В перевозке"

         # перевести статус "В подборке"
        And I moving waybills status forward "В подборке"

         # перевести статус в "Собрана"
        And I moving waybills status forward "Собрана"

        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки"
        And I click on this element "Линк перевозки"
        And I expect this element "Loader" is not visible
        #кликнуть на кнопку "Расчитать распределение по ТК" и выбрать тк
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
        And I add "А" to the inputfields "В поле поиска водителя"
        And I click on this element "Подтвердить выбор водителя из списка"
        And I click on this element "Сохранить водителя"
        And I expect this element "Loader" is not visible
        # проверить что водитель сохранен
        And I expects that element "Грид перевозки" contains the text "А"
        # перевести статус перевозки "ТС прибыло на погрузку"
        And I moving status forward "ТС прибыло на погрузку"
        And I open the url "/logout"

        #заходим юзером с ролью склад1 и переходим в накладную
        Given I log in as a "<login sklad>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
        When I click in random element "random number"
        And thes element "Грид накладной статус Собрана" contains the text "Собрана"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в статусе Прибыло на погрузку"
        Then I click on this element "Линк перевозки в статусе Прибыло на погрузку"
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС убыло с погрузки"
        And I moving status forward "ТС убыло с погрузки"
        Then I click on this element "RemoveFilter"
        And I open the url "/logout"

        #заходим юзером с ролью склад2 и переходим в накладную
        Given I log in as a "<login sklad2>" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        And I expect this element "Loader" is not visible
        When I click in random element "random number"
        And thes element "Грид накладной" contains the text "Отгружена"
        # кликнуть на линк перевозки
        And I scroll to elements "Линк перевозки в статусе Убыло с погрузки"
        Then I click on this element "Линк перевозки в статусе Убыло с погрузки"
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС прибыло на выгрузку"
        And I moving status forward "ТС прибыло на выгрузку"
        # кликнуть на линк перевозки и сменить статус накладной на принята
        And I scroll to elements "Линк маршрут перевозки"
        Then I click on this element "Линк маршрут перевозки"
        And I scroll to elements "Линк накладной"
        And I click on this element "Сменить статус накладной на Принята"
        And I accept the alertbox
        And I expect this element "Loader" is not visible
        # перевести статус перевозки "ТС убыло с выгрузки"
        And I moving status forward "ТС убыло с выгрузки"
        Then I click on this element "RemoveFilter"
        And I open the url "/logout"

        Examples:
            | TK    | shipping warehouse | delivery warehouse                         | vendorcode | number vendorcode | login coordinator         | login customer       | login sklad | login sklad2 |
            | ИТЕКО | Склад Истры        | Пензенская область,Пенза г Бийская ул,д.27 | 1102001281 | 7000              | Bac Transport Coordinator | Bac Customer Service | Bac Sklad   | Bac Sklad2   |

    Scenario: 12_Check Notifications: ч3
        # Check mail
        And I open the sites "Майлнезия"
        #проверяем письма у транспортного координатора
        And I add "testmail16" to the inputfields "В поле поиска email"
        When I click on this element "Стрелка входа"
        And I have closed all but the first tab
        And I wait on mailnesia elements "testmail16"
        And I expects that element "Грид Mailnesia" contains the text "Перевозка подтверждена (Artlogics_INFO_#2)"
        And I expects that element "Грид Mailnesia" contains the text "Artlogics_INFO_#5"
        Then I delete all mails in mailnesia

        #проверяем письма у кастомер сервиса
        And I add "testmail17" to the inputfields "В поле поиска email"
        When I click on this element "Стрелка входа"
        And I have closed all but the first tab
        And I wait on mailnesia elements "testmail17"
        And I expects that element "Грид Mailnesia" contains the text "Перевозка подтверждена (Artlogics_INFO_#2)"
        And I expects that element "Грид Mailnesia" contains the text "Artlogics_INFO_#5"
        Then I delete all mails in mailnesia

        #проверяем письма у транспортной компании
        And I add "testmail18" to the inputfields "В поле поиска email"
        Then I click on this element "Стрелка входа"
        And I have closed all but the first tab
        And I wait on mailnesia elements "testmail18"
        And I expects that element "Грид Mailnesia" contains the text "Artlogics_INFO_#6"
        Then I delete all mails in mailnesia

       #проверяем письма у склада отгрузки
        And I add "testmail19" to the inputfields "В поле поиска email"
        Then I click on this element "Стрелка входа"
        And I have closed all but the first tab
        And I wait on mailnesia elements "testmail19"
        And I expects that element "Грид Mailnesia" contains the text "Artlogics_INFO_#5"
        Then I delete all mails in mailnesia
