import { BsThreeDotsVertical } from 'react-icons/bs'
import { useEvent, useInvite } from '../../Context/EventContext'
import Celebration from '../../image/celebration.svg'
import '../Event Card/EventCard.css'

//replace hardcoded text with data from mock DB
const InviteCard = ({invite}) => {
    const {addInv, delInv} = useInvite()
    const {addEvent} = useEvent()
    const handleAdd = () => {
        addEvent(invite)
        delInv(invite.id)
    }
    const handleDelete = () => {
        delInv(invite.id)
    }
    return <div className='w-full h-48 border-2 border-black rounded-xl px-2 mb-2'>
        <div className='flex relative justify-center'>
            <h3 className=''>Invited to: {invite.title}</h3>
            <BsThreeDotsVertical size={22} className='ml-2 absolute right-2 top-0.5 ' />
        </div>
        <div className='flex '>
            <div className='w-30'>
                <img className='w-full h-full' src={Celebration} alt='celebration' />
            </div>
            <div className='w-full mx-2 '>
                <div className='w-full h-16 '>
                    <p className='text-left leading-tight line-clamp'>Description: {invite.description}
                    </p>
                </div>
                <div className='text-left '>
                        <p>Date: {invite.date}</p>
                        <p>Time: {invite.time}</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
                <button type='button' onClick={handleAdd}className='bg-green rounded-lg text-white px-5 py-1 mr-8'>Accept</ button>
                <button type='button' onClick={handleDelete}className='rounded-lg px-5 py-1 bg-red-500 text-white'>Decline</ button>
        </div> 
    </div>
}

export default InviteCard