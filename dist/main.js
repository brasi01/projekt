class Period {
    constructor(name, time, selector) {
        this.name = name;
        this.time = time;
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name;
    }
}

class Internet {
    constructor(name, speed_down, speed_sent, price, selector, selector_btn) {
        this.name = name;
        this.speed_down = speed_down;
        this.speed_sent = speed_sent;
        this.price = price;
        this.selector = selector;
        this.selector_btn = selector_btn;

        Array.from(selector.childNodes)[1].innerHTML = this.name;
        Array.from(selector.childNodes)[3].innerHTML = this.get_speed_down();
        Array.from(selector.childNodes)[5].innerHTML = this.get_speed_sent()
        Array.from(selector.childNodes)[7].innerHTML = this.get_price();

        this.change_prices = () => {
            Array.from(selector.childNodes)[7].innerHTML = this.get_price();
        };
    }

    set_price(value) {
        this.price = value;
    }

    get_speed_down() {
        return `Prędkość ściągania: ${this.speed_down}`
    }

    get_speed_sent() {
        return `Prędkość wysyłania: ${this.speed_sent}`
    }

    get_price() {
        return `Cena: ${this.price} zł / mc`
    }
};

class Television {
    constructor(name, chanels_number, chanels_hd_number, price, selector, selector_btn) {
        this.name = name;
        this.chanels_number = chanels_number;
        this.chanels_hd_number = chanels_hd_number;
        this.price = price;
        this.selector = selector;
        this.selector_btn = selector_btn;
        // this.chanels = [];

        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.get_chanels_number()
        Array.from(selector.childNodes)[5].innerHTML = this.get_chanels_hd_number()
        Array.from(selector.childNodes)[7].innerHTML = this.get_price()
    }

    mark_default_option(selector) {
        selector.classList.add('active');
    }

    get_chanels_number() {
        return `Ilość wszystkich kanałów: ${this.chanels_number} zł / mc`
    }

    get_chanels_hd_number() {
        return `Ilość kanałow HD: ${this.chanels_hd_number} zł / mc`
    }

    get_price() {
        return `Cena: ${this.price} zł / mc`
    }
};

class Extention {
    constructor(name, price, selector) {
        this.name = name;
        this.price = price;
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.get_price()
    }

    get_price() {
        return `Cena: ${this.price.toFixed(2)} zł`
    }
};

class Equipment {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};

class Hardware extends Equipment {
    constructor(name, price, selector) {
        super(name, price);
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.get_price()
    }

    mark_default_option(selector) {
        selector.classList.add('active');
    }

    get_price() {
        return `Cena: ${this.price} zł`
    }
};

class Multiroom extends Hardware {
    constructor(name, price, activation_price, sets, sets_selector, selector, btn_selector) {
        super(name, price, selector);
        this.activation_price = activation_price;
        this.sets = sets;
        this.sets_selector = sets_selector;
        this.btn_selector = btn_selector;

        Array.from(selector.childNodes)[3].innerHTML = this.get_multiroom_price()
        Array.from(selector.childNodes)[5].innerHTML = this.get_activation_price()

        this.sets_selector.forEach((selector, i) => {
            selector.innerHTML = sets[i]
        })
    }

    get_multiroom_price() {
        return `Cena miesięszna za sztukę: ${this.price} zł`
    }

    get_activation_price() {
        return `Cena aktywacyjna za sztukę: ${this.activation_price} zł`
    }
}

class Price_summary {
    constructor(selector, value, name) {
        this.selector = selector;
        this.value = value;
        this.name = name;

        this.show_summary_prices = () => {
            Array.from(selector.childNodes)[1].innerHTML = this.name;
            Array.from(selector.childNodes)[3].innerHTML = this.get_price();

        }

        this.show_summary_prices()
    }

    set_price(value) {
        this.value = value;
    }

    get_price() {
        return `${this.value} zł`
    }

}

