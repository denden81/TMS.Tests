import {Then} from '@cucumber/cucumber';

import checkClass from '../support/check/checkClass';
import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkIsEmpty from '../support/check/checkIsEmpty';
import checkContainsText from '../support/check/checkContainsText';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkEqualsText from '../support/check/checkEqualsText';
import checkFocus from '../support/check/checkFocus';
import checkInURLPath from '../support/check/checkInURLPath';
import checkIsOpenedInNewWindow from '../support/check/checkIsOpenedInNewWindow';
import checkModal from '../support/check/checkModal';
import checkModalText from '../support/check/checkModalText';
import checkNewWindow from '../support/check/checkNewWindow';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkFontProperty from '../support/check/checkFontProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkTitleContains from '../support/check/checkTitleContains';
import checkURL from '../support/check/checkURL';
import checkURLPath from '../support/check/checkURLPath';
import checkWithinViewport from '../support/check/checkWithinViewport';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isExisting from '../support/check/isExisting';
import isVisible from '../support/check/isDisplayed';
import waitFor from '../support/action/waitFor';
import waitForVisible from '../support/action/waitForDisplayed';
import checkIfElementExists from '../support/lib/checkIfElementExists';
import LoginPage from "../pageobjects/login.page";
import LoginPass from "../pageobjects/login.pass";
import MainPage from "../pageobjects/main.page";

function Loaders(element) {
    let element1;
    if (element === "Loader") {
        element = MainPage.Loader;
        element1 = MainPage.bigLoader;
    }
    browser.pause(1000);
    $(element).waitForDisplayed({timeout: 90000, reverse: true});
    $(element1).waitForDisplayed({timeout: 90000, reverse: true});
    browser.pause(1000);
}

Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Then(
    /^I expect that the title( not)* contains "([^"]*)?"$/,
    checkTitleContains
);

Then(
    /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
    checkIfElementExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* displayed$/,
    isVisible
);

Then(
    /^I expect that element "([^"]*)?" becomes( not)* displayed$/,
    waitForVisible
);

Then(
    /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
    checkWithinViewport
);

Then(
    /^I expect that element "([^"]*)?" does( not)* exist$/,
    isExisting
);

Then(
    /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
    compareText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Then(
    /^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Then(
    /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Then(
    /^I expect that the url is( not)* "([^"]*)?"$/,
    checkURL
);

Then(
    /^I expect that the path is( not)* "([^"]*)?"$/,
    checkURLPath
);

Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/,
    checkInURLPath
);

Then(
    /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Then(
    /^I expect that the font( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkFontProperty
);

Then(
    /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
    checkCookieContent
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* exists$/,
    checkCookieExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
);

Then(
    /^I expect that element "([^"]*)?" is( not)* positioned at ([\d+.?\d*]+)px on the (x|y) axis$/,
    checkOffset
);

Then(
    /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
    checkClass
);

Then(
    /^I expect a new (window|tab) has( not)* been opened$/,
    checkNewWindow
);

Then(
    /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
    checkIsOpenedInNewWindow
);

Then(
    /^I expect that element "([^"]*)?" is( not)* focused$/,
    checkFocus
);

Then(
    /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be displayed|contain a text|contain a value|exist))*$/,
    {
        wrapperOptions: {
            retry: 3,
        },
    },
    waitFor
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
    checkModalText
);

