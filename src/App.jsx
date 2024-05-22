import React, { useState, useEffect } from 'react';
import { supabase } from './createClient';
import './App.css'

const App = () => {

  const [ tasks, setTasks ] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const { data } = await supabase
    .from('tasks')
    .select('*')
    setTasks(data)
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>heading</th>
            <th>description</th>
            <th>is_done</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => 
            <tr>
              <td>{task.id}</td>
              <td>{task.heading}</td>
              <td>{task.description}</td>
              <td>{String(task.is_done)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App