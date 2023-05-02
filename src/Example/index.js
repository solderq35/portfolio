import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  { value: 'resume_SWE.pdf', label: 'Resume (SWE)' },
  { value: 'resume_SEC.pdf', label: 'Resume (SEC)' },
];

export default function Index() {
  const [setSelectedOption] = useState({ value: '', label: 'Resume' });

  const handleSelect = (option) => {
    setSelectedOption(option);
    window.open(option.value, '_blank');
  };

  return (
    <div className="mx-auto w-full max-w-6xl pb-10 lg:py-12 lg:px-8 text-center">
      <h1 className="text-8xl mt-20">
        {' '}
        <b>Jeff Huang </b>
      </h1>

      <p className="text-2xl pb-5 py-10">
        Hi, I'm a third year student at Oregon State University, pursuing a computer science degree with a focus on web
        development.
      </p>

      <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 my-6 text-2xl mx-5">
        <a href="/projects" className="a2">
          Projects
        </a>
      </button>

      <button style={{ width: "150px" }} className="cursor-pointer">
  <Dropdown
    options={options}
    onChange={handleSelect}
    value={{value: '', label: 'Resume'}}
    placeholder="Select an option"
    controlClassName="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded my-6 text-2xl mx-5"
    className="my-dropdown"
    noOptionsMessage=""
  />
</button>


    </div>
  );
}
