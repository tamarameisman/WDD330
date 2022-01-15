const assignments = [
    {
        label: "Week 01 notes",
        url: "week01/index.html" ,
        child:[
            {
                label: "Story Editor",
                url: "week01/story.editor.html" 
            },
        ]
    },
    {
        label: "Week 02 notes",
        url: "week02/week2_notes.html" ,
        child:[
            {
                label: "Ninja Project",
                url: "week02/ninja_project/index.html" 
            },
            
            {
                label: "Chessboard",
                url: "week02/chessboard.html" 
            },
            {
                label: "FuzzBuzz",
                url: "week02/fuzzbuzz.html" 
            },
            {
                label: "Looping a Tringle",
                url: "week02/looping_a_tringle.html" 
            },
            {
                label: "Recursion",
                url: "week02/recursion.html" 
            },
            {
                label: "Minimum",
                url: "week02/minimum.html" 
            },
            {
                label: "Bean Counting",
                url: "week02/bean_counting.html" 
            },
        ]},
    {
        label: "Week 03 notes",
        url: "week03/index.html" ,
        child:[

        ]
    },
    {
        label: "Week03 ",
        url: "#" 
    },
    {
        label: "Week04 notes",
        url: "week04/index.html" 
    },
    {
        label: "Week04",
        url: "#" 
    },

    
]
const createList = function(items, parentULElelement){
    items.forEach(item=>{
        // create LI and A element
        const newAssignmentElement = document.createElement("li")
        const newLinkElement = document.createElement("a")
        // build A elements hyper link and text
        newLinkElement.setAttribute("href", item.url)
        newLinkElement.innerText = item.label
        // add a element to list
        newAssignmentElement.appendChild(newLinkElement)
        // add list element ul parent
        parentULElelement.appendChild(newAssignmentElement)
        if(item.child != undefined && item.child.length > 0){
            // create ul element for  child list
            const childListUlElement = document.createElement("ul");
            // add parent ul list to list item
            newAssignmentElement.appendChild(childListUlElement);
            // create child list item and add to new sublist
            createList(item.child, childListUlElement);
        }
    });
}
const listElement = document.getElementById("assignments")
createList(assignments, listElement);
