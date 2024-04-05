import EmojiGame from './components/EmojiGame'

import './App.css'

const emojislist5 = [
  {
    id: 0,
    emojiName: 'Anguished Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Anguished_Emoji_Icon_7b234731-b1e1-40e6-9c4c-364a89b62b08_large.png?v=1571606089',
  },
  {
    id: 1,
    emojiName: 'Frowning Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Frowning_Emoji_Icon_30260b4f-d601-45f5-9bb3-836f607cacbc_large.png?v=1571606089',
  },
  {
    id: 2,
    emojiName: 'Super Surprised Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Surprised_Emoji_Icon_2_large.png?v=1571606093',
  },
  {
    id: 3,
    emojiName: 'Persevering Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Persevering_Face_Emoji_Icon_ios10_large.png?v=1571606092',
  },
  {
    id: 4,
    emojiName: 'Tired Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Tired_Face_Emoji_Icon_ios10_large.png?v=1571606093',
  },
  {
    id: 5,
    emojiName: 'Weary Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Weary_Face_Emoji_Icon_ios10_large.png?v=1571606113',
  },
  {
    id: 6,
    emojiName: 'Confused Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Confused_Face_Emoji_Icon_ios10_large.png?v=1571606090',
  },
  {
    id: 7,
    emojiName: 'Very Sad Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Very_Sad_Face_Emoji_Icon_ios10_large.png?v=1571606092',
  },
  {
    id: 8,
    emojiName: 'Smiling With Closed Eyes Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Closed_eyes_large.png?v=1571606093',
  },
  {
    id: 9,
    emojiName: 'Very Happy Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Happy_large.png?v=1571606093',
  },
  {
    id: 10,
    emojiName: 'Happy Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090',
  },
  {
    id: 11,
    emojiName: 'Unhappy Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093',
  },
  {
    id: 12,
    emojiName: 'kissing face',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Kissing_Face_Emoji_large.png?v=1571606037',
  },
  {
    id: 13,
    emojiName: 'Kissing Face with Smiling Eyes Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Kissing_Face_with_Smiling_Eyes_Emoji_large.png?v=1571606037',
  },
  {
    id: 14,
    emojiName: 'Smiling Face Emoji with Blushed Cheeks',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_with_Blushed_Cheeks_large.png?v=1571606036',
  },
  {
    id: 15,
    emojiName: 'Shyly Smiling Face Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Shyly_Smiling_Face_Emoji_large.png?v=1571606037',
  }
];

const emojislist1 = [
  {
    id: 0,
    emojiName: 'Tongue Out Emoji 2',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Tongue_Out_Emoji_2_large.png?v=1571606093',
  },
  {
    id: 1,
    emojiName: 'Tongue Out Emoji 3',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Tongue_Out_Emoji_3_large.png?v=1571606093',
  },
  {
    id: 2,
    emojiName: 'Sneezing Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Sneezing_Emoji_Icon_9164e73d-5dbb-49ff-b61e-cb7e681b19b9_large.png?v=1571606093',
  },
  {
    id: 3,
    emojiName: 'Angry Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Super_Angry_Face_Emoji_ios10_large.png?v=1571606092',
  },
  {
    id: 4,
    emojiName: 'New Mad Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/6_cc0e0b6b-4b8c-4b52-ba5d-e8da39abe776_large.png?v=1571606116',
  },
  {
    id: 5,
    emojiName: 'Hot Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/8_large.png?v=1571606116',
  },
  {
    id: 6,
    emojiName: 'Crying Emoji1',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Crying_Emoji_Icon_548f640f-8622-4d07-ad75-053eb5cf3b03_large.png?v=1571606090',
  },
  {
    id: 7,
    emojiName: 'Crying Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Disappointed_but_Relieved_Emoji_Icon_1e554748-dab1-472b-937e-54ecd95ee75c_large.png?v=1571606089',
  },
  {
    id: 8,
    emojiName: 'Smiling With Closed Eyes Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Closed_eyes_large.png?v=1571606093',
  },
  {
    id: 9,
    emojiName: 'Very Happy Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Happy_large.png?v=1571606093',
  },
  {
    id: 10,
    emojiName: 'Happy Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090',
  },
  {
    id: 11,
    emojiName: 'Sweat Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Sweat_Emoji_Icon_d6737caa-c96e-4c4f-8d51-d65d537161e3_large.png?v=1571606093',
  },
  {
    id: 12,
    emojiName: 'Heart Eyes Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Heart_Eyes_Emoji_2_large.png?v=1571606090',
  },
  {
    id: 13,
    emojiName: 'Smile Emoji With Hearts',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/17_large.png?v=1571606116',
  },
  {
    id: 14,
    emojiName: 'Smiling Face Emoji with Blushed Cheeks',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_with_Blushed_Cheeks_large.png?v=1571606036',
  },
  {
    id: 15,
    emojiName: 'Shyly Smiling Face Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Shyly_Smiling_Face_Emoji_large.png?v=1571606037',
  }
];

 const emojislist2 = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
  {
    id: 12,
    emojiName: 'kissing face',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Kissing_Face_Emoji_large.png?v=1571606037',
  },
  {
    id: 13,
    emojiName: 'Kissing Face with Smiling Eyes Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Kissing_Face_with_Smiling_Eyes_Emoji_large.png?v=1571606037',
  },
  {
    id: 14,
    emojiName: 'Smiling Face Emoji with Blushed Cheeks',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_with_Blushed_Cheeks_large.png?v=1571606036',
  },
  {
    id: 15,
    emojiName: 'Shyly Smiling Face Emoji',
    emojiUrl:
      'https://emojiisland.com/cdn/shop/products/Shyly_Smiling_Face_Emoji_large.png?v=1571606037',
  }
]

