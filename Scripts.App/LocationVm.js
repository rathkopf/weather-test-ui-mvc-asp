var LocationVm = /** @class */ (function () {
    function LocationVm() {
        var _this = this;
        this.address = ko.observable("157 Yesler Way, Seattle, WA 98104");
        this.latitude = ko.observable("48");
        this.longitude = ko.observable("-122");
        this.errorMsg = ko.observable("");
        this.getLatLong = function () {
            $.get("api/Geo?address=" + _this.address(), function (data, status) {
                if (status === "success") {
                    var geoData = $.parseJSON(data);
                    _this.longitude(geoData.results[0].location.lng);
                    _this.latitude(geoData.results[0].location.lat);
                }
                else {
                    _this.errorMsg("Error retrieving geolocation of address.");
                }
            });
        };
    }
    return LocationVm;
}());
//# sourceMappingURL=LocationVm.js.map