Then(
    /^I wait on elements "([^"]*)?"*$/,
    function (element) {
        if (element === "buttonEnter") {
            element = LoginPage.buttonEnter;
        }
        if (element === "passwordIsChange") {
            element = LoginPage.passwordIsChange;
        }
        if (element === "username") {
            element = LoginPage.username;
        }
        if (element === "iconEmptyAlternativeFilter") {
            element = LoginPage.iconEmptyAlternativeFilter;
        }
        if (element === "iconFullAlternativeFilter") {
            element = LoginPage.iconFullAlternativeFilter;
        }
        if (element === "Office") {
            element = LoginPage.Office;
            browser.pause(4000)
        }
        if (element === "mainCheckboxIsChecked") {
            element = LoginPage.mainCheckboxIsChecked;
        }
        if (element === "secondCheckboxIsChecked") {
            element = LoginPage.secondCheckboxIsChecked;
        }
        if (element === "firstCheckboxIsChecked") {
            element = LoginPage.firstCheckboxIsChecked;
        }
        if (element === "multiselectPanel") {
            element = LoginPage.multiselectPanel;
        }
        if (element === "OrdersClose") {
            element = LoginPage.ordersClose;
        }
        if (element === "PopUp") {
            element = LoginPage.popUpConfirmCopyInShipping;
        }
        if (element === "Proforma Grid") {
            element = LoginPage.proformaGrid;
        }
        if (element === "Client Orders Grid") {
            element = LoginPage.clientOrdersGrid
        }
        if (element === "Preform Grid") {
            element = LoginPage.pr??formGrid
        }
        if (element === "Planning Grid") {
            element = LoginPage.planningGrid
        }
        if (element === "Revert Status") {
            element = LoginPage.gridCarriersRevertStatus
        }
        element.waitForExist(20000);
        Loaders("Loader");
    }
);

Then(
    /^I wait on mailnesia elements "([^"]*)?"*$/,
    function (element) {
        if (element === "testmail") {
            element = LoginPage.mailnesiaMail;
        }
        if (element === "testmail1") {
            element = LoginPage.mailnesiaMail1;
        }
        if (element === "testmail2") {
            element = LoginPage.mailnesiaMail2;
        }
        if (element === "testmail3") {
            element = LoginPage.mailnesiaMail3;
        }
        if (element === "testmail4") {
            element = LoginPage.mailnesiaMail4;
        }
        if (element === "testmail5") {
            element = LoginPage.mailnesiaMail5;
        }
        if (element === "testmail6") {
            element = LoginPage.mailnesiaMail6;
        }
        if (element === "testmail7") {
            element = LoginPage.mailnesiaMail7;
        }
        if (element === "testmail8") {
            element = LoginPage.mailnesiaMail8;
        }
        if (element === "testmail9") {
            element = LoginPage.mailnesiaMail8;
        }
        if (element === "testmail10") {
            element = LoginPage.mailnesiaMail10;
        }
        if (element === "testmail11") {
            element = LoginPage.mailnesiaMail11;
        }
        if (element === "testmail12") {
            element = LoginPage.mailnesiaMail12;
        }
        if (element === "testmail13") {
            element = LoginPage.mailnesiaMail13;
        }
        if (element === "testmail14") {
            element = LoginPage.mailnesiaMail14;
        }
        if (element === "testmail15") {
            element = LoginPage.mailnesiaMail15;
        }
        if (element === "testmail16") {
            element = LoginPage.mailnesiaMail16;
        }
        if (element === "testmail17") {
            element = LoginPage.mailnesiaMail17;
        }
        if (element === "testmail18") {
            element = LoginPage.mailnesiaMail18;
        }
        if (element === "testmail19") {
            element = LoginPage.mailnesiaMail19;
        }
        if (element === "testmail20") {
            element = LoginPage.mailnesiaMail20;
        }
        if (element === "testmail21") {
            element = LoginPage.mailnesiaMail21;
        }
        if (element === "testmail22") {
            element = LoginPage.mailnesiaMail22;
        }
        if (element === "testmail23") {
            element = LoginPage.mailnesiaMail23;
        }
        if (element === "testmail24") {
            element = LoginPage.mailnesiaMail24;
        }
        element.waitForExist(20000);
    }
);
Then(
    /^I wait the element "([^"]*)?" to not be checked*$/,
    function (element) {
        if (element === "?? ?????????????????? ??????????????????") {
            element = MainPage.buttonInTransportation;
        }
        if (element === "?? ???????????????? ??????????????????") {
            element = MainPage.buttonInPackaging;
        }
        if (element === "???? ???????????????? ?? ??????????????????") {
            element = MainPage.buttonVehicleIsOrdered;
        }
        if (element === "???? ?????????????? ???? ???????????????? ?? ??????????????????") {
            element = MainPage.buttonVehicleArrivedToLoading;
        }
        if (element === "?????????????????? ????") {
            element = MainPage.waybillsIEInbound;
        }
        if (element === "????????????????????????") {
            element = MainPage.linkPlanned;
        }
        $(element).waitForExist({timeout: 10000, reverse: true});
    }
);
Then(
    /^I expect this element "([^"]*)?" is not visible$/,
    function Loaders(element) {
        let element1;
        if (element === "Loader") {
            element = MainPage.Loader;
            element1 = MainPage.bigLoader;
        }
        browser.pause(1000);
        $(element).waitForDisplayed({timeout: 90000, reverse: true});
        $(element1).waitForDisplayed({timeout: 90000, reverse: true});
        browser.pause(1000);
    }
);

