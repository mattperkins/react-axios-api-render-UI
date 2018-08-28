import * as React from 'react'
import axios from 'axios'

class App extends React.Component{
 state = {
  posts: []
 }
 componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
   this.setState({
    posts: res.data.slice(0,10)
   })
  })
 }
 render(){
  const {posts} = this.state
  const postList = posts.length ? (
   posts.map(post => {
    return (
     <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
     </div>
    )
   })
  ) : (
   <p>Loading data...</p>
  )
   return(
    <div>{postList}</div>
)
}
}

export default App