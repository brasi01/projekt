class Extention {
    constructor(name, price, selector){
        this.name = name;
        this.price = price;
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.price
    }
}

let extention_selector = document.querySelectorAll('.package-extension__offer-tile');

const topic_packages = [
    new Extention('DISCOVERY HD', '6.99 zł', extention_selector[0]),
    new Extention('Sport HD', '7.99 zł', extention_selector[1]),
    new Extention('Luz HD', '7.99 zł', extention_selector[2]),
    new Extention('Nauka HD', '6.99 zł', extention_selector[3]),
    new Extention('Filmy HD', '9.99 zł', extention_selector[4]),
    new Extention('Muzyka HD', '4.99 zł', extention_selector[5]),
    new Extention('Bajki HD', '6.99 zł', extention_selector[6]),
    new Extention('Seriale HD', '9.99 zł', extention_selector[7]),
    new Extention('Świat HD', '1.99 zł', extention_selector[8])
];

const premium_packages = [
    new Extention('Pakiet ELEVEN HD', '1 zł', extention_selector[9]),
    new Extention('Pakiet HBO HD +OD +GO', '36.99 zł', extention_selector[10]),
    new Extention('Pakiet HBO HD', '29.99 zł', extention_selector[11]),
    new Extention('Pakiet CANAL+ SELECT HD', '62.99 zł', extention_selector[12]),
    new Extention('Pakiet CANAL+ PRESTIGE HD', '68.99 zł', extention_selector[13]),
    new Extention('Pakiet CINEMAX HD', '14.99 zł', extention_selector[14]),
    new Extention('TV Republika HD', '4.99 zł', extention_selector[15])
];

topic_packages.forEach(package => {
    package.selector.addEventListener('click', () => {
        package.selector.classList.toggle("active");
        count.countExtention(package);
    })
})

premium_packages.forEach(package => {
    package.selector.addEventListener('click', () => {
        package.selector.classList.toggle("active");
        count.countExtention(package);
    })
})