Then(
    /^I check filter date$/,
    function () {
        var date = new Date();
        let monthD, zero, zeroM, datayy, datadD;
        LoginPage.filterData.waitForExist();
        //???????????????? ???????? ???? ????????
        let datadd = $(MainPage.filterData).getValue();
        //?????????????????? ?? ????????, ?????????????? +1 ?? ???????????? ????????????.
        monthD = (date.getMonth() + 1);
        // ?????????????????? ?????? ?????????? ?????????? ???????? ???????????? ?? ??????????????, ???? ?????????????? ?????????????? ?????????????? -2 ???????????????? ?? ???????????????????????????? ????????????????????,?????????????? ???????????????????? +12.
        // ?? ???? ???????? ???????????????? 1.
        datadD = date.getDate();
        datayy = date.getFullYear();
        if (monthD <= 2) {
            monthD = monthD + 12;
            datayy = datayy - 1;
        }
        //???????????????? 2 ???????????? ???? ???????????? ???????????? ??????????????.
        monthD = monthD - 2;
        //???????? ???????? ????????????????????, ???? ???? ?????????????????? 0
        zero = String("");
        zeroM = String("");
        if (datadD < 10) {
            zero = String("0")
        }
        //???????? ?????????? ????????????????????, ???? ???? ?????????????????? 0
        if (monthD < 10) {
            zeroM = String("0")
        }
        //?????????????????????? ???????????????? ???????? ?????? ??????????????????
        let datadd2 = (zero + datadD + "." + zeroM + monthD + "." + datayy);
        //???????????????? ?????????????????? ???????? ???? 10 ????????????
        datadd = (String(datadd)).slice(0, 10);
        // ???????????????????? ???????? ???????????????????? ?? ???????? ???? ??????????????.
        if (datadd2 = !datadd) {
            throw new Error("Filter data is not correct");
        }
    }
);
Then(
    /^I set order date "([^"]*)?"$/,
    function (selector) {
        if (selector === "from month early") {
            //???????????????? ???? ?????????? ????????????, 1 ??????????.
            LoginPage.orderDataFromIcon.click();
            browser.pause(1500);
            LoginPage.arrowLeftInDataPicker.click();
            browser.pause(1500);
            LoginPage.day1InDataPicker.click();
            browser.pause(1500);
            LoginPage.orderDataFromIcon.click();
            browser.pause(1500);
        }
        if (selector === "from/to month early") {
            //???????????????? ???? ?????????? ????????????, 1 ?????????? ????.
            LoginPage.orderDataFromIcon.click();
            browser.pause(1500);
            LoginPage.day1InDataPicker.click();
            browser.pause(1500);
            LoginPage.orderDataFromIcon.click();
            browser.pause(1500);
            //???????????????? ???? ?????????? ????????????, 1 ?????????? ????.
            LoginPage.orderDataToIcon.click();
            browser.pause(1500);
            LoginPage.arrowLeftInDataPicker.click();
            browser.pause(1500);
            LoginPage.arrowLeftInDataPicker.click();
            browser.pause(1500);
            LoginPage.day1InDataPicker.click();
            browser.pause(1500);
            LoginPage.orderDataToIcon.click();
            browser.pause(2500);
            LoginPage.buttonDeleteOrderUL.click();
            browser.pause(2500);
        }
    }
);

