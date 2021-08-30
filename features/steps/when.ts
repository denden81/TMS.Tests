import {When} from '@cucumber/cucumber';

import clearInputField from '../support/action/clearInputField';
import clickElement from '../support/action/clickElement';
import closeLastOpenedWindow from '../support/action/closeLastOpenedWindow';
import deleteCookies from '../support/action/deleteCookies';
import dragElement from '../support/action/dragElement';
import focusLastOpenedWindow from '../support/action/focusLastOpenedWindow';
import handleModal from '../support/action/handleModal';
import moveTo from '../support/action/moveTo';
import pause from '../support/action/pause';
import pressButton from '../support/action/pressButton';
import scroll from '../support/action/scroll';
import selectOption from '../support/action/selectOption';
import selectOptionByIndex from '../support/action/selectOptionByIndex';
import setCookie from '../support/action/setCookie';
import setInputField from '../support/action/setInputField';
import setPromptText from '../support/action/setPromptText';
import LoginPage from "../pageobjects/login.page" ;
import LoginPass from "../pageobjects/login.pass";
import MainPage from "../pageobjects/main.page";
import checkContainsText from '../support/check/checkContainsText';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const rnd = getRandomInt(1, 99999999);

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

When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
);

When(
    /^I (click) on this (link|button|element) "([^"]*)?"$/,
    (click, element, selector) => {
        let typeElement;
        if (selector === "submit") {
            typeElement = LoginPage.submit;
        }
        if (selector === "add") {
            typeElement = LoginPage.buttonAdd;
        }
        if (selector === "ConsumerAdd") {
            typeElement = LoginPage.ConsumerAdd;
        }
        if (selector === "ConsumerSub") {
            typeElement = LoginPage.ConsumerSub;
        }
        if (selector === "EcolabAdd") {
            typeElement = LoginPage.EcolabAdd;
        }
        if (selector === "EcolabSub") {
            typeElement = LoginPage.EcolabSub;
        }
        if (selector === "UkraineAdd") {
            typeElement = LoginPage.EcolabAdd;
        }
        if (selector === "UkraineSub") {
            typeElement = LoginPage.EcolabSub;
        }
        if (selector === "BacardiAdd") {
            typeElement = LoginPage.BacardiAdd;
        }
        if (selector === "BacardiSub") {
            typeElement = LoginPage.BacardiSub;
        }
        if (selector === "inputSubCompany") {
            typeElement = LoginPage.inputSubCompany;
        }
        if (selector === "inputRoleToggle") {
            typeElement = LoginPage.inputRoleToggle;
        }
        if (selector === "inputRoleTK") {
            typeElement = LoginPage.inputRoleTK;
        }
        if (selector === "inputRoleClient") {
            typeElement = LoginPage.inputRoleClient;
        }
        if (selector === "inputRoleBroker") {
            typeElement = LoginPage.inputRoleBroker;
        }
        if (selector === "buttonSave") {
            typeElement = LoginPage.buttonSave;
        }
        if (selector === "buttonExit") {
            typeElement = LoginPage.buttonExit;
        }
        if (selector === "buttonProfile") {
            //  если есть окно про апдейт, нажать продолжить.
            if ($(MainPage.messageAboutUpdateVersion).isDisplayed()) {
                $(MainPage.buttonNextInMessage).click();
            }
            scroll(MainPage.buttonDropdawnLang);
            browser.pause(3000);
            $(MainPage.buttonDropdawnLang).click();
            browser.pause(5000);
            typeElement = LoginPage.buttonProfile;
        }
        if (selector === "profileSubmit") {
            typeElement = LoginPage.profileSubmit;
        }
        if (selector === "Reload") {
            browser.refresh();
            browser.pause(3000);
            typeElement = LoginPage.buttonReload;
        }
        if (selector === "RemoveFilter") {
            typeElement = LoginPage.buttonRemoveFilter;
        }
        if (selector === "filterCalendar") {
            typeElement = LoginPage.filterCalendar;
        }
        if (selector === "filterCalendarYearBack") {
            typeElement = LoginPage.filterCalendarYearBack;
        }
        if (selector === "filterCalendarDate") {
            typeElement = LoginPage.filterCalendarDate;
        }
        if (selector === "statusOfDeliveryNote") {
            typeElement = LoginPage.statusOfDeliveryNote;
        }
        if (selector === "statusOfCarriage") {
            typeElement = LoginPage.statusOfCarriage;
        }
        if (selector === "Не проверена") {
            typeElement = LoginPage.statusOfDeliveryNoteNotChecked;
        }
        if (selector === "Создана") {
            typeElement = LoginPage.statusOfDeliveryNoteCreated;
        }
        if (selector === "В перевозке") {
            typeElement = LoginPage.statusOfDeliveryNoteTransportation;
        }
        if (selector === "В подборке") {
            typeElement = LoginPage.statusOfDeliveryNotePicking;
        }
        if (selector === "Собрана") {
            typeElement = LoginPage.statusOfDeliveryNotePicked;
        }
        if (selector === "Отгружена") {
            typeElement = LoginPage.statusOfDeliveryNoteSnipped;
        }
        if (selector === "Доставлена") {
            typeElement = LoginPage.statusOfDeliveryNoteDelivered;
        }
        if (selector === "Принята") {
            typeElement = LoginPage.statusOfDeliveryNoteAccepted;
        }
        if (selector === "В архиве") {
            typeElement = LoginPage.statusOfDeliveryNoteArchived;
        }
        if (selector === "Удалена") {
            typeElement = LoginPage.statusOfDeliveryNoteRemoved;
        }
        if (selector === "statusOfCarriage") {
            typeElement = LoginPage.statusOfCarriage;
        }
        if (selector === "Создана перевозка") {
            typeElement = LoginPage.statusOfCarriageCreated;
        }
        if (selector === "ТС заказано") {
            typeElement = LoginPage.statusOfCarriageVenicleOrdered;
        }
        if (selector === "Подтверждена") {
            typeElement = LoginPage.statusOfCarriageConfirmed;
        }
        if (selector === "ТС прибыло на погрузку") {
            typeElement = LoginPage.statusOfCarriageVenicleArrived;
        }
        if (selector === "Отменена") {
            typeElement = LoginPage.statusOfCarriageCancelled;
        }
        if (selector === "Срыв поставки") {
            typeElement = LoginPage.statusOfCarriageSupplyDisruption;
        }
        if (selector === "Холостая подача") {
            typeElement = LoginPage.statusOfCarriageIdleSupply;
        }
        if (selector === "ТС убыло с погрузки") {
            typeElement = LoginPage.statusOfCarriageVenicleDeparted;
        }
        if (selector === "ТС убыло с выгрузки") {
            typeElement = LoginPage.statusOfCarriageCreatedVenicleDepartedTheUnload;
        }
        if (selector === "Перевозка завершена") {
            typeElement = LoginPage.statusOfCarriageTransportationComplete;
        }
        if (selector === "Сумма подтверждена") {
            typeElement = LoginPage.statusOfCarriageCostConfirmed;
        }
        if (selector === "ТС прибыло на выгрузку") {
            typeElement = LoginPage.statusOfCarriageVenicleArrivedToUnload;
        }
        if (selector === "Счет выставлен") {
            typeElement = LoginPage.statusOfCarriageBillCreated;
        }
        if (selector === "В архиве перевозка") {
            typeElement = LoginPage.statusOfCarriageArchived;
        }
        if (selector === "Сумма не подтверждена") {
            typeElement = LoginPage.statusOfCarriageCostNotConfirmed;
        }
        if (selector === "iconAlternativeFilter") {
            typeElement = LoginPage.iconAlternativeFilter;
        }
        if (selector === "checkboxSearchAlternativeFilter") {
            typeElement = LoginPage.checkboxSearchAlternativeFilter;
        }
        if (selector === "chooseSearchAlternativeFilter") {
            typeElement = LoginPage.chooseSearchAlternativeFilter;
        }
        if (selector === "selectAllAlternativeFilter") {
            typeElement = LoginPage.selectAllAlternativeFilter;
        }
        if (selector === "clearAllAlternativeFilter") {
            typeElement = LoginPage.clearAllAlternativeFilter;
        }
        if (selector === "resetAllAlternativeFilter") {
            typeElement = LoginPage.resetAllAlternativeFilter;
        }
        if (selector === "closeAlternativeFilter") {
            typeElement = LoginPage.closeAlternativeFilter;
        }
        if (selector === "predstavlenie1") {
            typeElement = LoginPage.predstavlenie1;
        }
        if (selector === "mainCheckbox") {
            typeElement = LoginPage.mainCheckbox;
        }
        if (selector === "secondCheckbox") {
            typeElement = LoginPage.secondCheckbox;
        }
        if (selector === "firstCheckbox") {
            typeElement = LoginPage.firstCheckbox;
        }
        if (selector === "iconFastViewDeliveryNote") {
            typeElement = LoginPage.iconFastViewDeliveryNote;
        }
        if (selector === "iconFastViewCarriage") {
            typeElement = LoginPage.iconFastViewCarriage;
        }
        if (selector === "fastViewButtonClose") {
            typeElement = LoginPage.fastViewButtonClose;
        }
        if (selector === "Logout") {
            typeElement = LoginPage.logOut;
        }
        if (selector === "Orders") {
            typeElement = LoginPage.orders;
            browser.pause(2000)
        }
        if (selector === "OrdersAtPrice") {
            typeElement = LoginPage.ordersAtPrice;
            browser.pause(2000);
        }
        if (selector === "OrdersAtConsolidate") {
            typeElement = LoginPage.ordersAtConsolidate;
            browser.pause(2000);
        }
        if (selector === "IconPlus") {
            typeElement = LoginPage.iconPlus;
        }
        if (selector === "SelectSubCompany") {
            typeElement = LoginPage.selectSubCompany;
        }
        if (selector === "SelectConsumer") {
            typeElement = LoginPage.selectConsumer;
        }
        if (selector === "SelectEcolab") {
            typeElement = LoginPage.selectEcolab;
        }
        if (selector === "SelectUkraine") {
            typeElement = LoginPage.selectUkraine;
        }
        if (selector === "SelectBacardi") {
            typeElement = LoginPage.selectBacardi;
        }
        if (selector === "SelectVistakon") {
            typeElement = LoginPage.selectVistakon;
        }
        if (selector === "AddSubCompany") {
            typeElement = LoginPage.addSubCompany;
        }
        if (selector === "Добавить Детали приказа") {
            typeElement = LoginPage.addOrdersDetails;
        }
        if (selector === "Выбрать направление") {
            typeElement = LoginPage.selectDirection;
        }
        if (selector === "Выбрать ТК") {
            typeElement = LoginPage.selectTK;
        }
        if (selector === "Выбрать ТК для водителя") {
            typeElement = LoginPage.selectTKDriver;
        }
        if (selector === "Выбрать Тип ТС") {
            typeElement = LoginPage.selectTypeVehicle;
        }
        if (selector === "Выбрать Вид услуги") {
            typeElement = LoginPage.selectCarriageType;
        }
        if (selector === "SaveDetailsOrder") {
            typeElement = LoginPage.saveDetailsOrder;
        }
        if (selector === "Подтвердить") {
            typeElement = LoginPage.confirmSelect;
        }
        if (selector === "Кабинет") {
            typeElement = LoginPage.Office;
        }
        if (selector === "Кабинет Бакарди") {
            typeElement = LoginPage.OfficeGrid;
            browser.pause(6000);
        }
        if (selector === "Добавить новую накладную") {
            typeElement = LoginPage.iconNewWaybills;
            LoginPage.iconNewWaybills.waitForExist(30000);
        }
        if (selector === "Способ доставки") {
            typeElement = LoginPage.selectTypeDelivery;
        }
        if (selector === "Доставка") {
            typeElement = LoginPage.delivery;
        }
        if (selector === "Поставка") {
            typeElement = LoginPage.deliveryUkr;
        }
        if (selector === "Склад отгрузки") {
            typeElement = LoginPage.selectShippingWarehouses;
        }
        if (selector === "Склад доставки") {
            typeElement = LoginPage.selectDeliveryWarehouses;
        }
        if (selector === "Склад доставки Полный возврат") {
            typeElement = LoginPage.selectDeliveryWarehousesFullRefund;
        }
        if (selector === "Склад доставки 2ой в кроссдоковой накладной") {
            typeElement = LoginPage.selectDeliveryWarehousesSecondCrossdock;
        }
        if (selector === "Склад доставки 3тий в кроссдоковой накладной") {
            typeElement = LoginPage.selectDeliveryWarehousesSecondCrossdock;
        }
        if (selector === "Склад доставки 4тый в кроссдоковой накладной") {
            typeElement = LoginPage.selectDeliveryWarehousesSecondCrossdock;
        }
        if (selector === "Поиск") {
            typeElement = LoginPage.buttonSearchWarehouses;
        }
        if (selector === "Выбрать первое значение в списке") {
            typeElement = LoginPage.buttonFistCheckbox;
        }
        if (selector === "Сохранить склад") {
            typeElement = LoginPage.buttonSaveWarehouses;
            browser.pause(4000);
        }
        if (selector === "Сохранить накладную") {
            typeElement = LoginPage.buttonSaveWaibills;
        }
        if (selector === "Сохранить артикул") {
            typeElement = LoginPage.buttonSaveItemsWarehouses;
        }
        if (selector === "Создана в накладной") {
            typeElement = LoginPage.buttonInValidated;
        }
        if (selector === "В перевозке накладной") {
            typeElement = LoginPage.buttonInTransportation;
            browser.pause(2000);
        }
        if (selector === "Удалена в накладной") {
            typeElement = LoginPage.buttonInDelete;
        }
        if (selector === "В подборке накладной") {
            typeElement = LoginPage.buttonInPackaging;
        }
        if (selector === "Собрана в накладной") {
            typeElement = LoginPage.buttonInPacked;
        }
        if (selector === "Линк перевозки") {
            typeElement = LoginPage.linkCarriage;
        }
        if (selector === "Линк перевозки в статусе Создана") {
            typeElement = LoginPage.linkCarriageCreated;
        }
        if (selector === "Линк перевозки в статусе ТС заказано") {
            typeElement = LoginPage.linkCarriageVehicleOrdered;
        }
        if (selector === "Линк перевозки в статусе Подтверждена") {
            typeElement = LoginPage.linkCarriageVehicleConfirmed;
        }
        if (selector === "Линк перевозки в статусе Прибыло на погрузку") {
            typeElement = LoginPage.linkCarriageStatusArrivedToLoading;
        }
        if (selector === "Линк перевозки в статусе Убыло с погрузки") {
            typeElement = LoginPage.linkCarriageStatusDepartedFromLoading;
        }
        if (selector === "Линк перевозки в архиве") {
            typeElement = LoginPage.linkCarriageStatusArchived;
        }
        if (selector === "Линк перевозки в статусе Холостая подача") {
            typeElement = LoginPage.linkCarriageBlankArrival;
        }
        if (selector === "Линк перевозки в статусе Срыв поставки") {
            typeElement = LoginPage.linkCarriageFailed;
        }
        if (selector === "Линк перевозки в статусе Отменена") {
            typeElement = LoginPage.linkCarriageCanceled;
        }
        if (selector === "Линк перевозки в статусе Прибыло на выгрузку") {
            typeElement = LoginPage.linkCarriageStatusVechicleToUploading;
        }
        if (selector === "Линк накладной в статусе Создана") {
            typeElement = LoginPage.linkWaybillsValidated;
        }
        if (selector === "Линк накладной в статусе В перевозке") {
            typeElement = LoginPage.linkWaybillsActive;
        }
        if (selector === "Линк накладной в статусе Собрана") {
            typeElement = LoginPage.linkWaybillsPacked;
        }
        if (selector === "Линк накладной в статусе Доставлена") {
            typeElement = LoginPage.linkWaybillsDelivered;
        }
        if (selector === "Линк накладной в статусе Отгружена") {
            typeElement = LoginPage.linkWaybillsShipped;
        }
        if (selector === "Линк накладной в статусе В архиве") {
            typeElement = LoginPage.linkWaybillsArchived;
        }
        if (selector === "Рассчитать распределение по ТК") {
            typeElement = LoginPage.buttonCalculateTK;
            browser.pause(6000);
        }
        if (selector === "Выберите ТК из списка") {
            typeElement = LoginPage.selectListTK;
            browser.pause(3000);
            if (LoginPage.activeSelectListTK) {
                LoginPage.buttonCalculateTK.click();
            }
            browser.pause(3000);
        }
        if (selector === "OrdersClose") {
            typeElement = LoginPage.ordersClose;
            browser.pause(1500);
        }
        if (selector === "Добавить позиции") {
            typeElement = LoginPage.buttonSaveItemsWarehouses;
            browser.pause(1500);
        }
        if (selector === "Кликнуть на позицию") {
            typeElement = LoginPage.position1StInWaybill;
            browser.pause(2000);
            $(MainPage.position1StInWaybill).isFocused();
        }
        if (selector === "Добавить Регион От") {
            typeElement = LoginPage.regionFrom;
        }
        if (selector === "Добавить Регион До") {
            typeElement = LoginPage.regionTo;
        }
        if (selector === "Кнопка поиска региона") {
            typeElement = LoginPage.buttonSearch;
        }
        if (selector === "Подтвердить выбор региона") {
            typeElement = LoginPage.select1Region;
        }
        if (selector === "Выбрать регион") {
            typeElement = LoginPage.buttonSelect1Region;
        }
        if (selector === "Водители") {
            typeElement = LoginPage.drivers;
        }
        if (selector === "Добавить Водителя") {
            typeElement = LoginPage.addDriver;
        }
        if (selector === "Подтвердить ТК для водителя") {
            typeElement = LoginPage.confirmaddTKDriver;
            browser.pause(2000)
        }
        if (selector === "Сохранить водителя") {
            typeElement = LoginPage.saveDriver;
            browser.pause(2000)
        }
        if (selector === "Подтвердить выбор ТК из списка") {
            typeElement = LoginPage.selectTKedit;
            browser.pause(2000)
        }
        if (selector === "Выбрать водителя") {
            typeElement = LoginPage.selectDriver;
            browser.pause(3000)
        }
        if (selector === "Иконка Выбрать водителя") {
            typeElement = LoginPage.selectDriverIcon
        }
        if (selector === "Подтвердить выбор водителя из списка") {
            typeElement = LoginPage.confirmDriverInSearch;
        }
        if (selector === "Сохранить водителя") {
            typeElement = LoginPage.saveDriverInSearch;
        }
        if (selector === "ТС заказано в перевозке") {
            typeElement = LoginPage.buttonVehicleIsOrdered;
        }
        if (selector === "Подтверждена в перевозке") {
            typeElement = LoginPage.buttonVehicleConfirmed;
        }
        if (selector === "ТС прибыло на погрузку в перевозке") {
            typeElement = LoginPage.buttonVehicleArrivedToLoading;
        }
        if (selector === "ТС убыло с погрузки в перевозке") {
            typeElement = LoginPage.buttonVehicleDepartedFromLoading;
        }
        if (selector === "ТС прибыло на выгрузку в перевозке") {
            typeElement = LoginPage.buttonVehicleArrivedToUnloading;
        }
        if (selector === "ТС убыло с выгрузки в перевозке") {
            typeElement = LoginPage.buttonVehicleDepartedFromUnloading;
        }
        if (selector === "ТС прибыло на таможню в перевозке") {
            typeElement = LoginPage.buttonVehicleArrivedToCustom;
        }
        if (selector === "ДС получено в перевозке") {
            typeElement = LoginPage.buttonDeclarationRecieved;
        }
        if (selector === "ДТ подана в перевозке") {
            typeElement = LoginPage.buttonDeclarationSent;
        }
        if (selector === "ДТ выпущена в перевозке") {
            typeElement = LoginPage.buttonDeclarationIssued;
        }
        if (selector === "ТС убыло с СВХ в перевозке") {
            typeElement = LoginPage.buttonVehicleDepartedFromCustom;
        }
        if (selector === "Перевозка завершена в перевозке") {
            typeElement = LoginPage.buttonVehicleStatusFinished;
        }
        if (selector === "Сумма подтверждена в перевозке") {
            typeElement = LoginPage.buttonVehiclePriceConfirmed;
        }
        if (selector === "Счет выставлен в перевозке") {
            typeElement = LoginPage.buttonVehicleStatusBilled;
        }
        if (selector === "Статус в архиве в перевозке") {
            typeElement = LoginPage.buttonVehicleStatusArhived;
        }
        if (selector === "Редактирование водителя") {
            typeElement = LoginPage.editDriver;
        }
        if (selector === "Поиск Транспортной компании у водителя") {
            typeElement = LoginPage.buttonSearchTKDriver;
        }
        if (selector === "Поиск Транспортной компании у водителя Бакарди") {
            typeElement = LoginPage.buttonSearchTKDriverBacardi;
        }
        if (selector === "Холостая подача в перевозке") {
            typeElement = LoginPage.buttonIddleSupply;
        }
        if (selector === "Срыв поставки в перевозке") {
            typeElement = LoginPage.buttonSupplyDisruption;
        }
        if (selector === "Отменена в перевозке") {
            typeElement = LoginPage.buttonCancelled;
        }
        if (selector === "Колонка Id") {
            typeElement = LoginPage.columnId;
        }
        if (selector === "Колонка ФИО") {
            typeElement = LoginPage.columnFIO;
        }
        if (selector === "Колонка Телефон") {
            typeElement = LoginPage.columnTelefon;
        }
        if (selector === "Колонка Паспорт") {
            typeElement = LoginPage.columnPass;
        }
        if (selector === "Колонка Кем выдан") {
            typeElement = LoginPage.columnIssueBy;
        }
        if (selector === "Колонка Водительское удостоверение") {
            typeElement = LoginPage.columnDriverLicense;
        }
        if (selector === "Колонка Дата вод удостоверения") {
            typeElement = LoginPage.columnDataDriverLicense;
        }
        if (selector === "Колонка Номер доверенности") {
            typeElement = LoginPage.columnattorneyNo;
        }
        if (selector === "Колонка комментарий") {
            typeElement = LoginPage.columnComment;
        }
        if (selector === "Колонка ТК") {
            typeElement = LoginPage.columnTK;
        }
        if (selector === "Колонка Экспедитор") {
            typeElement = LoginPage.columnFregthForward;
        }
        if (selector === "Колонка комментарий Бакарди") {
            typeElement = LoginPage.columnCommentBacardi;
        }
        if (selector === "Колонка ТК Бакарди") {
            typeElement = LoginPage.columnTKBacardi;
        }
        if (selector === "Колонка Inbound в Планировании") {
            typeElement = LoginPage.columnInboundIE;
        }
        if (selector === "Колонка Статус накладной в Планировании") {
            typeElement = LoginPage.columnStatusOfDeliveryIE;
        }
        if (selector === "Колонка Документы проверены в Планировании") {
            typeElement = LoginPage.columnsConfirmedIE;
        }
        if (selector === "Колонка Перевозка в Планировании") {
            typeElement = LoginPage.columnCarriageIE;
        }
        if (selector === "Колонка Сектор в Планировании") {
            typeElement = LoginPage.columnSectorIE;
        }
        if (selector === "Колонка Delivery Invoice в Планировании") {
            typeElement = LoginPage.columnDeliveryInvoice1IE;
        }
        if (selector === "Колонка Delivery Invoice 2 в Планировании") {
            typeElement = LoginPage.columnDeliveryInvoice2IE;
        }
        if (selector === "Колонка Склад отгрузки в Планировании") {
            typeElement = LoginPage.columnShippingWarehousesIE;
        }
        if (selector === "Колонка Склад доставки в Планировании") {
            typeElement = LoginPage.columnDeliveryWarehouseIE;
        }
        if (selector === "Колонка Приоритет в Планировании") {
            typeElement = LoginPage.columnPriorityIE;
        }
        if (selector === "Колонка Дата Инвойса в Планировании") {
            typeElement = LoginPage.columnInvoiceDateIE;
        }
        if (selector === "Редактирование пользователя") {
            typeElement = LoginPage.linkEditUsers;
        }
        if (selector === "Сменить статус накладной на Принята") {
            typeElement = LoginPage.changeStatusWaybillsInAccepted;
        }
        if (selector === "Сменить статус накладной на Архив") {
            typeElement = LoginPage.changeStatusWaybillsArchive;
        }
        if (selector === "Стрелка входа") {
            typeElement = LoginPage.searchArrowMailnesia;
        }
        if (selector === "Линк маршрут перевозки") {
            typeElement = LoginPage.linkDirectionCarriers;
        }
        if (selector === "Корзина в майлнезии") {
            typeElement = LoginPage.iconDeleteMailnesia;
            browser.pause(2000);
        }
        if (selector === "Да,удалить в майлнезии") {
            typeElement = LoginPage.iconYesDeleteMailnesia;
            browser.pause(2000);
        }
        if (selector === "Сброс фильтра в админке") {
            typeElement = LoginPage.resetFilterAdmin;
        }
        if (selector === "Перевести статус в перевозке") {
            typeElement = LoginPage.transferToTheStatus;
            LoginPage.transferToTheStatus.waitForExist(30000);
        }
        if (selector === "Иконка поиска статуса отката") {
            typeElement = LoginPage.iconTransferToTheStatus;
        }

        if (selector === "Иконка поиска статуса отката в накладной") {
            typeElement = LoginPage.iconTransferToTheStatusWaybills;
        }
        if (selector === "Сохранить откат статуса") {
            typeElement = LoginPage.buttonSaveRevertStatus;
        }
        if (selector === "Удалить накладную из перевозки") {
            typeElement = LoginPage.buttonDeleteWaybillFromCarriages;
        }
        if (selector === "Создать перевозку в накладной") {
            typeElement = LoginPage.buttonMakeCarriagesInWaybill;
        }
        if (selector === "Способ доставки Самовывоз") {
            typeElement = LoginPage.typeDeliverPickup;
        }
        if (selector === "Способ доставки Самоввоз") {
            typeElement = LoginPage.typeDeliverInbound;
        }
        if (selector === "Линк история накладной") {
            typeElement = LoginPage.linkHistoryWaybills;
        }
        if (selector === "Импорт в накладной") {
            typeElement = LoginPage.linkImportIEWaybills;
        }
        if (selector === "Позиции в накладной") {
            typeElement = LoginPage.linkMarkingWaybills;
        }
        if (selector === "Первый чекбокс в Позиции в накладной") {
            typeElement = LoginPage.firstCheckboxMarkingWaybills;
        }
        if (selector === "Второй чекбокс в Позиции в накладной") {
            typeElement = LoginPage.secondCheckboxMarkingWaybills;
        }
        if (selector === "Удалить выбранные позиции в накладной") {
            typeElement = LoginPage.buttonDeleteMarkingWaybills;
        }
        if (selector === "Нет в окне удаления позиции в накладной") {
            typeElement = LoginPage.buttonNODeleteMarkingWaybills;
        }
        if (selector === "Да в окне удаления позиции в накладной") {
            typeElement = LoginPage.buttonYesDeleteMarkingWaybills;
        }
        if (selector === "Отмена в окне удаления позиции в накладной") {
            typeElement = LoginPage.buttonCancelDeleteMarkingWaybills;
        }
        if (selector === "Импорт в перевозке") {
            typeElement = LoginPage.linkImportIEWaybills;
        }
        if (selector === "Линк накладной") {
            typeElement = LoginPage.linkWaybills;
        }
        if (selector === "Линк история перевозки") {
            typeElement = LoginPage.linkHistoryWaybills;
        }
        if (selector === "Выбрать массовую операцию") {
            typeElement = LoginPage.selectInPanelMO;
        }
        if (selector === "Выбрать удаление накладной из списка массовых операций") {
            typeElement = LoginPage.panelMOchangeDeleteWaybills;
        }
        if (selector === "Кнопка ОК в Массовых операциях") {
            typeElement = LoginPage.panelMOOK;
        }
        if (selector === "Изменение статуса накладной в Массовых операциях") {
            typeElement = LoginPage.panelMOchangeStatusWaybills;
        }
        if (selector === "Изменение статуса перевозок в Массовых операциях") {
            typeElement = LoginPage.panelMOchangeStatusShipping;
        }
        if (selector === "Распределить перевозки в Массовых операциях") {
            typeElement = LoginPage.panelMODistributeCarriages;
        }
        if (selector === "Дата отгрузки в Массовых операциях") {
            typeElement = LoginPage.panelMOShipDate;
        }
        if (selector === "Дата доставки в Массовых операциях") {
            typeElement = LoginPage.panelMODeliveryDate;
        }
        if (selector === "Дата доставки перевозки в Массовых операциях") {
            typeElement = LoginPage.panelMODeliveryDateShipping;
        }
        if (selector === "Дата и время отгрузки перевозки план в Массовых операциях") {
            typeElement = LoginPage.panelMODateAndTimeShipmentCarriage;
        }
        if (selector === "Дата возврата документов факт в Массовых операциях") {
            typeElement = LoginPage.panelMODateAndTimeBackDocument;
        }
        if (selector === "Ок в попапе при создании копии в перевозке") {
            typeElement = LoginPage.popUpOkConfirmCopyInShipping;
        }
        if (selector === "Вывод списка опции при создании копии") {
            typeElement = LoginPage.popUpOkMakeCopyInShipping;
        }
        if (selector === "Выбрать опцию Холостая подача при копировании") {
            typeElement = LoginPage.popUpOkMakeCopyIddleSupply;
        }
        if (selector === "Выбрать опцию Срыв поставки при копировании") {
            typeElement = LoginPage.popUpOkMakeCopySupplyDisruption;
        }
        if (selector === "Выбрать опцию Отменена при копировании") {
            typeElement = LoginPage.popUpOkMakeCopyCancelled;
        }
        if (selector === "Подтвердить выбранную опцию при копировании") {
            typeElement = LoginPage.popUpOkMakeCopyYes;
        }
        if (selector === "Полный возврат в накладной") {
            typeElement = LoginPage.buttonFullRefund;
        }
        if (selector === "Потеряна в накладной") {
            typeElement = LoginPage.buttonLost;
        }
        if (selector === "Выбрать способ доставки") {
            typeElement = LoginPage.shippingMethod;
        }
        if (selector === "Вызов опций способа доставки") {
            typeElement = LoginPage.iconShippingMethod;
        }
        if (selector === "Сохранить опции способа доставки") {
            typeElement = LoginPage.saveShippingMethod;
        }
        if (selector === "Выберите ТС") {
            typeElement = LoginPage.selectVehicle;
        }
        if (selector === "Иконка Выбрать ТС") {
            typeElement = LoginPage.selectVehicleIcon
        }
        if (selector === "Подтвердить выбор ТС из списка") {
            typeElement = LoginPage.confirmVeicleInSearch;
        }
        if (selector === "Сохранить ТС") {
            typeElement = LoginPage.saveVehicleInSearch;
        }
        if (selector === "Дополнительные затраты") {
            typeElement = LoginPage.additionalCost;
            browser.pause(1000);
            Loaders("Loader");
        }
        if (selector === "Добавляем плечо Доп затрат") {
            typeElement = LoginPage.addArmAdditionalCost;
            browser.pause(1000);
            Loaders("Loader");
            $(MainPage.addArmAdditionalCost).waitForExist(30000);
        }
        if (selector === "сохраняем плечо Доп затрат") {
            typeElement = LoginPage.saveArmAdditionalCost;
            browser.pause(1000);
            Loaders("Loader");
        }
        if (selector === "Добавляем затрату в Доп затратах") {
            typeElement = LoginPage.addCostAdditionalCost;
            browser.pause(1000);
            Loaders("Loader");
            $(MainPage.addCostAdditionalCost).waitForExist(30000);
        }
        if (selector === "Добавить строку затраты в Доп затратах") {
            typeElement = LoginPage.addStringAdditionalCost;
            browser.pause(3000);
            Loaders("Loader");
            $(MainPage.addStringAdditionalCost).waitForExist(30000);
        }
        if (selector === "Возврат в Доп затратах") {
            typeElement = LoginPage.return;
            browser.pause(1000);
        }
        if (selector === "Возврат охраны в Доп затратах") {
            typeElement = LoginPage.securityReturn;
            browser.pause(1000);
        }
        if (selector === "Дополнительная точка выгрузки в Доп затратах") {
            typeElement = LoginPage.additionalDispatchingPoint;
            browser.pause(1000);
        }
        if (selector === "Охрана в Доп затратах") {
            typeElement = LoginPage.security;
            browser.pause(1000);
        }
        if (selector === "Простой в Доп затратах") {
            typeElement = LoginPage.downTime;
            browser.pause(1000);
        }
        if (selector === "Холостая подача в Доп затратах") {
            typeElement = LoginPage.idleSupply;
            browser.pause(1000);
        }
        if (selector === "Самовыгрузка в Доп затратах") {
            typeElement = LoginPage.selfUnloading;
            browser.pause(1000);
        }
        if (selector === "Страхование в Доп затратах") {
            typeElement = LoginPage.insurance;
            browser.pause(1000);
        }
        if (selector === "Возврат паллет в Доп затратах") {
            typeElement = LoginPage.palletsReturn;
            browser.pause(1000);
        }
        if (selector === "Другое 1 в Доп затратах") {
            typeElement = LoginPage.other1;
            browser.pause(1000);
        }
        if (selector === "Другое 2 в Доп затратах") {
            typeElement = LoginPage.other2;
            browser.pause(1000);
        }
        if (selector === "Другое 3 в Доп затратах") {
            typeElement = LoginPage.other3;
            browser.pause(1000);
        }
        if (selector === "Другое 4 в Доп затратах") {
            typeElement = LoginPage.other4;
            browser.pause(1000);
        }
        if (selector === "Другое 5 в Доп затратах") {
            typeElement = LoginPage.other5;
            browser.pause(1000);
        }
        if (selector === "Штрафы") {
            typeElement = LoginPage.fines;
            browser.pause(1000);
        }
        if (selector === "Добавляем тип Штрафа") {
            typeElement = LoginPage.addTypeFines;
            browser.pause(1000);
        }
        if (selector === "Несвоевременный возврат документов в Штрафах") {
            typeElement = LoginPage.lateDocumentsReturn;
            browser.pause(1000);
        }
        if (selector === "Несвоевременное прибытие под загрузку в Штрафах") {
            typeElement = LoginPage.lateArrivalForLoading;
            browser.pause(1000);
        }
        if (selector === "Срыв поставки в Штрафах") {
            typeElement = LoginPage.deliveryFailure;
            browser.pause(1000);
        }
        if (selector === "Другое в Штрафах") {
            typeElement = LoginPage.otherFines;
            browser.pause(1000);
        }
        if (selector === "Добавляем тип начислений в Штрафе") {
            typeElement = LoginPage.valueTypeFines;
            browser.pause(1000);
        }
        if (selector === "Абсолютный тип начислений в Штрафе") {
            typeElement = LoginPage.AbsoluteFines;
            browser.pause(1000);
        }
        if (selector === "Проценты тип начислений в Штрафе") {
            typeElement = LoginPage.interestFines;
            browser.pause(1000);
        }
        if (selector === "Добавляем штраф в Штрафах") {
            typeElement = LoginPage.addStringAddFines;
            browser.pause(1000);
        }
        if (selector === "Ставка за перевозку в перевозке") {
            typeElement = LoginPage.rateForTheCarriage;
            browser.pause(1000);
        }
        if (selector === "Свободно паллет в перевозке") {
            typeElement = LoginPage.inputFreePallets;
            browser.pause(1000);
        }
        if (selector === "Выбрать опцию распределения в менеджере распределения") {
            typeElement = LoginPage.iconSelectDistributeManager;
            browser.pause(1000);
        }
        if (selector === "Перевозчик с лучшим сервисом в менеджере распределения") {
            typeElement = LoginPage.selectBestServicesCarriages;
            browser.pause(1000);
        }
        if (selector === "Рассчитать распределение по ТК в менеджере распределения") {
            typeElement = LoginPage.buttonCalculateTheDistribute;
            browser.pause(1000);
        }
        if (selector === "Подтверждаем распределение в менеджере распределения") {
            typeElement = LoginPage.buttonConfirmDistributeManager;
            browser.pause(1000);
        }
        if (selector === "Доставка в опциях способа доставки") {
            typeElement = LoginPage.optionTypeDeliveryDelivery;
            browser.pause(1000);
        }
        if (selector === "Поставка в опциях способа доставки") {
            typeElement = LoginPage.optionTypeDeliveryDeliveryU;
            browser.pause(1000);
        }
        if (selector === "Самовывоз в опциях способа доставки") {
            typeElement = LoginPage.optionTypeDeliveryPickup;
            browser.pause(1000);
        }
        if (selector === "Самоввоз в опциях способа доставки") {
            typeElement = LoginPage.optionTypeDeliveryInbound;
            browser.pause(1000);
        }
        if (selector === "Inbound IE в опциях способа доставки") {
            typeElement = LoginPage.optionTypeDeliveryInboundIE;
            browser.pause(1000);
        }
        if (selector === "Заявку на перевозку транспортной компании") {
            typeElement = LoginPage.shippingApplication;
            browser.pause(1000);
        }
        if (selector === "Проформа") {
            typeElement = LoginPage.selectProforma;
            browser.pause(1000);
        }
        if (selector === "Тип ТС в перевозке") {
            typeElement = LoginPage.typeTC;
            browser.pause(1000);
        }
        if (selector === "Заказы") {
            typeElement = LoginPage.linkClientOrders;
            browser.pause(1000);
        }
        if (selector === "Планирование") {
            typeElement = LoginPage.linkPlanned;
            browser.pause(1000);
        }
        if (selector === "Иконка выбора статуса в Заказах") {
            typeElement = LoginPage.iconStatusClientOrders;
        }
        if (selector === "Не проверен статус в Заказах") {
            typeElement = LoginPage.statusNotVerifedClientOrders;
        }
        if (selector === "Иконка выбора типа накладной в Заказах") {
            typeElement = LoginPage.iconTypeWaybillClientOrders;
        }
        if (selector === "Тип накладной TR в Заказах") {
            typeElement = LoginPage.selectTRTypeWaybillClientOrders;
        }
        if (selector === "Иконка выбора типа сборки в Заказах") {
            typeElement = LoginPage.iconTypePackagedClientOrders;
        }
        if (selector === "Тип сборки смешанная в Заказах") {
            typeElement = LoginPage.typePackagedMixedClientOrders;
        }
        if (selector === "Иконка выбора валюты в накладной") {
            $(MainPage.buttonDeleteCurrencyWaybills).click();
            Loaders("Loader");
            browser.pause(4000);
            typeElement = LoginPage.iconSelectCurrency;
        }
        if (selector === "Иконка выбора валюты в перевозке") {
            typeElement = LoginPage.iconSelectCurrencyShipping;
        }
        if (selector === "Иконка выбора валюты страховки в перевозке") {
            typeElement = LoginPage.iconInsuranceShipping;
        }
        if (selector === "Иконка выбора валюты фрахта в перевозке") {
            typeElement = LoginPage.iconFreigntShipping;
        }
        if (selector === "Иконка выбора вида перевозки в перевозке") {
            typeElement = LoginPage.iconTypeShippingIE;
        }
        if (selector === "Выбрать вид air в перевозке") {
            typeElement = LoginPage.typeShippingIEAir;
        }
        if (selector === "Выбрать валюту RUB в накладной") {
            typeElement = LoginPage.selectCurrencyRub;
        }
        if (selector === "Выбрать валюту RUB в перевозке") {
            typeElement = LoginPage.selectCurrencyRub;
        }
        if (selector === "Выбрать валюту EUR в накладной") {
            typeElement = LoginPage.selectCurrencyEur;
        }
        if (selector === "Выпуск ДС в перевозке") {
            typeElement = LoginPage.selectReleaseOfDC;
        }
        if (selector === "Иконка выбора брокера") {
            typeElement = LoginPage.iconSelectBroker;
        }
        if (selector === "Выбрать 1го брокера") {
            typeElement = LoginPage.select1Broker;
        }
        if (selector === "Создать заготовку в заготовке") {
            typeElement = LoginPage.buttonMakePreform;
            browser.pause(30000);
        }
        if (selector === "Заготовка в перевозке") {
            typeElement = LoginPage.buttonPreformShipping;
        }
        if (selector === "Иконку выбора статуса накладной в планировании") {
            typeElement = LoginPage.iconStatusWaybillsPlanning;
        }
        if (selector === "Статус накладной В перевозке в планировании") {
            typeElement = LoginPage.statusWaybillsPlannedInShipping;
        }
        if (selector === "Иконку выбора статуса документа в планировании") {
            typeElement = LoginPage.iconDocumentVerifiedPlanning;
        }
        if (selector === "Статус документа Не проверено в планировании") {
            typeElement = LoginPage.statusDocumentVerifiedShippingNotVerifed;
        }
        if (selector === "Иконку выбора сектора в планировании") {
            typeElement = LoginPage.iconSectorPlanning;
        }
        if (selector === "сектор MD в планировании") {
            typeElement = LoginPage.sectorMDPlanning;
        }
        if (selector === "Иконка Склад отгрузки в планировании") {
            typeElement = LoginPage.iconWarehouseShippingPlanning
        }
        if (selector === "Иконка Склад доставки в планировании") {
            typeElement = LoginPage.iconWarehouseDeliverylanning
        }
        if (selector === "Иконка выбора приоритета в планировании") {
            typeElement = LoginPage.iconPriorityPlanning
        }
        if (selector === "Приоритет стандарт в планировании") {
            typeElement = LoginPage.priorityStandartPlanning;
        }
        typeElement.waitForExist(20000);
        typeElement.click();
        browser.pause(1000);
    }
);
When(
    /^I click in (random|standart)( type tc)* element "([^"]*)?"$/,
    (type, typeTC, selector) => {
        let typeElement, value;
        if (type === "random") {
            if (selector === "random order number") {
                value = `Приказ${rnd}`;
                typeElement = "//a[contains(text(),'" + value + "')]";
                browser.pause(4000);
                LoginPage.searchOrderList.waitForExist(90000);
                LoginPage.searchOrderList.setValue(value);
                browser.pause(4000);
                $(typeElement).waitForExist(10000);
                $(typeElement).click();
            }
            if (selector === "random number") {
                let typeElement, value;
                value = `Накладная${rnd}`;
                typeElement = "//a[contains(text(),'" + value + "')]";
                browser.pause(5000);
                LoginPage.fieldDeliveryNumber.waitForExist(90000);
                LoginPage.fieldDeliveryNumber.setValue(value);
                browser.pause(4000);
                Loaders("Loader");
                $(typeElement).waitForExist(90000);
                $(typeElement).click();
                browser.pause(4000);
            }
            if (selector === "random number waybills2") {
                let typeElement, value;
                value = `Накладная2${rnd}`;
                typeElement = "//a[contains(text(),'" + value + "')]";
                browser.pause(4000);
                LoginPage.fieldDeliveryNumber.waitForExist(90000);
                LoginPage.fieldDeliveryNumber.setValue(value);
                browser.pause(4000);
                Loaders("Loader");
                $(typeElement).waitForExist(10000);
                $(typeElement).click();
                browser.pause(4000);
            }
            if (selector === "random number copy IE") {
                let typeElement, value;
                value = `Накладная${rnd}/1`;
                typeElement = "//a[contains(text(),'" + value + "')]";
                browser.pause(4000);
                LoginPage.fieldDeliveryNumber.waitForExist(90000);
                LoginPage.fieldDeliveryNumber.setValue(value);
                browser.pause(4000);
                Loaders("Loader");
                $(typeElement).waitForExist(10000);
                $(typeElement).click();
                browser.pause(4000);
            }
        }
        if (type === "standart") {
            if (!typeTC) {
                typeElement = "//a[contains(text(),'" + selector + "')]";
                browser.pause(4000);
                LoginPage.iconFilterWaybills.click();
                browser.pause(2000);
                LoginPage.filterEquallyWaybills.waitForExist(20000);
                LoginPage.filterEquallyWaybills.click();
                browser.pause(2000);
                LoginPage.fieldDeliveryNumber.setValue(selector);
                browser.pause(4000);
                $(typeElement).waitForExist(10000);
                $(typeElement).click();
            }
        }
        if (type === "standart") {
            if (typeTC) {
                typeElement = "//a[contains(.,'" + selector + "')]";
                browser.pause(1000);
                $(typeElement).waitForExist(10000);
                $(typeElement).click();
            }
        }
    }
);
When(
    /^I click "([^"]*)?" on the element "([^"]*)?"$/,
    (text, selector) => {
        if (selector === "Поиск Транспортной компании водителя Украины") {
            let typeElement;
            typeElement = "//div[contains(text(),'" + text + "')]";
            //typeElement = "//div[@title='" + text + "']";
            browser.pause(4000);
            $(typeElement).waitForExist(10000);
            $(typeElement).click();
        }
        if (selector === "Поиск Транспортной компании водителя") {
            let typeElement;
            typeElement = "//div[@title='" + text + "']";
            browser.pause(4000);
            $(typeElement).waitForExist(10000);
            $(typeElement).click();
        }
    }
);

When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
);
When(
    /^I (add|set) "([^"]*)?" to the inputfields "([^"]*)?"$/,
    (add, value, element) => {
        let typeElement;
        if (value === "loginConsCoord") {
            value = LoginPass.loginConsCoord;
        }
        if (value === "passwordConsCoord") {
            value = LoginPass.password;
        }
        if (element === "username") {
            typeElement = LoginPage.username;
        }
        if (element === "password") {
            typeElement = LoginPage.password;
        }
        if (value === "loginAdmin") {
            value = LoginPass.loginAdmin;
        }
        if (value === "passwordAdmin") {
            value = LoginPass.passwordAdmin;
        }
        if (element === "inputLogin") {
            typeElement = LoginPage.inputLogin;
        }
        if (element === "inputPassword") {
            typeElement = LoginPage.inputPassword;
        }
        if (element === "inputEmail") {
            typeElement = LoginPage.inputEmail;
        }
        if (element === "inputFullName") {
            typeElement = LoginPage.inputFullName;
        }
        if (element === "inputComment") {
            typeElement = LoginPage.inputComment;
        }
        if (element === "userCode") {
            typeElement = LoginPage.userCode;
        }
        if (value === "random") {
            value = `testuser${rnd}`;
        }
        if (value === "testmail") {
            value = LoginPass.testMail;
        }
        if (value === "testmail1") {
            value = LoginPass.testMail1;
        }
        if (value === "testmail2") {
            value = LoginPass.testMail2;
        }
        if (value === "testmail3") {
            value = LoginPass.testMail3;
        }
        if (value === "testmail4") {
            value = LoginPass.testMail4;
        }
        if (value === "testmail5") {
            value = LoginPass.testMail5;
        }
        if (value === "testmail6") {
            value = LoginPass.testMail6;
        }
        if (value === "testmail7") {
            value = LoginPass.testMail7;
        }
        if (value === "testmail8") {
            value = LoginPass.testMail8;
        }
        if (value === "testmail9") {
            value = LoginPass.testMail9;
        }
        if (value === "testmail10") {
            value = LoginPass.testMail10;
        }
        if (value === "testmail11") {
            value = LoginPass.testMail11;
        }
        if (value === "testmail12") {
            value = LoginPass.testMail12;
        }
        if (value === "testmail13") {
            value = LoginPass.testMail13;
        }
        if (value === "testmail14") {
            value = LoginPass.testMail14;
        }
        if (value === "testmail15") {
            value = LoginPass.testMail15;
        }
        if (value === "testmail16") {
            value = LoginPass.testMail16;
        }
        if (value === "testmail17") {
            value = LoginPass.testMail17;
        }
        if (value === "testmail18") {
            value = LoginPass.testMail18;
        }
        if (value === "testmail19") {
            value = LoginPass.testMail19;
        }
        if (value === "testmail20") {
            value = LoginPass.testMail20;
        }
        if (value === "testmail21") {
            value = LoginPass.testMail21;
        }
        if (value === "testmail22") {
            value = LoginPass.testMail22;
        }
        if (value === "testmail23") {
            value = LoginPass.testMail23;
        }
        if (value === "testmail24") {
            value = LoginPass.testMail24;
        }
        if (value === "password") {
            value = LoginPass.password;
        }
        if (element === "profileNewPassword") {
            typeElement = LoginPage.profileNewPassword;
        }
        if (element === "profileNewPasswordAgain") {
            typeElement = LoginPage.profileNewPasswordAgain;
        }
        if (element === "fieldstatusOfCarriage") {
            typeElement = LoginPage.fieldstatusOfCarriage;
        }
        if (element === "fieldSearchAlternativeFilter") {
            typeElement = LoginPage.fieldSearchAlternativeFilter;
        }
        if (element === "AddRate") {
            typeElement = LoginPage.addRate;
        }
        if (element === "Выбрать направление") {
            typeElement = LoginPage.selectDirection;
        }
        if (element === "ТК") {
            typeElement = LoginPage.addTK;
        }
        if (element === "ТК для водителя") {
            typeElement = LoginPage.addTKDriver;
        }
        if (element === "Тип ТС") {
            typeElement = LoginPage.addTypeVehicle;
        }
        if (element === "Вид услуги") {
            typeElement = LoginPage.addCarriageType;
        }
        if (element === "Направление") {
            typeElement = LoginPage.addDirection;
        }
        if (value === "random number") {
            value = `Накладная${rnd}`;
        }
        if (value === "random order number IE") {
            value = `${rnd}`;
        }
        if (value === "random number waybills2") {
            value = `Накладная2${rnd}`;
        }
        if (element === "Номер накладной") {
            typeElement = LoginPage.numberNewWaybills;
        }
        if (element === "Номер заказа накладной") {
            typeElement = LoginPage.numberOrderNewWaybills;
        }
        if (element === "В строку поиска") {
            typeElement = LoginPage.addSearchWarehouses;
        }
        if (element === "Добавить артикул") {
            typeElement = LoginPage.addItemsWaybills;
        }
        if (element === "Добавить кол-во артикула") {
            typeElement = LoginPage.addItemsNumbersWaybills;
        }
        if (element === "Номер накладной в поле поиска") {
            typeElement = LoginPage.fieldDeliveryNumber;
        }
        if (element === "ТК в поле поиска") {
            typeElement = LoginPage.addTKList;
        }
        if (value === "random order number") {
            value = `Приказ${rnd}`;
        }
        if (value === "random driver number") {
            value = `Водитель котейка${rnd}`;
        }
        if (element === "Номер") {
            typeElement = LoginPage.orderName;
        }
        if (element === "Позиция в накладной") {
            typeElement = LoginPage.positionInWaybill;
        }
        if (element === "Количество позиции") {
            typeElement = LoginPage.quantityInWaybill;
        }
        if (element === "Поле поиска региона") {
            typeElement = LoginPage.fieldSearchRegion;
        }
        if (element === "Температура От") {
            typeElement = LoginPage.temperatureLow;
        }
        if (element === "Температура До") {
            typeElement = LoginPage.temperatureHigh;
        }
        if (element === "ФИО водителя") {
            typeElement = LoginPage.addFIO;
        }
        if (element === "Телефон водителя") {
            typeElement = LoginPage.addTelefon;
        }
        if (element === "Паспорт") {
            typeElement = LoginPage.addPassport;
        }
        if (element === "Кем выдано") {
            typeElement = LoginPage.addIssuedBy;
        }
        if (element === "Номер лицензии") {
            typeElement = LoginPage.addDriverLicense;
        }
        if (element === "Дата лицензии") {
            typeElement = LoginPage.addDateDriverLicense;
        }
        if (element === "Номер доверенности") {
            typeElement = LoginPage.addAttorneyNo;
        }
        if (element === "Комментарий") {
            typeElement = LoginPage.addComment;
        }
        if (element === "Поле поиска по ФИО") {
            typeElement = LoginPage.searchFIO;
        }
        if (element === "Поле поиска по телефону") {
            typeElement = LoginPage.searchTelefonDriver;
        }
        if (element === "Поле поиска по паспорту") {
            typeElement = LoginPage.searchPassportDriver;
        }
        if (element === "Поле поиска кем выдан") {
            typeElement = LoginPage.searchIssueByDriver;
        }
        if (element === "Водительское удостоверение") {
            typeElement = LoginPage.searchLicenceDriver;
        }
        if (element === "Поле поиска по Дата вод. удостоверения") {
            typeElement = LoginPage.searchDataLicenseDriver;
        }
        if (element === "Поле поиска по Номеру доверенности") {
            typeElement = LoginPage.searchAttorneyDriver;
        }
        if (element === "Поле поиска по Комментарий") {
            typeElement = LoginPage.searchCommentDriver;
        }
        if (element === "Поле поиска по Комментарий Бакарди") {
            typeElement = LoginPage.searchCommentDriverBacardi;
        }
        if (element === "Поиск Транспортной компании водителя") {
            typeElement = LoginPage.searchTKDriver;
        }
        if (element === "Поиск Транспортной компании водителя Бакарди") {
            typeElement = LoginPage.searchTKDriverBacardi;
        }
        if (element === "Поле поиска по Экспедитору") {
            typeElement = LoginPage.searchFreithForwarder;
        }
        if (element === "В поле поиска водителя") {
            typeElement = LoginPage.addDriverInSearch;
        }
        if (element === "В поле поиска ТС") {
            typeElement = LoginPage.addVehicleInSearch;
        }
        if (element === "Поиск по логину") {
            typeElement = LoginPage.searchLogin;
        }
        if (element === "В поле поиска email") {
            typeElement = LoginPage.searchEmailMailnesia;
        }
        if (element === "Поиск по комментарию") {
            typeElement = LoginPage.searchComment;
        }
        if (element === "Поиск по комментарию др") {
            typeElement = LoginPage.searchCommentOther;
        }
        if (element === "В поле выбора способа доставки") {
            typeElement = LoginPage.adddelivery;
        }
        if (element === "В поле поиска статуса отката") {
            typeElement = LoginPage.addTextTransferToTheStatus;
        }
        if (element === "В поле комментария статуса отката") {
            typeElement = LoginPage.textTransferComment;
        }
        if (element === "В поле выбора опции способа доставки") {
            typeElement = LoginPage.fieldShippingMethod;
        }
        if (element === "В поле выбора затраты") {
            typeElement = LoginPage.addValueCostAdditionalCost;
        }
        if (element === "Значение затраты в Доп затратах") {
            typeElement = LoginPage.addCostValueAdditionalCost;
        }
        if (element === "Значение комментария в Доп затратах") {
            typeElement = LoginPage.addCommentAdditionalCost;
        }
        if (element === "Простой мин. в Доп затратах") {
            typeElement = LoginPage.addDemurageAdditionalCost;
        }
        if (element === "Значение штрафа в Штрафе") {
            typeElement = LoginPage.valueFines;
        }
        if (element === "Комментарий в Штрафе") {
            typeElement = LoginPage.commentFines;
        }
        if (element === "Ставка за перевозку в перевозке") {
            typeElement = LoginPage.rateForTheCarriage;
        }
        if (element === "Дата создания заказа в Заказах") {
            typeElement = LoginPage.dateCreateClientOrders;
        }
        if (element === "Дата создания документа в Заказах") {
            typeElement = LoginPage.dateDocumentClientOrders;
        }
        if (element === "PO в Заказах") {
            typeElement = LoginPage.fieldPOClientOrders;
        }
        if (element === "Дата доставки в Заказах") {
            typeElement = LoginPage.fieldDateDeliveryClientOrders;
        }
        if (element === "Ожидаемая дата доставки в Заказах") {
            typeElement = LoginPage.fieldDateExpectedDeliveryClientOrders;
        }
        if (element === "Колличество паллет в Заказах") {
            typeElement = LoginPage.fieldSummPalletClientOrders;
        }
        if (element === "Коробов mixed в накладной в Заказах") {
            typeElement = LoginPage.fieldMixedBoxClientOrders;
        }
        if (element === "Коробов total в накладной в Заказах") {
            typeElement = LoginPage.fieldTotalBoxClientOrders;
        }
        if (element === "Сумма товаров по инвойсу") {
            typeElement = LoginPage.fieldTotalSummItemsInvoice;
        }
        if (element === "Сумма страховки по инвойсу в перевозке") {
            typeElement = LoginPage.fieldTotalInsuranceShipping;
        }
        if (element === "Фрахт по инвойсу в перевозке") {
            typeElement = LoginPage.fieldFreightShipping;
        }
        if (element === "Вес нетто по инвойсу в перевозке") {
            typeElement = LoginPage.fieldWeightShipping;
        }
        if (element === "Вес брутто по инвойсу в перевозке") {
            typeElement = LoginPage.fieldWeightGrossShipping;
        }
        if (element === "Вес нетто в заготовке в артикулах") {
            typeElement = LoginPage.weightGrossPreformMarkingLine;
        }
        if (element === "Inbound в Планировании") {
            typeElement = LoginPage.fieldInboundPlanning;
        }
        if (element === "Поле выбора статуса накладной в планировании") {
            typeElement = LoginPage.fieldStatusWaybillsPlanning;
        }
        if (element === "Склад отгрузки в планировании") {
            typeElement = LoginPage.fieldWarehouseShippingPlanning;
        }
        if (element === "Склад доставки в планировании") {
            typeElement = LoginPage.fieldWarehouseDeliveryPlanning;
        }
        typeElement.waitForExist(20000);
        typeElement.setValue(value);
        browser.pause(3500);
    }
);
When(
    /^I add numbers "([^"]*)?" to the inputfields "([^"]*)?"$/,
    (value, element) => {
        let typeElement;
        if (element === "Ставка за перевозку в перевозке") {
            typeElement = MainPage.rateForTheCarriage;
        }
        if (element === "Сумма товаров по инвойсу") {
            typeElement = MainPage.fieldTotalSummItemsInvoice;
        }
        $(typeElement).click();
        browser.pause(2000);
        pressButton(value);
    }
);
When(
    /^I add vendor code "([^"]*)?" to the inputfields "([^"]*)?"$/,
    (value, element) => {
        let typeElement, vendorCode;
        if (element === "Позиция в накладной") {
            typeElement = LoginPage.positionInWaybill;
        }
        typeElement.waitForExist(20000);
        browser.pause(1000);
        typeElement.setValue(value);
        vendorCode = "//div[@class='control-group form-inline']/ul[@role='listbox']/li[@role='option']/a/strong[.='" + value + "']";
        $(vendorCode).waitForExist(90000);
        browser.pause(1000);
        //browser.keys("\uE007\n"); хром 76 не обрабатывает нажатия на enter
        $(vendorCode).click();
    }
);
When(
    /^I expects that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    function (element, selector, boolean, text) {
        if (selector === "footer") {
            selector = MainPage.footer;
        }
        if (selector === "scrollContainer") {
            selector = MainPage.scrollContainer;
        }
        if (selector === "tmsGridCellLeft") {
            selector = MainPage.tmsGridCellLeft;
        }
        if (selector === "fastViewModalContent") {
            selector = MainPage.fastViewModalContent;
        }
        if (selector === "fastViewModalTitle") {
            selector = MainPage.fastViewModalTitle;
        }
        if (selector === "OrderFooter") {
            selector = MainPage.orderFooter;
        }
        if (selector === "footerWaybills") {
            selector = MainPage.footerWaybills;
        }
        if (selector === "footerSearchWarehouses") {
            selector = MainPage.footerSearchWarehouses;
            browser.pause(1000);
        }
        if (selector === "footerWaybillsCreated") {
            selector = MainPage.footerWaybillsCreated;
            browser.pause(1000);
        }
        if (selector === "footerWaybillsValidate") {
            selector = MainPage.footerWaybillsValidate;
            browser.pause(1000);
        }
        if (selector === "footerWaybillsDelete") {
            selector = MainPage.footerWaybillsDelete;
            browser.pause(1000);
        }
        if (selector === "listTK") {
            selector = MainPage.listTK;
        }
        if (selector === "Fixed transport company") {
            selector = MainPage.fixedTransportCompany;
            browser.pause(4000);
        }
        if (selector === "footerDriver") {
            selector = MainPage.footerDriver;
            browser.pause(1000);
        }
        if (selector === "header TC") {
            selector = MainPage.headerTC;
            browser.pause(1000);
        }
        if (selector === "footerGridDriver") {
            selector = MainPage.footerGridDriver;
        }
        if (text === "random driver number") {
            text = `Водитель котейка${rnd}`;
        }
        if (text === "random number") {
            text = `Накладная${rnd}`;
        }
        if (text === "random number 2") {
            text = `Накладная2${rnd}`;
        }
        if (text === "random number copy") {
            text = `Накладная${rnd}-C`;
        }
        if (text === "random number copy IE") {
            text = `Накладная${rnd}/1`;
        }
        if (selector === "Грид перевозки") {
            selector = MainPage.gridCarriers;
        }
        if (selector === "Ошибки редактирования водителя") {
            selector = MainPage.errorDriver;
        }
        if (selector === "Грид Админки") {
            selector = MainPage.adminGrid;
        }
        if (selector === "Грид Mailnesia") {
            selector = MainPage.gridMailnesia;
        }
        if (selector === "headerShippingMethod") {
            selector = MainPage.headerShippingMethod;
        }
        if (selector === "headerDistributeManager") {
            selector = MainPage.headerDistributeManager;
        }
        if (selector === "clientOrder") {
            selector = MainPage.clientOrderGrid;
        }
        if (selector === "clientOrderHeader") {
            selector = MainPage.clientOrderHeader;
        }
        if (selector === "PlanningHeader") {
            selector = MainPage.planningHeader;
        }
        if (selector === "PlanningLine") {
            selector = MainPage.planningLine;
        }
        browser.pause(1000);
        Loaders("Loader");
        //$(MainPage.Loader).waitForDisplayed({ timeout: 90000,reverse: true });
        //$(MainPage.bigLoader).waitForDisplayed({ timeout: 90000,reverse: true });
        checkContainsText(element, selector, text);
    }
);

When(
    /^I clear the inputfield "([^"]*)?"$/,
    clearInputField
);

