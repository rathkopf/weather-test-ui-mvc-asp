var DailyForecast = /** @class */ (function () {
    function DailyForecast() {
        this.DayOfWeek = ko.observable("");
        this.HiTemp = ko.observable("");
        this.LowTemp = ko.observable("");
        this.Summary = ko.observable("");
    }
    return DailyForecast;
}());
var ForecastVm = /** @class */ (function () {
    function ForecastVm() {
        this.CurrentSummary = ko.observable("");
        this.CurrentTemp = ko.observable("");
        this.Future = ko.observableArray();
    }
    return ForecastVm;
}());
//# sourceMappingURL=ForecastVm.js.map