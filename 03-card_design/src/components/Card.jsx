
import { Bookmark } from 'lucide-react'
const Card = (props) => {
    const { jobs } = props
    const { brandLogo, companyName, jobTag, level, location, pay, post } = jobs
    console.log(jobs);

    console.log(brandLogo);

    return (
        <div className="parent">
            <div className="card">
                <div className="top">
                    <img src={brandLogo} alt="" />
                    <button>Save<Bookmark size={20} color="#929191" strokeWidth={2} /></button>
                </div>
                <div className="center">
                    <h3>{companyName} <span>5 days ago</span></h3>
                    <h2>{post}</h2>
                    <div className="center-card">
                        <h4>{jobTag}</h4>
                        <h4>{level}</h4>
                    </div>
                </div>
                <hr className='hr'></hr>
                <div className="bottom">

                    <div>
                        <p className='price'>{pay}</p>
                        <p className='location'>{location}</p>
                    </div>
                    <button>Apply now</button>
                </div>
            </div>
        </div>
    )
}

export default Card 