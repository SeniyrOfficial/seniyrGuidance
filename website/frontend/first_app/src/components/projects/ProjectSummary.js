import React from 'react'
import './ProjectList.css'


const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary labeling">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Curated by IIT Goa</p>
        <p className="grey-text">Updated on 9th July,2021</p>
      </div>
    </div>
  )
}

export default ProjectSummary
