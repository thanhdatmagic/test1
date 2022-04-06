import React from 'react'
import MenuBar from '../../components/menubar'
import '../../css/device.css'


export default function service() {
  

  

  return (
    <>
    <div className="device">
        <MenuBar/>
        <div className="link">
        <h4 id='link1'>Thiết bi --</h4> <h4 id='link2'>Danh sách thiết bị</h4>
        </div>
      
        <h3 >Danh sách thiết bị</h3>
        <div className="status-activity">
          <p id='statusactivity'>Trạng thái hoạt động</p>
          <select id='activityoption' >
            <option value="#">Tất Cả</option>
            <option value="#">Hoạt Động</option>
            <option value="#">Ngưng Hoạt Động</option>
         
          </select>
        </div>
        <div className="status-connection">
        <p id='statusconnect'>Chọn thời gian</p>
         <input id='datein' type="date"/>
         <input id='dateout'type="date"/>
        </div>
        <div className="search">
          <p id='keyword'>Từ khóa</p>
          <input placeholder="Nhập từ khóa" id='inputkeyword'/>
        </div>
        <div className="service-data">
            <table>
              <tr>
                <th>Mã Dịch Vụ</th>
                <th>Tên Dịch vụ</th>
                <th>Mô tả</th>
                <th>Trạng thái hoat động</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>Mô tả dịch vụ 1</td>
                <td>Hoạt động</td>
                <td><a href="#">Chi tiết</a></td>
                <td><a href="#">Cập nhật</a></td>
              </tr>
            </table>
        </div>
        <div className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladd'>Thêm dịch vụ</p>
        </div>


    </div>
    </>
  )
}
