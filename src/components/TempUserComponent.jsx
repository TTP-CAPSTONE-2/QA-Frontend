import './TempUserComponent.css'

function TempUserComponent ({user}) {
    console.log(user)
    return (
        <div className="user-header">
        {/* For now make a rounded gray circle to simulate */}
            <div className='avatar-img'></div> 
      
        <div className="">
            <h5 className="user-name-heading">
            {user.name}
            </h5>
        </div>
    </div>
    )
}

export default TempUserComponent