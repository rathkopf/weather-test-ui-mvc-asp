class DailyForecast {
    DayOfWeek=ko.observable("");
    HiTemp=ko.observable("");
    LowTemp=ko.observable("");
    Summary=ko.observable("");
}

class ForecastVm {
    CurrentSummary=ko.observable("");
    CurrentTemp=ko.observable("");
    Future: KnockoutObservableArray<DailyForecast>=ko.observableArray();
}