class Count {
    constructor() {
        // OKRES MIESIĘCZNY
        let period_selector = document.querySelectorAll('.period-choice__option');

        this.periods = [
            new Period('24 miesiące', 24, period_selector[0]),
            new Period('12 miesiące', 12, period_selector[1]),
            new Period('Czas nieokreślony', 1, period_selector[2])
        ];

        // INTERNET
        let internet_selector = document.querySelectorAll('.web_package__offer-content'),
            internet_selector_btn = document.querySelectorAll('.web_package__offer-tile button');

        this.internets = [
            new Internet('100 MEGA', '10 Mb/s', '5 Mb/s', 59, internet_selector[0], internet_selector_btn[0]),
            new Internet('150 MEGA', '15 Mb/s', '5 Mb/s', 65, internet_selector[1], internet_selector_btn[1]),
            new Internet('200 MEGA', '20 Mb/s', '5 Mb/s', 75, internet_selector[2], internet_selector_btn[2]),
            new Internet('300 MEGA', '30 Mb/s', '5 Mb/s', 85, internet_selector[3], internet_selector_btn[3]),
            new Internet('500 MEGA', '40 Mb/s', '5 Mb/s', 110, internet_selector[4], internet_selector_btn[4])
        ];

        this.internet_monthly_prices = [
            { prices_24: [59, 65, 75, 85, 110] },
            { prices_12: [69, 75, 85, 95, 120] }
        ];

        // TELEWIZJA 

        let options_selector = document.querySelectorAll('.tv-package__offer-content'),
            tv_selector_btn = document.querySelectorAll('.tv-package__offer-tile button');

        this.tvs = [
            new Television('Mikro HD', '76', '38', 75, options_selector[0], tv_selector_btn[0]),
            new Television('Mini HD', '137', '65', 90, options_selector[1], tv_selector_btn[1]),
            new Television('Wielotematyczny HD', '192', '96', 105, options_selector[2], tv_selector_btn[2]),
            new Television('Wielotematyczny Super HD', '206', '109', 119, options_selector[3], tv_selector_btn[3]),
            new Television('Wielotematyczny Mega HD', '218', '118', 139, options_selector[4], tv_selector_btn[4])
        ];

        // DODATKOWE KANAŁY

        let extention_selector = document.querySelectorAll('.additional-package__offer-tile');

        this.topic_packages = [
            new Extention('DISCOVERY HD', 6.99, extention_selector[0]),
            new Extention('Sport HD', 7.99, extention_selector[1]),
            new Extention('Luz HD', 7.99, extention_selector[2]),
            new Extention('Nauka HD', 6.99, extention_selector[3]),
            new Extention('Filmy HD', 9.99, extention_selector[4]),
            new Extention('Muzyka HD', 4.99, extention_selector[5]),
            new Extention('Bajki HD', 6.99, extention_selector[6]),
            new Extention('Seriale HD', 9.99, extention_selector[7]),
            new Extention('Świat HD', 1.99, extention_selector[8])
        ];

        this.premium_packages = [
            new Extention('Pakiet ELEVEN HD', 1, extention_selector[9]),
            new Extention('Pakiet HBO HD +OD +GO', 36.99, extention_selector[10]),
            new Extention('Pakiet HBO HD', 29.99, extention_selector[11]),
            new Extention('Pakiet CANAL+ SELECT HD', 62.99, extention_selector[12]),
            new Extention('Pakiet CANAL+ PRESTIGE HD', 68.99, extention_selector[13]),
            new Extention('Pakiet CINEMAX HD', 14.99, extention_selector[14]),
            new Extention('TV Republika HD', 4.99, extention_selector[15])
        ];

        this.tidal_premium_packages = [
            new Extention('Pakiet CANAL+ SELECT', 44.90, extention_selector[16]),
            new Extention('Pakiet CANAL+ PRESTIGE', 44.90, extention_selector[17]),
            new Extention('Pakiet HBO HD', 24.90, extention_selector[18]),
            new Extention('Pakiet HBO HD +OD +GO', 29.90, extention_selector[19])
        ];

        this.excluding_packages = [
            [this.premium_packages[3], this.tidal_premium_packages[0]],
            [this.premium_packages[4], this.tidal_premium_packages[1]],
            [this.premium_packages[2], this.tidal_premium_packages[2]],
            [this.premium_packages[1], this.tidal_premium_packages[3]]
        ]

        // SPRZĘT

        this.activation_charges = [
            new Equipment('Opłata aktywacyjna', 199)
        ];

        let hardware_selector = document.querySelectorAll('.web-hardware__options-possibility');

        this.internet_hardwares = [
            new Hardware('Router WiFi Standard', 0, hardware_selector[0]),
            new Hardware('Router WiFi Premium', 99, hardware_selector[1]),
            new Hardware('Router WiFi Premium AC ', 199, hardware_selector[2])
        ];

        this.internet_extra_hardwares = [
            new Hardware('Router WiFi Standard', 159, hardware_selector[3]),
        ];

        let eq_selector = document.querySelectorAll('.tv-hardware__options-possibility');

        this.tv_hardwares = [
            new Hardware('Dzierżawa dekodera', 10, eq_selector[0]),
            new Hardware('Zakup dekodera', 240, eq_selector[1])
        ];

        let multiroom_hardware_selector = document.querySelectorAll('.multiroom-hardware__options-possibility');
        this.multiroom_hardware_areas = [...document.querySelectorAll('.multiroom-hardware')]

        this.multiroom_hardwares = [
            [new Hardware('Dzierżawa dekodera', 10, multiroom_hardware_selector[0]), new Hardware('Zakup dekodera', 240, multiroom_hardware_selector[1])],
            [new Hardware('Dzierżawa dekodera', 10, multiroom_hardware_selector[2]), new Hardware('Zakup dekodera', 240, multiroom_hardware_selector[3])],
            [new Hardware('Dzierżawa dekodera', 10, multiroom_hardware_selector[4]), new Hardware('Zakup dekodera', 240, multiroom_hardware_selector[5])],
            [new Hardware('Dzierżawa dekodera', 10, multiroom_hardware_selector[6]), new Hardware('Zakup dekodera', 240, multiroom_hardware_selector[7])],
            [new Hardware('Dzierżawa dekodera', 10, multiroom_hardware_selector[8]), new Hardware('Zakup dekodera', 240, multiroom_hardware_selector[9])]
        ];

        let multiroom_selector = document.querySelector('.activate-multiroom__intro-area'),
            multiroom_btn_selectors = [...document.querySelectorAll('.activate-multiroom__btn-area button')],
            multiroom_sets_selectors = [...document.querySelectorAll('.multiroom-sets__choose')];

        this.multirooms = [
            new Multiroom('Możliwość niezależnego odbioru wykupionego pakietu na kolejnym telewizorze.', 15, 59, [1, 2, 3, 4, 5], multiroom_sets_selectors, multiroom_selector, multiroom_btn_selectors)
        ];
        multiroom_btn_selectors[0].style.display = "none"

        this.add_events()

        this.add_hardware_btn = document.querySelector('.hardware__add-btn');
        this.remove_hardware_btn = document.querySelector('.remove-hardware-btn');
        this.extra_hardware = document.querySelector('.extra-hardware');
        this.hardware_headline = document.querySelector('.hardware__headline');

        this.add_extra_hardware()
        this.remove_extra_hardware()

        this.tv_extend_options = document.querySelectorAll('.tv-extend__possibility');
        this.tv_section = document.querySelector('.tv')

        this.show_tv_section()

        this.total_one_time_payment = 0;
        this.total_monthly_payment = 0;
        this.total_monthly_payment_24 = 0;

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

        this.additional_tidal_channels_names = [];
        this.additional_tidal_channels_price = 0;

        this.multiroom_sets = 1;
        this.multiroom_monthly_price = 0;
        this.multiroom_activation_price = 0;
        this.multiroom_total_activation_charge = 0;
        this.multiroom_total_monthly_payment = 0;
        this.multiroom_hardwares_names = []

        this.multiroom_hardware_monthly_payment = 0;
        this.multiroom_hardware_one_time_payment = 0;

        this.period_months = this.periods[0].time;
        this.activation_charge = this.activation_charges[0].price;

        let monthly_payment_selectors = [...document.querySelectorAll('.monthly-payment__price')]

        this.monthly_prices_summary = [
            new Price_summary(monthly_payment_selectors[0], this.internet_price, 'Cena internetu:'),
            new Price_summary(monthly_payment_selectors[1], this.tv_price, 'Cena telewizji:'),
            new Price_summary(monthly_payment_selectors[2], this.additional_channels_price, 'Cena dodatkowych kanałów:'),
            new Price_summary(monthly_payment_selectors[3], this.additional_tidal_channels_price, 'Cena dodatkowych kanałów w 12 miesięcznej promocji:'),
            new Price_summary(monthly_payment_selectors[4], this.multiroom_total_monthly_payment, 'Multiroom:'),
            new Price_summary(monthly_payment_selectors[5], this.tv_hardware_monthly_payment, 'Dzierżawa dekodera TV:'),
            new Price_summary(monthly_payment_selectors[6], this.multiroom_hardware_monthly_payment, 'Dzierżawa dekodera multiroom:')

        ]

        let one_time_payment_selectors = [...document.querySelectorAll('.one-time-payment__price')]

        this.one_time_prices_summary = [
            new Price_summary(one_time_payment_selectors[0], this.total_internet_hardware_price, 'Cena sprzętu internetowego:'),
            new Price_summary(one_time_payment_selectors[1], this.tv_hardware_one_time_payment, 'Cena sprzętu telewizyjnego:'),
            new Price_summary(one_time_payment_selectors[2], this.multiroom_hardware_one_time_payment, 'Cena sprzętu multiroom:'),
            new Price_summary(one_time_payment_selectors[3], this.multiroom_total_activation_charge, 'Cena aktywacyjna multiroom:'),
            new Price_summary(one_time_payment_selectors[4], this.activation_charge, 'Cena aktywacyjna:')
        ]

        let total_monthly_payment_selectors = [...document.querySelectorAll('.monthly-payment__total')],
            total_one_time_payment_selector = document.querySelector('.one-time-payment__total');

        this.total_payments = [
            new Price_summary(total_monthly_payment_selectors[0], this.total_monthly_payment, 'Cena na miesiąc przez 12 miesięcy: '),
            new Price_summary(total_monthly_payment_selectors[1], this.total_monthly_payment_24, 'Cena na miesiąc przez 24 miesiące: '),
            new Price_summary(total_one_time_payment_selector, this.total_one_time_payment, 'Suma:')
        ]

        this.change_charge_btn = document.querySelector('.change-charge__btn');
        this.change_charge_alert = document.querySelector('.change-charge__alert');
        this.count_activation_charge()
    }

