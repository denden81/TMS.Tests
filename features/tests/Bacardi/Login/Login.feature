@bacardi
@office

Feature: Check login
    As a Transport Coordinator
    I want to check login

    Scenario: Check login Coordinator
        Given I log in as a "Bac Transport Coordinator" on homepage
        And I open the url "/logout"

    Scenario: Check login Customer
        Given I log in as a "Bac Customer Service" on homepage
        And I open the url "/logout"

    Scenario: Check login Transport company
        Given I log in as a "Bac Transport Company" on homepage
        And I open the url "/logout"

    Scenario: Check login Sklad
        Given I log in as a "Bac Sklad" on homepage
        And I open the url "/logout"

    Scenario: Check login Sklad2
        Given I log in as a "Bac Sklad2" on homepage
        And I open the url "/logout"
