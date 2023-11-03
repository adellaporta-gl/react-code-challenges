import { useRef, useEffect } from 'react';

export default function FocusInput() {
  const focusedInput = useRef();
  useEffect(() => {
    focusedInput.current.focus();
  });  
  return (
    <div >
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input name='focused-input' ref={focusedInput}></input>
    </div>
  )
}