    add_events() {
        this.periods.forEach((period) => {
            period.selector.addEventListener('click', () => {

                this.periods.forEach(period => period.selector.classList.remove("active"))
                period.selector.classList.add("active")
                this.count_period_months(period)

                if (period.time === 24) {
                    this.internets.forEach((internet, i) => {
                        internet.set_price(this.internet_monthly_prices[0].prices_24[i])
                        internet.change_prices()
                    })
                } else if (period.time === 12) {
                    this.internets.forEach((internet, i) => {
                        internet.set_price(this.internet_monthly_prices[1].prices_12[i])
                        internet.change_prices()
                    })
                }

                if (this.internets.some(internet => internet.selector.classList.contains("active"))) {
                    this.internets.forEach(internet => internet.selector.classList.remove("active"))
                    this.internets[0].selector.classList.add("active")

                    if (this.tv_extend_options[1].classList.contains("active")) {
                        this.mark_default_tv_package()
                    }

                    this.count_internet_price(this.internets[0])
                }

                this.count_total_monthly_payment()
            })
        })

        this.internets.forEach(internet => {
            internet.selector_btn.addEventListener('click', () => {
                this.internets.forEach(internet => internet.selector.classList.remove("active"))
                internet.selector.classList.add("active")
                document.querySelector('.web-hardware').style.display = 'flex';
                document.querySelector('.tv-extend').style.display = 'flex';
                document.querySelector('.price-summary').style.display = 'flex';
                document.querySelector('.activation-charge').style.display = 'flex';
                this.mark_default_internet_hardware()
                this.count_internet_price(internet)
            })
        })

        this.tvs.forEach(tv => {
            tv.selector_btn.addEventListener('click', () => {
                this.tvs.forEach(tv => tv.selector.classList.remove("active"))
                tv.selector.classList.add("active")
                this.count_television(tv)
            })
        })

        this.topic_packages.forEach(topic_package => {
            topic_package.selector.addEventListener('click', () => {
                topic_package.selector.classList.toggle("active");
                this.count_additional_channels(topic_package);
            })
        })

        this.premium_packages.forEach(premium_package => {
            premium_package.selector.addEventListener('click', () => {
                premium_package.selector.classList.toggle("active");
                this.excluding_packages.forEach(package_ => {
                    if (package_[0] == premium_package && package_[1].selector.classList.contains("active")) {
                        package_[1].selector.classList.remove("active")
                        this.count_additional_tidal_channels(package_[1]);
                    }
                })
                this.count_additional_channels(premium_package);
            })
        })

        this.tidal_premium_packages.forEach(tidal_premium_package => {
            tidal_premium_package.selector.addEventListener('click', () => {
                tidal_premium_package.selector.classList.toggle("active");
                this.excluding_packages.forEach(package_ => {
                    if (package_[1] == tidal_premium_package && package_[0].selector.classList.contains("active")) {
                        package_[0].selector.classList.remove("active")
                        this.count_additional_channels(package_[0]);
                    }
                })
                this.count_additional_tidal_channels(tidal_premium_package);
            })
        })

        this.internet_hardwares.forEach(hardware => {
            hardware.selector.addEventListener('click', () => {
                this.internet_hardwares.forEach(hardware => hardware.selector.classList.remove("active"))
                hardware.selector.classList.add("active")
                this.count_internet_hardware(hardware)
            })
        })

        this.multirooms.forEach(multiroom => {
            multiroom.sets_selector.forEach(selector => {
                selector.addEventListener('click', () => {
                    multiroom.sets_selector.forEach(sets_selector => sets_selector.classList.remove("active"))
                    selector.classList.add("active")
                    this.show_multiroom_hardware(selector)
                    this.count_multiroom_sets(selector)
                })
            })
            multiroom.btn_selector[0].addEventListener('click', () => {

                document.querySelector('.activate-multiroom__intro').classList.remove("active");
                document.querySelectorAll('.activate-multiroom__sets-area')[0].style.display = 'none';
                this.multiroom_hardware_areas.forEach(hardware => hardware.style.display = "none")

                this.multirooms[0].sets_selector.forEach(selector => {
                    selector.classList.remove("active");
                })

                multiroom.btn_selector[0].style.display = 'none'
                multiroom.btn_selector[1].style.display = 'block'
                this.clear_multiroom()

            })

            multiroom.btn_selector[1].addEventListener('click', () => {

                document.querySelector('.activate-multiroom__intro').classList.add("active");
                document.querySelectorAll('.activate-multiroom__sets-area')[0].style.display = 'flex';
                this.multiroom_hardware_areas[0].style.display = "flex"
                this.multirooms[0].sets_selector[0].classList.add("active");
                multiroom.btn_selector[0].style.display = 'block'
                multiroom.btn_selector[1].style.display = 'none'
                this.mark_default_multiroom_hardware()
                this.count_multiroom(multiroom)

            })

        });

        this.tv_hardwares.forEach(hardware => {
            hardware.selector.addEventListener('click', () => {
                this.tv_hardwares.forEach(hardware => hardware.selector.classList.remove("active"))
                hardware.selector.classList.add("active")
                this.count_tv_hardware(hardware)
            })
        })

        this.multiroom_hardwares.forEach(hardware => {
            hardware.forEach(el => el.selector.addEventListener('click', () => {

                if (el.selector.nextElementSibling) {
                    el.selector.nextElementSibling.classList.remove("active")
                } else if (el.selector.previousElementSibling) {
                    el.selector.previousElementSibling.classList.remove("active")
                }
                
                if (!el.selector.classList.contains("active")) {
                    this.count_multiroom_hardware(el)
                    el.selector.classList.add("active")
                }
            }))
            
        })
    }

