- Khởi tạo server: cd vào server
    - npm init -y
    "dev": "nodemon index.js" : khởi tạo khi server thay đổi thì web tự động reload lại
    "start": "node index.js"  : khởi tạo khi server chạy
    - tải vài thư viện:
        - npm i express dotenv cors
            express: 
            dotenv: đọc file môi trường
            cors: liên lạc giữa client và server
        - npm i -D nodemon

    - cài sequelize 
        - npm install --save sequelize
        - dùng postgrsDB : npm install --save pg pg-hstore
        - npm install --save-dev sequelize-cli
        - tạo model, migration sequelize: npx sequelize-cli init
        - tạo table data (ví dụ): npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
        - tạo file .sequelizerc, copy code mẫu trên web sequelize

- Khởi tạo client: cd client
    - Cài vite: npm create vite@latest
    - Cài tailWindCss:  npm install -D tailwindcss postcss autoprefixer
                        npx tailwindcss init -p
    - Config absolute path: file jsconfig.json và file vite.config.js
    - Cài vài thư viện ngon ngon: npm i react-router-dom moment zustand axios sweetalert2 react-toastify react-icons clsx tailwind-merge
        - Ý nghĩa thư viện: 
            react-router-dom: Thư viện để quản lý routing (điều hướng) trong ứng dụng React, giúp chuyển đổi giữa các trang mà không cần tải lại toàn bộ trang.

            moment: Thư viện hỗ trợ xử lý và định dạng thời gian, giúp dễ dàng thao tác với ngày giờ trong ứng dụng.

            zustand: Một thư viện quản lý trạng thái cho React, nhẹ và dễ sử dụng, giúp quản lý dữ liệu trong ứng dụng mà không cần quá nhiều cấu trúc phức tạp.

            axios: Thư viện để thực hiện các yêu cầu HTTP (GET, POST, PUT, DELETE, v.v.) từ trình duyệt hoặc Node.js. Nó được sử dụng phổ biến để giao tiếp với các API.

            sweetalert2: Thư viện dùng để hiển thị các pop-up (cửa sổ thông báo) đẹp mắt với các tính năng đa dạng, tùy chỉnh linh hoạt, giúp tương tác với người dùng.

            react-toastify: Thư viện giúp hiển thị các thông báo (toasts) dạng ngắn gọn ở một góc màn hình, thường được sử dụng để hiển thị các thông tin như thành công, lỗi, hoặc cảnh báo mà không làm gián đoạn trải nghiệm người dùng.











