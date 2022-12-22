import TodoList from './TodoList.js'
import React, { useState } from 'react';

function App() { // This is JSX
  // Can only return 1 thing
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}
//  <BrowserRouter>
//        <div className="App">
//          <Navbar />
//          <Switch>
//            <Route exact path='/'component={Dashboard} />
//            <Route path='/home' component={homePage} />
//            <Route path='/direction/q1' component={SignIn} />
//            <Route path='/direction/q2' component={SignIn} />
//            <Route path='/direction/q3' component={SignUp} />
//            <Route path='/direction/q4' component={SignUp} />
//            <Route path='/direction/thankyou' component={thankyou} />
//          </Switch>
//        </div>
//      </BrowserRouter>

export default App;
