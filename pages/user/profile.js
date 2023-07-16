import React from 'react'
import Image from "next/image"

const Profile = () => {
  return (
    <div>
        <Image
        src={"/images/profile.jpg"}
        width={144}
        height={144}
        alt="profile image"
        />
    </div>
  )
}

export default Profile