import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

const Resume = ({ currentJob, jobs }) => {
  const { company, dates, duties, title } = currentJob

  return (
    <div className="container">
      {/* btn section */}
      <div className="btn-container">
        {jobs.map((item, index) => {
          return <button key={index}>{item.company}</button>
        })}
      </div>

      {/* info section */}
      <div className="info-container">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        <ul>
          {duties.map((item, index) => (
            <li key={index}>
              <AiFillCaretRight className="icon" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Resume
