const assignments = [
    {
        label: "Week01 notes",
        url: "week01/index.html" 
    },
    {
        label: "Week01 story editor",
        url: "week01/story.editor.html" 
    },
    {
        label: "Week02 notes",
        url: "week02/index.html" 
    },
    {
        label: "Week02",
        url: "#" 
    },
    {
        label: "Week03 notes",
        url: "week03/index.html" 
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
const listElement = document.getElementById("assignments")
assignments.forEach(assignment=>{
    const newAssignmentElement = document.createElement("li")
    const newLinkElement = document.createElement("a")
    newLinkElement.setAttribute("href", assignment.url)
    newLinkElement.innerText = assignment.label
    newAssignmentElement.appendChild(newLinkElement)
    listElement.appendChild(newAssignmentElement)
})