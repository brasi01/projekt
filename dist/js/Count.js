class Count {
    constructor(){
        this.total_price = 0;
        this.period_months = periods[0].time;
        this.tvPrice = 0;
        this.extentionNames = [];
        this.extentionPrice = 0;
        this.internetPrice = 0;
        this.total_eq_price = 0;
        this.eqPrice_tvDisposable = 0;
        this.eqPrice_tvMonthly = 0;
        this.eqPrice_internet = 0;
        this.activation_charge = activation_charges[0].price;
    }

    countPeriod(period) {
        this.period_months = parseInt(period.time) 
        this.countTotal()
    }

    countTelevision(tvPrice) {
        this.tvPrice = parseInt(tvPrice.price)
        this.countTotal()
    }

    markDefaultOptions() {
        if(this.tvPrice === 0){
            this.eqPrice_tvDisposable = parseInt(equipments_tv[1].price);
            equipments_tv[1].markDefaultOption(equipments_tv[1].selector);
            this.internetPrice = parseInt(internets[0].price);
            internets[0].markDefaultOption(internets[0].selector);
            this.eqPrice_internet = parseInt(equipments_internet[0].price);
            equipments_internet[0].markDefaultOption(equipments_internet[0].selector);
            this.countEquipment();
        }
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
        if (eqPrice_tv.name == 'Dzierżawa dekodera') {
            this.eqPrice_tvDisposable = 0;
            this.eqPrice_tvMonthly = parseInt(eqPrice_tv.price)
        } else if (eqPrice_tv.name == 'Zakup dekodera') {
            this.eqPrice_tvMonthly = 0;
            this.eqPrice_tvDisposable = parseInt(eqPrice_tv.price)
        }
        this.countEquipment()
    }

    countEquipmentInternet(eqPrice_internet) {
        this.eqPrice_internet = parseInt(eqPrice_internet.price)
        this.countEquipment()
    }

    countEquipment() {
        this.total_eq_price = this.eqPrice_internet + this.eqPrice_tvDisposable;
        this.countTotal()
    }

    countTotal() {
        // console.log('tv: ', this.tvPrice,' internet: ', this.internetPrice, ' okres ', this.period_months, ' rozszerzenia: ', this.extentionPrice, ' graty na mies: ', this.eqPrice_tvMonthly)
        // console.log('graty jednorazowo tv: ', this.eqPrice_tvDisposable, ' graty jednorazowo internet: ', this.eqPrice_internet, ' graty policzone: ', this.total_eq_price)
        this.total_price = (this.tvPrice + this.internetPrice) * this.period_months + this.extentionPrice + this.eqPrice_tvMonthly;
        totalPrice.innerText = this.total_price.toFixed(2);
        disposablePayment.innerHTML = this.total_eq_price + parseInt(this.activation_charge);
    }

}

const totalPrice = document.querySelector('.monthly-payment span');

const disposablePayment = document.querySelector('.disposable-payment span');

const count = new Count()