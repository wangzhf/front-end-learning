export default {

  getlunbo: (config) => {
    console.log(config);
    var data = {
      status: 0,
      message: [
        {
          url: 'http://www.baidu.com',
          img: 'http://www.mangowed.com/uploads/allimg/140316/1-140316201A5393.jpg'
        },
        {
          url: 'http://www.google.com',
          img: 'http://a3.topitme.com/2/30/90/112831676842490302o.jpg'
        },
        {
          url: 'http://www.sougou.com',
          img: 'http://www.mangowed.com/uploads/allimg/140316/1-140316201631610.jpg'
        }
      ]
    };

    return data;
  },

  getnewslist: (config) => {
    console.log(config);
    var data = {
      status: 0,
      message: [
        {
          'id': 1,
          'title': '1季度多家房企利润跌幅超50%，去库存促销战打响',
          'add_time': new Date(),
          'zhaiyao': '房企一季度销售业绩已经陆续公布，克尔瑞研究中心统计',
          'click': 1,
          'img_url': 'http://a3.topitme.com/2/30/90/112831676842490302o.jpg'
        }, {
          'id': 2,
          'title': '买房还是炒股，2018买房无法拒绝的5大理由',
          'add_time': '2018-08-20 22:34:12',
          'zhaiyao': '转眼间2018已经过去了大半年，在这短短的8个月',
          'click': 20,
          'img_url': 'http://a3.topitme.com/2/30/90/112831676842490302o.jpg'
        }, {
          'id': 3,
          'title': '抢先实拍猎豹CS10，霸气时尚2.0T涡轮增压',
          'add_time': '2018-08-20 22:34:12',
          'zhaiyao': '在SUV当道的天下，许多自主品牌相继推出了旗下多款',
          'click': 80,
          'img_url': 'http://www.mangowed.com/uploads/allimg/140316/1-140316201631610.jpg'
        }, {
          'id': 4,
          'title': '1季度多家房企利润跌幅超50%，去库存促销战打响',
          'add_time': '2018-08-20 22:34:12',
          'zhaiyao': '房企一季度销售业绩已经陆续公布，克尔瑞研究中心统计',
          'click': 16,
          'img_url': 'http://a3.topitme.com/2/30/90/112831676842490302o.jpg'
        }, {
          'id': 5,
          'title': '买房还是炒股，2018买房无法拒绝的5大理由',
          'add_time': '2018-08-20 22:34:12',
          'zhaiyao': '转眼间2018已经过去了大半年，在这短短的8个月',
          'click': 25,
          'img_url': 'http://a3.topitme.com/2/30/90/112831676842490302o.jpg'
        }, {
          'id': 6,
          'title': '抢先实拍猎豹CS10，霸气时尚2.0T涡轮增压',
          'add_time': '2018-08-20 22:34:12',
          'zhaiyao': '在SUV当道的天下，许多自主品牌相继推出了旗下多款',
          'click': 58,
          'img_url': 'http://www.mangowed.com/uploads/allimg/140316/1-140316201631610.jpg'
        }, {
          'id': 7,
          'title': '1季度多家房企利润跌幅超50%，去库存促销战打响',
          'add_time': '2018-08-20 22:34:12',
          'zhaiyao': '房企一季度销售业绩已经陆续公布，克尔瑞研究中心统计',
          'click': 17,
          'img_url': 'http://a3.topitme.com/2/30/90/112831676842490302o.jpg'
        }, {
          'id': 8,
          'title': '买房还是炒股，2018买房无法拒绝的5大理由',
          'add_time': '2018-08-20 22:34:12',
          'zhaiyao': '转眼间2018已经过去了大半年，在这短短的8个月',
          'click': 2,
          'img_url': 'http://a3.topitme.com/2/30/90/112831676842490302o.jpg'
        }, {
          'id': 9,
          'title': '抢先实拍猎豹CS10，霸气时尚2.0T涡轮增压',
          'add_time': '2018-08-20 22:34:12',
          'zhaiyao': '在SUV当道的天下，许多自主品牌相继推出了旗下多款',
          'click': 125,
          'img_url': 'http://www.mangowed.com/uploads/allimg/140316/1-140316201631610.jpg'
        }
      ]
    };

    return data;
  },

  getnews: (config) => {
    console.log('getnews api')
    console.log(config)
    var data = {
      status: 0,
      message: [
        {
          id: 11,
          title: '清新有活力的公寓设计 用色彩焕然一新',
          click: '3',
          add_time: '2018-08-28 15:26:23',
          content: '房间里的伤口上发大水了讲课方式了<br><h2>法律的咖啡机</h2><br>爱丽丝方大方里就开始了放假啊发送来得快就法拉睡觉了发生劳动法就卡了，飞拉萨的发阿傻了点附近啊杀戮空间发生了的叫法是看了附件阿斯顿发立刻就艾丝凡。'
        }
      ]
    };

    return data;
  },

  getimgcategory: (config) => {
    var data = {
      status: 0,
      message: [
        {
          title: '家居生活',
          id: 2
        },
        {
          title: '摄影设计',
          id: 3
        }
      ]
    }
    return data;
  },

  getimages: (config) => {
    var data = {
      status: 0,
      message: [
        {
          id: 12,
          title: '现代简约 明亮的外表卧室背景墙',
          img_url: '',
          zhaiyao: '不要机房的发送逻辑发大水了快捷方式了，减肥第十六届，发大水了反馈说发大水了开发及。'
        },
        {
          id: 13,
          title: '减肥离得近浪费见识到了 分类的上课了',
          img_url: '',
          zhaiyao: '交流方式登录时fks，副教授离得近惹我流口水，附近的两件事了。'
        },
        {
          id: 14,
          title: '今天天气不错，是的哈哈',
          img_url: '',
          zhaiyao: '今天体音器针对了就发了，发大水立刻就，减肥第十六届发。'
        }
      ]
    }
    return data;
  }
}
