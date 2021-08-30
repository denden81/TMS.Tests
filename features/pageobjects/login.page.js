/* eslint-disable indent,no-undef */
var Page = require('./page')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: {
        get: function () {
            return $("//INPUT[@name='login']");
        }
    },
    password: {
        get: function () {
            return $("//INPUT[@name='password']");
        }
    },
    submit: {
        get: function () {
            return $("(//INPUT[@class='site-button'])[1]");
        }
    },
    buttonAdd: {
        get: function () {
            return $('//BUTTON[@class=\'btn btn-default btn-sm ng-scope\'][text()=\'Добавить\']');
        }
    },
    ConsumerAdd: {
        get: function () {
            return $("//ul[@class='dropdown-menu']//button[contains(text(),'Consumer&Pharma')]");
        }
    },
    ConsumerSub: {
        get: function () {
            return $("//a/div[text()='J&J Consumer']");
        }
    },
    EcolabAdd: {
        get: function () {
            return $("//ul[@class='dropdown-menu']//button[contains(text(),'Ecolab')]");
        }
    },
    EcolabSub: {
        get: function () {
            return $("//a/div[text()='Ecolab']");
        }
    },
    UkraineAdd: {
        get: function () {
            return $("//ul[@class='dropdown-menu']//button[contains(text(),'Ukraine')]");
        }
    },
    UkraineSub: {
        get: function () {
            return $("//a/div[text()='JnJ Ukraine']");
        }
    },
    BacardiAdd: {
        get: function () {
            return $("//ul[@class='dropdown-menu']//button[contains(text(),'Bacardi')]");
        }
    },
    BacardiSub: {
        get: function () {
            return $("//a/div[text()='Bacardi']");
        }
    },
    inputLogin: {
        get: function () {
            return $("//INPUT[@id='inputLogin']");
        }
    },
    searchLogin: {
        get: function () {
            return $("//td/div/div/div/div/input");
        }
    },
    searchComment: {
        get: function () {
            return $("//td[8]/div/div/div/div/input");
        }
    },
    searchCommentOther: {
        get: function () {
            return $("//td[8]/div/div/div/div/input");
        }
    },
    inputPassword: {
        get: function () {
            return $("//INPUT[@id='inputPassword']");
        }
    },
    inputEmail: {
        get: function () {
            return $("//INPUT[@id='inputEmail']");
        }
    },
    inputFullName: {
        get: function () {
            return $("//INPUT[@id='inputFullName']");
        }
    },
    inputComment: {
        get: function () {
            return $("//TEXTAREA[@id='inputComment']");
        }
    },
    userCode: {
        get: function () {
            return $("//INPUT[@id='userCode']");
        }
    },
    inputSubCompany: {
        get: function () {
            return $("//div[@id='inputSubCompany']/div/span");
        }
    },
    inputRoleToggle: {
        get: function () {
            return $("//div[@id='inputRole']//span[@class='btn btn-default form-control ui-select-toggle']");
        }
    },
    inputRoleTK: {
        get: function () {
            return $("//div[@id='inputRole']/ul[@role='listbox']//*[text()='Транспортный координатор']");
        }
    },
    inputRoleClient: {
        get: function () {
            return $("//div[@id='inputRole']/ul[@role='listbox']//*[text()='Клиент']");
        }
    },
    inputRoleBroker: {
        get: function () {
            return $("//div[@id='inputRole']/ul[@role='listbox']//*[text()='Брокер']");
        }
    },
    buttonSave: {
        get: function () {
            return $("//button[text()='Сохранить']");
        }
    },
    buttonExit: {
        get: function () {
            return $("//a[contains(text(),'Выход')]");
        }
    },
    buttonEnter: {
        get: function () {
            return $("//input[@value='Войти']");
        }
    },
    passwordIsChange: {
        get: function () {
            return $("//*[contains(text(),'Ваш пароль был успешно изменен!')]");
        }
    },
    buttonProfile: {
        get: function () {
            return $("//a[@class[contains(.,'user-widget-logout')] and contains(.,'Профиль')]");
        }
    },
    profileNewPassword: {
        get: function () {
            return $("//input[@id='EditUserModel_NewPassword']");
        }
    },
    profileNewPasswordAgain: {
        get: function () {
            return $("//input[@id='EditUserModel_NewPasswordAgain']");
        }
    },
    profileSubmit: {
        get: function () {
            return $("//button[@type='submit']");
        }
    },
    Office: {
        get: function () {
            return $("//a[contains(text(),'Кабинет')]");
        }
    },
    OfficeGrid: {
        get: function () {
            return $("//body/div[@role='navigation']/div[@class='navbar-inner']//div[@class='collapse navbar-collapse']/ul[1]//a[@href='/PersistentGrids']");
        }
    },
    buttonRemoveFilter: {
        get: function () {
            return $("//button[contains(@class, 'btn btn-default btn-sm glyphicon glyphicon-remove')]");
        }
    },
    buttonReload: {
        get: function () {
            return $("//button[@class='btn btn-default btn-sm glyphicon glyphicon-refresh']");
        }
    },
    fieldDeliveryNumber: {
        get: function () {
            return $("//td[3]/div/div/div/div/input");
        }
    },
    fieldDateShippingMO: {
        get: function () {
            return $("//div[3]/div/div[2]/div/input");
        }
    },
    fieldDateBackDocumentMO: {
        get: function () {
            return $("//div[2]/input");
        }
    },
    fieldDateInvoiceIE: {
        get: function () {
            return $("//div[@id='InvoiceDate']/input");
        }
    },
    fieldOrderInWaybills: {
        get: function () {
            return $("//div[6]/div/div/div/table/tbody/tr/td/div");
        }
    },
    fieldCarriage: {
        get: function () {
            return $("//td[4]/div/div/div/div/input");
        }
    },
    filterData: {
        get: function () {
            return $("//input[@class[contains(.,'dx-texteditor-input')]]");
        }
    },
    filterCalendar: {
        get: function () {
            return $("//td[2]/div/div/div/div[2]/div");
        }
    },
    filterCalendarYearBack: {
        get: function () {
            return $("//body/div[7]/div//div[@class='dx-calendar-navigator']/a[1]");
        }
    },
    filterCalendarDate: {
        get: function () {
            return $("//div[7]/div//table//td[.='22']");
        }
    },
    statusOfDeliveryNote: {
        get: function () {
            return $("//td[5]/div/div/div/div[2]/div");
        }
    },
    statusOfCarriage: {
        get: function () {
            return $("//td[6]/div/div/div/div[2]/div");
        }
    },
    fieldstatusOfCarriage: {
        get: function () {
            return $("//td[6]/div/div/div/div/div/input");
        }
    },
    statusOfDeliveryNoteNotChecked: {
        get: function () {
            return $("//div[@title[contains(.,'Не проверена')]]");
        }
    },
    statusOfDeliveryNoteCreated: {
        get: function () {
            return $("//div[@title[contains(.,'Создана')]]");
        }
    },
    statusOfDeliveryNoteTransportation: {
        get: function () {
            return $("//div[@title[contains(.,'В перевозке')]]");
        }
    },
    statusOfDeliveryNotePicking: {
        get: function () {
            return $("//div[@title[contains(.,'В подборке')]]");
        }
    },
    statusOfDeliveryNotePicked: {
        get: function () {
            return $("//div[@title[contains(.,'Собрана')]]");
        }
    },
    statusOfDeliveryNoteSnipped: {
        get: function () {
            return $("//div[@title[contains(.,'Отгружена')]]");
        }
    },
    statusOfDeliveryNoteDelivered: {
        get: function () {
            return $("//div[@title[contains(.,'Доставлена')]]");
        }
    },
    statusOfDeliveryNoteAccepted: {
        get: function () {
            return $("//div[@title[contains(.,'Принята')]]");
        }
    },
    statusOfDeliveryNoteFullRefund: {
        get: function () {
            return $("//div[@title[contains(.,'Полный возврат')]]");
        }
    },
    statusOfDeliveryNoteLost: {
        get: function () {
            return $("//div[@title[contains(.,'Потеряна')]]");
        }
    },
    statusOfDeliveryNoteArchived: {
        get: function () {
            return $("//div[@title[contains(.,'В архиве')]]");
        }
    },
    statusOfDeliveryNoteRemoved: {
        get: function () {
            return $("//div[@title[contains(.,'Удалена')]]");
        }
    },
    statusOfCarriageCreated: {
        get: function () {
            return $("//div[@title[contains(.,'Создана')]]");
        }
    },
    statusOfCarriageVenicleOrdered: {
        get: function () {
            return $("//div[@title[contains(.,'ТС заказано')]]");
        }
    },
    statusOfCarriageConfirmed: {
        get: function () {
            return $("//div[@title[contains(.,'Подтверждена')]]");
        }
    },
    statusOfCarriageVenicleArrived: {
        get: function () {
            return $("//div[@title[contains(.,'ТС прибыло на погрузку')]]");
        }
    },
    statusOfCarriageCancelled: {
        get: function () {
            return $("//div[@title[contains(.,'Отменена')]]");
        }
    },
    statusOfCarriageSupplyDisruption: {
        get: function () {
            return $("//div[@title[contains(.,'Срыв поставки')]]");
        }
    },
    statusOfCarriageIdleSupply: {
        get: function () {
            return $("//div[@title[contains(.,'Холостая подача')]]");
        }
    },
    statusOfCarriageVenicleDeparted: {
        get: function () {
            return $("//div[@title[contains(.,'ТС убыло с погрузки')]]");
        }
    },
    statusOfCarriageVenicleArrivedToUnload: {
        get: function () {
            return $("//div[@title[contains(.,'ТС прибыло на выгрузку')]]");
        }
    },
    statusOfCarriageCreatedVenicleDepartedTheUnload: {
        get: function () {
            return $("//div[@title[contains(.,'ТС убыло с выгрузки')]]");
        }
    },
    statusOfCarriageTransportationComplete: {
        get: function () {
            return $("//div[@title[contains(.,'Перевозка завершена')]]");
        }
    },
    statusOfCarriageCostConfirmed: {
        get: function () {
            return $("//div[@title[contains(.,'Сумма подтверждена')]]");
        }
    },
    statusOfCarriageBillCreated: {
        get: function () {
            return $("//div[@title[contains(.,'Счет выставлен')]]");
        }
    },
    statusOfCarriageArchived: {
        get: function () {
            return $("//div[@title[contains(.,'В архиве')]]");
        }
    },
    statusOfCarriageRejectedTC: {
        get: function () {
            return $("//div[@title[contains(.,'Отклонена ТК')]]");
        }
    },
    statusOfCarriageCostNotConfirmed: {
        get: function () {
            return $("//div[@title[contains(.,'Сумма не подтверждена')]]");
        }
    },
    iconAlternativeFilter: {
        get: function () {
            return $("//td[@class[contains(.,'dx-datagrid-action-cursor')] and contains(.,'Склад доставки')]//img");
        }
    },
    fieldSearchAlternativeFilter: {
        get: function () {
            return $("//input[@id='nameFilter']");
        }
    },
    checkboxSearchAlternativeFilter: {
        get: function () {
            return $("//div[@id[contains(.,'containersContent')]]/div/input");
        }
    },
    chooseSearchAlternativeFilter: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-primary ng-scope')] and contains(.,'Выбрать')]");
        }
    },
    selectAllAlternativeFilter: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-default ng-scope')] and contains(.,'Выбрать все')]");
        }
    },
    clearAllAlternativeFilter: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-default ng-scope')] and contains(.,'Очистить все')]");
        }
    },
    iconEmptyAlternativeFilter: {
        get: function () {
            return $("//td[@class[contains(.,'dx-datagrid-action-cursor')] and contains(.,'Склад доставки')]//img[@src[contains(.,'Content/img/empty_filter_32.png')]]");
        }
    },
    iconFullAlternativeFilter: {
        get: function () {
            return $("//td[@class[contains(.,'dx-datagrid-action-cursor')] and contains(.,'Склад доставки')]//img[@src[contains(.,'Content/img/filter_32.png')]]");
        }
    },
    resetAllAlternativeFilter: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-warning ng-scope')] and contains(.,'Сбросить фильтр')]");
        }
    },
    closeAlternativeFilter: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-default ng-scope')] and contains(.,'Закрыть')]");
        }
    },
    predstavlenie1: {
        get: function () {
            return $("//span[text()='Представление1']");
        }
    },
    mainCheckbox: {
        get: function () {
            return $("//td/div/span");
        }
    },
    mainCheckboxIsChecked: {
        get: function () {
            return $("//div[@class[contains(.,'dx-datagrid-checkbox-size dx-widget dx-feedback dx-checkbox dx-checkbox-checked')]]");
        }
    },
    secondCheckbox: {
        get: function () {
            return $("//tr[2]/td/div/span");
        }
    },
    secondCheckboxIsChecked: {
        get: function () {
            return $("//tr[2]/td/div[@class[contains(.,'dx-datagrid-checkbox-size dx-widget dx-feedback dx-checkbox dx-checkbox-checked')]]");
        }
    },
    firstCheckbox: {
        get: function () {
            return $("//div[6]/div/div/div/table/tbody/tr/td/div/span");
        }
    },
    firstCheckboxIsChecked: {
        get: function () {
            return $("//div[6]/div/div/div/table/tbody//tr/td/div[@class[contains(.,'dx-datagrid-checkbox-size dx-widget dx-feedback dx-checkbox dx-checkbox-checked')]]/span");
        }
    },
    multiselectPanel: {
        get: function () {
            return $("//span[@class[contains(.,'group-summary ng-scope')]]");
        }
    },
    iconFastViewDeliveryNote: {
        get: function () {
            return $("//td[3]/div/div/div/div/button");
        }
    },
    iconFastViewCarriage: {
        get: function () {
            return $("//td[4]/div/div/div/div/button");
        }
    },
    fastViewButtonClose: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-sm btn-warning btn-right margin-left-5 ng-scope')] and contains(.,'Закрыть')]");
        }
    },
    logOut: {
        get: function () {
            return $("//a[@href='/Logout']");
        }
    },
    fieldDeliveryNumber1: {
        get: function () {
            return $("//td[4]/div/div/div/div/input");
        }
    },
    orders: {
        get: function () {
            return $("//a[contains(text(),'Приказы')]");
        }
    },
    ordersAtPrice: {
        get: function () {
            return $("//span[contains(text(),'Приказы по ценам')]");
        }
    },
    ordersAtConsolidate: {
        get: function () {
            return $("//span[contains(text(),'Приказы по закреплению')]");
        }
    },
    drivers: {
        get: function () {
            return $("//a[contains(text(),'Водители')]");
        }
    },
    iconPlus: {
        get: function () {
            return $("//a[2]/img");
        }
    },
    ordersClose: {
        get: function () {
            return $("//button[contains(text(),'Закрыть форму редактирования')]");
        }
    },
    selectSubCompany: {
        get: function () {
            return $("//span[contains(text(),'Выберите Подразделение...')]");
        }
    },
    selectConsumer: {
        get: function () {
            return $("//div[contains(text(),'J&J Consumer')]");
        }
    },
    selectEcolab: {
        get: function () {
            return $("//div[contains(text(),'Ecolab')]");
        }
    },
    selectUkraine: {
        get: function () {
            return $("//div[contains(text(),'JnJ Ukraine')]");
        }
    },
    selectBacardi: {
        get: function () {
            return $("//div[contains(text(),'Bacardi')]");
        }
    },
    selectVistakon: {
        get: function () {
            return $("//div[contains(text(),'J&J Vision Care')]");
        }
    },
    addSubCompany: {
        get: function () {
            return $("//button[contains(text(),'Добавить')]");
        }
    },
    addOrdersDetails: {
        get: function () {
            return $("//a[contains(text(),'Детали приказа')]/..//button[contains(text(),'Добавить')]");
        }
    },
    selectDirection: {
        get: function () {
            return $("//span[contains(text(),'Выберите Направление...')]");
        }
    },
    addDirection: {
        get: function () {
            return $("//input[@placeholder='Выберите Направление...']");
        }
    },
    selectTK: {
        get: function () {
            return $("//span[contains(text(),'Выберите ТК...')]");
        }
    },
    selectTKDriver: {
        get: function () {
            return $("//div[2]/div/div/span/i");
        }
    },
    addTK: {
        get: function () {
            return $("//input[@placeholder='Выберите ТК...']");
        }
    },
    addTKDriver: {
        get: function () {
            return $("//div[@class='panel-body']/div[2]/div/input[1]");
        }
    },
    selectTypeVehicle: {
        get: function () {
            return $("//span[contains(text(),'Выберите Тип ТС...')]");
        }
    },
    selectCarriageType: {
        get: function () {
            return $("//span[contains(text(),'Выберите Вид услуги...')]");
        }
    },
    addTypeVehicle: {
        get: function () {
            return $("//input[@placeholder='Выберите Тип ТС...']");
        }
    },
    addCarriageType: {
        get: function () {
            return $("//input[@placeholder='Выберите Вид услуги...']");
        }
    },
    addRate: {
        get: function () {
            return $("//input[@placeholder='Ставка']");
        }
    },
    saveDetailsOrder: {
        get: function () {
            return $("//a[contains(text(),'Детали приказа')]//..//..//button[contains(text(),'Сохранить')]");
        }
    },
    confirmSelect: {
        get: function () {
            return $("//a/div");
        }
    },
    iconNewWaybills: {
        get: function () {
            return $("//a[@title='Создание накладной']");
        }
    },
    numberNewWaybills: {
        get: function () {
            return $("//input[@id='number']");
        }
    },
    numberOrderNewWaybills: {
        get: function () {
            return $("//input[@id='orderNumber']");
        }
    },
    orderNumberNewWaybills: {
        get: function () {
            return $("//input[@id='orderNumber']");
        }
    },
    selectTypeDelivery: {
        get: function () {
            return $("//span[contains(text(),'Выберите тип доставки')]");
        }
    },
    adddelivery: {
        get: function () {
            return $("//div[@id='delivery-type']/input");
        }
    },
    delivery: {
        get: function () {
            return $("//div[contains(text(),'Доставка')]");
        }
    },
    deliveryUkr: {
        get: function () {
            return $("//div[contains(text(),'Поставка')]");
        }
    },
    selectShippingWarehouses: {
        get: function () {
            return $("//a[@data-ng-show='vm.From']/../a[.='Выберите склад']");
        }
    },
    selectDeliveryWarehouses: {
        get: function () {
            return $("//a[@data-ng-show='vm.To']/../a[.='Выберите склад']");
        }
    },
    selectDeliveryWarehousesFullRefund: {
        get: function () {
            return $("//a[@data-ng-show='vm.To']");
        }
    },
    selectDeliveryWarehousesSecondCrossdock: {
        get: function () {
            return $("//td[8]/div/div/div/a");
        }
    },
    addSearchWarehouses: {
        get: function () {
            return $("//input[@id='inputSearchText']");
        }
    },
    buttonSearchWarehouses: {
        get: function () {
            return $("//button[contains(text(),'Поиск')]");
        }
    },
    buttonFistCheckbox: {
        get: function () {
            return $("//button[@ng-click='onSelectButtonClick()']");
        }
    },
    buttonSaveWarehouses: {
        get: function () {
            return $("//button[contains(text(),'Сохранить')]");
        }
    },
    addItemsWaybills: {
        get: function () {
            return $("//input[@placeholder='Введите часть названия или маркировки продукта']");
        }
    },
    addItemsNumbersWaybills: {
        get: function () {
            return $("//input[@type='number']");
        }
    },
    buttonSaveItemsWarehouses: {
        get: function () {
            return $("//button[contains(text(),'Добавить')]");
        }
    },
    buttonSaveWaibills: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-primary btn-right margin-5 ng-scope')] and contains(.,'Сохранить')]");
        }
    },
    buttonInTransportation: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_active')] and contains(.,'В перевозке')]");
        }
    },
    buttonInDelete: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_deleted')] and contains(.,'Удалена')]");
        }
    },
    buttonInValidated: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_validated')] and contains(.,'Создана')]");
        }
    },
    buttonInPackaging: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_packaging')] and contains(.,'В подборке')]");
        }
    },
    buttonInPacked: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_packed')] and contains(.,'Собрана')]");
        }
    },
    buttonVehicleIsOrdered: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_vehicleOrdered')] and contains(.,'ТС заказано')]");
        }
    },
    buttonVehicleConfirmed: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_vehicleConfirmed')] and contains(.,'Подтверждена')]");
        }
    },
    buttonVehicleArrivedToLoading: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_vehicleArrivedToLoading')] and contains(.,'ТС прибыло на погрузку')]");
        }
    },
    buttonVehicleDepartedFromLoading: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_vehicleDepartedFromLoading')] and contains(.,'ТС убыло с погрузки')]");
        }
    },
    buttonVehicleArrivedToUnloading: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_vehicleArrivedToUnloading')] and contains(.,'ТС прибыло на выгрузку')]");
        }
    },
    buttonVehicleArrivedToCustom: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_vehicleArrivedToCustoms')] and contains(.,'ТС прибыло на таможню')]");
        }
    },
    buttonDeclarationRecieved: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_conformDeclarationRecieved')] and contains(.,'ДС получено')]");
        }
    },
    buttonDeclarationSent: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_customsDeclarationSent')] and contains(.,'ДТ подана')]");
        }
    },
    buttonDeclarationIssued: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_customsDeclarationIssued')] and contains(.,'ДТ выпущена')]");
        }
    },
    buttonVehicleDepartedFromCustom: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_vehicleDepartedFromCustoms')] and contains(.,'ТС убыло с СВХ')]");
        }
    },
    buttonVehicleDepartedFromUnloading: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_vehicleDepartedFromUnloading')] and contains(.,'ТС убыло с выгрузки')]");
        }
    },
    buttonVehicleStatusFinished: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_finished')] and contains(.,'Перевозка завершена')]");
        }
    },
    buttonVehiclePriceConfirmed: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_priceConfirmed')] and contains(.,'Сумма подтверждена')]");
        }
    },
    buttonVehicleStatusBilled: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_billed')] and contains(.,'Счет выставлен')]");
        }
    },
    buttonVehicleStatusArhived: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_archived')] and contains(.,'В архиве')]");
        }
    },
    buttonWaybillsStatusArhived: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_archived')] and contains(.,'В архиве')]");
        }
    },
    buttonWaybillsStatusAccepted: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_accepted')] and contains(.,'Принята')]");
        }
    },
    buttonIddleSupply: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_blankArrival')] and contains(.,'Холостая подача')]");
        }
    },
    buttonSupplyDisruption: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_failed')] and contains(.,'Срыв поставки')]");
        }
    },
    buttonCancelled: {
        get: function () {
            return $("//a[@class[contains(.,'btn carriage_status_cancelled')] and contains(.,'Отменена')]");
        }
    },
    buttonFullRefund: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_hasReclamations')] and contains(.,'Полный возврат')]");
        }
    },
    buttonLost: {
        get: function () {
            return $("//a[@class[contains(.,'btn waybill_status_lost')] and contains(.,'Потеряна')]");
        }
    },
    linkWaybills: {
        get: function () {
            return $("//a[@class[contains(.,'tms-waybill-link waybill_status_delivered ui-draggable ui-draggable-handle')]]");
        }
    },
    linkCarriage: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_created tms-waybill-link')]]");
        }
    },
    linkCarriageCreated: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_created tms-waybill-link')]]");
        }
    },
    linkCarriageVehicleOrdered: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_vehicleOrdered tms-waybill-link')]]");
        }
    },
    linkCarriageVehicleConfirmed: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_vehicleConfirmed tms-waybill-link')]]");
        }
    },
    linkCarriageStatusArrivedToLoading: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_vehicleArrivedToLoading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusDepartedFromLoading: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_vehicleDepartedFromLoading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusArchived: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_archived tms-waybill-link')]]");
        }
    },
    linkCarriageBlankArrival: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_blankArrival tms-waybill-link')]]");
        }
    },
    linkCarriageFailed: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_failed tms-waybill-link')]]");
        }
    },
    linkCarriageCanceled: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_cancelled tms-waybill-link')]]");
        }
    },
    linkCarriageStatusVechicleToUploading: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_vehicleArrivedToUnloading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusVechicleDepartedFromLoading: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_vehicleDepartedFromLoading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusVechicleArrivedToUnloading: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_vehicleArrivedToUnloading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusVechicleStatusFinished: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_finished tms-waybill-link')]]");
        }
    },
    linkCarriageStatusPriceConfirmed: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_priceConfirmed tms-waybill-link')]]");
        }
    },
    linkCarriageStatusBilled: {
        get: function () {
            return $("//a[@class[contains(.,'carriage_status_billed tms-waybill-link')]]");
        }
    },
    linkWaybillsValidated: {
        get: function () {
            return $("//a[@class[contains(.,'tms-waybill-link waybill_status_validated ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsActive: {
        get: function () {
            return $("//a[@class[contains(.,'tms-waybill-link waybill_status_active ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsPacked: {
        get: function () {
            return $("//a[@class[contains(.,'tms-waybill-link waybill_status_packed ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsDelivered: {
        get: function () {
            return $("//a[@class[contains(.,'tms-waybill-link waybill_status_delivered ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsShipped: {
        get: function () {
            return $("//a[@class[contains(.,'tms-waybill-link waybill_status_shipped ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsAccepted: {
        get: function () {
            return $("//a[@class[contains(.,'tms-waybill-link waybill_status_accepted ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsArchived: {
        get: function () {
            return $("//a[@class[contains(.,'tms-waybill-link waybill_status_archived ui-draggable ui-draggable-handle')]]");
        }
    },
    buttonCalculateTK: {
        get: function () {
            return $("//a[@class[contains(.,'btn btn-default ng-scope')] and contains(.,'Рассчитать распределение по ТК')]");
        }
    },
    selectListTK: {
        get: function () {
            return $("//span[contains(text(),'Выберите ТК...')]");
        }
    },
    activeSelectListTK: {
        get: function () {
            return $("//div[@id='inputCarrier']//div[@disabled='disabled']");
        }
    },
    activeListingSelectListTK: {
        get: function () {
            return $("//input[@class='form-control ui-select-search ng-valid ng-dirty ng-hide']");
        }
    },
    addTKList: {
        get: function () {
            return $("//input[@placeholder='Выберите ТК...']");
        }
    },
    orderName: {
        get: function () {
            return $("//input[@id='inputNumber']");
        }
    },
    orderDataFrom: {
        get: function () {
            return $("//div[@id='inputDateFrom']/input");
        }
    },
    orderDataTo: {
        get: function () {
            return $("//div[@id='inputDateTo']/input");
        }
    },
    orderDataFromIcon: {
        get: function () {
            return $("//label[contains(text(),'Дата начала')]//..//span");
        }
    },
    orderDataToIcon: {
        get: function () {
            return $("//label[contains(text(),'Дата окончания')]//..//span");
        }
    },
    day1InDataPicker: {
        get: function () {
            return $("//ul[@class='list-unstyled']//div[@class='datepicker-days']/table[@class='table-condensed']/tbody/tr[1]/td[.='1']");
        }
    },
    arrowLeftInDataPicker: {
        get: function () {
            return $("//ul[@class='list-unstyled']//div[@class='datepicker-days']/table[@class='table-condensed']//th[@class='prev']");
        }
    },
    positionInWaybill: {
        get: function () {
            return $("//div[@class='modal-dialog modal-sm']/div[@class='modal-content']//div[@class='control-group form-inline']/input[@type='text']");
        }
    },
    quantityInWaybill: {
        get: function () {
            return $("//div[@class='modal-dialog modal-sm']/div[@class='modal-content']//input[@type='number']");
        }
    },
    position1StInWaybill: {
        get: function () {
            return $("//li[@class[contains(.,'ng-scope')] and contains(.,'NG T/Gel шамп.от перх.с дегтем 125')]");
        }
    },
    typeTC: {
        get: function () {
            return $("//div[@id='vehicle-type']/div/span");
        }
    },
    typeTClist: {
        get: function () {
            return $("//div[@id='vehicle-type']/input[1]");
        }
    },
    searchOrderList: {
        get: function () {
            return $("//div[@class='dx-texteditor-border']/input[@class='dx-texteditor-input']");
        }
    },
    regionFrom: {
        get: function () {
            return $("//div[@id='inputRegionFrom']/div/button");
        }
    },
    regionTo: {
        get: function () {
            return $("//div[@id='inputRegionTo']/div/button");
        }
    },
    fieldSearchRegion: {
        get: function () {
            return $("//form/div/div/input");
        }
    },
    buttonSearch: {
        get: function () {
            return $("//button[contains(text(),'Искать')]");
        }
    },
    select1Region: {
        get: function () {
            return $("//li/ol/li/div/span/span/span");
        }
    },
    buttonSelect1Region: {
        get: function () {
            return $("//button[contains(text(),'Выбрать')]");
        }
    },
    temperatureLow: {
        get: function () {
            return $("//input[@id='temperature-condition-low-value']");
        }
    },
    temperatureHigh: {
        get: function () {
            return $("//input[@id='temperature-condition-high-value']");
        }
    },
    addDriver: {
        get: function () {
            return $("//button[contains(text(),'Добавить')]");
        }
    },
    confirmaddTKDriver: {
        get: function () {
            return $("//a/div");
        }
    },
    addFIO: {
        get: function () {
            return $("//div[@class='panel-body']/div[3]/input[@type='text']");
        }
    },
    addTelefon: {
        get: function () {
            return $("//div[@class='panel-body']/div[4]/input[@type='text']");
        }
    },
    addPassport: {
        get: function () {
            return $("//div[@class='panel-body']/div[5]/input[@type='text']");
        }
    },
    addIssuedBy: {
        get: function () {
            return $("//div[@class='panel-body']/div[6]/input[@type='text']");
        }
    },
    addDriverLicense: {
        get: function () {
            return $("//div[@class='panel-body']/div[7]/input[@type='text']");
        }
    },
    addDateDriverLicense: {
        get: function () {
            return $("//div[@class='panel-body']/div[8]/input[@type='text']");
        }
    },
    addAttorneyNo: {
        get: function () {
            return $("//div[@class='panel-body']/div[9]/input[@type='text']");
        }
    },
    addComment: {
        get: function () {
            return $("//textarea[@placeholder='Комментарий']");
        }
    },
    addFreithForwarder: {
        get: function () {
            return $("//input[@placeholder='Экспедитор']");
        }
    },
    saveDriver: {
        get: function () {
            return $("//button[contains(text(),'Сохранить')]");
        }
    },
    searchFIO: {
        get: function () {
            return $("//td[2]/div/div/div/div/input");
        }
    },
    searchTelefonDriver: {
        get: function () {
            return $("//td[3]/div/div/div/div/input");
        }
    },
    searchPassportDriver: {
        get: function () {
            return $("//td[4]/div/div/div/div/input");
        }
    },
    searchIssueByDriver: {
        get: function () {
            return $("//td[5]/div/div/div/div/input");
        }
    },
    searchLicenceDriver: {
        get: function () {
            return $("//td[6]/div/div/div/div/input");
        }
    },
    searchDataLicenseDriver: {
        get: function () {
            return $("//td[7]/div/div/div/div/input");
        }
    },
    searchAttorneyDriver: {
        get: function () {
            return $("//td[8]/div/div/div/div/input");
        }
    },
    searchCommentDriver: {
        get: function () {
            return $("//td[10]/div/div/div/div/input");
        }
    },
    searchFreithForwarder: {
        get: function () {
            return $("//td[10]/div/div/div/div/input");
        }
    },
    searchCommentDriverBacardi: {
        get: function () {
            return $("//td[11]/div/div/div/div/input");
        }
    },
    searchTKDriver: {
        get: function () {
            return $("//tbody/tr[2]/td[11]/div/div[@class='dx-editor-container']/div//input[@class='dx-texteditor-input']");
        }
    },
    buttonSearchTKDriver: {
        get: function () {
            return $("//td[11]/div/div/div/div[2]/div");
        }
    },
    searchTKDriverBacardi: {
        get: function () {
            return $("//tbody/tr[2]/td[12]/div/div[@class='dx-editor-container']/div//input[@class='dx-texteditor-input']");
        }
    },
    buttonSearchTKDriverBacardi: {
        get: function () {
            return $("//td[12]/div/div/div/div[2]/div");
        }
    },
    selectTKedit: {
        get: function () {
            return $("//a[@ng-click[contains(.,'selectCustomCarrier()')] and contains(.,'Выбрать')]");
        }
    },
    selectDriver: {
        get: function () {
            return $("//a[contains(text(),'Выберите водителя')]");
        }
    },
    selectVehicle: {
        get: function () {
            return $("//a[contains(text(),'Выберите ТС')]");
        }
    },
    selectDriverIcon: {
        get: function () {
            return $("//div[2]/div/div[2]/div/div/span");
        }
    },
    addDriverInSearch: {
        get: function () {
            return $("//div[@class='panel-body']/div[1]/input[1]");
        }
    },
    confirmDriverInSearch: {
        get: function () {
            return $("//a/div");
        }
    },
    selectVehicleIcon: {
        get: function () {
            return $("//div[2]/div/div[2]/div/div/span");
        }
    },
    addVehicleInSearch: {
        get: function () {
            return $("//div[@class='panel-body']/div[1]/input[1]");
        }
    },
    confirmVeicleInSearch: {
        get: function () {
            return $("//a/div");
        }
    },
    saveVehicleInSearch: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-primary ng-scope')] and contains(.,'Сохранить')]");
        }
    },
    columnId: {
        get: function () {
            return $("//td[1]");
        }
    },
    columnFIO: {
        get: function () {
            return $("//td[2]");
        }
    },
    columnTelefon: {
        get: function () {
            return $("//td[3]");
        }
    },
    columnPass: {
        get: function () {
            return $("//td[4]");
        }
    },
    columnIssueBy: {
        get: function () {
            return $("//td[5]");
        }
    },
    columnDriverLicense: {
        get: function () {
            return $("//td[6]");
        }
    },
    columnDataDriverLicense: {
        get: function () {
            return $("//td[7]");
        }
    },
    columnattorneyNo: {
        get: function () {
            return $("//td[8]");
        }
    },
    columnComment: {
        get: function () {
            return $("//td[10]");
        }
    },
    columnTK: {
        get: function () {
            return $("//td[11]");
        }
    },
    columnFregthForward: {
        get: function () {
            return $("//td[10]");
        }
    },
    columnCommentBacardi: {
        get: function () {
            return $("//td[11]");
        }
    },
    columnTKBacardi: {
        get: function () {
            return $("//td[12]");
        }
    },
    columnInboundIE: {
        get: function () {
            return $("//td");
        }
    },
    columnStatusOfDeliveryIE: {
        get: function () {
            return $("//td[2]");
        }
    },
    columnsConfirmedIE: {
        get: function () {
            return $("//td[3]");
        }
    },
    columnCarriageIE: {
        get: function () {
            return $("//td[4]");
        }
    },
    columnSectorIE: {
        get: function () {
            return $("//td[5]");
        }
    },
    columnDeliveryInvoice1IE: {
        get: function () {
            return $("//td[6]");
        }
    },
    columnDeliveryInvoice2IE: {
        get: function () {
            return $("//td[7]");
        }
    },
    columnShippingWarehousesIE: {
        get: function () {
            return $("//td[8]");
        }
    },
    columnDeliveryWarehouseIE: {
        get: function () {
            return $("//td[9]");
        }
    },
    columnPriorityIE: {
        get: function () {
            return $("//td[10]");
        }
    },
    columnInvoiceDateIE: {
        get: function () {
            return $("//td[11]");
        }
    },
    saveDriverInSearch: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-primary ng-scope')] and contains(.,'Сохранить')]");
        }
    },
    editDriver: {
        get: function () {
            return $("//td/div/div/a");
        }
    },
    linkEditUsers: {
        get: function () {
            return $("//table[@class='dx-datagrid-table']//a[@class='ng-binding']");
        }
    },
    changeStatusWaybillsInAccepted: {
        get: function () {
            return $("//div//a[@class='btn btn-link btn-next-status']/img[@title='Принята']");
        }
    },
    changeStatusWaybillsArchive: {
        get: function () {
            return $("//div//a[@class='btn btn-link btn-next-status']/img[@title='В архиве']");
        }
    },
    footerWaybillsGrid: {
        get: function () {
            return $("//div[@id='waybills_list']");
        }
    },
    searchEmailMailnesia: {
        get: function () {
            return $("//input");
        }
    },
    searchArrowMailnesia: {
        get: function () {
            return $("//input[@id='sm']");
        }
    },
    iconDeleteMailnesia: {
        get: function () {
            return $("//img[@alt='Delete all mail']");
        }
    },
    iconYesDeleteMailnesia: {
        get: function () {
            return $("//input[@value='YES delete them !']");
        }
    },
    messageEmptyMailbox: {
        get: function () {
            return $("//div[@id='empty_mailbox']");
        }
    },
    linkDirectionCarriers: {
        get: function () {
            return $("//a[contains(text(),'Маршрут перевозки')]");
        }
    },
    resetFilterAdmin: {
        get: function () {
            return $("//button[@class='btn btn-default btn-sm glyphicon glyphicon-remove']");
        }
    },
    transferToTheStatus: {
        get: function () {
            return $("//a[contains(text(),'Перевести в статус')]");
        }
    },
    iconTransferToTheStatus: {
        get: function () {
            return $("//body/div[8]/div[@class='modal-dialog modal-sm']/div/div[2]/div/div[1]/div[@class='panel-body']/div/div[@class='ui-select-match']/span[@class='btn btn-default form-control ui-select-toggle']/i[@class='caret pull-right']");
        }
    },
    iconTransferToTheStatusWaybills: {
        get: function () {
            return $("//div[@class='modal-content']/div[2]/div/div[1]/div[@class='panel-body']/div/div[@class='ui-select-match']/span[@class='btn btn-default form-control ui-select-toggle']/i[@class='caret pull-right']");
        }
    },
    addTextTransferToTheStatus: {
        get: function () {
            return $("//body/div[8]/div[@class='modal-dialog modal-sm']/div[@class='modal-content']/div[2]/div/div[1]/div[@class='panel-body']/div/input[1]");
        }
    },
    textTransferComment: {
        get: function () {
            return $("//div[2]/textarea");
        }
    },
    buttonSaveRevertStatus: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-primary ng-scope')] and contains(.,'Сохранить')]");
        }
    },
    buttonDeleteWaybillFromCarriages: {
        get: function () {
            //return $("//button[@title='Удалить накладную']");
            return $("//div[@class='dx-datagrid-content']/table[@class='dx-datagrid-table']/tbody/tr[1]/td[2]/div/div[@class='ng-scope']/div/div[@class='ng-scope']/button[@title='Удалить накладную']");
        }
    },
    buttonMakeCarriagesInWaybill: {
        get: function () {
            return $("//a[contains(text(),'Создать перевозку')]");
        }
    },
    typeDeliverDeliver: {
        get: function () {
            return $("//a[contains(.,'Доставка')]");
        }
    },
    typeDeliverPickup: {
        get: function () {
            return $("//a[contains(.,'Самовывоз')]");
        }
    },
    typeDeliverInbound: {
        get: function () {
            return $("//a[contains(.,'Самоввоз')]");
        }
    },
    linkHistoryWaybills: {
        get: function () {
            return $("//a[contains(text(),'История')]");
        }
    },
    linkImportIEWaybills: {
        get: function () {
            return $("//a[contains(text(),'Импорт')]");
        }
    },
    linkMarkingWaybills: {
        get: function () {
            return $("//a[contains(text(),'Позиции в накладной')]");
        }
    },
    firstCheckboxMarkingWaybills: {
        get: function () {
            return $("//div[@id='items']/table/tbody/tr[2]/td[@class='text-center']/input[@type='checkbox']");
        }
    },
    secondCheckboxMarkingWaybills: {
        get: function () {
            return $("//div[@id='items']/table/tbody/tr[3]/td[@class='text-center']/input[@type='checkbox']");
        }
    },
    buttonDeleteMarkingWaybills: {
        get: function () {
            return $("//div[@id='items']/div[3]/div/button");
        }
    },
    buttonNODeleteMarkingWaybills: {
        get: function () {
            return $("//button[@ng-click[contains(.,'removeSelectedItemsConfirmed(false)')] and contains(.,'Нет')]");
        }
    },
    buttonYesDeleteMarkingWaybills: {
        get: function () {
            return $("//button[@ng-click[contains(.,'removeSelectedItemsConfirmed(true)')] and contains(.,'Да')]");
        }
    },
    buttonCancelDeleteMarkingWaybills: {
        get: function () {
            return $("//button[@ng-disabled[contains(.,'removeItems.isBusy')] and contains(.,'Отмена')]");
        }
    },
    selectInPanelMO: {
        get: function () {
            return $("//span[contains(.,'Выберите')]");
        }
    },
    panelMOchangeStatusCarriages: {
        get: function () {
            return $("//a[contains(.,'Изменить статус перевозок')]");
        }
    },
    panelMODistributeCarriages: {
        get: function () {
            return $("//a[contains(.,'Распределить перевозки')]");
        }
    },
    panelMOShipDate: {
        get: function () {
            return $("//a[contains(.,'Дата отгрузки')]");
        }
    },
    panelMODeliveryDate: {
        get: function () {
            return $("//a[contains(.,'Дата доставки')]");
        }
    },
    panelMODeliveryDateShipping: {
        get: function () {
            return $("//a[contains(.,'Дата доставки перевозки')]");
        }
    },
    panelMODateAndTimeShipmentCarriage: {
        get: function () {
            return $("//a[contains(.,'Дата и время отгрузки перевозки план')]");
        }
    },
    panelMODateAndTimeBackDocument: {
        get: function () {
            return $("//a[contains(.,'Дата возврата документов факт')]");
        }
    },
    panelMOchangeStatusWaybills: {
        get: function () {
            return $("//a[contains(.,'Изменить статус накладных')]");
        }
    },
    panelMOchangeStatusShipping: {
        get: function () {
            return $("//a[contains(.,'Изменить статус перевозок')]");
        }
    },
    panelMOchangeDeleteWaybills: {
        get: function () {
            return $("//a[contains(.,'Удалить из перевозки')]");
        }
    },
    panelMOOK: {
        get: function () {
            return $("//input[@value='OK']");
        }
    },
    panelMODragInCarriages: {
        get: function () {
            return $("//a[contains(.,'Переместить в перевозку')]");
        }
    },
    panelMOInputNumberCarriages: {
        get: function () {
            return $("//input[@id='carriage-for-group']");
        }
    },
    popUpOkConfirmCopyInShipping: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-primary ng-scope')] and contains(.,'Ок')]");
        }
    },
    popUpOkMakeCopyInShipping: {
        get: function () {
            return $("//img[@alt='v']");
        }
    },
    popUpOkMakeCopyIddleSupply: {
        get: function () {
            return $("//td[.='Холостая подача']");
        }
    },
    popUpOkMakeCopySupplyDisruption: {
        get: function () {
            return $("//td[.='Срыв поставки']");
        }
    },
    popUpOkMakeCopyCancelled: {
        get: function () {
            return $("//td[.='Отменена']");
        }
    },
    popUpOkMakeCopyYes: {
        get: function () {
            return $("//div[@id='FailureStatusesYesButton']");
        }
    },
    popUpConfirmCopyInShipping: {
        get: function () {
            return $("//div[@class='failure_status_selector_container']");
        }
    },
    rateForTheCarriage: {
        get: function () {
            return $("//input[@data-ng-model='vm.BasicCost']");
        }
    },
    shippingMethod: {
        get: function () {
            return $("//table[@class='dx-datagrid-table']/tbody/tr[2]/td[8]/div[@class='tms-cell-content']");
        }
    },
    iconShippingMethod: {
        get: function () {
            return $("//div[@id='gridCellEditForm']//div[@class='input-group']/div/div[@class='ui-select-match']/span[@class='btn btn-default form-control ui-select-toggle']/span[2]/span[@class='ng-binding ng-scope']");
        }
    },
    fieldShippingMethod: {
        get: function () {
            return $("//div[@id='gridCellEditForm']//div[@class='form-group-sm ng-scope']//div[@class='input-group']/div/input[1]");
        }
    },
    saveShippingMethod: {
        get: function () {
            return $("//div[@id='gridCellEditForm']//button[.='Сохранить']");
        }
    },
    additionalCost: {
        get: function () {
            return $("//a[contains(text(),'Дополнительные затраты')]");
        }
    },
    addArmAdditionalCost: {
        get: function () {
            return $("//tr[2]/td/div/div/span");
        }
    },
    saveArmAdditionalCost: {
        get: function () {
            return $("//a/div");
        }
    },
    addCostAdditionalCost: {
        get: function () {
            return $("//tr[2]/td[2]/div/div/span");
        }
    },
    addValueCostAdditionalCost: {
        get: function () {
            return $("//td[2]/div/input");
        }
    },
    selectCostAdditionalCost: {
        get: function () {
            return $("//a/div");
        }
    },
    addCostValueAdditionalCost: {
        get: function () {
            return $("//input[@id='NumberValueCost1']");
        }
    },
    addCommentAdditionalCost: {
        get: function () {
            return $("//input[@id='StringCommentCost1']");
        }
    },
    addDemurageAdditionalCost: {
        get: function () {
            return $("//input[@id='Demurrage']");
        }
    },
    addStringAdditionalCost: {
        get: function () {
            return $("//button[@class[contains(.,'btn btn-default ng-scope')] and contains(.,'Добавить')]");
        }
    },
    return: {
        get: function () {
            return $("//a/div[text()='Возврат']");
        }
    },
    securityReturn: {
        get: function () {
            return $("//a/div[text()='Возврат охраны']");
        }
    },
    palletsReturn: {
        get: function () {
            return $("//a/div[text()='Возврат паллет']");
        }
    },
    additionalDispatchingPoint: {
        get: function () {
            return $("//a/div[text()='Дополнительная точка выгрузки']");
        }
    },
    security: {
        get: function () {
            return $("//a/div[text()='Охрана']");
        }
    },
    idleSupply: {
        get: function () {
            return $("//a/div[text()='Холостая подача']");
        }
    },
    downTime: {
        get: function () {
            return $("//a/div[text()='Простой']");
        }
    },
    selfUnloading: {
        get: function () {
            return $("//a/div[text()='Самовыгрузка']");
        }
    },
    insurance: {
        get: function () {
            return $("//a/div[text()='Страхование']");
        }
    },
    other1: {
        get: function () {
            return $("//a/div[text()='Другое 1']");
        }
    },
    other2: {
        get: function () {
            return $("//a/div[text()='Другое 2']");
        }
    },
    other3: {
        get: function () {
            return $("//a/div[text()='Другое 3']");
        }
    },
    other4: {
        get: function () {
            return $("//a/div[text()='Другое 4']");
        }
    },
    other5: {
        get: function () {
            return $("//a/div[text()='Другое 5']");
        }
    },
    fines: {
        get: function () {
            return $("//a[contains(text(),'Штрафы')]");
        }
    },
    addTypeFines: {
        get: function () {
            return $("//div[@ng-model='vm.PenaltiesViewModel.SelectedType']/div/span/i");
        }
    },
    lateDocumentsReturn: {
        get: function () {
            return $("//a/div[text()='Несвоевр. возврат документов']");
        }
    },
    lateArrivalForLoading: {
        get: function () {
            return $("//a/div[text()='Несвоевр. прибытие под загрузку']");
        }
    },
    deliveryFailure: {
        get: function () {
            return $("//a/div[text()='Срыв поставки']");
        }
    },
    otherFines: {
        get: function () {
            return $("//a/div[text()='Другое']");
        }
    },
    interestFines: {
        get: function () {
            return $("//a/div[text()='Проценты']");
        }
    },
    AbsoluteFines: {
        get: function () {
            return $("//a/div[text()='Абсолютный']");
        }
    },
    valueFines: {
        get: function () {
            return $("//input[@id='NumberValuePenalty1']");
        }
    },
    commentFines: {
        get: function () {
            return $("//input[@id='StringCommentPenalty1']");
        }
    },
    valueTypeFines: {
        get: function () {
            return $("//div[@ng-model='vm.PenaltiesViewModel.SelectedValueTypeOfPenalty']/div/span/i");
        }
    },
    addStringAddFines: {
        get: function () {
            return $("//button[@translate[contains(.,'Dobavit_a07f727f')] and contains(.,'Добавить')]");
        }
    },
    inputFreePallets: {
        get: function () {
            return $("//div[6]/div/input");
        }
    },
    iconSelectDistributeManager: {
        get: function () {
            return $("//div[@id='distribute-type']/div/span/i");
        }
    },
    selectBestServicesCarriages: {
        get: function () {
            return $("//div[contains(text(),'Перевозчик с лучшим сервисом')]");
        }
    },
    buttonCalculateTheDistribute: {
        get: function () {
            return $("//button[contains(text(),'Рассчитать распределение по ТК')]");
        }
    },
    buttonConfirmDistributeManager: {
        get: function () {
            return $("//span[contains(text(),'Подтвердить распределение')]");
        }
    },
    optionTypeDeliveryDelivery: {
        get: function () {
            return $("//div[@role[contains(.,'option')] and contains(.,'Доставка')]");
        }
    },
    optionTypeDeliveryDeliveryU: {
        get: function () {
            return $("//div[@role[contains(.,'option')] and contains(.,'Поставка')]");
        }
    },
    optionTypeDeliveryPickup: {
        get: function () {
            return $("//div[@role[contains(.,'option')] and contains(.,'Самовывоз')]");
        }
    },
    optionTypeDeliveryInbound: {
        get: function () {
            return $("//div[@role[contains(.,'option')] and contains(.,'Самоввоз')]");
        }
    },
    optionTypeDeliveryInboundIE: {
        get: function () {
            return $("//div[@role[contains(.,'option')] and contains(.,'Inbound IE')]");
        }
    },
    shippingApplication: {
        get: function () {
            return $("//td[8]/div/div/div/a");
        }
    },
    selectProforma: {
        get: function () {
            return $("//a[contains(@href, '/Proforma')]");
        }
    },
    proformaGrid: {
        get: function () {
            return $("//tr[contains(@class, 'dx-row dx-header-row dx-column-lines')]");
        }
    },
    prеformGrid: {
        get: function () {
            return $("//div[@id='preformgrid-div']/div");
        }
    },
    fieldShippingNumberProforma: {
        get: function () {
            return $("//td[9]/div/div/div/div/input");
        }
    },
    iconShippingNumberPreform: {
        get: function () {
            return $("//div/span");
        }
    },
    fieldShippingNumberPreform: {
        get: function () {
            return $("//div[@id='carriage']/input");
        }
    },
    linkClientOrders: {
        get: function () {
            return $("//a[contains(text(),'Заказы')]");
        }
    },
    linkPlanned: {
        get: function () {
            return $("//a[contains(text(),'Планирование')]");
        }
    },
    clientOrdersGrid: {
        get: function () {
            return $("//tr[contains(@class, 'dx-row dx-header-row dx-column-lines')]");
        }
    },
    planningGrid: {
        get: function () {
            return $("//tr[contains(@class, 'dx-row dx-header-row dx-column-lines')]");
        }
    },
    dateCreateClientOrders: {
        get: function () {
            return $("//td/div/div/div/div/div/input");
        }
    },
    dateDocumentClientOrders: {
        get: function () {
            return $("//td[2]/div/div/div/div/div/input");
        }
    },
    fieldPOClientOrders: {
        get: function () {
            return $("//td[3]/div/div/div/div/input");
        }
    },
    fieldStatusClientOrders: {
        get: function () {
            return $("//td[3]/div/div/div/div/div/input");
        }
    },
    fieldDateDeliveryClientOrders: {
        get: function () {
            return $("//td[7]/div/div/div/div/div/input");
        }
    },
    fieldDateExpectedDeliveryClientOrders: {
        get: function () {
            return $("//td[8]/div/div/div/div/div/input");
        }
    },
    fieldSummPalletClientOrders: {
        get: function () {
            return $("//td[11]/div/div/div/div/input");
        }
    },
    fieldMixedBoxClientOrders: {
        get: function () {
            return $("//td[12]/div/div/div/div/input");
        }
    },
    fieldTotalBoxClientOrders: {
        get: function () {
            return $("//td[13]/div/div/div/div/input");
        }
    },
    fieldTotalSummItemsInvoice: {
        get: function () {
            return $("//input[@id='invoice-sum']");
        }
    },
    fieldTotalInsuranceShipping: {
        get: function () {
            return $("//input[@id='totalInsuranceAmount']");
        }
    },
    fieldFreightShipping: {
        get: function () {
            return $("//input[@id='freight']");
        }
    },
    fieldWeightShipping: {
        get: function () {
            return $("//input[@id='actualWeightCmr']");
        }
    },
    fieldWeightGrossShipping: {
        get: function () {
            return $("//input[@id='actualWeightGrossCmr']");
        }
    },
    iconStatusClientOrders: {
        get: function () {
            return $("//td[4]/div/div/div/div[2]/div");
        }
    },
    statusNotVerifedClientOrders: {
        get: function () {
            return $("//div[@title[contains(.,'Не проверен')]]");
        }
    },

    iconTypeWaybillClientOrders: {
        get: function () {
            return $("//div[@class='dx-visibility-change-handler dx-widget']/div[@class='dx-datagrid']/div[5]//table[@class='dx-datagrid-table']/tbody/tr[2]/td[9]/div/div[@class='dx-editor-container']/div/div[@class='dx-dropdowneditor-button']/div[1]");
        }
    },
    selectTRTypeWaybillClientOrders: {
        get: function () {
            return $("//div[@title[contains(.,'TR')]]");
        }
    },
    iconTypePackagedClientOrders: {
        get: function () {
            return $("//td[10]/div/div/div/div[2]/div");
        }
    },
    typePackagedMixedClientOrders: {
        get: function () {
            return $("//div[@title[contains(.,'Смешанная')]]");
        }
    },
    iconSelectCurrency: {
        get: function () {
            return $("//div[@id='import']//div[@id='sub-company']/div[@class='ui-select-match']/span[@class='btn btn-default form-control ui-select-toggle']/i[@class='caret pull-right']");
        }
    },
    iconSelectCurrencyShipping: {
        get: function () {
            return $("//div[@id='totalInvoicesCurrency']/div/span/i");
        }
    },
    iconInsuranceShipping: {
        get: function () {
            return $("//div[@id='totalInsuranceCurrency']/div/span/i");
        }
    },
    iconFreigntShipping: {
        get: function () {
            return $("//div[@id='freightCurrency']/div/span/i");
        }
    },
    iconTypeShippingIE: {
        get: function () {
            return $("//div[@id='TranspontationType']/div/span");
        }
    },
    typeShippingIEAir: {
        get: function () {
            return $("//a[@class[contains(.,'ui-select-choices-row-inner')] and contains(.,'Air')]");
        }
    },
    selectCurrencyRub: {
        get: function () {
            return $("//a[@class[contains(.,'ui-select-choices-row-inner')] and contains(.,'RUB')]");
        }
    },
    selectCurrencyEur: {
        get: function () {
            return $("//a[@class[contains(.,'ui-select-choices-row-inner')] and contains(.,'EUR')]");
        }
    },
    selectReleaseOfDC: {
        get: function () {
            return $("//input[@id='ReleaseOfDC']");
        }
    },
    iconSelectBroker: {
        get: function () {
            return $("//div[@id='broker']/div/span");
        }
    },
    select1Broker: {
        get: function () {
            return $("//div[@class[contains(.,'ng-binding ng-scope')] and contains(.,'брокер1 мд')]");
        }
    },
    buttonMakePreform: {
        get: function () {
            return $("//div[@id='panelheading-div']/div[@class='row']//button[@title='Создать заготовку']");
        }
    },
    buttonPreformShipping: {
        get: function () {
            return $("//button[@translate='Resources_TopMenuItem_Preform']");
        }
    },
    weightGrossPreformMarkingLine: {
        get: function () {
            return $("//div[@id='preformgrid-div']/div[2]/tms-grid//div[@class='dx-visibility-change-handler dx-widget']/div[@class='dx-datagrid']/div[6]//table[@class='dx-datagrid-table']/tbody/tr[1]/td[16]/div[@class='ng-scope']/div//input[@class='form-control ng-pristine ng-valid ng-valid-required']");
        }
    },
    fieldInboundPlanning: {
        get: function () {
            return $("//tr[2]/td[3]/div/div/div/div/input");
        }
    },
    fieldStatusWaybillsPlanning: {
        get: function () {
            return $("//td[4]/div/div/div/div/div/input");
        }
    },
    iconStatusWaybillsPlanning: {
        get: function () {
            return $("//td[4]/div/div/div/div[2]/div");
        }
    },
    iconDocumentVerifiedPlanning: {
        get: function () {
            return $("//td[5]/div/div/div/div[2]/div");
        }
    },
    fieldDocumentVerifiedPlanning: {
        get: function () {
            return $("//td[5]/div/div/div/div/div/input");
        }
    },
    fieldShippingPlanning: {
        get: function () {
            return $("//td[6]/div/div/div/div/input");
        }
    },
    iconSectorPlanning: {
        get: function () {
            return $("//td[7]/div/div/div/div[2]/div");
        }
    },
    fieldSectorPlanning: {
        get: function () {
            return $("//td[7]/div/div/div/div/div/input");
        }
    },
    iconWarehouseShippingPlanning: {
        get: function () {
            return $("//td[10]/div/div/div/div[2]/div");
        }
    },
    fieldWarehouseShippingPlanning: {
        get: function () {
            return $("//td[10]/div/div/div/div/div/input");
        }
    },
    iconWarehouseDeliverylanning: {
        get: function () {
            return $("//td[11]/div/div/div/div[2]/div");
        }
    },
    fieldWarehouseDeliveryPlanning: {
        get: function () {
            return $("//td[11]/div/div/div/div/div/input");
        }
    },
    iconPriorityPlanning: {
        get: function () {
            return $("//td[12]/div/div/div/div[2]/div");
        }
    },
    fieldDateInvoicePlanning: {
        get: function () {
            return $("//td[13]/div/div/div/div/div/input");
        }
    },
    statusWaybillsPlannedInShipping: {
        get: function () {
            return $("//div[@class='dx-scrollable-container']//div[@title='В перевозке']");
        }
    },
    statusDocumentVerifiedShippingNotVerifed: {
        get: function () {
            return $("//div[@title='Не проверено']");
        }
    },
    sectorMDPlanning: {
        get: function () {
            return $("//div[@title='J&J MD']");
        }
    },
    priorityStandartPlanning: {
        get: function () {
            return $("//div[@title[contains(.,'Стандарт')]]");
        }
    },
    iconFilterWaybills: {
        get: function () {
            return $("//td[3]/div/div[2]/div/ul/li/div/div/span[@class[contains(.,'dx-menu-item-popout-container')]]");
        }
    },
    filterEquallyWaybills: {
        get: function () {
            return $("//html/body/div[7]/div//ul[@class='dx-menu-items-container']/li[5]/div[@class='dx-menu-item']/div[@class='dx-menu-item-content']/span[@class='dx-menu-item-text']");
        }
    },
    gridCarriersRevertStatus: {
        get: function () {
            return $("//h3[@translate='PerevodvStatus_d8a180c8']");
        }
    },
    buttonIgnoreAndConfirmCarriage: {
        get: function () {
            return $("//button[text()='Игнорировать и подтвердить перевозку']");
        }
    },
    buttonDeleteOrderUL: {
        get: function () {
            return $("//button[@ng-click='onDeleteSubCompanyClick(item)']");
        }
    },
    arrowSortData: {
        get: function () {
            return $("//td[2]/span");
        }
    },
    buttonDeleteCurrencyWaybills: {
        get: function () {
            return $("//span/button");
        }
    },
    numberCarriageInHeader: {
        get: function () {
            return $("//div[@id='mainView']/div/div/div/span");
        }
    },
    mailnesiaMail: {
        get: function () {
            return $("//a[@href='mailto:testuser777777@mailnesia.com']");
        }
    },
    mailnesiaMail1: {
        get: function () {
            return $("//a[@href='mailto:testuser7777771@mailnesia.com']");
        }
    },
    mailnesiaMail2: {
        get: function () {
            return $("//a[@href='mailto:testuser7777772@mailnesia.com']");
        }
    },
    mailnesiaMail3: {
        get: function () {
            return $("//a[@href='mailto:testuser7777773@mailnesia.com']");
        }
    },
    mailnesiaMail4: {
        get: function () {
            return $("//a[@href='mailto:testuser7777774@mailnesia.com']");
        }
    },
    mailnesiaMail5: {
        get: function () {
            return $("//a[@href='mailto:testuser7777775@mailnesia.com']");
        }
    },
    mailnesiaMail6: {
        get: function () {
            return $("//a[@href='mailto:testuser7777776@mailnesia.com']");
        }
    },
    mailnesiaMail7: {
        get: function () {
            return $("//a[@href='mailto:testuser7777777@mailnesia.com']");
        }
    },
    mailnesiaMail8: {
        get: function () {
            return $("//a[@href='mailto:testuser7777778@mailnesia.com']");
        }
    },
    mailnesiaMail9: {
        get: function () {
            return $("//a[@href='mailto:testuser7777779@mailnesia.com']");
        }
    },
    mailnesiaMail10: {
        get: function () {
            return $("//a[@href='mailto:testuser77777710@mailnesia.com']");
        }
    },
    mailnesiaMail11: {
        get: function () {
            return $("//a[@href='mailto:testuser77777711@mailnesia.com']");
        }
    },
    mailnesiaMail12: {
        get: function () {
            return $("//a[@href='mailto:testuser77777712@mailnesia.com']");
        }
    },
    mailnesiaMail13: {
        get: function () {
            return $("//a[@href='mailto:testuser77777713@mailnesia.com']");
        }
    },
    mailnesiaMail14: {
        get: function () {
            return $("//a[@href='mailto:testuser77777714@mailnesia.com']");
        }
    },
    mailnesiaMail15: {
        get: function () {
            return $("//a[@href='mailto:testuser77777715@mailnesia.com']");
        }
    },
    mailnesiaMail16: {
        get: function () {
            return $("//a[@href='mailto:testuser77777716@mailnesia.com']");
        }
    },
    mailnesiaMail17: {
        get: function () {
            return $("//a[@href='mailto:testuser77777717@mailnesia.com']");
        }
    },
    mailnesiaMail18: {
        get: function () {
            return $("//a[@href='mailto:testuser77777718@mailnesia.com']");
        }
    },
    mailnesiaMail19: {
        get: function () {
            return $("//a[@href='mailto:testuser77777719@mailnesia.com']");
        }
    },
    mailnesiaMail20: {
        get: function () {
            return $("//a[@href='mailto:testuser77777720@mailnesia.com']");
        }
    },
    mailnesiaMail21: {
        get: function () {
            return $("//a[@href='mailto:testuser77777721@mailnesia.com']");
        }
    },
    mailnesiaMail22: {
        get: function () {
            return $("//a[@href='mailto:testuser77777722@mailnesia.com']");
        }
    },
    mailnesiaMail23: {
        get: function () {
            return $("//a[@href='mailto:testuser77777723@mailnesia.com']");
        }
    },
    mailnesiaMail24: {
        get: function () {
            return $("//a[@href='mailto:testuser77777724@mailnesia.com']");
        }
    },
    buttonDirection: {
        get: function () {
            return $("//div[@id='direction']//button[@type='button']");
        }
    },
    fieldChoiceDirection: {
        get: function () {
            return $("//html//div[@id='direction-picker-grid']/tms-grid[@class='ng-isolate-scope tms-grid']/div[@class='ng-scope']/div[@class='dx-visibility-change-handler dx-widget']/div[@class='dx-datagrid']/div[5]//table[@class='dx-datagrid-table']/tbody/tr[2]/td[1]/div/div[@class='dx-editor-container']/div/div[@class='dx-texteditor-border']/input[@class='dx-texteditor-input']");
        }
    },
    firstDirection: {
        get: function () {
            return $("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[1]/div/div/a[@class='ng-binding']");
        }
    },
    buttonConfirmChoiceDirection: {
        get: function () {
            return $("//html/body/div[8]/div[@class='modal-dialog modal-sm']//button[@class='btn btn-primary ng-scope']");
        }
    },
});


module.exports = LoginPage;
