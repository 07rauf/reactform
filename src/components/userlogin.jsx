import './userlogin.css'
import React, { useState } from 'react';
function UserLogin() {
    const [alertt, setAlert] = useState('');
    const [alerttt, setAlertt] = useState('');
    const [check, setCheck] = useState('');
    const [pass, setPass] = useState(0);
    const password = (e) => {
    setPass(e.target.value.length)
        if(pass < 8){
            setAlertt('Ən azı 8 simvol');
            document.querySelector('.alertt').style.display = 'block'
      }else{
            document.querySelector('.alertt').style.display = 'none'
            setAlertt('');
        }
    }
    const emailPart = (e)=>{
        let a = e.target.value
        let b = a.split('.').reverse()[0]
        if (b === 'com' || b === 'az') {
            setAlert('Yalnız .ru domenlərinə icazə verilir');
            document.querySelector('.alert').style.display = 'block'
            setCheck(b)
        } else {
            document.querySelector('.alert').style.display = 'none'
            setAlert('');
        }
    }
    const checkSubmit = (e) => {

        if (check === 'com' || check === 'az' || pass < 8) {
            
            alert('Emaili və Passwordu Düzgün daxil edin');
        }
        
    }
   
  return (
    <>
  <form>
    <label>
    E-mail: <input className='firstinput' type='email' onKeyUp={emailPart}/> 
    </label>
    <p className='alert'>{alertt}</p>
    <label>
    Password: <input className='secondinput' type='password' onKeyUp={password}/>
    </label>
    <p className='alertt'>{alerttt}</p>
    <button onClick={checkSubmit}>Login</button>
  </form>
    </>
  )
}

export default UserLogin