    count_activation_charge() {
        this.change_charge_btn.addEventListener('click', () => {
            let change_charge_input = document.querySelector('.change-charge__input');
            if (document.querySelector('.change-charge__input').validity.valid) {
                this.change_charge_alert.style.display = "none"
                this.activation_charge = change_charge_input.valueAsNumber
                this.count_total_one_time_payment()
            } else {
                this.change_charge_alert.style.display = "flex"
            }
        })
    }

    add_extra_hardware() {
        this.add_hardware_btn.addEventListener('click', () => {
            this.hardware_headline.style.display = "block";
            this.extra_hardware.style.display = "block";
            this.count_internet_extra_hardware()
        });
    }

    remove_extra_hardware() {
        this.remove_hardware_btn.addEventListener('click', () => {
            this.hardware_headline.style.display = "none";
            this.extra_hardware.style.display = "none";
            this.count_internet_extra_hardware()
        });
    }

    remove_additional_channels_class() {
        this.tidal_premium_packages.forEach(tidal_premium_package => {
            tidal_premium_package.selector.classList.remove("active");
        })
        this.premium_packages.forEach(premium_package => {
            premium_package.selector.classList.remove("active");
        })
        this.topic_packages.forEach(topic_package => {
            topic_package.selector.classList.remove("active");
        })
    }

