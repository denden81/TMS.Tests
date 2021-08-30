import { Given } from '@cucumber/cucumber';

import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkIsEmpty from '../support/check/checkIsEmpty';
import checkContainsText from '../support/check/checkContainsText';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkElementExists from '../support/check/checkElementExists';
import checkEqualsText from '../support/check/checkEqualsText';
import checkModal from '../support/check/checkModal';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkUrl from '../support/check/checkURL';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isDisplayed from '../support/check/isDisplayed';
import openWebsite from '../support/action/openWebsite';
import setWindowSize from '../support/action/setWindowSize';
import LoginPage from "../pageobjects/login.page";
import LoginPass from "../pageobjects/login.pass";
import MainPage from "../pageobjects/main.page";
import loginAdmin from '../support/action/loginAdmin';

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^I open the sites "([^"]*)?"$/,
    (adress) => {
        let url;
        if (adress === "Майлнезия") {
            url = "https://mailnesia.com/";
        }
        if (adress === "Майлнезия testmail") {
            url = "https://mailnesia.com/mailbox/testuser777777";
        }
        browser.url(url);
    }
);
Given(
    /^the element "([^"]*)?" is( not)* displayed$/,
    isDisplayed
);

Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Given(
    /^the checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Given(
    /^there is (an|no) element "([^"]*)?" on the page$/,
    checkElementExists
);

Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Given(
    /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    compareText
);

