import React, { useEffect } from 'react'


function Github() {
  const [data, setdata] = React.useState(null)

  useEffect(()=>{
      fetch('https://api.github.com/users/hari06om')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUserData(data)
      })
  },[])
  return (
    <div className='text-center m-5 bg-gray-500 text-white text-3xl text-white'>
      Github Follower : {data?.followers}
      {/* <img
      className=' rounded-full w-20 h-20 mx-auto  '  */
        // src={data.avatar_url} alt="git"  width={300}/>
      }
    </div>
  )
}

export default Github
