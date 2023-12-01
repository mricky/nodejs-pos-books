"# nodejs-pos-books" 

# Generate Model include migration using sequelize
1. Table Users 
npx sequelize-cli model:generate --name User --attributes name:string,password:string,email:string,role:enum
2. Table Categories
npx sequelize-cli model:generate --name Category --attributes name:string,user:integer
3. Table Books
npx sequelize-cli model:generate --name Book --attributes category:integer,user:integer,title:string,author:string,image:text,published:date,price:integer,stock:integer
4. Table Transaction
npx sequelize-cli model:generate --name Transaction --attributes invoice:string,user:integer,date:date

5. Detail Transaction
npx sequelize-cli model:generate --name DetailTransaction --attributes transaction:integer,book:integer,titleBook:string,authorBook:string,imageBook:text,priceBook:integer,quantity:integer
# Untuk Menjalankan dan Menbatalkan Migration
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo