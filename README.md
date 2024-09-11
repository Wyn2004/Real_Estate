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
    









