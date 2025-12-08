import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'


export default function DepartmentDetails(){
const { id } = useParams()
const [dept, setDept] = useState(null)


useEffect(()=>{
fetch('/src/data/departments.json')
.then(res=>res.json())
.then(data=>{
const found = data.find(x=> x.id === id)
setDept(found)
})
.catch(err=>console.error(err))
},[id])


if(!dept) return <div>Loading...</div>


return (
<div>
<Link to="/departments" className="btn btn-link">&larr; Back to Departments</Link>
<h2>{dept.name}</h2>
<p>{dept.fullDescription}</p>


<h5>Courses Offered</h5>
<ul>
{dept.courses.map((c,idx)=> <li key={idx}>{c}</li>)}
</ul>


<h5>Faculty</h5>
<ul>
{dept.faculty.map((f,idx)=> <li key={idx}>{f}</li>)}
</ul>


<h5>Labs & Facilities</h5>
<ul>
{dept.labs.map((l,idx)=> <li key={idx}>{l}</li>)}
</ul>
</div>
)
}