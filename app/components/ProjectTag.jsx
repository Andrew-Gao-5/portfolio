import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-primary-500"
    : "text[#ADB7B3] border-slate-600 hover:border-white"
  return (
            <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl curosor-pointer`}
                onClick={() => onClick(name)}
                >
                {name}</button>
  )
}

export default ProjectTag