    remove_multiroom_class() {
        document.querySelector('.activate-multiroom').classList.remove("active");
        this.multirooms[0].sets_selector.forEach(selector => {
            selector.classList.remove("active");
        })
    }

    show_tv_section() {
        this.tv_extend_options[0].addEventListener('click', () => {
            this.tv_section.style.display = "none";
            this.tv_extend_options.forEach(choose => choose.classList.remove("active"))
            this.tv_extend_options[0].classList.add("active")
            this.tvs.forEach(tv => {
                tv.selector.classList.remove("active")
            })
            this.tv_hardwares.forEach(equipment => {
                equipment.selector.classList.remove("active")
            })
            this.remove_additional_channels_class()
            this.remove_multiroom_class()
            this.clear_tv_section()
        });

        this.tv_extend_options[1].addEventListener('click', () => {
            this.tv_section.style.display = "block";
            this.tv_extend_options.forEach(choose => choose.classList.remove("active"))
            this.tv_extend_options[1].classList.add("active")
            this.mark_default_tv_package()
        });
    }

    // OKRES MIESIĘCZNY

    count_period_months({ time }) {
        this.period_months = parseInt(time)
    }

    // INTERNET 

    count_internet_price({ price }) {
        this.internet_price = parseInt(price)
        this.count_total_monthly_payment()
    }

