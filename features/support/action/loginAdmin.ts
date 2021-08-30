/**
 * I log in as a user on homepage
 *
 */
import LoginPass from '../../pageobjects/login.pass';
import MainPage from '../../pageobjects/main.page';
import LanguagePage from '../../pageobjects/language.page';
import checkContainsText from '../../support/check/checkContainsText';
import {click, element, text} from "webdriverio";
import selectOption from '../../support/action/selectOption';


module.exports = () => {

    browser.url('/');
    $(MainPage.usernameMain).setValue(LoginPass.loginAdmin);
    $(MainPage.passwordMain).setValue(LoginPass.passwordAdmin);
    $(MainPage.submitMain).click();
    checkContainsText(element, MainPage.loginBox, LanguagePage.selectUsers);
    $(MainPage.selectUsers).waitForDisplayed();
    selectOption('value',LoginPass.valueAdmin,MainPage.selectUsers);
    $(MainPage.submitAdmin).click();
    $(MainPage.buttonAdd).waitForDisplayed();
    checkContainsText(element, MainPage.footerMain, LanguagePage.Users);
};
