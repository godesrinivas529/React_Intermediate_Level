import React, {useState, useRef} from "react";

const ThingsToDo = () => {
    const [newFieldData, setNewFieldData] = useState({
        id: '',
        text: '',
        completed: false,
    })
    const [listData, setListData] = useState([])
    const inputRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false)
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState('')

    const handleFieldData = (e) => {
        setNewFieldData({
            ...newFieldData,
            text: e.target.value
        });
    }

    const addThings = (e) => {
        e.preventDefault();
            const newTextObjField = {
                ...newFieldData,
                text : newFieldData.text,
                id : new Date().getTime().toString(),
                completed : false,
            }
        setListData([...listData, newTextObjField])
        setNewFieldData({
            id : '', 
            text : ''
        })
        setCount((prev) => prev + 1);
    }

    const searchThings = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        setIsRunning(true) 
    }

    //All
    const completeDataOfList = (e) => {
        e.preventDefault();
        // setIsRunning(false);
        setFilter('all')
    }

    //Active
    const activeList = (e) => {
        e.preventDefault();
        setFilter('active')
  };

    //completed
    const completedList = (e) => {
        e.preventDefault();
        setFilter('completed')
  };

    const toggleTaskCompletion = (id) => {
        setListData(
          listData.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      };

      const filteredList = listData.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true; // For "all" filter
      });
 
        
    return(
        <>
            <h3>Things TO DO</h3>
            <input type="text" placeholder="Add New" value={newFieldData.text} onChange={handleFieldData} ref={inputRef} autoFocus/>
            <button onClick={addThings}>+</button>
            <button onClick={searchThings}>Search</button>
            <h4>{count} items left</h4>
            <button onClick={completeDataOfList}>All</button> 
            <button onClick={activeList}>Active</button> 
            <button onClick={completedList}>Completed</button> 

            {filteredList.filter((item) => !isRunning || item.text.toLowerCase().includes(newFieldData.text.toLowerCase())).map((eachItem) => {
                    const { id, text, completed } = eachItem;
                    return (
                    <div key={id}>
                        <input type="checkbox" checked={completed} onChange={() => toggleTaskCompletion(id)}/>
                        <label>{text}</label>
                    </div>
                    );
            })}
            {/* {!isRunning && listData.map((eachObj) => {
                const {id, text} = eachObj;
                return (<div key={id}>
                        <input type='checkbox' />
                        <label>{text}</label>
                    </div>
                )
            })}
            {isRunning && listData.filter((item) => item.text.toLowerCase().includes(newFieldData.text.toLowerCase())).map((eachItem) => {
                const { text, id } = eachItem;
                return (<div key={id}>
                    <input type='checkbox' />
                    <label>{text}</label>
                </div>
            )
  })} */}
  <hr />
        </>
    )
}

export default ThingsToDo;


