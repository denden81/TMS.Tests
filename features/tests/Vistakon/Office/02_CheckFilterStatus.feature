@vistakon
@office

Feature: Check filter status
    As a Transport Coordinator
    I want to check status filter

    Scenario: 02_Check Filter Status
        Given I log in as a "Vis Transport Coordinator" on homepage
        And I expect this element "Loader" is not visible
        And I click on this element "predstavlenie1"
        And I wait on elements "Office"
        When I click on this element "RemoveFilter"
        And I expect this element "Loader" is not visible
        #проверка фильтра "Не проверена" у колонки "Статус накладной"
        And I click on this element "statusOfDeliveryNote"
        And I click on this element "Не проверена"
        And thes element "tmsGridCellLeft" contains the text "Не проверена"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Создана" у колонки "Статус накладной"
        When I click on this element "statusOfDeliveryNote"
        And I click on this element "Создана"
        And thes element "tmsGridCellLeft" contains the text "Создана"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
         #проверка фильтра "В перевозке" у колонки "Статус накладной"
        When I click on this element "statusOfDeliveryNote"
        And I click on this element "В перевозке"
        And thes element "tmsGridCellLeft" contains the text "В перевозке"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "В подборке" у колонки "Статус накладной"
        When I click on this element "statusOfDeliveryNote"
        And I click on this element "В подборке"
        And thes element "tmsGridCellLeft" contains the text "В подборке"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Собрана" у колонки "Статус накладной"
        When I click on this element "statusOfDeliveryNote"
        And I click on this element "Собрана"
        And thes element "tmsGridCellLeft" contains the text "Собрана"
        And I click on this element "RemoveFilter"
        Then I expect this element "Loader" is not visible
        #проверка фильтра "Отгружена" у колонки "Статус накладной"
       #When I click on this element "statusOfDeliveryNote"
       # And I click on this element "Отгружена"
       # And I expect this element "Loader" is not visible
       # And I expects that element "tmsGridCellLeft" contains the text "Отгружена"
       # And I click on this element "RemoveFilter"
       #Then I expect this element "Loader" is not visible
       #проверка фильтра "Доставлена" у колонки "Статус накладной"
      # When I click on this element "statusOfDeliveryNote"
      #  And I click on this element "Доставлена"
      #  And I expect this element "Loader" is not visible
      #  And I expects that element "tmsGridCellLeft" contains the text "Доставлена"
      #  And I click on this element "RemoveFilter"
      # Then I expect this element "Loader" is not visible
        #проверка фильтра "Принята" у колонки "Статус накладной"
      # When I click on this element "statusOfDeliveryNote"
      #  And I click on this element "Принята"
      #  And I expect this element "Loader" is not visible
      #  And I expects that element "tmsGridCellLeft" contains the text "Принята"
      #  And I click on this element "RemoveFilter"
      # Then I expect this element "Loader" is not visible
        #проверка фильтра "В архиве" у колонки "Статус накладной"
     #  When I click on this element "statusOfDeliveryNote"
     #   And I click on this element "В архиве"
     #   And I expect this element "Loader" is not visible
     #   And I expects that element "tmsGridCellLeft" contains the text "В архиве"
     #   And I click on this element "RemoveFilter"
     #  Then I expect this element "Loader" is not visible