When(
    /^I clear thes inputfield "([^"]*)?"$/,
    function (selector) {
        if (selector === "Ставка за перевозку в перевозке") {
            selector = MainPage.rateForTheCarriage;
        }
        if (selector === "Поле ввода email") {
            selector = MainPage.inputEmail;
        }
        clearInputField(selector);
        browser.pause(3000);
    }
);

When(
    /^I drags element "([^"]*)?" to element "([^"]*)?"$/,
    function (selector1, selector2) {
        let value1, value2, value3, typeElement;
        if (selector1 === "random number") {
            value1 = `Накладная${rnd}`;
            selector1 = "//a[contains(text(),'" + value1 + "')]";
        }
        if (selector2 === "random number waybills2") {
            value2 = `Накладная2${rnd}`;
            selector2 = "//a[contains(text(),'" + value2 + "')]";
        }
        // заполняем в поле поиска обе накладных
        value3 = value1 + " " + value2
        typeElement = LoginPage.fieldDeliveryNumber;
        typeElement.waitForExist();
        typeElement.setValue(value3);
        browser.pause(4000);
        Loaders("Loader");
        $(selector1).waitForExist(30000);
        $(selector2).waitForExist(30000);
        //если сортировка сбита, то вернуть сортировку по дате
        for (var i = 0; i <= 2; i++) {
            if ($(MainPage.arrowSortData).isDisplayed()) {
                break;
            } else {
                $(MainPage.arrowSortDataGrid).click();
                browser.pause(2000);
            }
        }

        //  let element= $(selector1);
        //  let targetElement=$(selector2)
        // selector1=$(selector1);
        //  selector2=$(selector2);
        // let java_script = "simulateHTML5DragAndDrop(arguments[0],arguments[1]);" ;
        //  browser.execute(java_script,selector1,selector2);
        // browser.pause(20000);
        // DndSimulator.simulate(selector1, selector2);
        // $(selector2).moveTo();
        // ($(selector1)).dragAndDrop($(selector2));
        // browser.execute(java_script,selector1,selector2);
        //  $(selector1).moveTo();
        //  browser.performActions([{
        //      type: 'pointer',
        //      id: 'finger1',
        //      parameters: { pointerType: 'mouse' },
        //      actions: [
        //          //         { type: 'pointerMove', duration: 0},
        //          { type: 'pointerDown', button: 0 },
        //          //         { type: 'pause', duration: 10 }, // emulate human pause
        //          //         { type: 'pointerMove', origin: 'pointer'}
        //          //        { type: 'pointerUp', button: 0 }
        //      ]
        //  }]);
        // $(selector2).moveTo();
        //   browser.releaseActions();
        //   browser.performActions([{
        //      type: 'pointer',
        //      id: 'finger1',
        //      parameters: { pointerType: 'mouse' },
        //      actions: [
        //          { type: 'pointerUp', button: 0 },
        //      ]
        //  }]);
        //  browser.releaseActions();
        //
        //
        // browser.pause(2000);
        dragElement(selector1, selector2);
        // $(selector1).dragAndDrop($(selector2));
        browser.pause(10000);

    });


When(
    /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
    dragElement
);

When(
    /^I pause for (\d+)ms$/,
    pause
);

When(
    /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
    setCookie
);

When(
    /^I delete the cookie "([^"]*)?"$/,
    deleteCookies
);

