import React, {useRef} from 'react'
import './InputFields.css'

interface Props{
  todo: string | number,
  setTodo: React.Dispatch<React.SetStateAction<string | number>>,
  handleAdd: (e: React.FormEvent) => void // function which return nothing
}
// const InputFields = ({ todo, setTodo }: Props) => {   => Two ways to declare the components types ! 
const InputFields: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {

  // Will remove the box shadow after leaving the input field
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
      }}>

        <input 
        ref={inputRef}
        type="input" 
        placeholder='Enter a task to add' 
        className="input__box"
        value={todo}
        onChange= {(e)=>setTodo(e.target.value)}
        />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFields