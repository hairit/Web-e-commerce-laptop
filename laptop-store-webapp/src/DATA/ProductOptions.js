import {BsLaptop} from 'react-icons/bs';
import {RiComputerLine,RiComputerFill} from 'react-icons/ri'
import {MdKeyboardAlt} from 'react-icons/md'
import {BsFillMouse2Fill,BsHeadphones} from 'react-icons/bs'

const PRODUCT_OPTIONS = [
    {
        optionName : 'Laptop',
        path : '/laptop',
        icon : () => {return <BsLaptop className="pro-list-item-icon"/>}
    },
    {
        optionName : 'PC(Máy tính bàn)',
        path : '',
        icon : () => {return<RiComputerLine className="pro-list-item-icon"/>}
    },
    {
        optionName : 'Màn hình',
        path : '',
        icon : () => {return <RiComputerFill className="pro-list-item-icon"/>}
    },
    {
        optionName : 'Bàn phím',
        path : '',
        icon : () => {return <MdKeyboardAlt className="pro-list-item-icon"/>}
    },
    {
        optionName : 'Chuột',
        path : '',
        icon : () => {return <BsFillMouse2Fill className="pro-list-item-icon"/>}
    },
    {
        optionName : 'Tai nghe',
        path : '',
        icon : () => {return <BsHeadphones className="pro-list-item-icon"/>}
    },
]
export default PRODUCT_OPTIONS;