import { getDefaultNormalizer } from '@testing-library/react'
import React, { useState } from 'react'

export default function Main() {
  // useState for inputFields
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  // useState for Error
  const [eusername, setEusername] = useState('')
  const [eemail, setEemail] = useState('')
  const [epassword, setEpassword] = useState('')
  const [ecpassword, setEcpassword] = useState('')
  // useState for color
  const [ucolor, setUcolor] = useState('')
  const [ecolor, setEcolor] = useState('')
  const [pcolor, setPcolor] = useState('')
  const [cpcolor, setEcpcolor] = useState('')

  const validate = () => {
    //Validation for user
    if (username.length > 8) {
      setEusername('')
      setUcolor('green')
    } else {
      setEusername('username must be 8 letters long')
      setUcolor('red')
    }
    //Validation for gmail
    if (email.includes('@gmail')) {
      setEemail('')
      setEcolor('green')
    } else {
      setEemail('User Should have @gmail')
      setEcolor('red')
    }
    //Validation for Password
    if (password.length > 8 && password.includes('.')) {
      setEpassword('')
      setPcolor('green')
    } else {
      setEpassword('Password should be 8 letters long and it should have . ')
      setPcolor('red')
    }
    //Validation for Confirm-Password
    if (password != '' && password == cpassword) {
      setEcpassword('')
      setEcpcolor('green')
    } else {
      setEcpassword('Password not matched')
      setEcpcolor('red')
    }
  }
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6 shadow-lg p-3 mb-5 bg-white rounded'>
          <h1>Form Validation</h1>
          <input
            type='text'
            placeholder='Enter Username'
            className='form-control'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            style={{ borderColor: ucolor }}
          />
          <p>{eusername}</p>
          <input
            type='text'
            placeholder='Enter Email'
            className='form-control'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            style={{ borderColor: ecolor }}
          />
          <p>{eemail}</p>
          <input
            type='text'
            placeholder='Enter Password'
            className='form-control'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            style={{ borderColor: pcolor }}
          />
          <p>{epassword}</p>
          <input
            type='text'
            placeholder='Enter Confirm Password'
            className='form-control'
            value={cpassword}
            onChange={(e) => {
              setCpassword(e.target.value)
            }}
            style={{ borderColor: cpcolor }}
          />
          <p>{ecpassword}</p>
          <button className='btn btn-success' onClick={validate}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}
