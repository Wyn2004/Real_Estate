import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Nhận 1 Component và truyền vào thêm 2 props và vẫn giữ lại props cũ
const withRouter = (Component) => (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Component {...props} navigate={navigate} location={location} />
    )
}

export default withRouter