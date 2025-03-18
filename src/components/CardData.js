const Cardsdata = [
    {
        id: 1,
        dish: "Cheeseburger",
        imgdata: "https://img.freepik.com/free-photo/juicy-cheeseburger-rustic-wooden-board_9975-24623.jpg?t=st=1740948650~exp=1740952250~hmac=e77915f934f730e8ec25c97a57d4fbb14146185b147ed4ae56ad996abac87cfa&w=1380",
        address: "Shake Shack, New York",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 1175+ orders placed recently",
        price: 9.99,
        rating: "4.2",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 2,
        dish: "Chicago Deep-Dish Pizza",
        imgdata: "https://img.freepik.com/premium-photo/close-up-food-table_1048944-17252854.jpg?w=740",
        address: "Lou Malnati’s, Chicago",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "2525+ orders placed recently",
        price: 15.99,
        rating: "4.5",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 3,
        dish: "BBQ Ribs",
        imgdata: "https://img.freepik.com/free-photo/side-view-meat-kebab-with-grilled-potatoes-vegetables-with-sauce-fire-board_141793-5006.jpg?t=st=1740948869~exp=1740952469~hmac=19d39d4d7d1705befacfe042657dfd1ff1f2fb507fc918316b05159b096713a3&w=1060",
        address: "Franklin Barbecue, Austin",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "650+ orders placed recently",
        price: 19.99,
        rating: "4.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 4,
        dish: "Buffalo Wings",
        imgdata: "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style_2829-10161.jpg?t=st=1740948946~exp=1740952546~hmac=b38242df2e403541bfc0020ec8aa194cc960390c63ab8f09a5d85f7278f8207f&w=740",
        address: "Anchor Bar, Buffalo",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "300+ orders placed recently",
        price: 12.99,
        rating: "4.3",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 5,
        dish: "Philly Cheesesteak",
        imgdata: "https://img.freepik.com/free-photo/view-delicious-appetizing-street-food_23-2151516908.jpg?t=st=1740949211~exp=1740952811~hmac=04a071ba6015247963106663220d762baa771fb88af40462248b91cc390d3c8a&w=1060",
        address: "Pat’s King of Steaks, Philadelphia",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "1050+ orders placed recently",
        price: 13.99,
        rating: "4.6",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 6,
        dish: "Clam Chowder",
        imgdata: "https://img.freepik.com/free-photo/high-angle-food-flowers-table_23-2149629083.jpg?t=st=1740949437~exp=1740953037~hmac=80e5db430de32f96e355aeff5d1678ff751e6850927b039cb0f47698a8145228&w=1060",
        address: "Boudin Bakery, San Francisco",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "1100+ orders placed recently",
        price: 11.49,
        rating: "4.4",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 7,
        dish: "New York-Style Pizza",
        imgdata: "https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg?t=st=1740949530~exp=1740953130~hmac=a30ce40426bd4a19e59a68e9c5778e83e93cc8e5b55ad6a25fa8ebf63944cea3&w=740",
        address: "Joe’s Pizza, New York",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500+ orders placed recently",
        price: 14.99,
        rating: "4.7",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 8,
        dish: "Iced Caramel Macchiato",
        imgdata: "https://img.freepik.com/free-photo/rqyhuff6clhj4wpwei9l5b0chbcjqyvxoeuojqbzjpg_181624-60296.jpg?t=st=1740949586~exp=1740953186~hmac=cf4e3f3e081868b11a9e5cd404a32eee4635649133cc5f5e6e8d0892f90df0b0&w=740",
        address: "Starbucks, Seattle",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500+ orders placed recently",
        price: 5.99,
        rating: "4.2",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    },
    {
        id: 9,
        dish: "Double-Double Burger",
        imgdata: "https://img.freepik.com/free-photo/view-delicious-burgers-with-buns-cheese_23-2150887913.jpg?t=st=1740949677~exp=1740953277~hmac=75adf85896d107a0487048066499e12f01afe3be567bbbbff2298b484b995e64&w=1060",
        address: "In-N-Out Burger, Los Angeles",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "2525+ orders placed recently",
        price: 8.49,
        rating: "4.6",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        qnty: 0
    }
];

export default Cardsdata;
