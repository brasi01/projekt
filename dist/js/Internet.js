class Internet {
    constructor(name, speed_down, speed_sent,  price, selector, selector_btn) {
        this.name = name;
        this.speed_down = speed_down;
        this.speed_sent = speed_sent;
        this.price = price;
        this.selector = selector;
        this.selector_btn = selector_btn;

        Array.from(selector.childNodes)[1].innerHTML = this.name;
        Array.from(selector.childNodes)[3].innerHTML = this.speed_down;
        Array.from(selector.childNodes)[5].innerHTML = this.speed_sent;
        Array.from(selector.childNodes)[7].innerHTML = this.price;

        this.change_prices = () => {
            Array.from(selector.childNodes)[7].innerHTML = this.price;
        };
    }

    set_price(value) {
        this.price = value;
    }
}

let internet_selector = document.querySelectorAll('.web_package__offer-content');
let internet_selector_btn = document.querySelectorAll('.web_package__offer-tile button')

const internets = [
    new Internet('100 MEGA', '10 Mb/s', '5 Mb/s', '59 zł', internet_selector[0], internet_selector_btn[0]),
    new Internet('150 MEGA', '15 Mb/s', '5 Mb/s', '65 zł', internet_selector[1], internet_selector_btn[1]),
    new Internet('200 MEGA', '20 Mb/s', '5 Mb/s', '75 zł', internet_selector[2], internet_selector_btn[2]),
    new Internet('300 MEGA', '30 Mb/s', '5 Mb/s', '85 zł', internet_selector[3], internet_selector_btn[3]),
    new Internet('500 MEGA', '40 Mb/s', '5 Mb/s', '110 zł', internet_selector[4], internet_selector_btn[4])
];

const prices_24 = [59, 65, 75, 85, 110];
const prices_12 = [69, 75, 85, 95, 120];

internets.forEach(internet => {
    internet.selector_btn.addEventListener('click', () => {
        internets.forEach(internet => internet.selector.classList.remove("active"))
        internet.selector.classList.add("active")
        //
        document.querySelector('.web-hardware').style.display = 'flex';
        document.querySelector('.tv-extend').style.display = 'flex';
        document.querySelector('.price-summary').style.display = 'flex';

        //^^
        count.mark_default_internet_hardware()
        count.count_internet_price(internet)
    })
})








