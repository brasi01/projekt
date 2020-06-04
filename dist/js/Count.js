class Count {
    constructor(){
        this.total_price = 0;
        this.period_months = 0;
        this.tvPrice = 0;
        this.extentionNames = [];
        this.extentionPrice = 0;
        this.internetPrice = 0;
        this.total_eq_price = 0;
        this.eqPrice_tv = 0;
        this.eqPrice_internet = 0;
    }

    countPeriod(period) {
        this.period_months = parseInt(period.time) 
        this.countTotal()
    }

    countTelevision(tvPrice) {
        this.tvPrice = parseInt(tvPrice.price)
        this.countTotal()
    }

    countExtention(extentionPrice) {
        let extName = extentionPrice.name;
        let extPrice = parseFloat(extentionPrice.price);
        if (!this.extentionNames.includes(extName)){
            this.extentionNames.push(extName);
            this.extentionPrice += extPrice;
        } else if(this.extentionNames.includes(extName)) {
            this.extentionNames.splice(this.extentionNames.indexOf(extName), 1)
            this.extentionPrice -= extPrice;
        }
        this.countTotal()
    }

    countInternet(internetPrice) {
        this.internetPrice = parseInt(internetPrice.price)
        this.countTotal()
    }

    countEquipmentTV(eqPrice_tv) {
        this.eqPrice_tv = parseInt(eqPrice_tv.price)
        this.countEquipment()
    }

    countEquipmentInternet(eqPrice_internet) {
        this.eqPrice_internet = parseInt(eqPrice_internet.price)
        this.countEquipment()
    }

    countEquipment() {
        this.total_eq_price = this.eqPrice_internet + this.eqPrice_tv;
        this.countTotal()
    }

    countTotal(){
        this.total_price = (this.tvPrice + this.internetPrice) * this.period_months + this.total_eq_price + this.extentionPrice;
        totalPrice.innerText = this.total_price.toFixed(2)
    }

}

const totalPrice = document.querySelector('.monthly-payment__tile span')
// const totalPrice = document.querySelector('.monthly-payment span')

const count = new Count()