    mark_default_internet_hardware() {
        if (this.internet_price === 0) {
            this.internet_hardware = parseInt(this.internet_hardwares[0].price);
            this.internet_hardwares[0].mark_default_option(this.internet_hardwares[0].selector);
            this.count_total_internet_hardware_price()
        }
    }

    count_internet_hardware({ price }) {
        this.internet_hardware = parseInt(price)
        this.count_total_internet_hardware_price()
    }

    count_internet_extra_hardware() {
        if (this.internet_extra_hardware === 0) {
            this.internet_extra_hardware = parseInt(this.internet_extra_hardwares[0].price);
            this.internet_extra_hardwares[0].mark_default_option(this.internet_extra_hardwares[0].selector);
        } else {
            this.internet_extra_hardware = 0;
        }
        this.count_total_internet_hardware_price()
    }

    count_total_internet_hardware_price() {
        this.total_internet_hardware_price = this.internet_hardware + this.internet_extra_hardware;
        this.count_total_hardware_price()
    }

    // TELEWIZJA

    count_television({ price }) {
        if (this.period_months === 12) {
            this.tv_price = parseInt(price) - this.internet_monthly_prices[1].prices_12[0]
        } else if (this.period_months === 24) {
            this.tv_price = parseInt(price) - this.internet_monthly_prices[0].prices_24[0]
        }
        this.count_total_monthly_payment()
    }

    mark_default_tv_package() {
        if (this.period_months === 12) {
            this.tv_price = parseInt(this.tvs[0].price) - this.internet_monthly_prices[1].prices_12[0]
        } else if (this.period_months === 24) {
            this.tv_price = parseInt(this.tvs[0].price) - this.internet_monthly_prices[0].prices_24[0]
        }
        this.tvs.forEach(tv => tv.selector.classList.remove("active"))
        this.tvs[0].mark_default_option(this.tvs[0].selector);
        this.mark_default_tv_hardware()
    }

    count_additional_channels({ name, price }) {
        if (!this.additional_channels_names.includes(name)) {
            this.additional_channels_names.push(name);
            this.additional_channels_price += price;
        } else if (this.additional_channels_names.includes(name)) {
            this.additional_channels_names.splice(this.additional_channels_names.indexOf(name), 1)
            this.additional_channels_price -= price;
        }
        this.count_total_monthly_payment()
    }

    clear_additional_channels() {
        this.additional_channels_price = 0;
        this.additional_channels_names = [];
    }

    count_additional_tidal_channels({ name, price }) {
        if (!this.additional_tidal_channels_names.includes(name)) {
            this.additional_tidal_channels_names.push(name);
            this.additional_tidal_channels_price += price;
        } else if (this.additional_tidal_channels_names.includes(name)) {
            this.additional_tidal_channels_names.splice(this.additional_tidal_channels_names.indexOf(name), 1)
            this.additional_tidal_channels_price -= price;
        }
        this.count_total_monthly_payment()
    }

    clear_additional_tidal_channels() {
        this.additional_tidal_channels_price = 0;
        this.additional_tidal_channels_names = [];
    }

    mark_default_tv_hardware() {
        this.tv_hardware_one_time_payment = parseInt(this.tv_hardwares[1].price);
        this.tv_hardwares[1].mark_default_option(this.tv_hardwares[1].selector);
        this.count_total_hardware_price()
    }

    count_tv_hardware({ name, price }) {
        if (name == this.tv_hardwares[0].name) {
            this.tv_hardware_one_time_payment = 0;
            this.tv_hardware_monthly_payment = price;
        } else if (name == this.tv_hardwares[1].name) {
            this.tv_hardware_monthly_payment = 0;
            this.tv_hardware_one_time_payment = price;
        }
        this.count_total_hardware_price()
    }

