import React from 'react'

// chặn sự kiện nổi bọt vì click vào thằng cha là Modal thì sẽ tắt
// hàm dưới sẽ chặn sự kiện tắt khi click vào login
// onClick={e => e.stopPropagation()}

const Login = () => {
    return (
        <div className='bg-main-50 rounded-md p-4'
            onClick={e => e.stopPropagation()}
        >
            login
        </div>
    )
}

export default Login
