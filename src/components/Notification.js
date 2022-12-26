import React, {useState, useEffect} from 'react'


const Notification = ({ person, unread, read, count }) => {
    const { image, name, action, post, culb, msg, time, pic } = person
    const [uread, setUread] = useState(unread)

    const makeRead = () => {
        if (uread) {
            setUread(false)

            count.setNotiCount(count.notiCount - 1)
        }
        
    }
    
    useEffect(() => {
        if (uread) {
            setUread(!read)
        }
        // eslint-disable-next-line
    }, [read])
    

  return (
      <div className={`flex mt-3 ${uread ? "bg-very-light-grayish-blue" : ""} py-3 px-4 rounded-lg space-x-4`} onClick={makeRead}>
          <div className='w-10 flex-none basis-10'>
              <img src={image} className="w-16" alt="avatar" />
          </div>

          <div className='text-sm flex-1'>
              <div className='text-grayish-blue'>
                    <span className='mr-1 font-extrabold text-very-dark-blue'>{name}</span>
                   {action}
                  {post && <span className='text-dark-grayish-blue'> {post}</span>}
                  { culb && <span className='text-blue-p font-extrabold'> {culb}</span> }
                  { uread  && <div className='w-2 h-2 inline-flex self-start mx-2 rounded-full mb-[2px] bg-red-p shadow-sm'></div>}
              </div>

              <div className='text-grayish-blue font-normal'>
                  {time}
              </div>

              {msg && <div className='border my-3 rounded-md text-dark-grayish-blue p-4'>{msg}</div> }
          </div>

          {pic && <div className='flex-none basis-8'>
            <img src={pic} alt="" />
          </div>}
      </div>
  )
}

export default Notification