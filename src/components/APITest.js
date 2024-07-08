import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Vendor from './Vendor';

const URL1 = "http://localhost:8080/cloudvendor/all";

function APITest() {

    const initialList = [{vendorId: "CV1", vendorName: "Vendor1"}];

    const [vendors, setVendors] = useState(initialList);

    useEffect(() => {
        axios.get(URL1)
        .then((response)  => {
            console.log(response);
            setVendors(response.data)
        })
    }, []);

    return (
        <>
        <h1>Test Results</h1> 
        <hr/>
        <p>The cloud vendors are listed below: </p>
            {vendors.map((vendor) => {
                return(<Vendor key={vendor.vendorId} vendor={vendor}/>);
            })}   
        </>
    );
}

export default APITest;