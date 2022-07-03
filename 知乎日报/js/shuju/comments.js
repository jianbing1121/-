// 评论数据
var comments = {
  // 短评
  short: [
    {
      "author": "VV scott",
      "content": "我还以为是蜡笔小新那猥琐的 “耶~~~~~~”传过来的",
      "avatar": "https://pic3.zhimg.com/f3ffd8602070748dd10e1f1a0f6c6cad_l.jpg?source=8673f162",
      "time": 1655613491,
      "id": 34037068,
      "likes": 0
    },
    {
      "author": "阿漆",
      "content": "只不过是早期上网的一些人不知道怎么打出省略号，用这个~来代替。其他的还有用一串句号或者一串点代替。后来就约定俗成了",
      "avatar": "https://pic2.zhimg.com/504934a95_l.jpg?source=8673f162",
      "time": 1655601205,
      "id": 34036981,
      "likes": 0
    }
  ],
  // 长评
  long: [
    {
      "author": "精神分裂症重症患者",
      "content": "约定俗成也是需要了解才能理解的。你描述的可能确实是这个语言习惯的演变过程，但是对于我们这种没经历过早期上网的人来说，却能无师自通地使用～这个符号来表达感情，说明答主所说的跨模态整合的理论很可能是这个问题的根本原因，而非全体网民的约定俗成。",
      "avatar": "https://pica.zhimg.com/5fa9e4026b59269d0eb70315f9084edf_l.jpg?source=8673f162",
      "time": 1655605215,
      "reply_to": {
        "content": "只不过是早期上网的一些人不知道怎么打出省略号，用这个~来代替。其他的还有用一串句号或者一串点代替。后来就约定俗成了",
        "status": 0,
        "id": 34036981,
        "author": "阿漆"
      },
      "id": 34036995,
      "likes": 8
    }
  ]
};
/*  额外信息
    long_comments：长评
    popularity：点赞
    short_comments：短评
    comments：总评
*/
var extra = { "long_comments": 1, "popularity": 129, "short_comments": 2, "comments": 3 }