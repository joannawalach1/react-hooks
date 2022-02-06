import React, { useState, useMemo } from 'react';
import "./table.css";

const Table = (data) => {
    const [showInfo, setShowInfo] = useState("none");
    const newData = useMemo(() => data, [data]);

    const ShowMore = () => {
        setShowInfo(("flex"))
    }
    const HideMore = () => {
        setShowInfo(("none"))
    }
console.log(newData)
    return (
        <div>
            <h1>-----------------------------</h1>
            <h2>Data</h2>
            <div>
                <table>
                    <thead className="headings">
                        <tr>
                            <th>{newData.columns.name}</th>
                            <th>{newData.columns.username}</th>
                            <th>{newData.columns.email}</th>
                            <th>{newData.columns.phone}</th>
                            <th>{}</th>
                        </tr>
                    </thead>
                    <tbody className="data">
                        <tr>
                            <td>{newData.data.name}</td>
                            <td>{newData.data.username}</td>
                            <td>{newData.data.email}</td>
                            <td>{newData.data.phone}</td>
                            <td><button onClick={ShowMore}>show more</button>
                                <button onClick={HideMore}>hide more</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="info" style={{ display: showInfo }}>
                    <div>
                        <h5>Address :</h5>
                        <p>Street: {newData.data.address.street}</p>
                        <p>{newData.data.address.suit}</p>
                        <p>{newData.data.address.zipcode} {newData.data.address.city}</p>
                    </div>
                    <div><h5>Website: {newData.data.website}</h5></div>
                    <div>

                        <h5>Company:{newData.data.company.name}</h5>
                        <p>{newData.data.company.catchPhrase}</p>
                        <p>{newData.data.company.bs}</p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Table;
