function load(name){ //retrieves items in the localStorage
    console.log("retrive records");
    let recordsJSON = window.localStorage.getItem(name); //searches for the key in localStorage
    let records =JSON.parse(recordsJSON)
    console.log(records)
    return records;
}

function store(name, data){ //stores items in the localStorage
        window.localStorage.setItem(name,JSON.stringify(data));  
    //converting object to string
}



function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload = function(){ //ensures the page is loaded before functions are executed.
    // document.getElementById("carForm").onsubmit = store
    // document.getElementById("clearButton").onclick = clearStorage
    // document.getElementById("removeButton").onclick = removeItem
    // document.getElementById("retrieveButton").onclick = retrieveRecords
}