const emojislist3 = [
  {
  id: 0,
  emojiNmae:'Grinning Emoji with Smiling Eyes',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Grinning_Emoji_with_Smiling_Eyes_large.png?v=1571606037',
  },
  {
  id: 1,
  emojiName: 'Grinmacing Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Grinmacing_Face_Emoji_large.png?v=1571606065',
  },
  {
  id: 2,
  emojiName: 'Astonished Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Astonished_Face_Emoji_large.png?v=1571606037',
  },
  {
  id: 3,
  emojiName: 'Dizzy Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Dizzy_Face_Emoji_large.png?v=1571606037',
  },
  {
  id: 4,
  emojiName: 'Hushed Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Hushed_Face_Emoji_large.png?v=1571606037',
  },
  {
  id: 5,
  emojiName: 'Anguished Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Anguished_Face_Emoji_large.png?v=1571606037',
  },
  {
  id: 6,
  emojiName: 'Zipper-Mouth Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Zipper-Mouth_Face_Emoji_large.png?v=1571606065',
  },
  {
  id: 7,
  emojiName: 'Face With Thermometer Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Face_With_Thermometer_Emoji_3fd8698c-4243-42cb-ade3-996773b4529c_large.png?v=1571606036',
  },
  {
  id: 8,
  emojiName: 'Smiling Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_large.png?v=1571606036',
  },
  {
  id: 9,
  emojiName: 'Smiling Emoji with Smiling Eyes',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1571606035',
  },
  {
  id: 10,
  emojiName: 'Smirk Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smirk_Face_Emoji_large.png?v=1571606036',
  },
  {
  id: 11,
  emojiName: 'Unamused Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Unamused_Face_Emoji_761d8bf8-c78c-45b1-80b1-a86a80d2452d_large.png?v=1571606036',
  },
  {
  id: 12,
  emojiName: 'Slightly Smiling Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png?v=1571606036',
  },
  {
  id: 13,
  emojiName: 'Upside-Down Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Upside-Down_Face_Emoji_4dbbbd80-eb60-4c91-9642-83368692e361_large.png?v=1571606036',
  },
  {
  id: 14,
  emojiName: 'Tears of Joy Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Tears_of_Joy_Emoji_8afc0e22-e3d4-4b07-be7f-77296331c687_large.png?v=1571606036',
  },
  {
  id: 15,
  emojiName: 'Loudly Crying Face Emoji',
  emojiUrl: 'https://emojiisland.com/cdn/shop/products/Loudly_Crying_Face_Emoji_large.png?v=1571606037',
  },
  ];

  const emojislist4 = [
    {
    id: 0,
    emojiNmae:'Crying Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Crying_Emoji_Icon_548f640f-8622-4d07-ad75-053eb5cf3b03_large.png?v=1571606090',
    },
    {
    id: 1,
    emojiNmae:'Crying Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Disappointed_but_Relieved_Emoji_Icon_1e554748-dab1-472b-937e-54ecd95ee75c_large.png?v=1571606089',
    },
    {
    id: 2,
    emojiNmae:'Worried Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Worried_Emoji_large.png?v=1571606113',
    },
    {
    id: 3,
    emojiNmae:'Frowning Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Frowning_Emoji_Icon_30260b4f-d601-45f5-9bb3-836f607cacbc_large.png?v=1571606089',
    },
    {
    id: 4,
    emojiNmae:'Surprised Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Surprised_Emoji_Icon_96bb4180-3119-4a67-85f5-3a62e5127514_large.png?v=1571606114',
    },
    {
    id: 5,
    emojiNmae:'Surprised Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Emoji_Icon_Surprised_with_teeth_large.png?v=1571606093',
    },
    {
    id: 6,
    emojiNmae:'Super Surprised Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Surprised_Emoji_Icon_2_large.png?v=1571606093',
    },
    {
    id: 7,
    emojiNmae:'Persevering Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Persevering_Face_Emoji_Icon_ios10_large.png?v=1571606092',
    },
    {
    id: 8,
    emojiNmae:'Tired Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Tired_Face_Emoji_Icon_ios10_large.png?v=1571606093',
    },
    {
    id: 9,
    emojiNmae:'Weary Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Weary_Face_Emoji_Icon_ios10_large.png?v=1571606113',
    },
    {
    id: 10,
    emojiNmae:'Confounded Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Confounded_Face_Emoji_Icon_ios10_large.png?v=1571606090',
    },
    {
    id: 11,
    emojiNmae:'Smiling With Closed Eyes Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Closed_eyes_large.png?v=1571606093',
    },
    {
    id: 12,
    emojiNmae:'Very Happy Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Happy_large.png?v=1571606093',
    },
    {
    id: 13,
    emojiNmae:'Smiling Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Smiling_large.png?v=1571606089',
    },
    {
    id: 14,
    emojiNmae:'Flushed Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Flushed_Emoji_Icon_5e6ce936-4add-472b-96ba-9082998adcf7_large.png?v=1571606089',
    },
    {
    id: 15,
    emojiNmae:'Eye Roll Emoji',
    emojiUrl: 'https://emojiisland.com/cdn/shop/products/Rolling_Eyes_Emoji_Icon_d5a8401c-e785-4a6f-975d-856eadfd95de_large.png?v=1571606093',
    },
    
    ];

  const emojislist6 = [
      {
      id: 0,
      emojiNmae:'Smiling Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_large.png?v=1571606036',
      },
      {
      id: 1,
      emojiNmae:'Smiling Emoji with Eyes Opened',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1571606036',
      },
      {
      id: 2,
      emojiNmae:'Smiling Emoji with Smiling Eyes',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1571606035',
      },
      {
      id: 3,
      emojiNmae:'Smiling Face with Tightly Closed eyes',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Tightly_Closed_eyes_large.png?v=1571606036',
      },
      {
      id: 4,
      emojiNmae:'Smirk Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smirk_Face_Emoji_large.png?v=1571606036',
      },
      {
      id: 5,
      emojiNmae:'Unamused Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Unamused_Face_Emoji_761d8bf8-c78c-45b1-80b1-a86a80d2452d_large.png?v=1571606036',
      },
      {
      id: 6,
      emojiNmae:'Sad Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037',
      },
      {
      id: 7,
      emojiNmae:'Relieved Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Relieved_Emoji_large.png?v=1571606037',
      },
      {
      id: 8,
      emojiNmae:'Persevering Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Persevering_Face_Emoji_large.png?v=1571606037',
      },
      {
      id: 9,
      emojiNmae:'Tired Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Tired_Face_Emoji_a5bdf862-1509-419f-9e2a-c9208ae1938b_large.png?v=1571606036',
      },
      {
      id: 10,
      emojiNmae:'Weary Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Weary_Face_Emoji_91a42b7e-9581-4fa5-8de4-57481355d505_large.png?v=1571606036',
      },
      {
      id: 11,
      emojiNmae:'Confounded Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Confounded_Face_Emoji_large.png?v=1571606037',
      },
      {
      id: 12,
      emojiNmae:'Disappointed Face Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Disappointed_Face_Emoji_large.png?v=1571606037',
      },
      {
      id: 13,
      emojiNmae:'Sad Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Very_sad_large.png?v=1571606093',
      },
      {
      id: 14,
      emojiNmae:'Happy Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090',
      },
      {
      id: 15,
      emojiNmae:'Angry Emoji',
      emojiUrl: 'https://emojiisland.com/cdn/shop/products/Angry_Emoji_large.png?v=1571606038',
      },
      
      ];


const App = () => <EmojiGame emojisList={emojislist6} />

export default App