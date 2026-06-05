import Card from "./components/Card";



const App = () => {
  const jobs = [
    {
      id: 1,
      brandLogo: "https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png",
      companyName: "Google",
      post: "Senior Frontend Developer",
      jobTag: "Full-Time",
      level: "Senior Level",
      pay: "$4,000 - $12,00/month",
      location: "Mountain View, California, USA",
    },
    {
      id: 2,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s",
      companyName: "Microsoft",
      post: "UI/UX Designer",
      jobTag: "Full-Time",
      level: "Mid Level",
      pay: "$6,000 - $9,000/month",
      location: "Seattle, Washington, USA",
    },
    {
      id: 3,
      brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      companyName: "Netflix",
      post: "Product Designer",
      jobTag: "Remote",
      level: "Senior Level",
      pay: "$1,000 - $13,00/month",
      location: "Los Angeles, California, USA",
    },
    {
      id: 4,
      brandLogo: "https://e7.pngegg.com/pngimages/100/817/png-clipart-airbnb-logo-travel-social-network-trademark-accommodation.png",
      companyName: "Airbnb",
      post: "Frontend Developer",
      jobTag: "Part-Time",
      level: "Junior Level",
      pay: "$3,000 - $5,000/month",
      location: "San Francisco, California, USA",
    },
    {
      id: 5,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-ojvgheqFF4jc5EM9MYcOkULjVY3oG2hzw&s",
      companyName: "Spotify",
      post: "React Developer",
      jobTag: "Full-Time",
      level: "Mid Level",
      pay: "$5,500 - $8,500/month",
      location: "Stockholm, Sweden",
    },
    {
      id: 6,
      brandLogo: "https://images.rawpixel.com/image_png_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwOTEtMDUucG5n.png",
      companyName: "Meta",
      post: "Senior UI/UX Designer",
      jobTag: "Remote",
      level: "Senior Level",
      pay: "$500 - $1150/month",
      location: "Menlo Park, California, USA",
    },
    {
      id: 7,
      brandLogo: "https://images.icon-icons.com/2429/PNG/512/amazon_logo_icon_147320.png",
      companyName: "Amazon",
      post: "Backend Developer",
      jobTag: "Full-Time",
      level: "Mid Level",
      pay: "$650 - $10,00/month",
      location: "Austin, Texas, USA",
    },
    {
      id: 8,
      brandLogo: "https://e7.pngegg.com/pngimages/576/126/png-clipart-logo-brand-adobe-certified-expert-adobe-systems-ibm-watson-logo-angle-text.png",
      companyName: "Adobe",
      post: "Graphic Designer",
      jobTag: "Contract",
      level: "Junior Level",
      pay: "$2,500 - $4,000/month",
      location: "San Jose, California, USA",
    },
  ];
  return (
    <div className="parent">
      {jobs.map((elem, idx) =>
        <div key={idx}>
          <Card jobs={elem} />
        </div>
      )}


    </div>


  )
}

export default App