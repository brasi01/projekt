class Extention {
    constructor(name, price, selector) {
        this.name = name;
        this.price = price;
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.get_price()
    }

    get_price() {
        return `Cena: ${this.price} zł`
    }
}

let extention_selector = document.querySelectorAll('.additional-package__offer-tile');

const topic_packages = [
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

topic_packages.forEach(package => {
    package.selector.addEventListener('click', () => {
        package.selector.classList.toggle("active");
        count.count_additional_channels(package);
    })
})

const premium_packages = [
    new Extention('Pakiet ELEVEN HD', 1, extention_selector[9]),
    new Extention('Pakiet HBO HD +OD +GO', 36.99, extention_selector[10]),
    new Extention('Pakiet HBO HD', 29.99, extention_selector[11]),
    new Extention('Pakiet CANAL+ SELECT HD', 62.99, extention_selector[12]),
    new Extention('Pakiet CANAL+ PRESTIGE HD', 68.99, extention_selector[13]),
    new Extention('Pakiet CINEMAX HD', 14.99, extention_selector[14]),
    new Extention('TV Republika HD', 4.99, extention_selector[15])
];

premium_packages.forEach(package => {
    package.selector.addEventListener('click', () => {
        package.selector.classList.toggle("active");
        count.count_additional_channels(package);
    })
})

const tidal_premium_packages = [
    new Extention('Pakiet CANAL+ SELECT', 44.90, extention_selector[16]),
    new Extention('Pakiet CANAL+ PRESTIGE', 44.90, extention_selector[17]),
    new Extention('Pakiet HBO HD', 24.90, extention_selector[18]),
    new Extention('Pakiet HBO HD +OD +GO', 29.90, extention_selector[19])
];

tidal_premium_packages.forEach(package => {
    package.selector.addEventListener('click', () => {
        package.selector.classList.toggle("active");
        count.count_additional_tidal_channels(package);
    })
})

const remove_additional_channels_class = () => {
    tidal_premium_packages.forEach(package => {
        package.selector.classList.remove("active");
    })
    premium_packages.forEach(package => {
        package.selector.classList.remove("active");
    })
    topic_packages.forEach(package => {
        package.selector.classList.remove("active");
    })
}