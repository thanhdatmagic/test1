import React from 'react'
import logo from '../asset/image/logoatla.png'
import '../css/menubar.css'
import {Link} from 'react-router-dom'

export default function menubar() {
  return (
    <div className="menubar">
            <img src={logo} alt="" className="logo"/>
            <div className="option">
                <u className='op'>
                    <li ><Link to='/'className='opitem'>Dashboard</Link></li>
                    <li ><Link to='/device'className='opitem'>Thiết bị</Link></li>
                    <li ><Link to='/service'className='opitem'>Dịch vụ</Link></li>
                    <li ><Link to='/'className='opitem'>Cấp sô</Link></li>
                    <li ><Link to='/report'className='opitem'>Báo cáo</Link></li>
                    <li className='opitem'>Cài đặt hệ thống </li>
                </u>
            </div>
            <button className='btnlogout'>Đăng xuất</button>
        </div>
  )
}
