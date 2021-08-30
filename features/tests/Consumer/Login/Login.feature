@consumer
@office

Feature: Check alternative filter
    As a Transport Coordinator
    I want to check Login

    Scenario: Check login Coordinator
        Given I log in as a "Consumer Transport Coordinator" on homepage
        And I open the url "/logout"

    Scenario: Check login Customer
        Given I log in as a "Consumer Customer Service" on homepage
        And I open the url "/logout"

    Scenario: Check login Transport company
        Given I log in as a "Consumer Transport Company" on homepage
        And I open the url "/logout"

    Scenario: Check login Sklad
        Given I log in as a "Consumer Sklad" on homepage
        And I open the url "/logout"

    Scenario: Check login Sklad2
        Given I log in as a "Consumer Sklad2" on homepage
        And I open the url "/logout"
