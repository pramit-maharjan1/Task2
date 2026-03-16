import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Posts(){

  const { id } = useParams()

  const [posts,setPosts] = useState([])
  const [apiIsLoading,setApiIsLoading] = useState(true)

  useEffect(()=>{

    const fetchPosts = async ()=>{

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      )

      const data = await response.json()

      setPosts(data)

      setApiIsLoading(false)

    }

    fetchPosts()

  },[id])

  if(apiIsLoading){
    return <p>Loading posts...</p>
  }

  return(

    <div>

      <h1>User Posts</h1>

      {posts.map(post=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

    </div>

  )

}