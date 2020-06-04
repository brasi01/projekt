class Television {
    constructor(name, chanelsNumber, chanelsHDNumber, price, selector) {
        this.name = name;
        this.chanelsNumber = chanelsNumber;
        this.chanelsHDNumber = chanelsHDNumber;
        this.price = price;
        this.selector = selector;
        // this.chanels = [];
        
        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.chanelsNumber
        Array.from(selector.childNodes)[5].innerHTML = this.chanelsHDNumber
        Array.from(selector.childNodes)[7].innerHTML = this.price
    }
}

let options_selector = document.querySelectorAll('.tv-package__offer-content');

const tvs = [
    new Television('Mikro HD', '76', '38', '75 zł', options_selector[0]),
    new Television('Mini HD', '137', '65', '90 zł',options_selector[1]),
    new Television('Wielotematyczny HD', '192', '96', '105 zł',options_selector[2]),
    new Television('Wielotematyczny Super HD', '206', '109', '119 zł',options_selector[3]),
    new Television('Wielotematyczny Mega HD', '218', '118', '139 zł',options_selector[4])
];

tvs.forEach(tvPackage => {
    tvPackage.selector.addEventListener('click', () => {
        tvs.forEach(tvPackage => tvPackage.selector.classList.remove("active"))
        tvPackage.selector.classList.add("active")
        count.markDefaultOptions(tvPackage)
        count.countTelevision(tvPackage)
    })
})

// KANAŁY
//
// tvPackage1.addChanels('TVP1 HD', 'TVP2 HD', 'TVP3', 'TVN HD', 'POLSAT HD', 'TVN7 HD');