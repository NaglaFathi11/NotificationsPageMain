
import './App.css'
import { useState } from 'react'
import CounterComponent from './CounterComponent/Counter'
import NotificationItemComponent from './NotificationItemComponent/NotificationItem'


export default function App() {
  
const [notificationsList, setNotificationsList] = useState([
    {
      id: 1,
      notifier: { name: 'Mark Webber', profilePic: '../../public/images/avatar-mark-webber.webp', href: '#'},
      action: { text: 'reacted to your recent post', link: 'My first tournament today!', href: '#' },
      time: '1m ago',
      privateMessage: '',
      isUnRead: true,
    },
    {
      id: 2,
      notifier: { name: 'Angela Gray', profilePic: '../../public/images/avatar-angela-gray.webp', href: '#'},
      action: { text: 'followed you', link: '', href: '#' },
      time: '5m ago',
      privateMessage: '',
      isUnRead: true,
    },
    {
      id: 3,
      notifier: { name: 'Jacob Thompson', profilePic: '../../public/images/avatar-jacob-thompson.webp', href: '#'},
      action: { text: 'has joined your group', link: 'Chess Club', href: '#' },
      time: '1 day ago',
      privateMessage: '',
      isUnRead: true,
    },
    {
      id: 4,
      notifier: { name: 'Rizky Hasanuddin', profilePic: '../../public/images/avatar-rizky-hasanuddin.webp', href: '#'},
      action: { text: 'sent you a private message', link: '', href: '#' },
      time: '5 days ago',
      privateMessage: "  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      isUnRead: false,
    },
    {
      id: 5,  
      notifier: { name: 'Kimberly Smith', profilePic: '../../public/images/avatar-kimberly-smith.webp', href: '#'},
      action: { text: 'commented on your picture', link: '../../public/images/image-chess.webp', href: '#' },
      time: '1 week ago',
      privateMessage: '',
      isUnRead: false,
    },
    {
      id: 6,
      notifier: { name: 'Nathan Peterson', profilePic: '../../public/images/avatar-nathan-peterson.webp', href: '#'},
      action: { text: 'reacted to your recent post', link: '5 end-game strategies to increase your win rate', href: '#' },
      time: '2 weeks ago',
      privateMessage: '',
      isUnRead: false,
    },
    {
      id: 7,
      notifier: { name: 'Anna Kim', profilePic: '../../public/images/avatar-anna-kim.webp', href: '#'},
      action: { text: 'left the group', link: 'Chess Club', href: '#' },
      time: '2 weeks ago',
      privateMessage: '',
      isUnRead: false,
    },
  ])

      function handleUnreadNotificationLength () {
        return  notificationsList.filter(n => n.isUnRead ). length
      }
    
    

      function handleMarkUnreadNotifications (){      
      const updatedNotificationsList = notificationsList.map((n) => (    {...n , isUnRead : false } ))
            setNotificationsList(updatedNotificationsList)
           
      }

  
        

 return (
    <div id='mainPage'>
      <div id='page'>
        
        <CounterComponent 
          handleUnreadNotificationLength ={handleUnreadNotificationLength}
          handleMarkUnreadNotifications = {handleMarkUnreadNotifications}
          />

          <div id='test'>
              {notificationsList.map((notification) => 
            
              <NotificationItemComponent 
                key={notification.id}
                uniqueId={notification.id}
                profilePic={notification.notifier.profilePic}
                name={notification.notifier.name}
                text={notification.action.text}
                link={notification.action.link}
                isUnRead={notification.isUnRead}
                privateMessage={notification.privateMessage}
                time={notification.time}
                notificationsList =  {notificationsList}
                setNotificationsList ={setNotificationsList}
                
                 />
          
                )}
          </div>
      </div>
    </div>
  )
}



