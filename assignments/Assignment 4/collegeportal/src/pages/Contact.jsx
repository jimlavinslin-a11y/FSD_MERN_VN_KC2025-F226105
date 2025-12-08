import React, {useState, useEffect} from 'react'


export default function Contact(){
const [form, setForm] = useState({name:'', email:'', department:'', message:''})
const [submitted, setSubmitted] = useState(null)
const [departments, setDepartments] = useState([])


useEffect(()=>{
fetch('/src/data/departments.json')
.then(res=>res.json())
.then(data=> setDepartments(data))
},[])


function handleChange(e){
setForm(prev=> ({...prev, [e.target.name]: e.target.value}))
}


function handleSubmit(e){
e.preventDefault()
setSubmitted(form)
setForm({name:'', email:'', department:'', message:''})
}


return (
<div>
<h2>Contact Us</h2>
<div className="row">
<div className="col-md-6">
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label className="form-label">Name</label>
<input name="name" value={form.name} onChange={handleChange} className="form-control" required />
</div>
<div className="mb-3">
<label className="form-label">Email</label>
<input name="email" value={form.email} onChange={handleChange} className="form-control" type="email" required />
</div>
<div className="mb-3">
<label className="form-label">Department</label>
<select name="department" value={form.department} onChange={handleChange} className="form-select">
<option value="">-- Select --</option>
{departments.map(d=> <option key={d.id} value={d.name}>{d.name}</option>)}
</select>
</div>
<div className="mb-3">
<label className="form-label">Message</label>
<textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows={4}></textarea>
</div>
<button className="btn btn-primary" type="submit">Submit</button>
</form>
</div>
<div className="col-md-6">
<h5>Contact Details</h5>
<p>42, Vel Tech Road,<br/>Vel Nagar, Avadi,<br/>Chennai, Tamilnadu, 600062</p>
<p>Phone: +91 7358701999<br/>Email: principal@veltechmultitech.org</p>


<h6>Useful Links</h6>
<ul>
<li>Grievance Registration Form</li>
<li>IQAC</li>
<li>Career</li>
<li>Feedback</li>
</ul>
</div>
</div>


{submitted && (
<div className="mt-4">
<h5>Submitted Data</h5>
<pre className="p-3" style={{background:'#f8f9fa'}}>{JSON.stringify(submitted, null, 2)}</pre>
</div>
)}
</div>
)
}