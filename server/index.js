// khởi tạo express server, cors
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/dbConnect')

// lấy biến từ file môi trường env
require('dotenv').config()

const app = express()

// tạo middleware
app.use(cors({
    // cho phep domain client nào truy cập vào server
    origin: process.env.CLIENT_URL
}))
//tạo middleware convert data client gửi lên thành json
app.use(express.json()) 
//tạo middleware đọc data gửi lên vd như method post gửi lên body, param...
//  hàm này cho phép đọc và phân tích data gửi lên
app.use(express.urlencoded({ extended: true })) 

// Connect db
dbConnect()


// lắng nghe app ở port 3000
// hàm listen có thể truyền vào 1 callback
const PORT = process.env.PORT || 7777
app.listen(PORT, () => console.log(":::::: Server Ready Port: " + PORT))
