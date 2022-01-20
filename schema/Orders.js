cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [orderId, customerId, customerName, country, city, productId, productName, orderDate, shipDate]
    },
    
    quantity: {
      sql: `quantity`,
      type: `sum`
    },
    
    discount: {
      sql: `discount`,
      type: `sum`
    }
  },
  
  dimensions: {
    orderId: {
      sql: `order_id`,
      type: `string`
    },
    
    shipMode: {
      sql: `ship_mode`,
      type: `string`
    },
    
    customerId: {
      sql: `customer_id`,
      type: `string`
    },
    
    customerName: {
      sql: `customer_name`,
      type: `string`
    },
    
    segment: {
      sql: `segment`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    postalCode: {
      sql: `postal_code`,
      type: `string`
    },
    
    region: {
      sql: `region`,
      type: `string`
    },
    
    productId: {
      sql: `product_id`,
      type: `string`
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    subCategory: {
      sql: `sub_category`,
      type: `string`
    },
    
    productName: {
      sql: `product_name`,
      type: `string`
    },
    
    orderDate: {
      sql: `order_date`,
      type: `time`
    },
    
    shipDate: {
      sql: `ship_date`,
      type: `time`
    }
  }
});