When(
    /^I press "([^"]*)?"$/,
    pressButton
);

When(
    /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
    handleModal
);

When(
    /^I accept the alert$/,
    function () {
        Loaders("Loader");
        browser.pause(2000);
        browser.acceptAlert();
        Loaders("Loader");
        browser.pause(2000);
    }
);

When(
    /^I enter "([^"]*)?" into the prompt$/,
    setPromptText
);

When(
    /^I scroll to element "([^"]*)?"$/,
    scroll
);

When(
    /^I scroll to elements "([^"]*)?"$/,
    (selector) => {
        if (selector === "Линк перевозки") {
            selector = MainPage.linkCarriage;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе ТС Заказано") {
            selector = MainPage.linkCarriageVehicleOrdered;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе Подтверждена") {
            selector = MainPage.linkCarriageVehicleConfirmed;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе Прибыло на погрузку") {
            selector = MainPage.linkCarriageStatusArrivedToLoading;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе Убыло с погрузки") {
            selector = MainPage.linkCarriageStatusDepartedFromLoading;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе Прибыло на выгрузку") {
            selector = MainPage.linkCarriageStatusVechicleToUploading;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе в Архиве") {
            selector = MainPage.linkCarriageStatusDepartedFromLoading;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе Создана") {
            selector = MainPage.linkCarriageCreated;
            browser.pause(2000);
        }
        if (selector === "Кабинет в хедере") {
            selector = MainPage.headerOffice;
            browser.pause(2000);
        }
        if (selector === "В край грида водителя") {
            selector = MainPage.endGridDrivers;
            browser.pause(2000);
        }
        if (selector === "Линк накладной") {
            selector = MainPage.linkWaybills;
            browser.pause(2000);
        }
        if (selector === "Линк маршрут перевозки") {
            selector = MainPage.linkDirectionCarriers;
            browser.pause(2000);
        }
        if (selector === "Выбор ТК") {
            selector = MainPage.linkSelectTK;
            browser.pause(2000);
        }
        if (selector === "Линк маршрут накладной") {
            selector = MainPage.linkDirectionWaybills;
            browser.pause(2000);
        }
        if (selector === "Линк комментарии") {
            selector = MainPage.linkCommentShipping;
        }
        if (selector === "Линк накладной в статусе Принята") {
            selector = MainPage.linkWaybillsAccepted;
            browser.pause(2000);
        }
        if (selector === "Линк накладной в статусе Доставлена") {
            selector = MainPage.linkWaybillsDelivered;
            browser.pause(2000);
        }
        if (selector === "Линк накладной в статусе Отгружена") {
            selector = MainPage.linkWaybillsShipped;
            browser.pause(2000);
        }
        if (selector === "Линк накладной в статусе Создана") {
            selector = MainPage.linkWaybillsValidated;
            browser.pause(2000);
        }
        if (selector === "Линк накладной в статусе Собрана") {
            selector = MainPage.linkWaybillsPacked;
            browser.pause(2000);
        }
        if (selector === "Линк накладной в статусе В Архиве") {
            selector = MainPage.linkWaybillsArchived;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в архиве") {
            selector = MainPage.linkCarriageStatusArchived;
            browser.pause(2000);
        }
        if (selector === "Создать перевозку в накладной") {
            selector = MainPage.buttonMakeCarrigesInWaybills;
            browser.pause(2000);
        }
        if (selector === "Линк история накладной") {
            selector = MainPage.linkHistoryWaybills;
            browser.pause(2000);
        }
        if (selector === "Комментарии в перевозке") {
            selector = MainPage.linkCommentsShipping;
            browser.pause(2000);
        }
        if (selector === "Линк история перевозки") {
            selector = MainPage.linkHistoryWaybills;
            browser.pause(2000);
        }
        if (selector === "Линк импорт экспорт") {
            selector = MainPage.linkIE;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе Холостая подача") {
            selector = MainPage.linkCarriageBlankArrival;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе Срыв поставки") {
            selector = MainPage.linkCarriageFailed;
            browser.pause(2000);
        }
        if (selector === "Линк перевозки в статусе Отменена") {
            selector = MainPage.linkCarriageCancelled;
            browser.pause(2000);
        }
        if (selector === "Склад доставки 2ой в кроссдоковой накладной") {
            selector = MainPage.selectDeliveryWarehousesSecondCrossdock;
            browser.pause(2000);
        }
        if (selector === "Склад доставки 3тий в кроссдоковой накладной") {
            selector = MainPage.selectDeliveryWarehousesSecondCrossdock;
            browser.pause(2000);
        }
        if (selector === "Склад доставки 4тый в кроссдоковой накладной") {
            selector = MainPage.selectDeliveryWarehousesSecondCrossdock;
            browser.pause(2000);
        }
        if (selector === "Дополнительные затраты") {
            selector = MainPage.additionalCost;
            browser.pause(2000);
        }
        if (selector === "Штрафы") {
            selector = MainPage.fines;
            browser.pause(2000);
        }
        if (selector === "Ставка за перевозку в перевозке") {
            selector = MainPage.rateForTheCarriage;
            browser.pause(2000);
        }
        browser.pause(2000);
        scroll(selector);
        browser.pause(1000);
    }
);
When(
    /^I check filter "([^"]*)?" deliveryNumber$/,
    function (value) {
        let typeElement;
        if (value === "random number") {
            value = `Накладная${rnd}`;
        }
        if (value === "random number copy") {
            value = `Накладная${rnd}-C`;
        }
        if (value === "random number copy IE") {
            value = `Накладная${rnd}/1`;
        }
        typeElement = LoginPage.fieldDeliveryNumber;
        typeElement.waitForExist();
        typeElement.setValue(value);
        browser.pause(1000);
        Loaders("Loader");
    }
);
When(
    /^I set filter "([^"]*)?" deliveryNumber$/,
    function (value) {
        let typeElement, value1;
        if (value === "random number all") {
            value1 = `Накладная${rnd}` + `,` + `Накладная2${rnd}`;
        }
        typeElement = LoginPage.fieldDeliveryNumber;
        typeElement.waitForExist();
        typeElement.setValue(value1);
        browser.pause(2000);
        Loaders("Loader");
    }
);
When(
    /^I read number carriages "([^"]*)?" and add him in MO$/,
    function (entity) {
        let typeElement, value, value2, value3, numberCarriage2;
        //получаем номер перевозки из шапки перевозки и обрезаем первые 12 символов.
        let numberCarriage = LoginPage.numberCarriageInHeader.getText();
        numberCarriage2 = numberCarriage.slice(12);
        // переходим в кабинет сбрасываем фильтр
        browser.url("/");
        browser.pause(10000);
        LoginPage.Office.waitForExist(20000);
        if (entity === "bacardi" || entity === "vistakon" || entity === "ie") {
            LoginPage.predstavlenie1.click();
        }
        LoginPage.Office.waitForExist(20000);
        LoginPage.buttonRemoveFilter.click();
        Loaders("Loader");
        browser.pause(10000);
        LoginPage.Office.waitForExist(20000);
        browser.refresh();
        browser.pause(2000);
        $(MainPage.buttonReload).click();
        browser.pause(2000);
        //если сортировка сбита, то вернуть сортировку во дате
        for (var i = 0; i <= 2; i++) {
            if ($(MainPage.arrowSortData).isDisplayed()) {
                break;
            } else {
                $(MainPage.arrowSortDataGrid).click();
                browser.pause(2000);
            }
        }
        // заполняем в поле поиска обе накладных
        value = `Накладная${rnd}`;
        value2 = `Накладная2${rnd}`;
        value3 = value + " " + value2
        typeElement = LoginPage.fieldDeliveryNumber;
        typeElement.waitForExist();
        typeElement.setValue(value3);
        browser.pause(4000);
        Loaders("Loader");
        //выделяем галкой вторую накладную
        LoginPage.secondCheckbox.click();
        browser.pause(2000);
        LoginPage.secondCheckboxIsChecked.waitForExist(20000);
        LoginPage.multiselectPanel.waitForExist(20000);
        //заполняем в поле МО номер перевозки
        LoginPage.selectInPanelMO.click();
        browser.pause(2000);
        LoginPage.panelMODragInCarriages.click();
        browser.pause(1000);
        LoginPage.panelMOInputNumberCarriages.setValue(numberCarriage2);
    }
);
When(
    /^I add "([^"]*)?" and "([^"]*)?" to search "([^"]*)?" field in grid$/,
    function (number1, number2, field) {
        let numberSumm, typeElement;
        // заполняем в поле поиска обе накладных
        if (number1 === "random number") {
            number1 = `Накладная${rnd}`;
        }
        if (number2 === "random number 2") {
            number2 = `Накладная2${rnd}`;
        }
        if (field === "waybills") {
            typeElement = LoginPage.fieldDeliveryNumber;
        }
        numberSumm = number1 + " " + number2;
        typeElement.waitForExist();
        typeElement.setValue(numberSumm);
        browser.pause(4000);
        Loaders("Loader");
    }
);

