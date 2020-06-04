class Internet {
    constructor(name, speedSent, speedDown, price, selector) {
        this.name = name;
        this.speedSent = speedSent;
        this.speedDown = speedDown;
        this.price = price;
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name;
        Array.from(selector.childNodes)[3].innerHTML = this.speedDown;
        Array.from(selector.childNodes)[5].innerHTML = this.speedSent;
        Array.from(selector.childNodes)[7].innerHTML = this.price;

        this.changePrices_html = () => {
            Array.from(selector.childNodes)[7].innerHTML = this.price;
        };
    }

    setPrice(value) {
        this.price = value;
    }

    markDefaultOption(selector) {
        selector.classList.add('active');
    }
}
let internet_selector = document.querySelectorAll('.web_extention__offer-content');

const internets = [
    new Internet('100 MEGA', '10 Mb/s', '5 Mb/s', '59 zł', internet_selector[0]),
    new Internet('150 MEGA', '15 Mb/s', '5 Mb/s', '65 zł', internet_selector[1]),
    new Internet('200 MEGA', '20 Mb/s', '5 Mb/s', '75 zł', internet_selector[2]),
    new Internet('300 MEGA', '30 Mb/s', '5 Mb/s', '85 zł', internet_selector[3]),
    new Internet('500 MEGA', '40 Mb/s', '5 Mb/s', '110 zł', internet_selector[4])
];

const prices_24 = [59, 65, 75, 85, 110];
const prices_12 = [69, 75, 85, 95, 120];

internets.forEach(internet => {
    internet.selector.addEventListener('click', () => {
        internets.forEach(internet => internet.selector.classList.remove("active"))
        internet.selector.classList.add("active")
        count.countInternet(internet)
    })
})





