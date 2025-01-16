import dp from '../assets/dp.png'

import { props } from '../config/config'

const Profilepic = (props: props) => {
  return (
    <img className={`${props.classname}`} src={dp} alt="profile pic"></img>
  )
}

export default Profilepic