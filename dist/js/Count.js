class Count {
    constructor() {
        this.total_one_time_payment = 0;
        this.total_monthly_payment = 0;

        this.internet_price = 0;
        this.tv_price = 0;

        this.total_hardware_price = 0;

        this.internet_hardware = 0;
        this.internet_extra_hardware = 0;
        this.total_internet_hardware_price = 0;

        this.tv_hardware_one_time_payment = 0;
        this.tv_hardware_monthly_payment = 0;

        this.additional_channels_names = [];
        this.additional_channels_price = 0;

        this.period_months = periods[0].time;
        this.activation_charge = activation_charges[0].price;
    }

    // OKRES MIESIĘCZNY

    count_period_months(period) {
        this.period_months = parseInt(period.time)
        //
        // this.count_internet_price()
        // ^^
    }

    // INTERNET 

    count_internet_price(internetPrice) {
        this.internet_price = parseInt(internetPrice.price)

        this.count_total_monthly_payment()
    }

    mark_default_internet_hardware() {
        if (this.internet_price === 0) {
            this.internet_hardware = parseInt(internet_hardwares[0].price);
            internet_hardwares[0].mark_default_option(internet_hardwares[0].selector);
            this.count_total_internet_hardware_price()
        }
    }

    count_internet_hardware(eqPrice_internet) {
        this.internet_hardware = parseInt(eqPrice_internet.price)
        this.count_total_internet_hardware_price()
    }

    count_internet_extra_hardware() {
        if (this.internet_extra_hardware === 0) {
            this.internet_extra_hardware = parseInt(internet_extra_hardwares[0].price);
            internet_extra_hardwares[0].mark_default_option(internet_extra_hardwares[0].selector);
        } else {
            this.internet_extra_hardware = 0;
        }
        this.count_total_internet_hardware_price()
    }

    count_total_internet_hardware_price() {
        this.total_internet_hardware_price = this.internet_hardware + this.internet_extra_hardware;
        //
        // Dodaj total_eq_internet_price do Podsumowania
        // ^^
        this.count_total_hardware_price()
    }

    // TELEWIZJA

    count_television(tvPrice) {
        this.tv_price = parseInt(tvPrice.price)
        this.count_total_monthly_payment()
    }

    count_additional_channels(extentionPrice) {
        let extName = extentionPrice.name;
        let extPrice = parseFloat(extentionPrice.price);
        if (!this.additional_channels_names.includes(extName)) {
            this.additional_channels_names.push(extName);
            this.additional_channels_price += extPrice;
        } else if (this.additional_channels_names.includes(extName)) {
            this.additional_channels_names.splice(this.additional_channels_names.indexOf(extName), 1)
            this.additional_channels_price -= extPrice;
        }
        this.count_total_monthly_payment()
    }

    mark_default_tv_hardware() {
        if (this.tv_price === 0) {
            this.tv_hardware_one_time_payment = parseInt(equipments_tv[1].price);
            equipments_tv[1].mark_default_option(equipments_tv[1].selector);
            this.count_total_hardware_price()
        }
    }

    count_tv_hardware(eqPrice_tv) {
        if (eqPrice_tv.name == 'Dzierżawa dekodera') {
            this.tv_hardware_one_time_payment = 0;
            this.tv_hardware_monthly_payment = parseInt(eqPrice_tv.price)
        } else if (eqPrice_tv.name == 'Zakup dekodera') {
            this.tv_hardware_monthly_payment = 0;
            this.tv_hardware_one_time_payment = parseInt(eqPrice_tv.price)
        }
        this.count_total_hardware_price()
    }

    // PODLICZANIE FINALNEJ KWOTY

    clear_tv_section() {
        this.tv_price = 0;
        this.tv_hardware_one_time_payment = 0;
        this.tv_hardware_monthly_payment = 0;
        this.additional_channels_price = 0;
        this.count_total_hardware_price()
    }

    count_total_hardware_price() {
        this.total_hardware_price = this.total_internet_hardware_price + this.tv_hardware_one_time_payment;
        this.count_total_one_time_payment()
        this.count_total_monthly_payment()
    }

    count_total_one_time_payment() {
        this.total_one_time_payment = this.total_hardware_price;
        //
        // DODAJ MULTIROOM I CENE AKTYWACYJNĄ
        // ^^
        one_time_payment.innerHTML = this.total_one_time_payment.toFixed(2);
    }

    count_total_monthly_payment() {
        this.total_monthly_payment = this.internet_price + this.tv_price + this.additional_channels_price + this.tv_hardware_monthly_payment;
        monthly_payment.innerText = this.total_monthly_payment.toFixed(2);
    }
}

const monthly_payment = document.querySelector('.monthly-payment__sum span');
const one_time_payment = document.querySelector('.disposable-payment__sum span');

const count = new Count()