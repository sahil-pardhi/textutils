// import React, { useState } from 'react'



// let myStyle = {
//     color: 'white',
//     backgroundColor: 'black',
// }
export default function About(props) {

    // const[myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '1px solid black ',

    // })

    // const[btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',

    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '1px solid black ',
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }


    return (


        <div className="container rounded " style={{ color: props.mode === 'dark' ? 'white' : '' }} >
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Text Manipulation Features -
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} >
                            <strong> Users can input text and perform various transformations, such as converting to uppercase, lowercase, removing extra spaces, and copying text for easy usage.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            User-Friendly Interface –
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} >
                            <strong>The project provides a simple and intuitive UI, allowing users to quickly modify text without any complexity. </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Efficient and Lightweight –
                        </button>
                    </h2>      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} >
                            <strong>
                                Built for fast performance, TextUtils processes text instantly, making it a handy tool for quick text modifications.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
            </div> */}
        </div>
    )
}


