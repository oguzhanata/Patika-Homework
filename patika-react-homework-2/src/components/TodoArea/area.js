
function AreaFunc({ todoData, setTodoData }) {
    const inputClick = (e) => {
      let liClass = e.target.parentElement.parentElement;
  
      if (liClass.classList.value == "completed") {
        liClass.className = "selectStyle";
      } else {
        liClass.className = "completed";
      }
    };
  
    const allSelect = (e) => {
      let selectLi = document.querySelectorAll(".selectStyle");
      let selectLiAct = document.querySelectorAll(".completed");
      let selectInput = document.querySelectorAll(".toggle");
      let inputCheck = e.target.parentElement.children[2].children;
  
      if (selectLi.length > 0) {
        for (let i = 0; i < selectLi.length; i++) {
          selectLi[i].classList.value = "completed";
        }
  
        for (let i = 0; i < inputCheck.length; i++) {
          selectInput[i].checked = true;
        }
      } else {
        for (let i = 0; i < selectLiAct.length; i++) {
          selectLiAct[i].classList.value = "selectStyle";
        }
  
        for (let i = 0; i < inputCheck.length; i++) {
          selectInput[i].checked = false;
        }
      }
    };
  
    const removeItem = (e) => {
      let selectItemName = e.target.parentElement.innerText;
  
      let selectItemIndex = todoData.findIndex(
        (res) => res.value == selectItemName
      );
  
      todoData.splice(selectItemIndex, 1);
  
      setTodoData(todoData.map((res) => res));
    };
  
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox"></input>
        <label htmlFor="toggle-all" onClick={allSelect}>
          Mark all as complete
        </label>
  
        <ul className="todo-list">
          {todoData.map((item, index) => (
            <li key={item.value + index} className="selectStyle">
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onClick={inputClick}
                ></input>
                <label>{item.value}</label>
                <button className="destroy" onClick={removeItem}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

export default AreaFunc