class LocationVm {
    address=ko.observable("157 Yesler Way, Seattle, WA 98104");
    latitude=ko.observable("48");
    longitude = ko.observable("-122");
    errorMsg = ko.observable("");
    getLatLong = () => {
        $.get("api/Geo?address=" + this.address()
            , (data: any, status: string) => {
                if (status === "success") {
                    var geoData = $.parseJSON(data);
                    this.longitude(geoData.results[0].location.lng);
                    this.latitude(geoData.results[0].location.lat);
                } else {
                    this.errorMsg("Error retrieving geolocation of address.");
                }

            });

    };
}