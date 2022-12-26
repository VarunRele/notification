import React, {useState} from 'react'
import Notification from './components/Notification'
import data from './assets/info'

const App = () => {
  const [allRead, setAllRead] = useState(false)
  const [notiCount, setNotiCount] = useState(3)

  const markAllRead = () => {
    setAllRead(true)
    setNotiCount(0)
  }

  return (
    <main className='h-fit w-full flex justify-center items-center sm:pt-14'>
      <section className='bg-white w-full sm:w-[616px] h-full flex flex-col p-4 sm:rounded-lg md:shadow-md'>

        {/* Header */}
        <section className='flex justify-between items-center'>
          <h1 className='flex font-extrabold items-center'>
            Notifications
            <div className='mx-2 text-sm font-bold px-2 text-white bg-blue-p rounded-md'>
            {notiCount}
          </div>
          </h1>
          
          <p className='text-xs text-grayish-blue hover:cursor-pointer' onClick={markAllRead}>
            Mark all as read
          </p>
        </section>

        <section className='flex flex-col'>
          <Notification person={data.mark} unread={true} read={allRead} count={{notiCount, setNotiCount}} />
          <Notification person={data.angela} unread={true} read={allRead} count={{notiCount, setNotiCount}}  />
          <Notification person={data.jacob} unread={true}  read={allRead} count={{notiCount, setNotiCount}} />
          <Notification person={data.rizky} unread={false}  read={allRead} count={{notiCount, setNotiCount}} />
          <Notification person={data.kimberly} unread={false} read={allRead} count={{notiCount, setNotiCount}}  />
          <Notification person={data.nathan} unread={false} read={allRead} count={{notiCount, setNotiCount}}  />
          <Notification person={data.anna} unread={false} read={allRead} count={{notiCount, setNotiCount}} />
        </section>
        

      </section>
    </main>
  )
}

export default App