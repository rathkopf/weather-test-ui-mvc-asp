class App {
    locationVm=new LocationVm();
    forecastVm=new ForecastVm();
    errorMsg = ko.observable("");
    private _changeDelay: number=0;

    constructor() {
        this.locationVm.latitude.subscribe(this.LocationChanged);
        this.locationVm.longitude.subscribe(this.LocationChanged);
    }

    LocationChanged= (newValue: string) => {
        // when the location changes, update the forecast VM
        if (this._changeDelay !== 0) {
            clearTimeout(this._changeDelay);
        }
        this._changeDelay = setTimeout(() => {
                $.get(`api/forecast?lat=${this.locationVm.latitude()}&lng=${this.locationVm.longitude()}`
                    , (data: any, status: string) => {
                        if (status === "success") {
                            const forecastData = $.parseJSON(data);
                        } else {
                            this.errorMsg("Error retrieving geolocation of address.");
                        }

                    });
            }
            , 2000
        );

    };
}