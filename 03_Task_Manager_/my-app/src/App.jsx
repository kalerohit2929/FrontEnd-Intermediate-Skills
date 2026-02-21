import React from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

const App = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#043915] flex items-center justify-center">
                <div className="bg-[#B0CE88] p-6 rounded-xl shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        📝 Task Manager
                    </h1>
                    <TaskInput />
                    <TaskList />
                </div>
            </div>
        </div>
    )
}

export default App
