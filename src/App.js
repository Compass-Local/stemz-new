import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { Analytics } from "@vercel/analytics/react"
import Contact from './routes/Contact';
import Home from './routes/Home';
import About from './routes/About';
import GetInvolved from './routes/GetInvolved';
import OnlineClasses from './routes/OnlineClasses';
import SelfPacedClasses from './routes/SelfPacedClasses';
import News from './routes/News'
import Astronomy from './routes/Astronomy'
import BasicsOfCoding from './routes/BasicsOfCoding'
import Biochemistry from './routes/Biochemistry'
import Chemistry from './routes/Chemistry'
import Circuits from './routes/Circuits'
import EnvironmentalScience from './routes/EnvironmentalScience'
import Psychology from './routes/Psychology'
import Statistics from './routes/Statistics'
import Zoology from './routes/Zoology'
import March from './routes/March'
import Astrovid1s from './routes/Astrovid1s'
import Astrovid1p from './routes/Astrovid1p'
import Astrovid2p from './routes/Astrovid2p'
import Astrovid2s from './routes/Astrovid2s'
import Astrovid3p from './routes/Astrovid3p'
import Astrovid3s from './routes/Astrovid3s'
import Astrovid4p from './routes/Astrovid4p'
import Astrovid4s from './routes/Astrovid4s'
import Bc1p from './routes/bc1p'
import Bc1s from './routes/bc1s'
import Bc2p from './routes/bc2p'
import Bc2s from './routes/bc2s'
import Bc3p from './routes/bc3p'
import Bc3s from './routes/bc3s'
import Bc4p from './routes/bc4p'
import Bc4s from './routes/bc4s'
import Bio1 from './routes/bio1'
import Bio2 from './routes/bio2'
import Chem1 from './routes/chem1'
import Chem2 from './routes/chem2'
import Chem3 from './routes/chem3'
import Chem4 from './routes/chem4'
import Circuit1s from './routes/circuit1s'
import Circuit2s from './routes/circuit2s'
import Circuit3s from './routes/circuit3s'
import Circuit1p from './routes/circuit1p'
import Circuit2p from './routes/circuit2p'
import Circuit3p from './routes/circuit3p'
import Es1s from './routes/es1s'
import Es2s from './routes/es2s'
import Es3s from './routes/es3s'
import Es4s from './routes/es4s'
import Psych1p from './routes/psych1p'
import Psych1s from './routes/psych1s'
import Psych2p from './routes/psych2p'
import Psych2s from './routes/psych2s'
import Psych3p from './routes/psych3p'
import Psych3s from './routes/psych3s'
import Psych4p from './routes/psych4p'
import Psych4s from './routes/psych4s'
import Zoo1p from './routes/zoo1p'
import Zoo1s from './routes/zoo1s'
import Zoo2p from './routes/zoo2p'
import Zoo2s from './routes/zoo2s'
import Zoo3p from './routes/zoo3p'
import Zoo3s from './routes/zoo3s'
import Zoo4p from './routes/zoo4p'
import Zoo4s from './routes/zoo4s'
import Zoo5p from './routes/zoo5p'
import Zoo5s from './routes/zoo5s'
import Stat1p from './routes/stat1p'
import Stat1s from './routes/stat1s'
import Stat2p from './routes/stat2p'
import Stat2s from './routes/stat2s'
import Stat3p from './routes/stat3p'
import Stat3s from './routes/stat3s'
import Stat4p from './routes/stat4p'
import Stat4s from './routes/stat4s'
import Stat5p from './routes/stat5p'
import Stat5s from './routes/stat5s'
import September from './routes/sept'
import LoginForm from './routes/LoginForm'
import SignUpForm from './routes/SignUpForm'
import Dashboard from './routes/dashboard'
import CourseBoxes from './routes/CourseBoxes'
import Volunteers from './routes/volunteers'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/get-involved/volunteers' element={<Volunteers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/online-classes' element={<OnlineClasses />} />
        <Route path='/self-paced-classes' element={<SelfPacedClasses />} />
        <Route path='/course-boxes' element={<CourseBoxes />} />
        <Route path='/news' element={<News />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='sign-up' element={<SignUpForm />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='self-paced-classes/astronomy' element={<Astronomy />} />
        <Route path='self-paced-classes/basics-of-coding' element={<BasicsOfCoding />} />
        <Route path='self-paced-classes/biochemistry' element={<Biochemistry />} />
        <Route path='self-paced-classes/chemistry' element={<Chemistry />} />
        <Route path='self-paced-classes/circuits' element={<Circuits />} />
        <Route path='self-paced-classes/environmental-science' element={<EnvironmentalScience />} />
        <Route path='self-paced-classes/psychology' element={<Psychology />} />
        <Route path='self-paced-classes/statistics' element={<Statistics />} />
        <Route path='self-paced-classes/zoology' element={<Zoology />} />
        <Route path='news/march' element={<March />} />
        <Route path='news/september' element={<September />} />
        <Route path='self-paced-classes/astronomy/astrovid1s' element={<Astrovid1s />} />
        <Route path='self-paced-classes/astronomy/astrovid1p' element={<Astrovid1p />} />
        <Route path='self-paced-classes/astronomy/astrovid2p' element={<Astrovid2p />} />
        <Route path='self-paced-classes/astronomy/astrovid2s' element={<Astrovid2s />} />
        <Route path='self-paced-classes/astronomy/astrovid3p' element={<Astrovid3p />} />
        <Route path='self-paced-classes/astronomy/astrovid3s' element={<Astrovid3s />} />
        <Route path='self-paced-classes/astronomy/astrovid4p' element={<Astrovid4p />} />
        <Route path='self-paced-classes/astronomy/astrovid4s' element={<Astrovid4s />} />
        <Route path='self-paced-classes/basics-of-coding/bc1p' element={<Bc1p />} />
        <Route path='self-paced-classes/basics-of-coding/bc1s' element={<Bc1s />} />
        <Route path='self-paced-classes/basics-of-coding/bc2p' element={<Bc2p />} />
        <Route path='self-paced-classes/basics-of-coding/bc2s' element={<Bc2s />} />
        <Route path='self-paced-classes/basics-of-coding/bc3p' element={<Bc3p />} />
        <Route path='self-paced-classes/basics-of-coding/bc3s' element={<Bc3s />} />
        <Route path='self-paced-classes/basics-of-coding/bc4p' element={<Bc4p />} />
        <Route path='self-paced-classes/basics-of-coding/bc4s' element={<Bc4s />} />
        <Route path='self-paced-classes/basics-of-coding/bc4p' element={<Bc4p />} />
        <Route path='self-paced-classes/basics-of-coding/bc4s' element={<Bc4s />} />
        <Route path='self-paced-classes/biochemistry/bio1' element={<Bio1 />} />
        <Route path='self-paced-classes/biochemistry/bio2' element={<Bio2 />} />
        <Route path='self-paced-classes/chemistry/chem1' element={<Chem1 />} />
        <Route path='self-paced-classes/chemistry/chem2' element={<Chem2 />} />
        <Route path='self-paced-classes/chemistry/chem3' element={<Chem3 />} />
        <Route path='self-paced-classes/chemistry/chem4' element={<Chem4 />} />
        <Route path='self-paced-classes/circuits/circuit1s' element={<Circuit1s />} />
        <Route path='self-paced-classes/circuits/circuit2s' element={<Circuit2s />} />
        <Route path='self-paced-classes/circuits/circuit3s' element={<Circuit3s />} />
        <Route path='self-paced-classes/circuits/circuit1p' element={<Circuit1p />} />
        <Route path='self-paced-classes/circuits/circuit2p' element={<Circuit2p />} />
        <Route path='self-paced-classes/circuits/circuit3p' element={<Circuit3p />} />
        <Route path='self-paced-classes/environmental-science/es1s' element={<Es1s />} />
        <Route path='self-paced-classes/environmental-science/es2s' element={<Es2s />} />
        <Route path='self-paced-classes/environmental-science/es3s' element={<Es3s />} />
        <Route path='self-paced-classes/environmental-science/es4s' element={<Es4s />} />
        <Route path='self-paced-classes/psychology/psych1p' element={<Psych1p />} />
        <Route path='self-paced-classes/psychology/psych1s' element={<Psych1s />} />
        <Route path='self-paced-classes/psychology/psych2p' element={<Psych2p />} />
        <Route path='self-paced-classes/psychology/psych2s' element={<Psych2s />} />
        <Route path='self-paced-classes/psychology/psych3p' element={<Psych3p />} />
        <Route path='self-paced-classes/psychology/psych3s' element={<Psych3s />} />
        <Route path='self-paced-classes/psychology/psych4p' element={<Psych4p />} />
        <Route path='self-paced-classes/psychology/psych4s' element={<Psych4s />} />
        <Route path='self-paced-classes/zoology/zoo1p' element={<Zoo1p />} />
        <Route path='self-paced-classes/zoology/zoo1s' element={<Zoo1s />} />
        <Route path='self-paced-classes/zoology/zoo2p' element={<Zoo2p />} />
        <Route path='self-paced-classes/zoology/zoo2s' element={<Zoo2s />} />
        <Route path='self-paced-classes/zoology/zoo3p' element={<Zoo3p />} />
        <Route path='self-paced-classes/zoology/zoo3s' element={<Zoo3s />} />
        <Route path='self-paced-classes/zoology/zoo4p' element={<Zoo4p />} />
        <Route path='self-paced-classes/zoology/zoo4s' element={<Zoo4s />} />
        <Route path='self-paced-classes/zoology/zoo5p' element={<Zoo5p />} />
        <Route path='self-paced-classes/zoology/zoo5s' element={<Zoo5s />} />
        <Route path='self-paced-classes/statistics/stat1p' element={<Stat1p />} />
        <Route path='self-paced-classes/statistics/stat1s' element={<Stat1s />} />
        <Route path='self-paced-classes/statistics/stat2p' element={<Stat2p />} />
        <Route path='self-paced-classes/statistics/stat2s' element={<Stat2s />} />
        <Route path='self-paced-classes/statistics/stat3p' element={<Stat3p />} />
        <Route path='self-paced-classes/statistics/stat3s' element={<Stat3s />} />
        <Route path='self-paced-classes/statistics/stat4p' element={<Stat4p />} />
        <Route path='self-paced-classes/statistics/stat4s' element={<Stat4s />} />
        <Route path='self-paced-classes/statistics/stat5p' element={<Stat5p />} />
        <Route path='self-paced-classes/statistics/stat5s' element={<Stat5s />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
