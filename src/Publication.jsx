import { FaGlobeEurope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { SiArxiv } from "react-icons/si";

export default function Publication(props) {
    return (
        <div className='publication'>
            <img style={{ maxWidth: '20em', maxHeight: '20em', padding: '0.5em', objectFit: 'cover', border: '1px solid #dee2e6', borderRadius: '2%' }} src={props.imageUrl} alt={props.altText} />
            <div style={{ height: '100%', margin: 'auto 0' }}>
                <h4>{props.title}</h4>
                {props.authors.map((author, i) => {
                    return (
                        <span key={i}>
                            <a 
                                className={`authorlink ${author.is_me ? 'isme' : ''}`} 
                                href={author.link}

                            >
                                {author.name}
                            </a>
                            {i < props.authors.length - 1 && ', '}
                        </span>
                    )
                })}
                <div>{props.venue}, {props.year}</div>
                <div style={{ display: 'flex', gap: '1em', marginTop: '1em', alignItemsss: 'center'}}>
                    {props.paperLink && <a className='nocolor' href={props.paperLink}><FaFile size='1.5em'/> Paper</a>}
                    {props.projectLink && <a className='nocolor' href={props.projectLink}><FaGlobeEurope size='1.5em'/> Project page </a>}
                    {props.arxivLink && <a className='nocolor' href={props.arxivLink} style={{ margin: '0 0 0 -0.5em'}}><SiArxiv size='1.5em'/>ArXiv</a>}
                    {props.codeLink && <a className='nocolor' href={props.codeLink}><FaGithub size='1.5em'/> Code</a>}
                    {props.demoLink && <a className='nocolor' href={props.demoLink}><TbDeviceDesktopAnalytics size='1.7em'/>Demo</a>}
                </div>
            </div>
        </div>
    )
}