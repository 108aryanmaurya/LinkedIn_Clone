import React from 'react'
import './common.scss'
import { Space,Spin } from 'antd'
function Loader() {
  return (
    <div>
        <Space className='loader'>
      <p>Loading...Please...wait</p>
<Spin size='large'></Spin>
        </Space>
    </div>
  )
}

export default Loader