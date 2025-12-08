import React, {useEffect, useState} from 'react'
import DepartmentCard from '../components/DepartmentCard'


export default function Departments(){
const [depts, setDepts] = useState([])


useEffect(()=>{
fetch('/src/data/departments.json')
.then(res => res.json())
.then(data => setDepts(data))
.catch(err => console.error(err))
},[])


return (
<div>
<h2>Departments</h2>
<div className="row g-3 mt-2">
{depts.map(d=> (
<div key={d.id} className="col-12 col-md-6 col-lg-4">
<DepartmentCard dept={d} />
</div>
))}
</div>
</div>
)
}