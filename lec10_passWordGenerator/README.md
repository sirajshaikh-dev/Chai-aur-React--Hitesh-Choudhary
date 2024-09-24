# Password Generator

This is a **React**-based password generator application that allows users to create random passwords of a specified length. Users can choose to include numbers and special characters in the generated passwords and copy them to the clipboard for easy use.

## Screenshot
 
![Image 2](src\assets\passwordGen.png)

### `App.jsx`
```jsx
import { useState, useCallback,useEffect, useRef } from 'react'
 
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //useRef hook
  const passwordRef= useRef(null)

  const passwordGenerator= useCallback( ()=>{
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "!@#$%^^&*(){}[]"

    for (let i = 1; i <= length; i++) {
      let char= Math.floor((Math.random()*str.length +1 ))
      pass+= str.charAt(char)
    }
    setPassword(pass)

  } , [length,numberAllowed, charAllowed,setPassword])
 
  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current.select()   // ? means optionally selects
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md 
        rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'> 
            <div className='flex items-center gap-x-1'> 
              <input 
              type="range" 
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                  type="checkbox" 
                  defaultChecked={numberAllowed}
                  id="numberInput" 
                  onChange={()=>{
                  setNumberAllowed((prev) => !prev)
                  }} 
               />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                  type="checkbox" 
                  defaultChecked={charAllowed}
                  id="charInput" 
                  onChange={()=>{
                  setCharAllowed((prev) => !prev)
                  }} 
               />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div> 

    </>
  )
}

export default App

```

## Features

- Set password length using a range slider (minimum: 8, maximum: 100).
- Option to include numbers and special characters in the password.
- Automatic password generation upon adjusting length or toggling options.
- Copy the generated password to the clipboard with a single click.

## How It Works

1. The app provides options to customize the password by selecting:
   - The length of the password.
   - Whether to include numbers (0-9).
   - Whether to include special characters (e.g., `!@#$%^&*()`).
   
2. The password is generated randomly using `Math.random()` to select characters from a string containing uppercase letters, lowercase letters, numbers, and special characters (if selected).

3. Users can copy the generated password to their clipboard by clicking the "Copy" button.

## Hooks Used

- **useState**: 
  - Manages the password length, options for numbers and special characters, and the generated password.
  
- **useCallback**: 
  - Ensures the `passwordGenerator` and `copyPasswordToClipboard` functions are memoized, preventing re-creation on every render for better performance.
  
- **useRef**: 
  - Provides a reference to the password input field to programmatically select and copy text.
  
- **useEffect**: 
  - Runs the password generation function whenever the password length or inclusion of numbers/special characters changes.
