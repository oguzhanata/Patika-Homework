import {useState} from 'react'
import AreaFunc from './TodoArea/area'
import FormFunc from './TodoHeader/header'
import FooterFunc from './TodoFooter/footer'


function MainFunc() {

    const [todoData, setTodoData] = useState([])
    
    return (
        <div className="todoapp">
            <FormFunc setTodoData={setTodoData} todoData={todoData} />
            <AreaFunc todoData={todoData}setTodoData={setTodoData}/>
            <FooterFunc todoData={todoData}setTodoData={setTodoData}/>
        </div>
    )
}

export default MainFunc
