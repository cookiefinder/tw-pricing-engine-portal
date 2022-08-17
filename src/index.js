const items = document.querySelectorAll('li a')
const sections = document.querySelectorAll('section')
const popup = document.querySelector('.popup')
const title = document.querySelector('#title')
const startDate = document.querySelector('#start-date')
const endDate = document.querySelector('#end-date')
const active = document.querySelector('#active')
const description = document.querySelector('#description')
const vip = document.querySelector('#vip')
const type = document.querySelector('#type')
const additions = document.querySelectorAll('.addition')
const filterType = document.querySelector('#filter-type')
const xhr = new XMLHttpRequest();
const promotionList = document.querySelector('#promotion-list')
const page = document.querySelector('#page')

items.forEach((item) => {
    item.addEventListener('click', setActive)
})

function setActive() {
    items.forEach(item => {
        item.classList.remove('active')
    })
    this.classList.add('active')

    sections.forEach(section => {
        section.classList.add('hidden')
    })
    popup.classList.add('hidden')
    if (this.id === 'home') {
        sections[0].classList.remove('hidden')
    }
    if (this.id === 'list') {
        sections[1].classList.remove('hidden')
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const res = xhr.response;
                const data = JSON.parse(res)
                page.textContent = data.pageIndex + 1;
                let elements = promotionList.querySelectorAll('tr');
                elements.forEach(element => element.remove())
                for (let i = 0; i < data.data.length; i++) {
                    const tr = document.createElement("tr")
                    let id = data.data[i].id;
                    let name = data.data[i].name;
                    let startTime = data.data[i].condition.conditions[0].startTime;
                    let endTime = data.data[i].condition.conditions[0].endTime;
                    let type = data.data[i].type;
                    let description = data.data[i].description;
                    [id, name, startTime, endTime, type, description].forEach((value, index) => {
                        let text = document.createTextNode(value);
                        let td = document.createElement("td");
                        if (index === 0) {
                            tr.addEventListener('click', function () {
                                getPromotion(value)
                            })
                        }
                        td.appendChild(text)
                        tr.appendChild(td)
                    })
                    promotionList.appendChild(tr)
                }
            }
        };
        xhr.open("GET", "http://localhost:8080/rules?size=5", true);
        xhr.send();
    }
}

function getPromotion(id) {
    sections.forEach(section => {
        section.classList.add('hidden')
    })
    popup.classList.remove('hidden')
    if (id !== undefined) {
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const res = xhr.response;
                const data = JSON.parse(res)
                console.log(data)
                title.value = data.name
                startDate.value = data.condition.conditions[0].startTime;
                endDate.value = data.condition.conditions[0].endTime;
                active.value = data.active ? "1" : "0"
                description.value = data.description
                vip.value = data.condition.conditions[1].isVip ? "1" : "0";
                type.value = data.calculator.type
                if (data.calculator.type === 'DISCOUNT') {
                    additions[0].value = data.calculator.discount
                } else {
                    additions[1].value = data.calculator.amountLimit
                    additions[2].value = data.calculator.freeAmount
                }
            }
        };
        xhr.open("GET", "http://localhost:8080/rules/" + id, true);
        xhr.send();
    }
}

function savePromotion() {
    // TODO save promotion
    console.log(title.value)
    console.log(startDate.value)
    console.log(endDate.value)
    console.log(active.value)
    console.log(description.value)
    console.log(vip.value)
    console.log(type.value)
    console.log(additions[0].value)
    console.log(additions[1].value)
    console.log(additions[2].value)
}

function selectType() {
    additions.forEach(section => {
        section.classList.add('hidden')
    })
    if ('DISCOUNT' === type.value) {
        additions[0].classList.remove('hidden')
    }
    if ('REDUCTION' === type.value) {
        additions[1].classList.remove('hidden')
        additions[2].classList.remove('hidden')
    }
}

function cancel() {
    location.href = "index.html"
}

function queryPromotionList() {
    console.log(filterType.value)
}

function pervPage() {
    console.log("perv")
}

function nextPage() {
    console.log("next")
}