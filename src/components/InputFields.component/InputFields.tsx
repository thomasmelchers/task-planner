import React, {useRef} from 'react'
import './InputFields.css'

interface Props{
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  storyPoint: number | undefined,
  setStoryPoint: React.Dispatch<React.SetStateAction<number | undefined>>,
  technology: string | undefined, 
  setTechnology: React.Dispatch<React.SetStateAction<string>>,
  type: string,
  setType: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void // function which return nothing
}
// const InputFields = ({ todo, setTodo }: Props) => {   => Two ways to declare the components types ! 
const InputFields: React.FC<Props> = ({ todo, setTodo, storyPoint, setStoryPoint, technology, setTechnology, type, setType, handleAdd }) => {

  // Will remove the box shadow after leaving the input field
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
      }}>

        <div className='input__container taskNameContainer'>
          <input 
          ref={inputRef}
          type="input" 
          placeholder='Enter a task to add' 
          className="input__box"
          required
          value={todo}
          onChange= {(e)=>setTodo(e.target.value)}
          />

          <button className='input__submit' type='submit'>ADD</button>

        </div>

        <div className='input__container optionContainer'>
          <div className='input__container__option'>
            <label htmlFor="storyPoint" className='input__label'>How many story Point ? </label>
            <input 
            type="number" min="0.5" max="12" step="0.5" id='storyPoint' 
            className="input__box input__box__options"  
            placeholder='Number of StoryPoint' 
            value={storyPoint} 
            onChange={(e) => setStoryPoint(e.target.valueAsNumber)} />
          </div>

          <div className='input__container__option select'>
            <label htmlFor="category" className='input__label'>Which technology is needed ? </label>
            <select className="input__box input__box__options"
            value={technology}
            onChange={(e) =>  setTechnology(e.target.value)} 
            >
              <option value="React">React</option>
              <option value="NodeJs">NodeJs</option>
              <option value="GraphQl">GraphQl</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Material UI">Material UI</option>
              <option value="Angular">Angular</option>
            </select>
          </div>

          <div className='input__container__option'>
            <label htmlFor="type" className='input__label'>Which type of task is it ? </label>
            <select className="input__box input__box__options"
            value={type}
            onChange={(e) =>  setType(e.target.value)} >
              <option value="Learning">Learning</option>
              <option value="Development">Development</option>
              <option value="Testing">Testing</option>
              <option value="Deployment">Deployement</option>
            </select>
          </div>
          
        </div>

        
    </form>
  )
}

export default InputFields