When(
    /^I close the last opened (window|tab)$/,
    closeLastOpenedWindow
);

When(
    /^I focus the last opened (window|tab)$/,
    focusLastOpenedWindow
);

When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    selectOptionByIndex
);

When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
        selectOption
);

When(
    /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    moveTo
);

When(
    /^I move the element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    function (selector, x, y) {
        if (selector === "кнопка ТС прибыло на выгрузку в перевозке") {
            selector = MainPage.buttonVehicleArrivedToUnloading;
        }
        scroll(MainPage.headerOffice);
        moveTo(selector, x, y);
        browser.pause(4000);
    }
);

When(
    /^I read number carriages and add him in Proforma( LTL)*$/,
    function setNumberCarriageInProforma(typeTC) {
        let typeElement, numberCarriage2;
        //получаем номер перевозки из шапки перевозки и обрезаем первые 12 символов.
        let numberCarriage = $("//div[@id='mainView']/div/div/div/span").getText();
        numberCarriage2 = numberCarriage.slice(12);
        $(MainPage.selectProforma).click();
        Loaders("Loader");
        browser.pause(10000);
        if ($(MainPage.proformaGrid).isDisplayed()) {
            browser.refresh();
            Loaders("Loader");
            LoginPage.proformaGrid.waitForExist(20000);
        }
        LoginPage.proformaGrid.waitForExist(20000);
        browser.pause(5000);
        if (typeTC) {
            $(MainPage.selectProformaLTL).click();
            Loaders("Loader");
            browser.pause(10000);
            if ($(MainPage.proformaGrid).isDisplayed()) {
                browser.refresh();
                Loaders("Loader");
                LoginPage.proformaGrid.waitForExist(20000);
            }
            LoginPage.proformaGrid.waitForExist(20000);
        }
        $(MainPage.buttonRemoveFilter).click()
        Loaders("Loader");
        // заполняем в поле поиска номер перевозки
        browser.pause(5000);
        typeElement = LoginPage.fieldShippingNumberProforma;
        typeElement.waitForExist(20000);
        typeElement.setValue(numberCarriage2);
        browser.pause(5000);
        Loaders("Loader");
    }
);


