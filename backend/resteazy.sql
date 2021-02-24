create table dishes (dishid INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(25), calories VARCHAR(25));
INSERT INTO dishes(dishid,name,calories) values (1,"Butter Chicken", "600");
create table vendors (vendorid INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(25));
INSERT INTO vendors(vendorid,name) values (1,"KFC");
create table vendor_dish (vendor_id int not null,dish_id int not null,price int, FOREIGN KEY(vendor_id) REFERENCES vendors(vendorid), FOREIGN KEY(dish_id) REFERENCES dishes(dishid), PRIMARY KEY(vendor_id,dish_id));
insert into vendor_dish values (1,1,250);


