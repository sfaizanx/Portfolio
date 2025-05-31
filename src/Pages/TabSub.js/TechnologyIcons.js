import React from 'react'

const TechnologyIcons = () => {
  return (
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 text-center">
  {[
    { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", url: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: ".NET", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "jQuery", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MSSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "Swagger", url: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/swagger.svg" },
    { name: "Vercel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
  ].map((tech, index) => (
    <div key={index} className="flex flex-col items-center p-4 shadow-lg rounded bg-white dark:bg-gray-800">
      <img src={tech.url} alt={tech.name} className="w-14 h-14 mb-2" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
    </div>
  ))}
</div>

  )
}

export default TechnologyIcons