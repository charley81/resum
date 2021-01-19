import React from 'react'

const Resume = ({ currentJob }) => {
  const { company, dates, duties, title } = currentJob

  return (
    <div>
      {/* btn section */}
      {/* info section */}
      <div className="info-section">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        {duties.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default Resume
