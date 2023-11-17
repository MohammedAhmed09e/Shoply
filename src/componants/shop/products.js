import headphone5 from "../../Assets/headphone/headphone5.jpg";
import headphone1 from "../../Assets/headphone/headphone1.jpg";
import headphone2 from "../../Assets/headphone/headphone2.jpg";
import headphone3 from "../../Assets/headphone/headphone3.jpg";
import headphone4 from "../../Assets/headphone/headphone4.jpg";
import headphone6 from "../../Assets/headphone/headphone6.jpg";
import headphone7 from "../../Assets/headphone/headphone7.jpg";
import headphone8 from "../../Assets/headphone/headphone8.jpg";
import headphone9 from "../../Assets/headphone/headphone9.jpg";
import headphone10 from "../../Assets/headphone/headphone10.jpg";
import laptop1 from "../../Assets/laptop/laptop1.jpg";
import laptop2 from "../../Assets/laptop/laptop2.jpg";
import laptop3 from "../../Assets/laptop/laptop3.jpg";
import laptop4 from "../../Assets/laptop/laptop4.jpg";
import laptop5 from "../../Assets/laptop/laptop5.jpg";
import laptop6 from "../../Assets/laptop/laptop6.jpg";
import laptop7 from "../../Assets/laptop/laptop7.jpg";
import laptop8 from "../../Assets/laptop/laptop8.jpg";
import laptop9 from "../../Assets/laptop/laptop9.jpg";
import laptop10 from "../../Assets/laptop/laptop10.jpg";
import watch1 from "../../Assets/watch/watch1.avif";
import watch2 from "../../Assets/watch/watch2.jpg";
import watch3 from "../../Assets/watch/watch3.jpg";
import watch4 from "../../Assets/watch/watch4.jpg";
import watch5 from "../../Assets/watch/watch5.jpg";
import watch6 from "../../Assets/watch/watch6.jpg";
import watch7 from "../../Assets/watch/watch7.jpg";
import watch8 from "../../Assets/watch/watch8.jpg";
import watch9 from "../../Assets/watch/watch9.jpg";
import watch10 from "../../Assets/watch/watch10.jpg";
let Products = [
  {
    id: 1,
    name: ` headphone samsung Akj`,
    count: 1,
    page:"1",
    image: headphone5,
    catorage: "headPhone",
    pargraph: `Beautiful white Samsung headphones to take with you everywhere with pure sound`,
    price: 132,
  },
  {
    id: 2,
    name: `dell 120`,
    image: laptop1,
    count: 1,
    page:"1",
    catorage: "laptop",
    pargraph: `Dell red laptop with a wide screen so you can enjoy watching it. Buy it now`,
    price: 230,
  },
  {
    id: 3,
    name: `smart watch honor 110`,
    image: watch4,
    count: 1,
    page:"1",
    catorage: "watch",
    pargraph: `Honor smart watch equipped with the Internet and Bluetooth. Buy now`,
    price: 90,
  },
  {
    id: 4,
    name: `smart watch samsung `,
    image: watch3,
    count: 1,
    page:"1",
    catorage: "watch",
    pargraph: `The red Samsung watch is equipped with most of what you need. Buy it now`,
    price: 80,
    type:"premium",
    special:"crown"
  },
  {
    id: 5,
    name: `headphone huawei`,
    image: headphone2,
    page:"1",
    catorage: "headPhone",
    pargraph: `Huawei red headphone, pure sound - beautiful appearance. Buy now`,
    price: 130,
  },
  {
    id: 6,
    name: `laptop dell`,
    image: laptop4,
    count: 1,
    page:"1",
    best: laptop4,
    nameB: `laptop dell`,
    addb: "add to cart",
    class: "fr",
    last: 500,
    catorage: "laptop",
    pargraph: `Dell laptop with a high-frequency, clear screen and very light. Buy now`,
    priceB: 410,
    price: 410,
  },
  {
    id: 7,
    name: `laptop samsung`,
    image: laptop8,
    count: 1,
    page:"1",
    catorage: "laptop",
    pargraph: `Beautiful Samsung laptop - lightweight. Buy now`,
    price: 246,
  },
  {
    id: 8,
    name: `xiaomi smart watch`,
    image: watch10,
    count: 1,
    page:"1",
    catorage: "watch",
    pargraph: `Xiaomi smart watch with a different and wonderful design. Buy now`,
    price: 120,
    type:"premium",
    special:"crown"
  },
  {
    id: 9,
    name: `headphone samsung 4`,
    image: headphone4,
    count: 1,
    page:"1",
    catorage: "headPhone",
    pargraph: `The Samsung headphone is very comfortable and has a beautiful and decent design. Buy now`,
    price: 99,
  },
  {
    id: 10,
    name: `headphone xiaomi`,
    image: headphone10,
    count: 1,
    page:"1",
    catorage: "headPhone",
    pargraph: `Xiaomi headphone with a wonderful and different design. Buy it now`,
    price: 230,
  },
  {
    id: 11,
    page:"2",
    name: `ikea 128`,
    image: watch6,
    count: 1,
    catorage: "watch",
    pargraph: `An IKEA watch dedicated to sports to help you exercise. Buy it now`,
    price: 80,
  },
  {
    id: 12,
    page:"2",
    name: `headphone seanlopt`,
    image: headphone8,
    count: 1,
    catorage: "headPhone",
    pargraph: `Cinelopit headphone with a wonderful design, quiet and noise canceling. Buy it now`,
    price: 170,
  },
  {
    id: 13,
    page:"2",
    name: `laptop asur`,
    image: laptop3,
    count: 1,
    catorage: "laptop",
    pargraph: `The Asur gaming laptop has comfortable illuminated buttons. Buy it now`,
    price: 310,
  },
  {
    id: 14,
    page:"2",
    name: `smart watch `,
    image: watch7,
    count: 1,
    catorage: "watch",
    pargraph: `The smart watch is equipped with G, but is comfortable for the hand. Buy it now`,
    price: 87,
  },
  {
    id: 15,
    page:"2",
    name: `headphone RPS`,
    image: headphone9,
    count: 1,
    catorage: "headPhone",
    pargraph: `RBS gaming headset, red in color, comfortable for the ears. Buy it now`,
    price: 450,
    type:"premium",
    special:"crown"
  },
  {
    id: 16,
    page:"2",
    name: `smart watch mockup`,
    nameB: `smart watch mockup`,
    image: watch9,
    count: 1,
    best: watch9,
    addb: "add to cart",
    last: 220,
    catorage: "watch",
    pargraph: `The Mockup smart watch is designed to provide com
    page:"2",fort in your hand. Buy it now`,
    priceB: 190,
    price: 190,
  },
  {
    id: 17,
    page:"2",
    name: `smart headphone`,
    image: headphone1,
    count: 1,
    catorage: "headPhone",
    pargraph: `The smart watch is black in color and has a calm design. Buy it now`,
    price: 173,
  },
  {
    id: 18,
    page:"2",
    name: `smart watch`,
    image: watch1,
    count: 1,
    catorage: "watch",
    pargraph: `The quiet, light smart watch has a wonderful and comfortable design. Buy it now`,
    price: 98,
  },
  {
    id: 19,
    page:"2",
    name: `headphone`,
    image: headphone6,
    count: 1,
    catorage: "headPhone",
    pargraph: `The wonderful orange and white sound-insulating headphone. Buy it now`,
    price: 169,
  },
  {
    id: 20,
    page:"2",
    name: `huawei laptop`,
    image: laptop10,
    count: 1,
    catorage: "laptop",
    pargraph: `Huawei's lightweight laptop is suitable for heavy programs designed for work. Buy it now`,
    price: 580,
  },
  {
    id: 21,
    name: `laptop hp 198`,
    nameB: `laptop hp 198`,
    image: laptop6,
    count: 1,
    page:"3",
    best: laptop6,
    addb: "add to cart",
    last: 300,
    catorage: "laptop",
    pargraph: `HP laptop with a screen with very high frequency and clarity. Buy it now`,
    priceB: 242,
    price: 242,
  },
  {
    id: 22,
    name: `headphone smart 120`,
    image: headphone3,
    count: 1,
    page:"3",
    catorage: "headPhone",
    pargraph: `The smart speaker has a comfortable design, and is soundproof. Buy it now`,
    price: 274,
  },
  {
    id: 23,
    name: `laptop huawei 190`,
    image: laptop2,
    count: 1,
    page:"3",
    catorage: "laptop",
    pargraph: `Huawei laptop is fast, responsive, lightweight, red color covers most of it. Buy it now`,
    price: 360,
    type:"premium",
    special:"crown"
  },
  {
    id: 24,
    name: `headphone mu201`,
    nameB: `headphone mu201`,
    image: headphone7,
    best: headphone7,
    count: 1,
    page:"3",
    last: 200,
    addb: "add to cart",
    catorage: "headPhone",
    pargraph: `A red smart speaker designed to listen to music and beautiful things. Buy it now`,
    priceB: 132,
    price: 132,
  },
  {
    id: 25,
    name: `huawei laptop 430`,
    image: laptop9,
    count: 1,
    page:"3",
    catorage: "laptop",
    pargraph: `Huawei laptop designed for work, strong and can withstand heavy software. Buy it now`,
    price: 210,
  },
  {
    id: 26,
    name: `smart watch galaxy`,
    nameB: `smart watch galaxy`,
    image: watch8,
    count: 1,
    page:"3",
    best: watch8,
    addb: "add to cart",
    last: 170,
    catorage: "watch",
    pargraph: `The smart bracelet from Galaxy has a slim design and is equipped with sports equipment. Buy it now`,
    priceB: 130,
    price: 130,
  },
  {
    id: 27,
    name: `smart watch`,
    image: watch2,
    count: 1,
    page:"3",
    catorage: "watch",
    pargraph: `The pink smart watch is designed for sports and is comfortable for the hand. Buy it now`,
    price: 230,
  },
  {
    id: 28,
    name: `hp 410`,
    image: laptop5,
    count: 1,
    page:"3",
    catorage: "laptop",
    pargraph: `HP laptop with a wonderful design designed for lightweight work. Buy it now`,
    price: 180,
  },
  {
    id: 29,
    name: `lenovo 130`,
    image: laptop7,
    count: 1,
    page:"3",
    catorage: "laptop",
    pargraph: `Lenovo laptop dedicated to music work, do not miss it and buy it now`,
    price: 260,
    type:"premium",
    special:"crown"
  },
  {
    id: 30,
    name: `divya smart watch`,
    image: watch5,
    count: 1,
    page:"3",
    catorage: "watch",
    pargraph: `The smart bracelet from Devia is designed for exercise and is equipped with Bluetooth buy it now`,
    price: 78,
  },
];
let laptop = [
  {
    id: 1,
    name: `lenovo 130`,
    image: `laptop7.jpg`,
    pargraph: `Lenovo laptop dedicated to music work, do not miss it and buy it now`,
    price: 260,
  },
  {
    id: 2,
    name: `laptop huawei 190`,
    image: `laptop2.jpg`,
    pargraph: `Huawei laptop is fast, responsive, lightweight, red color covers most of it. Buy it now`,
    price: 360,
  },
  {
    id: 3,
    name: `huawei laptop 430`,
    image: `laptop9.jpg`,
    pargraph: `Huawei laptop designed for work, strong and can withstand heavy software. Buy it now`,
    price: 210,
  },
  {
    id: 4,
    name: `hp 410`,
    image: `laptop5.jpg`,
    pargraph: `HP laptop with a wonderful design designed for lightweight work. Buy it now`,
    price: 180,
  },
  {
    id: 5,
    name: `laptop hp 198`,
    image: `laptop6.jpg`,
    pargraph: `HP laptop with a screen with very high frequency and clarity. Buy it now`,
    price: 242,
  },
  {
    id: 6,
    name: `laptop asur`,
    image: `laptop3.jpg`,
    pargraph: `The Asur gaming laptop has comfortable illuminated buttons. Buy it now`,
    price: 310,
  },
  {
    id: 7,
    name: `laptop dell`,
    image: `laptop4.jpg`,
    pargraph: `Dell laptop with a high-frequency, clear screen and very light. Buy now`,
    price: 410,
  },
  {
    id: 8,
    name: `laptop samsung`,
    image: `laptop8.jpg`,
    pargraph: `Beautiful Samsung laptop - lightweight. Buy now`,
    price: 246,
  },
  {
    id: 9,
    name: `dell 120`,
    image: `laptop1.jpg`,
    pargraph: `Dell red laptop with a wide screen so you can enjoy watching it. Buy it now`,
    price: 230,
  },
  {
    id: 10,
    name: `huawei laptop`,
    image: `laptop10.jpg`,
    pargraph: `Huawei's lightweight laptop is suitable for heavy programs designed for work. Buy it now`,
    price: 580,
  },
];
let headphone = [
  {
    id: 1,
    name: ` headphone samsung Akj`,
    image: `headphone5.jpg`,
    pargraph: `Beautiful white Samsung headphones to take with you everywhere with pure sound`,
    price: 132,
  },
  {
    id: 2,
    name: `headphone huawei`,
    image: `headphone2.jpg`,
    pargraph: `Huawei red headphone, pure sound - beautiful appearance. Buy now`,
    price: 130,
  },
  {
    id: 3,
    name: `headphone samsung 4`,
    image: `headphone4.jpg`,
    pargraph: `The Samsung headphone is very comfortable and has a beautiful and decent design. Buy now`,
    price: 99,
  },
  {
    id: 4,
    name: `headphone xiaomi`,
    image: `headphone10.jpg`,
    pargraph: `Xiaomi headphone with a wonderful and different design. Buy it now`,
    price: 230,
  },
  {
    id: 5,
    name: `headphone seanlopt`,
    image: `headphone8.jpg`,
    pargraph: `Cinelopit headphone with a wonderful design, quiet and noise canceling. Buy it now`,
    price: 170,
  },
  {
    id: 6,
    name: `headphone RPS`,
    image: `headphone9.jpg`,
    pargraph: `RBS gaming headset, red in color, comfortable for the ears. Buy it now`,
    price: 450,
  },
  {
    id: 7,
    name: `smart headphone`,
    image: `headphone1.jpg`,
    pargraph: `The smart headphone is black in color and has a calm design. Buy it now`,
    price: 173,
  },
  {
    id: 8,
    name: `headphone`,
    image: `headphone6.jpg`,
    pargraph: `The wonderful orange and white sound-insulating headphone. Buy it now`,
    price: 169,
  },

  {
    id: 9,
    name: `headphone smart 120`,
    image: `headphone3.jpg`,
    pargraph: `The smart speaker has a comfortable design, and is soundproof. Buy it now`,
    price: 274,
  },
  {
    id: 10,
    name: `headphone mu201`,
    image: `headphone7,jpg`,
    pargraph: `A red smart speaker designed to listen to music and beautiful things. Buy it now`,
    price: 132,
  },
];
let watch = [
  {
    id: 1,
    name: `smart watch honor 110`,
    image: `watch4.jpg`,
    pargraph: `Honor smart watch equipped with the Internet and Bluetooth. Buy now`,
    price: 90,
  },
  {
    id: 2,
    name: `smart watch samsung `,
    image: `watch3.jpg`,
    pargraph: `The red Samsung watch is equipped with most of what you need. Buy it now`,
    price: 80,
  },
  {
    id: 3,
    name: `smart watch galaxy`,
    image: `watch8.jpg`,
    pargraph: `The smart bracelet from Galaxy has a slim design and is equipped with sports equipment. Buy it now`,
    price: 130,
  },
  {
    id: 4,
    name: `smart watch`,
    image: `watch2.jpg`,
    pargraph: `The pink smart watch is designed for sports and is comfortable for the hand. Buy it now`,
    price: 230,
  },
  {
    id: 5,
    name: `smart watch mockup`,
    image: `watch11.jpg`,
    pargraph: `The Mockup smart watch is designed to provide comfort in your hand. Buy it now`,
    price: 190,
  },
  {
    id: 6,
    name: `smart watch`,
    image: `watch1.avif`,
    pargraph: `The quiet, light smart watch has a wonderful and comfortable design. Buy it now`,
    price: 98,
  },
  {
    id: 7,
    name: `divya smart watch`,
    image: `watch5.jpg`,
    pargraph: `The smart bracelet from Devia is designed for exercise and is equipped with Bluetooth buy it now`,
    price: 78,
  },
  {
    id: 8,
    name: `ikea 128`,
    image: `watch6.jpg`,
    pargraph: `An IKEA watch dedicated to sports to help you exercise. Buy it now`,
    price: 80,
  },
  {
    id: 9,
    name: `xiaomi smart watch`,
    image: `watch10.jpg`,
    pargraph: `Xiaomi smart watch with a different and wonderful design. Buy now`,
    price: 120,
  },
  {
    id: 10,
    name: `smart watch `,
    image: `watch7.jpg`,
    pargraph: `The smart watch is equipped with G, but is comfortable for the hand. Buy it now`,
    price: 87,
  },
];
export default Products;