Then(
    /^I set date years "([^"]*)?"$/,
    function (element) {
        var z;
        var date = new Date();
        LoginPage.filterData.waitForExist();
        browser.pause(2000);
        //???????????????? ???????? ???? ????????
        let datayy = $(MainPage.filterData).getValue();
        let datayy2 = element;
        //???????????????? ???????? ???? ????????, ?? ??????????????????????
        datayy = (String(datayy)).slice(0, 10);
        //???????????????? ??????, ?? ??????????????????????
        datayy = (String(datayy)).slice(-4);
        // ?????????????? ?????????????? ?????? ????????????????,???????? ???????????? ?????????????? ?????? ???? ???????? ?????????????? ?? ????????
        z = datayy - datayy2;
        // ???????????? ?????????????? ????????????, ?????????????? ???????????????? ?? ??????????
        if (z > 0) {
            $(MainPage.filterCalendar).click();
            var i = 0;
            while (i < z) {
                $(MainPage.filterCalendarYearBack).click();
                browser.pause(1000);
                i++;
            }
            //???????????????? 20 ??????????
            browser.pause(1000);
            $(MainPage.filterCalendarDate).click();
        }
    }
);
Then(
    /^I set date years "([^"]*)?" orders$/,
    function (element) {
        var z;
        var date = new Date();
        LoginPage.filterData.waitForExist();
        browser.pause(2000);
        //???????????????? ???????? ???? ????????
        let datayy = $(MainPage.filterData).getValue();
        let datayy2 = element;
        //???????????????? ???????? ???? ????????, ?? ??????????????????????
        datayy = (String(datayy)).slice(0, 10);
        //???????????????? ??????, ?? ??????????????????????
        datayy = (String(datayy)).slice(-4);
        // ?????????????? ?????????????? ?????? ????????????????,???????? ???????????? ?????????????? ?????? ???? ???????? ?????????????? ?? ????????
        z = datayy - datayy2;
        // ???????????? ?????????????? ????????????, ?????????????? ???????????????? ?? ??????????
        if (z > 0) {
            $(MainPage.filterCalendarOrders).click();
            var i = 0;
            while (i < z) {
                $(MainPage.filterCalendarYearBack).click();
                browser.pause(1000);
                i++;
            }
            //???????????????? 20 ??????????
            browser.pause(1000);
            $(MainPage.filterCalendarDate).click();
        }
    }
);
Then(
    /^I check filter "([^"]*)?" carriage$/,
    function (value) {
        let typeElement;
        typeElement = LoginPage.fieldCarriage;
        typeElement.waitForExist();
        typeElement.setValue(value);
        browser.pause(3000);
        Loaders("Loader");
    }
);
Then(
    /^I set date (ship|delivery)( document)*( invoice)*( MO)*( filter planning)*$/,
    function (type, doc, inv, mo, filterPl) {
        var date = new Date();
        let monthD, datayy, locator, zero, zeroM, datadD;
        LoginPage.fieldDateShippingMO.waitForExist();
        datayy = date.getFullYear();
        datadD = date.getDate();
        //?????????????????? ?????????????? ?? ????????.?????????????? ???????????????????? +1
        if (type === 'ship') {
            monthD = (date.getMonth() + 1);
        }
        if (type === 'delivery') {
            monthD = (date.getMonth() + 3);
        }
        if (monthD > 13) {
            monthD = monthD - 13;
            datayy = datayy + 1;
        }
        if (monthD === 13) {
            monthD = monthD - 1;
        }
        //???????? ???????? ????????????????????, ???? ???? ?????????????????? 0
        zero = String("");
        zeroM = String("");
        if (datadD < 10) {
            zero = String("0")
        }
        //???????? ?????????? ????????????????????, ???? ???? ?????????????????? 0
        if (monthD < 10) {
            zeroM = String("0")
        }
        //???????????????? ?????????????? ???????? ???? ??????????????, ?? ??????????????????????
        let datadd2 = (zero + datadD + "." + (zeroM + (monthD)).slice(-2) + "." + datayy);
        // ?????????????????? ?????????? ???????? ?? ????.
        locator = LoginPage.fieldDateShippingMO;
        if (doc) {
            locator = LoginPage.fieldDateBackDocumentMO
        }
        if (inv) {
            locator = LoginPage.fieldDateInvoiceIE
        }
        if (filterPl) {
            locator = LoginPage.fieldDateInvoicePlanning
        }
        locator.setValue(datadd2);
    }
);

