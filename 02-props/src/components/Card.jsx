
const Card = (props) => {
    console.log(props.user);

    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user} <span>{props.age}</span></h1>
            <p>{props.para}</p>
            <button >view Profile</button></div>
    )
}

export default Card