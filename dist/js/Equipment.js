class Equipment {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};

const activation_charges = [
    new Equipment('Opłata aktywacyjna', 199)
];

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
}

let hardware_selector = document.querySelectorAll('.hardware__possibility-choose');

const internet_hardwares = [
    new Hardware('Router WiFi Standard', 0, hardware_selector[0]),
    new Hardware('Router WiFi Premium', 99, hardware_selector[1]),
    new Hardware('Router WiFi Premium AC ', 199, hardware_selector[2])
];

internet_hardwares.forEach(hardware => {
    hardware.selector.addEventListener('click', () => {
        internet_hardwares.forEach(hardware => hardware.selector.classList.remove("active"))
        hardware.selector.classList.add("active")
        count.count_internet_hardware(hardware)
    })
})

const internet_extra_hardwares = [
    new Hardware('Router WiFi Standard', 159, hardware_selector[3]),
];

const addHardwareBtn = document.querySelector('.hardware__add-btn');
const removeHardwareBtn = document.querySelector('.remove-hardware-btn');
const extraHardware = document.querySelector('.extra-hardware');
const hardwareHeadline = document.querySelector('.hardware__headline');

addHardwareBtn.addEventListener('click', () => {
    hardwareHeadline.style.display = "block";
    extraHardware.style.display = "block";
    count.count_internet_extra_hardware()
});

removeHardwareBtn.addEventListener('click', () => {
    hardwareHeadline.style.display = "none";
    extraHardware.style.display = "none";
    count.count_internet_extra_hardware()
});


let eq_selector = document.querySelectorAll('.tv-hardware__chooses-possibility');

const equipments_tv = [
    new Hardware('Dzierżawa dekodera', 10, eq_selector[0]),
    new Hardware('Zakup dekodera', 240, eq_selector[1])
];

equipments_tv.forEach(equipment => {
    equipment.selector.addEventListener('click', () => {
        equipments_tv.forEach(equipment => equipment.selector.classList.remove("active"))
        equipment.selector.classList.add("active")
        count.count_tv_hardware(equipment)
    })
})

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

let multiroom_selector = document.querySelector('.activate-multiroom__intro-area');
let multiroom_btn_selectors = [...document.querySelectorAll('.activate-multiroom__btn-area button')];

let multiroom_sets_selectors = [...document.querySelectorAll('.multiroom-sets__choose')];

const remove_multiroom_class = () => {
    document.querySelector('.activate-multiroom').classList.remove("active");
    multiroom_sets_selectors.forEach(selector => {
        selector.classList.remove("active");
    })
}

const multirooms = [
    new Multiroom('Multiroom', 15, 59, [1, 2, 3, 4, 5], multiroom_sets_selectors, multiroom_selector, multiroom_btn_selectors)
];

multirooms.forEach(multiroom => {
    multiroom.sets_selector.forEach(selector => {
        selector.addEventListener('click', () => {
            multiroom.sets_selector.forEach(sets_selector => sets_selector.classList.remove("active"))
            selector.classList.add("active")
            count.count_multiroom_sets(selector)
        })
    })
    multiroom.btn_selector[0].addEventListener('click', () => {
        document.querySelector('.activate-multiroom').classList.remove("active");
        document.querySelectorAll('.activate-multiroom__tile-sets')[0].style.display = 'none';
        multiroom_sets_selectors.forEach(selector => {
            selector.classList.remove("active");
        })
        count.clear_multiroom()
    })
    multiroom.btn_selector[1].addEventListener('click', () => {
        document.querySelector('.activate-multiroom').classList.add("active");
        document.querySelectorAll('.activate-multiroom__tile-sets')[0].style.display = 'flex';
        multiroom_sets_selectors[0].classList.add("active");
        count.count_multiroom(multiroom)
    })
});
