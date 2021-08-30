@vistakon
@office

Feature: Add user
    As a admin
    I want to be add user and check login this
    random name

    Scenario: 01_Create User: ч1
        Given I log in as a user Administrator on homepage
        When I click on this element "add"
        And I click on this element "ConsumerAdd"
        And I add "random" to the inputfields "inputLogin"
        And I add "password" to the inputfields "inputPassword"
        And I add "testmail" to the inputfields "inputEmail"
        And I add "testFullName" to the inputfields "inputFullName"
        And I add "Comment cat" to the inputfields "inputComment"
        And I add "random" to the inputfields "userCode"
        And I click on this element "inputSubCompany"
        And I click on this element "ConsumerSub"
        And I click on this element "inputRoleToggle"
        And I click on this element "inputRoleTK"
        And I click on this element "buttonSave"
       And I open the url "/logout"

    Scenario: 01_Create User: ч2
        # Check login new user and change pass
        Given I open the url "/"
        When I add "random" to the inputfields "username"
        And  I add "password" to the inputfields "password"
        And  I click on this button "submit"
        Then I expects that element "footer" contains the text "Кабинет"
# кнопка профайл не нажимается из за обновления страницы
        #When I click on this element "buttonProfile"
        #And I add "password111AA" to the inputfields "profileNewPassword"
        #And I add "password111AA" to the inputfields "profileNewPasswordAgain"
        #And I click on this element "profileSubmit"
        #And I wait on elements "passwordIsChange"
        #And I open the url "/logout"
        #Then I wait on elements "username"

    #Scenario: 01_Create User: ч3
        # Check login new user and new password
       # Given I open the url "/"
       # When I add "random" to the inputfields "username"
       # And  I add "password111AA" to the inputfields "password"
       # And  I click on this button "submit"
       # Then I expects that element "footer" contains the text "Кабинет"
