import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Users(){

  const [users,setUsers] = useState([])
  const [search,setSearch] = useState("")
  const [apiIsLoading,setApiIsLoading] = useState(true)

  useEffect(()=>{

    const fetchUsers = async ()=>{

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )

      const data = await response.json()

      setUsers(data)

      setApiIsLoading(false)

    }

    fetchUsers()

  },[])

  if(apiIsLoading){
    return <p>Loading users...</p>
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return(

    <div>

      <h1>User Dashboard</h1>

      <input
        placeholder="Search users"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      {filteredUsers.map(user=>(
        <div key={user.id}>

          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.company.name}</p>

          <Link to={`/users/${user.id}`}>
            <button>View Posts</button>
          </Link>

        </div>
      ))}

    </div>

  )

}