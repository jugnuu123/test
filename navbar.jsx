import React from 'react';

class LoginPage extends React.Component {
    

   

    render() {
        return (
            <div className="container">
                <h1 style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>Jyothi Engineering College</h1>
                <div className="button-container" style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href='/Contactus'><button className="home"  style={{ backgroundColor: 'lightblue', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Contactus</button></a>
                   <a href='/Login'><button className="login" style={{ backgroundColor: 'lightblue', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button></a>
                   <a href='/Aboutus'><button className="about-us"  style={{ backgroundColor: 'lightblue', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>About Us</button></a>
                    <button className="more"  style={{ backgroundColor: 'lightblue', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>More</button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
