create table orders (
    row_num 		int	primary key
    , order_id		text 
    , order_date	timestamp without time zone
    , ship_date		timestamp without time zone
    , ship_mode		text
    , customer_id	text
    , customer_name	text
    , segment		text
    , country		text
    , city			text
    , state			text
    , postal_code	text
    , region		text
    , product_id	text
    , category		text
    , sub_category	text
    , product_name	text
    , sales			numeric
    , quantity		numeric
    , discount		numeric
    , profit		numeric
);