import React,{useState} from 'react'
import Footer from '../components/Footer'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

function SignUp() {

  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const [message,setMessage] = useState(null)
  const [file, setFile] = useState("");

const[dataInfo,setData] = useState({
  username:"",
  email:"",
  phone:"",
  country:"",
  city:"",
  img:"",
  idcard:"",
  password:"",
  confirmPassword:""
})

const navigate = useNavigate();

const handleChange = ({currentTarget:input}) => {
  setData({...dataInfo,[input.name]:input.value})
}

const handleSubmit = async (e) =>{
  e.preventDefault();
  const image = new FormData()
    image.append("file",file)
    image.append("upload_preset","upload")

  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    setLoading(true)
    const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dtszkvxdq/image/upload",
    image
    );
    console.log(uploadRes.data); 
    const {url} = uploadRes.data;

    const newUser = {
      ...dataInfo,
      img: url,
    };

    const {data} = await axios.post("http://localhost:4300/auth/register",newUser,
    config
    );
    console.log(dataInfo.token);
    localStorage.setItem("userInfo",JSON.stringify(data))
    setLoading(false)
    navigate('/login')
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
                <h1>Welcome Back</h1>
                <Link to='/login'>
                  <button type='button' className='white_btn'>
                    Sign In
                  </button>
                </Link>
              </div>
              <div className='right'>
                {message && <ErrorMessage Variant="Danger">{message}</ErrorMessage>}
              {error && <ErrorMessage Variant="Danger">{error}</ErrorMessage>}
                {loading && <Loading/>}
                <form className='form_container'onSubmit={handleSubmit}>
                  <h1>Create Your Account</h1>
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
                  type='email'
                  placeholder = 'Email'
                  name='email'
                  onChange={handleChange}
                  value={dataInfo.email}
                  required
                  className='input'
                  />
                  <input
                  type='text'
                  placeholder = 'Phone Number'
                  name='phone'
                  onChange={handleChange}
                  value={dataInfo.phone}
                  required
                  className='input'
                  />
                  <input
                  type='text'
                  placeholder = 'Country'
                  name='country'
                  onChange={handleChange}
                  value={dataInfo.country}
                  required
                  className='input'
                  />
                  <input
                  type='text'
                  placeholder = 'City'
                  name='city'
                  onChange={handleChange}
                  value={dataInfo.city}
                  required
                  className='input'
                  />
                  <input
                  type='text'
                  placeholder = 'CNI'
                  name='idcard'
                  onChange={handleChange}
                  value={dataInfo.idcard}
                  required
                  className='input'
                  maxLength={9}
                  minLength={9}
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
                  <input
                  type='password'
                  placeholder = 'Confirm Password'
                  name='confirmPassword'
                  onChange={handleChange}
                  value={dataInfo.confirmPassword}
                  required
                  className='input'
                  />
                  <input
                  type='file'
                  id='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                  />
                  {error && <div className='error_msg'>{error}</div>}

                  <button type='submit' className='green_btn' value='Register'>
                    Sign Up
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

export default SignUp