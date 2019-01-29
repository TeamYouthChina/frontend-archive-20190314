let answers =[
  {
    // 用户信息
    user: {
      id:'id',
      name: 'John Doe',
      img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg',

    },
    // 回答内容
    content: '问题的答案，这个人回答了这个问题',
    // 同意和否定
    agree: '123',
    disagree:'123',
    // 评论
    comments: [
      {
        // 用户信息
        user: {
          id:'id',
          name: 'hanmeimei',
          img: 'https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg'
        },
        content: 'ollit anim id est laborum.',
        // 回复
        reply: [
          {
            from: {
              name: 'Tommy Smith',
              img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
            },
            to: 'to',
            content: '123'
          },
        ]
      },

    ]
  },
  {
    user: {
      name: 'John Doe',
      img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg',

    },
    content: '问题的答案，这个人回答了这个问题',
    agree: '123',
    comments: [
      {
        user: {
          name: 'hanmeimei',
          img: 'https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg'
        },
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
          '                                    pariatur. Excepteur sint occaecat\n' +
          '                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        reply: [
          {
            from: {
              name: 'Tommy Smith',
              img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
            },
            to: 'to',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n' +
              '                                            doloremque\n' +
              '                                            laudantium, totam rem aperiam, eaque\n' +
              '                                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
              '                                            sunt\n' +
              '                                            explicabo.'
          },
          {
            from: {
              name: 'Tommy Smith',
              img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
            },
            to: '',
            content: 'this is content'
          },
          {
            from: {
              name: 'Tommy Smith',
              img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
            },
            to: 'to',
            content: 'this is content'
          },
          {
            from: {
              name: 'Tommy Smith',
              img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
            },
            to: 'to',
            content: 'this is content'
          },
        ]
      },

    ]
  },
]
