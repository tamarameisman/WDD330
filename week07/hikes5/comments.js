export default class Comments {
    constructor(elementId){
        this.parentElement = document.getElementById(elementId);
        this.commentType = "comment"
        // this is for showing something first time

//null coellese meaning if load returns null use emtey array
        this.commentArray = load("comments") ?? []
        
    }
    getAllComments() {
        return this.commentArray
    }
    showCommentsList(filterName) {
        this.parentElement.innerHTML = ""
        let showlist = []
        if(filterName == undefined){
            showlist = this.commentArray
        }else{
            showlist = this.filterCommentsByName(filterName)
        }
        showlist.forEach(comment =>{
            this.parentElement.appendChild(this.renderOneComment(comment))
        })
        return
    }
    renderOneComment(comment){
        const item = document.createElement('li');
        item.classList.add('light');
        // setting this to make getting the details for a specific comment easier later.
        item.setAttribute('data-name', comment.name);
        item.innerHTML = ` <h2>${comment.name}</h2>
        <div>
            <h3>${comment.date}</h3>
            <p>${comment.comment}</p>
        </div>`;
    
        return item;
    }
    //Filters comments to a hike name
    filterCommentsByName(filterName) {
        return this.commentArray.filter(comment => comment.name == filterName)
    }

    addComment(hikeName, typeName, comment) {
        this.commentArray.push(
            {
                "name":hikeName,
                "date":new Date().toDateString(),
                "comment":comment,
                "type":typeName
            }
        
        );
        store("comments", this.commentArray)
    }
    SubmitButtonListener() {
        return
    }
}
