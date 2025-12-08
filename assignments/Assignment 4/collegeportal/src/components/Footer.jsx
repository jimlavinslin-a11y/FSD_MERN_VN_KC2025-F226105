import React from 'react'


export default function Footer(){
return (
<footer className="mt-5 py-4 text-white" style={{backgroundColor:'#4d0a0a'}}>
<div className="container">
<div className="row">
<div className="col-md-4">
<h6>VelTech MultiTech Engineering College</h6>
<p className="small">42, Vel Tech Road, Vel Nagar, Avadi, Chennai, Tamilnadu, 600062</p>
<p className="small">Phone: +91 7358701999<br/>Email: principal@veltechmultitech.org</p>
</div>
<div className="col-md-4">
<h6>Useful Links</h6>
<ul className="list-unstyled small">
<li>Grievance Registration Form</li>
<li>IQAC</li>
<li>Career</li>
<li>Feedback</li>
</ul>
</div>
<div className="col-md-4">
<h6>Quick Links</h6>
<ul className="list-unstyled small">
<li>Mandatory disclosure</li>
<li>About Us</li>
<li>Fee payment</li>
<li>Mentor login</li>
</ul>
</div>
</div>
<div className="text-center mt-3 small">&copy; {new Date().getFullYear()} VelTech MultiTech Engineering College</div>
</div>
</footer>
)
}