import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const contentRef = useRef();
  const handlePrint = useReactToPrint({contentRef});

  const notify = () => toast("Add successfully");


  const [basicData, setBasicData] = useState({
    name: '',
    phone: '',
    email: '',
    summary: ''
  });

  const handleBasicChange = (event) => {
    const { name, value } = event.target;
    setBasicData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const [educationData, setEducationData] = useState({
    univeristy: '',
    degree: '',
    year: ''
  });

  const [educationList, setEducationList] = useState([]);

  const handleEducationList = (e) => {
    e.preventDefault();
    setEducationList((prevList) => {
      const updatedList = [...prevList, educationData];
      console.log(updatedList);
      return updatedList;
    });

    setEducationData({
      univeristy: '',
      degree: '',
      year: ''
    });
    notify()
  };

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const tailwindColors = ['red', 'blue', 'green', 'yellow', 'gray', 'purple', 'pink'];
  const [lineColor, setLineColor] = useState();

  const handleLineColor = (event) => {
    setLineColor(event.target.value);
    console.log(lineColor);
  };

  const getColorClass = (color) => {
    const allowed = ['red', 'blue', 'green', 'yellow', 'gray', 'purple', 'pink'];
    return allowed.includes(color) ? `text-${color}-500` : 'text-black';
  };

  const [experienceData, setExperienceData] = useState({
    company: '',
    jobTitle: '',
    year: '',
    description: ''
  });

  const [experienceList, setExperienceList] = useState([]);

  const handleExperienceData = (event) => {
    const { name, value } = event.target;
    setExperienceData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleExperienceList = (event) => {
    event.preventDefault();
    setExperienceList((prevList) => {
      const updatedList = [...prevList, experienceData];
      console.log(updatedList);
      return updatedList;
    });

    setExperienceData({
      company: '',
      jobTitle: '',
      year: '',
      description: ''
    });
    notify()
  };

  const [skill, setSkill] = useState('')
  const [skillList, setSkillList] = useState([])

  const handleSkillChange = (event) => {
    setSkill(event.target.value)
  }

  const handleSkillList = (event) => {
    event.preventDefault()

    setSkillList((prevSkills) => {
      const updatedList = [...prevSkills, skill]
      console.log(updatedList)
      return updatedList
    })

    setSkill('')
    notify()
  }

  useEffect(() => {
    console.log(getColorClass(lineColor));
  }, [lineColor]);


  const [projectData, setProjectData] = useState({
    name:'',
    description: ''
  })

  const [projectList, setProjectList] = useState([])

  const handleProjectData = (event) => {
    const {name, value} = event.target

    setProjectData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }

  const handleProjectList = (event) => {
    event.preventDefault()
    notify()

    setProjectList( (prevList) => {
      const updatedList = [...prevList, projectData]
      console.log(updatedList)
      return updatedList
    } )

    setProjectData({
      name: '',
      description: ''
    })
  }


  

  return (
    <div>
      <ToastContainer />
      <h1 className="text-4xl font-bold tracking-wider text-center mt-2 mb-4">Resume Builder</h1>
      <span className="hidden text-red-500 text-blue-500 text-green-500 text-yellow-500 text-gray-500 text-purple-500 text-pink-500" />

      <div className="flex flex-col h-screen p-4 md:flex-row">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-4 overflow-y-auto">
          {/* Basic information */}
          <form>
            <h2 className='text-center mb-2 text-2xl font-bold'>Basic Details</h2>

            <label className='flex items-center justify-between w-96'>
              <h2 className='text-shadow-black text-shadow-2xs'>Enter your Name:</h2>
              <input name="name" value={basicData.name} onChange={handleBasicChange} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:Tom' />
            </label>

            <label className='flex items-center mt-2 justify-between w-96'>
              <h2 className='text-shadow-black text-shadow-2xs'>Enter your Phone :</h2>
              <input name="phone" value={basicData.phone} onChange={handleBasicChange} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:316-34244' />
            </label>

            <label className='flex items-center mt-2 justify-between w-96'>
              <h2 className='text-shadow-black text-shadow-2xs'>Enter your Email:</h2>
              <input name="email" value={basicData.email} onChange={handleBasicChange} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="email" required placeholder='eg:Tom@gmail.com' />
            </label>

            <label className='flex items-center mt-2 ml-2 justify-between w-96'>
              <h2 className='text-shadow-black text-shadow-2xs'>Enter Summary:</h2>
              <textarea name="summary" value={basicData.summary} onChange={handleBasicChange} className='border border-gray-300 rounded-2xl py-2 px-2 w-[212px] h-[100px] text-gray-700 ml-5' required placeholder='I am Passionate about...' />
            </label>

            {/* Line color */}
            <div className="flex items-center space-x-2.5 mt-2">
              {basicData.summary && <h1 className="text-shadow-black text-shadow-2xs">Set the Ending line color: </h1>}
              {basicData.summary && (
                <select
                  name="lineColor"
                  value={lineColor}
                  onChange={handleLineColor}
                  className="border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 mt-4"
                >
                  <option value="">Select Line Color</option>
                  {tailwindColors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              )}
            </div>
          </form>

          {/* Education form */}
          <form>
            <h2 className='text-center mb-2 text-2xl font-bold mt-5'>Education</h2>

            <label className='flex items-center justify-between w-96 mb-2'>
              <p className='text-shadow-black text-shadow-2xs'>Univeristy/School</p>
              <input name="univeristy" value={educationData.univeristy} onChange={handleEducationChange} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:Pak-Austria' />
            </label>

            <label className='flex items-center justify-between w-96 mb-2'>
              <p className='text-shadow-black text-shadow-2xs'>Degree</p>
              <input name="degree" value={educationData.degree} onChange={handleEducationChange} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:Computer Science' />
            </label>

            <div className='w-96'>
              <label className='flex items-center justify-between'>
                <p className='text-shadow-black text-shadow-2xs'>Year</p>
                <input name="year" value={educationData.year} onChange={handleEducationChange} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:2025' />
              </label>
            </div>

            <div className='flex justify-center mt-4'>
              <button onClick={handleEducationList} className='bg-blue-500 px-10 py-2 rounded-bl-3xl rounded-tr-2xl cursor-pointer text-center' type="submit">Add</button>
            </div>
          </form>

          {/* Experience form */}
          <form>
            <h2 className='text-center mb-2 text-2xl font-bold mt-5'>Experience</h2>

            <label className='flex items-center justify-between w-96 mb-2'>
              <p className='text-shadow-black text-shadow-2xs'>Company</p>
              <input name="company" value={experienceData.company} onChange={handleExperienceData} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:Google' />
            </label>

            <label className='flex items-center justify-between w-96 mb-2'>
              <p className='text-shadow-black text-shadow-2xs'>Job Title</p>
              <input name="jobTitle" value={experienceData.jobTitle} onChange={handleExperienceData} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:ML Engineer' />
            </label>

            <div className='w-96'>
              <label className='flex items-center justify-between'>
                <p className='text-shadow-black text-shadow-2xs'>Year</p>
                <input name="year" value={experienceData.year} onChange={handleExperienceData} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:2025' />
              </label>

              <label className='flex items-center mt-2 ml-2 justify-between w-96'>
                <h2 className='text-shadow-black text-shadow-2xs'>Description:</h2>
                <textarea name="description" value={experienceData.description} onChange={handleExperienceData} className='border border-gray-300 rounded-2xl py-2 px-2 w-[212px] h-[100px] text-gray-700 ml-5' required placeholder='I worked on...' />
              </label>
            </div>

            <div className='flex justify-center mt-4'>
              <button onClick={handleExperienceList} className='bg-blue-500 px-10 py-2 rounded-bl-3xl rounded-tr-2xl cursor-pointer text-center' type="submit">Add</button>
            </div>
          </form>

          {/* Project form */}
          <form>
            <div>
            <h2 className='text-center mb-2 text-2xl font-bold mt-5'>Projects</h2>

            <label className='flex items-center justify-between w-96 mb-2'>
              <p className='text-shadow-black text-shadow-2xs'>Title</p>
              <input name="name" value={projectData.name} onChange={handleProjectData} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg: chating app' />
            </label>

            

              <label className='flex items-center mt-2 ml-2 justify-between w-96'>
                <h2 className='text-shadow-black text-shadow-2xs'>Description:</h2>
                <textarea name="description" value={projectData.description} onChange={handleProjectData} className='border border-gray-300 rounded-2xl py-2 px-2 w-[212px] h-[100px] text-gray-700 ml-5' required placeholder='This project is about...' />
              </label>
            </div>

            <div className='flex justify-center mt-4'>
              <button onClick={handleProjectList} className='bg-blue-500 px-10 py-2 rounded-bl-3xl rounded-tr-2xl cursor-pointer text-center' type="submit">Add</button>
            </div>
          </form>
          <form >
            <label className='flex items-center justify-between w-96 mt-5'>
                <p className='text-shadow-black text-shadow-2xs'>Skills</p>
                <input name="skill" value={skill} onChange={handleSkillChange} className='border border-gray-300 rounded-2xl py-2 px-3 text-gray-700 ml-5' type="text" required placeholder='eg:Game development' />
              
               
              </label>
               <div className='flex justify-center mt-4'>
              <button onClick={handleSkillList} className='bg-blue-500 px-10 py-2 rounded-bl-3xl rounded-tr-2xl cursor-pointer text-center' type="submit">Add</button>
            </div>
          </form>
        </div>

        {/* Right: Live Preview */}
        <div ref={contentRef} className="prose prose-sm w-full md:w-1/2 p-4 bg-gray-100 overflow-y-auto w-[21cm] h-[18cm] p-8 bg-white shadow-md mx-auto print:w-full print:h-full">
          {/* Basic Details */}
          <div>
            {basicData.name && <h1 className="flex space-x-10"><span className="font-bold">Name:</span><span>{basicData.name}</span></h1>}
            {basicData.phone && <h2><span className="font-bold">Phone No:</span> {basicData.phone}</h2>}
            {basicData.email && <h2><span className="font-bold">Email:</span> {basicData.email}</h2>}
            {basicData.summary && (
              <p className="mt-4">
                <span className="font-bold">About:</span><br />
                <div className="px-2 py-2 border-2 border-gray-200 w-[20rem] ml-15 h-[5rem]">{basicData.summary}</div>
              </p>
            )}
            {basicData.name && basicData.phone && basicData.email && (
              <div className="text-2xl justify-center flex">
                <h1 className={getColorClass(lineColor)}>. . . . . . . . . . . . . . . </h1>
              </div>
            )}
          </div>

          {/* Education */}
          <div>
            {educationList.length !== 0 && <h1 className="text-2xl font-bold">Education</h1>}
            {educationList.map((item, index) => (
              <div className="mt-2 ml-5" key={index}>
                <h1 className="text-2xl">{item.univeristy}</h1>
                <div className="ml-5">
                  <h2><span className="font-bold">Degree:</span> {item.degree}</h2>
                  <h2><span className="font-bold">Starting Year:</span> {item.year}</h2>
                </div>
              </div>
            ))}
          </div>

          {educationList.length != 0 && (
              <div className="text-2xl justify-center flex">
                <h1 className={getColorClass(lineColor)}>. . . . . . . . . . . . . . . </h1>
              </div>
            )}

          {/* Experience */}
          <div>
            {experienceList.length !== 0 && <h1 className="text-2xl font-bold">Experience</h1>}
            {experienceList.map((item, index) => (
              <div className="mt-2 ml-5" key={index}>
                <h1 className="text-2xl">{item.company}</h1>
                <div className="ml-5">
                  <h2><span className="font-bold">Role:</span> {item.jobTitle}</h2>
                  <h2><span className="font-bold">Starting Year:</span> {item.year}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {skillList.length != 0 && (
              <div className="text-2xl justify-center flex">
                <h1 className={getColorClass(lineColor)}>. . . . . . . . . . . . . . . </h1>
              </div>
            )}


            {/* Projects */}
          <div>
            {projectList.length !== 0 && <h1 className="text-2xl font-bold">Projects</h1>}
            {projectList.map((item, index) => (
              <div className="mt-2 ml-5" key={index}>
                <h1 className="text-2xl">{item.name}</h1>
                <div className="ml-5">
                  
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {projectList.length != 0 && (
              <div className="text-2xl justify-center flex">
                <h1 className={getColorClass(lineColor)}>. . . . . . . . . . . . . . . </h1>
              </div>
            )}

            <div>
            {skillList.length !== 0 && <h1 className="text-2xl font-bold">Skills</h1>}
            {skillList.map((item, index) => (
              <div className="mt-2 ml-5" key={index}>
                <h1 className="">{item}</h1>
                
              </div>
            ))}
          </div>

         
        </div>
        
      </div>
       {/* Download Button */}
          <div className="p-4 text-center">
            <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded">
              Download as PDF
            </button>
          </div>
    </div>
  );
};

export default App;
