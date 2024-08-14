import './NotificationItem.css'

export default function Notifications(props) {

  function handleNotificationClick(event) {
    
      const clickId = event.currentTarget.getAttribute('clickid');
      const newNotifications = (props.notificationsList.map((notification) => (
        notification.id == clickId ? { ...notification, isUnRead: false } : notification
        
        )))

          props.setNotificationsList(newNotifications)
    }


  return (
    
    <div id='notificationItem' className={props.isUnRead == true ? 'addBackground' : null} clickid = {props.uniqueId} onClick={handleNotificationClick}>

      <div id='notificationItemContent'>
        <div id='userImage'><img src={props.profilePic} alt={props.name} /></div>
        <div id='content'>
          <div id='title'>
                <h2>{props.name}</h2>
                <p className={ props.uniqueId == 6 ? 'addNoWrap' : null}>{props.text}</p>

            <section>
                <button id='actionLink'>
                  {props.uniqueId == 5 ? (<img src={props.link} className='chessPic'/>)
                  :  (<a className={props.uniqueId == 3 || props.uniqueId == 7 ? 'addDifferentColor' : 'mainColor'} href={props.link}>{props.link}</a> ) }
                </button>
                {props.isUnRead == true ? <span className='dot'></span> : null}
            </section>
        </div>
          
      <div id='time'>
          <span>{props.time}</span>
      </div>

        <p className= {props.privateMessage ? 'showMessage' : null}>{props.privateMessage}</p>

      </div> 
  </div> 
 </div>
  )
}

