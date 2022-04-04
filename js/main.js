const assignments = [
    {
        label: "Week01 notes",
        url: "week01/index.html" ,
        child:[
            {
                label: "Story Editor",
                url: "week01/story.editor.html" 
            },
        ]
    },
    {
        label: "Week02 notes",
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
        ]
    },
    {
        label: "Week03 notes",
        url: "week03/index.html" ,
        child:[
            {
                label: "Ninja Project",
                url: "week03/ninja_project/index.html" 
            },
            {
                label: "Drum Kit",
                url: "week03/drum_kit/index.html" 
            },
            {
                label: "Clock",
                url: "week03/clock/index.html" 
            },
            {
                label: "Array Cardio",
                url: "week03/array_cardio/index.html" 
            },
            
        ]
    },
    
    {
        label: "Week04 notes",
        url: "week04/index.html" ,
        child:[
            {
                label: "Hero Form",
                url: "week04/hero.html" 
            },
            {
                label: "Model-View-Controller(MVC)...List",
                url: "week04/list.html" 
            },
            {
                label: "EventListener (blur and focus)..Search",
                url: "week04/search.html" 
            },
            {
                label: "Prototypal Inheritance...turtle",
                url: "week04/turtle.html" 
            },
            
        ]
    },
    {
        label: "Week05 Notes",
        url: "week05/falls_orig/notes.html" ,
        child:[
            {
                label: "CSS Variables",
                url: "week05/03 - CSS Variables/index.html" 
            },
            {
                label: "Flex Panel",
                url: "week05/05 - Flex Panel Gallery/index.html" 
            },
        ]
    },             
    {
        label: "Week06 Midterm",
        url: "todolist/index.html" ,
        
    },             
    
    
    {
        label: "Week07 notes",
        url: "week07/index.html" ,
        child:[
            {
                label: "Callbacks",
                url: "week07/notes/callback.html" 
            },
            {
                label: "Fetch",
                url: "week07/fetch/fetch.html" 
            },
            {
                label: "Team Activity",
                url: "week07/hikes5/hiking-complete.html" 
            },
        ]
    },

    {
        label: "Week08 Notes",
        url: "week08/notes.html" ,
        child:[
            {
                label: "Team Activity",
                url: "week08/index.html" 
            },
            {
                label: "Transforms, canvas, svg practice",
                url: "week08/transform.html" 
            },
        ]
    },     
    {
        label: "Week09 Notes",
        url: "week09/note.html" ,
        child:[
            {
                label: "Team Activity",
                url: "week03/drum_kit" 
            },
            {
                label: "Animation in JS",
                url: "week09/animation.html" 
            },
            {
                label: "Web worker api",
                url: "week09/factors.html" 
            },
            {
                label: "Websocket, Audio, Video, Draw in Canvas",
                url: "week09/websocket.html" 
            },
            {
                label: "Block 2 Challenge Proposals",
                url: "week09/parcel/build/siteplan.html" 
            },
        ]
    },  
    {
        label: "Week10 Notes",
        url: "week10/notes.html" ,
        child:[
            {
                label: "Team Activity",
                url: "tba" 
            },
            {
                label: "",
                url: "tba" 
            },
        ]
    },     
    {
        label: "Final Challenge",
        
        child:[
            {
                label: "Movies Together",
                url: "MyMovies/dist/" 
            },
        ]
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
