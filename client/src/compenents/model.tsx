import React from 'react'

const Model = ({ title, children, id }: any) => {

    const showModel = () => {
         let modelBox = document.getElementById(id) as HTMLInputElement;
        modelBox.style.display = "block"
       
    }

    const hideModel = () => {
        let modelBox = document.getElementById(id) as HTMLInputElement;
        modelBox.style.display = "none"
    }
    return (<div>
        <span onClick={showModel} className="w3-text-black ">{title}</span>
        <div id={id} className="w3-modal w3-border">
            <div style={{ borderRadius: "10px" }} className="w3-modal-content">
                <div className="w3-container w3-padding">
                    <span style={{height:"40px" ,marginRight: "10px", borderRadius: "10px", bottom: "20px", marginTop: "10px" }} onClick={hideModel} className="w3-button w3-display-topright w3-red ">&times;</span>
                    <br />
                    {children}
                </div>
            </div>
        </div>
    </div>
    )

}

export default Model;