Given(
    /^thes (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    function containsText(element, selector, falseCase, text) {
        if (selector === "Грид накладной") {
            selector = MainPage.footerWaybillsGrid;
        }
        if (selector === "Грид накладной статус Не проверена") {
            selector = MainPage.gridWaybillsStatusCreated;
        }
        if (selector === "Грид накладной статус Создана") {
            selector = MainPage.gridWaybillsStatusValidated;
        }
        if (selector === "Грид накладной статус В перевозке") {
            selector = MainPage.gridWaybillsStatusActive;
        }
        if (selector === "Грид накладной статус В подборке") {
            selector = MainPage.gridWaybillsStatusPackaging;
        }
        if (selector === "Грид накладной статус Собрана") {
            selector = MainPage.gridWaybillsStatusPacked;
        }
        if (selector === "Грид накладной статусе Отгружена") {
            selector = MainPage.gridWaybillsStatusShipped;
        }
        if (selector === "Грид накладной статусе Доставлена") {
            selector = MainPage.gridWaybillsStatusDelivered;
        }
        if (selector === "Грид накладной статусе Принята") {
            selector = MainPage.gridWaybillsStatusAccepted;
        }
        if (selector === "Грид накладной статусе В архиве") {
            selector = MainPage.gridWaybillsStatusArchived;
        }
        if (selector === "Грид перевозки весь") {
            selector = MainPage.gridCarriersAll;
        }
        if (selector === "Грид перевозки статус Создана") {
            selector = MainPage.gridCarriersStatusCreated;
        }
        if (selector === "Грид перевозки статусе ТС заказано") {
            selector = MainPage.gridCarriersStatusVehicleOrdered;
        }
        if (selector === "Грид перевозки статусе Подтверждена") {
            selector = MainPage.gridCarriersStatusVehicleConfirmed;
        }
        if (selector === "Грид заявки на перевозку статусе Подтверждена") {
            selector = MainPage.gridCarriersRequestStatusVehicleConfirmed;
        }
        if (selector === "Грид перевозки статус ТС прибыло на погрузку") {
            selector = MainPage.gridCarriersStatusVehicleArrivedToLoading;
        }
        if (selector === "Грид перевозки статус ТС убыло с погрузки") {
            selector = MainPage.gridCarriersStatusVehicleDepartedFromLoading;
        }
        if (selector === "Грид перевозки статус ТС прибыло на выгрузку") {
            selector = MainPage.gridCarriersStatusVehicleArrivedToUploading;
        }
        if (selector === "Грид перевозки статус ТС убыло с выгрузки") {
            selector = MainPage.gridCarriersStatusVehicleDepartedFromUploading;
        }
        if (selector === "Грид перевозки статусе Перевозка завершена") {
            selector = MainPage.gridCarriersStatusFinished;
        }
        if (selector === "Грид перевозки статус Сумма подтверждена") {
            selector = MainPage.gridCarriersStatusPriceConfirmed;
        }
        if (selector === "Грид перевозки статус Счет выставлен") {
            selector = MainPage.gridCarriersStatusBilled;
        }
        if (selector === "Грид перевозки статус В архиве") {
            selector = MainPage.gridCarriersStatusArchived;
        }
        if (selector === "Грид перевозки откат статуса") {
            selector = MainPage.gridCarriersRevertStatus;
        }
        if (selector === "Грид перевозки статус ТС прибыло на таможню") {
            selector = MainPage.gridCarriersStatusArrivedToCustom;
        }
        if (selector === "Грид перевозки статус ДC получено") {
            selector = MainPage.gridCarriersStatusDeclarationRecieved;
        }
        if (selector === "Грид перевозки статус ДТ подана") {
            selector = MainPage.gridCarriersStatusDeclarationSent;
        }
        if (selector === "Грид перевозки статус ДТ выпущена") {
            selector = MainPage.gridCarriersStatusDeclarationIssue;
        }
        if (selector === "Грид перевозки статус ТС убыло с СВХ") {
            selector = MainPage.gridCarriersStatusVehicleDepartedFromCustom;
        }
        if (selector === "Подтвердите действие во всплываюшем окне перевозки") {
            selector = MainPage.popUpConfirmCopyInShipping;
        }
        if (selector === "Окно создания новой перевозки") {
            selector = MainPage.footerWaybills;
        }
        if (selector === "Выбор склада в окне новой перевозки") {
            selector = MainPage.footerSearchWarehouses;
        }
        if (selector === "Выбор водителя в перевозке") {
            selector = MainPage.footerDriver;
        }
        if (selector === "Total сумма по инвойсам") {
            selector = MainPage.fieldTotalSummInvoice;
        }
        if (selector === "Количество артикулов перевозки") {
            selector = MainPage.fieldCountArticlesTransportation;
        }
        if (selector === "Количество штук перевозки") {
            selector = MainPage.fieldCountPiecesTransportation;
        }
        if (selector === "Окно удаления позиции накладной") {
            selector = MainPage.windowDeleteMarkingWaybills;
        }
        if (selector === "Масса накладной плановая брутто") {
            selector = MainPage.plannedInvoiceWeightGross;
        }
        if (selector === "Окно невозможности объединения ИЕ накладных") {
            selector = MainPage.windowNotAddWaybillsIEShipping;
        }
        if (selector === "Грид заготовки артикулы") {
            selector = MainPage.gridPerformMarking
        }
        if (selector === "Сумма товаров заготовки") {
            selector = MainPage.summGoodsPerform
        }
        if (selector === "Фрахт заготовки") {
            selector = MainPage.freightPerform
        }
        if (selector === "Сумма страховки заготовки") {
            selector = MainPage.amountOfInsurance
        }
        if (selector === "Всего итог заготовки") {
            selector = MainPage.carriagePreformTotalItog
        }
        if (selector === "Вес нетто, кг") {
            selector = MainPage.weightNetPreform
        }
        if (selector === "Вес брутто, кг") {
            selector = MainPage.weightGrossPreform
        }
        if (selector === "Грид Mailnesia") {
            selector = MainPage.gridMailnesia
        }
        if (text === "переведена в статус Потеряна") {
            text = 'переведена в статус "Потеряна"';
        }
        if (text === "переведена в статус Срыв поставки") {
            text = 'переведена в статус "Срыв поставки"';
        }
        if (text === "переведена в статус Холостая подача") {
            text = 'переведена в статус "Холостая подача"';
        }
        if (text === "переведена в статус Прервана") {
            text = 'переведена в статус "Прервана"';
        }
        if (text === "добавлена дополнительная затрата типа Возврат в размере") {
            text = 'добавлена дополнительная затрата типа "Возврат" в размере';
        }

        if (text === "добавлена дополнительная затрата типа Возврат охраны в размере") {
            text = 'добавлена дополнительная затрата типа "Возврат охраны"';
        }
        if (text === "добавлена дополнительная затрата типа Возврат паллет в размере") {
            text = 'добавлена дополнительная затрата типа "Возврат паллет" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Дополнительная точка выгрузки в размере") {
            text = 'добавлена дополнительная затрата типа "Дополнительная точка выгрузки" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Охрана в размере") {
            text = 'добавлена дополнительная затрата типа "Охрана" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Простой в размере") {
            text = 'добавлена дополнительная затрата типа "Простой" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Самовыгрузка в размере") {
            text = 'добавлена дополнительная затрата типа "Самовыгрузка" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Страхование в размере") {
            text = 'добавлена дополнительная затрата типа "Страхование" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Холостая подача в размере") {
            text = 'добавлена дополнительная затрата типа "Холостая подача" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Другое 1 в размере") {
            text = 'добавлена дополнительная затрата типа "Другое 1" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Другое 2 в размере") {
            text = 'добавлена дополнительная затрата типа "Другое 2" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Другое 3 в размере") {
            text = 'добавлена дополнительная затрата типа "Другое 3" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Другое 4 в размере") {
            text = 'добавлена дополнительная затрата типа "Другое 4" в размере';
        }
        if (text === "добавлена дополнительная затрата типа Другое 5 в размере") {
            text = 'добавлена дополнительная затрата типа "Другое 5" в размере';
        }
        if (selector === "tmsGridCellLeft") {
            selector = MainPage.tmsGridCellLeft;
        }
        if (selector === "Название артикула") {
            selector = MainPage.nameMarking;
        }
        if (selector === "clientOrder") {
            selector = MainPage.clientOrderGrid;
        }
        Loaders("Loader");
        browser.pause(2000);
        $(selector).waitForExist(120000);
        $(selector).getText(text);
        //checkContainsText(element, selector, text); выдавал ошибку в массиве в мультиточках.
    }
);

Given(
    /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Given(
    /^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Given(
    /^the page url is( not)* "([^"]*)?"$/,
    checkUrl
);

Given(
    /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Given(
    /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
    checkCookieContent
);

Given(
    /^the cookie "([^"]*)?" does( not)* exist$/,
    checkCookieExists
);

