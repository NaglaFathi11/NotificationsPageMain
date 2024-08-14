import './Counter.css'

export default function Counter(props) {
     
    return (
      <div id='notificationCounter'>
        <div id='counter'>
          <span>Notification</span>
          <button id='count'>{props.handleUnreadNotificationLength()}</button>
        </div>
        <button id='mark' onClick={props.handleMarkUnreadNotifications}>Mark all as read</button>
      </div>
    )

  }
