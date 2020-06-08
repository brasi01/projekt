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
        Array.from(selector.childNodes)[3].innerHTML = this.price
    }

    mark_default_option(selector) {
        selector.classList.add('active');
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