When(
    /^I read number carriages and add him in Preform$/,
    function () {
        let typeElement, numberCarriage2;
        //получаем номер перевозки из шапки перевозки и обрезаем первые 12 символов.
        let numberCarriage = $("//div[@id='mainView']/div/div/div/span").getText();
        numberCarriage2 = numberCarriage.slice(12);
        $(MainPage.selectPreform).click();
        Loaders("Loader");
        LoginPage.prеformGrid.waitForExist(20000);
        // заполняем в поле поиска номер перевозки
        LoginPage.iconShippingNumberPreform.click();
        typeElement = LoginPage.fieldShippingNumberPreform;
        typeElement.waitForExist();
        typeElement.setValue(numberCarriage2);
        browser.pause(30000);
        $(MainPage.confirmPreformEnter).click();
        Loaders("Loader");
    }
);

When(
    /^I check rate "([^"]*)?",rate simple "([^"]*)?"(,rate sapovirus "([^"]*)?")* in( LTL)* Proforma$/,
    function (rate, rateSimple, rateSapovirus, typeTC) {
        let fieldRate = $(MainPage.fieldRateProforma).getText();
        let fieldRateSimple = $(MainPage.fieldRateSimpleProforma).getText();

        if (typeTC) {
            fieldRate = $(MainPage.fieldRateProformaLTL).getText();
            fieldRateSimple = $(MainPage.fieldRateSimpleProformaLTL).getText();
        }
        //сравниваем сумму и то что получили в поле
        if (rate = !fieldRate) {
            throw new Error("Rate in Proforma is not correct");
        }
        if (rateSimple = !fieldRateSimple) {
            throw new Error("Rate Simple in Proforma is not correct");
        }
        if (rateSapovirus) {
            let fieldRateSapovirus = $(MainPage.fieldRateSapovirusProforma).getText;
            if (rateSapovirus = !fieldRateSapovirus) {
                throw new Error("Rate Sapovirus in Proforma is not correct");
            }
        }
    }
);