    count_multiroom({ price, activation_price }) {
        this.multiroom_monthly_price = price;
        this.multiroom_activation_price = activation_price;
        this.count_multiroom_total()
    }

    count_multiroom_sets(sets) {
        this.multiroom_sets = parseInt(sets.childNodes[0].nodeValue);
        this.count_multiroom_default_hardware()
        this.count_multiroom_total()
    }

    show_multiroom_hardware(selector) {
        this.multiroom_hardware_areas.forEach(hardware => hardware.style.display = "none")
        this.multiroom_hardwares.forEach(hardware => hardware.forEach(el => el.selector.classList.remove("active")))
        let i = 0
        while (i < parseInt(selector.childNodes[0].nodeValue)) {
            this.multiroom_hardware_areas[i].style.display = "flex"
            this.multiroom_hardwares[i][0].mark_default_option(this.multiroom_hardwares[i][0].selector)
            i++
        }
    }

    count_multiroom_hardware({ name, price }) {
        
        if (this.multiroom_hardwares_names.filter(i => i === name).length < this.multiroom_sets)  {

            if (name == this.multiroom_hardwares[0][0].name) {

                this.multiroom_hardwares_names.splice(this.multiroom_hardwares_names.indexOf(this.multiroom_hardwares[0][1].name), 1)
                this.multiroom_hardwares_names.push(name)
                this.multiroom_hardware_monthly_payment = this.multiroom_hardwares_names.filter(i => i === this.multiroom_hardwares[0][0].name).length * price;
                this.multiroom_hardware_one_time_payment = this.multiroom_hardwares_names.filter(i => i === this.multiroom_hardwares[0][1].name).length * parseInt(this.multiroom_hardwares[0][1].price);
            
            } else if (name == this.multiroom_hardwares[0][1].name) {

                this.multiroom_hardwares_names.splice(this.multiroom_hardwares_names.indexOf(this.multiroom_hardwares[0][0].name), 1)
                this.multiroom_hardwares_names.push(name)
                this.multiroom_hardware_monthly_payment = this.multiroom_hardwares_names.filter(i => i === this.multiroom_hardwares[0][0].name).length * parseInt(this.multiroom_hardwares[0][0].price);
                this.multiroom_hardware_one_time_payment = this.multiroom_hardwares_names.filter(i => i === this.multiroom_hardwares[0][1].name).length * price;
            
            }
        } 
        
        this.count_total_one_time_payment()
        this.count_total_monthly_payment()
    }

    count_multiroom_default_hardware() {
        this.multiroom_hardware_monthly_payment = parseInt(this.multiroom_hardwares[0][0].price) * this.multiroom_sets
        this.multiroom_hardwares_names = []
        let i = 0
        while (i < this.multiroom_sets) {
            this.multiroom_hardwares_names.push(this.multiroom_hardwares[0][0].name)
            i++
        }
        this.count_total_monthly_payment()
    }

    mark_default_multiroom_hardware() {
        this.multiroom_hardware_monthly_payment = parseInt(this.multiroom_hardwares[0][0].price);
        this.multiroom_hardwares[0][0].mark_default_option(this.multiroom_hardwares[0][0].selector)
        this.multiroom_hardwares_names = []
        let i = 0
        while (i < this.multiroom_sets) {
            this.multiroom_hardwares_names.push(this.multiroom_hardwares[0][0].name)
            i++
        }
        this.count_total_monthly_payment()
    }

    count_multiroom_total() {
        this.multiroom_total_activation_charge = this.multiroom_activation_price * this.multiroom_sets;
        this.multiroom_total_monthly_payment = this.multiroom_monthly_price * this.multiroom_sets;
        this.count_total_monthly_payment()
        this.count_total_one_time_payment()
    }

    clear_multiroom() {
        this.multiroom_monthly_price = 0;
        this.multiroom_activation_price = 0;
        this.multiroom_sets = 1;
        this.multiroom_hardware_monthly_payment = 0;
        this.multiroom_hardware_one_time_payment = 0;
        this.count_multiroom_total()
    }

    // PODLICZANIE FINALNEJ KWOTY

    clear_tv_section() {
        this.tv_price = 0;
        this.tv_hardware_one_time_payment = 0;
        this.tv_hardware_monthly_payment = 0;
        this.clear_additional_channels()
        this.clear_additional_tidal_channels()
        this.clear_multiroom()
        this.count_total_hardware_price()
    }

