var Page = require('./page')

var MainPage = Object.create(Page, {
    /**
     * define elements
     */
    usernameMain: {
        get: function () {
            return ("//INPUT[@name='login']");
        }
    },
    passwordMain: {
        get: function () {
            return ("//INPUT[@name='password']");
        }
    },
    submitMain: {
        get: function () {
            return ("(//INPUT[@class='site-button'])[1]");
        }
    },
    footer: {
        get: function () {
            return ("//DIV[@class='collapse navbar-collapse']");
        }
    },
    submitAdmin: {
        get: function () {
            return ("//INPUT[@class='submit']");
        }
    },
    loginBox: {
        get: function () {
            return ("//DIV[@id='login-box']");
        }
    },
    selectUsers: {
        get: function () {
            return ("//select[@id='userId']");
        }
    },
    buttonAdd: {
        get: function () {
            return ("//BUTTON[@class='btn btn-default btn-sm ng-scope'][text()='Добавить']");
        }
    },
    footerMain: {
        get: function () {
            return ("//div[@class='container-fluid ng-scope']//ul[@class='nav nav-pills']");
        }
    },
    Loader: {
        get: function () {
            return ("//div[@class[contains(.,'dx-loadpanel-content-wrapper')] and contains(.,'Загрузка')]");
        }
    },
    bigLoader: {
        get: function () {
            return ("//div[@class='fa fa-spinner fa-spin loading-overlay-spinner']");
        }
    },
    filterData: {
        get: function () {
            return ("//input[@class[contains(.,'dx-texteditor-input')]]");
        }
    },
    dateAndTimeOfTheShipmentInvoicePlan: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[4]/div[@class='tms-cell-content']");
        }
    },
    dateAndTimeOfTheShipmentTransportationPlan: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[5]/div[@class='tms-cell-content']");
        }
    },
    dateAndTimeOfTheDeliveryInvoicePlan: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[6]/div[@class='tms-cell-content']");
        }
    },
    dateAndTimeOfTheDeliveryTransportationPlan: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[7]/div[@class='tms-cell-content']");
        }
    },
    dateAndTimeBackDocument1ch: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[9]/div[@class='tms-cell-content']");
        }
    },
    dateAndTimeBackDocument2ch: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[2]/td[9]/div[@class='tms-cell-content']");
        }
    },
    dateAndTimeArrivedCustom: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[8]/div[@class='tms-cell-content']");
        }
    },
    dateAndTimeUploadCustom: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[9]/div[@class='tms-cell-content']");
        }
    },
    waybillsData: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[2]/div[@class='tms-cell-content']");
        }
    },
    scrollContainer: {
        get: function () {
            return ("//div[@class[contains(.,'dx-scrollable-container')]]");
        }
    },
    planningLine: {
        get: function () {
            return ("//tr[@class[contains(.,'dx-row dx-data-row dx-row-lines dx-column-lines tms-grid-row')]]");
        }
    },
    tmsGridCellLeft: {
        get: function () {
            return ("//html/body/div[3]/div[1]/div/tms-grid/div/div/div/div[6]");
        }
    },
    fastViewModalContent: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header ng-scope')]]");
        }
    },
    fastViewModalTitle: {
        get: function () {
            return ("//span[@class[contains(.,'modal-title header_label_details ng-scope')]]");
        }
    },
    buttonNextInMessage: {
        get: function () {
            return ("//a[@class[contains(.,'shepherd-button ')] and contains(.,'Продолжить')]");
        }
    },
    messageAboutUpdateVersion: {
        get: function () {
            return ("//h3[@class[contains(.,'shepherd-title')] and contains(.,'Обновление до версии')]");
        }
    },
    filterCalendar: {
        get: function () {
            return ("//td[2]/div/div/div/div[2]/div");
        }
    },
    filterCalendarOrders: {
        get: function () {
            return ("//td/div/div/div/div[2]/div");
        }
    },
    filterCalendarYearBack: {
        get: function () {
            return ("//body/div[7]/div//div[@class='dx-calendar-navigator']/a[1]");
        }
    },
    filterCalendarDate: {
        get: function () {
            return ("//div[7]/div//table//td[.='22']");
        }
    },
    orderFooter: {
        get: function () {
            return ("//div[@id='tarificationView']");
        }
    },
    footerWaybills: {
        get: function () {
            return ("//h3[@class='modal-title']");
        }
    },
    footerSearchWarehouses: {
        get: function () {
            return ("//div[@class='select-warehouse-form']");
        }
    },
    footerWaybillsCreated: {
        get: function () {
            return ("//div[@class='modal-header waybill_status_created']");
        }
    },
    footerWaybillsValidate: {
        get: function () {
            return ("//div[@class='modal-header waybill_status_validated']");
        }
    },
    footerWaybillsDelete: {
        get: function () {
            return ("//div[@class='modal-body']");
        }
    },
    footerWaybillsGrid: {
        get: function () {
            return ("//div[@id='waybills_list']");
        }
    },
    nameTk: {
        get: function () {
            return ("//div[@class='col-md-12']");
        }
    },
    listTK: {
        get: function () {
            return ("//tr[@class='warning']");
        }
    },
    fixedTransportCompany: {
        get: function () {
            return ("//SPAN[@ng-if='vm.CarrierSelection.AttachedToDirection !== null']");
        }
    },
    linkCarriage: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_created tms-waybill-link')]]");
        }
    },
    linkCarriageCreated: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_created tms-waybill-link')]]");
        }
    },
    linkCarriageVehicleOrdered: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_vehicleOrdered tms-waybill-link')]]");
        }
    },
    linkCarriageVehicleConfirmed: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_vehicleConfirmed tms-waybill-link')]]");
        }
    },
    linkCarriageStatusArrivedToLoading: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_vehicleArrivedToLoading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusDepartedFromLoading: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_vehicleDepartedFromLoading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusArchived: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_archived tms-waybill-link')]]");
        }
    },
    linkCarriageBlankArrival: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_blankArrival tms-waybill-link')]]");
        }
    },
    linkCarriageFailed: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_failed tms-waybill-link')]]");
        }
    },
    linkCarriageCancelled: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_cancelled tms-waybill-link')]]");
        }
    },
    linkCarriageStatusVechicleToUploading: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_vehicleArrivedToUnloading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusVechicleDepartedFromLoading: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_vehicleDepartedFromLoading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusVechicleArrivedToUnloading: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_vehicleArrivedToUnloading tms-waybill-link')]]");
        }
    },
    linkCarriageStatusVechicleStatusFinished: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_finished tms-waybill-link')]]");
        }
    },
    linkCarriageStatusPriceConfirmed: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_priceConfirmed tms-waybill-link')]]");
        }
    },
    linkCarriageStatusBilled: {
        get: function () {
            return ("//a[@class[contains(.,'carriage_status_billed tms-waybill-link')]]");
        }
    },
    linkWaybills: {
        get: function () {
            return ("//a[@class[contains(.,'tms-waybill-link waybill_status_delivered ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsPacked: {
        get: function () {
            return ("//a[@class[contains(.,'tms-waybill-link waybill_status_packed ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsAccepted: {
        get: function () {
            return ("//a[@class[contains(.,'tms-waybill-link waybill_status_accepted ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsDelivered: {
        get: function () {
            return ("//a[@class[contains(.,'tms-waybill-link waybill_status_delivered ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsShipped: {
        get: function () {
            return ("//a[@class[contains(.,'tms-waybill-link waybill_status_shipped ui-draggable ui-draggable-handle')]]");
        }
    },
    linkWaybillsArchived: {
        get: function () {
            return ("//a[@class[contains(.,'tms-waybill-link waybill_status_archived ui-draggable ui-draggable-handle')]]");
        }
    },
    linkDirectionCarriers: {
        get: function () {
            return ("//a[contains(text(),'Маршрут перевозки')]");
        }
    },
    linkSelectTK: {
        get: function () {
            return ("//a[contains(text(),'Выбор ТК')]");
        }
    },
    linkDirectionWaybills: {
        get: function () {
            return ("//a[contains(text(),'Маршрут накладной')]");
        }
    },
    linkCommentShipping: {
        get: function () {
            return ("//a[contains(text(),'Комментарии')]");
        }
    },
    linkWaybillsValidated: {
        get: function () {
            return ("//a[@class[contains(.,'tms-waybill-link waybill_status_validated ui-draggable ui-draggable-handle')]]");
        }
    },
    orderDataFrom: {
        get: function () {
            return ("//div[@id='inputDateFrom']/input");
        }
    },
    orderDataTo: {
        get: function () {
            return ("//div[@id='inputDateTo']/input");
        }
    },
    footerDriver: {
        get: function () {
            return ("//h3[@class[contains(.,'modal-title alert alert-info ng-scope')]]");
        }
    },
    headerTC: {
        get: function () {
            return ("//h3");
        }
    },
    footerGridDriver: {
        get: function () {
            return ("//tms-grid/div");
        }
    },
    gridWaybillsStatusCreated: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_created')]]");
        }
    },
    gridWaybillsStatusValidated: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_validated')]]");
        }
    },
    gridWaybillsStatusActive: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_active')]]");
        }
    },
    gridWaybillsStatusPackaging: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_packaging')]]");
        }
    },
    gridWaybillsStatusPacked: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_packed')]]");
        }
    },
    gridWaybillsStatusDelivered: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_delivered')]]");
        }
    },
    gridWaybillsStatusShipped: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_shipped')]]");
        }
    },
    gridWaybillsStatusAccepted: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_accepted')]]");
        }
    },
    gridWaybillsStatusArchived: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header waybill_status_archived')]]");
        }
    },
    gridCarriers: {
        get: function () {
            return ("//div[@class='container details_container']");
        }
    },
    gridCarriersAll: {
        get: function () {
            return ("//div[@class='modal-dialog modal-wide ng-scope']");
        }
    },
    gridCarriersStatusCreated: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_created')]]");
        }
    },
    gridCarriersStatusVehicleOrdered: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_vehicleOrdered')]]");
        }
    },
    gridCarriersStatusVehicleConfirmed: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_vehicleConfirmed')]]");
        }
    },
    gridCarriersStatusVehicleArrivedToLoading: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_vehicleArrivedToLoading')]]");
        }
    },
    gridCarriersStatusVehicleDepartedFromLoading: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_vehicleDepartedFromLoading')]]");
        }
    },
    gridCarriersStatusVehicleArrivedToUploading: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_vehicleArrivedToUnloading')]]");
        }
    },
    gridCarriersStatusArrivedToCustom: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_vehicleArrivedToCustoms')]]");
        }
    },
    gridCarriersStatusDeclarationRecieved: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_conformDeclarationRecieved')]]");
        }
    },
    gridCarriersStatusDeclarationSent: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_customsDeclarationSent')]]");
        }
    },
    gridCarriersStatusDeclarationIssue: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_customsDeclarationIssued')]]");
        }
    },
    gridCarriersStatusVehicleDepartedFromCustom: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_vehicleDepartedFromCustoms')]]");
        }
    },
    gridCarriersStatusVehicleDepartedFromUploading: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_vehicleDepartedFromUnloading')]]");
        }
    },
    gridCarriersStatusFinished: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_finished')]]");
        }
    },
    gridCarriersStatusPriceConfirmed: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_priceConfirmed')]]");
        }
    },
    gridCarriersStatusBilled: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_billed')]]");
        }
    },
    gridCarriersStatusArchived: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriage_status_archived')]]");
        }
    },
    gridCarriersRevertStatus: {
        get: function () {
            return ("//h3[@translate='PerevodvStatus_d8a180c8']");
        }
    },
    gridCarriersRequestStatusVehicleConfirmed: {
        get: function () {
            return ("//div[@class[contains(.,'modal-header carriagerequest_status_confirmed')]]");
        }
    },
    headerOffice: {
        get: function () {
            return ("//a[contains(text(),'Кабинет')]");
        }
    },
    errorDriver: {
        get: function () {
            return ("//div[@data-ng-repeat='err in vm.errors']");
        }
    },
    endGridDrivers: {
        get: function () {
            return ("//td[12]/div/div/div/div[2]/div");
        }
    },
    adminGrid: {
        get: function () {
            return ("//div[@data-ng-controller='AdminController']");
        }
    },

    buttonMakeCarrigesInWaybills: {
        get: function () {
            return ("//a[contains(text(),'Создать перевозку')]");
        }
    },
    gridMailnesia: {
        get: function () {
            return ("//body");
        }
    },
    linkHistoryWaybills: {
        get: function () {
            return ("//a[contains(text(),'История')]");
        }
    },
    linkIE: {
        get: function () {
            return ("//a[contains(text(),'Маршрут перевозки')]");
        }
    },
    linkCommentsShipping: {
        get: function () {
            return ("//a[contains(text(),'Комментарии')]");
        }
    },
    buttonInTransportation: {
        get: function () {
            return ("//a[@class[contains(.,'btn waybill_status_active')] and contains(.,'В перевозке')]");
        }
    },
    buttonInPackaging: {
        get: function () {
            return ("//a[@class[contains(.,'btn waybill_status_packaging')] and contains(.,'В подборке')]");
        }
    },
    buttonInPacked: {
        get: function () {
            return ("//a[@class[contains(.,'btn waybill_status_packed')] and contains(.,'Собрана')]");
        }
    },
    buttonVehicleArrivedToUnloading: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_vehicleArrivedToUnloading')] and contains(.,'ТС прибыло на выгрузку')]");
        }
    },
    buttonVehicleIsOrdered: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_vehicleOrdered')] and contains(.,'ТС заказано')]");
        }
    },
    buttonVehicleArrivedToLoading: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_vehicleArrivedToLoading')] and contains(.,'ТС прибыло на погрузку')]");
        }
    },
    buttonVehicleDepartedFromCustom: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_vehicleDepartedFromCustoms')] and contains(.,'ТС убыло с СВХ')]");
        }
    },
    buttonWaybillsStatusAccepted: {
        get: function () {
            return ("//a[@class[contains(.,'btn waybill_status_accepted')] and contains(.,'Принята')]");
        }
    },
    buttonWaybillsStatusArhived: {
        get: function () {
            return ("//a[@class[contains(.,'btn waybill_status_archived')] and contains(.,'В архиве')]");
        }
    },
    buttonVehicleStatusFinished: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_finished')] and contains(.,'Перевозка завершена')]");
        }
    },
    buttonVehicleDepartedFromUnloading: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_vehicleDepartedFromUnloading')] and contains(.,'ТС убыло с выгрузки')]");
        }
    },
    buttonVehicleDepartedFromLoading: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_vehicleDepartedFromLoading')] and contains(.,'ТС убыло с погрузки')]");
        }
    },
    buttonVehicleConfirmed: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_vehicleConfirmed')] and contains(.,'Подтверждена')]");
        }
    },
    buttonVehicleStatusBilled: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_billed')] and contains(.,'Счет выставлен')]");
        }
    },
    buttonVehiclePriceConfirmed: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_priceConfirmed')] and contains(.,'Сумма подтверждена')]");
        }
    },
    buttonVehicleStatusArhived: {
        get: function () {
            return ("//a[@class[contains(.,'btn carriage_status_archived')] and contains(.,'В архиве')]");
        }
    },
    popUpConfirmCopyInShipping: {
        get: function () {
            return ("//h3");
        }
    },
    selectDeliveryWarehousesSecondCrossdock: {
        get: function () {
            return ("//td[8]/div/div/div/a");
        }
    },
    headerShippingMethod: {
        get: function () {
            return ("//h4/span[@class='ng-scope']");
        }
    },
    additionalCost: {
        get: function () {
            return ("//a[contains(text(),'Дополнительные затраты')]");
        }
    },
    fines: {
        get: function () {
            return ("//a[contains(text(),'Дополнительные затраты')]");
        }
    },
    rateForTheCarriage: {
        get: function () {
            return ("//input[@data-ng-model='vm.BasicCost']");
        }
    },
    fieldTotalSummItemsInvoice: {
        get: function () {
            return ("//input[@id='invoice-sum']");
        }
    },
    headerDistributeManager: {
        get: function () {
            return ("//div[@class='modal-content']/div[@class='modal-header ng-scope']/h4");
        }
    },
    selectProforma: {
        get: function () {
            return ("//a[contains(text(),'Проформа')]");
        }
    },
    selectPreform: {
        get: function () {
            return ("//a[contains(text(),'Заготовка')]");
        }
    },
    selectProformaLTL: {
        get: function () {
            return ("//li[2]/a/span");
        }
    },
    fieldRateProforma: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[10]/div[@class='tms-cell-content']");
        }
    },
    fieldRateSimpleProforma: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[11]/div[@class='tms-cell-content']");
        }
    },
    fieldRateSapovirusProforma: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[12]/div[@class='tms-cell-content']");
        }
    },
    fieldRateProformaLTL: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[12]/div[@class='tms-cell-content']");
        }
    },
    fieldRateSimpleProformaLTL: {
        get: function () {
            return ("//table[@class='dx-datagrid-table']/tbody/tr[1]/td[13]/div[@class='tms-cell-content']");
        }
    },
    clientOrderGrid: {
        get: function () {
            return ("//tr[@class[contains(.,'dx-row dx-data-row dx-row-lines dx-column-lines tms-grid-row')]]");
        }
    },
    clientOrderHeader: {
        get: function () {
            return ("//tr[@class[contains(.,'dx-row dx-header-row dx-column-lines')]]");
        }
    },
    planningHeader: {
        get: function () {
            return ("//tr[@class[contains(.,'dx-row dx-header-row dx-column-lines')]]");
        }
    },
    fieldTotalSummInvoice: {
        get: function () {
            return ("//input[@id='totalInvoicesAmount']");
        }
    },
    fieldCountArticlesTransportation: {
        get: function () {
            return ("//input[@id='CountArticlesTranspontation']");
        }
    },
    fieldCountPiecesTransportation: {
        get: function () {
            return ("//input[@id='CountPiecesTranspontation']");
        }
    },
    waybillsIEInbound: {
        get: function () {
            return ("//a[@translate-attr-title='NakladnayaCelldi_1bef1893']");
        }
    },
    linkPlanned: {
        get: function () {
            return ("//a[contains(text(),'Планирование')]");
        }
    },
    windowDeleteMarkingWaybills: {
        get: function () {
            return ("//h4[@id='removeItemsConfirmModalTitle']");
        }
    },
    plannedInvoiceWeightGross: {
        get: function () {
            return ("//input[@id='items-weight-gross']");
        }
    },
    windowNotAddWaybillsIEShipping: {
        get: function () {
            return ("//div[@class='panel panel-default']/div[2]");
        }
    },
    gridPerformMarking: {
        get: function () {
            return ("//div[@class='dx-scrollable-container']");
        }
    },
    summGoodsPerform: {
        get: function () {
            return ("//input[@id='carriagePreform_Sum']");
        }
    },
    freightPerform: {
        get: function () {
            return ("//input[@id='Carriage_Freight']");
        }
    },
    amountOfInsurance: {
        get: function () {
            return ("//input[@id='Carriage_TotalInsuranceAmount']");
        }
    },
    carriagePreformTotalItog: {
        get: function () {
            return ("//input[@id='carriagePreform_Total_Itog']");
        }
    },
    weightNetPreform: {
        get: function () {
            return ("//input[@id='WeightNetKG']");
        }
    },
    weightGrossPreform: {
        get: function () {
            return ("//input[@id='WeightGrossKG']");
        }
    },
    weightGrossPreformMarkingLine: {
        get: function () {
            return ("//td[16]");
        }
    },
    confirmSelect: {
        get: function () {
            return ("//a/div");
        }
    },
    activeSelectListTK: {
        get: function () {
            return ("//div[@id='inputCarrier']//div[@disabled='disabled']");
        }
    },
    saveArmAdditionalCost: {
        get: function () {
            return ("//a/div");
        }
    },
    return: {
        get: function () {
            return ("//a/div[text()='Возврат']");
        }
    },
    addArmAdditionalCost: {
        get: function () {
            return ("//tr[2]/td/div/div/span");
        }
    },
    addCostAdditionalCost: {
        get: function () {
            return ("//tr[2]/td[2]/div/div/span");
        }
    },
    addStringAdditionalCost: {
        get: function () {
            return ("//button[@class[contains(.,'btn btn-default ng-scope')] and contains(.,'Добавить')]");
        }
    },
    activeListingSelectListTK: {
        get: function () {
            return ("//input[@class='form-control ui-select-search ng-valid ng-dirty ng-hide']");
        }
    },
    activeArmAdditionalCost: {
        get: function () {
            return ("//div[@id='carriageRoutesAdd']//span[@class='btn btn-default form-control ui-select-toggle']//span[@class='ng-binding ng-scope']");
        }
    },
    iconDeleteMailnesia: {
        get: function () {
            return ("//img[@alt='Delete all mail']");
        }
    },
    iconYesDeleteMailnesia: {
        get: function () {
            return ("//input[@value='YES delete them !']");
        }
    },
    gridSearchWarehouses: {
        get: function () {
            return ("//tr[@class='dx-row dx-data-row dx-row-lines dx-column-lines tms-grid-row']");
        }
    },
    selectWarehousesIsCheck: {
        get: function () {
            return ("//input[@class[contains(.,'form-control ng-pristine ng-valid ng-valid-required')]]");
        }
    },
    proformaGrid: {
        get: function () {
            return ("//tr[contains(@class, 'dx-row dx-header-row dx-column-lines')]");
        }
    },
    confirmPreformEnter: {
        get: function () {
            return ("//div[@id='ui-select-choices-row-0-0']/a/div");
        }
    },
    nameMarking: {
        get: function () {
            return ("//tr[@class='ng-scope']/td[2]");
        }
    },
    buttonRemoveFilter: {
        get: function () {
            return ("//button[contains(@class, 'btn btn-default btn-sm glyphicon glyphicon-remove')]");
        }
    },
    buttonIgnoreAndConfirmCarriage: {
        get: function () {
            return ("//button[text()='Игнорировать и подтвердить перевозку']");
        }
    },
    buttonReload: {
        get: function () {
            return ("//button[@class='btn btn-default btn-sm glyphicon glyphicon-refresh']");
        }
    },
    buttonDropdawnLang: {
        get: function () {
            return ("//ul[@class='nav navbar-nav navbar-right ng-scope']//button[@href='#']");
        }
    },
    arrowSortData: {
        get: function () {
            return ("//td[2]/span[@class='dx-sort dx-sort-down']");
        }
    },
    arrowSortDataGrid: {
        get: function () {
            return ("//td[2]");
        }
    },
    buttonDeleteCurrencyWaybills: {
        get: function () {
            return ("//div[@id='import']/div[@class='form-horizontal']/div[@class='container']//button[@type='button']");
        }
    },
    arrowSortDataUp: {
        get: function () {
            return ("//td[2]/span[@class='dx-sort dx-sort-up']");
        }
    },
    buttonCalculateTK: {
        get: function () {
            return ("//a[@class[contains(.,'btn btn-default ng-scope')] and contains(.,'Рассчитать распределение по ТК')]");
        }
    },
    fieldChoiceDirection: {
        get: function () {
            return ("//html//div[@id='direction-picker-grid']/tms-grid[@class='ng-isolate-scope tms-grid']/div[@class='ng-scope']/div[@class='dx-visibility-change-handler dx-widget']/div[@class='dx-datagrid']/div[5]//table[@class='dx-datagrid-table']/tbody/tr[2]/td[1]/div/div[@class='dx-editor-container']/div/div[@class='dx-texteditor-border']/input[@class='dx-texteditor-input']");
        }
    },
    inputEmail: {
        get: function () {
            return ("//INPUT[@id='inputEmail']");
        }
    },
});

module.exports = MainPage;
