# TODO
## Main Page
  1. When the app loads we see a list of all hikes...below we should also **see a list of all comments with type:hike.**
  1. When a hike is touched it will show us the details for that hike. **We should also see any comments for that hike, and an input and button to add a new comment.**
  1. **When the submit comment button is touched...**

## Classes
### Controller Class
#### Methods
  * getAllComments
  * renderCommentList
  * filterCommentsByName
  * addComment
  * SubmitButtonListener
#### Properties
CommentType
CommentArray = []

### CommentModel Class
#### Methods
#### Properties
      name: hikeName,
      date: new Date(),
      content: comment