    count_total_hardware_price() {
        this.total_hardware_price = this.total_internet_hardware_price + this.tv_hardware_one_time_payment;
        this.count_total_one_time_payment()
        this.count_total_monthly_payment()
    }

    count_total_one_time_payment() {
        this.one_time_prices_summary[0].set_price(this.total_internet_hardware_price.toFixed(2))
        this.one_time_prices_summary[1].set_price(this.tv_hardware_one_time_payment.toFixed(2))
        this.one_time_prices_summary[2].set_price(this.multiroom_hardware_one_time_payment.toFixed(2))
        this.one_time_prices_summary[3].set_price(this.multiroom_total_activation_charge.toFixed(2))
        this.one_time_prices_summary[4].set_price(this.activation_charge.toFixed(2))

        this.one_time_prices_summary.forEach(price => {
            price.show_summary_prices()
        })

        this.total_one_time_payment = this.total_hardware_price + this.multiroom_total_activation_charge + this.activation_charge;
        this.total_payments[2].set_price(this.total_one_time_payment.toFixed(2))

        this.show_total_prices()

        this.one_time_prices_summary.forEach((el, i) => {
            if (el.value == 0 && i != 0) {
                el.selector.style.display = 'none';
            } else {
                el.selector.style.display = 'flex'
            }
        })
    }

    count_total_monthly_payment() {

        this.monthly_prices_summary[0].set_price(this.internet_price.toFixed(2))
        this.monthly_prices_summary[1].set_price(this.tv_price.toFixed(2))
        this.monthly_prices_summary[2].set_price(this.additional_channels_price.toFixed(2))
        this.monthly_prices_summary[3].set_price(this.additional_tidal_channels_price.toFixed(2))
        this.monthly_prices_summary[4].set_price(this.multiroom_total_monthly_payment.toFixed(2))
        this.monthly_prices_summary[5].set_price(this.tv_hardware_monthly_payment.toFixed(2))
        this.monthly_prices_summary[6].set_price(this.multiroom_hardware_monthly_payment.toFixed(2))

        this.monthly_prices_summary.forEach(price => {
            price.show_summary_prices()
        })


        const active_period = this.periods.find(period => {
            return period.selector.classList.contains("active")
        })

        this.total_payments[0].selector.style.display = 'flex';
        this.total_payments[1].selector.style.display = 'flex';

        if (active_period == this.periods[0]) {
            if (this.additional_tidal_channels_price == 0) {
                this.total_monthly_payment_24 = this.internet_price + this.tv_price + this.additional_channels_price + this.tv_hardware_monthly_payment + this.multiroom_total_monthly_payment + this.multiroom_hardware_monthly_payment;
                this.total_monthly_payment = this.total_monthly_payment_24;
                this.total_payments[0].selector.style.display = 'none';
            } else {
                this.total_monthly_payment = this.internet_price + this.tv_price + this.additional_channels_price + this.additional_tidal_channels_price + this.tv_hardware_monthly_payment + this.multiroom_total_monthly_payment + this.multiroom_hardware_monthly_payment;
                this.total_monthly_payment_24 = this.internet_price + this.tv_price + this.additional_channels_price + this.tv_hardware_monthly_payment + this.multiroom_total_monthly_payment + this.multiroom_hardware_monthly_payment;
                let sum = 0;
                this.excluding_packages.forEach(package_ => {
                    if (package_[1].selector.classList.contains("active")) {
                        sum += package_[0].price
                    }
                })
                this.total_monthly_payment_24 += sum;
            }

        } else {
            this.total_monthly_payment = this.internet_price + this.tv_price + this.additional_channels_price + this.additional_tidal_channels_price + this.tv_hardware_monthly_payment + this.multiroom_total_monthly_payment + this.multiroom_hardware_monthly_payment;
            this.total_payments[1].selector.style.display = 'none';
        }

        this.total_payments[0].set_price(this.total_monthly_payment.toFixed(2))
        this.total_payments[1].set_price(this.total_monthly_payment_24.toFixed(2))

        this.show_total_prices()

        this.monthly_prices_summary.forEach(el => {
            if (el.value == 0) {
                el.selector.style.display = 'none';
            } else {
                el.selector.style.display = 'flex'
            }
        })

    }

    show_total_prices() {
        this.total_payments.forEach(price => {
            price.show_summary_prices()
        })
    }
}

const count = new Count()