When(
    /^I check status archived and "([^"]*)?" transport company$/,
    function checkStatusArchived(tk) {
        setTimeout(checkStatusArchived, 360000);
        //если накладная без перевозки, сделать перевозку и довести до собрана
        if ($(MainPage.gridWaybillsStatusValidated).isDisplayed() || $(MainPage.gridWaybillsStatusActive).isDisplayed() || $(MainPage.gridWaybillsStatusPackaging).isDisplayed()) {
            for (var i = 0; i < 4; i++) {
                if ($(MainPage.buttonInTransportation).isDisplayed()) {
                    LoginPage.buttonInTransportation.waitForExist(20000);
                    LoginPage.buttonInTransportation.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonInPackaging).isDisplayed()) {
                    LoginPage.buttonInPackaging.waitForExist(20000);
                    LoginPage.buttonInPackaging.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonInPacked).isDisplayed()) {
                    LoginPage.buttonInPacked.waitForExist(20000);
                    LoginPage.buttonInPacked.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
            }
        }
        if ($(MainPage.gridWaybillsStatusPacked).isDisplayed() || $(MainPage.gridWaybillsStatusDelivered).isDisplayed() || $(MainPage.gridWaybillsStatusShipped).isDisplayed() || $(MainPage.gridWaybillsStatusAccepted).isDisplayed() || $(MainPage.gridWaybillsStatusArchived).isDisplayed()) {
            Loaders("Loader");
            browser.pause(1000);
            //если накладная в принята или досталена, довести до архива
            if ($(MainPage.gridWaybillsStatusDelivered).isDisplayed() || $(MainPage.gridWaybillsStatusShipped).isDisplayed() || $(MainPage.gridWaybillsStatusAccepted).isDisplayed()) {
                scroll(MainPage.headerOffice);
                for (var i = 0; i < 4; i++) {
                    if ($(MainPage.buttonWaybillsStatusAccepted).isDisplayed()) {
                        LoginPage.buttonWaybillsStatusAccepted.waitForExist(20000);
                        LoginPage.buttonWaybillsStatusAccepted.click();
                        browser.pause(2000);
                        browser.acceptAlert();
                        Loaders("Loader");
                        browser.pause(2000);
                    }
                    if ($(MainPage.buttonWaybillsStatusArhived).isDisplayed()) {
                        LoginPage.buttonWaybillsStatusArhived.waitForExist(20000);
                        LoginPage.buttonWaybillsStatusArhived.click();
                        browser.pause(2000);
                        browser.acceptAlert();
                        Loaders("Loader");
                        browser.pause(2000);
                    }
                }
            }
            scroll(MainPage.linkCommentsShipping);
            //если перевозка не в архиве, довести до архива.
            // переходим из накладной в перевозку
            for (var i = 0; i < 12; i++) {
                if ($(MainPage.linkCarriageCreated).isDisplayed()) {
                    LoginPage.linkCarriageCreated.click();
                    Loaders("Loader");
                    browser.pause(2000);
                    LoginPage.buttonCalculateTK.waitForExist(20000);
                    scroll(MainPage.linkDirectionCarriers);
                    LoginPage.buttonCalculateTK.click();
                    browser.pause(2000);
                    LoginPage.selectListTK.waitForExist(20000);
                    LoginPage.selectListTK.click();
                    browser.pause(2000);
                    LoginPage.addTKList.setValue(tk);
                    LoginPage.confirmSelect.click();
                    Loaders("Loader");
                    LoginPage.selectTKedit.waitForExist(20000);
                    LoginPage.selectTKedit.click();
                    Loaders("Loader");
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleIsOrdered.waitForExist(20000);
                    LoginPage.buttonVehicleIsOrdered.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                    scroll(MainPage.headerOffice);
                }
                if ($(MainPage.linkCarriageVehicleOrdered).isDisplayed()) {
                    LoginPage.linkCarriageVehicleOrdered.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageVehicleConfirmed).isDisplayed()) {
                    LoginPage.linkCarriageVehicleConfirmed.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusArrivedToLoading).isDisplayed()) {
                    LoginPage.linkCarriageStatusArrivedToLoading.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusDepartedFromLoading).isDisplayed()) {
                    LoginPage.linkCarriageStatusDepartedFromLoading.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusDepartedFromLoading).isDisplayed()) {
                    LoginPage.linkCarriageStatusDepartedFromLoading.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusVechicleToUploading).isDisplayed()) {
                    scroll(MainPage.linkCommentsShipping);
                    LoginPage.linkCarriageStatusVechicleToUploading.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusVechicleDepartedFromLoading).isDisplayed()) {
                    LoginPage.linkCarriageStatusVechicleDepartedFromLoading.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusVechicleArrivedToUnloading).isDisplayed()) {
                    LoginPage.linkCarriageStatusVechicleArrivedToUnloading.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusVechicleStatusFinished).isDisplayed()) {
                    LoginPage.linkCarriageStatusVechicleStatusFinished.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusPriceConfirmed).isDisplayed()) {
                    LoginPage.linkCarriageStatusPriceConfirmed.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.linkCarriageStatusBilled).isDisplayed()) {
                    LoginPage.linkCarriageStatusBilled.click();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                // начинаем двигать статусы перевозки
                if ($(MainPage.buttonVehicleConfirmed).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleConfirmed.waitForExist(20000);
                    LoginPage.buttonVehicleConfirmed.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                    if ($(MainPage.buttonIgnoreAndConfirmCarriage).isDisplayed()) {
                        $(MainPage.buttonIgnoreAndConfirmCarriage).click();
                        Loaders("Loader");
                        browser.pause(2000);
                    }
                }
                if ($(MainPage.buttonVehicleArrivedToLoading).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleArrivedToLoading.waitForExist(20000);
                    LoginPage.buttonVehicleArrivedToLoading.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonVehicleDepartedFromLoading).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleDepartedFromLoading.waitForExist(20000);
                    LoginPage.buttonVehicleDepartedFromLoading.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonVehicleStatusFinished).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleStatusFinished.waitForExist(20000);
                    LoginPage.buttonVehicleStatusFinished.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonVehicleArrivedToUnloading).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleArrivedToUnloading.waitForExist(20000);
                    LoginPage.buttonVehicleArrivedToUnloading.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonVehicleDepartedFromUnloading).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleDepartedFromUnloading.waitForExist(20000);
                    LoginPage.buttonVehicleDepartedFromUnloading.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonVehicleDepartedFromUnloading).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleDepartedFromUnloading.waitForExist(20000);
                    LoginPage.buttonVehicleDepartedFromUnloading.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonVehiclePriceConfirmed).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehiclePriceConfirmed.waitForExist(20000);
                    LoginPage.buttonVehiclePriceConfirmed.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonVehicleStatusBilled).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleStatusBilled.waitForExist(20000);
                    LoginPage.buttonVehicleStatusBilled.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    Loaders("Loader");
                    browser.pause(2000);
                }
                if ($(MainPage.buttonVehicleStatusArhived).isDisplayed()) {
                    scroll(MainPage.headerOffice);
                    LoginPage.buttonVehicleStatusArhived.waitForExist(20000);
                    LoginPage.buttonVehicleStatusArhived.click();
                    browser.pause(2000);
                    browser.acceptAlert();
                    browser.pause(10000);
                    scroll(MainPage.linkDirectionCarriers);
                    LoginPage.linkDirectionCarriers.click();
                    browser.pause(10000);
                    if ($(MainPage.linkWaybillsAccepted).isDisplayed()) {
                        LoginPage.linkWaybillsAccepted.click();
                        Loaders("Loader");
                        browser.pause(2000);
                    }
                    if ($(MainPage.linkWaybillsArchived).isDisplayed()) {
                        LoginPage.linkWaybillsArchived.click();
                        Loaders("Loader");
                        browser.pause(2000);
                    }
                    if ($(MainPage.gridWaybillsStatusDelivered).isDisplayed() || $(MainPage.gridWaybillsStatusShipped).isDisplayed() || $(MainPage.gridWaybillsStatusAccepted).isDisplayed()) {
                        scroll(MainPage.headerOffice);
                        for (var i = 0; i < 4; i++) {
                            if ($(MainPage.buttonWaybillsStatusAccepted).isDisplayed()) {
                                LoginPage.buttonWaybillsStatusAccepted.waitForExist(20000);
                                LoginPage.buttonWaybillsStatusAccepted.click();
                                browser.pause(2000);
                                browser.acceptAlert();
                                Loaders("Loader");
                                browser.pause(2000);
                            }
                            if ($(MainPage.buttonWaybillsStatusArhived).isDisplayed()) {
                                LoginPage.buttonWaybillsStatusArhived.waitForExist(20000);
                                LoginPage.buttonWaybillsStatusArhived.click();
                                browser.pause(2000);
                                browser.acceptAlert();
                                Loaders("Loader");
                                browser.pause(2000);
                            }
                        }
                    }
                    return;
                }
            }
        }

    }
);
When(
    /^I click calculate and select "([^"]*)?" transport company$/,
    function (tk) {
        Loaders("Loader");
        $(MainPage.gridCarriersStatusCreated).waitForExist(30000);
        scroll(MainPage.buttonCalculateTK);
        LoginPage.buttonCalculateTK.click();
        Loaders("Loader");
        if ($(MainPage.activeSelectListTK).isDisplayed()) {
            LoginPage.buttonCalculateTK.click();
            browser.pause(3000);
        }
        LoginPage.selectListTK.click();
        browser.pause(3000);
        LoginPage.addTKList.setValue(tk);
        $(MainPage.confirmSelect).waitForExist(30000);
        LoginPage.confirmSelect.click();
        Loaders("Loader");
        LoginPage.selectTKedit.click();
        Loaders("Loader");
    }
);
When(
    /^I click button Add Additional Cost$/,
    function () {
        $(MainPage.addStringAdditionalCost).click();
        browser.pause(3000);
        Loaders("Loader");
        browser.pause(1000);
    }
);
When(
    /^I reload page$/,
    function () {
        browser.refresh();
    }
);
When(
    /^I delete all mails in mailnesia$/,
    function () {
        if ($(MainPage.iconDeleteMailnesia).isDisplayed()) {
            $(MainPage.iconDeleteMailnesia).waitForExist(30000);
            LoginPage.iconDeleteMailnesia.click();
            browser.pause(2000);
            closeAllButFirstTab;
            browser.pause(2000);
            $(MainPage.iconYesDeleteMailnesia).waitForExist(30000);
            LoginPage.iconYesDeleteMailnesia.click();
            browser.pause(2000);
            LoginPage.messageEmptyMailbox.waitForExist(40000);
        }
    }
);
When(
    /^I revert status "([^"]*)?"$/,
    function (element) {
        let selector;
        if (element === "Счет выставлен") {
            selector = MainPage.gridCarriersStatusBilled
        }
        if (element === "Сумма подтверждена") {
            selector = MainPage.gridCarriersStatusPriceConfirmed
        }
        if (element === "Перевозка завершена") {
            selector = MainPage.gridCarriersStatusFinished
        }
        if (element === "ТС убыло с выгрузки") {
            selector = MainPage.gridCarriersStatusVehicleDepartedFromUploading
        }
        if (element === "ТС прибыло на выгрузку") {
            selector = MainPage.gridCarriersStatusVehicleArrivedToUploading
        }
        if (element === "ТС убыло с погрузки") {
            selector = MainPage.gridCarriersStatusVehicleDepartedFromLoading
        }
        if (element === "ТС прибыло на погрузку") {
            selector = MainPage.gridCarriersStatusVehicleArrivedToLoading
        }
        if (element === "Подтверждена") {
            selector = MainPage.gridCarriersStatusVehicleConfirmed
        }
        if (element === "ТС заказано") {
            selector = MainPage.gridCarriersStatusVehicleOrdered
        }
        if (element === "Создана") {
            selector = MainPage.gridCarriersStatusCreated
        }
        scroll(MainPage.headerOffice);
        LoginPage.transferToTheStatus.waitForExist(30000);
        LoginPage.transferToTheStatus.click();
        LoginPage.gridCarriersRevertStatus.waitForExist(30000);
        browser.pause(1500);
        LoginPage.iconTransferToTheStatus.click();
        LoginPage.addTextTransferToTheStatus.waitForExist(30000);
        browser.pause(1500);
        LoginPage.addTextTransferToTheStatus.setValue(element);
        pressButton("Enter");
        LoginPage.textTransferComment.waitForExist(20000);
        LoginPage.textTransferComment.setValue("Откатываем тестовую накладную" + element);
        LoginPage.buttonSaveRevertStatus.click();
        Loaders("Loader");
        $(selector).waitForExist(60000);
        Loaders("Loader");
    }
)
When(
    /^I moving status forward "([^"]*)?"$/,
    function (element) {
        let selector, selectorGrid;
        if (element === "ТС заказано") {
            selector = LoginPage.buttonVehicleIsOrdered
            selectorGrid = MainPage.gridCarriersStatusVehicleOrdered
        }
        if (element === "Подтверждена") {
            selector = LoginPage.buttonVehicleConfirmed
            selectorGrid = MainPage.gridCarriersStatusVehicleConfirmed
        }
        if (element === "ТС прибыло на погрузку") {
            selector = LoginPage.buttonVehicleArrivedToLoading
            selectorGrid = MainPage.gridCarriersStatusVehicleArrivedToLoading
        }
        if (element === "ТС убыло с погрузки") {
            selector = LoginPage.buttonVehicleDepartedFromLoading
            selectorGrid = MainPage.gridCarriersStatusVehicleDepartedFromLoading
        }
        if (element === "ТС прибыло на выгрузку") {
            selector = LoginPage.buttonVehicleArrivedToUnloading
            selectorGrid = MainPage.gridCarriersStatusVehicleArrivedToUploading
        }
        if (element === "ТС убыло с выгрузки") {
            selector = LoginPage.buttonVehicleDepartedFromUnloading
            selectorGrid = MainPage.gridCarriersStatusVehicleDepartedFromUploading
        }
        if (element === "Перевозка завершена") {
            selector = LoginPage.buttonVehicleStatusFinished
            selectorGrid = MainPage.gridCarriersStatusFinished
        }
        if (element === "Сумма подтверждена") {
            selector = LoginPage.buttonVehiclePriceConfirmed
            selectorGrid = MainPage.gridCarriersStatusPriceConfirmed
        }
        if (element === "Счет выставлен") {
            selector = LoginPage.buttonVehicleStatusBilled
            selectorGrid = MainPage.gridCarriersStatusBilled
        }
        if (element === "В архиве") {
            selector = LoginPage.buttonVehicleStatusArhived
            selectorGrid = MainPage.gridCarriersStatusArchived
        }
        scroll(MainPage.headerOffice);
        selector.waitForExist(20000);
        selector.click();
        browser.pause(1000);
        browser.acceptAlert();
        browser.pause(1000);
        Loaders("Loader");
        if ($(MainPage.buttonIgnoreAndConfirmCarriage).isDisplayed()) {
            $(MainPage.buttonIgnoreAndConfirmCarriage).click();
            Loaders("Loader");
            browser.pause(2000);
        }
        $(selectorGrid).waitForExist(60000);
        Loaders("Loader");
    }
);

