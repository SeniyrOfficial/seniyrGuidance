import React from 'react'
import ProjectSummary from './ProjectSummary'
import './ProjectList.css'


const ProjectList = ({projects}) => {
  return (
    <div className="project-list section labeling">
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

export default ProjectList
