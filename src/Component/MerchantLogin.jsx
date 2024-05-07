import Form from 'react-bootstrap/Form';
const MerchantLogin = () => {
    return ( 
        <div className="merchantlogin">
        <h1>Merchant Login</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <button className='btn-btn-primary'>Sign-In</button>
        <button className='btn-btn-secondary'>Sign-Up</button>
      </Form.Group>
    </Form>
        </div>
     );
}
 
export  default MerchantLogin;