import React, { useState, useEffect } from 'react'
import Resume from './components/resume'
import Title from './components/title'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [indexValue, setIndexValue] = useState(0)

  const currentJob = jobs[indexValue]

  const fetchJobs = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return <h1 className="loading">Loading...</h1>
  }

  const getJob = btnIndex => {
    setIndexValue(btnIndex)
  }

  return (
    <div className="App">
      <Title />
      <Resume
        currentJob={currentJob}
        jobs={jobs}
        getJob={getJob}
        indexValue={indexValue}
      />
    </div>
  )
}

export default App