Then(
    /^I check date (ship|delivery) (ShipmentInvoicePlan|ShipmentTransportationPlan|DeliveryInvoicePlan|DeliveryTransportationPlan) MO$/,
    function (type, locator) {
        var date = new Date();
        let monthD, datayy, zero, zeroM, datadD;
        if (locator === 'ShipmentInvoicePlan') {
            locator = MainPage.dateAndTimeOfTheShipmentInvoicePlan
        }
        ;
        if (locator === 'ShipmentTransportationPlan') {
            locator = MainPage.dateAndTimeOfTheShipmentTransportationPlan
        }
        ;
        if (locator === 'DeliveryInvoicePlan') {
            locator = MainPage.dateAndTimeOfTheDeliveryInvoicePlan
        }
        ;
        if (locator === 'DeliveryTransportationPlan') {
            locator = MainPage.dateAndTimeOfTheDeliveryTransportationPlan
        }
        ;
        LoginPage.fieldOrderInWaybills.waitForExist();
        //???????????????? ???????? ???? ????????
        let datadd = $(locator).getText();
        //?????????????????? ?????????????? ?? ????????.
        if (type === 'ship') {
            monthD = (date.getMonth() + 1);
        }
        if (type === 'delivery') {
            monthD = (date.getMonth() + 3);
        }
        datadD = date.getDate();
        datayy = date.getFullYear();
        if (monthD > 13) {
            monthD = monthD - 13;
            datayy = datayy + 1;
        }
        if (monthD === 13) {
            monthD = monthD - 1;
        }
        //???????? ???????? ????????????????????, ???? ???? ?????????????????? 0
        zero = String("");
        zeroM = String("");
        if (datadD < 10) {
            zero = String("0")
        }
        //???????? ?????????? ????????????????????, ???? ???? ?????????????????? 0
        if (monthD < 10) {
            zeroM = String("0")
        }
        //???????????????? ?????????????? ???????? ???? ??????????????, ?? ??????????????????????
        let datadd2 = (zero + datadD + "." + (zeroM + (monthD)).slice(-2) + "." + datayy);
        // ???????????????? ?? ???????????????????? ???????? ??????????, ?????????? ???????????????? ???????????? ????????.
        datadd = (String(datadd)).slice(0, 10);
        // ???????????????????? ???????? ???????????????????? ?? ???????? ???? ??????????????.
        if (datadd2 = !datadd) {
            throw new Error("Data shipment/deliver is not correct");
        }
    }
);
Then(
    /^I check date back document MO$/,
    function () {
        var date = new Date();
        let monthD, datayy, zero, zeroM, datadD;
        //???????????????? ???????? ???? ????????
        let dataddch1 = $(MainPage.dateAndTimeBackDocument1ch).getText();
        let dataddch2 = $(MainPage.dateAndTimeBackDocument2ch).getText();
        //?????????????????? ?????????????? ?? ????????.
        datadD = date.getDate();
        monthD = (date.getMonth() + 3);
        datayy = date.getFullYear();
        if (monthD > 13) {
            monthD = monthD - 13;
            datayy = datayy + 1;
        }
        if (monthD === 13) {
            monthD = monthD - 1;
        }
        //???????? ???????? ????????????????????, ???? ???? ?????????????????? 0
        zero = String("");
        zeroM = String("");
        if (datadD < 10) {
            zero = String("0")
        }
        //???????? ?????????? ????????????????????, ???? ???? ?????????????????? 0
        if (monthD < 10) {
            zeroM = String("0")
        }
        //???????????????? ?????????????? ???????? ???? ??????????????, ?? ??????????????????????
        let datadd2 = (zero + datadD + "." + (zeroM + (monthD)).slice(-2) + "." + datayy);
        // ???????????????? ?? ???????????????????? ???????? ??????????, ?????????? ???????????????? ???????????? ????????.
        dataddch1 = (String(dataddch1)).slice(0, 10);
        dataddch2 = (String(dataddch2)).slice(0, 10);
        // ???????????????????? ???????? ???????????????????? ?? ???????? ???? ??????????????.
        if (datadd2 = !dataddch1) {
            throw new Error("Data back document is not correct in 1 checkbox");
        }
        if (datadd2 = !dataddch2) {
            throw new Error("Data back document is not correct in 2 checkbox");
        }
    }
);
Then(
    /^I check data plannig arrival "([^"]*)?" ,departure "([^"]*)?" and arrival to custom "([^"]*)?"$/,
    function (datearr, datedepar, datearrcus) {
        var date = new Date();
        let monthD, datadD, numbermonth, zero, datadD2, zeroM, monthD2, datayy, zero2, zeroM2, datayy2;
        let typeElement;
        LoginPage.filterData.waitForExist();
        //???????????????? ???????? ???? ????????
        let datadd1 = $(MainPage.dateAndTimeArrivedCustom).getText();
        let datadd11 = $(MainPage.dateAndTimeUploadCustom).getText();
        //?????????????????? ?? ????????, ?????????????? +1 ?? ???????????? ????????????.
        monthD = (date.getMonth() + 1);
        datayy = date.getFullYear();
        datadD = date.getDate();
        // ?????????????????? ???????? ???? ???????? ?? ??????.
        datearr = datearr / 24;
        datedepar = datedepar / 24;
        datearrcus = datearrcus / 24;
        // ???? ?????????????????? 31?? ?? ????????????
        numbermonth = 31;
        // ???????? ?? ?????????????? 30 ???????? ???? ??????????????????
        if (monthD === 4 || monthD === 6 || monthD === 9 || monthD === 11) {
            numbermonth = 30;
        }
        // ???????? ?????????????? ???? ??????????????????
        if (monthD === 2) {
            numbermonth = 28;
        }
        // ?????????????? ??????-???? ???????? ???????????????? ???? ?????????????? (?????????? ?????????????? +?????????? ???????????????? ???? ??????????????+?????????? ?????????????? ???? ????????????-31 ???????? ?? ???????????? )
        //???????? ?????????? ???????????? ???????????? ?????? ?????????? ???????? ?? ????????????
        if ((datadD + datearr + datearrcus) > numbermonth) {
            datadD = datadD + datearr - numbermonth + datearrcus
            monthD = monthD + 1;
        } else {
            datadD = datadD + datearr + datearrcus
        }
        if ((datadD + datedepar) > numbermonth) {
            datadD2 = datadD + datedepar - numbermonth
            monthD2 = monthD + 1;
        } else {
            datadD2 = datadD + datedepar
            monthD2 = monthD
        }
        // ???????? ???????????? ?????? ????????????, ???? ?????????????? ?????? ????????????.
        datayy2 = datayy;
        zero = String("");
        zeroM = String("");
        zero2 = String("");
        zeroM2 = String("");
        if (monthD > 12) {
            monthD = monthD - 12;
            datayy = datayy + 1;
        }
        if (monthD2 > 12) {
            monthD2 = monthD2 - 12;
            datayy2 = datayy2 + 1;
        }
        //???????? ???????? ????????????????????, ???? ???? ?????????????????? 0
        if (datadD < 10) {
            zero = String("0")
        }
        //???????? ?????????? ????????????????????, ???? ???? ?????????????????? 0
        if (monthD < 10) {
            zeroM = String("0")
        }
        if (datadD2 < 10) {
            zero2 = String("0")
        }
        if (monthD2 < 10) {
            zeroM2 = String("0")
        }
        //?????????????????????? ???????????????? ???????? ?? ?????????????? ?????????? ????????????????????.
        let datadd2 = (zero + datadD + "." + zeroM + monthD + "." + datayy);
        let datadd22 = (zero2 + datadD2 + "." + zeroM2 + monthD2 + "." + datayy2);
        // ???????????????? ?????????????????????? ????????,???????????????????? ???? ?????????????? ???? 10 ????????????.
        datadd1 = (String(datadd1)).slice(0, 10);
        datadd11 = (String(datadd11)).slice(0, 10);
        // ???????????????????? ???????? ???????????????????? ?? ???????? ???? ??????????????.
        if (datadd2 = !datadd1) {
            throw new Error("Data arrival is not correct");
        }
        if (datadd22 = !datadd11) {
            throw new Error("Data departure is not correct");
        }
    }
);
