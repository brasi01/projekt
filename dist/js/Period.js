class Period {
    constructor(name, time, selector) {
        this.name = name;
        this.time = time;
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name;
    }
}

let period_selector = document.querySelectorAll('.period-choice__option');

const periods = [
    new Period('24 miesiące', 24, period_selector[0]),
    new Period('12 miesiące', 12, period_selector[1]),
    new Period('Czas nieokreślony', 1, period_selector[2])
];

periods.forEach(period => {
    period.selector.addEventListener('click', () => {
        periods.forEach(period => period.selector.classList.remove("active"))
        period.selector.classList.add("active")
        count.countPeriod(period)

        if (period.time == 24) {
            internets.forEach((internet, i) => {
                internet.setPrice(prices_24[i])
                internet.changePrices_html()
            })
        } else if (period.time == 12) {
            internets.forEach((internet, i) => {
                internet.setPrice(prices_12[i])
                internet.changePrices_html()
            })
        }
    })
})


