import './App.css'
import Publication from './Publication';
import { FaGithub } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import me from './assets/me.jpg';


const authorList = [
  {
    name: 'Kirsten Maas',
    link: null,
    is_me: true,
  },
  {
    name: 'Nicola Pezzotti',
    link: 'https://nicola17.github.io/',
    is_me: false,
  },
  {
    name: 'Amy Vermeer',
    link: 'https://research.tue.nl/nl/persons/amy-je-vermeer',
    is_me: false,
  },
  {
    name: 'Danny Ruijters',
    link: 'https://www.dannyruijters.nl/',
    is_me: false,
  },
  {
    name: 'Anna Vilanova',
    link: 'https://www.tue.nl/en/research/researchers/anna-vilanova/',
    is_me: false,
  },
]

const publications = [
  {
    title: 'NeRF-CA: Dynamic reconstruction of X-ray Coronary Angiography with extremely sparse-views',
    authors: [authorList[0], authorList[3], authorList[4], authorList[1]],
    venue: 'IEEE Transactions on Visualization and Computer Graphics (TVCG)',
    year: '2025',
    paperLink: 'https://www.computer.org/csdl/journal/tg/5555/01/11031197/27uvy04UuoU',
    arxivLink: 'https://arxiv.org/abs/2408.16355',
    demoLink: null,
    projectLink: 'https://kirstenmaas.github.io/nerfca',
    codeLink: 'https://github.com/kirstenmaas/NeRF-CA',
    imageUrl: './nerf-ca.png',
  },
  {
    title: 'NeRF For 3D reconstruction From X-ray Angiography: Possibilities and Limitations',
    authors: [authorList[0], authorList[1], authorList[2], authorList[3], authorList[4]],
    venue: 'VCBM: Eurographics Workshop on Visual Computing for Biology and Medicine',
    year: '2023',
    paperLink: 'https://diglib.eg.org/items/1d80a1ce-ab59-4718-afd0-bc54e053e7f6',
    demoLink: 'https://nerfforangiography.netlify.app/',
    projectLink: null,
    codeLink: null,
    imageUrl: './nerf3d.png',
  },
]

function App() {

  return (
    <div>
      <div>
        <h1>Kirsten Maas</h1>
        <div style={{ display: 'flex', gap: '5vw', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'left', maxWidth: '50em', minWidth: '20em' }}>
            Welcome! My name is Kirsten Maas. 
            I am a 4th year PhD student in Computer Science at the <a href='https://vis.win.tue.nl/'>Visualization cluster</a> at <space/>
            <a className='authorlink' href='https://research.tue.nl/en/persons/kirsten-wh-maas'>Eindhoven University of Technology</a> advised by <space/>
            <a href={authorList[4].link} className='authorlink'>Prof. Anna Vilanova</a>, <a className='authorlink' href={authorList[1].link}>Dr. Nicola Pezzotti</a>, and <a className='authorlink' href={authorList[3].link}>Prof. Danny Ruijters</a>. 
            The topic of my PhD is implicit neural representations for the 4D reconstruction of X-ray coronary angiography data. 
            This research is part of the <a className='authorlink' href='https://www.tue.nl/en/research/research-groups/eaisi/eaisi-business-operations/eindhoven-medtech-innovation-center/emtic-ai-lab'>e/MTIC collaboration</a> between Philips Healthcare, Catharina Hospital Eindhoven, and Eindhoven University of Technology.
            
          </div>
          <img style={{ width: 'auto', height: 'auto', maxWidth: '10em', maxHeight: '10em', padding: '0.5em', border: '1px solid #dee2e6', borderRadius: '2%' }} src={me} alt='Picture of me' />
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '1em', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
        <a className='nocolor' href='https://github.com/kirstenmaas'><FaGithub size='1.5em' /></a>
        <a className='nocolor' href='https://scholar.google.nl/citations?user=GG2-HcoAAAAJ&hl=en'><FaGoogleScholar size='1.5em' /></a>
        <a className='nocolor' href='https://www.linkedin.com/in/kirsten-maas/'><FaLinkedin size='1.5em'/></a>
        <a className='nocolor' href='mailto:k.w.h.maas@tue.nl'><MdMail size='1.7em' /></a>
      </div>
      <div style={{ textAlign: 'left', marginTop: '5vh' }}>
        <h2 style={{ borderBottom: '1px solid #dee2e6'}}>Publications</h2>
        {publications.map((publication, i) => (
          <Publication
            key={i}
            title={publication.title}
            authors={publication.authors}
            venue={publication.venue}
            year={publication.year}
            paperLink={publication.paperLink}
            demoLink={publication.demoLink}
            projectLink={publication.projectLink}
            arxivLink={publication.arxivLink}
            codeLink={publication.codeLink}
            imageUrl={publication.imageUrl}
          />
        ))}
        
      </div>
    </div>
  )
}

export default App
