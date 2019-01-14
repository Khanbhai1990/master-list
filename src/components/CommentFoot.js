import React from 'react'

class CommentFoot extends React.Component {
   constructor(){
       super()
        this.state = {
            greeting: "hello"
        }
   }
   render(){
    return(
        <div>
        {this.state.greeting}
        
        </div>
    )
   }

}

export default CommentFoot