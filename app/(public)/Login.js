import LoginForm from "../../components/Forms/Login"
import {router} from "expo-router"


const Login = () => {

  const register = () => {
    router.push("/SignUp")
}

const resetPassword = () => {
  router.push("ResetPass")
}
  const tip = () => {
    router.push("Guide")
}



  return (
    
      <LoginForm 
      register={register} 
      guide={tip} 
      reset={resetPassword}  
      />
    
  )
}

export default Login
