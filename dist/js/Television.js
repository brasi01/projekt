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
        Array.from(selector.childNodes)[3].innerHTML = this.chanels_number
        Array.from(selector.childNodes)[5].innerHTML = this.chanels_hd_number
        Array.from(selector.childNodes)[7].innerHTML = this.get_price()
    }

    mark_default_option(selector) {
        selector.classList.add('active');
    }

    get_price() {
        return `Cena: ${this.price} zł`
    }
}

let options_selector = document.querySelectorAll('.tv-package__offer-content');
let tv_selector_btn = document.querySelectorAll('.tv-package__offer-tile button')

const tvs = [
    new Television('Mikro HD', '76', '38', 75, options_selector[0], tv_selector_btn[0]),
    new Television('Mini HD', '137', '65', 90, options_selector[1], tv_selector_btn[1]),
    new Television('Wielotematyczny HD', '192', '96', 105, options_selector[2], tv_selector_btn[2]),
    new Television('Wielotematyczny Super HD', '206', '109', 119, options_selector[3], tv_selector_btn[3]),
    new Television('Wielotematyczny Mega HD', '218', '118', 139, options_selector[4], tv_selector_btn[4])
];

tvs.forEach(tv => {
    tv.selector_btn.addEventListener('click', () => {
        tvs.forEach(tv => tv.selector.classList.remove("active"))
        tv.selector.classList.add("active")
        count.count_television(tv)
    })
})

// Pokaż sekcje

const tv_extend_chooses = document.querySelectorAll('.tv-extend__possibility');
const tv_section = document.querySelector('.tv')

tv_extend_chooses[0].addEventListener('click', () => {
    tv_section.style.display = "none";
    tv_extend_chooses.forEach(choose => choose.classList.remove("active"))
    tv_extend_chooses[0].classList.add("active")
    tvs.forEach(tv => {
        tv.selector.classList.remove("active")
    })
    equipments_tv.forEach(equipment => {
        equipment.selector.classList.remove("active")
    })
    remove_additional_channels_class()
    remove_multiroom_class()
    count.clear_tv_section()
});

tv_extend_chooses[1].addEventListener('click', () => {
    tv_section.style.display = "block";
    tv_extend_chooses.forEach(choose => choose.classList.remove("active"))
    tv_extend_chooses[1].classList.add("active")
    count.mark_default_tv_package()
});

// KANAŁY
//
// tvPackage1.addChanels('TVP1 HD', 'TVP2 HD', 'TVP3', 'TVN HD', 'POLSAT HD', 'TVN7 HD');