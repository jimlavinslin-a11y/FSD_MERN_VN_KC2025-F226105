import React from 'react'
import departments from '../data/departments.json'
import DepartmentCard from '../components/DepartmentCard'


export default function Home(){
return (
<div>
<section className="p-5 text-white" style={{backgroundColor:'#6b0f0f',borderRadius:8}}>
<div className="container">
<div className="row align-items-center">
<div className="col-md-7">
<h1 className="display-5" style={{color:'white'}}>VelTech MultiTech Engineering College</h1>
<p className="lead">Building Future Innovators</p>
<p>Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College (An Autonomous Institution) was established in the year 1999 under R.S.Trust. Under AICTE & Anna University, the college offers 11 branches with multiple UG & PG programs.</p>
<a className="btn btn-light" href="/departments">Explore Departments</a>
</div>
<div className="col-md-5 d-none d-md-block">
<img 
  src="/veltech.jpg" 
  alt="College Logo" 
  className="veltechcollege"
/>
</div>
</div>
</div>
</section>


<section className="my-5">
<h3>Top Departments</h3>
<div className="row g-3 mt-2">
{departments.slice(0,4).map(d=> (
<div key={d.id} className="col-12 col-md-6 col-lg-3">
<DepartmentCard dept={d} />
</div>
))}
</div>
</section>


<section className="my-5">
<h3>Why VelTech?</h3>
<p>Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College was established in 1999 under R.S.Trust by visionary founders. The college maintains strong academic standards, industry ties, and a culture of innovation across its programs.</p>
</section>


</div>
)
}