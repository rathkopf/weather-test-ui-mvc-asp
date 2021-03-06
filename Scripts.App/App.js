var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.locationVm = new LocationVm();
        this.forecastVmObs = ko.observable();
        this.errorMsg = ko.observable("");
        this._changeDelay = 0;
        this.LocationChanged = function (newValue) {
            // when the location changes, update the forecast VM
            if (_this._changeDelay !== 0) {
                clearTimeout(_this._changeDelay);
            }
            _this._changeDelay = setTimeout(function () {
                $.get("api/forecast?lat=" + _this.locationVm.latitude() + "&lng=" + _this.locationVm.longitude(), function (data, status) {
                    if (status === "success") {
                        _this.forecastVmObs(ko.mapping.fromJS(data));
                    }
                    else {
                        _this.errorMsg("Error retrieving geolocation of address.");
                    }
                });
            }, 100);
        };
        this.locationVm.latitude.subscribe(this.LocationChanged);
        this.locationVm.longitude.subscribe(this.LocationChanged);
    }
    return App;
}());
//# sourceMappingURL=App.js.map