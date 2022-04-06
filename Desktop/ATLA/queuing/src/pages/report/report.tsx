import React from 'react'
import MenuBar from '../../components/menubar'
import '../../css/device.css'


export default function report() {
  

  

  return (
    <>
    <div className="device">
        <MenuBar/>
        <div className="link">
        <h4 id='link1'>Thiết bi --</h4> <h4 id='link2'>Lập báo cáo</h4>
        </div>
      

        <div className="status-activity">
          <p id='statusactivity'>Chọn thời gian</p>
          <input id='datein' type="date"/>
         <input id='dateout'type="date"/>
        </div>
       
        
        <div className="device-data">
            <table>
              <tr>
                <th>Số thứ tự</th>
                <th>Tên Dịch vụ</th>
                <th>Thời gian cấp</th>
                <th>Tình trạng</th>
                <th>Nguồn cấp</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>2010001</td>
                <td>Khám dịch vụ</td>
                <td>7:20 -7/10/2021</td>
                <td>Đang chờ</td>
                <td>Kiosk</td>
              </tr>
            </table>
        </div>
        <div className="add-device">
          <p id='addbtn'>+</p>
          <p id='labeladd'>Tải về</p>
        </div>


    </div>
    </>
  )
}
