class Equipment {
    constructor(name, price, selector){
        this.name = name;
        this.price = price;
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.price
    }
}

let eq_selector = document.querySelectorAll('.eq-options__chooses-possibility');

const equipments_tv = [
    new Equipment('Dzierżawa dekodera', '10', eq_selector[0]),
    new Equipment('Zakup dekodera', '240', eq_selector[1])
];

const equipments_internet = [
    new Equipment('Router WiFi Standard', '0', eq_selector[2]),
    new Equipment('Router WiFi Premium', '99', eq_selector[3]),
    new Equipment('Router WiFi Premium AC ', '199', eq_selector[4])
];

equipments_tv.forEach(equipment => {
    equipment.selector.addEventListener('click', () => {
        equipments_tv.forEach(equipment => equipment.selector.removeAttribute("style"))
        equipment.selector.style.border = "1px solid red"

        count.countEquipmentTV(equipment)
    })
})

equipments_internet.forEach(equipment => {
    equipment.selector.addEventListener('click', () => {
        equipments_internet.forEach(equipment => equipment.selector.removeAttribute("style"))
        equipment.selector.style.border = "1px solid red"

        count.countEquipmentInternet(equipment)
    })
})
