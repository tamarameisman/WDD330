function getData(url){
    fetch(url)
    .then(response => response.json())
    
    .then(data=> {
        console.log(data)
        let list = document.getElementById("people")
        list.innerHTML = ""
        data.results.forEach(person => {
            let personRow = document.createElement("div")
            let personName = document.createElement("div")
            personName.className = "personName"
            personRow.className = "personRow"
            personName.innerHTML = person.name
            personRow.appendChild(personName)
            list.appendChild(personRow)
            personRow.dataset.person = JSON.stringify(person)
            renderRow(personRow)
            personRow.addEventListener("click", element=>{
                expandRow(element)
            })
            personRow.addEventListener("touchEnd", element=>{
                expandRow(element)
                
            });
            
        })
        let nextBtn = document.getElementById("nextBtn")
        nextBtn.replaceWith(nextBtn.cloneNode(true))
        nextBtn = document.getElementById("nextBtn")

        nextBtn.addEventListener("click", element => {
            list.innerHTML="<h1>loading</h1>"
            getData(data.next)
        })
        let prevBtn = document.getElementById("prevBtn")
        prevBtn.replaceWith(prevBtn.cloneNode(true))
        prevBtn = document.getElementById("prevBtn")


        prevBtn.addEventListener("click", element => {
            list.innerHTML="<h1>loading</h1>"
            getData(data.previous)
        })
    })
}
getData("https://swapi.dev/api/people")
function renderRow(element){
    let detail = document.createElement("div")
    console.log(element.dataset.person)
    data = JSON.parse(element.dataset.person)
    detail.className = "detailRow hidden" 
    
    detail.innerHTML = ``
    Object.entries(data).forEach(entry => {
        const [key, value] = entry;
        let detailRow = document.createElement("div")
        detailRow.className = "personDetail"
        detailRow.innerHTML = `<span class="title">${key}</span>:
        <span class="value">${value}</span>`
        detail.appendChild(detailRow)
    });
    element.appendChild(detail)
}
function expandRow(element){
    let person = element.currentTarget
    let personDetail = person.querySelector(".detailRow")
    personDetail.classList.toggle("hidden")
}