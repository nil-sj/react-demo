import React from "react";

function Vendor(props) {

 const vendor = props.vendor;   

 return (
    <div style={{maxWidth: "300px", margin: "1rem auto", border: "1px solid grey", padding: "1rem", backgroundColor: "#efefef"}}>
        <ul style={{ textAlign: "left"}}>
            <li>Vendor Name: {vendor.vendorName}</li>
            <li>Vendor Address: {vendor.vendorAddress}</li>
            <li>Vendor Phone Number: {vendor.vendorPhoneNumber}</li>
        </ul>
    </div>
 );
}

export default Vendor