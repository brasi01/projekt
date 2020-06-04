class Equipment {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }   
}

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

    markDefaultOption(selector) {
        selector.classList.add('active');
    }
}

let eq_selector = document.querySelectorAll('.eq-options__chooses-possibility');

const equipments_tv = [
    new Hardware('Dzierżawa dekodera', 10, eq_selector[0]),
    new Hardware('Zakup dekodera', 240, eq_selector[1])
];

const equipments_internet = [
    new Hardware('Router WiFi Standard', 0, eq_selector[2]),
    new Hardware('Router WiFi Premium', 99, eq_selector[3]),
    new Hardware('Router WiFi Premium AC ', 199, eq_selector[4])
];

equipments_tv.forEach(equipment => {
    equipment.selector.addEventListener('click', () => {
        equipments_tv.forEach(equipment => equipment.selector.classList.remove("active"))
        equipment.selector.classList.add("active")

        count.countEquipmentTV(equipment)
    })
})

equipments_internet.forEach(equipment => {
    equipment.selector.addEventListener('click', () => {
        equipments_internet.forEach(equipment => equipment.selector.classList.remove("active"))
        equipment.selector.classList.add("active")

        count.countEquipmentInternet(equipment)
    })
})








