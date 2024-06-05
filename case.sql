
create table category
(
    cat_id int primary key identity(1,1),
    cat_name varchar(100),
    prod_id int,
    constraint cat_prod_rel foreign key(prod_id) references product(prod_id)
)

create table product
(
    prod_id int primary key identity(1,1),
    prod_name varchar(100)
)


insert into category values (1, "Kategori1"), (2, "Kategori2")
insert into product values (1, "Product1"), (2, "Product2")

select prod_name from category inner join product on category.cat_id = product.prod_id where prod_id = 2


