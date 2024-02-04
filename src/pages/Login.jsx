import { useState } from "react";
import {useDispatch} from 'react-redux'
import {loginActions} from '../store/index.js'
import {useNavigate} from 'react-router-dom'
import {
  Grid,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import loginImage from "../images/loginimg.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import { FormHelperText } from "@mui/material";
import "./Login.css";

const theme = createTheme({});

function Login() {
  const [password, setPassword] = useState("");
  const [username,setUsername] = useState("")
  const [usernameHelper,setUsernameHelper] = useState(false);
  const [passwordHelper,setPasswordHelper] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const cred = {
    username : 'student@edwisely.com',
    password : 'edwisely@2024'
  }
  //login routing and state update in store
  const handleLogin = () => {
    fetch(`https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${username}&password=${password}`)
    .then(res => res.json())
    .then((value)=>{
      if(value.status === 200){
        dispatch(loginActions.login())
        localStorage.setItem('isLogin',true);
        navigate('/dashboard');
      }
      else{
        setUsernameHelper(prevState => !prevState)
        setPasswordHelper(prevState => !prevState)
      }
    })
  }


  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };


  //handling local storage
  const value=localStorage.getItem('isLogin')
  console.log(value)

  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ height: "768px" }}>
        <Grid
          md={6}
          item
          display="flex"
          justifyContent="center"
          backgroundColor="#0B58F5"
        >
          <div id="left-content">
            <div id="left-header">
              <span id="welcome">Welcome to</span>
              <span id="student-portal">Student Portal</span>
              <span id="login-helper">Login to access your account</span>
            </div>
            <div>
              <img id="login-img-svg" src={loginImage} alt="" />
            </div>
          </div>
        </Grid>
        <Grid
          md={6}
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <div id="login-header-div">
              <span id="login">Login</span>
              <span id="account-details">Enter your account details</span>
            </div>
            <div id="login-cred-div">
              <TextField
                className="cred-field"
                label="Username"
                variant="standard"
                autoComplete="off"
                value={username}
                onChange={handleUsername}
                helperText={usernameHelper && '*Enter Valid Username'}
                error={usernameHelper}
              />
              <TextField
                className="cred-field"
                label="Password"
                variant="standard"
                onChange={handlePassword}
                value={password}
                type={!isClicked ? "password" : "text"}
                error={passwordHelper}
                helperText = {passwordHelper && '*Enter valid Password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {!isClicked ? (
                        <VisibilityOffIcon
                          className="visibility-button"
                          onClick={handleClick}
                        />
                      ) : (
                        <Visibility
                          className="visibility-button"
                          onClick={handleClick}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <div id="login-remember-div">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" id="remember-text">
                  Remember me
                </label>
              </div>
              <Button
                className="cred-field"
                variant="contained"
                sx={{
                  marginTop: "30px",
                  backgroundColor: "#0B58F5",
                  padding: "10px",
                  borderRadius: "10px",
                  fontFamily: "Poppins",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
