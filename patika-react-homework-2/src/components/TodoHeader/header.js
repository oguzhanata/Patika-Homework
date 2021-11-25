


function FormFunc({setTodoData, todoData}) {

    const onSubmitForm = (e) => {
        e.preventDefault();

        let newItem = e.target[0].value;

        if (newItem ==="") {
            return false
        };

        e.target.children[0].value = "";

        setTodoData([...todoData, {value: newItem}]);
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmitForm}>
                <input
                    name="todoEnter"
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                />
            </form>
        </header>
    )
}

export default FormFunc