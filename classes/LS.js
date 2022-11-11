class LS {
    constructor() {
        this.defaultCity = "Tallinn"
        this.city
    }
    getCityName(){
        if(localStorage.getItem("city") === null){
            this.city = this.defaultCity
        } else {
            this.city = localStorage.getItem("city")
        }
        return this.city
    }

    setCity(city){
        localStorage.setItem("city", city)
    }
}