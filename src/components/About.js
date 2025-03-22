import React from 'react';

export default function About(props) {

    let myStyle = {
        border : '2px solid',
        borderColor : props.mode === 'dark' ? 'white' : '#212520'
    }


    return (
        <div className="container rounded pb-3" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }}>
            <h1 className="my-3">About Us</h1>
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item " style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Text Manipulation Features -</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }}>
                                Users can input text and perform various transformations, such as converting to uppercase, lowercase, removing extra spaces, and copying text for easy usage.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item " style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>User-Friendly In</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }}>
                            The project provides a simple and intuitive UI, allowing users to quickly modify text without any complexity.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Efficient and Ligh</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : '#212520', backgroundColor: props.mode === 'dark' ? '#212520' : 'white' }}>
                            
                                    Built for fast performance, TextUtils processes text instantly, making it a handy tool for quick text modifications.
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}