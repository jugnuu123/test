import React from 'react';

export default function Error() {
  return (
    <div class="contents" style={{"backgroundImage":'url(error404.gif)',"color":"white","backgroundColor":"lightblack",height: '100vh',backgroundRepeat:'no-repeat'}}>
    <div style={{ textAlign: 'center', padding: '50px' }}>
      
      <a href='/'><button className="Error" style={{ backgroundColor: 'lightblue', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Home</button></a>
    
     
      
    </div>
</div>
  );
}
