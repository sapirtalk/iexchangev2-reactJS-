import {useState} from 'react'


export default function Toggle(initialVal) {
  const [Toggle, setToggle] = useState(initialVal);
  
  const Toggler = () =>{ 
    setToggle(!Toggle);
  }

  return [Toggle, Toggler];
}