Given(
    /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
);

Given(
    /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
);

Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    setWindowSize
);

Given(
    /^I have closed all but the first (window|tab)$/,
    closeAllButFirstTab
);

Given(
    /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);
Given(
    /^I log in as a user Administrator on homepage$/,
    loginAdmin
);

Given(
    /^I log in as a "([^"]*)?" on homepage$/,
    function (elementL) {
        let elementLogin;
        if (elementL === "Consumer Transport Coordinator") {
            elementLogin = LoginPass.loginConsCoord;
        }
        if (elementL === "MD Transport Coordinator") {
            elementLogin = LoginPass.loginMDCoord;
        }
        if (elementL === "Consumer Customer Service") {
            elementLogin = LoginPass.loginConsCustom;
        }
        if (elementL === "Consumer Transport Company") {
            elementLogin = LoginPass.loginConsTK;
        }
        if (elementL === "Consumer Sklad") {
            elementLogin = LoginPass.loginConssklad;
        }
        if (elementL === "Consumer Sklad2") {
            elementLogin = LoginPass.loginConssklad2;
        }
        if (elementL === "Consumer Archiveman") {
            elementLogin = LoginPass.loginConsArch;
        }
        if (elementL === "MD broker") {
            elementLogin = LoginPass.loginMDBroker;
        }
        if (elementL === "MD broker2") {
            elementLogin = LoginPass.loginMDBroker2;
        }
        if (elementL === "MD sklad") {
            elementLogin = LoginPass.loginMDSklad;
        }
        if (elementL === "Ecolab Transport Coordinator") {
            elementLogin = LoginPass.loginEcoCoord;
        }
        if (elementL === "Ecolab Customer Service") {
            elementLogin = LoginPass.loginEcoCustom;
        }
        if (elementL === "Ecolab Transport Company") {
            elementLogin = LoginPass.loginEcoTK;
        }
        if (elementL === "Ecolab Sklad") {
            elementLogin = LoginPass.loginEcosklad;
        }
        if (elementL === "Ecolab Sklad2") {
            elementLogin = LoginPass.loginEcosklad2;
        }
        if (elementL === "Ecolab Archiveman") {
            elementLogin = LoginPass.loginEcoArch;
        }
        if (elementL === "Ukr Transport Coordinator") {
            elementLogin = LoginPass.loginUkrCoord;
        }
        if (elementL === "Ukr Customer Service") {
            elementLogin = LoginPass.loginUkrCustom;
        }
        if (elementL === "Ukr Transport Company") {
            elementLogin = LoginPass.loginUkrTK;
        }
        if (elementL === "Ukr Sklad") {
            elementLogin = LoginPass.loginUkrsklad;
        }
        if (elementL === "Ukr Sklad2") {
            elementLogin = LoginPass.loginUkrsklad2;
        }
        if (elementL === "Ukr Archiveman") {
            elementLogin = LoginPass.loginUkrArch;
        }
        if (elementL === "Bac Transport Coordinator") {
            elementLogin = LoginPass.loginBacCoord;
        }
        if (elementL === "Bac Customer Service") {
            elementLogin = LoginPass.loginBacCustom;
        }
        if (elementL === "Bac Transport Company") {
            elementLogin = LoginPass.loginBacTK;
        }
        if (elementL === "Bac Sklad") {
            elementLogin = LoginPass.loginBacsklad;
        }
        if (elementL === "Bac Sklad2") {
            elementLogin = LoginPass.loginBacsklad2;
        }
        if (elementL === "Bac Archiveman") {
            elementLogin = LoginPass.loginBacArch;
        }
        if (elementL === "Vis Transport Coordinator") {
            elementLogin = LoginPass.loginVisCoord;
        }
        if (elementL === "Vis Customer Service") {
            elementLogin = LoginPass.loginVisCustom;
        }
        if (elementL === "Vis Transport Company") {
            elementLogin = LoginPass.loginVisTK;
        }
        if (elementL === "Vis Sklad") {
            elementLogin = LoginPass.loginVissklad;
        }
        if (elementL === "Vis Sklad2") {
            elementLogin = LoginPass.loginVissklad2;
        }
        if (elementL === "Vis Archiveman") {
            elementLogin = LoginPass.loginVisArch;
        }
        browser.url("/");
        browser.pause(2000);
        $(MainPage.usernameMain).waitForExist(90000);
        $(MainPage.passwordMain).waitForExist(90000);
        $(MainPage.usernameMain).setValue(elementLogin);
        $(MainPage.passwordMain).setValue( LoginPass.password);
        $(MainPage.submitMain).click();
        LoginPage.Office.waitForExist(90000);
        browser.pause(5000);
        //если есть окно про апдейт, нажать продолжить.
        if ($(MainPage.messageAboutUpdateVersion).isDisplayed()) {
            $(MainPage.buttonNextInMessage).click();
        }
        Loaders("Loader");
    }
);
function Loaders(element) {
    let element1;
    if (element === "Loader") {
        element = MainPage.Loader;
        element1 = MainPage.bigLoader;
    }
    browser.pause(1000);
    $(element).waitForDisplayed({ timeout: 90000,reverse: true });
    $(element1).waitForDisplayed({ timeout: 90000,reverse: true });
    browser.pause(1000);
}
