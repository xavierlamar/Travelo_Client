import React,{useState,useEffect} from 'react'
import NavBar from '../components/NavBar'
import { images } from '../constant'
import Footer from '../components/Footer'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

function Login() {

const [error,setError] = useState(false)
const [loading,setLoading] = useState(false)
const[dataInfo,setData] = useState({
  username:"",
  password:"",
})


const navigate = useNavigate();

const handleChange = ({currentTarget:input}) => {
  setData({...dataInfo,[input.name]:input.value})
}

const handleSubmit = async (e) =>{
  e.preventDefault();

  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    setLoading(true)

    const {data} = await axios.post("http://localhost:4300/auth/login",
    {
      ...dataInfo
    },
    config
    );
    console.log(data.token);
    localStorage.setItem("userInfo",JSON.stringify(data))
    setLoading(false)
    navigate('/MyAccount')
  } catch (error) {
    setError(error.response.data.message);
    setLoading(false)
  }
   
}




  return (
    <>
{/* <NavBar /> */}


   {/* form start */}
   <div className="signup_container">
            <div className='signup_form_container'>
              <div className='left'>
                <h1>New Here?</h1>
                <Link to='/register'>
                  <button type='button' className='white_btn'>
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className='right'>
                {error && <ErrorMessage Variant="Danger">{error}</ErrorMessage>}
                {loading && <Loading/>}
                <form className='form_container'onSubmit={handleSubmit}>
                  <h1>Login Now</h1>
                  <input
                  type='text'
                  placeholder = 'Username'
                  name='username'
                  onChange={handleChange}
                  value={dataInfo.username}
                  required
                  className='input'
                  />
                  <input
                  type='password'
                  placeholder = 'Password'
                  name='password'
                  onChange={handleChange}
                  value={dataInfo.password}
                  required
                  className='input'
                  />
                  {error && <div className='error_msg'>{error}</div>}

                  <button type='submit' className='green_btn'>
                    Sign In
                  </button>
                </form>
              </div>
            </div>
            
        </div>
   {/* form end */}
   
    {/* Footer Start */}
  <Footer />
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
      <i className="bi bi-arrow-up" />
    </a>

  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>
    
  )
}

export default Login