When(
    /^I moving waybills status forward "([^"]*)?"$/,
    function (element) {
        let selector, selectorGrid;
        if (element === "Создана") {
            selector = LoginPage.buttonInValidated
            selectorGrid = MainPage.gridWaybillsStatusValidated
        }
        if (element === "В перевозке") {
            selector = LoginPage.buttonInTransportation
            selectorGrid = MainPage.gridWaybillsStatusActive
        }
        if (element === "В перевозке сразу собрана") {
            selector = LoginPage.buttonInTransportation
            selectorGrid = MainPage.gridWaybillsStatusPacked
        }
        if (element === "В подборке") {
            selector = LoginPage.buttonInPackaging
            selectorGrid = MainPage.gridWaybillsStatusPackaging
        }
        if (element === "Собрана") {
            selector = LoginPage.buttonInPacked
            selectorGrid = MainPage.gridWaybillsStatusPacked
        }
        scroll(MainPage.headerOffice);
        selector.waitForExist(20000);
        selector.click();
        browser.pause(1000);
        browser.acceptAlert();
        browser.pause(1000);
        Loaders("Loader");
        $(selectorGrid).waitForExist(60000);
        Loaders("Loader");
    }
);
When(
    /^I add shipping warehouses "([^"]*)?" and delivery warehouses "([^"]*)?"$/,
    function (shipWarehouses, deliveryWarehouses) {
        //заполнение склада отгрузки
        LoginPage.selectShippingWarehouses.click();
        $(MainPage.footerSearchWarehouses).waitForExist(30000);
        Loaders("Loader");
        LoginPage.addSearchWarehouses.waitForExist(30000);
        LoginPage.addSearchWarehouses.setValue(shipWarehouses);
        browser.pause(1000);
        LoginPage.buttonSearchWarehouses.waitForExist(30000);
        LoginPage.buttonSearchWarehouses.click();
        browser.pause(1000);
        Loaders("Loader");
        $("//tr[@class[contains(.,'dx-row dx-data-row dx-row-lines dx-column-lines tms-grid-row')] and contains(.,'" + shipWarehouses + "')]").waitForExist(90000);
        browser.pause(1000);
        LoginPage.buttonFistCheckbox.waitForExist(30000);
        LoginPage.buttonFistCheckbox.click();
        browser.pause(1000);
        $(MainPage.selectWarehousesIsCheck).waitForExist(30000);
        LoginPage.buttonSaveWarehouses.waitForExist(30000);
        LoginPage.buttonSaveWarehouses.click();
        $(MainPage.footerWaybills).waitForExist(30000);
        browser.pause(1000);
        //заполнение склада доставки
        LoginPage.selectDeliveryWarehouses.click();
        $(MainPage.footerSearchWarehouses).waitForExist(30000);
        Loaders("Loader");
        LoginPage.addSearchWarehouses.waitForExist(30000);
        LoginPage.addSearchWarehouses.setValue(deliveryWarehouses);
        browser.pause(1000);
        LoginPage.buttonSearchWarehouses.waitForExist(30000);
        LoginPage.buttonSearchWarehouses.click();
        browser.pause(1000);
        Loaders("Loader");
        $("//tr[@class[contains(.,'dx-row dx-data-row dx-row-lines dx-column-lines tms-grid-row')] and contains(.,'" + deliveryWarehouses + "')]").waitForExist(30000);
        browser.pause(1000);
        LoginPage.buttonFistCheckbox.waitForExist(30000);
        LoginPage.buttonFistCheckbox.click();
        browser.pause(1000);
        $(MainPage.selectWarehousesIsCheck).waitForExist(30000);
        LoginPage.buttonSaveWarehouses.waitForExist(30000);
        LoginPage.buttonSaveWarehouses.click();
        $(MainPage.footerWaybills).waitForExist(30000);
    });
When(
    /^I choice "([^"]*)?" of direction$/,
    (value) => {
        LoginPage.buttonDirection.waitForExist(90000);
        LoginPage.buttonDirection.click();
        browser.pause(3000);
        LoginPage.fieldChoiceDirection.waitForExist(90000);
        LoginPage.fieldChoiceDirection.click();
        clearInputField(MainPage.fieldChoiceDirection);
        LoginPage.fieldChoiceDirection.setValue(value);
        browser.pause(4000);
        LoginPage.firstDirection.waitForExist(90000);
        LoginPage.firstDirection.click();
        LoginPage.buttonConfirmChoiceDirection.waitForExist(90000);
        LoginPage.buttonConfirmChoiceDirection.click();
        browser.pause(2000);
        Loaders('Loader');
    });
