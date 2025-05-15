import React from 'react';

function Projects() {
  const projects = [
    { title: 'Dự án A', description: 'Nghiên cứu về vật liệu từ.' },
    { title: 'Dự án B', description: 'Hệ thống giám sát khí.' },
  ];

  return (
    <div>
      <h1>Các dự án nghiên cứu</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
