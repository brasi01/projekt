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

        this.additional_tidal_channels_price = 0;

        this.multiroom_sets = 1;
        this.multiroom_monthly_price = 0;
        this.multiroom_activation_price = 0;
        this.multiroom_total_activation_charge = 0;
        this.multiroom_total_monthly_payment = 0;

        this.period_months = periods[0].time;
        this.activation_charge = activation_charges[0].price;

        this.internet_price_outcome = document.querySelector('.internet-price .amount')
        this.tv_price_outcome = document.querySelector('.tv-price .amount')
        this.additional_channels_price_outcome = document.querySelector('.additional-channels-price .amount')
        this.tv_hardware_monthly_payment_outcome = document.querySelector('.tv-hardware-monthly-payment .amount')
        this.multiroom_total_monthly_payment_outcome = document.querySelector('.multiroom-total-monthly-payment .amount')
        this.total_monthly_payment_outcome = [...document.querySelectorAll('.monthly-payment__total span')]

        this.total_internet_hardware_price_outcome = document.querySelector('.total-internet-hardware-price .amount')
        this.tv_hardware_one_time_payment_outcome = document.querySelector('.tv-hardware-one-time-payment .amount')
        this.multiroom_total_activation_charge_outcome = document.querySelector('.multiroom-total-activation-charge .amount')
        this.activation_charge_outcome = document.querySelector('.activation-charge .amount')
        this.one_time_payment_total_outcome = [...document.querySelectorAll('.one-time-payment__total span')]
    }

    // OKRES MIESIĘCZNY

    count_period_months(period) {
        this.period_months = parseInt(period.time)
        // this.count_total_monthly_payment()
    }

    count_activation_charge() {
        this.activation_charge_outcome.innerHTML = this.activation_charge
    }

    // INTERNET 

    count_internet_price(internetPrice) {
        this.internet_price = parseInt(internetPrice.price)
        this.internet_price_outcome.innerHTML = this.internet_price;
        this.count_activation_charge()
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
        this.total_internet_hardware_price_outcome.innerHTML = this.total_internet_hardware_price;
        this.count_total_hardware_price()
    }

    // TELEWIZJA

    count_television(tvPrice) {
        this.tv_price = parseInt(tvPrice.price)
        this.tv_price_outcome.innerHTML = this.tv_price;
        this.count_total_monthly_payment()
    }

    mark_default_tv_package() {
        this.tv_price = parseInt(tvs[0].price);
        this.tv_price_outcome.innerHTML = this.tv_price;
        tvs[0].mark_default_option(tvs[0].selector);
        this.mark_default_tv_hardware()
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
        this.additional_channels_price_outcome.innerHTML = this.additional_channels_price.toFixed(2)
        this.count_total_monthly_payment()
    }

    clear_additional_channels() {
        this.additional_channels_price = 0;
        this.additional_channels_names = [];
        this.additional_channels_price_outcome.innerHTML = this.additional_channels_price.toFixed(2);
    }

    count_additional_tidal_channels(extentionPrice) {
        this.additional_tidal_channels_price = parseFloat(extentionPrice.price)
    }

    mark_default_tv_hardware() {
        this.tv_hardware_one_time_payment = parseInt(equipments_tv[1].price);
        equipments_tv[1].mark_default_option(equipments_tv[1].selector);
        this.count_total_hardware_price()

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

    count_multiroom(multiroom) {
        this.multiroom_monthly_price = parseInt(multiroom.price);
        this.multiroom_activation_price = parseInt(multiroom.activation_price);
        this.count_multiroom_total()
    }

    count_multiroom_sets(sets) {
        this.multiroom_sets = parseInt(sets.childNodes[0].nodeValue);
        this.count_multiroom_total()
    }

    count_multiroom_total() {
        this.multiroom_total_activation_charge = this.multiroom_activation_price * this.multiroom_sets;
        this.multiroom_total_activation_charge_outcome.innerHTML = this.multiroom_total_activation_charge;
        this.multiroom_total_monthly_payment = this.multiroom_monthly_price * this.multiroom_sets;
        this.multiroom_total_monthly_payment_outcome.innerHTML = this.multiroom_total_monthly_payment;
        this.count_total_monthly_payment()
        this.count_total_one_time_payment()
    }

    clear_multiroom() {
        this.multiroom_monthly_price = 0;
        this.multiroom_activation_price = 0;
        this.multiroom_sets = 1;
        this.count_multiroom_total()
    }

    // PODLICZANIE FINALNEJ KWOTY

    clear_tv_section() {
        this.tv_price = 0;
        this.tv_price_outcome.innerHTML = this.tv_price;
        this.tv_hardware_one_time_payment = 0;
        this.tv_hardware_monthly_payment = 0;
        this.clear_additional_channels()
        this.clear_multiroom()
        this.count_total_hardware_price()
    }

    count_total_hardware_price() {
        this.total_hardware_price = this.total_internet_hardware_price + this.tv_hardware_one_time_payment;
        this.tv_hardware_one_time_payment_outcome.innerHTML = this.tv_hardware_one_time_payment;
        this.tv_hardware_monthly_payment_outcome.innerHTML = this.tv_hardware_monthly_payment;
        this.count_total_one_time_payment()
        this.count_total_monthly_payment()
    }

    count_total_one_time_payment() {
        this.total_one_time_payment = this.total_hardware_price + this.multiroom_total_activation_charge + this.activation_charge;
        this.one_time_payment_total_outcome[1].innerHTML = this.total_one_time_payment.toFixed(2);
    }

    count_total_monthly_payment() {
        this.total_monthly_payment = this.internet_price + this.tv_price + this.additional_channels_price + this.tv_hardware_monthly_payment + this.multiroom_total_monthly_payment;
        this.total_monthly_payment_outcome[1].innerText = this.total_monthly_payment.toFixed(2);
    }
}

const count = new Count()