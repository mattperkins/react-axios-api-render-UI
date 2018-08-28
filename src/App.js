import * as React from 'react'
import axios from 'axios'

class App extends React.Component{
 state = {
  posts: []
 }
 componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
   console.log(res)
  })
 }
 render(){
   return(
    <p>App</p>
)
}
}

export default App