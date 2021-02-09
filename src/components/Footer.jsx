import React from 'react';


const date =  new Date();


function Footer(){
    return (
        <footer className="footerSection">
            <h1>Copyright {date.getFullYear()}</h1>
        </footer>
    )
}

export default Footer;