import images from '~/assets/images';

const data = {
  bannerHeading: {
    smallTitle: 'Expensive But The Best',
    largeTitle: 'Deliciousness jumping into the mouth',
    captions: [
      "Together creeping heaven upon third dominion be upon won't darkness rule land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning",
    ],
    backgroundImage: images.bannerBg,
    overlayImage: images.bannerOverlay,
  },
  exclusiveHeading: {
    smallTitle: 'Popular Dishes',
    largeTitle: 'Our Exclusive Items',
  },
  aboutHeading: {
    smallTitle: 'Our History',
    largeTitle: 'Where The Food’s As Good As The Root Beer.',
    subLargeTitle: 'Satisfying people hunger for simple pleasures',
    captions: [
      'May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole deep',
    ],
    backgroundImage: images.about,
  },
  chefsHeading: {
    smallTitle: 'Team Member',
    largeTitle: 'Our Experience Chefs',
  },
  reservationHeading: {
    smallTitle: 'Reservation',
    largeTitle: 'Book A Table',
    backgroundImage: images.reservationImage,
  },
  reservationForm: [
    { id: 1, type: 'text', formName: 'name', placeHolder: 'Name' },
    { id: 2, type: 'email', formName: 'email', placeHolder: 'email address' },
    {
      id: 3,
      type: 'select',
      formName: 'person',
      placeHolder: 'persons',
      selectData: [
        'Number of guest 1',
        'Number of guest 2',
        'Number of guest 3',
        'Number of guest 4',
      ],
    },
    { id: 4, type: 'tel', formName: 'phone', placeHolder: 'phone number' },
    { id: 5, type: 'text', formName: 'date', placeHolder: 'date' },
    {
      id: 6,
      type: 'select',
      formName: 'time',
      placeHolder: 'time',
      selectData: [
        '8 AM TO 10AM',
        '8 AM TO 10AM',
        '8 AM TO 10AM',
        '8 AM TO 10AM',
        '8 AM TO 10AM',
        '8 AM TO 10AM',
        '8 AM TO 10AM',
        '8 AM TO 10AM',
      ],
    },
    {
      id: 7,
      type: 'text',
      formName: 'note',
      placeHolder: 'your note',
      rowNumber: 4,
    },
  ],
  introVideoHome: {
    largeTitle: 'expect the best',
    backgroundImage: images.introVideoImage,
  },
  introVideoAbout: {
    largeTitle: 'about us',
    backgroundImage: images.introVideoImage,
  },
  introVideoMenu: {
    largeTitle: 'food menu',
    backgroundImage: images.introVideoImage,
  },
  introVideoChefs: {
    largeTitle: 'experienced chefs',
    backgroundImage: images.introVideoImage,
  },
  introVideoContact: {
    largeTitle: 'contact us',
    backgroundImage: images.introVideoImage,
  },
  foodItemData: [
    {
      id: 1,
      images: images.food_item[0],

      name: 'Indian Burger',
      description:
        'Was brean shed moveth day yielding tree yielding day were female and',
      price: 111,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
    {
      id: 2,
      images: images.food_item[1],

      name: 'Cremy Noodles',
      description:
        'Was brean shed moveth day yielding tree yielding day were female and',
      price: 222,
      ingredients: [],
      rating: 5,
      isExist: false,
    },
    {
      id: 3,
      images: images.food_item[2],

      name: 'Cremy Noodles',
      description:
        'Was brean shed moveth day yielding tree yielding day were female and',
      price: 333,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
    {
      id: 4,
      images: images.food_item[0],

      name: 'Cremy Noodles',
      description:
        'Was brean shed moveth day yielding tree yielding day were female and',
      price: 444,
      ingredients: [],
      rating: 5,
      isExist: false,
    },
    {
      id: 5,
      images: images.food_item[1],

      name: 'Cremy Noodles',
      description:
        'Was brean shed moveth day yielding tree yielding day were female and',
      price: 555,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
    {
      id: 6,
      images: images.food_item[2],

      name: 'Cremy Noodles',
      description:
        'Was brean shed moveth day yielding tree yielding day were female and',
      price: 666,
      ingredients: [],
      rating: 5,
      isExist: false,
    },
  ],
  foodHeading: {
    smallTitle: 'Popular Menu',
    largeTitle: 'Delicious Food Menu',
  },
  foodMenuData: [
    {
      id: 1,
      images: images.food_menu[0],

      name: 'Pork Sandwich',
      description: "They're wherein heaven seed hath nothing",
      price: 111,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
    {
      id: 2,
      images: images.food_menu[1],

      name: 'Easter Delight',
      description: "They're wherein heaven seed hath nothing",
      price: 111,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
    {
      id: 3,
      images: images.food_menu[2],

      name: 'Roasted Marrow',
      description: "They're wherein heaven seed hath nothing",
      price: 111,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
    {
      id: 4,
      images: images.food_menu[3],

      name: 'Tiener Schnitze',
      description: "They're wherein heaven seed hath nothing",
      price: 111,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
    {
      id: 5,
      images: images.food_menu[4],

      name: 'Summer Cooking',
      description: "They're wherein heaven seed hath nothing",
      price: 111,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
    {
      id: 6,
      images: images.food_menu[5],

      name: 'Chicken Roast',
      description: "They're wherein heaven seed hath nothing",
      price: 111,
      ingredients: [],
      rating: 5,
      isExist: true,
    },
  ],
  chefsData: [
    {
      id: 1,
      image: images.chefs[0],
      name: 'Adam Billiard',
      position: 'Chef Master',
    },
    {
      id: 2,
      image: images.chefs[1],
      name: 'Fred Macyard',
      position: 'Chef Master',
    },
    {
      id: 3,
      image: images.chefs[2],
      name: 'Justin Stuard',
      position: 'Chef Master',
    },
  ],
  reviewHeading: {
    smallTitle: 'Testimonials',
    largeTitle: 'Customers Feedback',
  },
  reviewData: [
    {
      id: 1,
      image: images.reviewImage,
      name: 'Moran Cameron',
      reviewMessage:
        "Also made from. Give may saying meat there from heaven it lights face had is gatheredgod dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place",
    },
    {
      id: 2,
      image: images.reviewImage,
      name: 'Moran Cameron',
      reviewMessage:
        "Also made from. Give may saying meat there from heaven it lights face had is gatheredgod dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place",
    },
    {
      id: 3,
      image: images.reviewImage,
      name: 'Moran Cameron',
      reviewMessage:
        "Also made from. Give may saying meat there from heaven it lights face had is gatheredgod dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place",
    },
  ],
  socialIcon: [],
  drink: [
    {
      id: 1,
      image: ['', '', ''],
      name: '',
      destination: '',
      price: 999,
      rating: 5,
      isExist: false,
    },
  ],
};

export default data;
