const SEARCH_ITEMS = [
  {
    "title": "老友记第一季",
    "genre": "喜剧, 爱情, 生活",
    "tags": "纽约, 合租, 咖啡厅, 经典",
    "region": "美国",
    "type": "剧集",
    "year": "1994",
    "cover": "./1.jpg",
    "url": "./movie-0001.html"
  },
  {
    "title": "媳妇",
    "genre": "家庭 / 伦理",
    "tags": "婆媳关系, 农村, 代际冲突, 女性命运, 现实主义",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "cover": "./2.jpg",
    "url": "./movie-0002.html"
  },
  {
    "title": "鳄鱼虱乸",
    "genre": "恐怖 / 民俗",
    "tags": "东南亚, 降头, 巫术, 动物诅咒, 生物恐怖",
    "region": "中国香港 / 马来西亚",
    "type": "电影",
    "year": "2025",
    "cover": "./3.jpg",
    "url": "./movie-0003.html"
  },
  {
    "title": "危情叛逆",
    "genre": "动作 / 爱情 / 惊悚",
    "tags": "女杀手, 保镖, 政变, 公路片, 假戏真做",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./4.jpg",
    "url": "./movie-0004.html"
  },
  {
    "title": "情定金门桥",
    "genre": "爱情/剧情",
    "tags": "地标, 老兵, 忘年恋, 金门大桥, 救赎",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "cover": "./5.jpg",
    "url": "./movie-0005.html"
  },
  {
    "title": "我的夏日恋曲",
    "genre": "爱情 / 剧情",
    "tags": "公路片, 单车环岛, 疗愈",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./6.jpg",
    "url": "./movie-0006.html"
  },
  {
    "title": "在我入睡前",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": "失忆， 婚姻谎言， 每日重置， 信任危机",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./7.jpg",
    "url": "./movie-0007.html"
  },
  {
    "title": "色即是空2",
    "genre": "情色、喜剧、青春",
    "tags": "大学性喜剧、怀旧、成长",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./8.jpg",
    "url": "./movie-0008.html"
  },
  {
    "title": "阴谋诡计",
    "genre": "喜剧，犯罪",
    "tags": "诈骗，黑吃黑，话痨，连环套",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./9.jpg",
    "url": "./movie-0009.html"
  },
  {
    "title": "迷上瘾",
    "genre": "剧情 / 惊悚",
    "tags": "网络迷因, 心理操控, 邪典 cult, 视觉实验",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./10.jpg",
    "url": "./movie-0010.html"
  },
  {
    "title": "我是你的",
    "genre": "爱情, 科幻, 悬疑",
    "tags": "AI恋人, 替身, 身份认同, 伦理",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./11.jpg",
    "url": "./movie-0011.html"
  },
  {
    "title": "电锯惊魂6",
    "genre": "恐怖 / 惊悚",
    "tags": "血腥, 密室逃脱, 人性考验, 续作",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./12.jpg",
    "url": "./movie-0012.html"
  },
  {
    "title": "马路对面的房子",
    "genre": "悬疑，剧情",
    "tags": "窥视，邻居，秘密，反转",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "cover": "./13.jpg",
    "url": "./movie-0013.html"
  },
  {
    "title": "奥林匹亚街区",
    "genre": "爱情, 剧情",
    "tags": "巴黎, 多线叙事, 华裔, 都市情感",
    "region": "法国",
    "type": "电影",
    "year": "2021",
    "cover": "./14.jpg",
    "url": "./movie-0014.html"
  },
  {
    "title": "异星智慧",
    "genre": "科幻, 恐怖",
    "tags": "外星生物, 空间站, 逃生, 寄生, 密室",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "cover": "./15.jpg",
    "url": "./movie-0015.html"
  },
  {
    "title": "毁灭者柯南",
    "genre": "动作、奇幻、冒险",
    "tags": "蛮王、复仇、冷兵器、史诗",
    "region": "美国",
    "type": "电影",
    "year": "1984",
    "cover": "./16.jpg",
    "url": "./movie-0016.html"
  },
  {
    "title": "球王比利",
    "genre": "传记/运动/剧情",
    "tags": "足球, 贫民窟, 逆袭, 桑巴足球, 真实人生",
    "region": "巴西/美国",
    "type": "电影",
    "year": "2025",
    "cover": "./17.jpg",
    "url": "./movie-0017.html"
  },
  {
    "title": "我们的知青年代",
    "genre": "年代 / 剧情",
    "tags": "知青，上山下乡，爱情，时代伤痕",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./18.jpg",
    "url": "./movie-0018.html"
  },
  {
    "title": "滚入红尘",
    "genre": "剧情, 都市",
    "tags": "职场, 女性, 成长, 写实",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "cover": "./19.jpg",
    "url": "./movie-0019.html"
  },
  {
    "title": "她说",
    "genre": "剧情、女性",
    "tags": "职场性侵、MeToo、勇气、独白",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./20.jpg",
    "url": "./movie-0020.html"
  },
  {
    "title": "美凤有约",
    "genre": "爱情 / 家庭",
    "tags": "乡土, 命运, 女性, 励志, 时代剧",
    "region": "中国台湾",
    "type": "剧集",
    "year": "1999",
    "cover": "./21.jpg",
    "url": "./movie-0021.html"
  },
  {
    "title": "超能计划",
    "genre": "动作 / 科幻",
    "tags": "超能力, 黑市, 街头暴力, 药丸",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./22.jpg",
    "url": "./movie-0022.html"
  },
  {
    "title": "花月流情",
    "genre": "民国/爱情",
    "tags": "花魁复仇，乱世三角，旗袍美学",
    "region": "中国内地",
    "type": "电视剧",
    "year": "2027",
    "cover": "./23.jpg",
    "url": "./movie-0023.html"
  },
  {
    "title": "奔",
    "genre": "运动 / 励志",
    "tags": "马拉松, 父子, 救赎",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./24.jpg",
    "url": "./movie-0024.html"
  },
  {
    "title": "母亲的眼泪",
    "genre": "剧情",
    "tags": "家庭, 牺牲, 女性",
    "region": "伊朗",
    "type": "电影",
    "year": "2025",
    "cover": "./25.jpg",
    "url": "./movie-0025.html"
  },
  {
    "title": "猫头鹰魔法社第一季",
    "genre": "动画 / 奇幻 / 冒险 / 少儿",
    "tags": "魔法, 异世界, LGBTQ+, 友情, 成长",
    "region": "美国",
    "type": "TV动画",
    "year": "2020",
    "cover": "./26.jpg",
    "url": "./movie-0026.html"
  },
  {
    "title": "黑湖妖复仇记",
    "genre": "恐怖 / 奇幻",
    "tags": "黑湖, 复仇, 怪物, 生态恐怖, 女性力量",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./27.jpg",
    "url": "./movie-0027.html"
  },
  {
    "title": "勇敢者游戏:决战丛林",
    "genre": "动作, 冒险, 奇幻",
    "tags": "游戏穿越, 角色互换, 搞笑",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "cover": "./28.jpg",
    "url": "./movie-0028.html"
  },
  {
    "title": "吃人大叔",
    "genre": "惊悚 / 恐怖 / 犯罪",
    "tags": "食人, 惊悚, 犯罪, 悬疑, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2018",
    "cover": "./29.jpg",
    "url": "./movie-0029.html"
  },
  {
    "title": "医无可就",
    "genre": "剧情, 医疗",
    "tags": "反医疗剧, 临终关怀, 医生困境, 黑色幽默, 死者尊严",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "cover": "./30.jpg",
    "url": "./movie-0030.html"
  },
  {
    "title": "利贝拉达再一颗",
    "genre": "奇幻 / 冒险",
    "tags": "诅咒果实, 食人魔, 暗黑童话",
    "region": "西班牙",
    "type": "电影",
    "year": "2023",
    "cover": "./31.jpg",
    "url": "./movie-0031.html"
  },
  {
    "title": "新大头儿子小头爸爸6",
    "genre": "动画 / 喜剧 / 家庭",
    "tags": "童年IP, 亲子教育, 科幻, 合家欢",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./32.jpg",
    "url": "./movie-0032.html"
  },
  {
    "title": "汇通天下粤语",
    "genre": "历史， 商战， 家族",
    "tags": "票号， 晋商， 粤语配音， 大时代",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2006",
    "cover": "./33.jpg",
    "url": "./movie-0033.html"
  },
  {
    "title": "金鞋",
    "genre": "剧情, 奇幻",
    "tags": "童话改编, 鞋匠, 父女, 诅咒",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "cover": "./34.jpg",
    "url": "./movie-0034.html"
  },
  {
    "title": "异空危情",
    "genre": "科幻, 爱情",
    "tags": "平行时空, 量子纠缠, 自我相遇, 伦理困境",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./35.jpg",
    "url": "./movie-0035.html"
  },
  {
    "title": "红天鹅",
    "genre": "爱情 / 悬疑 / 剧情 / 政治",
    "tags": "财阀 / 政商勾结 / 悲剧爱情 / 女性复仇 / 高颜值",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "cover": "./36.jpg",
    "url": "./movie-0036.html"
  },
  {
    "title": "江湖学院第一季",
    "genre": "喜剧，武侠，古装",
    "tags": "穿越，校园，搞笑，无厘头，群侠",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "cover": "./37.jpg",
    "url": "./movie-0037.html"
  },
  {
    "title": "溃堤决坝999",
    "genre": "灾难",
    "tags": "群像, 洪水, 小人物, 爆破专家, 24小时倒计时",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./38.jpg",
    "url": "./movie-0038.html"
  },
  {
    "title": "云雾之上",
    "genre": "冒险 / 灾难",
    "tags": "雪山救援, 极限生存, 人性考验",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./39.jpg",
    "url": "./movie-0039.html"
  },
  {
    "title": "我们的错误",
    "genre": "家庭 / 教育 / 剧情",
    "tags": "亲子关系, 高考, 中年危机, 和解",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./40.jpg",
    "url": "./movie-0040.html"
  },
  {
    "title": "铁血一千勇士",
    "genre": "动作, 历史, 战争",
    "tags": "史诗, 热血, 冷兵器",
    "region": "哈萨克斯坦",
    "type": "电影",
    "year": "2012",
    "cover": "./41.jpg",
    "url": "./movie-0041.html"
  },
  {
    "title": "锡星",
    "genre": "科幻，悬疑",
    "tags": "太空，神秘信号，人工智能，孤独，真相",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./42.jpg",
    "url": "./movie-0042.html"
  },
  {
    "title": "风之大陆",
    "genre": "奇幻 / 冒险",
    "tags": "吉卜力风格, 末世, 女性主角",
    "region": "日本",
    "type": "电影 / 动画",
    "year": "1992",
    "cover": "./43.jpg",
    "url": "./movie-0043.html"
  },
  {
    "title": "柏林",
    "genre": "动作 / 犯罪",
    "tags": "抢劫, 高智商犯罪, 衍生剧",
    "region": "德国",
    "type": "剧集",
    "year": "2023",
    "cover": "./44.jpg",
    "url": "./movie-0044.html"
  },
  {
    "title": "空中浩劫第四季",
    "genre": "纪录片 / 灾难 / 调查",
    "tags": "空难调查, 模拟还原, 航空安全, 真实改编, 惊心动魄",
    "region": "加拿大",
    "type": "剧集",
    "year": "2024",
    "cover": "./45.jpg",
    "url": "./movie-0045.html"
  },
  {
    "title": "首尔夜女郎",
    "genre": "剧情 / 悬疑 / 动作",
    "tags": "女性主义，复仇，夜店文化，高燃",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./46.jpg",
    "url": "./movie-0046.html"
  },
  {
    "title": "心术",
    "genre": "医疗，剧情",
    "tags": "医生，医患，理想，现实",
    "region": "中国",
    "type": "剧集",
    "year": "2012",
    "cover": "./47.jpg",
    "url": "./movie-0047.html"
  },
  {
    "title": "花花大丈夫",
    "genre": "喜剧, 爱情",
    "tags": "假戏真做, 兄弟情, 古惑仔",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./48.jpg",
    "url": "./movie-0048.html"
  },
  {
    "title": "女优的告白",
    "genre": "剧情，传记，伦理",
    "tags": "演艺圈内幕，女性觉醒，伪纪录片，戏中戏，大尺度",
    "region": "日本",
    "type": "电影",
    "year": "2015",
    "cover": "./49.jpg",
    "url": "./movie-0049.html"
  },
  {
    "title": "忠诚卫士",
    "genre": "动作 / 犯罪",
    "tags": "警匪, 卧底, 兄弟情, 反转, 硬核",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./50.jpg",
    "url": "./movie-0050.html"
  },
  {
    "title": "危险的相见礼2",
    "genre": "惊悚 / 喜剧",
    "tags": "见家长, 连环误会, 黑色喜剧",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "cover": "./51.jpg",
    "url": "./movie-0051.html"
  },
  {
    "title": "非洲：塞伦盖蒂国家公园",
    "genre": "纪录片，剧情",
    "tags": "自然，动物家族，迁徙，生与死",
    "region": "英国/坦桑尼亚",
    "type": "电影",
    "year": "2025",
    "cover": "./52.jpg",
    "url": "./movie-0052.html"
  },
  {
    "title": "施琅大将军",
    "genre": "历史、传记、战争",
    "tags": "明末清初, 海战, 忠义抉择, 政治博弈",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./53.jpg",
    "url": "./movie-0053.html"
  },
  {
    "title": "龙虎双霸天粤语",
    "genre": "动作、犯罪、喜剧",
    "tags": "黑帮、卧底、双雄、港式幽默",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "cover": "./54.jpg",
    "url": "./movie-0054.html"
  },
  {
    "title": "君九龄",
    "genre": "古装 / 爱情 / 权谋",
    "tags": "女强, 复仇, 医术, 逆袭",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./55.jpg",
    "url": "./movie-0055.html"
  },
  {
    "title": "好狗狗",
    "genre": "剧情 / 家庭",
    "tags": "宠物, 自闭症儿童, 治愈, 真实事件改编",
    "region": "英国",
    "type": "电影",
    "year": "2014",
    "cover": "./56.jpg",
    "url": "./movie-0056.html"
  },
  {
    "title": "关于性",
    "genre": "剧情, 情色, 哲学",
    "tags": "性教育, 解剖学, 艺术片, 冷感",
    "region": "瑞典",
    "type": "电影",
    "year": "2024",
    "cover": "./57.jpg",
    "url": "./movie-0057.html"
  },
  {
    "title": "非常闺旅行",
    "genre": "喜剧, 冒险",
    "tags": "闺蜜, 公路剧, 搞笑, 成长",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./58.jpg",
    "url": "./movie-0058.html"
  },
  {
    "title": "雷电",
    "genre": "悬疑 / 犯罪",
    "tags": "连环杀手, 气象犯罪, 复仇, 反转",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./59.jpg",
    "url": "./movie-0059.html"
  },
  {
    "title": "勾魂艳舞",
    "genre": "恐怖、惊悚",
    "tags": "民俗恐怖、舞蹈、附身、诅咒、红衣",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./60.jpg",
    "url": "./movie-0060.html"
  },
  {
    "title": "两个独立包装的女人",
    "genre": "剧情, 爱情",
    "tags": "女性, 都市情感, 分裂人格, 独立",
    "region": "中国香港",
    "type": "电影",
    "year": "2003",
    "cover": "./61.jpg",
    "url": "./movie-0061.html"
  },
  {
    "title": "各显神通",
    "genre": "喜剧 / 动作 / 犯罪",
    "tags": "笨贼联盟，多线叙事，误打误撞，黑色幽默",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "cover": "./62.jpg",
    "url": "./movie-0062.html"
  },
  {
    "title": "卧龙岗",
    "genre": "喜剧， 奇幻， 爱情",
    "tags": "外星人， 小镇， 阴差阳错， 同居， 无厘头",
    "region": "中国",
    "type": "电影",
    "year": "2014",
    "cover": "./63.jpg",
    "url": "./movie-0063.html"
  },
  {
    "title": "马尔多罗行动",
    "genre": "剧情, 惊悚, 战争, 历史",
    "tags": "二战, 黄金列车, 秘密行动, 复仇, 遗产",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "cover": "./64.jpg",
    "url": "./movie-0064.html"
  },
  {
    "title": "大明诡事录",
    "genre": "悬疑、古装、探案",
    "tags": "锦衣卫、术法、朝堂斗争、双男主",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "cover": "./65.jpg",
    "url": "./movie-0065.html"
  },
  {
    "title": "成长恋爱吻",
    "genre": "爱情 / 青春 / 剧情",
    "tags": "校园初恋, 青春成长, 友情裂变, 告白, 自我认同, 毕业季",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./66.jpg",
    "url": "./movie-0066.html"
  },
  {
    "title": "金殿劫美",
    "genre": "古装 / 爱情 / 悬疑",
    "tags": "宫廷, 权谋, 爱情, 悬疑, 复仇",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2020",
    "cover": "./67.jpg",
    "url": "./movie-0067.html"
  },
  {
    "title": "飘帅",
    "genre": "悬疑, 谍战, 年代",
    "tags": "民国, 金融战, 双面间谍",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./68.jpg",
    "url": "./movie-0068.html"
  },
  {
    "title": "约会的敌人",
    "genre": "爱情 / 喜剧 / 动作",
    "tags": "间谍, 相亲, 误会, 爆笑",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./69.jpg",
    "url": "./movie-0069.html"
  },
  {
    "title": "由始至终",
    "genre": "爱情, 剧情",
    "tags": "时间循环, 婚礼, 告别, 宿命",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "cover": "./70.jpg",
    "url": "./movie-0070.html"
  },
  {
    "title": "死亡有阴影",
    "genre": "心理悬疑, 惊悚, 都市奇观",
    "tags": "地铁阴影, 时间异象, 施工事故, 组织掩盖",
    "region": "中国",
    "type": "心理悬疑电影",
    "year": "2024",
    "cover": "./71.jpg",
    "url": "./movie-0071.html"
  },
  {
    "title": "荣耀青春",
    "genre": "校园竞技",
    "tags": "电竞, 热血, 逆袭",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./72.jpg",
    "url": "./movie-0072.html"
  },
  {
    "title": "狎鸥亭报告",
    "genre": "犯罪，悬疑，剧情",
    "tags": "整形外科，黑市，江南区，卧底",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "cover": "./73.jpg",
    "url": "./movie-0073.html"
  },
  {
    "title": "梅尔吉勃逊之英雄本色",
    "genre": "传记 / 历史 / 动作",
    "tags": "苏格兰, 独立战争, 史诗, 复仇, 自由",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2025",
    "cover": "./74.jpg",
    "url": "./movie-0074.html"
  },
  {
    "title": "冲出康普顿",
    "genre": "音乐传记",
    "tags": "嘻哈, 街头, 真实事件改编, 抗争",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "cover": "./75.jpg",
    "url": "./movie-0075.html"
  },
  {
    "title": "天国与地狱1963",
    "genre": "犯罪 / 剧情 / 悬疑",
    "tags": "黑泽明, 社会派, 绑架, 经典",
    "region": "日本",
    "type": "电影",
    "year": "1963",
    "cover": "./76.jpg",
    "url": "./movie-0076.html"
  },
  {
    "title": "静静的叶尔羌河",
    "genre": "剧情 / 历史",
    "tags": "边疆, 建设兵团, 三代人, 河流",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./77.jpg",
    "url": "./movie-0077.html"
  },
  {
    "title": "200米",
    "genre": "剧情 / 家庭",
    "tags": "亲情, 边境, 现实主义, 催泪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./78.jpg",
    "url": "./movie-0078.html"
  },
  {
    "title": "他的摩托车，她的岛",
    "genre": "爱情 / 剧情",
    "tags": "夏日恋情, 机车环岛, 绝症, 治愈",
    "region": "中国台湾",
    "type": "电影",
    "year": "2026",
    "cover": "./79.jpg",
    "url": "./movie-0079.html"
  },
  {
    "title": "凡躯的福音",
    "genre": "剧情, 哲学",
    "tags": "宗教, 存在主义, 黑白, 慢电影",
    "region": "法国",
    "type": "电影",
    "year": "1962",
    "cover": "./80.jpg",
    "url": "./movie-0080.html"
  },
  {
    "title": "怨灵2",
    "genre": "恐怖, 惊悚",
    "tags": "民俗, 下降头, 伪纪录片",
    "region": "泰国/中国",
    "type": "电影",
    "year": "2025",
    "cover": "./81.jpg",
    "url": "./movie-0081.html"
  },
  {
    "title": "血口逃生",
    "genre": "惊悚, 恐怖, 冒险",
    "tags": "鲨鱼, 极限求生, 血腥, 封闭空间, 女汉子",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2021",
    "cover": "./82.jpg",
    "url": "./movie-0082.html"
  },
  {
    "title": "创造之地",
    "genre": "剧情，历史，传记",
    "tags": "拓荒，牧师，冰岛，信仰，自然之力",
    "region": "冰岛",
    "type": "电影",
    "year": "2022",
    "cover": "./83.jpg",
    "url": "./movie-0083.html"
  },
  {
    "title": "热血勇士",
    "genre": "战争 / 青春",
    "tags": "抗日, 学生军, 弃笔从戎",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "cover": "./84.jpg",
    "url": "./movie-0084.html"
  },
  {
    "title": "福尔摩斯：恐怖之声",
    "genre": "悬疑, 犯罪",
    "tags": "本格推理, 声音杀人, 暗网",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "cover": "./85.jpg",
    "url": "./movie-0085.html"
  },
  {
    "title": "三线轮洄",
    "genre": "冒险，奇幻",
    "tags": "悬疑，民俗，水下，探险",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./86.jpg",
    "url": "./movie-0086.html"
  },
  {
    "title": "蓝色太阳宫",
    "genre": "科幻, 灾难, 悬疑",
    "tags": "近未来, 人造太阳, 气候难民, 权力游戏, 生存",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./87.jpg",
    "url": "./movie-0087.html"
  },
  {
    "title": "三六巷",
    "genre": "剧情 / 犯罪",
    "tags": "城中村, 拆迁, 黑帮",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "cover": "./88.jpg",
    "url": "./movie-0088.html"
  },
  {
    "title": "爱上你杀了你",
    "genre": "爱情 / 悬疑 / 犯罪",
    "tags": "双向执念, 误导叙事, 黑色都市, 情感博弈, 反转真相",
    "region": "中国香港",
    "type": "电影",
    "year": "2022",
    "cover": "./89.jpg",
    "url": "./movie-0089.html"
  },
  {
    "title": "梦边缘",
    "genre": "科幻，悬疑",
    "tags": "梦境，科技伦理，意识，烧脑",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./90.jpg",
    "url": "./movie-0090.html"
  },
  {
    "title": "真进化之实",
    "genre": "奇幻, 喜剧",
    "tags": "异世界, 美食, 搞笑, 反差",
    "region": "日本",
    "type": "动画",
    "year": "2021",
    "cover": "./91.jpg",
    "url": "./movie-0091.html"
  },
  {
    "title": "小小少年第二季",
    "genre": "纪录片",
    "tags": "成长, 教育, 现实题材, 青春",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./92.jpg",
    "url": "./movie-0092.html"
  },
  {
    "title": "春满兰宫",
    "genre": "爱情，古装",
    "tags": "宫廷，禁忌之恋，侍女，唯美",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./93.jpg",
    "url": "./movie-0093.html"
  },
  {
    "title": "丧尸不要停",
    "genre": "喜剧, 恐怖",
    "tags": "片场惊魂, 伪纪录片, 戏中戏, 丧尸喜剧, 日式吐槽",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./94.jpg",
    "url": "./movie-0094.html"
  },
  {
    "title": "刀剑神域第一季",
    "genre": "动画，科幻，冒险",
    "tags": "VRMMO，死亡游戏，网游， swords，攻略",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "cover": "./95.jpg",
    "url": "./movie-0095.html"
  },
  {
    "title": "模仿犯",
    "genre": "犯罪 / 悬疑 / 心理",
    "tags": "连环杀手, 模仿犯罪, 媒体, 心理战",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./96.jpg",
    "url": "./movie-0096.html"
  },
  {
    "title": "特里萨",
    "genre": "传记 / 剧情 / 战争",
    "tags": "修女, 二战, 救援, 人性, 真实改编",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "cover": "./97.jpg",
    "url": "./movie-0097.html"
  },
  {
    "title": "死亡晚餐",
    "genre": "悬疑 / 犯罪 / 密室",
    "tags": "晚宴, 全员恶人, 密室推理, 反转, 西班牙悬疑",
    "region": "西班牙",
    "type": "电影",
    "year": "2021",
    "cover": "./98.jpg",
    "url": "./movie-0098.html"
  },
  {
    "title": "非凡的力量",
    "genre": "喜剧， 奇幻",
    "tags": "超能力， 讽刺， 政治， 荒诞",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./99.jpg",
    "url": "./movie-0099.html"
  },
  {
    "title": "东海人鱼传2",
    "genre": "奇幻 / 爱情 / 冒险",
    "tags": "神话新编, 深海奇观, 虐恋, 鲛人泪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./100.jpg",
    "url": "./movie-0100.html"
  },
  {
    "title": "徐老师的故事",
    "genre": "剧情",
    "tags": "乡村教师，教育，奉献，真实感",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./101.jpg",
    "url": "./movie-0101.html"
  },
  {
    "title": "我们社群",
    "genre": "剧情, 都市",
    "tags": "社群, 邻里, 直播, 现代生活",
    "region": "中国大陆",
    "type": "TV剧集",
    "year": "2021",
    "cover": "./102.jpg",
    "url": "./movie-0102.html"
  },
  {
    "title": "白人男孩瑞克",
    "genre": "剧情 / 犯罪 / 传记",
    "tags": "真实改编, 青少年, 卧底, 司法黑幕",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "cover": "./103.jpg",
    "url": "./movie-0103.html"
  },
  {
    "title": "酷爱电影的庞波小姐",
    "genre": "动画剧情",
    "tags": "电影情书, 梦想, 职场",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "cover": "./104.jpg",
    "url": "./movie-0104.html"
  },
  {
    "title": "痞子把辣妹",
    "genre": "青春爱情喜剧",
    "tags": "街头文化, 追爱, 乌龙事件, 机车, 兄弟情",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./105.jpg",
    "url": "./movie-0105.html"
  },
  {
    "title": "吾识吾名",
    "genre": "奇幻，悬疑，青春",
    "tags": "名字诅咒，校园怪谈，记忆夺还，成长",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./106.jpg",
    "url": "./movie-0106.html"
  },
  {
    "title": "侠义神捕之请君入瓮",
    "genre": "武侠 / 悬疑 / 古装",
    "tags": "神捕,机关局,江湖追凶,反套路,朝堂暗战",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./107.jpg",
    "url": "./movie-0107.html"
  },
  {
    "title": "德国之爱",
    "genre": "爱情, 历史, 战争",
    "tags": "二战, 异国恋, 禁忌之爱, 人性",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "cover": "./108.jpg",
    "url": "./movie-0108.html"
  },
  {
    "title": "谍报飞龙",
    "genre": "谍战, 动作",
    "tags": "特工, 港剧, 冷战, 双面间谍",
    "region": "中国香港",
    "type": "剧集",
    "year": "2026",
    "cover": "./109.jpg",
    "url": "./movie-0109.html"
  },
  {
    "title": "天使之卵",
    "genre": "奇幻 / 剧情 / 心理",
    "tags": "超现实, 少女, 末世, 符号隐喻",
    "region": "日本 / 法国",
    "type": "电影",
    "year": "2025",
    "cover": "./110.jpg",
    "url": "./movie-0110.html"
  },
  {
    "title": "花街皇后",
    "genre": "剧情, 犯罪",
    "tags": "卧底, 夜总会, 女性群像, 反转",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./111.jpg",
    "url": "./movie-0111.html"
  },
  {
    "title": "人生真美丽国语",
    "genre": "剧情 / 家庭 / 音乐",
    "tags": "癌症, 临终关怀, 和解, 合唱团",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./112.jpg",
    "url": "./movie-0112.html"
  },
  {
    "title": "血色星期天",
    "genre": "历史 / 惊悚",
    "tags": "政治阴谋, 真实事件改编, 多线叙事, 法庭辩论",
    "region": "英国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./113.jpg",
    "url": "./movie-0113.html"
  },
  {
    "title": "脆莓公园第二季",
    "genre": "动画 / 喜剧 / 冒险",
    "tags": "荒诞, 森林小镇, 群像, 黑色幽默, 职场讽刺",
    "region": "美国",
    "type": "剧集",
    "year": "2014",
    "cover": "./114.jpg",
    "url": "./movie-0114.html"
  },
  {
    "title": "亲爱的司丞大人",
    "genre": "古装, 爱情, 悬疑",
    "tags": "探案, 欢喜冤家, 权谋, 甜宠",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "cover": "./115.jpg",
    "url": "./movie-0115.html"
  },
  {
    "title": "诱拐日日版",
    "genre": "悬疑， 犯罪， 剧情",
    "tags": "绑架， 反转， 亲情",
    "region": "日本",
    "type": "剧集",
    "year": "2018",
    "cover": "./116.jpg",
    "url": "./movie-0116.html"
  },
  {
    "title": "极速赛车艇",
    "genre": "动作 / 冒险 / 科幻",
    "tags": "近未来, 海上竞速, 潜艇追逐, 阴谋, 兄弟情, 高燃场面",
    "region": "中国香港",
    "type": "电影",
    "year": "1986",
    "cover": "./117.jpg",
    "url": "./movie-0117.html"
  },
  {
    "title": "艾德私人频道",
    "genre": "剧情, 喜剧, 讽刺",
    "tags": "直播, 真人秀, 隐私, 时代悲剧, 反讽",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./118.jpg",
    "url": "./movie-0118.html"
  },
  {
    "title": "四十五小姐",
    "genre": "剧情 / 悬疑",
    "tags": "中年危机, 直播, 虚拟身份",
    "region": "中国大陆",
    "type": "电影 / 网络",
    "year": "2026",
    "cover": "./119.jpg",
    "url": "./movie-0119.html"
  },
  {
    "title": "烈焰2024",
    "genre": "动作, 犯罪, 都市, 悬疑, 政治",
    "tags": "烧毁现场, 能源黑市, 调查推理, 救援现场, 反腐",
    "region": "中国大陆",
    "type": "动作犯罪电影",
    "year": "2024",
    "cover": "./120.jpg",
    "url": "./movie-0120.html"
  },
  {
    "title": "用灵魂偿还",
    "genre": "奇幻 / 爱情 / 悲剧",
    "tags": "借贷, 灵魂抵押, 和风怪谈, 轮回",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./121.jpg",
    "url": "./movie-0121.html"
  },
  {
    "title": "圣埃克苏佩里",
    "genre": "传记, 剧情, 冒险",
    "tags": "《小王子》作者, 飞行员, 存在主义",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./122.jpg",
    "url": "./movie-0122.html"
  },
  {
    "title": "公寓爱情故事",
    "genre": "爱情，喜剧，都市",
    "tags": "邻里，隔墙有耳，社恐，双向暗恋",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./123.jpg",
    "url": "./movie-0123.html"
  },
  {
    "title": "黑白诀",
    "genre": "动作, 犯罪, 悬疑",
    "tags": "卧底, 围棋, 缉毒, 双雄",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-0124.html"
  },
  {
    "title": "银魂 精选集",
    "genre": "动画 / 喜剧 / 动作",
    "tags": "吐槽, 热血, 无厘头, 精选篇",
    "region": "日本",
    "type": "剧集",
    "year": "2020",
    "cover": "./125.jpg",
    "url": "./movie-0125.html"
  },
  {
    "title": "去炫吧！乐派",
    "genre": "音乐 / 真人秀 / 竞赛",
    "tags": "乐队, 综艺, 年轻文化, 原创音乐",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "cover": "./126.jpg",
    "url": "./movie-0126.html"
  },
  {
    "title": "脱口秀大会第五季",
    "genre": "喜剧, 真人秀",
    "tags": "脱口秀, 竞演, 幽默",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2022",
    "cover": "./127.jpg",
    "url": "./movie-0127.html"
  },
  {
    "title": "爱在天际",
    "genre": "爱情 / 科幻 / 冒险",
    "tags": "高空, 卫星, 宇航员, 异国恋, 末日通话",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./128.jpg",
    "url": "./movie-0128.html"
  },
  {
    "title": "青树",
    "genre": "文艺 / 悬疑",
    "tags": "返乡, 秘密, 女性, 诗意",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./129.jpg",
    "url": "./movie-0129.html"
  },
  {
    "title": "涉谷来接你了",
    "genre": "喜剧 / 奇幻",
    "tags": "黑道, 育儿, 反差萌, 温情, 漫改",
    "region": "日本",
    "type": "剧集",
    "year": "2021",
    "cover": "./130.jpg",
    "url": "./movie-0130.html"
  },
  {
    "title": "野生诱惑",
    "genre": "冒险 / 剧情",
    "tags": "荒野求生，女性觉醒，回归自然，生存",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "cover": "./131.jpg",
    "url": "./movie-0131.html"
  },
  {
    "title": "警犬巴打国语",
    "genre": "警匪",
    "tags": "刑侦, 萌宠, 搭档, 喜剧",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "cover": "./132.jpg",
    "url": "./movie-0132.html"
  },
  {
    "title": "蓝鸟",
    "genre": "剧情, 悬疑, 心理",
    "tags": "精神分裂, 蓝色, 象征主义, 母女, 艺术片",
    "region": "法国",
    "type": "电影",
    "year": "2018",
    "cover": "./133.jpg",
    "url": "./movie-0133.html"
  },
  {
    "title": "我们想生存",
    "genre": "灾难，惊悚，剧情",
    "tags": "丧尸，末日，亲情，密室，反转",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./134.jpg",
    "url": "./movie-0134.html"
  },
  {
    "title": "工作者迷失",
    "genre": "悬疑，剧情，职场",
    "tags": "社畜，密室逃脱，心理惊悚，资本批判，黑色幽默",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./135.jpg",
    "url": "./movie-0135.html"
  },
  {
    "title": "恋夏絮语",
    "genre": "爱情 / 剧情",
    "tags": "夏日恋情, 海边小镇, 初恋回忆, 青春遗憾",
    "region": "中国台湾",
    "type": "电影",
    "year": "2019",
    "cover": "./136.jpg",
    "url": "./movie-0136.html"
  },
  {
    "title": "小楠公与其母",
    "genre": "剧情 / 家庭",
    "tags": "单亲妈妈, 神童陨落, 育儿反思, 是枝裕和式",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "cover": "./137.jpg",
    "url": "./movie-0137.html"
  },
  {
    "title": "三只小猪3正义大联萌",
    "genre": "动画 / 喜剧",
    "tags": "儿童, 超级英雄, 搞笑, 机甲, 合作",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./138.jpg",
    "url": "./movie-0138.html"
  },
  {
    "title": "炎女",
    "genre": "动作, 奇幻",
    "tags": "女性英雄, 复仇, 超能力, 古代与现代交织, 暴力美学",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "cover": "./139.jpg",
    "url": "./movie-0139.html"
  },
  {
    "title": "彼得·潘与温蒂",
    "genre": "奇幻,冒险,家庭,成长",
    "tags": "永无岛,时间控制,女性成长,社会边界,成长叙事",
    "region": "英国",
    "type": "奇幻冒险电影",
    "year": "2010",
    "cover": "./140.jpg",
    "url": "./movie-0140.html"
  },
  {
    "title": "床垫里的百万欧元",
    "genre": "喜剧 / 家庭",
    "tags": "黑色幽默, 遗产战争, 荒诞, 治愈",
    "region": "爱尔兰",
    "type": "电影",
    "year": "2023",
    "cover": "./141.jpg",
    "url": "./movie-0141.html"
  },
  {
    "title": "阴谋职场第一季",
    "genre": "喜剧、动画、悬疑",
    "tags": "办公室政治、阴谋论、讽刺职场、脑洞大开、成人动画",
    "region": "美国",
    "type": "剧集/动画",
    "year": "2025",
    "cover": "./142.jpg",
    "url": "./movie-0142.html"
  },
  {
    "title": "帕德西",
    "genre": "历史, 战争",
    "tags": "民族英雄, 起义, 冷兵器, 史诗",
    "region": "印度",
    "type": "电影",
    "year": "2022",
    "cover": "./143.jpg",
    "url": "./movie-0143.html"
  },
  {
    "title": "为爱献身",
    "genre": "爱情, 歌舞, 剧情",
    "tags": "种姓制度, 禁忌之恋, 殉情, 现实主义歌舞片",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "cover": "./144.jpg",
    "url": "./movie-0144.html"
  },
  {
    "title": "笑面鬼王",
    "genre": "恐怖 / 喜剧 / 奇幻 / 动作",
    "tags": "鬼王附身, 纸扎术, 江湖骗术, 反差喜感, 民间法术, 斗法, 阴阳错位",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "cover": "./145.jpg",
    "url": "./movie-0145.html"
  },
  {
    "title": "暴风惊魂夜",
    "genre": "恐怖 / 惊悚",
    "tags": "暴风雪, 古宅, 连环杀手, 密室, 猜疑",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./146.jpg",
    "url": "./movie-0146.html"
  },
  {
    "title": "葛连·坎贝尔：我还是我",
    "genre": "音乐传记片",
    "tags": "真实改编，乡村音乐，阿尔茨海默症，温情，告别巡演",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./147.jpg",
    "url": "./movie-0147.html"
  },
  {
    "title": "错过又如何",
    "genre": "爱情剧情",
    "tags": "迟到重逢, 城市漂流, 旧信件, 未完成告白, 时间缝隙",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "cover": "./148.jpg",
    "url": "./movie-0148.html"
  },
  {
    "title": "奶爸的爱情生活",
    "genre": "喜剧 / 家庭",
    "tags": "全职奶爸, 中年危机, 邻里关系, 轻喜剧",
    "region": "中国",
    "type": "剧集",
    "year": "2023",
    "cover": "./149.jpg",
    "url": "./movie-0149.html"
  },
  {
    "title": "太空巴迪",
    "genre": "家庭 / 喜剧 / 科幻 / 冒险",
    "tags": "金毛犬, 太空冒险, 合家欢",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./150.jpg",
    "url": "./movie-0150.html"
  },
  {
    "title": "囧村逃亡2",
    "genre": "喜剧, 惊悚, 冒险",
    "tags": "荒诞, 黑色幽默, 乡村, 续作",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./1.jpg",
    "url": "./movie-0151.html"
  },
  {
    "title": "伤者",
    "genre": "犯罪悬疑 / 心理惊悚",
    "tags": "连续伤者, 精神分裂, 天桥摄影, 保险诈骗, 母题反转",
    "region": "中国香港",
    "type": "电影",
    "year": "2019",
    "cover": "./2.jpg",
    "url": "./movie-0152.html"
  },
  {
    "title": "江城夏日",
    "genre": "剧情",
    "tags": "武汉, 亲情, 寻亲, 现实, 文艺",
    "region": "中国大陆",
    "type": "电影",
    "year": "2006",
    "cover": "./3.jpg",
    "url": "./movie-0153.html"
  },
  {
    "title": "不速之约粤语",
    "genre": "悬疑 / 奇幻 / 爱情",
    "tags": "魔鬼, 契约, 心理战, 三角",
    "region": "中国香港",
    "type": "剧集",
    "year": "2012",
    "cover": "./4.jpg",
    "url": "./movie-0154.html"
  },
  {
    "title": "东洋秘艳",
    "genre": "悬疑 / 情色",
    "tags": "昭和, 艺伎, 谋杀, 秘密",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./5.jpg",
    "url": "./movie-0155.html"
  },
  {
    "title": "人鱼先生",
    "genre": "奇幻, 爱情, 喜剧",
    "tags": "人鱼, 财阀, 契约婚姻, 治愈",
    "region": "韩国",
    "type": "电视剧",
    "year": "2026",
    "cover": "./6.jpg",
    "url": "./movie-0156.html"
  },
  {
    "title": "八美图",
    "genre": "悬疑 / 喜剧 / 家庭",
    "tags": "女性群像, 封闭宅邸, 家族秘密, 互相猜疑, 华丽复古, 黑色幽默",
    "region": "法国",
    "type": "电影",
    "year": "2002",
    "cover": "./7.jpg",
    "url": "./movie-0157.html"
  },
  {
    "title": "罗伯特·齐默尔曼的爱情",
    "genre": "剧情， 音乐",
    "tags": "鲍勃·迪伦， 传记， 文艺",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "cover": "./8.jpg",
    "url": "./movie-0158.html"
  },
  {
    "title": "通灵女校",
    "genre": "恐怖， 悬疑",
    "tags": "校园， 通灵， 校规， 诅咒",
    "region": "泰国",
    "type": "剧集",
    "year": "2024",
    "cover": "./9.jpg",
    "url": "./movie-0159.html"
  },
  {
    "title": "接触",
    "genre": "科幻 / 剧情",
    "tags": "外星文明, 科学伦理, 信仰, 硬科幻",
    "region": "美国",
    "type": "电影",
    "year": "1997",
    "cover": "./10.jpg",
    "url": "./movie-0160.html"
  },
  {
    "title": "兄弟拉面",
    "genre": "剧情, 家庭, 美食",
    "tags": "兄弟, 匠人精神, 和解, 北海道, 治愈",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./11.jpg",
    "url": "./movie-0161.html"
  },
  {
    "title": "武林外传2006",
    "genre": "喜剧, 古装",
    "tags": "情景喜剧, 武侠, 同福客栈, 怀旧, 讽刺",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2006",
    "cover": "./12.jpg",
    "url": "./movie-0162.html"
  },
  {
    "title": "维拉的一生",
    "genre": "剧情/历史",
    "tags": "苏联往事, 女性史诗, 冬宫, 时代巨变",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2019",
    "cover": "./13.jpg",
    "url": "./movie-0163.html"
  },
  {
    "title": "幻想和镜子",
    "genre": "悬疑，科幻，剧情",
    "tags": "心理惊悚，平行世界，记忆盗窃，烧脑悬疑，软科幻",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./14.jpg",
    "url": "./movie-0164.html"
  },
  {
    "title": "地面之洞",
    "genre": "恐怖 / 民俗",
    "tags": "凯尔特传说, 怪物, 单亲家庭, 泥沼",
    "region": "爱尔兰 / 英国",
    "type": "电影",
    "year": "2023",
    "cover": "./15.jpg",
    "url": "./movie-0165.html"
  },
  {
    "title": "霹雳行动队",
    "genre": "动作 / 犯罪",
    "tags": "警匪, 飞虎队, 兄弟反目, 枪战爆破, 港式硬汉",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "cover": "./16.jpg",
    "url": "./movie-0166.html"
  },
  {
    "title": "雪国迷景",
    "genre": "悬疑，文艺，剧情",
    "tags": "暴雪山庄，记忆错乱，交换身份，文学改编感",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./17.jpg",
    "url": "./movie-0167.html"
  },
  {
    "title": "最后一个女神",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": "反穿越, 原始社会, 女权, 爆笑, 种田",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2025",
    "cover": "./18.jpg",
    "url": "./movie-0168.html"
  },
  {
    "title": "啤酒联盟",
    "genre": "喜剧 / 运动",
    "tags": "小镇, 啤酒, 棒球, 废柴, 逆袭",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./19.jpg",
    "url": "./movie-0169.html"
  },
  {
    "title": "欲海情魔1945",
    "genre": "剧情, 黑色电影, 悬疑",
    "tags": "经典好莱坞, 蛇蝎美人, 母女关系, 欲望深渊",
    "region": "美国",
    "type": "电影",
    "year": "1945",
    "cover": "./20.jpg",
    "url": "./movie-0170.html"
  },
  {
    "title": "末日之战2010",
    "genre": "科幻, 灾难, 动作",
    "tags": "丧尸, 病毒, 末日, 伪纪录片, 人性",
    "region": "英国",
    "type": "电影",
    "year": "2010",
    "cover": "./21.jpg",
    "url": "./movie-0171.html"
  },
  {
    "title": "女囚犯血泪史",
    "genre": "剧情 / 犯罪",
    "tags": "女子监狱, 剥削电影, 暴力, 社会批判, cult",
    "region": "美国",
    "type": "电影",
    "year": "1971",
    "cover": "./22.jpg",
    "url": "./movie-0172.html"
  },
  {
    "title": "大爱",
    "genre": "剧情/家庭",
    "tags": "收养, 残疾人, 真实改编",
    "region": "中国大陆",
    "type": "电影",
    "year": "2010",
    "cover": "./23.jpg",
    "url": "./movie-0173.html"
  },
  {
    "title": "老虎出更",
    "genre": "动作 / 喜剧",
    "tags": "警匪，卧底，爆笑，打斗，老派硬汉",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "cover": "./24.jpg",
    "url": "./movie-0174.html"
  },
  {
    "title": "流氓医生粤语",
    "genre": "剧情 / 喜剧 / 医疗",
    "tags": "市井英雄, 街头智慧, 黑帮, 医者仁心",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./25.jpg",
    "url": "./movie-0175.html"
  },
  {
    "title": "大道似锦",
    "genre": "剧情, 家庭, 年代",
    "tags": "改革开放, 创业, 浙商",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./26.jpg",
    "url": "./movie-0176.html"
  },
  {
    "title": "莉莉小姐的超完美日记",
    "genre": "悬疑, 惊悚, 心理",
    "tags": "日记, 替身, 整容, 反转, 职场暗黑",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "cover": "./27.jpg",
    "url": "./movie-0177.html"
  },
  {
    "title": "铁塔油花浪漫曲",
    "genre": "剧情, 喜剧, 爱情",
    "tags": "石油工人, 油田, 相亲, 浪漫, 工业风",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./28.jpg",
    "url": "./movie-0178.html"
  },
  {
    "title": "海底小纵队 第八季",
    "genre": "动画，儿童，科普",
    "tags": "海洋探险，救援， teamwork， 环保",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "cover": "./29.jpg",
    "url": "./movie-0179.html"
  },
  {
    "title": "沙漠恶魔",
    "genre": "恐怖，惊悚，冒险",
    "tags": "沙漠，怪物，生存，考古",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2024",
    "cover": "./30.jpg",
    "url": "./movie-0180.html"
  },
  {
    "title": "取下",
    "genre": "惊悚 / 悬疑",
    "tags": "宗教，民俗，心理，邪教，仪式",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./31.jpg",
    "url": "./movie-0181.html"
  },
  {
    "title": "王牌天神续集",
    "genre": "喜剧, 奇幻, 家庭, 冒险",
    "tags": "神迹考验, 天命任务, 小镇救援, 身份错位, 轻松讽刺, 家庭成长",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "cover": "./32.jpg",
    "url": "./movie-0182.html"
  },
  {
    "title": "边城英烈传",
    "genre": "历史、战争",
    "tags": "近代史、边疆、保家卫国、真实事件改编、壮烈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./33.jpg",
    "url": "./movie-0183.html"
  },
  {
    "title": "背着奶奶进城",
    "genre": "剧情 / 家庭",
    "tags": "祖孙情, 城乡差异, 治愈, 励志",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "cover": "./34.jpg",
    "url": "./movie-0184.html"
  },
  {
    "title": "前程似锦",
    "genre": "剧情 / 黑色幽默",
    "tags": "职场反内卷, 裁员名单, 假装自杀, 蛇皮袋装钱",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./35.jpg",
    "url": "./movie-0185.html"
  },
  {
    "title": "绝配杀手",
    "genre": "动作, 爱情, 喜剧",
    "tags": "杀手, 相亲, 误打误撞, 史密斯夫妇",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./36.jpg",
    "url": "./movie-0186.html"
  },
  {
    "title": "心尘家园",
    "genre": "家庭 / 社会",
    "tags": "拆迁, 土地情结, 代际和解",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "cover": "./37.jpg",
    "url": "./movie-0187.html"
  },
  {
    "title": "厨神小姐",
    "genre": "剧情,美食,爱情,成长",
    "tags": "厨艺传承,女性创业,复盘人生,治愈,情感修复",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "cover": "./38.jpg",
    "url": "./movie-0188.html"
  },
  {
    "title": "萨利",
    "genre": "传记， 剧情",
    "tags": "女性力量， 体育精神， 逆袭",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./39.jpg",
    "url": "./movie-0189.html"
  },
  {
    "title": "唐人街探案2",
    "genre": "喜剧, 悬疑, 动作",
    "tags": "唐人街, 神探, 连环杀人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "cover": "./40.jpg",
    "url": "./movie-0190.html"
  },
  {
    "title": "嗨！我的新家2020",
    "genre": "真人秀, 生活",
    "tags": "装修, 改造, 情感, 梦想之家, 治愈",
    "region": "中国大陆",
    "type": "TV Series",
    "year": "2020",
    "cover": "./41.jpg",
    "url": "./movie-0191.html"
  },
  {
    "title": "逗猎吸血鬼",
    "genre": "喜剧, 恐怖, 动作",
    "tags": "搞笑, 吸血鬼, 废柴猎人, 现代科技, 反套路",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./42.jpg",
    "url": "./movie-0192.html"
  },
  {
    "title": "西野的恋爱与冒险",
    "genre": "爱情、奇幻",
    "tags": "都市怪谈，单元剧式，寻找自我，温柔治愈",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./43.jpg",
    "url": "./movie-0193.html"
  },
  {
    "title": "万渣朝凰第五季",
    "genre": "古装 / 爱情",
    "tags": "穿越, 女强, 爽剧",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./44.jpg",
    "url": "./movie-0194.html"
  },
  {
    "title": "金枝欲孽",
    "genre": "古装",
    "tags": "宫斗, 权谋, 女性, 反转",
    "region": "中国香港",
    "type": "剧集",
    "year": "2026",
    "cover": "./45.jpg",
    "url": "./movie-0195.html"
  },
  {
    "title": "滚上滚",
    "genre": "喜剧、励志、运动",
    "tags": "旱地冰壶、残疾人运动、逆袭、小人物",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./46.jpg",
    "url": "./movie-0196.html"
  },
  {
    "title": "少年泰坦出击第五季",
    "genre": "喜剧 / 动作 / 动画",
    "tags": "恶搞, 超级英雄, 吐槽, 单元剧",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "cover": "./47.jpg",
    "url": "./movie-0197.html"
  },
  {
    "title": "爱在烟雾迷幻时",
    "genre": "爱情, 悬疑",
    "tags": "王家卫风, 记忆, 迷幻, 都市",
    "region": "中国",
    "type": "电影",
    "year": "2019",
    "cover": "./48.jpg",
    "url": "./movie-0198.html"
  },
  {
    "title": "少数派报告",
    "genre": "科幻 / 犯罪 / 惊悚",
    "tags": "预知犯罪、先知、反乌托邦、系统漏洞、逃亡",
    "region": "美国",
    "type": "电视剧 / 第二季",
    "year": "2027",
    "cover": "./49.jpg",
    "url": "./movie-0199.html"
  },
  {
    "title": "青蛙少年",
    "genre": "悬疑, 剧情, 犯罪",
    "tags": "真实事件改编, 社会派推理, 冷案重启",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./50.jpg",
    "url": "./movie-0200.html"
  },
  {
    "title": "三十那年",
    "genre": "剧情",
    "tags": "而立之年, 北漂, 梦想与现实, 家庭, 成长",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./51.jpg",
    "url": "./movie-0201.html"
  },
  {
    "title": "爵士丛林",
    "genre": "动画，音乐，奇幻",
    "tags": "爵士乐，动物城，梦想，即兴，纽约",
    "region": "美国",
    "type": "动画电影",
    "year": "2025",
    "cover": "./52.jpg",
    "url": "./movie-0202.html"
  },
  {
    "title": "大力女子姜南顺",
    "genre": "奇幻喜剧动作",
    "tags": "天生神力, 都市侠客, 缉毒单元剧, 热血搞笑",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "cover": "./53.jpg",
    "url": "./movie-0203.html"
  },
  {
    "title": "猫和老鼠·真人版",
    "genre": "喜剧, 动画, 家庭, 真人+CG",
    "tags": "经典重启, 追逃, 跨次元, 纽约, 闹剧",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./54.jpg",
    "url": "./movie-0204.html"
  },
  {
    "title": "列蒙切洛图书馆大逃亡",
    "genre": "冒险 / 悬疑 / 家庭",
    "tags": "密室逃脱, 图书馆, 谜题, 少年英雄",
    "region": "美国 / 西班牙",
    "type": "电影",
    "year": "2008",
    "cover": "./55.jpg",
    "url": "./movie-0205.html"
  },
  {
    "title": "自由的爱",
    "genre": "爱情, 剧情, 伦理",
    "tags": "开放式关系, 婚姻困境, 文艺, 对话体",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./56.jpg",
    "url": "./movie-0206.html"
  },
  {
    "title": "煮妇神探",
    "genre": "悬疑, 喜剧, 古装",
    "tags": "美食, 破案, 单元剧, 女性",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./57.jpg",
    "url": "./movie-0207.html"
  },
  {
    "title": "正义的子弹",
    "genre": "动作，西部，科幻",
    "tags": "赏金猎人，蒸汽朋克，反乌托邦",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./58.jpg",
    "url": "./movie-0208.html"
  },
  {
    "title": "救援生死线",
    "genre": "动作 / 灾难",
    "tags": "消防, 热血, 群像, 单元救援",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./59.jpg",
    "url": "./movie-0209.html"
  },
  {
    "title": "我男友成了姐夫的理由",
    "genre": "爱情, 家庭, 狗血",
    "tags": "姐妹争夫, 反转, 财阀, 隐藏身世",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./60.jpg",
    "url": "./movie-0210.html"
  },
  {
    "title": "燕山君",
    "genre": "历史, 古装, 动作, 剧情",
    "tags": "暴君, 政治斗争, 改编, 君臣, 权谋",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./61.jpg",
    "url": "./movie-0211.html"
  },
  {
    "title": "血之荣耀",
    "genre": "历史战争 / 剧情",
    "tags": "家族恩怨, 战场牺牲, 权力更迭, 兄弟反目, 热血悲剧",
    "region": "香港",
    "type": "电影",
    "year": "2007",
    "cover": "./62.jpg",
    "url": "./movie-0212.html"
  },
  {
    "title": "人龙传说国语",
    "genre": "古装/奇幻",
    "tags": "龙族, 复仇, 虐恋, 特效, 神话改编",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./63.jpg",
    "url": "./movie-0213.html"
  },
  {
    "title": "末世牢笼",
    "genre": "科幻 / 悬疑",
    "tags": "地下避难所, 记忆移植, 阶层固化, 起义, AI",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "cover": "./64.jpg",
    "url": "./movie-0214.html"
  },
  {
    "title": "恋风",
    "genre": "爱情，文艺",
    "tags": "四叠半，怀旧，错过，夏日，散文诗",
    "region": "日本",
    "type": "动画剧集",
    "year": "2023",
    "cover": "./65.jpg",
    "url": "./movie-0215.html"
  },
  {
    "title": "古诺枫之歌",
    "genre": "剧情， 音乐， 奇幻",
    "tags": "治愈， 钢琴， 时间循环， 手稿",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "cover": "./66.jpg",
    "url": "./movie-0216.html"
  },
  {
    "title": "青涩日记",
    "genre": "青春 / 剧情",
    "tags": "校园，日记，暗恋，霸凌，救赎",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./67.jpg",
    "url": "./movie-0217.html"
  },
  {
    "title": "年青的一代",
    "genre": "剧情/青春",
    "tags": "知青, 理想主义, 地质勘探, 60年代, 青春抉择",
    "region": "中国",
    "type": "电影",
    "year": "1965",
    "cover": "./68.jpg",
    "url": "./movie-0218.html"
  },
  {
    "title": "飞天法宝",
    "genre": "科幻, 喜剧, 冒险",
    "tags": "反重力, 失控发明, 军备竞赛, 极客",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./69.jpg",
    "url": "./movie-0219.html"
  },
  {
    "title": "断肠孤凤",
    "genre": "剧情 / 武侠 / 古装",
    "tags": "邵氏, 女性复仇, 悲剧美学, 江湖恩怨, 经典老片",
    "region": "中国香港",
    "type": "电影",
    "year": "1978",
    "cover": "./70.jpg",
    "url": "./movie-0220.html"
  },
  {
    "title": "青蛙",
    "genre": "剧情, 奇幻, 寓言",
    "tags": "自闭症, 隐喻, 拟人化, 治愈",
    "region": "日本",
    "type": "电影",
    "year": "2017",
    "cover": "./71.jpg",
    "url": "./movie-0221.html"
  },
  {
    "title": "格蕾丝煽动成功",
    "genre": "剧情, 历史",
    "tags": "女权, 政治, 传记, 抗争",
    "region": "英国",
    "type": "剧集",
    "year": "2020",
    "cover": "./72.jpg",
    "url": "./movie-0222.html"
  },
  {
    "title": "魂魄唔齐",
    "genre": "奇幻, 喜剧, 爱情",
    "tags": "粤剧, 附身, 跨时空",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./73.jpg",
    "url": "./movie-0223.html"
  },
  {
    "title": "花街神女",
    "genre": "动作， 犯罪， 女性",
    "tags": "红灯区， 女杀手， 港风",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "cover": "./74.jpg",
    "url": "./movie-0224.html"
  },
  {
    "title": "洛奇6",
    "genre": "剧情，运动",
    "tags": "拳击，暮年英雄，师徒传承，终极一战，励志",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "cover": "./75.jpg",
    "url": "./movie-0225.html"
  },
  {
    "title": "爱上街头艺人",
    "genre": "都市爱情,音乐成长,温情喜剧",
    "tags": "街头艺人,废墟城市,公益议题,失眠之夜,地下乐队,再生",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./76.jpg",
    "url": "./movie-0226.html"
  },
  {
    "title": "拼盘",
    "genre": "剧情 / 家庭",
    "tags": "年夜饭，代际冲突，和解，群像",
    "region": "中国内地",
    "type": "电影",
    "year": "2023",
    "cover": "./77.jpg",
    "url": "./movie-0227.html"
  },
  {
    "title": "你认识我吗",
    "genre": "剧情 / 悬疑",
    "tags": "失忆, 身份认同, 文艺, 反转",
    "region": "法国",
    "type": "电影",
    "year": "2017",
    "cover": "./78.jpg",
    "url": "./movie-0228.html"
  },
  {
    "title": "飞狗巴迪",
    "genre": "家庭 / 喜剧 / 运动",
    "tags": "篮球, 金毛犬, 街头球场, 人狗搭档, 热血逆袭",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./79.jpg",
    "url": "./movie-0229.html"
  },
  {
    "title": "不设限通缉",
    "genre": "动作，科幻，惊悚",
    "tags": "赛博朋克，逃亡，脑机接口，反乌托邦",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./80.jpg",
    "url": "./movie-0230.html"
  },
  {
    "title": "无脸朋友",
    "genre": "动画，奇幻，家庭",
    "tags": "治愈，孤独，友谊，想象力，成长",
    "region": "法国 / 比利时",
    "type": "动画电影",
    "year": "2020",
    "cover": "./81.jpg",
    "url": "./movie-0231.html"
  },
  {
    "title": "魔石神盒",
    "genre": "奇幻 / 冒险 / 动作",
    "tags": "考古, 上古神话, 机关, 人魔共生, 寻宝",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./82.jpg",
    "url": "./movie-0232.html"
  },
  {
    "title": "贵妇失踪案",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": "列车, 古典, 反转, 阶级",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./83.jpg",
    "url": "./movie-0233.html"
  },
  {
    "title": "帅哥们",
    "genre": "喜剧, 青春",
    "tags": "偶像, 整容, 校园",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./84.jpg",
    "url": "./movie-0234.html"
  },
  {
    "title": "最后的隧道",
    "genre": "灾难, 剧情, 悬疑",
    "tags": "地震, 密闭空间, 生存, 人性",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./85.jpg",
    "url": "./movie-0235.html"
  },
  {
    "title": "绝对舞力",
    "genre": "歌舞，动作",
    "tags": "街舞，科幻，机甲，热血",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./86.jpg",
    "url": "./movie-0236.html"
  },
  {
    "title": "成为你的夜晚",
    "genre": "爱情 / 音乐 / 治愈",
    "tags": "偶像乐队, 失眠症, 假戏真做, 心理治愈",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./87.jpg",
    "url": "./movie-0237.html"
  },
  {
    "title": "风柜来的人",
    "genre": "剧情， 青春",
    "tags": "侯孝贤， 澎湖， 成长， 迷茫， 少年",
    "region": "中国台湾",
    "type": "电影",
    "year": "1983",
    "cover": "./88.jpg",
    "url": "./movie-0238.html"
  },
  {
    "title": "飞象计划",
    "genre": "动作 / 科幻 / 冒险",
    "tags": "二战, 超级武器, 机密",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./89.jpg",
    "url": "./movie-0239.html"
  },
  {
    "title": "女导与强盗",
    "genre": "剧情 / 犯罪",
    "tags": "女性, 黑色幽默, 绑架, 片场, 反转",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./90.jpg",
    "url": "./movie-0240.html"
  },
  {
    "title": "信号",
    "genre": "悬疑， 犯罪， 奇幻",
    "tags": "对讲机， 穿越时空， 未结案件， 蝴蝶效应， 双男主",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "cover": "./91.jpg",
    "url": "./movie-0241.html"
  },
  {
    "title": "狼乾 劫",
    "genre": "动作, 奇幻",
    "tags": "狼族, 末日, 宿命, 冷兵器, 牺牲",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./92.jpg",
    "url": "./movie-0242.html"
  },
  {
    "title": "玛莎2020",
    "genre": "惊悚， 剧情",
    "tags": "疫情， 封闭空间， 心理惊悚",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "cover": "./93.jpg",
    "url": "./movie-0243.html"
  },
  {
    "title": "说唱新世代",
    "genre": "音乐, 真人秀",
    "tags": "说唱, 生存法则, 青年文化, 豆瓣高分",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2020",
    "cover": "./94.jpg",
    "url": "./movie-0244.html"
  },
  {
    "title": "真情来电",
    "genre": "爱情 / 奇幻",
    "tags": "手机, 跨时空, 通话, 错过, 治愈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./95.jpg",
    "url": "./movie-0245.html"
  },
  {
    "title": "乘着马车高歌",
    "genre": "剧情、音乐、喜剧",
    "tags": "音乐剧、马车旅行、英伦摇滚、代沟、遗产",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "cover": "./96.jpg",
    "url": "./movie-0246.html"
  },
  {
    "title": "乐韵柔情",
    "genre": "爱情/音乐",
    "tags": "民乐, 青春, 成长, 治愈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./97.jpg",
    "url": "./movie-0247.html"
  },
  {
    "title": "宝贝有戏之小仙女",
    "genre": "儿童奇幻",
    "tags": "仙女棒，小学生，校园，愿望",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "cover": "./98.jpg",
    "url": "./movie-0248.html"
  },
  {
    "title": "寻爱的女人",
    "genre": "剧情， 爱情， 公路",
    "tags": "女性， 寻根， 自我救赎， 网恋， 荒诞",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./99.jpg",
    "url": "./movie-0249.html"
  },
  {
    "title": "键到鬼",
    "genre": "恐怖，奇幻，悬疑",
    "tags": "都市怪谈，键盘，诅咒，新媒体",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./100.jpg",
    "url": "./movie-0250.html"
  },
  {
    "title": "甜蜜18岁",
    "genre": "剧情 / 青春",
    "tags": "成人礼, 小镇少女, 家庭变故, 成长阵痛",
    "region": "中国大陆",
    "type": "电影",
    "year": "2012",
    "cover": "./101.jpg",
    "url": "./movie-0251.html"
  },
  {
    "title": "范·德·沃克第二季",
    "genre": "犯罪 / 悬疑 / 剧情",
    "tags": "侦探, 阿姆斯特丹, 心理分析, 阴郁, 智商在线",
    "region": "英国",
    "type": "TV 剧集",
    "year": "2022",
    "cover": "./102.jpg",
    "url": "./movie-0252.html"
  },
  {
    "title": "花心大坏蛋",
    "genre": "喜剧 / 爱情",
    "tags": "浪子回头, 契约恋爱, 笑中带泪, 女性觉醒",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./103.jpg",
    "url": "./movie-0253.html"
  },
  {
    "title": "柜魔",
    "genre": "恐怖 / 超自然 / 心理",
    "tags": "童年阴影，密室恐惧，高概念设定",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./104.jpg",
    "url": "./movie-0254.html"
  },
  {
    "title": "十三个原因第一季",
    "genre": "剧情 / 悬疑 / 青春",
    "tags": "校园, 录音带, 霸凌, 心理创伤, 社死",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./105.jpg",
    "url": "./movie-0255.html"
  },
  {
    "title": "我是丐帮不打奶花",
    "genre": "喜剧 / 武侠 / 游戏",
    "tags": "剑网三, 电竞, 破次元, 搞笑热血",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "cover": "./106.jpg",
    "url": "./movie-0256.html"
  },
  {
    "title": "血肉森林",
    "genre": "恐怖，惊悚",
    "tags": "露营，病毒，变异，生存狂",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "cover": "./107.jpg",
    "url": "./movie-0257.html"
  },
  {
    "title": "汪汪忠臣藏",
    "genre": "喜剧，历史",
    "tags": "狗狗，武士，复仇，萌宠",
    "region": "日本",
    "type": "电影",
    "year": "2019",
    "cover": "./108.jpg",
    "url": "./movie-0258.html"
  },
  {
    "title": "最后的密特朗",
    "genre": "传记， 历史， 剧情",
    "tags": "政治， 密特朗， 私人秘书， 秘密",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./109.jpg",
    "url": "./movie-0259.html"
  },
  {
    "title": "爱在有情天",
    "genre": "爱情, 年代",
    "tags": "民国, 苦情, TVB",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2003",
    "cover": "./110.jpg",
    "url": "./movie-0260.html"
  },
  {
    "title": "酒心情缘",
    "genre": "爱情 / 剧情",
    "tags": "居酒屋, 调酒师, 治愈, 暧昧, 都市",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./111.jpg",
    "url": "./movie-0261.html"
  },
  {
    "title": "死于女人",
    "genre": "惊悚 / 悬疑 / 情色",
    "tags": "蛇蝎美人, 黑色电影, 反转, 洛杉矶, 私家侦探",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./112.jpg",
    "url": "./movie-0262.html"
  },
  {
    "title": "鲁邦三世：过去的监狱",
    "genre": "动画，冒险，犯罪",
    "tags": "怪盗，越狱，宿敌，回忆杀，智斗",
    "region": "日本",
    "type": "电影",
    "year": "2019",
    "cover": "./113.jpg",
    "url": "./movie-0263.html"
  },
  {
    "title": "生活多美好",
    "genre": "剧情 / 家庭 / 奇幻",
    "tags": "平行人生, 抑郁症, 社区温情",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./114.jpg",
    "url": "./movie-0264.html"
  },
  {
    "title": "日本第一的背叛者",
    "genre": "悬疑，犯罪，社会",
    "tags": "卧底，黑道，双重身份",
    "region": "日本",
    "type": "电视剧",
    "year": "2025",
    "cover": "./115.jpg",
    "url": "./movie-0265.html"
  },
  {
    "title": "幸福山歌",
    "genre": "剧情 / 音乐 / 家庭",
    "tags": "民歌, 乡村, 传承, 亲情, 治愈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./116.jpg",
    "url": "./movie-0266.html"
  },
  {
    "title": "纯白",
    "genre": "悬疑 / 剧情",
    "tags": "医院, 伦理, 罗生门, 女性",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./117.jpg",
    "url": "./movie-0267.html"
  },
  {
    "title": "爱·缠·杀:谁是恐怖情人",
    "genre": "悬疑 / 犯罪 / 爱情",
    "tags": "病娇, 三角恋, 跟踪狂, 反转",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "cover": "./118.jpg",
    "url": "./movie-0268.html"
  },
  {
    "title": "霸王艳姬",
    "genre": "剧情, 爱情, 同性",
    "tags": "戏班, 民国, 虐恋, 京剧",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./119.jpg",
    "url": "./movie-0269.html"
  },
  {
    "title": "人形师",
    "genre": "恐怖 / 悬疑",
    "tags": "人偶, 诅咒, 悬疑, 日式恐怖, 手工艺",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./120.jpg",
    "url": "./movie-0270.html"
  },
  {
    "title": "盗墓迷灵",
    "genre": "悬疑 / 冒险 / 惊悚",
    "tags": "盗墓, 民俗, 灵异, 单元剧, 揭秘",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "cover": "./121.jpg",
    "url": "./movie-0271.html"
  },
  {
    "title": "红娘",
    "genre": "古装、喜剧、奇幻、爱情",
    "tags": "红线, 婚约诡局, 旧书档案, 女性智谋, 因果婚约",
    "region": "中国",
    "type": "古装奇幻爱情剧",
    "year": "2020",
    "cover": "./122.jpg",
    "url": "./movie-0272.html"
  },
  {
    "title": "梦的解析",
    "genre": "科幻 / 悬疑 / 心理",
    "tags": "梦境，潜入，创伤，实验，伦理",
    "region": "英国 / 美国",
    "type": "剧集",
    "year": "2026",
    "cover": "./123.jpg",
    "url": "./movie-0273.html"
  },
  {
    "title": "丫丫姐妹们的神圣秘密",
    "genre": "喜剧 / 悬疑 / 女性",
    "tags": "闺蜜情，女性互助，小镇秘密，寻宝解谜",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./124.jpg",
    "url": "./movie-0274.html"
  },
  {
    "title": "雪域少年",
    "genre": "剧情 / 运动 / 励志",
    "tags": "高原，冰球，少年热血，信仰与现代",
    "region": "中国大陆 / 西藏",
    "type": "电影",
    "year": "2026",
    "cover": "./125.jpg",
    "url": "./movie-0275.html"
  },
  {
    "title": "尚迪戈尔的陌生人",
    "genre": "剧情， 悬疑， 犯罪",
    "tags": "小镇疑云， 外来者， 种姓， 正义， 宝莱坞",
    "region": "印度",
    "type": "电影",
    "year": "2023",
    "cover": "./126.jpg",
    "url": "./movie-0276.html"
  },
  {
    "title": "银行四对头",
    "genre": "喜剧 / 犯罪",
    "tags": "抢银行, 乌龙, 多线叙事, 小人物, 荒诞",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "cover": "./127.jpg",
    "url": "./movie-0277.html"
  },
  {
    "title": "火雷弹",
    "genre": "战争 / 动作 / 灾难",
    "tags": "排雷， 兄弟情， 边境， 牺牲",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./128.jpg",
    "url": "./movie-0278.html"
  },
  {
    "title": "魔幻学院",
    "genre": "奇幻 / 喜剧",
    "tags": "魔法校园, 反套路, 学渣逆袭, 考试地狱",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "cover": "./129.jpg",
    "url": "./movie-0279.html"
  },
  {
    "title": "我们不该在这里",
    "genre": "剧情 / 惊悚",
    "tags": "家庭冲突, 心理压迫, 空间隐喻",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./130.jpg",
    "url": "./movie-0280.html"
  },
  {
    "title": "古镇凶灵之巫咒缠身",
    "genre": "恐怖 / 悬疑",
    "tags": "民俗恐怖, 巫术诅咒, 古镇",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "cover": "./131.jpg",
    "url": "./movie-0281.html"
  },
  {
    "title": "高台家的成员",
    "genre": "喜剧, 爱情",
    "tags": "脑内幻想, 漫改, 家族, 治愈",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./132.jpg",
    "url": "./movie-0282.html"
  },
  {
    "title": "洛基第五集：龙吟虎啸",
    "genre": "科幻 / 动作",
    "tags": "漫威, 多元宇宙, 时间变异管理局",
    "region": "美国",
    "type": "剧集（单集）",
    "year": "2021",
    "cover": "./133.jpg",
    "url": "./movie-0283.html"
  },
  {
    "title": "残虐你，娱乐我",
    "genre": "恐怖，惊悚",
    "tags": "密室逃脱，网络直播，人性考验，血腥",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "cover": "./134.jpg",
    "url": "./movie-0284.html"
  },
  {
    "title": "听见歌 再唱",
    "genre": "剧情 / 音乐",
    "tags": "合唱团, 原住民, 梦想, 治愈",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "cover": "./135.jpg",
    "url": "./movie-0285.html"
  },
  {
    "title": "破毒强人",
    "genre": "警匪, 动作",
    "tags": "毒品, 卧底, 极端手段",
    "region": "香港",
    "type": "TV剧集",
    "year": "2025",
    "cover": "./136.jpg",
    "url": "./movie-0286.html"
  },
  {
    "title": "小小心愿",
    "genre": "家庭, 剧情",
    "tags": "亲子关系, 绝症, 治愈, 社会议题",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./137.jpg",
    "url": "./movie-0287.html"
  },
  {
    "title": "我们现在去日内瓦",
    "genre": "喜剧、剧情、公路",
    "tags": "脱欧，养老，老年叛逆，黑色幽默",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./138.jpg",
    "url": "./movie-0288.html"
  },
  {
    "title": "妖夜凶灵",
    "genre": "恐怖, 惊悚",
    "tags": "都市怪谈, 出租车, 午夜凶灵",
    "region": "中国香港",
    "type": "电影",
    "year": "2027",
    "cover": "./139.jpg",
    "url": "./movie-0289.html"
  },
  {
    "title": "好事多磨2024",
    "genre": "喜剧 / 剧情",
    "tags": "黑色幽默, 结婚, 意外连连, 小人物",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./140.jpg",
    "url": "./movie-0290.html"
  },
  {
    "title": "夜间小屋",
    "genre": "恐怖, 悬疑, 惊悚",
    "tags": "鬼屋, 心理恐怖, 西班牙悬疑, 高能反转",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "cover": "./141.jpg",
    "url": "./movie-0291.html"
  },
  {
    "title": "冰上情缘2",
    "genre": "爱情, 运动, 剧情",
    "tags": "花样滑冰, 破镜重圆, 竞技热血, 双人滑",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./142.jpg",
    "url": "./movie-0292.html"
  },
  {
    "title": "我的掌门女友第二季",
    "genre": "奇幻/爱情",
    "tags": "武林掌门, 都市职场, 反穿越, 爆笑同居",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "cover": "./143.jpg",
    "url": "./movie-0293.html"
  },
  {
    "title": "著魔的丽莎",
    "genre": "恐怖 / 心理",
    "tags": "附身，宗教，东欧暗黑，女性",
    "region": "波兰",
    "type": "电影",
    "year": "2023",
    "cover": "./144.jpg",
    "url": "./movie-0294.html"
  },
  {
    "title": "捉妖学院",
    "genre": "奇幻, 喜剧",
    "tags": "网络大电影, 校园, 法术, 搞笑",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "cover": "./145.jpg",
    "url": "./movie-0295.html"
  },
  {
    "title": "特种部队：蛇眼之战",
    "genre": "动作, 科幻",
    "tags": "特种部队衍生, 忍者, 复仇",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./146.jpg",
    "url": "./movie-0296.html"
  },
  {
    "title": "海上孟府",
    "genre": "年代",
    "tags": "民国, 商战, 家族",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2015",
    "cover": "./147.jpg",
    "url": "./movie-0297.html"
  },
  {
    "title": "真爱向前行",
    "genre": "爱情 / 励志 / 喜剧",
    "tags": "重新出发, 中年恋爱, 旅行公路, 事业重建, 轻熟情感",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "cover": "./148.jpg",
    "url": "./movie-0298.html"
  },
  {
    "title": "毒品世界逃生记",
    "genre": "犯罪、剧情、惊悚",
    "tags": "贩毒、卧底、生存、写实、人性",
    "region": "哥伦比亚 / 美国",
    "type": "剧集",
    "year": "2021",
    "cover": "./149.jpg",
    "url": "./movie-0299.html"
  },
  {
    "title": "小妮扛枪",
    "genre": "战争 / 剧情 / 女性",
    "tags": "女狙击手, 抗日战争, 母女传承, 枪战写实",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./150.jpg",
    "url": "./movie-0300.html"
  },
  {
    "title": "夺魂连线",
    "genre": "恐怖 / 悬疑",
    "tags": "桌面电影, 暗网直播, 降灵会",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./1.jpg",
    "url": "./movie-0301.html"
  },
  {
    "title": "东德男孩征美记",
    "genre": "喜剧、公路",
    "tags": "冷战、柏林墙、逃亡、荒诞、青春",
    "region": "德国",
    "type": "电影",
    "year": "2022",
    "cover": "./2.jpg",
    "url": "./movie-0302.html"
  },
  {
    "title": "杀死母亲",
    "genre": "剧情, 惊悚",
    "tags": "心理惊悚, 母女关系, 控制欲, 弑母",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./3.jpg",
    "url": "./movie-0303.html"
  },
  {
    "title": "裸体海滩",
    "genre": "喜剧，剧情，人生",
    "tags": "天体主义，中年危机，治愈，自然主义",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./4.jpg",
    "url": "./movie-0304.html"
  },
  {
    "title": "爱很真水很深",
    "genre": "爱情, 悬疑",
    "tags": "潜水, 失忆, 替身, 豪门",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "cover": "./5.jpg",
    "url": "./movie-0305.html"
  },
  {
    "title": "冷漠怪",
    "genre": "剧情 / 悬疑 / 奇幻",
    "tags": "阿尔卑斯山, 孤独, 超自然, 戛纳",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2019",
    "cover": "./6.jpg",
    "url": "./movie-0306.html"
  },
  {
    "title": "飞向天空，救援之翼",
    "genre": "动作 / 剧情 / 灾难",
    "tags": "航空救援，消防飞机，成长",
    "region": "日本",
    "type": "电影",
    "year": "2008",
    "cover": "./7.jpg",
    "url": "./movie-0307.html"
  },
  {
    "title": "灵魂歌王",
    "genre": "音乐 / 传记 / 剧情",
    "tags": "雷·查尔斯, 灵魂乐, 失明, 天才",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./8.jpg",
    "url": "./movie-0308.html"
  },
  {
    "title": "信任之危 第一季",
    "genre": "悬疑 / 惊悚",
    "tags": "心理操控, 婚姻骗局, 多层反转",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./9.jpg",
    "url": "./movie-0309.html"
  },
  {
    "title": "阿娘使道传",
    "genre": "古装, 奇幻, 悬疑",
    "tags": "阴阳眼使道, 女鬼助手, 朝鲜神探",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./10.jpg",
    "url": "./movie-0310.html"
  },
  {
    "title": "恶夜追杀令3",
    "genre": "动作 / 惊悚 / 犯罪",
    "tags": "硬核动作, 复仇终章, 一刀不剪",
    "region": "美国",
    "type": "电影",
    "year": "2028",
    "cover": "./11.jpg",
    "url": "./movie-0311.html"
  },
  {
    "title": "婴儿配方",
    "genre": "科幻悬疑",
    "tags": "未来科技, 伦理困境, 黑色幽默",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./12.jpg",
    "url": "./movie-0312.html"
  },
  {
    "title": "思念是一种涂鸦",
    "genre": "爱情 / 动画 / 奇幻",
    "tags": "涂鸦, 失忆, 城市漫游, 手绘动画",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./13.jpg",
    "url": "./movie-0313.html"
  },
  {
    "title": "热舞狂潮",
    "genre": "歌舞剧情",
    "tags": "街舞, 阶层对立, 热血, 青春",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./14.jpg",
    "url": "./movie-0314.html"
  },
  {
    "title": "洞悉真相",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": "心理战, 测谎, 审讯, 反转, 密室",
    "region": "韩国",
    "type": "电影",
    "year": "2020",
    "cover": "./15.jpg",
    "url": "./movie-0315.html"
  },
  {
    "title": "性爱白日梦",
    "genre": "剧情, 奇幻, 情色",
    "tags": "幻想, 自我探索, 女性视角, 艺术",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./16.jpg",
    "url": "./movie-0316.html"
  },
  {
    "title": "笔仙魔咒",
    "genre": "恐怖, 悬疑",
    "tags": "校园怪谈, 心理惊悚, 轮回, 诅咒, 反转",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./17.jpg",
    "url": "./movie-0317.html"
  },
  {
    "title": "开门吧",
    "genre": "恐怖 / 悬疑 / 心理",
    "tags": "密室, 门, 规则怪谈, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./18.jpg",
    "url": "./movie-0318.html"
  },
  {
    "title": "快乐丧尸",
    "genre": "恐怖喜剧",
    "tags": "丧尸, 黑色幽默, 误会连锁, 社区, 反差, 生存闹剧",
    "region": "韩国",
    "type": "电影",
    "year": "2020",
    "cover": "./19.jpg",
    "url": "./movie-0319.html"
  },
  {
    "title": "北村方向",
    "genre": "悬疑、惊悚、剧情",
    "tags": "首尔古村、民宿命案、时空错乱",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./20.jpg",
    "url": "./movie-0320.html"
  },
  {
    "title": "极限救援",
    "genre": "动作 / 灾难",
    "tags": "雪山崩塌、无人机救援、极限生存",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./21.jpg",
    "url": "./movie-0321.html"
  },
  {
    "title": "去里斯本的夜车",
    "genre": "剧情文艺",
    "tags": "文学之旅, 自我寻找, 夜车独白",
    "region": "德国/瑞士/葡萄牙",
    "type": "电影",
    "year": "2013",
    "cover": "./22.jpg",
    "url": "./movie-0322.html"
  },
  {
    "title": "非恋人絮语",
    "genre": "爱情 / 喜剧",
    "tags": "话痨电影, 一夜情, 情感哲理, 黑白",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2019",
    "cover": "./23.jpg",
    "url": "./movie-0323.html"
  },
  {
    "title": "时间牢笼",
    "genre": "科幻, 惊悚",
    "tags": "循环, 密室, 心理战, 高概念, 反转结局",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "cover": "./24.jpg",
    "url": "./movie-0324.html"
  },
  {
    "title": "百战天狼",
    "genre": "动作 / 抗战",
    "tags": "狙击手, 双雄, 热血",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./25.jpg",
    "url": "./movie-0325.html"
  },
  {
    "title": "作弊",
    "genre": "剧情, 犯罪, 青春",
    "tags": "天才枪手, 考试, 跨国作弊, 高智商",
    "region": "泰国",
    "type": "电影",
    "year": "2017",
    "cover": "./26.jpg",
    "url": "./movie-0326.html"
  },
  {
    "title": "信仰时分",
    "genre": "悬疑 / 惊悚 / 宗教",
    "tags": "教皇悬案, 禁书考古, 梵蒂冈阴谋, 信仰危机",
    "region": "意大利 / 梵蒂冈",
    "type": "电影",
    "year": "2025",
    "cover": "./27.jpg",
    "url": "./movie-0327.html"
  },
  {
    "title": "百战边城",
    "genre": "历史 / 战争 / 剧情",
    "tags": "边塞烽烟, 古代战争, 忠勇守卫, 家国情怀",
    "region": "中国大陆",
    "type": "电视剧 / 网络剧",
    "year": "2025",
    "cover": "./28.jpg",
    "url": "./movie-0328.html"
  },
  {
    "title": "爱、荣誉和服从",
    "genre": "犯罪 / 喜剧 / 动作",
    "tags": "黑帮, 足球流氓, 荒诞, 英国痞子",
    "region": "英国",
    "type": "电影",
    "year": "2001",
    "cover": "./29.jpg",
    "url": "./movie-0329.html"
  },
  {
    "title": "骗子",
    "genre": "犯罪，动作",
    "tags": "诈骗，复仇，局中局",
    "region": "韩国",
    "type": "电影",
    "year": "2017",
    "cover": "./30.jpg",
    "url": "./movie-0330.html"
  },
  {
    "title": "迷盲",
    "genre": "悬疑惊悚",
    "tags": "感官剥夺, 密室逃脱, 心理游戏, 反转连环",
    "region": "西班牙",
    "type": "电影",
    "year": "2023",
    "cover": "./31.jpg",
    "url": "./movie-0331.html"
  },
  {
    "title": "高达创战者",
    "genre": "科幻 / 竞技 / 少年",
    "tags": "钢普拉，对战，友情，燃",
    "region": "日本",
    "type": "剧集（动画）",
    "year": "2013",
    "cover": "./32.jpg",
    "url": "./movie-0332.html"
  },
  {
    "title": "夏日进行时",
    "genre": "青春, 家庭",
    "tags": "暑假, 治愈, 成长",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./33.jpg",
    "url": "./movie-0333.html"
  },
  {
    "title": "活死人",
    "genre": "恐怖， 动作",
    "tags": "丧尸， 末世， 病毒， 人性",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./34.jpg",
    "url": "./movie-0334.html"
  },
  {
    "title": "汪汪队立大功：超级大电影",
    "genre": "动画, 冒险, 儿童",
    "tags": "狗狗救援, 超级装备, 团队协作",
    "region": "美国, 加拿大",
    "type": "电影",
    "year": "2025",
    "cover": "./35.jpg",
    "url": "./movie-0335.html"
  },
  {
    "title": "鱿鱼仔的乡土生活第十二季",
    "genre": "动画 / 喜剧",
    "tags": "成人动画, 乡村, 黑色幽默",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./36.jpg",
    "url": "./movie-0336.html"
  },
  {
    "title": "散打粤语",
    "genre": "动作 / 体育 / 剧情",
    "tags": "散打, 粤语片, 底层逆袭, 拳击, 市井",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./37.jpg",
    "url": "./movie-0337.html"
  },
  {
    "title": "狄仁杰之龙隐迷窟",
    "genre": "悬疑, 动作, 古装",
    "tags": "探案, 水底墓穴, 权力斗争",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./38.jpg",
    "url": "./movie-0338.html"
  },
  {
    "title": "加菲猫国语",
    "genre": "喜剧，动画",
    "tags": "猫咪，吃货，懒散，搞笑，国语配音",
    "region": "美国",
    "type": "电影",
    "year": "2004",
    "cover": "./39.jpg",
    "url": "./movie-0339.html"
  },
  {
    "title": "荒漠浴血记",
    "genre": "西部 / 惊悚",
    "tags": "荒漠求生, 赏金猎人, 复仇, 黄沙美学",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./40.jpg",
    "url": "./movie-0340.html"
  },
  {
    "title": "分手专家",
    "genre": "喜剧, 爱情",
    "tags": "职业分手人, 假戏真做, 公路",
    "region": "德国",
    "type": "电影",
    "year": "2013",
    "cover": "./41.jpg",
    "url": "./movie-0341.html"
  },
  {
    "title": "侦探小说",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": "书中案成真, 作家追凶, 双重叙事",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./42.jpg",
    "url": "./movie-0342.html"
  },
  {
    "title": "大梦归离",
    "genre": "古装，奇幻",
    "tags": "造梦司，篡改执念，帝王心魔",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./43.jpg",
    "url": "./movie-0343.html"
  },
  {
    "title": "爱的契约",
    "genre": "爱情, 剧情",
    "tags": "代笔, 假结婚, 治愈, 催泪",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./44.jpg",
    "url": "./movie-0344.html"
  },
  {
    "title": "陈赓晋南大捷",
    "genre": "战争 / 历史 / 传记",
    "tags": "解放战争, 运动战, 名将, 以少胜多",
    "region": "中国大陆",
    "type": "电影",
    "year": "2009",
    "cover": "./45.jpg",
    "url": "./movie-0345.html"
  },
  {
    "title": "霸权动画！",
    "genre": "剧情 / 职场",
    "tags": "动画制作, 行业剧, 热血, 创作苦斗",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "cover": "./46.jpg",
    "url": "./movie-0346.html"
  },
  {
    "title": "扁担·姑娘",
    "genre": "剧情 / 爱情",
    "tags": "进城务工, 城乡冲突, 初恋, 现实主义",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./47.jpg",
    "url": "./movie-0347.html"
  },
  {
    "title": "一根木头第二季",
    "genre": "青春、校园、喜剧",
    "tags": "直男癌、情商低、暗恋、爆笑、社团活动",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./48.jpg",
    "url": "./movie-0348.html"
  },
  {
    "title": "神秘匹兹堡",
    "genre": "剧情 / 同性",
    "tags": "文学改编, 成长, 城市, 迷惘, 三角恋",
    "region": "美国",
    "type": "电影",
    "year": "1988",
    "cover": "./49.jpg",
    "url": "./movie-0349.html"
  },
  {
    "title": "功夫热粤语",
    "genre": "动作 / 喜剧",
    "tags": "功夫，小贩，港剧，市井英雄，搞笑打斗",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2010",
    "cover": "./50.jpg",
    "url": "./movie-0350.html"
  },
  {
    "title": "像这样的小事",
    "genre": "剧情",
    "tags": "日常治愈, 邻里温情, 极简主义",
    "region": "爱尔兰",
    "type": "电影",
    "year": "2025",
    "cover": "./51.jpg",
    "url": "./movie-0351.html"
  },
  {
    "title": "请别忧伤了二之宫君",
    "genre": "喜剧，爱情，校园",
    "tags": "漫改，女装，反套路，搞笑",
    "region": "日本",
    "type": "电视剧",
    "year": "2007",
    "cover": "./52.jpg",
    "url": "./movie-0352.html"
  },
  {
    "title": "我们得离开这个地方",
    "genre": "科幻 / 惊悚",
    "tags": "时间循环, 怪物, 逃杀, 密室",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "cover": "./53.jpg",
    "url": "./movie-0353.html"
  },
  {
    "title": "流光之下",
    "genre": "剧情 / 悬疑 / 商战",
    "tags": "商战, 悬疑, 珠宝, 复仇, 女性",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./54.jpg",
    "url": "./movie-0354.html"
  },
  {
    "title": "钢铁英雄",
    "genre": "战争 / 传记 / 动作",
    "tags": "二战, 血战钢锯岭, 军医, 信仰, 拒绝持枪",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./55.jpg",
    "url": "./movie-0355.html"
  },
  {
    "title": "球恋大满贯",
    "genre": "青春运动爱情",
    "tags": "网球，校园，双向暗恋，热血",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "cover": "./56.jpg",
    "url": "./movie-0356.html"
  },
  {
    "title": "春色无边脂粉阵",
    "genre": "喜剧, 动作, 古装",
    "tags": "女装大佬, 江湖恩怨, 港式无厘头",
    "region": "香港",
    "type": "电影",
    "year": "1999",
    "cover": "./57.jpg",
    "url": "./movie-0357.html"
  },
  {
    "title": "祸水尤物",
    "genre": "剧情，情色，悬疑",
    "tags": "蛇蝎美人，黑色电影，复仇，反转，情欲",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "cover": "./58.jpg",
    "url": "./movie-0358.html"
  },
  {
    "title": "遇见馆藏·太空季",
    "genre": "真人秀，科普",
    "tags": "博物馆，航天，艺人体验，沉浸式，国潮科普",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "cover": "./59.jpg",
    "url": "./movie-0359.html"
  },
  {
    "title": "世界温柔的冷漠",
    "genre": "剧情 / 哲学",
    "tags": "存在主义, 疏离, 都市, 文艺, 加缪",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./60.jpg",
    "url": "./movie-0360.html"
  },
  {
    "title": "生命之环",
    "genre": "科幻, 悬疑, 伦理",
    "tags": "永生技术, 器官交易, 阶级固化",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./61.jpg",
    "url": "./movie-0361.html"
  },
  {
    "title": "快乐的老幽灵",
    "genre": "喜剧 / 奇幻",
    "tags": "幽灵, 公寓, 治愈, 社畜, 反向恐怖",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./62.jpg",
    "url": "./movie-0362.html"
  },
  {
    "title": "恶师损友",
    "genre": "犯罪 / 动作 / 校园",
    "tags": "校园暴力, 以暴制暴, 黑帮老师, 复仇, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./63.jpg",
    "url": "./movie-0363.html"
  },
  {
    "title": "你是哪里人",
    "genre": "剧情, 喜剧",
    "tags": "地域歧视, 北漂, 身份认同, 写实, 温情",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./64.jpg",
    "url": "./movie-0364.html"
  },
  {
    "title": "相爱的好日子",
    "genre": "爱情 / 剧情",
    "tags": "中年爱情, 临终关怀, 温情, 生命意义",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2023",
    "cover": "./65.jpg",
    "url": "./movie-0365.html"
  },
  {
    "title": "魔法书",
    "genre": "奇幻 / 家庭 / 冒险",
    "tags": "二手书店，咒语误用，兄妹冒险，手绘动画插入，都市丛林",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "cover": "./66.jpg",
    "url": "./movie-0366.html"
  },
  {
    "title": "辣舞姐妹",
    "genre": "歌舞 / 剧情",
    "tags": "姐妹情，街舞，逆袭，女性力量，拉丁热舞",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./67.jpg",
    "url": "./movie-0367.html"
  },
  {
    "title": "女煞星",
    "genre": "动作,悬疑,女性成长",
    "tags": "刺客叙事,反复仇,女性正义,城市暴力",
    "region": "中国大陆",
    "type": "动作悬疑片",
    "year": "2023",
    "cover": "./68.jpg",
    "url": "./movie-0368.html"
  },
  {
    "title": "鱿鱼仔的乡土生活第十一季",
    "genre": "动画 / 喜剧 / 成人向",
    "tags": "黑色幽默，美国农村，废柴主角，社会讽刺",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "cover": "./69.jpg",
    "url": "./movie-0369.html"
  },
  {
    "title": "药炉红粉",
    "genre": "古装，悬疑",
    "tags": "中医，女性，权谋",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "cover": "./70.jpg",
    "url": "./movie-0370.html"
  },
  {
    "title": "忧郁的物怪庵第二季",
    "genre": "奇幻、神魔、治愈",
    "tags": "妖怪，驱魔，友情，清新治愈",
    "region": "日本",
    "type": "动漫",
    "year": "2019",
    "cover": "./71.jpg",
    "url": "./movie-0371.html"
  },
  {
    "title": "铁面人国语",
    "genre": "历史 / 动作 / 剧情",
    "tags": "大仲马, 宫廷, 双胞胎, 权谋",
    "region": "法国 / 中国大陆 (合拍)",
    "type": "电影",
    "year": "2024",
    "cover": "./72.jpg",
    "url": "./movie-0372.html"
  },
  {
    "title": "杀出狂人镇1973",
    "genre": "恐怖 / 科幻",
    "tags": "邪教, 病毒, 小镇, 翻拍",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./73.jpg",
    "url": "./movie-0373.html"
  },
  {
    "title": "全家就是米家",
    "genre": "喜剧 / 家庭",
    "tags": "冒牌家庭, 黑色幽默, 公路喜剧",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./74.jpg",
    "url": "./movie-0374.html"
  },
  {
    "title": "老广的味道第三季",
    "genre": "美食 / 人文 / 纪实",
    "tags": "广东风味, 乡土记忆, 市井烟火, 老手艺, 家庭餐桌, 城乡旅行",
    "region": "中国大陆",
    "type": "纪录片",
    "year": "2018",
    "cover": "./75.jpg",
    "url": "./movie-0375.html"
  },
  {
    "title": "初度春风",
    "genre": "青春 / 剧情",
    "tags": "高考, 师生, 成长",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./76.jpg",
    "url": "./movie-0376.html"
  },
  {
    "title": "浮生录",
    "genre": "年代 / 家庭",
    "tags": "民国, 家族, 上海, 女性",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./77.jpg",
    "url": "./movie-0377.html"
  },
  {
    "title": "捕鼠记",
    "genre": "喜剧, 惊悚",
    "tags": "密室, 反转, 黑色幽默, 动物",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./78.jpg",
    "url": "./movie-0378.html"
  },
  {
    "title": "小女孩莫妮卡",
    "genre": "剧情、儿童、文艺",
    "tags": "二战，犹太儿童，乡村，人性",
    "region": "法国 / 意大利",
    "type": "电影",
    "year": "2023",
    "cover": "./79.jpg",
    "url": "./movie-0379.html"
  },
  {
    "title": "火影忍者剧场版：忍者之路",
    "genre": "动画，动作，奇幻",
    "tags": "火影，平行世界，鸣人",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "cover": "./80.jpg",
    "url": "./movie-0380.html"
  },
  {
    "title": "弑女的故事",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": "反转, 伦理, 复仇",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./81.jpg",
    "url": "./movie-0381.html"
  },
  {
    "title": "新独居时代",
    "genre": "剧情 / 科幻",
    "tags": "近未来, 孤独感, 科技伦理, 单元剧",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "cover": "./82.jpg",
    "url": "./movie-0382.html"
  },
  {
    "title": "无知之夜",
    "genre": "剧情惊悚",
    "tags": "失忆, 邪教, 精神控制",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./83.jpg",
    "url": "./movie-0383.html"
  },
  {
    "title": "百花缭乱武士少女",
    "genre": "动作/喜剧/校园",
    "tags": "女高中生、武士道、热血、搞笑",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./84.jpg",
    "url": "./movie-0384.html"
  },
  {
    "title": "不是你的错，是我的",
    "genre": "爱情, 剧情, 文艺",
    "tags": "分手, 邮件, 香港, 错过",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "cover": "./85.jpg",
    "url": "./movie-0385.html"
  },
  {
    "title": "敌对分子",
    "genre": "西部, 剧情, 冒险",
    "tags": "1890年代, 印第安战争, 护送任务, 种族仇恨, 救赎",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "cover": "./86.jpg",
    "url": "./movie-0386.html"
  },
  {
    "title": "亡命大画家",
    "genre": "喜剧、犯罪、剧情",
    "tags": "艺术黑市，假画，老年犯罪，师徒，黑色幽默",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "cover": "./87.jpg",
    "url": "./movie-0387.html"
  },
  {
    "title": "看海的日子",
    "genre": "文艺 / 家庭",
    "tags": "乡土, 亲情, 时代变迁",
    "region": "台湾",
    "type": "电影",
    "year": "1983",
    "cover": "./88.jpg",
    "url": "./movie-0388.html"
  },
  {
    "title": "埃瑞拉",
    "genre": "科幻",
    "tags": "人工智能, 伦理困境, 虚拟意识",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "cover": "./89.jpg",
    "url": "./movie-0389.html"
  },
  {
    "title": "逃往你的心",
    "genre": "爱情/公路",
    "tags": "搭车旅行, 治愈系, 新疆风光, 双向救赎",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "cover": "./90.jpg",
    "url": "./movie-0390.html"
  },
  {
    "title": "月落玉长河",
    "genre": "剧情, 历史, 家庭",
    "tags": "家族史诗, 丝绸之恋, 年代变迁, 守护",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./91.jpg",
    "url": "./movie-0391.html"
  },
  {
    "title": "跨世奇人",
    "genre": "剧情, 奇幻, 爱情",
    "tags": "穿越, 轮回, 宿命, 民国, 手艺人",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./92.jpg",
    "url": "./movie-0392.html"
  },
  {
    "title": "鲸骑士",
    "genre": "剧情, 家庭, 奇幻",
    "tags": "毛利文化, 少女, 鲸鱼, 传承",
    "region": "新西兰",
    "type": "电影",
    "year": "2024",
    "cover": "./93.jpg",
    "url": "./movie-0393.html"
  },
  {
    "title": "69式夏天",
    "genre": "青春, 喜剧, 剧情",
    "tags": "1969年, 学运, 摇滚乐, 小镇青年",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./94.jpg",
    "url": "./movie-0394.html"
  },
  {
    "title": "英雄不流泪",
    "genre": "动作 / 剧情 / 犯罪",
    "tags": "黑帮复仇，退役军人，以暴制暴，悲情英雄，硬汉",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./95.jpg",
    "url": "./movie-0395.html"
  },
  {
    "title": "黑衣人3国语",
    "genre": "喜剧 / 动作 / 科幻",
    "tags": "时空穿越，外星人，搭档喜剧，60年代，拯救未来",
    "region": "美国",
    "type": "电影",
    "year": "2012",
    "cover": "./96.jpg",
    "url": "./movie-0396.html"
  },
  {
    "title": "我最爱的家人",
    "genre": "家庭, 情感",
    "tags": "养老, 多子女, 城乡冲突, 催泪",
    "region": "中国",
    "type": "电视剧",
    "year": "2022",
    "cover": "./97.jpg",
    "url": "./movie-0397.html"
  },
  {
    "title": "死亡怪手",
    "genre": "悬疑 / 犯罪",
    "tags": "怪手司机, 连环杀人, 工地暗影",
    "region": "中国台湾",
    "type": "电影",
    "year": "2018",
    "cover": "./98.jpg",
    "url": "./movie-0398.html"
  },
  {
    "title": "旋风骑士",
    "genre": "动作 / 犯罪 / 剧情",
    "tags": "摩托车特技, 底层复仇, 爽片",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./99.jpg",
    "url": "./movie-0399.html"
  },
  {
    "title": "十九岁少年与欧陆",
    "genre": "剧情, 公路, 青春",
    "tags": "成年礼, 流浪, 欧洲风光, 自我发现, 无对白",
    "region": "法国 / 德国",
    "type": "电影",
    "year": "2012",
    "cover": "./100.jpg",
    "url": "./movie-0400.html"
  },
  {
    "title": "维希之眼",
    "genre": "历史 / 谍战 / 剧情",
    "tags": "二战, 维希法国, 盲人, 间谍",
    "region": "法国",
    "type": "剧集",
    "year": "2025",
    "cover": "./101.jpg",
    "url": "./movie-0401.html"
  },
  {
    "title": "蓝色的花",
    "genre": "动画、奇幻、治愈",
    "tags": "环保、穿越、友情",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "cover": "./102.jpg",
    "url": "./movie-0402.html"
  },
  {
    "title": "浪漫风暴",
    "genre": "爱情, 剧情",
    "tags": "文艺, 命运, 对抗, 生死恋",
    "region": "美国",
    "type": "电影",
    "year": "1996",
    "cover": "./103.jpg",
    "url": "./movie-0403.html"
  },
  {
    "title": "厌恶人世",
    "genre": "剧情, 悬疑, 心理",
    "tags": "社会疏离, 城市孤独, 失眠, 观察者, 内心独白, 现实压迫",
    "region": "中国大陆",
    "type": "心理剧情片",
    "year": "2023",
    "cover": "./104.jpg",
    "url": "./movie-0404.html"
  },
  {
    "title": "流亡王妃",
    "genre": "古装 / 剧情",
    "tags": "架空历史, 宫廷权斗, 女性复仇",
    "region": "韩国 / 中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./105.jpg",
    "url": "./movie-0405.html"
  },
  {
    "title": "纵情一曲",
    "genre": "剧情 / 音乐",
    "tags": "晚年爱情, 音乐, 乡村, 幽默",
    "region": "法国",
    "type": "电影",
    "year": "2014",
    "cover": "./106.jpg",
    "url": "./movie-0406.html"
  },
  {
    "title": "仙逆",
    "genre": "玄幻/修仙/战斗",
    "tags": "逆袭, 强者重生, 修真, 国漫, 爽文",
    "region": "中国大陆",
    "type": "动画",
    "year": "2024",
    "cover": "./107.jpg",
    "url": "./movie-0407.html"
  },
  {
    "title": "年年有今日",
    "genre": "剧情, 家庭, 喜剧",
    "tags": "春节, 团圆饭, 代沟, 海外游子, 闹剧",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./108.jpg",
    "url": "./movie-0408.html"
  },
  {
    "title": "无脑魔女",
    "genre": "奇幻 / 动作 / 喜剧",
    "tags": "魔女, 失忆, 魔法, 萌系",
    "region": "日本",
    "type": "电影",
    "year": "2020",
    "cover": "./109.jpg",
    "url": "./movie-0409.html"
  },
  {
    "title": "大宋传奇之赵匡胤",
    "genre": "历史 / 传记 / 战争",
    "tags": "宋朝, 帝王, 权谋, 开国, 兄弟",
    "region": "中国",
    "type": "剧集",
    "year": "2023",
    "cover": "./110.jpg",
    "url": "./movie-0410.html"
  },
  {
    "title": "小小家长",
    "genre": "家庭喜剧",
    "tags": "父职, 单亲, 育儿, 逆成长",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./111.jpg",
    "url": "./movie-0411.html"
  },
  {
    "title": "共生心理分类学",
    "genre": "科幻，悬疑，惊悚",
    "tags": "近未来，人格测试，社会控制，记忆篡改",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./112.jpg",
    "url": "./movie-0412.html"
  },
  {
    "title": "有生之年",
    "genre": "剧情，家庭，治愈",
    "tags": "人生失败组，回乡，自我和解，慢生活",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "cover": "./113.jpg",
    "url": "./movie-0413.html"
  },
  {
    "title": "恐惧悬案",
    "genre": "犯罪",
    "tags": "本格推理, 阴宅, 录音带, 双时间线, BBC",
    "region": "英国",
    "type": "悬疑, 惊悚",
    "year": "2024",
    "cover": "./114.jpg",
    "url": "./movie-0414.html"
  },
  {
    "title": "楼上春色",
    "genre": "剧情, 情色",
    "tags": "偷窥, 欲望, 社会边缘人",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./115.jpg",
    "url": "./movie-0415.html"
  },
  {
    "title": "春风秋雨",
    "genre": "剧情 / 历史",
    "tags": "眷村, 乡愁, 家族史, 时代变迁",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./116.jpg",
    "url": "./movie-0416.html"
  },
  {
    "title": "红气球",
    "genre": "剧情 / 家庭 / 奇幻",
    "tags": "留守儿童, 友谊, 治愈, 奇幻, 气球",
    "region": "法国 / 中国大陆",
    "type": "电影",
    "year": "2027",
    "cover": "./117.jpg",
    "url": "./movie-0417.html"
  },
  {
    "title": "恐怖热线之大头怪婴粤语",
    "genre": "恐怖 / 惊悚",
    "tags": "都市传说, 电台, 伪纪录片, 灵异",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./118.jpg",
    "url": "./movie-0418.html"
  },
  {
    "title": "天摇地摆震山河",
    "genre": "动作 / 冒险 / 灾难",
    "tags": "邵氏, 硬汉, 地震, 夺宝",
    "region": "中国香港",
    "type": "电影",
    "year": "1983",
    "cover": "./119.jpg",
    "url": "./movie-0419.html"
  },
  {
    "title": "危险警告",
    "genre": "惊悚 / 灾难 / 社会",
    "tags": "台风夜，旧楼坍塌，预警疏忽，钉子户对峙，实时叙事",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "cover": "./120.jpg",
    "url": "./movie-0420.html"
  },
  {
    "title": "猎犬2023",
    "genre": "动作 / 犯罪",
    "tags": "高利贷, 拳击, 兄弟, 复仇",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "cover": "./121.jpg",
    "url": "./movie-0421.html"
  },
  {
    "title": "昭和歌谣大全集",
    "genre": "音乐/家庭",
    "tags": "卡拉OK, 昭和怀旧, 家庭和解, 单元剧, 每集一首歌",
    "region": "日本",
    "type": "电视剧",
    "year": "2023",
    "cover": "./122.jpg",
    "url": "./movie-0422.html"
  },
  {
    "title": "旧百老汇之光",
    "genre": "剧情 / 歌舞",
    "tags": "默片, 转型, 追梦",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./123.jpg",
    "url": "./movie-0423.html"
  },
  {
    "title": "爱在阳光灿烂时",
    "genre": "爱情，剧情",
    "tags": "夏日，初恋，治愈，小镇，青春",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-0424.html"
  },
  {
    "title": "乌斯特雷姆",
    "genre": "剧情惊悚",
    "tags": "中世纪诅咒, 考古, 村庄秘密",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./125.jpg",
    "url": "./movie-0425.html"
  },
  {
    "title": "小猪扑满的愿望",
    "genre": "家庭 / 奇幻 / 治愈",
    "tags": "存钱罐、友谊、贫穷、圣诞、愿望成真",
    "region": "英国",
    "type": "电影 / 定格动画",
    "year": "2026",
    "cover": "./126.jpg",
    "url": "./movie-0426.html"
  },
  {
    "title": "危岛坠爱",
    "genre": "爱情，悬疑，冒险",
    "tags": "孤岛求生，失忆虐恋，极限反转，直升机坠落，契约情侣",
    "region": "中国大陆",
    "type": "电视剧/网剧",
    "year": "2022",
    "cover": "./127.jpg",
    "url": "./movie-0427.html"
  },
  {
    "title": "神医大道公前传",
    "genre": "古装, 神话, 喜剧",
    "tags": "保生大帝, 医神, 搞笑, 民间传说",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2014",
    "cover": "./128.jpg",
    "url": "./movie-0428.html"
  },
  {
    "title": "街头素花姐第一季",
    "genre": "都市, 喜剧, 励志",
    "tags": "市井, 女性, 成长, 美食, 方言",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./129.jpg",
    "url": "./movie-0429.html"
  },
  {
    "title": "鬼厉魂",
    "genre": "恐怖， 民俗， 灵异",
    "tags": "厉鬼复仇， 降头术， 山村禁忌",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "cover": "./130.jpg",
    "url": "./movie-0430.html"
  },
  {
    "title": "多情刀客无情刀短刀行",
    "genre": "武侠，古装，动作",
    "tags": "古龙改编，短刀，江湖恩怨，浪子",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2001",
    "cover": "./131.jpg",
    "url": "./movie-0431.html"
  },
  {
    "title": "阿胡贾",
    "genre": "悬疑、犯罪",
    "tags": "官僚腐败，平民英雄，复仇，社会写实",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "cover": "./132.jpg",
    "url": "./movie-0432.html"
  },
  {
    "title": "圣战风云",
    "genre": "动作, 犯罪",
    "tags": "跨境反恐, CIA, 香港警察, 谍战",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./133.jpg",
    "url": "./movie-0433.html"
  },
  {
    "title": "草根王",
    "genre": "剧情， 历史， 商战",
    "tags": "民国， 小人物逆袭， 国药， 家族恩怨",
    "region": "中国",
    "type": "剧集",
    "year": "2023",
    "cover": "./134.jpg",
    "url": "./movie-0434.html"
  },
  {
    "title": "玛歌",
    "genre": "剧情 / 惊悚",
    "tags": "心理惊悚, 家族秘密, 女性视角",
    "region": "法国",
    "type": "电影",
    "year": "2022",
    "cover": "./135.jpg",
    "url": "./movie-0435.html"
  },
  {
    "title": "祭典",
    "genre": "悬疑,文化,神秘",
    "tags": "民俗仪式,记忆替换,女性视角,社区权力",
    "region": "日本",
    "type": "剧情电影",
    "year": "2014",
    "cover": "./136.jpg",
    "url": "./movie-0436.html"
  },
  {
    "title": "烟囱里的麻雀",
    "genre": "剧情, 家庭",
    "tags": "家庭秘密, 北欧, 治愈, 童年",
    "region": "瑞典",
    "type": "电影",
    "year": "2023",
    "cover": "./137.jpg",
    "url": "./movie-0437.html"
  },
  {
    "title": "点点蠢事",
    "genre": "剧情 / 青春",
    "tags": "校园, 霸凌, 自我和解, 慢节奏, 独立",
    "region": "日本",
    "type": "电影",
    "year": "2018",
    "cover": "./138.jpg",
    "url": "./movie-0438.html"
  },
  {
    "title": "座头市凶状旅",
    "genre": "动作, 剧情",
    "tags": "武士, 盲剑客, 复仇, 公路",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "cover": "./139.jpg",
    "url": "./movie-0439.html"
  },
  {
    "title": "推理之绊",
    "genre": "悬疑, 犯罪",
    "tags": "本格, 推理, 兄弟, 宿命",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./140.jpg",
    "url": "./movie-0440.html"
  },
  {
    "title": "隐入尘烟",
    "genre": "剧情，爱情",
    "tags": "乡土，边缘人，诗意现实主义",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "cover": "./141.jpg",
    "url": "./movie-0441.html"
  },
  {
    "title": "荣誉传承",
    "genre": "剧情 / 运动 / 励志",
    "tags": "武术传承，爷孙情，传统与现代，非遗",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./142.jpg",
    "url": "./movie-0442.html"
  },
  {
    "title": "世间道",
    "genre": "剧情, 悬疑",
    "tags": "民国商战, 复仇, 兄弟反目, 家国情怀",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./143.jpg",
    "url": "./movie-0443.html"
  },
  {
    "title": "亿万少年俱乐部",
    "genre": "剧情 / 惊悚",
    "tags": "富二代, 骗局, 真实事件改编",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./144.jpg",
    "url": "./movie-0444.html"
  },
  {
    "title": "百战为王",
    "genre": "历史战争",
    "tags": "拿破仑, 传记, 权谋",
    "region": "法国",
    "type": "剧集",
    "year": "2024",
    "cover": "./145.jpg",
    "url": "./movie-0445.html"
  },
  {
    "title": "火鸡总动员",
    "genre": "动画喜剧",
    "tags": "感恩节, 冒险, 动物, 穿越",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./146.jpg",
    "url": "./movie-0446.html"
  },
  {
    "title": "月光光心慌慌1978",
    "genre": "恐怖，惊悚，经典",
    "tags": "万圣节，面具杀手，砍杀电影鼻祖",
    "region": "美国",
    "type": "电影",
    "year": "1978",
    "cover": "./147.jpg",
    "url": "./movie-0447.html"
  },
  {
    "title": "好事成双",
    "genre": "喜剧、家庭",
    "tags": "双胞胎、错位、相亲、春运",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "cover": "./148.jpg",
    "url": "./movie-0448.html"
  },
  {
    "title": "月升中天",
    "genre": "剧情，家庭",
    "tags": "黑白，传统，家庭，嫁女，小津风格",
    "region": "日本",
    "type": "电影",
    "year": "1955",
    "cover": "./149.jpg",
    "url": "./movie-0449.html"
  },
  {
    "title": "天衣无缝的她",
    "genre": "剧情 / 家庭 / 女性",
    "tags": "母女关系, 代际冲突, 裁缝世家",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./150.jpg",
    "url": "./movie-0450.html"
  },
  {
    "title": "黑暗的孩子",
    "genre": "悬疑惊悚",
    "tags": "孤儿院，灵童，附身，民俗恐怖",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "cover": "./1.jpg",
    "url": "./movie-0451.html"
  },
  {
    "title": "拜托小姐国语",
    "genre": "爱情喜剧 / 豪门成长",
    "tags": "继承人, 失控管家, 身份错位, 契约关系, 反差甜斗",
    "region": "韩国",
    "type": "电视剧",
    "year": "2009",
    "cover": "./2.jpg",
    "url": "./movie-0452.html"
  },
  {
    "title": "蕾哈娜的抗争",
    "genre": "音乐, 传记",
    "tags": "歌手, 家暴, 自救, 觉醒",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "cover": "./3.jpg",
    "url": "./movie-0453.html"
  },
  {
    "title": "金色山谷的夏天",
    "genre": "剧情 / 家庭",
    "tags": "留守儿童，乡村振兴，三代人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2015",
    "cover": "./4.jpg",
    "url": "./movie-0454.html"
  },
  {
    "title": "雪",
    "genre": "文艺剧情",
    "tags": "冬季孤村, 亲情和解, 记忆回声, 静默叙事",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "cover": "./5.jpg",
    "url": "./movie-0455.html"
  },
  {
    "title": "极品山炮之恋爱大师",
    "genre": "喜剧, 爱情",
    "tags": "东北喜剧, 反差萌, 土味情话",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./6.jpg",
    "url": "./movie-0456.html"
  },
  {
    "title": "爬上山",
    "genre": "剧情 / 运动 / 家庭",
    "tags": "登山，父子，残疾，极限挑战，真实改编",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./7.jpg",
    "url": "./movie-0457.html"
  },
  {
    "title": "骄傲",
    "genre": "运动 / 剧情",
    "tags": "板球, 女子体育, 乡村女孩, 逆袭",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "cover": "./8.jpg",
    "url": "./movie-0458.html"
  },
  {
    "title": "识骨寻踪第一季",
    "genre": "犯罪 / 悬疑 / 法医",
    "tags": "鉴证, 骨头, 单元剧, 男女搭档, 长寿剧",
    "region": "美国",
    "type": "剧集",
    "year": "2005",
    "cover": "./9.jpg",
    "url": "./movie-0459.html"
  },
  {
    "title": "扪心问诊第二季",
    "genre": "剧情",
    "tags": "心理咨询, 医患关系, 深度对话, 情感剖析",
    "region": "美国",
    "type": "电视剧",
    "year": "2009",
    "cover": "./10.jpg",
    "url": "./movie-0460.html"
  },
  {
    "title": "莉可丽丝",
    "genre": "动画, 动作, 科幻",
    "tags": "少女特工, 咖啡厅, 反乌托邦, 枪战",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "cover": "./11.jpg",
    "url": "./movie-0461.html"
  },
  {
    "title": "我家的医生",
    "genre": "剧情 / 家庭 / 医疗",
    "tags": "社区医疗，医患温情，家庭矛盾，青春成长",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2021",
    "cover": "./12.jpg",
    "url": "./movie-0462.html"
  },
  {
    "title": "孤堡疑云",
    "genre": "悬疑 / 恐怖",
    "tags": "哥特, 遗产继承, 童年阴影, 双胞胎互换, 古堡迷踪",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "cover": "./13.jpg",
    "url": "./movie-0463.html"
  },
  {
    "title": "流浪女",
    "genre": "剧情 / 冒险 / 女性",
    "tags": "公路, 流浪, 自由, 创伤",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./14.jpg",
    "url": "./movie-0464.html"
  },
  {
    "title": "那年那兔那些事第二季",
    "genre": "动画 / 历史 / 励志",
    "tags": "种花家, 近代史, 拟人化, 泪目, 爱国主义",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2016",
    "cover": "./15.jpg",
    "url": "./movie-0465.html"
  },
  {
    "title": "寻找斯蒂夫·麦昆",
    "genre": "犯罪 / 剧情",
    "tags": "盗宝, 真实事件, 70年代复古",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./16.jpg",
    "url": "./movie-0466.html"
  },
  {
    "title": "你好世界",
    "genre": "动画 / 科幻 / 爱情",
    "tags": "虚拟现实, 穿越, 拯救, 反转, 脑洞",
    "region": "日本",
    "type": "电影",
    "year": "2019",
    "cover": "./17.jpg",
    "url": "./movie-0467.html"
  },
  {
    "title": "天使行动",
    "genre": "动作, 惊悚, 犯罪",
    "tags": "女特工, 枪战, 复仇",
    "region": "中国香港",
    "type": "电影",
    "year": "1987",
    "cover": "./18.jpg",
    "url": "./movie-0468.html"
  },
  {
    "title": "时间旅人",
    "genre": "科幻 / 悬疑 / 冒险",
    "tags": "时间旅行，悖论，多线叙事，自我救赎，烧脑",
    "region": "英国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./19.jpg",
    "url": "./movie-0469.html"
  },
  {
    "title": "幼儿园警探2",
    "genre": "喜剧，动作，家庭",
    "tags": "硬汉，幼教，卧底续集，熊孩子",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "cover": "./20.jpg",
    "url": "./movie-0470.html"
  },
  {
    "title": "木与水",
    "genre": "剧情 / 家庭",
    "tags": "父子，木匠，海女，无声情感，遗物",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./21.jpg",
    "url": "./movie-0471.html"
  },
  {
    "title": "地狱恋人",
    "genre": "爱情, 悬疑, 犯罪",
    "tags": "卧底, 虐恋, 黑白交锋",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./22.jpg",
    "url": "./movie-0472.html"
  },
  {
    "title": "黄石第四季",
    "genre": "西部 / 剧情 / 家族 / 犯罪",
    "tags": "农场争夺, 家族裂痕, 边境暴力, 权力博弈, 西部牧场, 生存代价",
    "region": "美国",
    "type": "电视剧",
    "year": "2021",
    "cover": "./23.jpg",
    "url": "./movie-0473.html"
  },
  {
    "title": "罕见的情人",
    "genre": "爱情 / 剧情 / LGBTQ+",
    "tags": "罕见病, 轮椅, 疗养院, 纯粹爱情, 戛纳",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "cover": "./24.jpg",
    "url": "./movie-0474.html"
  },
  {
    "title": "卖完！",
    "genre": "喜剧，剧情",
    "tags": "地摊经济，小贩人生，荒诞喜剧，末路狂欢",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./25.jpg",
    "url": "./movie-0475.html"
  },
  {
    "title": "床头",
    "genre": "悬疑 / 恐怖 / 心理",
    "tags": "短篇改编, 夫妻疑云, 双视角, 细思极恐",
    "region": "韩国",
    "type": "电影",
    "year": "2021",
    "cover": "./26.jpg",
    "url": "./movie-0476.html"
  },
  {
    "title": "畸人艳迹",
    "genre": "剧情 / 情色 / 文艺",
    "tags": "邵氏, 畸恋, 马戏团, 畸形人, 奇情",
    "region": "中国香港",
    "type": "电影",
    "year": "1987",
    "cover": "./27.jpg",
    "url": "./movie-0477.html"
  },
  {
    "title": "十英寸的英雄",
    "genre": "喜剧, 剧情, 爱情",
    "tags": "独立电影, 群像, 友情, 小清新, 人生感悟",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "cover": "./28.jpg",
    "url": "./movie-0478.html"
  },
  {
    "title": "以年为单位的恋爱",
    "genre": "爱情 / 都市",
    "tags": "异地恋, 职场, 成长",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./29.jpg",
    "url": "./movie-0479.html"
  },
  {
    "title": "我们的歌",
    "genre": "剧情，音乐",
    "tags": "支教，留守儿童，合唱团，治愈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./30.jpg",
    "url": "./movie-0480.html"
  },
  {
    "title": "土墙",
    "genre": "剧情, 家庭",
    "tags": "乡村, 留守老人, 拆迁, 土地情结, 现实题材",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "cover": "./31.jpg",
    "url": "./movie-0481.html"
  },
  {
    "title": "星际迷航：发现号 第一季",
    "genre": "科幻, 冒险",
    "tags": "星际旅行, 人工智能, 平行宇宙",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./32.jpg",
    "url": "./movie-0482.html"
  },
  {
    "title": "日常 ～恋之声～",
    "genre": "日常 / 恋爱",
    "tags": "声优, 校园, 治愈, 暗中恋爱",
    "region": "日本",
    "type": "动画剧集",
    "year": "2025",
    "cover": "./33.jpg",
    "url": "./movie-0483.html"
  },
  {
    "title": "龙翔凤舞雪山盟",
    "genre": "武侠, 爱情",
    "tags": "古装, 雪山, 门派恩怨",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./34.jpg",
    "url": "./movie-0484.html"
  },
  {
    "title": "德里女孩第一季",
    "genre": "喜剧 / 青春",
    "tags": "女性友谊, 印度现代生活, 文化混搭, 吐槽向",
    "region": "印度 / 英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./35.jpg",
    "url": "./movie-0485.html"
  },
  {
    "title": "您祖宗卡好",
    "genre": "喜剧, 家庭",
    "tags": "穿越, 寻根, 祖先, 家族, 爆笑",
    "region": "中国台湾",
    "type": "电影",
    "year": "2021",
    "cover": "./36.jpg",
    "url": "./movie-0486.html"
  },
  {
    "title": "英伦式丑闻",
    "genre": "剧情 / 历史 / 犯罪",
    "tags": "政治丑闻, 贵族, 同性, 勒索, 真实事件",
    "region": "英国",
    "type": "剧集",
    "year": "2027",
    "cover": "./37.jpg",
    "url": "./movie-0487.html"
  },
  {
    "title": "移动的枪口",
    "genre": "战争，谍战",
    "tags": "抗日，神枪手，列车，潜伏，双面间谍",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2014",
    "cover": "./38.jpg",
    "url": "./movie-0488.html"
  },
  {
    "title": "马利与我",
    "genre": "喜剧、家庭、剧情",
    "tags": "宠物，狗，成长，家庭变迁，治愈",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./39.jpg",
    "url": "./movie-0489.html"
  },
  {
    "title": "邻家密友",
    "genre": "悬疑, 剧情, 惊悚",
    "tags": "邻居, 控制欲, 心理操纵, 家庭入侵",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "cover": "./40.jpg",
    "url": "./movie-0490.html"
  },
  {
    "title": "夫妇之道",
    "genre": "剧情, 家庭, 伦理",
    "tags": "婚姻, 出轨, 冷战, 和好, 是枝裕和式",
    "region": "日本",
    "type": "电影",
    "year": "1997",
    "cover": "./41.jpg",
    "url": "./movie-0491.html"
  },
  {
    "title": "士兵的归来",
    "genre": "剧情， 战争",
    "tags": "一战， 创伤， 重返社会",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./42.jpg",
    "url": "./movie-0492.html"
  },
  {
    "title": "忧伤西西里之歌",
    "genre": "历史 / 剧情",
    "tags": "黑手党, 二战, 孤儿, 民谣, 复仇",
    "region": "意大利",
    "type": "电影",
    "year": "2020",
    "cover": "./43.jpg",
    "url": "./movie-0493.html"
  },
  {
    "title": "双月之城",
    "genre": "科幻, 悬疑, 动作",
    "tags": "科幻动画, 蒸汽朋克, 平行世界, 机甲, 国产",
    "region": "中国大陆",
    "type": "动画",
    "year": "2016",
    "cover": "./44.jpg",
    "url": "./movie-0494.html"
  },
  {
    "title": "传染",
    "genre": "惊悚, 灾难, 剧情",
    "tags": "病毒, 疾控, 隔离, 人性, 多线叙事",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "cover": "./45.jpg",
    "url": "./movie-0495.html"
  },
  {
    "title": "亚当与狗",
    "genre": "科幻 / 剧情 / 末日",
    "tags": "人类灭绝, AI狗, 孤独",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./46.jpg",
    "url": "./movie-0496.html"
  },
  {
    "title": "你也差不多该死心了！",
    "genre": "爱情 / 剧情",
    "tags": "虐恋, 追妻火葬场, 漫画改编",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "cover": "./47.jpg",
    "url": "./movie-0497.html"
  },
  {
    "title": "火星坏女孩",
    "genre": "科幻, 喜剧, 冒险",
    "tags": "火星殖民, 女性力量, 荒诞科幻",
    "region": "中国大陆",
    "type": "电影",
    "year": "2030",
    "cover": "./48.jpg",
    "url": "./movie-0498.html"
  },
  {
    "title": "娜娜2016",
    "genre": "剧情 / 家庭",
    "tags": "留守少女, 青春期, 城乡变迁, 手机录像",
    "region": "中国",
    "type": "电影",
    "year": "2017",
    "cover": "./49.jpg",
    "url": "./movie-0499.html"
  },
  {
    "title": "所罗门王",
    "genre": "历史 / 悬疑 / 政治",
    "tags": "圣经，考古，遗产，阴谋，三宗教",
    "region": "以色列",
    "type": "剧集",
    "year": "2024",
    "cover": "./50.jpg",
    "url": "./movie-0500.html"
  },
  {
    "title": "暖暖的幸福",
    "genre": "家庭/喜剧/生活",
    "tags": "烟火气, 代际冲突, 治愈系",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./51.jpg",
    "url": "./movie-0501.html"
  },
  {
    "title": "扮嘢小魔星3：终极任务",
    "genre": "喜剧/奇幻",
    "tags": "迪士尼, 魔法, 变身, 搞笑",
    "region": "美国",
    "type": "动画电影",
    "year": "2024",
    "cover": "./52.jpg",
    "url": "./movie-0502.html"
  },
  {
    "title": "圣彼得堡的午夜",
    "genre": "剧情，历史",
    "tags": "沙俄，宫廷，爱情悲剧",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "cover": "./53.jpg",
    "url": "./movie-0503.html"
  },
  {
    "title": "暴裂寻凶",
    "genre": "悬疑 / 犯罪",
    "tags": "硬核推理, 社会议题, 父亲复仇",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./54.jpg",
    "url": "./movie-0504.html"
  },
  {
    "title": "世外桃源2024",
    "genre": "科幻、悬疑、剧情",
    "tags": "虚拟现实, 乌托邦, 觉醒, 阴谋, 矩阵",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./55.jpg",
    "url": "./movie-0505.html"
  },
  {
    "title": "重案组粤语",
    "genre": "警匪 / 动作 / 刑侦",
    "tags": "TVB, 单元剧, 重案组, 集体群像, 港剧黄金时代",
    "region": "中国香港",
    "type": "剧集",
    "year": "1995",
    "cover": "./56.jpg",
    "url": "./movie-0506.html"
  },
  {
    "title": "美女霓裳",
    "genre": "古装、剧情",
    "tags": "刺绣、权谋、女性成长、宫廷",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./57.jpg",
    "url": "./movie-0507.html"
  },
  {
    "title": "世纪之战",
    "genre": "动作, 科幻, 战争",
    "tags": "AI叛乱, 末日, 机甲, 人机大战, 悲壮",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "cover": "./58.jpg",
    "url": "./movie-0508.html"
  },
  {
    "title": "狩猎者：凛冬之战",
    "genre": "动作 / 科幻 / 冒险",
    "tags": "末世废土，女性英雄，暴力美学，设定控",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./59.jpg",
    "url": "./movie-0509.html"
  },
  {
    "title": "性感女勇士",
    "genre": "动作, 喜剧, 女性成长",
    "tags": "女特工, 近身格斗, 霓虹都市, 伪装潜入, 反转搭档",
    "region": "中国香港",
    "type": "电影",
    "year": "2016",
    "cover": "./60.jpg",
    "url": "./movie-0510.html"
  },
  {
    "title": "赌仔让妻",
    "genre": "剧情, 犯罪, 伦理",
    "tags": "赌片, 人性拷问, 绝望, 救赎, 黑色电影",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./61.jpg",
    "url": "./movie-0511.html"
  },
  {
    "title": "跑着去北京",
    "genre": "剧情 / 运动 / 励志",
    "tags": "千里归乡，马拉松，小人物史诗",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "cover": "./62.jpg",
    "url": "./movie-0512.html"
  },
  {
    "title": "制暴 印度版",
    "genre": "动作，犯罪，剧情",
    "tags": "热血警匪，体制腐败，女性复仇，手撕反派",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "cover": "./63.jpg",
    "url": "./movie-0513.html"
  },
  {
    "title": "灵犬寻主记",
    "genre": "剧情, 家庭",
    "tags": "狗狗, 回家, 治愈",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./64.jpg",
    "url": "./movie-0514.html"
  },
  {
    "title": "燃情克利夫兰第一季",
    "genre": "喜剧, 爱情, 生活",
    "tags": "都市女性, 相亲, 闺蜜, 毒舌, 爆笑",
    "region": "美国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./65.jpg",
    "url": "./movie-0515.html"
  },
  {
    "title": "我的非凡父母",
    "genre": "剧情, 家庭",
    "tags": "真实事件改编, 盲人家庭, 亲情, 惠英红, 催泪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "cover": "./66.jpg",
    "url": "./movie-0516.html"
  },
  {
    "title": "神探，你好神",
    "genre": "悬疑喜剧",
    "tags": "单元剧, 精神病, 破案",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2026",
    "cover": "./67.jpg",
    "url": "./movie-0517.html"
  },
  {
    "title": "写真甲子园 0.5秒之夏",
    "genre": "青春 / 运动 / 文艺",
    "tags": "高中摄影、夏季赛、北海道、团队成长、瞬间定格",
    "region": "日本",
    "type": "电影",
    "year": "2018",
    "cover": "./68.jpg",
    "url": "./movie-0518.html"
  },
  {
    "title": "桃色交易",
    "genre": "爱情 / 惊悚",
    "tags": "交易, 危险情人, 道德困境",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./69.jpg",
    "url": "./movie-0519.html"
  },
  {
    "title": "不惜一切",
    "genre": "剧情爱情",
    "tags": "代孕，伦理，情感纠葛",
    "region": "美国",
    "type": "电影",
    "year": "2012",
    "cover": "./70.jpg",
    "url": "./movie-0520.html"
  },
  {
    "title": "小号手",
    "genre": "剧情, 音乐",
    "tags": "二战, 爵士, 救赎",
    "region": "法国",
    "type": "电影",
    "year": "2020",
    "cover": "./71.jpg",
    "url": "./movie-0521.html"
  },
  {
    "title": "暴雨燃烧",
    "genre": "爱情, 悬疑",
    "tags": "雨夜, 记忆迷局, 禁忌之恋, 精神分析",
    "region": "台湾",
    "type": "电影",
    "year": "2006",
    "cover": "./72.jpg",
    "url": "./movie-0522.html"
  },
  {
    "title": "异象",
    "genre": "科幻, 恐怖",
    "tags": "邪教, 外星入侵, 心理",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "cover": "./73.jpg",
    "url": "./movie-0523.html"
  },
  {
    "title": "人面兽心",
    "genre": "恐怖 / 悬疑",
    "tags": "兽化, 家族诅咒, 基因实验, 人体变形",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "cover": "./74.jpg",
    "url": "./movie-0524.html"
  },
  {
    "title": "王爷你好贱 动态漫第一季",
    "genre": "喜剧 / 古装",
    "tags": "沙雕穿越, 性别反转, 吐槽向, 办公室政治",
    "region": "中国大陆",
    "type": "动态漫画",
    "year": "2026",
    "cover": "./75.jpg",
    "url": "./movie-0525.html"
  },
  {
    "title": "真实的生活",
    "genre": "剧情, 伦理, 家庭",
    "tags": "真人秀, 谎言与真相, 存在主义",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./76.jpg",
    "url": "./movie-0526.html"
  },
  {
    "title": "炎热的下午",
    "genre": "剧情, 悬疑",
    "tags": "黑色幽默, 小人物, 荒诞, 劫持",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "cover": "./77.jpg",
    "url": "./movie-0527.html"
  },
  {
    "title": "美容师与野兽",
    "genre": "爱情, 奇幻, 喜剧",
    "tags": "整容, 野兽王子, 反童话",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./78.jpg",
    "url": "./movie-0528.html"
  },
  {
    "title": "诱拐",
    "genre": "剧情 / 犯罪",
    "tags": "绑架, 母亲, 复仇",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "cover": "./79.jpg",
    "url": "./movie-0529.html"
  },
  {
    "title": "但丁之手",
    "genre": "惊悚神秘",
    "tags": "宗教、符号、历史、梵蒂冈、暗码",
    "region": "意大利 / 法国",
    "type": "电影",
    "year": "2024",
    "cover": "./80.jpg",
    "url": "./movie-0530.html"
  },
  {
    "title": "莫札特和他的姐姐",
    "genre": "传记音乐",
    "tags": "莫札特, 姐姐, 天才, 女性, 古典乐",
    "region": "奥地利",
    "type": "电影",
    "year": "2024",
    "cover": "./81.jpg",
    "url": "./movie-0531.html"
  },
  {
    "title": "逆权巴士司机",
    "genre": "剧情",
    "tags": "社会现实, 底层抗争, 公路, 人性",
    "region": "中国香港",
    "type": "电影",
    "year": "2022",
    "cover": "./82.jpg",
    "url": "./movie-0532.html"
  },
  {
    "title": "倾听男人心",
    "genre": "奇幻 / 喜剧 / 爱情",
    "tags": "读心术, 性别反转, 职场",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./83.jpg",
    "url": "./movie-0533.html"
  },
  {
    "title": "内裤队长在太空",
    "genre": "喜剧 / 科幻 / 冒险",
    "tags": "恶搞英雄, 太空垃圾, 中年危机, 低成本",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./84.jpg",
    "url": "./movie-0534.html"
  },
  {
    "title": "神烦警探第六季",
    "genre": "喜剧 / 犯罪",
    "tags": "搞笑, 单元剧, 警匪, 快节奏, 梗王",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./85.jpg",
    "url": "./movie-0535.html"
  },
  {
    "title": "占诱游戏",
    "genre": "悬疑 / 犯罪",
    "tags": "直播, 算命, 诈骗, 反杀",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./86.jpg",
    "url": "./movie-0536.html"
  },
  {
    "title": "迷蝶",
    "genre": "爱情 / 奇幻 / 悬疑",
    "tags": "蝴蝶效应, 梦境, 多重时空, 恋人",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./87.jpg",
    "url": "./movie-0537.html"
  },
  {
    "title": "七武士",
    "genre": "剧情 / 动作 / 历史",
    "tags": "武士道, 群像叙事, 村庄保卫战, 阶层冲突, 经典史诗",
    "region": "日本",
    "type": "电影",
    "year": "1954",
    "cover": "./88.jpg",
    "url": "./movie-0538.html"
  },
  {
    "title": "天气预报员",
    "genre": "剧情 / 喜剧",
    "tags": "中年危机, 家庭, 职业困境, 凯奇风",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./89.jpg",
    "url": "./movie-0539.html"
  },
  {
    "title": "极冬过后",
    "genre": "科幻灾难",
    "tags": "末日, 生存, 人性, 极寒, 寻找希望",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./90.jpg",
    "url": "./movie-0540.html"
  },
  {
    "title": "黄飞鸿义取丁财炮粤语",
    "genre": "动作/历史",
    "tags": "黄飞鸿, 民俗, 醒狮, 粤语片",
    "region": "中国香港",
    "type": "电影",
    "year": "1974",
    "cover": "./91.jpg",
    "url": "./movie-0541.html"
  },
  {
    "title": "迷失第六季",
    "genre": "悬疑、科幻、冒险",
    "tags": "最终季，平行世界，小岛真相，哲学结局，两极分化",
    "region": "美国",
    "type": "剧集",
    "year": "2010",
    "cover": "./92.jpg",
    "url": "./movie-0542.html"
  },
  {
    "title": "修业魔女璐璐萌",
    "genre": "动画, 奇幻, 喜剧",
    "tags": "魔法少女, 反套路, 成长",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./93.jpg",
    "url": "./movie-0543.html"
  },
  {
    "title": "两个阿拉伯骑士",
    "genre": "西部, 冒险",
    "tags": "沙漠, 寻仇, 亦敌亦友, 异域",
    "region": "法国, 摩洛哥",
    "type": "电影",
    "year": "2026",
    "cover": "./94.jpg",
    "url": "./movie-0544.html"
  },
  {
    "title": "旋涡1949",
    "genre": "悬疑，历史",
    "tags": "谍战，双面间谍，绝密，反转",
    "region": "中国内地",
    "type": "电影",
    "year": "2025",
    "cover": "./95.jpg",
    "url": "./movie-0545.html"
  },
  {
    "title": "失业生粤语",
    "genre": "剧情 / 青春",
    "tags": "经典修复, 青春残酷, 香港老片, 兄弟情",
    "region": "中国香港",
    "type": "电影",
    "year": "1981",
    "cover": "./96.jpg",
    "url": "./movie-0546.html"
  },
  {
    "title": "班吉",
    "genre": "剧情 / 家庭",
    "tags": "金毛犬, 流浪, 治愈, 公路, 成长",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./97.jpg",
    "url": "./movie-0547.html"
  },
  {
    "title": "休假日的坏人先生",
    "genre": "喜剧，奇幻",
    "tags": "反派，日常，反差萌，治愈",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "cover": "./98.jpg",
    "url": "./movie-0548.html"
  },
  {
    "title": "万里追踪",
    "genre": "悬疑 / 刑侦",
    "tags": "追凶, 车臣, 边境, 暗网",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./99.jpg",
    "url": "./movie-0549.html"
  },
  {
    "title": "庙街皇后",
    "genre": "剧情犯罪",
    "tags": "社会写实, 女性, 底层, 经典",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "cover": "./100.jpg",
    "url": "./movie-0550.html"
  },
  {
    "title": "心慌方·零",
    "genre": "科幻，惊悚，悬疑",
    "tags": "密室逃脱，社会实验，起源揭秘，人性",
    "region": "加拿大",
    "type": "电影",
    "year": "2026",
    "cover": "./101.jpg",
    "url": "./movie-0551.html"
  },
  {
    "title": "生理酱",
    "genre": "动画 / 奇幻 / 喜剧",
    "tags": "拟人化, 青春期, 身体认知, 治愈, 脑洞大开",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./102.jpg",
    "url": "./movie-0552.html"
  },
  {
    "title": "鱼生知有你",
    "genre": "奇幻, 爱情",
    "tags": "人鱼, 美食, 治愈",
    "region": "中国",
    "type": "剧集",
    "year": "2027",
    "cover": "./103.jpg",
    "url": "./movie-0553.html"
  },
  {
    "title": "被隐匿的真相",
    "genre": "悬疑，律政，犯罪",
    "tags": "法庭，反转，正义，媒体审判，冤案",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "cover": "./104.jpg",
    "url": "./movie-0554.html"
  },
  {
    "title": "人间不拆",
    "genre": "剧情， 喜剧， 奇幻",
    "tags": "拆迁， 都更， 土地公， 钉子户， 社区温情",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "cover": "./105.jpg",
    "url": "./movie-0555.html"
  },
  {
    "title": "基因决定我爱你",
    "genre": "科幻爱情",
    "tags": "基因编辑, 先婚后爱, 黑色幽默",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./106.jpg",
    "url": "./movie-0556.html"
  },
  {
    "title": "命运疾走中",
    "genre": "动作, 惊悚",
    "tags": "追杀, 倒计时, 黑帮, 爽片",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "cover": "./107.jpg",
    "url": "./movie-0557.html"
  },
  {
    "title": "花木兰1964国语",
    "genre": "剧情 / 历史 / 战争",
    "tags": "重制版，胶片修复，豫剧，经典致敬",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./108.jpg",
    "url": "./movie-0558.html"
  },
  {
    "title": "霹雳震寰宇之龙战八荒",
    "genre": "奇幻，武侠，古装",
    "tags": "霹雳，龙，神话，诗号",
    "region": "中国台湾",
    "type": "布袋戏剧集",
    "year": "2010",
    "cover": "./109.jpg",
    "url": "./movie-0559.html"
  },
  {
    "title": "洗冤录",
    "genre": "古装悬疑",
    "tags": "法医，验尸，朝堂权谋，翻案",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2025",
    "cover": "./110.jpg",
    "url": "./movie-0560.html"
  },
  {
    "title": "自杀敢死队",
    "genre": "动作, 犯罪, 惊悚",
    "tags": "反英雄, 暴力, 救赎, 绝命任务",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./111.jpg",
    "url": "./movie-0561.html"
  },
  {
    "title": "失踪秘闻",
    "genre": "悬疑 / 剧情",
    "tags": "女性视角, 网络寻人, 集体冷漠",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "cover": "./112.jpg",
    "url": "./movie-0562.html"
  },
  {
    "title": "贱精姐弟 第一季",
    "genre": "喜剧 / 家庭",
    "tags": "港剧, 姐弟, 搞笑, 日常",
    "region": "中国香港",
    "type": "剧集",
    "year": "2020",
    "cover": "./113.jpg",
    "url": "./movie-0563.html"
  },
  {
    "title": "聚魔柜",
    "genre": "恐怖, 悬疑",
    "tags": "古玩, 诅咒, 连环杀人, 密屋",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./114.jpg",
    "url": "./movie-0564.html"
  },
  {
    "title": "冰天血地",
    "genre": "犯罪，惊悚",
    "tags": "西伯利亚，黑帮，雪地追杀，绝境，生存",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "cover": "./115.jpg",
    "url": "./movie-0565.html"
  },
  {
    "title": "樱之国",
    "genre": "剧情 / 奇幻",
    "tags": "二战, 穿越时空, 家族秘密, 治愈",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./116.jpg",
    "url": "./movie-0566.html"
  },
  {
    "title": "选秀日",
    "genre": "剧情, 运动",
    "tags": "美式橄榄球, 职场博弈, 现场交易",
    "region": "美国",
    "type": "电影",
    "year": "2014",
    "cover": "./117.jpg",
    "url": "./movie-0567.html"
  },
  {
    "title": "青春创业手册",
    "genre": "剧情, 职场",
    "tags": "大学生创业, 互联网, 理想与现实, 群像",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./118.jpg",
    "url": "./movie-0568.html"
  },
  {
    "title": "失忆24小时国语",
    "genre": "悬疑, 喜剧, 都市",
    "tags": "失忆, 搞笑, 反转, 小人物",
    "region": "中国香港",
    "type": "剧集",
    "year": "2021",
    "cover": "./119.jpg",
    "url": "./movie-0569.html"
  },
  {
    "title": "大人的防具店（里面）",
    "genre": "奇幻 / 喜剧 / 冒险",
    "tags": "搞笑, 穿模, 勇者, 恶搞",
    "region": "日本",
    "type": "动画剧集",
    "year": "2020",
    "cover": "./120.jpg",
    "url": "./movie-0570.html"
  },
  {
    "title": "不安分的狗",
    "genre": "剧情 / 喜剧",
    "tags": "中年危机, 隔离, 婚姻, 荒诞",
    "region": "阿根廷",
    "type": "电影",
    "year": "2021",
    "cover": "./121.jpg",
    "url": "./movie-0571.html"
  },
  {
    "title": "洲际公路",
    "genre": "惊悚, 犯罪, 公路片",
    "tags": "长途司机, 连环杀手, 电台求救, 卡车追击",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./122.jpg",
    "url": "./movie-0572.html"
  },
  {
    "title": "东京夜都市",
    "genre": "悬疑 / 惊悚",
    "tags": "都市传说, 午夜电台, 单元剧",
    "region": "日本",
    "type": "剧集",
    "year": "2021",
    "cover": "./123.jpg",
    "url": "./movie-0573.html"
  },
  {
    "title": "街头之王2：汽车城",
    "genre": "动作 / 犯罪",
    "tags": "街头赛车, 底特律, 复仇, 硬汉",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-0574.html"
  },
  {
    "title": "拂晓时分",
    "genre": "爱情, 战争",
    "tags": "一战, 战壕, 浪漫, 背叛, 生存",
    "region": "法国",
    "type": "电影",
    "year": "2017",
    "cover": "./125.jpg",
    "url": "./movie-0575.html"
  },
  {
    "title": "神枪父子",
    "genre": "动作, 剧情",
    "tags": "枪战, 父子情, 黑帮, 牺牲, 热血",
    "region": "中国香港",
    "type": "电影",
    "year": "1994",
    "cover": "./126.jpg",
    "url": "./movie-0576.html"
  },
  {
    "title": "两个兄弟一个新娘",
    "genre": "喜剧 / 爱情 / 家庭",
    "tags": "三角关系, 兄弟情, 印度婚礼, 乌龙",
    "region": "印度",
    "type": "电影",
    "year": "2019",
    "cover": "./127.jpg",
    "url": "./movie-0577.html"
  },
  {
    "title": "我与梦露的一周",
    "genre": "剧情 / 传记 / 爱情",
    "tags": "梦露, 影视圈, 旧好莱坞, 虚构相遇, 一周恋情",
    "region": "英国",
    "type": "电影",
    "year": "2022",
    "cover": "./128.jpg",
    "url": "./movie-0578.html"
  },
  {
    "title": "唐伯虎点秋香",
    "genre": "喜剧 / 爱情 / 古装",
    "tags": "周星驰, 无厘头, 江南才子, 卖身葬父, 经典",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "cover": "./129.jpg",
    "url": "./movie-0579.html"
  },
  {
    "title": "嘻盖骨男孩",
    "genre": "剧情 / 喜剧",
    "tags": "青春，成长，幽默，乡村，友谊",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./130.jpg",
    "url": "./movie-0580.html"
  },
  {
    "title": "诈痲纳福",
    "genre": "喜剧, 剧情",
    "tags": "诈骗, 春节, 家庭和解",
    "region": "新加坡",
    "type": "电影",
    "year": "2019",
    "cover": "./131.jpg",
    "url": "./movie-0581.html"
  },
  {
    "title": "24号",
    "genre": "科幻、悬疑、心理",
    "tags": "循环、密室、解谜、高智商、绝望",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./132.jpg",
    "url": "./movie-0582.html"
  },
  {
    "title": "流砂幻爱",
    "genre": "爱情, 悬疑",
    "tags": "记忆篡改, 替身, 伦理",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./133.jpg",
    "url": "./movie-0583.html"
  },
  {
    "title": "豆丁真汉子",
    "genre": "喜剧 / 动作 / 儿童",
    "tags": "萌娃, 功夫, 反差萌, 校园",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "cover": "./134.jpg",
    "url": "./movie-0584.html"
  },
  {
    "title": "在世人面前",
    "genre": "戏剧剧情",
    "tags": "舞台剧, 公众审判, 表演与真实, 媒体暴力",
    "region": "意大利",
    "type": "电影",
    "year": "2028",
    "cover": "./135.jpg",
    "url": "./movie-0585.html"
  },
  {
    "title": "墨尔本周末不回家",
    "genre": "剧情/爱情",
    "tags": "都市, 邂逅, 文艺",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2023",
    "cover": "./136.jpg",
    "url": "./movie-0586.html"
  },
  {
    "title": "碟中谍4:幽灵协议",
    "genre": "动作 / 惊悚 / 冒险",
    "tags": "特工, 攀爬迪拜塔, 核弹危机, 孤军奋战",
    "region": "美国",
    "type": "电影",
    "year": "2011",
    "cover": "./137.jpg",
    "url": "./movie-0587.html"
  },
  {
    "title": "啼笑书香",
    "genre": "古装, 喜剧, 爱情",
    "tags": "科举, 文人, 市井, 轻松",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "cover": "./138.jpg",
    "url": "./movie-0588.html"
  },
  {
    "title": "纯真消逝的年代",
    "genre": "历史 / 战争",
    "tags": "二战, 童年视角, 黑白影像, 反思",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "cover": "./139.jpg",
    "url": "./movie-0589.html"
  },
  {
    "title": "男孩和他的原子",
    "genre": "剧情， 科幻， 家庭",
    "tags": "单亲， 天才儿童， 微观世界， 治愈",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./140.jpg",
    "url": "./movie-0590.html"
  },
  {
    "title": "传教士",
    "genre": "奇幻、恐怖、剧情",
    "tags": "反英雄、堕落天使、超能力、末日救赎",
    "region": "美国",
    "type": "剧集",
    "year": "2016",
    "cover": "./141.jpg",
    "url": "./movie-0591.html"
  },
  {
    "title": "王牌赛手",
    "genre": "动作运动",
    "tags": "赛车, 电竞, 代驾, 逆袭",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./142.jpg",
    "url": "./movie-0592.html"
  },
  {
    "title": "黄泉归来",
    "genre": "奇幻, 剧情",
    "tags": "死者复生, 小镇, 治愈",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./143.jpg",
    "url": "./movie-0593.html"
  },
  {
    "title": "星星月亮太阳",
    "genre": "爱情, 奇幻",
    "tags": "元宇宙, 三角恋, 身份, 未来",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./144.jpg",
    "url": "./movie-0594.html"
  },
  {
    "title": "杀千刀重出江湖",
    "genre": "动作，犯罪，黑色幽默",
    "tags": "复仇，退休杀手，江湖恩怨，荒诞",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "cover": "./145.jpg",
    "url": "./movie-0595.html"
  },
  {
    "title": "致命弯道7",
    "genre": "恐怖 / 惊悚",
    "tags": "畸形家族, 荒野追杀, 公路恐怖",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "cover": "./146.jpg",
    "url": "./movie-0596.html"
  },
  {
    "title": "火地狱",
    "genre": "动作 / 惊悚",
    "tags": "灾难, 消防, 复仇, 密室, 极限",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./147.jpg",
    "url": "./movie-0597.html"
  },
  {
    "title": "天降横财心惊惊粤语",
    "genre": "惊悚 / 喜剧",
    "tags": "港产片, 黑色幽默, 因果报应, 巨额遗产",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./148.jpg",
    "url": "./movie-0598.html"
  },
  {
    "title": "神秘劫杀案",
    "genre": "悬疑, 犯罪, 惊悚",
    "tags": "密室, 拼图, 多重反转, 本格",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./149.jpg",
    "url": "./movie-0599.html"
  },
  {
    "title": "十诫Ⅷ：心灵之罪",
    "genre": "剧情, 伦理",
    "tags": "基耶斯洛夫斯基, 道德困境, 哲学",
    "region": "波兰",
    "type": "电视剧集",
    "year": "1989",
    "cover": "./150.jpg",
    "url": "./movie-0600.html"
  },
  {
    "title": "你是我的荣耀",
    "genre": "爱情，职场，剧情",
    "tags": "电竞，航天工程师，十年暗恋，破镜重圆",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "cover": "./1.jpg",
    "url": "./movie-0601.html"
  },
  {
    "title": "过埠新娘粤语",
    "genre": "剧情 / 爱情 / 社会",
    "tags": "移民, 唐人街, 假结婚, 女性, 时代",
    "region": "中国香港",
    "type": "电影",
    "year": "1988",
    "cover": "./2.jpg",
    "url": "./movie-0602.html"
  },
  {
    "title": "鼠辈",
    "genre": "犯罪",
    "tags": "小人物, 盗窃, 荒诞, 黑色幽默",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./3.jpg",
    "url": "./movie-0603.html"
  },
  {
    "title": "重任在肩 第二季",
    "genre": "犯罪 / 惊悚 / 剧情",
    "tags": "反腐, 卧底, 警匪, 高智商对决",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "cover": "./4.jpg",
    "url": "./movie-0604.html"
  },
  {
    "title": "惊人的星期六",
    "genre": "悬疑 / 奇幻",
    "tags": "时间重置, 小区秘密, 全员嫌疑人",
    "region": "韩国",
    "type": "剧集",
    "year": "2026",
    "cover": "./5.jpg",
    "url": "./movie-0605.html"
  },
  {
    "title": "回家过节",
    "genre": "恐怖， 民俗",
    "tags": "水灯节， 返乡， 降头",
    "region": "泰国",
    "type": "电影",
    "year": "2020",
    "cover": "./6.jpg",
    "url": "./movie-0606.html"
  },
  {
    "title": "华克山相会",
    "genre": "爱情、剧情",
    "tags": "怀旧、宿命、时代变迁",
    "region": "韩国",
    "type": "电影",
    "year": "1999",
    "cover": "./7.jpg",
    "url": "./movie-0607.html"
  },
  {
    "title": "田教授家的二十八个亲威",
    "genre": "家庭, 喜剧, 伦理",
    "tags": "亲戚, 人间真实, 家长里短",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2009",
    "cover": "./8.jpg",
    "url": "./movie-0608.html"
  },
  {
    "title": "功夫小子闯情关",
    "genre": "喜剧、动作、爱情",
    "tags": "功夫，恋爱，乌龙，港式喜剧，年轻吴京",
    "region": "中国",
    "type": "电影",
    "year": "1996",
    "cover": "./9.jpg",
    "url": "./movie-0609.html"
  },
  {
    "title": "魔鬼战将2",
    "genre": "动作， 科幻",
    "tags": "机甲， 人机合一， 复仇， 生化人， 特效大片",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./10.jpg",
    "url": "./movie-0610.html"
  },
  {
    "title": "圆弧",
    "genre": "科幻，剧情，哲学",
    "tags": "时间循环，记忆，选择，孤独",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./11.jpg",
    "url": "./movie-0611.html"
  },
  {
    "title": "金鼠王",
    "genre": "奇幻，冒险，喜剧，贺岁",
    "tags": "生肖，老鼠，地下王国，财运，合家欢",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./12.jpg",
    "url": "./movie-0612.html"
  },
  {
    "title": "好日子粤语",
    "genre": "家庭，剧情，伦理",
    "tags": "香港回归，时代变迁，父子矛盾，和解，集体回忆",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2019",
    "cover": "./13.jpg",
    "url": "./movie-0613.html"
  },
  {
    "title": "巴姆·巴姆与希莉丝特",
    "genre": "动画, 冒险, 家庭",
    "tags": "儿童, 友谊, 奇幻生物, 手绘风",
    "region": "法国",
    "type": "电影",
    "year": "2022",
    "cover": "./14.jpg",
    "url": "./movie-0614.html"
  },
  {
    "title": "总裁的诱惑",
    "genre": "爱情, 喜剧, 奇幻",
    "tags": "霸总, 性转, 爆笑爽文, 反套路",
    "region": "中国大陆",
    "type": "短剧",
    "year": "2025",
    "cover": "./15.jpg",
    "url": "./movie-0615.html"
  },
  {
    "title": "招魂",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "tags": "驱魔, 宗教, 真实事件改编, 温子仁风, 密室",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./16.jpg",
    "url": "./movie-0616.html"
  },
  {
    "title": "断网",
    "genre": "动作, 犯罪, 科幻",
    "tags": "黑客, 暗网, 洗钱, 动作捕捉",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "cover": "./17.jpg",
    "url": "./movie-0617.html"
  },
  {
    "title": "金与安迪",
    "genre": "剧情 / 冒险",
    "tags": "公路片, 掘金, 忘年交, 阿拉斯加",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./18.jpg",
    "url": "./movie-0618.html"
  },
  {
    "title": "拉巴斯浮世绘",
    "genre": "剧情、喜剧",
    "tags": "南美风情, 多线叙事, 魔幻现实",
    "region": "玻利维亚",
    "type": "电影",
    "year": "2019",
    "cover": "./19.jpg",
    "url": "./movie-0619.html"
  },
  {
    "title": "衰鬼撬墙脚",
    "genre": "喜剧 / 奇幻",
    "tags": "鬼魂, 婚姻, 夺舍, 无厘头",
    "region": "香港",
    "type": "电影",
    "year": "1990",
    "cover": "./20.jpg",
    "url": "./movie-0620.html"
  },
  {
    "title": "烽火边城",
    "genre": "历史 / 战争 / 剧情",
    "tags": "丝绸之路, 唐朝, 守城战, 军民一心",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "cover": "./21.jpg",
    "url": "./movie-0621.html"
  },
  {
    "title": "触不到的爱",
    "genre": "爱情, 奇幻, 剧情",
    "tags": "穿越时空, 短信情缘, 双向奔赴, 悲剧美学",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./22.jpg",
    "url": "./movie-0622.html"
  },
  {
    "title": "精灵高中：逃离骷髅海岸",
    "genre": "动画、喜剧、奇幻",
    "tags": "精灵、高中、冒险、骷髅、校园",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "cover": "./23.jpg",
    "url": "./movie-0623.html"
  },
  {
    "title": "再见少女团",
    "genre": "青春 / 音乐",
    "tags": "女团解散, 职场青春, 梦想幻灭与重生",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./24.jpg",
    "url": "./movie-0624.html"
  },
  {
    "title": "高草丛中",
    "genre": "恐怖 / 悬疑",
    "tags": "史蒂芬·金, 心理恐怖, 循环空间",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "cover": "./25.jpg",
    "url": "./movie-0625.html"
  },
  {
    "title": "灵肉再生",
    "genre": "科幻, 伦理, 剧情",
    "tags": "克隆, 意识上传, 哲学",
    "region": "日本",
    "type": "电影",
    "year": "2027",
    "cover": "./26.jpg",
    "url": "./movie-0626.html"
  },
  {
    "title": "地下终劫站",
    "genre": "恐怖, 悬疑",
    "tags": "地铁, 循环, 都市传说, 心理惊悚",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./27.jpg",
    "url": "./movie-0627.html"
  },
  {
    "title": "汉娜·阿伦特",
    "genre": "传记, 剧情, 历史",
    "tags": "哲学家, 平庸之恶, 艾希曼审判, 思想史, 知识份子",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "cover": "./28.jpg",
    "url": "./movie-0628.html"
  },
  {
    "title": "最后五分钟",
    "genre": "惊悚 / 灾难",
    "tags": "实时叙事，炸弹威胁，政治黑幕，密室博弈，极限反转",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./29.jpg",
    "url": "./movie-0629.html"
  },
  {
    "title": "神精灵",
    "genre": "奇幻 / 家庭",
    "tags": "圣诞, 英式幽默, 职场",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "cover": "./30.jpg",
    "url": "./movie-0630.html"
  },
  {
    "title": "虚空魔境第二季",
    "genre": "奇幻，冒险",
    "tags": "异世界，魔法崩坏，战争，成人向",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./31.jpg",
    "url": "./movie-0631.html"
  },
  {
    "title": "铁窗红泪",
    "genre": "剧情, 犯罪",
    "tags": "监狱, 女性, 救赎, 经典",
    "region": "中国香港",
    "type": "电影",
    "year": "1999",
    "cover": "./32.jpg",
    "url": "./movie-0632.html"
  },
  {
    "title": "泼墨黄山",
    "genre": "悬疑犯罪",
    "tags": "国画, 巨额遗产, 山野奇案, 文人暗战",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./33.jpg",
    "url": "./movie-0633.html"
  },
  {
    "title": "灵欲春宵",
    "genre": "情色, 剧情",
    "tags": "情欲, 婚姻危机, 港式伦理, 许鞍华风",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "cover": "./34.jpg",
    "url": "./movie-0634.html"
  },
  {
    "title": "太平·天国",
    "genre": "历史、战争、剧情",
    "tags": "宏大叙事、草根史诗、信仰崩塌、人性博弈",
    "region": "中国",
    "type": "电影",
    "year": "2027",
    "cover": "./35.jpg",
    "url": "./movie-0635.html"
  },
  {
    "title": "高朋满座粤语",
    "genre": "喜剧 / 家庭 / 方言",
    "tags": "粤语原汁原味, 街坊文化, 处境喜剧",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "cover": "./36.jpg",
    "url": "./movie-0636.html"
  },
  {
    "title": "来拍怪兽电影吧！",
    "genre": "喜剧 / 科幻",
    "tags": "特摄, 幕后, 搞笑, 怪兽",
    "region": "日本",
    "type": "电影",
    "year": "2020",
    "cover": "./37.jpg",
    "url": "./movie-0637.html"
  },
  {
    "title": "利箭行动",
    "genre": "战争, 悬疑",
    "tags": "谍战, 狙击手, 智商对决",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./38.jpg",
    "url": "./movie-0638.html"
  },
  {
    "title": "联邦大蠢探",
    "genre": "喜剧、动作、犯罪",
    "tags": "无厘头、特工搞笑、乌龙卧底、讽刺FBI、谐音梗",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./39.jpg",
    "url": "./movie-0639.html"
  },
  {
    "title": "财富",
    "genre": "剧情, 犯罪",
    "tags": "华尔街, 家族, 背叛, 商战",
    "region": "美国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./40.jpg",
    "url": "./movie-0640.html"
  },
  {
    "title": "满天神佛",
    "genre": "动作 / 奇幻 / 喜剧",
    "tags": "降妖伏魔, 市井笑料, 神仙下凡",
    "region": "香港",
    "type": "电影",
    "year": "1993",
    "cover": "./41.jpg",
    "url": "./movie-0641.html"
  },
  {
    "title": "罗杰·华特斯：我们+他们",
    "genre": "音乐 / 传记 / 社会",
    "tags": "平克·弗洛伊德, 巡演幕后, 政治表达, 沉浸式现场",
    "region": "英国",
    "type": "音乐纪录片",
    "year": "2025",
    "cover": "./42.jpg",
    "url": "./movie-0642.html"
  },
  {
    "title": "艾迪（电影）",
    "genre": "惊悚 / 心理",
    "tags": "人格分裂, 孩子, 玩具, 密室",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./43.jpg",
    "url": "./movie-0643.html"
  },
  {
    "title": "傻子",
    "genre": "现实剧情",
    "tags": "农村, 留守儿童, 亲情, 社会议题, 催泪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./44.jpg",
    "url": "./movie-0644.html"
  },
  {
    "title": "木马上的女人",
    "genre": "悬疑 / 心理惊悚 / 艺术",
    "tags": "艺术品，替身，精神分裂，高概念",
    "region": "欧洲 / 美国",
    "type": "电影",
    "year": "2025",
    "cover": "./45.jpg",
    "url": "./movie-0645.html"
  },
  {
    "title": "网中的太阳",
    "genre": "剧情犯罪",
    "tags": "打拐, 现实主义, 温情",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./46.jpg",
    "url": "./movie-0646.html"
  },
  {
    "title": "白夜迷踪",
    "genre": "悬疑 / 犯罪 / 心理",
    "tags": "北极圈, 白夜, 连环杀人, 遗忘症, 小镇",
    "region": "俄罗斯",
    "type": "剧集",
    "year": "2025",
    "cover": "./47.jpg",
    "url": "./movie-0647.html"
  },
  {
    "title": "明日不再",
    "genre": "剧情 / 家庭 / 文艺",
    "tags": "临终关怀, 父子和解, 绝症, 生活流",
    "region": "香港",
    "type": "电影",
    "year": "2022",
    "cover": "./48.jpg",
    "url": "./movie-0648.html"
  },
  {
    "title": "诞生",
    "genre": "科幻 / 剧情 / 悬疑",
    "tags": "人造子宫, 伦理, 母女, 身份认同, 末日",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2023",
    "cover": "./49.jpg",
    "url": "./movie-0649.html"
  },
  {
    "title": "华沙女公爵",
    "genre": "剧情，历史，爱情",
    "tags": "贵族，二战，谍战，女性力量，钢琴家",
    "region": "波兰",
    "type": "电影",
    "year": "2021",
    "cover": "./50.jpg",
    "url": "./movie-0650.html"
  },
  {
    "title": "拯救侏罗纪",
    "genre": "科幻, 冒险",
    "tags": "恐龙, 时间旅行, 生态",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./51.jpg",
    "url": "./movie-0651.html"
  },
  {
    "title": "轧戏",
    "genre": "剧情喜剧",
    "tags": "电影片场, 小演员, 行业秘辛",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./52.jpg",
    "url": "./movie-0652.html"
  },
  {
    "title": "金臂童",
    "genre": "动作 / 武侠",
    "tags": "断臂，拳法，复仇，擂台",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./53.jpg",
    "url": "./movie-0653.html"
  },
  {
    "title": "翼：东京默示录",
    "genre": "奇幻 / 冒险 / 悬疑",
    "tags": "CLAMP, 翼年代记, 东京, 平行世界, 心理重压",
    "region": "日本",
    "type": "动画剧集 / OVA",
    "year": "2007",
    "cover": "./54.jpg",
    "url": "./movie-0654.html"
  },
  {
    "title": "新婚公寓",
    "genre": "恐怖 / 惊悚",
    "tags": "密室恐惧, 公寓惊魂, 反转再反转, 有限空间",
    "region": "西班牙",
    "type": "电影",
    "year": "2027",
    "cover": "./55.jpg",
    "url": "./movie-0655.html"
  },
  {
    "title": "金玉奴",
    "genre": "爱情、戏曲",
    "tags": "京剧电影，棒打薄情郎，女性反抗，传统美德",
    "region": "中国大陆",
    "type": "电影",
    "year": "1965",
    "cover": "./56.jpg",
    "url": "./movie-0656.html"
  },
  {
    "title": "人心",
    "genre": "惊悚 / 犯罪 / 悬疑",
    "tags": "器官移植, 记忆, 伦理, 反转",
    "region": "香港",
    "type": "电影",
    "year": "1998",
    "cover": "./57.jpg",
    "url": "./movie-0657.html"
  },
  {
    "title": "工作细胞",
    "genre": "动画， 喜剧， 科普",
    "tags": "拟人化， 身体冒险， 热血， 病菌， 治愈",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "cover": "./58.jpg",
    "url": "./movie-0658.html"
  },
  {
    "title": "理想照耀中国",
    "genre": "历史 / 剧情 / 传记",
    "tags": "主旋律, 单元剧, 真实人物, 百年党史, 群像",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "cover": "./59.jpg",
    "url": "./movie-0659.html"
  },
  {
    "title": "娃娃谷",
    "genre": "恐怖, 悬疑, 惊悚",
    "tags": "诡异玩偶, 小镇秘密, 童年阴影, 邪教",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./60.jpg",
    "url": "./movie-0660.html"
  },
  {
    "title": "恐怖城堡的秘密",
    "genre": "悬疑, 冒险, 家庭",
    "tags": "古堡探险, 儿童解谜, 家族诅咒",
    "region": "德国",
    "type": "剧集",
    "year": "2024",
    "cover": "./61.jpg",
    "url": "./movie-0661.html"
  },
  {
    "title": "夜行猎人",
    "genre": "犯罪， 动作， 悬疑",
    "tags": "私刑者， 黑夜， 侦探， 血腥， 网飞",
    "region": "韩国",
    "type": "剧集",
    "year": "2026",
    "cover": "./62.jpg",
    "url": "./movie-0662.html"
  },
  {
    "title": "月光大侠",
    "genre": "动作 / 奇幻",
    "tags": "超级英雄, 都市传说, 月光",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./63.jpg",
    "url": "./movie-0663.html"
  },
  {
    "title": "瓦德勒",
    "genre": "恐怖、奇幻、悬疑",
    "tags": "民俗、森林、共生、吞噬",
    "region": "德国",
    "type": "电影",
    "year": "2026",
    "cover": "./64.jpg",
    "url": "./movie-0664.html"
  },
  {
    "title": "分居",
    "genre": "剧情, 爱情",
    "tags": "婚姻, 冷战, 巴黎, 内心戏",
    "region": "法国",
    "type": "电影",
    "year": "2018",
    "cover": "./65.jpg",
    "url": "./movie-0665.html"
  },
  {
    "title": "小姐姐请回答",
    "genre": "悬疑, 犯罪",
    "tags": "播客, 探案, 女性, 都市传说",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./66.jpg",
    "url": "./movie-0666.html"
  },
  {
    "title": "心灵休憩处",
    "genre": "治愈 / 剧情",
    "tags": "民宿, 创伤疗愈, 海边小镇",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "cover": "./67.jpg",
    "url": "./movie-0667.html"
  },
  {
    "title": "蜡制面具",
    "genre": "恐怖, 神秘, 悬疑",
    "tags": "蜡像馆, 诅咒, 复古恐怖, 身体恐怖",
    "region": "意大利",
    "type": "电影",
    "year": "2025",
    "cover": "./68.jpg",
    "url": "./movie-0668.html"
  },
  {
    "title": "行尸走肉第二季",
    "genre": "恐怖 / 剧情 / 生存",
    "tags": "丧尸, 农场, 道德困境, 卡尔成长, 肖恩黑化",
    "region": "美国",
    "type": "剧集",
    "year": "2011",
    "cover": "./69.jpg",
    "url": "./movie-0669.html"
  },
  {
    "title": "警察故事之警察日记",
    "genre": "犯罪/悬疑",
    "tags": "日记, 双线叙事, 悬案, 复仇",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "cover": "./70.jpg",
    "url": "./movie-0670.html"
  },
  {
    "title": "雨果的冒险",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": "蒸汽朋克, 机械迷城, 友情, 解谜",
    "region": "法国 / 比利时",
    "type": "动画电影",
    "year": "2024",
    "cover": "./71.jpg",
    "url": "./movie-0671.html"
  },
  {
    "title": "我们是最棒的！",
    "genre": "剧情 / 音乐",
    "tags": "少女, 朋克, 叛逆",
    "region": "瑞典",
    "type": "电影",
    "year": "2018",
    "cover": "./72.jpg",
    "url": "./movie-0672.html"
  },
  {
    "title": "何班主和他的情人",
    "genre": "剧情爱情",
    "tags": "皮影戏, 乡村禁忌恋, 时代悲剧",
    "region": "中国大陆",
    "type": "电影",
    "year": "1993",
    "cover": "./73.jpg",
    "url": "./movie-0673.html"
  },
  {
    "title": "铁血战狼",
    "genre": "战争动作 / 军事冒险",
    "tags": "特战小队, 边境反恐, 兄弟情义, 丛林追击, 爆破行动, 热血逆袭",
    "region": "中国大陆",
    "type": "电影",
    "year": "2017",
    "cover": "./74.jpg",
    "url": "./movie-0674.html"
  },
  {
    "title": "最佳夫婿",
    "genre": "喜剧, 爱情, 古装",
    "tags": "女强男弱, 赘婿, 扮猪吃老虎, 科举, 甜宠",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "cover": "./75.jpg",
    "url": "./movie-0675.html"
  },
  {
    "title": "我是恶魔内脏中的牺牲品",
    "genre": "惊悚、犯罪、宗教",
    "tags": "邪教、器官贩卖、双重身份、复仇、血腥美学",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./76.jpg",
    "url": "./movie-0676.html"
  },
  {
    "title": "推销战争",
    "genre": "喜剧, 剧情",
    "tags": "销售, 职场, 年终考核, 黑色幽默, 内卷",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./77.jpg",
    "url": "./movie-0677.html"
  },
  {
    "title": "康奈尔之盒",
    "genre": "科幻 / 悬疑",
    "tags": "平行宇宙, 盒子, 选择, 惊悚, 高概念",
    "region": "美国",
    "type": "电视剧 (限定剧)",
    "year": "2024",
    "cover": "./78.jpg",
    "url": "./movie-0678.html"
  },
  {
    "title": "入侵者2020",
    "genre": "科幻 / 悬疑",
    "tags": "记忆植入， 身份盗窃， 冷战",
    "region": "法国 / 比利时合拍",
    "type": "电影",
    "year": "2020",
    "cover": "./79.jpg",
    "url": "./movie-0679.html"
  },
  {
    "title": "色降2之血玫瑰",
    "genre": "恐怖, 情色",
    "tags": "降头术, 南洋邪术, 复仇",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "cover": "./80.jpg",
    "url": "./movie-0680.html"
  },
  {
    "title": "飞盘犬",
    "genre": "家庭 / 运动 / 喜剧",
    "tags": "狗，宠物，治愈，逆袭，比赛",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./81.jpg",
    "url": "./movie-0681.html"
  },
  {
    "title": "超胆侠第二季",
    "genre": "动作 / 犯罪 / 科幻",
    "tags": "漫威， 夜魔侠， 地狱厨房， 惩罚者， 法律",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./82.jpg",
    "url": "./movie-0682.html"
  },
  {
    "title": "让悲伤长出翅膀",
    "genre": "家庭剧情",
    "tags": "丧子, 助残, 治愈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./83.jpg",
    "url": "./movie-0683.html"
  },
  {
    "title": "魔盗白骨衣之昆仑之泪",
    "genre": "奇幻, 动作",
    "tags": "盗墓, 特效大片, 古装",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./84.jpg",
    "url": "./movie-0684.html"
  },
  {
    "title": "梦想巨无霸",
    "genre": "剧情、喜剧、商战",
    "tags": "快餐帝国、家族斗争、创业史、理想主义",
    "region": "美国",
    "type": "剧集",
    "year": "2027",
    "cover": "./85.jpg",
    "url": "./movie-0685.html"
  },
  {
    "title": "宇宙最强的粉红冲击",
    "genre": "科幻,动作,军事,硬科幻",
    "tags": "粉红波束,情绪武器,边境舰队,银河条约,记忆主权,反击协议",
    "region": "美国",
    "type": "太空科幻动作电影",
    "year": "2029",
    "cover": "./86.jpg",
    "url": "./movie-0686.html"
  },
  {
    "title": "人性记录",
    "genre": "犯罪 / 悬疑",
    "tags": "心理分析, 罪案纪实, 反转结局",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "cover": "./87.jpg",
    "url": "./movie-0687.html"
  },
  {
    "title": "始动",
    "genre": "剧情 / 喜剧 / 励志",
    "tags": "排球, 残疾, 热血, 女团, 改编",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "cover": "./88.jpg",
    "url": "./movie-0688.html"
  },
  {
    "title": "五岁庵",
    "genre": "动画 / 家庭 / 治愈 / 剧情",
    "tags": "山寺童年, 兄妹羁绊, 佛门日常, 冬雪山林, 温柔告别",
    "region": "韩国",
    "type": "动画电影",
    "year": "2003",
    "cover": "./89.jpg",
    "url": "./movie-0689.html"
  },
  {
    "title": "太空争霸",
    "genre": "科幻 / 冒险",
    "tags": "太空竞赛, 架空历史, 政治, 商业",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./90.jpg",
    "url": "./movie-0690.html"
  },
  {
    "title": "白白的世界",
    "genre": "剧情, 家庭",
    "tags": "阿尔茨海默症, 亲情, 遗忘, 黑白影像",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./91.jpg",
    "url": "./movie-0691.html"
  },
  {
    "title": "玩命时刻",
    "genre": "动作 / 惊悚 / 犯罪",
    "tags": "实时叙事, 直播犯罪, 救女行动, 限时速递",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./92.jpg",
    "url": "./movie-0692.html"
  },
  {
    "title": "重大发现",
    "genre": "科幻 / 悬疑 / 冒险",
    "tags": "考古, 外星, 秘境, 反转, 惊悚",
    "region": "美国 / 中国",
    "type": "电影",
    "year": "2025",
    "cover": "./93.jpg",
    "url": "./movie-0693.html"
  },
  {
    "title": "风流女教师",
    "genre": "剧情 / 情色 / 社会",
    "tags": "禁忌之恋, 道德审判, 女性欲望",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./94.jpg",
    "url": "./movie-0694.html"
  },
  {
    "title": "百集聊斋之人鬼情缘",
    "genre": "奇幻, 爱情, 推理, 宗教",
    "tags": "聊斋改编, 人鬼契约, 百年冤案, 降灵秘术, 复仇重生",
    "region": "中国",
    "type": "古装奇幻剧",
    "year": "2022",
    "cover": "./95.jpg",
    "url": "./movie-0695.html"
  },
  {
    "title": "海猿4",
    "genre": "动作 / 灾难 / 剧情",
    "tags": "海上救援, 英雄传承, 父子矛盾, 真实事件",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./96.jpg",
    "url": "./movie-0696.html"
  },
  {
    "title": "斯特拉的魔法",
    "genre": "奇幻, 校园, 治愈",
    "tags": "魔法少女, 社恐, 青春期, 隐喻, 友情",
    "region": "日本",
    "type": "动画剧集",
    "year": "2025",
    "cover": "./97.jpg",
    "url": "./movie-0697.html"
  },
  {
    "title": "我的笋盘男友粤语",
    "genre": "爱情 / 喜剧",
    "tags": "港片, 拜金, 反转, 择偶, 搞笑",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./98.jpg",
    "url": "./movie-0698.html"
  },
  {
    "title": "开心掌掴",
    "genre": "喜剧, 动作",
    "tags": "巴掌, 复仇, 乌龙, 功夫",
    "region": "香港",
    "type": "电影",
    "year": "1990",
    "cover": "./99.jpg",
    "url": "./movie-0699.html"
  },
  {
    "title": "新月圆花残断肠时",
    "genre": "爱情, 戏曲",
    "tags": "邵氏, 古装, 悲剧, 黄梅调",
    "region": "中国香港",
    "type": "电影",
    "year": "1967",
    "cover": "./100.jpg",
    "url": "./movie-0700.html"
  },
  {
    "title": "被告山杠爷",
    "genre": "剧情 / 犯罪 / 乡村",
    "tags": "乡村治理，人治与法治，悲剧，道德困境，宗族",
    "region": "中国大陆",
    "type": "电影",
    "year": "1994",
    "cover": "./101.jpg",
    "url": "./movie-0701.html"
  },
  {
    "title": "钢铁森林",
    "genre": "悬疑 / 刑侦 / 犯罪",
    "tags": "双男主, 卧底, 黑警, 缉毒, 硬核",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2026",
    "cover": "./102.jpg",
    "url": "./movie-0702.html"
  },
  {
    "title": "抱歉了同事",
    "genre": "喜剧 / 职场",
    "tags": "社畜, 复仇, 卧底, 办公室政治",
    "region": "日本",
    "type": "电视剧",
    "year": "2025",
    "cover": "./103.jpg",
    "url": "./movie-0703.html"
  },
  {
    "title": "老人与经书",
    "genre": "剧情 / 文化",
    "tags": "藏地, 经文, 修行, 朝圣, 消失的传统",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./104.jpg",
    "url": "./movie-0704.html"
  },
  {
    "title": "他人的领地",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": "领土, 家族秘密, 继承, 心理惊悚, 孤独",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "cover": "./105.jpg",
    "url": "./movie-0705.html"
  },
  {
    "title": "权力界",
    "genre": "政治、惊悚",
    "tags": "白宫内斗、幕僚长、暗箱操作、年度神剧",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./106.jpg",
    "url": "./movie-0706.html"
  },
  {
    "title": "无爱理想国",
    "genre": "剧情, 科幻, 爱情",
    "tags": "反乌托邦, 情感控制, 唯美, 悲剧, 哲学",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2025",
    "cover": "./107.jpg",
    "url": "./movie-0707.html"
  },
  {
    "title": "海边",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": "文艺, 邂逅, 夏日, 遗憾",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./108.jpg",
    "url": "./movie-0708.html"
  },
  {
    "title": "魅影特工",
    "genre": "动作/谍战/犯罪",
    "tags": "伪装潜伏,双重身份,城市暗战,信息战,高能反转",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./109.jpg",
    "url": "./movie-0709.html"
  },
  {
    "title": "明天，我要和昨天的妳约会",
    "genre": "爱情 / 奇幻 / 剧情",
    "tags": "纯爱, 时间悖论, 催泪, 京都",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./110.jpg",
    "url": "./movie-0710.html"
  },
  {
    "title": "奶酪店",
    "genre": "喜剧",
    "tags": "小镇, 奶酪, 家族恩怨, 美食, 荒诞",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./111.jpg",
    "url": "./movie-0711.html"
  },
  {
    "title": "大雪怪",
    "genre": "动作， 冒险， 灾难",
    "tags": "怪兽， 雪山， 特效大片",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./112.jpg",
    "url": "./movie-0712.html"
  },
  {
    "title": "犬夜叉:红莲之蓬莱岛",
    "genre": "奇幻, 动作",
    "tags": "犬夜叉, 剧场版, 四魂之玉, 兄妹",
    "region": "日本",
    "type": "动画电影",
    "year": "2004",
    "cover": "./113.jpg",
    "url": "./movie-0713.html"
  },
  {
    "title": "横冲直撞斗飞车",
    "genre": "喜剧，动作",
    "tags": "飙车，经典，伯特·雷诺兹，走私，公路",
    "region": "美国",
    "type": "电影",
    "year": "1978",
    "cover": "./114.jpg",
    "url": "./movie-0714.html"
  },
  {
    "title": "手机风云",
    "genre": "悬疑, 剧情, 犯罪",
    "tags": "密室, 手机隐私, 全员恶人, 黑色幽默",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "cover": "./115.jpg",
    "url": "./movie-0715.html"
  },
  {
    "title": "超杀硬汉",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": "杀手，复仇，暴力美学，以一敌百，爽片",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./116.jpg",
    "url": "./movie-0716.html"
  },
  {
    "title": "印度艳后",
    "genre": "历史, 爱情, 战争",
    "tags": "史诗大片, 美女如云, 宫廷斗争, 歌舞盛宴",
    "region": "印度",
    "type": "电影",
    "year": "2018",
    "cover": "./117.jpg",
    "url": "./movie-0717.html"
  },
  {
    "title": "空气人形",
    "genre": "奇幻",
    "tags": "治愈, 孤独, 哲学寓言, 温情",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./118.jpg",
    "url": "./movie-0718.html"
  },
  {
    "title": "印度好男孩",
    "genre": "剧情、同性、青春",
    "tags": "包办婚姻、出柜、家族荣誉、自我认同、宝莱坞",
    "region": "印度",
    "type": "电影",
    "year": "2026",
    "cover": "./119.jpg",
    "url": "./movie-0719.html"
  },
  {
    "title": "天才宣言",
    "genre": "剧情 / 惊悚",
    "tags": "高智商, 伦理, 暗黑",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "cover": "./120.jpg",
    "url": "./movie-0720.html"
  },
  {
    "title": "金属风暴",
    "genre": "动作, 科幻",
    "tags": "机甲, 未来战争, 人工智能, 兄弟",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./121.jpg",
    "url": "./movie-0721.html"
  },
  {
    "title": "女性瘾者：第一部",
    "genre": "剧情情色",
    "tags": "女性欲望, 解剖学, 哲学对白, 章节体",
    "region": "丹麦/瑞典",
    "type": "电影",
    "year": "2024",
    "cover": "./122.jpg",
    "url": "./movie-0722.html"
  },
  {
    "title": "凶手教练",
    "genre": "悬疑, 犯罪",
    "tags": "校园, 体育老师, 复仇, 密室",
    "region": "日本",
    "type": "电影",
    "year": "2015",
    "cover": "./123.jpg",
    "url": "./movie-0723.html"
  },
  {
    "title": "夜梦传说之天狼使者",
    "genre": "奇幻, 悬疑, 动作, 都市",
    "tags": "梦境, 入梦者, 天狼星, 异能, 宿命",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-0724.html"
  },
  {
    "title": "白色毒网",
    "genre": "剧情 / 犯罪 / 教育",
    "tags": "禁毒, 家庭, 堕落, 救赎, 社会",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2025",
    "cover": "./125.jpg",
    "url": "./movie-0725.html"
  },
  {
    "title": "苍蓝乌尔",
    "genre": "动画/奇幻/冒险",
    "tags": "北欧神话, 手绘, 鲸鱼, 祭祀, 孤独",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./126.jpg",
    "url": "./movie-0726.html"
  },
  {
    "title": "美国处男",
    "genre": "青春, 喜剧",
    "tags": "校园, 成长, 搞笑, 友情",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./127.jpg",
    "url": "./movie-0727.html"
  },
  {
    "title": "我叫埃米莉",
    "genre": "剧情 / 成长 / 音乐",
    "tags": "少女, 自我认同, 校园, 旅途, 日记, 友谊",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./128.jpg",
    "url": "./movie-0728.html"
  },
  {
    "title": "晚宴上的比特丽兹",
    "genre": "剧情, 喜剧, 社会",
    "tags": "阶层碰撞, 移民视角, 富人面具",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "year": "2024",
    "cover": "./129.jpg",
    "url": "./movie-0729.html"
  },
  {
    "title": "我的男人",
    "genre": "爱情 / 伦理",
    "tags": "禁忌之恋, 唯美, 致郁, 人性",
    "region": "日本",
    "type": "电影",
    "year": "2014",
    "cover": "./130.jpg",
    "url": "./movie-0730.html"
  },
  {
    "title": "一觉醒来变成妹子",
    "genre": "奇幻,都市,性别议题,悬疑,情感",
    "tags": "身份重置,性别转换,办公室政治,关系重构,灵异补偿",
    "region": "中国大陆",
    "type": "奇幻电影",
    "year": "2025",
    "cover": "./131.jpg",
    "url": "./movie-0731.html"
  },
  {
    "title": "亲密告白",
    "genre": "剧情 / 爱情",
    "tags": "校园, 暗恋, 遗憾, 毕业, 书信",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./132.jpg",
    "url": "./movie-0732.html"
  },
  {
    "title": "东京生死恋",
    "genre": "爱情 / 悬疑 / 灾难",
    "tags": "虐恋, 地震, 失忆, 时间循环",
    "region": "日本",
    "type": "电视剧",
    "year": "2022",
    "cover": "./133.jpg",
    "url": "./movie-0733.html"
  },
  {
    "title": "副总统第二季",
    "genre": "喜剧 / 政治",
    "tags": "白宫, 讽刺, 职场, 话痨, 艾美奖",
    "region": "美国",
    "type": "电视剧",
    "year": "2013",
    "cover": "./134.jpg",
    "url": "./movie-0734.html"
  },
  {
    "title": "泰山大闹纽约",
    "genre": "动作 / 喜剧",
    "tags": "丛林之王，都市冒险，文化冲突",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./135.jpg",
    "url": "./movie-0735.html"
  },
  {
    "title": "史第科",
    "genre": "剧情 / 悬疑",
    "tags": "小镇迷雾, 身份互换, 心理博弈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./136.jpg",
    "url": "./movie-0736.html"
  },
  {
    "title": "恶魔人 妖鸟死丽濡篇",
    "genre": "黑暗奇幻，恐怖，动作",
    "tags": "血腥，暴力美学，恶魔，悲剧英雄",
    "region": "日本",
    "type": "动画OVA",
    "year": "2023",
    "cover": "./137.jpg",
    "url": "./movie-0737.html"
  },
  {
    "title": "猎心者",
    "genre": "悬疑, 刑侦",
    "tags": "心理侧写, 高智商犯罪, 双雄",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./138.jpg",
    "url": "./movie-0738.html"
  },
  {
    "title": "空降利刃",
    "genre": "军旅 / 动作 / 励志",
    "tags": "特种兵，空降兵，实战演习，铁血柔情，蓝军",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2019",
    "cover": "./139.jpg",
    "url": "./movie-0739.html"
  },
  {
    "title": "真爱至上国语",
    "genre": "爱情、喜剧",
    "tags": "配音、圣诞、多线叙事、温情",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./140.jpg",
    "url": "./movie-0740.html"
  },
  {
    "title": "命运派对",
    "genre": "悬疑、惊悚、密室",
    "tags": "剧本杀、全员恶人、别墅暴风雪山庄、时间循环",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "cover": "./141.jpg",
    "url": "./movie-0741.html"
  },
  {
    "title": "吃蛋糕的人",
    "genre": "黑色喜剧",
    "tags": "美食欲望, 中年危机, 失控聚会, 家庭隐情, 荒诞反转",
    "region": "韩国",
    "type": "电影",
    "year": "2019",
    "cover": "./142.jpg",
    "url": "./movie-0742.html"
  },
  {
    "title": "变形精钢",
    "genre": "喜剧, 科幻",
    "tags": "山寨, 搞笑, 农村, 发明, 逆袭",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./143.jpg",
    "url": "./movie-0743.html"
  },
  {
    "title": "小虾米也想钓到鲷鱼",
    "genre": "剧情",
    "tags": "励志, 钓鱼, 治愈, 小镇青年",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./144.jpg",
    "url": "./movie-0744.html"
  },
  {
    "title": "切腹",
    "genre": "剧情, 武士",
    "tags": "小林正树, 武士道, 反叛, 讽刺",
    "region": "日本",
    "type": "电影",
    "year": "1962",
    "cover": "./145.jpg",
    "url": "./movie-0745.html"
  },
  {
    "title": "玛丽·雪莱的怪物",
    "genre": "恐怖 / 传记 / 剧情",
    "tags": "哥特, 作家传记, 创作恐怖, 心理惊悚",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2024",
    "cover": "./146.jpg",
    "url": "./movie-0746.html"
  },
  {
    "title": "末世肉体",
    "genre": "科幻，恐怖",
    "tags": "身体恐怖，后末日，欲望，突变",
    "region": "法国，比利时",
    "type": "电影",
    "year": "2025",
    "cover": "./147.jpg",
    "url": "./movie-0747.html"
  },
  {
    "title": "绝路反击",
    "genre": "动作 / 犯罪",
    "tags": "暴力美学, 复仇, 卧底, 枪战",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./148.jpg",
    "url": "./movie-0748.html"
  },
  {
    "title": "首演之夜1977",
    "genre": "剧情 / 戏剧 / 心理",
    "tags": "剧场, 女演员, 中年危机, 即兴",
    "region": "美国",
    "type": "电影",
    "year": "1977",
    "cover": "./149.jpg",
    "url": "./movie-0749.html"
  },
  {
    "title": "飞车艳史",
    "genre": "动作, 喜剧",
    "tags": "飙车, 女性搭档, 盗窃, 爆笑",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./150.jpg",
    "url": "./movie-0750.html"
  },
  {
    "title": "寻找神话之鸟",
    "genre": "冒险 / 家庭 / 自然",
    "tags": "鸟类, 神话, 祖孙情, 环保",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./1.jpg",
    "url": "./movie-0751.html"
  },
  {
    "title": "超时空爱恋之幻境重生",
    "genre": "科幻 / 爱情 / 悬疑",
    "tags": "无限流, 虐恋, 高概念, 元宇宙",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "cover": "./2.jpg",
    "url": "./movie-0752.html"
  },
  {
    "title": "倒霉性爱，发狂黄片",
    "genre": "喜剧, 剧情, 情色",
    "tags": "性爱录像, 社交媒体, 网络暴力, 社会讽刺, 实验电影",
    "region": "罗马尼亚",
    "type": "电影",
    "year": "2023",
    "cover": "./3.jpg",
    "url": "./movie-0753.html"
  },
  {
    "title": "上尉战役",
    "genre": "战争 / 动作",
    "tags": "一战, 东线战场, 骑兵, 兄弟情",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "cover": "./4.jpg",
    "url": "./movie-0754.html"
  },
  {
    "title": "天堂马帮",
    "genre": "动作 / 西部",
    "tags": "民国剿匪, 马帮传奇, 雪山复仇, 硬核枪战",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./5.jpg",
    "url": "./movie-0755.html"
  },
  {
    "title": "我的亲爹和后爸",
    "genre": "家庭 / 喜剧 / 剧情",
    "tags": "重组家庭, 父子关系, 代际冲突, 生活流, 误会和解, 家庭伦理",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2019",
    "cover": "./6.jpg",
    "url": "./movie-0756.html"
  },
  {
    "title": "雪地娘子军",
    "genre": "战争 / 历史 / 女性",
    "tags": "东北抗联, 女兵群像, 雪原狙击",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./7.jpg",
    "url": "./movie-0757.html"
  },
  {
    "title": "超隐形男友",
    "genre": "奇幻, 爱情, 喜剧",
    "tags": "隐形人, 轻甜, 搞笑",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2022",
    "cover": "./8.jpg",
    "url": "./movie-0758.html"
  },
  {
    "title": "九个完美陌生人第一季",
    "genre": "剧情悬疑",
    "tags": "疗养中心, 心灵操控, 全员秘密, 迷幻蘑菇",
    "region": "美国",
    "type": "剧集",
    "year": "2021",
    "cover": "./9.jpg",
    "url": "./movie-0759.html"
  },
  {
    "title": "敏郎悲歌",
    "genre": "剧情, 音乐",
    "tags": "演歌歌手, 失声, 人生绝唱",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "cover": "./10.jpg",
    "url": "./movie-0760.html"
  },
  {
    "title": "男性，女性",
    "genre": "剧情 / 爱情",
    "tags": "巴黎，性别议题，青春，社会观察",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./11.jpg",
    "url": "./movie-0761.html"
  },
  {
    "title": "天使的战争",
    "genre": "科幻，战争，宗教神话",
    "tags": "基因改造，堕落天使，人类反抗军，太空歌剧，权力游戏",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "cover": "./12.jpg",
    "url": "./movie-0762.html"
  },
  {
    "title": "登机门",
    "genre": "惊悚，犯罪",
    "tags": "黑色电影，情色，背叛",
    "region": "法国 / 意大利",
    "type": "电影",
    "year": "2028",
    "cover": "./13.jpg",
    "url": "./movie-0763.html"
  },
  {
    "title": "老驴头",
    "genre": "剧情",
    "tags": "农村, 老人, 土地, 倔强, 空巢",
    "region": "中国大陆",
    "type": "电影",
    "year": "2010",
    "cover": "./14.jpg",
    "url": "./movie-0764.html"
  },
  {
    "title": "爱你所以离开你",
    "genre": "爱情 / 家庭 / 伦理",
    "tags": "绝症, 隐婚, 离别, 催泪",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./15.jpg",
    "url": "./movie-0765.html"
  },
  {
    "title": "雅努斯之镜",
    "genre": "科幻, 悬疑, 心理",
    "tags": "平行宇宙, 选择, 哲学, 烧脑",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "cover": "./16.jpg",
    "url": "./movie-0766.html"
  },
  {
    "title": "凤舞香罗粤语",
    "genre": "剧情 / 歌舞 / 年代",
    "tags": "粤剧名伶, 旗袍, 民国风情",
    "region": "中国香港",
    "type": "剧集",
    "year": "2005",
    "cover": "./17.jpg",
    "url": "./movie-0767.html"
  },
  {
    "title": "悠长下课后",
    "genre": "青春, 悬疑, 成长, 心理",
    "tags": "高中自习, 课后迷雾, 失踪旧案, 友谊考验, 时间拉扯",
    "region": "中国",
    "type": "青春悬疑片",
    "year": "2023",
    "cover": "./18.jpg",
    "url": "./movie-0768.html"
  },
  {
    "title": "超级冠军",
    "genre": "运动, 剧情",
    "tags": "拳击, 励志, 真实改编, 父女",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "cover": "./19.jpg",
    "url": "./movie-0769.html"
  },
  {
    "title": "幸福四字箴言2：幸福永远",
    "genre": "爱情， 喜剧",
    "tags": "婚姻， 寻宝， 前任， 续集",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./20.jpg",
    "url": "./movie-0770.html"
  },
  {
    "title": "开心超人联盟之星之力",
    "genre": "科幻 / 动画 / 儿童",
    "tags": "机甲合体, 星际冒险, 团队成长",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2025",
    "cover": "./21.jpg",
    "url": "./movie-0771.html"
  },
  {
    "title": "挛爱大龙凤",
    "genre": "喜剧 / 爱情 / 同性",
    "tags": "同性, 家庭喜剧, 婚礼闹剧",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./22.jpg",
    "url": "./movie-0772.html"
  },
  {
    "title": "爱情，最好是这兽",
    "genre": "爱情奇幻",
    "tags": "野兽, 都市童话, 欲望, 变形",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./23.jpg",
    "url": "./movie-0773.html"
  },
  {
    "title": "鬼火",
    "genre": "恐怖，悬疑",
    "tags": "乡村，民间传说，蛊术，轮回",
    "region": "泰国",
    "type": "电影",
    "year": "2013",
    "cover": "./24.jpg",
    "url": "./movie-0774.html"
  },
  {
    "title": "米娜的故事",
    "genre": "剧情 / 都市悬疑",
    "tags": "记忆重建、母女情、旧城改造、文物保护、真相账本",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "cover": "./25.jpg",
    "url": "./movie-0775.html"
  },
  {
    "title": "香料共和国",
    "genre": "剧情，奇幻",
    "tags": "美食，乡愁，民族记忆，香料隐喻，历史伤痕",
    "region": "希腊 / 土耳其",
    "type": "电影",
    "year": "2024",
    "cover": "./26.jpg",
    "url": "./movie-0776.html"
  },
  {
    "title": "特区打工妹",
    "genre": "剧情 / 社会",
    "tags": "改革开放, 深圳, 女性奋斗, 打工潮",
    "region": "中国大陆",
    "type": "电影",
    "year": "1990",
    "cover": "./27.jpg",
    "url": "./movie-0777.html"
  },
  {
    "title": "可怜天下父母心",
    "genre": "家庭 / 剧情",
    "tags": "养老, 亲子关系, 催泪, 现实题材",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "cover": "./28.jpg",
    "url": "./movie-0778.html"
  },
  {
    "title": "完美结局",
    "genre": "爱情悬疑 / 都市 / 反转",
    "tags": "婚礼, 失忆, 双线叙事, 真相, 命运, 选择",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./29.jpg",
    "url": "./movie-0779.html"
  },
  {
    "title": "赌神2",
    "genre": "动作、赌博、犯罪",
    "tags": "高进回归、心理博弈、AI赌术、老派浪漫",
    "region": "中国香港",
    "type": "电影",
    "year": "2027",
    "cover": "./30.jpg",
    "url": "./movie-0780.html"
  },
  {
    "title": "魔鬼孩儿",
    "genre": "恐怖, 心理惊悚",
    "tags": "灵童, 民俗恐怖, 反转结局, 阴郁美学",
    "region": "中国台湾",
    "type": "电影",
    "year": "2019",
    "cover": "./31.jpg",
    "url": "./movie-0781.html"
  },
  {
    "title": "战国妖狐救世姐弟篇",
    "genre": "奇幻 / 战斗",
    "tags": "战国, 妖怪, 热血, 姐弟",
    "region": "日本",
    "type": "动画剧集",
    "year": "2024",
    "cover": "./32.jpg",
    "url": "./movie-0782.html"
  },
  {
    "title": "王牌大主厨",
    "genre": "喜剧 / 美食",
    "tags": "厨艺, 监狱, 诈骗, 米其林, 翻身",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./33.jpg",
    "url": "./movie-0783.html"
  },
  {
    "title": "泡沫之夏",
    "genre": "剧情，家庭，社会",
    "tags": "房地产，拆迁，父子，底层",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./34.jpg",
    "url": "./movie-0784.html"
  },
  {
    "title": "黄河喜事",
    "genre": "剧情, 喜剧, 家庭",
    "tags": "农村, 彩礼, 传统与现代",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./35.jpg",
    "url": "./movie-0785.html"
  },
  {
    "title": "英伦情人",
    "genre": "爱情，剧情，历史",
    "tags": "复古，阶级差异，禁忌恋，庄园",
    "region": "英国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./36.jpg",
    "url": "./movie-0786.html"
  },
  {
    "title": "谁是宝藏歌手 嗨看版",
    "genre": "音乐, 真人秀",
    "tags": "精简版, 纯享, 幕后, 高能剪辑, 竞演",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2021",
    "cover": "./37.jpg",
    "url": "./movie-0787.html"
  },
  {
    "title": "双重间谍",
    "genre": "谍战动作",
    "tags": "南北韩, 身份迷失, 无间道, 高智商",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./38.jpg",
    "url": "./movie-0788.html"
  },
  {
    "title": "圣水",
    "genre": "恐怖， 神秘， 惊悚",
    "tags": "宗教惊悚， 水污染， 集体癔症， 圣迹",
    "region": "意大利 / 梵蒂冈",
    "type": "电影",
    "year": "2025",
    "cover": "./39.jpg",
    "url": "./movie-0789.html"
  },
  {
    "title": "墨西哥沙龙",
    "genre": "剧情, 歌舞, 爱情",
    "tags": "黑白, 经典, 舞厅, 贫民窟, 三姐妹",
    "region": "墨西哥",
    "type": "电影",
    "year": "1949",
    "cover": "./40.jpg",
    "url": "./movie-0790.html"
  },
  {
    "title": "华伦·艾利斯：被俘的鬼魂",
    "genre": "纪录片, 传记",
    "tags": "政治漫画家, 抗争, 极权",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./41.jpg",
    "url": "./movie-0791.html"
  },
  {
    "title": "人世间",
    "genre": "家庭剧情、年代史诗、现实主义",
    "tags": "家族命运、工厂改制、三代同堂、旧城记忆、时代迁徙",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "cover": "./42.jpg",
    "url": "./movie-0792.html"
  },
  {
    "title": "太空堡垒卡拉狄加：计划",
    "genre": "科幻 / 战争 / 悬疑",
    "tags": "太空歌剧, 赛隆人, 阴谋, 宗教, 生存",
    "region": "美国",
    "type": "电视剧 / 迷你剧",
    "year": "2025",
    "cover": "./43.jpg",
    "url": "./movie-0793.html"
  },
  {
    "title": "魅祸啦啦队",
    "genre": "恐怖， 青春， 悬疑",
    "tags": "啦啦队， 诅咒， 校园怪谈， 血腥",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./44.jpg",
    "url": "./movie-0794.html"
  },
  {
    "title": "直捣火星",
    "genre": "科幻 / 动作 / 冒险",
    "tags": "火星殖民, 太空战争, 机甲, 政治阴谋, 硬科幻",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./45.jpg",
    "url": "./movie-0795.html"
  },
  {
    "title": "联邦警察：谁都应该守法",
    "genre": "动作 / 犯罪 / 悬疑",
    "tags": "警匪对决，体制批判，卧底，伦理困境",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./46.jpg",
    "url": "./movie-0796.html"
  },
  {
    "title": "日无光心慌慌",
    "genre": "恐怖 / 惊悚",
    "tags": "民俗, 太阳, 诅咒, 封闭空间, 精神病",
    "region": "马来西亚",
    "type": "电影",
    "year": "2020",
    "cover": "./47.jpg",
    "url": "./movie-0797.html"
  },
  {
    "title": "西厢记1965国语",
    "genre": "戏曲 / 爱情",
    "tags": "古典名著, 才子佳人, 国语戏曲, 月下私会, 礼教冲突",
    "region": "中国香港",
    "type": "电影",
    "year": "1965",
    "cover": "./48.jpg",
    "url": "./movie-0798.html"
  },
  {
    "title": "高压行动",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": "卧底, 黑帮, 电梯, 密闭空间",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./49.jpg",
    "url": "./movie-0799.html"
  },
  {
    "title": "急弯",
    "genre": "动作， 剧情， 家庭",
    "tags": "亲情救赎， 货车司机， 边境， 公路",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./50.jpg",
    "url": "./movie-0800.html"
  },
  {
    "title": "神秘五金行",
    "genre": "奇幻，家庭，剧情",
    "tags": "传承，老街，治愈，神秘物品",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "cover": "./51.jpg",
    "url": "./movie-0801.html"
  },
  {
    "title": "太平洋风暴",
    "genre": "战争 / 历史 / 灾难",
    "tags": "二战, 海战, 台风, 战舰, 反战",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./52.jpg",
    "url": "./movie-0802.html"
  },
  {
    "title": "我与长指甲",
    "genre": "剧情, 喜剧",
    "tags": "英伦复古, 成长, 文艺青年",
    "region": "英国",
    "type": "电影",
    "year": "1987",
    "cover": "./53.jpg",
    "url": "./movie-0803.html"
  },
  {
    "title": "疯之状态",
    "genre": "科幻 / 心理惊悚",
    "tags": "大脑植入, 情绪失控, 反乌托邦, 集体癔症, 监控社会",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./54.jpg",
    "url": "./movie-0804.html"
  },
  {
    "title": "大脚怪2",
    "genre": "喜剧 / 冒险",
    "tags": "大脚怪, 续集, 父子, 环境保护",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./55.jpg",
    "url": "./movie-0805.html"
  },
  {
    "title": "子夜招魂",
    "genre": "惊悚、恐怖、灵异",
    "tags": "民俗、招魂、祖宅、禁忌、夜祭",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./56.jpg",
    "url": "./movie-0806.html"
  },
  {
    "title": "带你去看北极光",
    "genre": "剧情, 冒险, 家庭",
    "tags": "临终愿望, 父子之旅, 极地, 和解",
    "region": "英国 / 加拿大",
    "type": "电影",
    "year": "2025",
    "cover": "./57.jpg",
    "url": "./movie-0807.html"
  },
  {
    "title": "小心处理",
    "genre": "犯罪 / 悬疑 / 动作",
    "tags": "黑吃黑，神秘包裹，限时营救",
    "region": "香港",
    "type": "电影",
    "year": "2023",
    "cover": "./58.jpg",
    "url": "./movie-0808.html"
  },
  {
    "title": "成家",
    "genre": "都市 / 家庭 / 情感",
    "tags": "婚恋观念, 合租同居, 代际沟通, 轻喜治愈, 都市群像, 生活抉择",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./59.jpg",
    "url": "./movie-0809.html"
  },
  {
    "title": "让我们都去大厅",
    "genre": "喜剧, 剧情",
    "tags": "公寓, 居民会议, 群像, 社会讽刺",
    "region": "法国",
    "type": "电影",
    "year": "1974",
    "cover": "./60.jpg",
    "url": "./movie-0810.html"
  },
  {
    "title": "同床异客",
    "genre": "惊悚， 悬疑， 剧情",
    "tags": "心理惊悚， 密室， 身份互换",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "cover": "./61.jpg",
    "url": "./movie-0811.html"
  },
  {
    "title": "速写建筑大师",
    "genre": "传记, 剧情",
    "tags": "建筑, 孤独, 天才",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./62.jpg",
    "url": "./movie-0812.html"
  },
  {
    "title": "赛车总动员：公路旅行",
    "genre": "喜剧 / 冒险 / 家庭",
    "tags": "闪电麦昆, 板牙, 友情, 公路片",
    "region": "美国",
    "type": "剧集 / 动画",
    "year": "2022",
    "cover": "./63.jpg",
    "url": "./movie-0813.html"
  },
  {
    "title": "大漠仙境",
    "genre": "奇幻 / 冒险",
    "tags": "沙漠，神话，夺宝",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./64.jpg",
    "url": "./movie-0814.html"
  },
  {
    "title": "暴动之城",
    "genre": "动作, 惊悚, 科幻",
    "tags": "近未来, 贫民窟, 义体人, 阶级斗争",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./65.jpg",
    "url": "./movie-0815.html"
  },
  {
    "title": "恋爱前规则",
    "genre": "喜剧 / 爱情",
    "tags": "契约恋爱, 合租, 规则打破, 都市",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./66.jpg",
    "url": "./movie-0816.html"
  },
  {
    "title": "地下煞星",
    "genre": "动作惊悚",
    "tags": "私刑正义, 地下拳场, 卧底",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "cover": "./67.jpg",
    "url": "./movie-0817.html"
  },
  {
    "title": "情圣兄弟",
    "genre": "喜剧 / 爱情",
    "tags": "兄弟反目, 泡妞宝典, 港式幽默",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./68.jpg",
    "url": "./movie-0818.html"
  },
  {
    "title": "萨拉热窝的孩子",
    "genre": "剧情 / 战争",
    "tags": "波黑战争, 儿童视角, 创伤, 废墟",
    "region": "波黑 / 塞尔维亚",
    "type": "电影",
    "year": "2012",
    "cover": "./69.jpg",
    "url": "./movie-0819.html"
  },
  {
    "title": "无间盗",
    "genre": "犯罪",
    "tags": "盗窃, 悬疑, 反转, 黑色幽默",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./70.jpg",
    "url": "./movie-0820.html"
  },
  {
    "title": "风流学生",
    "genre": "喜剧 / 校园",
    "tags": "师生恋, 身份错位, 法式幽默, 荒诞",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./71.jpg",
    "url": "./movie-0821.html"
  },
  {
    "title": "创造社物语",
    "genre": "职场 / 喜剧 / 剧情",
    "tags": "广告公司, 创意, 社畜, 单元剧, 热血",
    "region": "日本",
    "type": "剧集",
    "year": "2020",
    "cover": "./72.jpg",
    "url": "./movie-0822.html"
  },
  {
    "title": "教授",
    "genre": "剧情 / 黑色幽默",
    "tags": "绝症, 讲台, 人生告别",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./73.jpg",
    "url": "./movie-0823.html"
  },
  {
    "title": "蜜丝炸弹",
    "genre": "喜剧、动作、犯罪",
    "tags": "女性特工，搞笑动作，闺蜜情，卧底探案",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./74.jpg",
    "url": "./movie-0824.html"
  },
  {
    "title": "红蛇",
    "genre": "动作、犯罪、悬疑",
    "tags": "女杀手、帮派复仇、暴力美学、身份迷局",
    "region": "中国香港",
    "type": "电影",
    "year": "2020",
    "cover": "./75.jpg",
    "url": "./movie-0825.html"
  },
  {
    "title": "与爱何干",
    "genre": "爱情, 剧情",
    "tags": "开放式关系, 中年危机, 阶级差异",
    "region": "英国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./76.jpg",
    "url": "./movie-0826.html"
  },
  {
    "title": "爸爸，小船",
    "genre": "剧情，家庭，儿童",
    "tags": "亲情，留守儿童，治愈，海洋",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./77.jpg",
    "url": "./movie-0827.html"
  },
  {
    "title": "与郎共舞粤语",
    "genre": "爱情 / 喜剧 / 歌舞",
    "tags": "拉丁舞, 冤家变情侣, 90年代, 港风, 欢喜冤家",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1991",
    "cover": "./78.jpg",
    "url": "./movie-0828.html"
  },
  {
    "title": "加油，秉宪先生",
    "genre": "剧情 / 喜剧",
    "tags": "中年危机, 职场菜鸟, 代际冲突, 逆袭",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "cover": "./79.jpg",
    "url": "./movie-0829.html"
  },
  {
    "title": "温柔杀戮",
    "genre": "犯罪 / 惊悚 / 剧情",
    "tags": "连环杀手, 女侧写师, 反向心理操控, 雨城谜案",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2025",
    "cover": "./80.jpg",
    "url": "./movie-0830.html"
  },
  {
    "title": "金钱陷阱",
    "genre": "喜剧",
    "tags": "买房, 倒霉, 夫妻, 整蛊",
    "region": "美国",
    "type": "电影",
    "year": "1986",
    "cover": "./81.jpg",
    "url": "./movie-0831.html"
  },
  {
    "title": "拜金女孩",
    "genre": "爱情",
    "tags": "职场, 虚荣, 反转, 女性成长",
    "region": "韩国",
    "type": "剧集",
    "year": "2023",
    "cover": "./82.jpg",
    "url": "./movie-0832.html"
  },
  {
    "title": "激情旅行",
    "genre": "惊悚 / 情色",
    "tags": "公路片, 交换伴侣, 沙漠, 生存",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "cover": "./83.jpg",
    "url": "./movie-0833.html"
  },
  {
    "title": "为爱远离",
    "genre": "爱情，剧情",
    "tags": "异地恋，成长抉择，欧洲风光",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "cover": "./84.jpg",
    "url": "./movie-0834.html"
  },
  {
    "title": "孖宝至尊",
    "genre": "喜剧, 动作, 警匪",
    "tags": "双雄, 港式无厘头, 枪战, 乌龙, 兄弟情",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "cover": "./85.jpg",
    "url": "./movie-0835.html"
  },
  {
    "title": "胭花泪粤语",
    "genre": "剧情, 爱情, 历史",
    "tags": "粤剧, 民国花魁, 姐妹反目",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./86.jpg",
    "url": "./movie-0836.html"
  },
  {
    "title": "妻子的浪漫旅行第六季",
    "genre": "真人秀 / 旅行",
    "tags": "夫妻观察, 棚内观察, 自驾游, 情感修复, 明星夫妇",
    "region": "中国",
    "type": "综艺",
    "year": "2022",
    "cover": "./87.jpg",
    "url": "./movie-0837.html"
  },
  {
    "title": "乐极生悲",
    "genre": "喜剧，悬疑，黑色幽默",
    "tags": "彩票，中奖，意外死亡，朋友反目",
    "region": "西班牙",
    "type": "电影",
    "year": "2023",
    "cover": "./88.jpg",
    "url": "./movie-0838.html"
  },
  {
    "title": "梦想临时工",
    "genre": "剧情 / 喜剧",
    "tags": "职场讽刺, 底层视角, 荒诞",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./89.jpg",
    "url": "./movie-0839.html"
  },
  {
    "title": "天下壮士麦当娜",
    "genre": "剧情 / 运动 / 喜剧",
    "tags": "女子摔角, 霸凌反击, 另类励志, 韩国底层, 变身",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "cover": "./90.jpg",
    "url": "./movie-0840.html"
  },
  {
    "title": "在一起2021",
    "genre": "剧情 / 爱情",
    "tags": "异地恋, 抗疫, 现实主义, 催泪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./91.jpg",
    "url": "./movie-0841.html"
  },
  {
    "title": "知女莫若母",
    "genre": "剧情, 家庭, 悬疑",
    "tags": "母女, 复仇, 以暴制暴, 反转, 女性",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./92.jpg",
    "url": "./movie-0842.html"
  },
  {
    "title": "埃舍尔街的红色邮筒",
    "genre": "奇幻 / 剧情",
    "tags": "治愈, 时间循环, 小镇",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./93.jpg",
    "url": "./movie-0843.html"
  },
  {
    "title": "豪门少爷俏佳人",
    "genre": "爱情, 喜剧",
    "tags": "欢喜冤家, 霸道少爷, 贫富差距, 古早偶像剧",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2002",
    "cover": "./94.jpg",
    "url": "./movie-0844.html"
  },
  {
    "title": "古堡惊眸",
    "genre": "恐怖 / 超自然",
    "tags": "视觉诅咒, 古堡, 油画, 家族秘密",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2026",
    "cover": "./95.jpg",
    "url": "./movie-0845.html"
  },
  {
    "title": "漂亮女人1990",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": "都市邂逅 / 身份反转 / 契约关系 / 霓虹浪漫 / 成年童话",
    "region": "美国",
    "type": "电影",
    "year": "1990",
    "cover": "./96.jpg",
    "url": "./movie-0846.html"
  },
  {
    "title": "唐伯虎点秋香2019",
    "genre": "喜剧 / 古装",
    "tags": "穿越, 恶搞, 无厘头, 经典翻拍",
    "region": "中国香港",
    "type": "电影",
    "year": "2019",
    "cover": "./97.jpg",
    "url": "./movie-0847.html"
  },
  {
    "title": "师表情深",
    "genre": "剧情",
    "tags": "师生恋, 禁忌, 纯爱, 校园, 悲剧",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "cover": "./98.jpg",
    "url": "./movie-0848.html"
  },
  {
    "title": "恐怖相亲",
    "genre": "恐怖 / 悬疑 / 黑色喜剧",
    "tags": "相亲, 民俗怪谈, 失踪案, 反转, 乡镇惊悚",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./99.jpg",
    "url": "./movie-0849.html"
  },
  {
    "title": "贱神三少爷2",
    "genre": "喜剧, 古装, 奇幻",
    "tags": "沙雕, 修仙, 反套路",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./100.jpg",
    "url": "./movie-0850.html"
  },
  {
    "title": "战争迷雾",
    "genre": "战争剧情",
    "tags": "狙击手, 心理战, 寒冬",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "cover": "./101.jpg",
    "url": "./movie-0851.html"
  },
  {
    "title": "疯狂试爱之勇敢爱",
    "genre": "爱情, 喜剧",
    "tags": "恋爱测试, 都市轻喜, 反转",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./102.jpg",
    "url": "./movie-0852.html"
  },
  {
    "title": "渡清欢",
    "genre": "古装, 爱情, 复仇",
    "tags": "竖屏, 短剧, 虐恋, 逆袭, 替身",
    "region": "中国大陆",
    "type": "微短剧",
    "year": "2024",
    "cover": "./103.jpg",
    "url": "./movie-0853.html"
  },
  {
    "title": "第十三个故事",
    "genre": "悬疑，剧情",
    "tags": "哥特，秘密，传记，双线叙事，家族",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./104.jpg",
    "url": "./movie-0854.html"
  },
  {
    "title": "彩色的小路",
    "genre": "剧情 / 儿童",
    "tags": "留守儿童, 想象力, 乡村, 治愈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./105.jpg",
    "url": "./movie-0855.html"
  },
  {
    "title": "父与子的流亡旅程",
    "genre": "剧情, 历史, 家庭",
    "tags": "公路片, 父子情, 战争, 成长, 治愈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./106.jpg",
    "url": "./movie-0856.html"
  },
  {
    "title": "血手印",
    "genre": "古装, 悬疑",
    "tags": "邵氏, 包公案, 冤案, 戏曲",
    "region": "中国香港",
    "type": "电影",
    "year": "1964",
    "cover": "./107.jpg",
    "url": "./movie-0857.html"
  },
  {
    "title": "爵士灵魂",
    "genre": "剧情, 音乐, 传记",
    "tags": "爵士乐, 小号手, 白人, 1950s, 种族",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "cover": "./108.jpg",
    "url": "./movie-0858.html"
  },
  {
    "title": "中国蓝",
    "genre": "剧情, 文艺",
    "tags": "青花瓷, 跨国恋, 文化冲突, 文艺片, 90年代",
    "region": "法国 / 中国",
    "type": "电影",
    "year": "1998",
    "cover": "./109.jpg",
    "url": "./movie-0859.html"
  },
  {
    "title": "脂粉双枪侠",
    "genre": "古装, 动作, 喜剧",
    "tags": "女侠, 双枪, 民国, 爽片",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./110.jpg",
    "url": "./movie-0860.html"
  },
  {
    "title": "一路同行",
    "genre": "公路 / 喜剧 / 剧情",
    "tags": "顺风车, 人生百态, 治愈, 单元剧, 温情",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2026",
    "cover": "./111.jpg",
    "url": "./movie-0861.html"
  },
  {
    "title": "上海狂想曲",
    "genre": "悬疑、科幻、黑色电影",
    "tags": "上海、平行宇宙、记忆植入、黑色电影风格、赛博都市",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./112.jpg",
    "url": "./movie-0862.html"
  },
  {
    "title": "难补情天恨",
    "genre": "剧情 / 古装",
    "tags": "武侠, 悲剧, 复仇",
    "region": "中国香港",
    "type": "电影",
    "year": "1986",
    "cover": "./113.jpg",
    "url": "./movie-0863.html"
  },
  {
    "title": "夏洛克：未叙之章",
    "genre": "悬疑 / 犯罪",
    "tags": "未公开案件, 平行推理, 高智商对决",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./114.jpg",
    "url": "./movie-0864.html"
  },
  {
    "title": "对门儿",
    "genre": "都市, 家庭, 轻喜剧",
    "tags": "邻里, 合租, 误会, 社区, 温情, 成长",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2019",
    "cover": "./115.jpg",
    "url": "./movie-0865.html"
  },
  {
    "title": "多梦女孩",
    "genre": "奇幻/悬疑",
    "tags": "预知梦, 校园霸凌, 穿越, 平行时空, 烧脑",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./116.jpg",
    "url": "./movie-0866.html"
  },
  {
    "title": "鸟2024",
    "genre": "科幻/惊悚",
    "tags": "基因变异, 生态恐怖, 鸟类攻击, 末日求生",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./117.jpg",
    "url": "./movie-0867.html"
  },
  {
    "title": "小女花不弃",
    "genre": "古装 / 爱情 / 喜剧",
    "tags": "甜宠, 女强, 经商, 欢喜冤家",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./118.jpg",
    "url": "./movie-0868.html"
  },
  {
    "title": "战地九飞龙",
    "genre": "战争，动作，历史",
    "tags": "抗战，飞行员，兄弟情，空战",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "cover": "./119.jpg",
    "url": "./movie-0869.html"
  },
  {
    "title": "萝球社第一季",
    "genre": "校园体育",
    "tags": "篮球, 萝莉, 社团, 青春, 热血",
    "region": "日本",
    "type": "动画剧集",
    "year": "2011",
    "cover": "./120.jpg",
    "url": "./movie-0870.html"
  },
  {
    "title": "荒诞的故事",
    "genre": "喜剧、奇幻、黑色幽默",
    "tags": "短片集，俄罗斯，怪诞，寓言，脑洞大开",
    "region": "俄罗斯",
    "type": "剧集",
    "year": "2024",
    "cover": "./121.jpg",
    "url": "./movie-0871.html"
  },
  {
    "title": "神探夏洛克第四季",
    "genre": "悬疑 / 犯罪",
    "tags": "高智商对决, 黑化, 童年阴影",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./122.jpg",
    "url": "./movie-0872.html"
  },
  {
    "title": "王家欣",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": "同名同姓, 寻人启事, 元朗, 九十年代怀旧",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./123.jpg",
    "url": "./movie-0873.html"
  },
  {
    "title": "贴身恐惧",
    "genre": "惊悚, 恐怖",
    "tags": "跟踪狂, 独居女性, 科技惊悚, 反杀",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./124.jpg",
    "url": "./movie-0874.html"
  },
  {
    "title": "2010",
    "genre": "科幻",
    "tags": "太空, 探索, 续集, 木星",
    "region": "美国",
    "type": "电影",
    "year": "1984",
    "cover": "./125.jpg",
    "url": "./movie-0875.html"
  },
  {
    "title": "童话故事下集",
    "genre": "动画、奇幻、反乌托邦",
    "tags": "黑色童话,记忆操控,反乌托邦,城市场景,自我命名",
    "region": "韩国",
    "type": "动画奇幻电影",
    "year": "2023",
    "cover": "./126.jpg",
    "url": "./movie-0876.html"
  },
  {
    "title": "人皮客栈2",
    "genre": "恐怖 / 惊悚",
    "tags": "虐杀, 暗网, 东欧",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "cover": "./127.jpg",
    "url": "./movie-0877.html"
  },
  {
    "title": "玫瑰小天使",
    "genre": "奇幻、家庭、儿童",
    "tags": "天使, 自闭症, 治愈, 花语, 温暖",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./128.jpg",
    "url": "./movie-0878.html"
  },
  {
    "title": "莫德罗监狱1977",
    "genre": "历史 / 剧情 / 犯罪",
    "tags": "政治迫害， 越狱题材， 真实改编",
    "region": "西班牙",
    "type": "电影",
    "year": "2026",
    "cover": "./129.jpg",
    "url": "./movie-0879.html"
  },
  {
    "title": "道士出山2：伏魔军团",
    "genre": "奇幻 / 动作 / 喜剧",
    "tags": "道士, 现代都市, 组队打怪, 民俗恐怖, 法宝",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./130.jpg",
    "url": "./movie-0880.html"
  },
  {
    "title": "艳星发明家",
    "genre": "传记剧情",
    "tags": "真实人物, 女性科学家, 被污名化, 专利",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./131.jpg",
    "url": "./movie-0881.html"
  },
  {
    "title": "战胜恶魔",
    "genre": "恐怖，惊悚",
    "tags": "驱魔，心理恐怖，宗教，反转",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./132.jpg",
    "url": "./movie-0882.html"
  },
  {
    "title": "故剑长情",
    "genre": "古装 / 爱情 / 权谋",
    "tags": "替身, 青梅竹马, 虐恋, 复仇",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./133.jpg",
    "url": "./movie-0883.html"
  },
  {
    "title": "房子与狗",
    "genre": "剧情， 治愈， 家庭",
    "tags": "房地产， 宠物， 人生故事， 单元剧",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "cover": "./134.jpg",
    "url": "./movie-0884.html"
  },
  {
    "title": "爱神 （短片）",
    "genre": "爱情 / 奇幻 / 实验",
    "tags": "雕塑复活, 黑白短片, 无对白, 20分钟",
    "region": "意大利",
    "type": "短片",
    "year": "2024",
    "cover": "./135.jpg",
    "url": "./movie-0885.html"
  },
  {
    "title": "情义我心知国语",
    "genre": "黑帮兄弟",
    "tags": "港产片回归，卧底再卧底，兄弟反目，粤语国语双版本，枪战美学",
    "region": "中国香港",
    "type": "电影",
    "year": "2027",
    "cover": "./136.jpg",
    "url": "./movie-0886.html"
  },
  {
    "title": "幻灭2003",
    "genre": "剧情, 悬疑, 历史",
    "tags": "非典时期, 互联网泡沫, 阴谋论, 巴黎",
    "region": "法国",
    "type": "电影",
    "year": "2022",
    "cover": "./137.jpg",
    "url": "./movie-0887.html"
  },
  {
    "title": "占的故事",
    "genre": "剧情 / 传记 / 历史",
    "tags": "战后, 孤独, 友谊, 救赎",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./138.jpg",
    "url": "./movie-0888.html"
  },
  {
    "title": "天职2009",
    "genre": "剧情, 犯罪, 黑色电影",
    "tags": "卧底, 警察, 兄弟情, 牺牲, 90年代复古",
    "region": "中国大陆",
    "type": "电影",
    "year": "2009",
    "cover": "./139.jpg",
    "url": "./movie-0889.html"
  },
  {
    "title": "罪犯联盟第三季",
    "genre": "剧情, 犯罪",
    "tags": "英剧, 多线叙事, 黑色幽默, 小人物, 悬疑",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./140.jpg",
    "url": "./movie-0890.html"
  },
  {
    "title": "帝国大审判",
    "genre": "历史， 悬疑， 法庭",
    "tags": "殖民审判， 政治惊悚， 双线叙事",
    "region": "英国/美国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./141.jpg",
    "url": "./movie-0891.html"
  },
  {
    "title": "林海雪原",
    "genre": "剧情、战争、剿匪",
    "tags": "红色经典、智取威虎山、东北剿匪、英雄主义",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2017",
    "cover": "./142.jpg",
    "url": "./movie-0892.html"
  },
  {
    "title": "跟屁虫",
    "genre": "家庭剧情",
    "tags": "自闭症, 兄弟情, 治愈, 公路电影",
    "region": "中国台湾",
    "type": "电影",
    "year": "2021",
    "cover": "./143.jpg",
    "url": "./movie-0893.html"
  },
  {
    "title": "卖梦的两人",
    "genre": "剧情, 悬疑",
    "tags": "心理, 骗局, 婚姻, 人性",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "cover": "./144.jpg",
    "url": "./movie-0894.html"
  },
  {
    "title": "淘金梦",
    "genre": "剧情 / 西部",
    "tags": "民国淘金热，大漠求生，人性考验，黑色荒诞",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./145.jpg",
    "url": "./movie-0895.html"
  },
  {
    "title": "重灌叛逃",
    "genre": "科幻，动作，惊悚",
    "tags": "机甲，东德西德，冷战，人工智能",
    "region": "德国",
    "type": "电影",
    "year": "2027",
    "cover": "./146.jpg",
    "url": "./movie-0896.html"
  },
  {
    "title": "老友记第七季",
    "genre": "情景喜剧",
    "tags": "重逢，中年危机，纽约，老IP重启",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./147.jpg",
    "url": "./movie-0897.html"
  },
  {
    "title": "恐惧的代价",
    "genre": "惊悚 / 冒险",
    "tags": "心理惊悚, 极限运输, 人性拷问, 生存游戏",
    "region": "法国 / 意大利",
    "type": "电影",
    "year": "2025",
    "cover": "./148.jpg",
    "url": "./movie-0898.html"
  },
  {
    "title": "变身机长",
    "genre": "喜剧 / 奇幻 / 职场",
    "tags": "性别互换, 航空业, 爆笑反差, 成长治愈",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./149.jpg",
    "url": "./movie-0899.html"
  },
  {
    "title": "终极制裁",
    "genre": "动作, 科幻, 惊悚",
    "tags": "硬核, 反乌托邦, 高科技, 孤胆英雄",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./150.jpg",
    "url": "./movie-0900.html"
  },
  {
    "title": "芭比姐妹与小马",
    "genre": "动画，家庭",
    "tags": "芭比，冒险，马术，姐妹情，奇幻",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./1.jpg",
    "url": "./movie-0901.html"
  },
  {
    "title": "心灵控诉",
    "genre": "心理 / 惊悚 / 律政",
    "tags": "心理咨询, 法庭剧, 双重人格, 记忆谎言, 反转",
    "region": "英国",
    "type": "剧集",
    "year": "2020",
    "cover": "./2.jpg",
    "url": "./movie-0902.html"
  },
  {
    "title": "布莱恩·班克斯",
    "genre": "传记 / 剧情 / 体育",
    "tags": "橄榄球, 冤案, 励志, 真实改编, 翻案",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "cover": "./3.jpg",
    "url": "./movie-0903.html"
  },
  {
    "title": "伟大的苏珊",
    "genre": "传记，剧情，音乐",
    "tags": "女性力量，摇滚，中年危机，真实事件改编，救赎",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "cover": "./4.jpg",
    "url": "./movie-0904.html"
  },
  {
    "title": "老爸老妈的浪漫史",
    "genre": "喜剧 / 爱情",
    "tags": "都市情感, 倒叙, 友情岁月",
    "region": "美国",
    "type": "剧集",
    "year": "2021",
    "cover": "./5.jpg",
    "url": "./movie-0905.html"
  },
  {
    "title": "马尔姆克罗格庄园",
    "genre": "悬疑 / 历史 / 剧情",
    "tags": "北欧, 贵族, 末日, 哲学",
    "region": "挪威 / 瑞典",
    "type": "电影",
    "year": "2024",
    "cover": "./6.jpg",
    "url": "./movie-0906.html"
  },
  {
    "title": "绿夜",
    "genre": "爱情 / 剧情",
    "tags": "禁忌恋, 文艺, 女性凝视, 现代都市",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./7.jpg",
    "url": "./movie-0907.html"
  },
  {
    "title": "前奏",
    "genre": "剧情, 音乐",
    "tags": "古典音乐, 乐团, 指挥家, 焦虑",
    "region": "法国",
    "type": "电影",
    "year": "2020",
    "cover": "./8.jpg",
    "url": "./movie-0908.html"
  },
  {
    "title": "命中注定，遇见爱",
    "genre": "爱情, 喜剧, 音乐",
    "tags": "盲人按摩师, 落魄歌手, 天台对唱",
    "region": "泰国",
    "type": "剧集",
    "year": "2026",
    "cover": "./9.jpg",
    "url": "./movie-0909.html"
  },
  {
    "title": "繁殖",
    "genre": "恐怖, 科幻",
    "tags": "克隆, 孤岛, 伦理, 生存",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2023",
    "cover": "./10.jpg",
    "url": "./movie-0910.html"
  },
  {
    "title": "轰雷任务",
    "genre": "动作、犯罪、警匪",
    "tags": "卧底、黑吃黑、街头枪战",
    "region": "中国香港",
    "type": "电影",
    "year": "2027",
    "cover": "./11.jpg",
    "url": "./movie-0911.html"
  },
  {
    "title": "家族荣耀粤语",
    "genre": "家庭伦理, 犯罪, 剧情",
    "tags": "港语对白, 族群身份, 黑道家业, 继承纷争, 台风",
    "region": "香港",
    "type": "电视剧",
    "year": "2021",
    "cover": "./12.jpg",
    "url": "./movie-0912.html"
  },
  {
    "title": "定制10.30",
    "genre": "悬疑，科幻，惊悚",
    "tags": "AI，记忆删除，订单杀人，克隆，韩国",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "cover": "./13.jpg",
    "url": "./movie-0913.html"
  },
  {
    "title": "父亲形象",
    "genre": "剧情 / 家庭",
    "tags": "父子, 替身, 老年痴呆",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./14.jpg",
    "url": "./movie-0914.html"
  },
  {
    "title": "印度愚公",
    "genre": "剧情 / 传记",
    "tags": "真实改编, 社会, 毅力, 家庭",
    "region": "印度",
    "type": "电影",
    "year": "2014",
    "cover": "./15.jpg",
    "url": "./movie-0915.html"
  },
  {
    "title": "奇妙的家族国语",
    "genre": "奇幻喜剧",
    "tags": "家族秘史, 超能力, 笑中带泪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./16.jpg",
    "url": "./movie-0916.html"
  },
  {
    "title": "旱季",
    "genre": "剧情 / 惊悚 / 社会",
    "tags": "非洲, 邪教, 水源",
    "region": "尼日利亚",
    "type": "电影",
    "year": "2025",
    "cover": "./17.jpg",
    "url": "./movie-0917.html"
  },
  {
    "title": "人类瑕疵大学",
    "genre": "悬疑、校园、科幻",
    "tags": "暗黑校园、瑕疵、反转、社会派",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "cover": "./18.jpg",
    "url": "./movie-0918.html"
  },
  {
    "title": "盐与火",
    "genre": "惊悚 / 剧情",
    "tags": "悬疑， 人性， 极端环境， 复仇",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "cover": "./19.jpg",
    "url": "./movie-0919.html"
  },
  {
    "title": "苍穹之昴",
    "genre": "剧情 / 古装 / 科幻",
    "tags": "晚清, 平行时空, 历史改写, 天象",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "cover": "./20.jpg",
    "url": "./movie-0920.html"
  },
  {
    "title": "再加把劲！",
    "genre": "喜剧， 励志",
    "tags": "职场， 热血， 反内卷",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./21.jpg",
    "url": "./movie-0921.html"
  },
  {
    "title": "女明星艳史",
    "genre": "剧情, 情色, 传记",
    "tags": "老港片, 演艺圈, 风月, 浮沉录, 真实改编",
    "region": "中国香港",
    "type": "电影",
    "year": "1999",
    "cover": "./22.jpg",
    "url": "./movie-0922.html"
  },
  {
    "title": "芬妮的勇敢旅程",
    "genre": "剧情冒险",
    "tags": "女性成长，荒野求生，自我救赎，治愈",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./23.jpg",
    "url": "./movie-0923.html"
  },
  {
    "title": "暴徒小镇",
    "genre": "犯罪, 动作, 剧情",
    "tags": "黑帮, 小镇失序, 复仇, 群像冲突, 暗面秩序",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "cover": "./24.jpg",
    "url": "./movie-0924.html"
  },
  {
    "title": "算死草",
    "genre": "喜剧，悬疑，犯罪",
    "tags": "会计师，高智商犯罪，黑色幽默，税务",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./25.jpg",
    "url": "./movie-0925.html"
  },
  {
    "title": "阴阳路6之凶周刊",
    "genre": "恐怖 / 悬疑",
    "tags": "都市传说, 杂志社, 连环死亡, 怨灵, 周刊",
    "region": "中国香港",
    "type": "电影",
    "year": "2002",
    "cover": "./26.jpg",
    "url": "./movie-0926.html"
  },
  {
    "title": "电波系彼女",
    "genre": "悬疑 / 爱情 / 科幻",
    "tags": "脑内通话, 社会派, 校园欺凌, 异能, 电波",
    "region": "日本",
    "type": "动画 / 剧集",
    "year": "2026",
    "cover": "./27.jpg",
    "url": "./movie-0927.html"
  },
  {
    "title": "布利特县",
    "genre": "犯罪 / 悬疑 / 西部",
    "tags": "南方哥特, 小镇谜案, 警长, 家族秘密",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./28.jpg",
    "url": "./movie-0928.html"
  },
  {
    "title": "猫和老鼠：胡桃夹子的传奇",
    "genre": "喜剧 / 动画 / 家庭 / 奇幻",
    "tags": "经典重启, 圣诞, 音乐剧, 无对白, 合家欢",
    "region": "美国",
    "type": "动画电影",
    "year": "2024",
    "cover": "./29.jpg",
    "url": "./movie-0929.html"
  },
  {
    "title": "遁入宁静",
    "genre": "心理惊悚",
    "tags": "冥想, 邪教, 超自然, 反转",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./30.jpg",
    "url": "./movie-0930.html"
  },
  {
    "title": "厄运",
    "genre": "剧情 / 犯罪 / 人性",
    "tags": "连环杀手, 战后, 集体罪恶, 冷峻",
    "region": "德国 / 奥地利",
    "type": "电视剧",
    "year": "2026",
    "cover": "./31.jpg",
    "url": "./movie-0931.html"
  },
  {
    "title": "寻找自我",
    "genre": "剧情, 心理",
    "tags": "失忆, 身份认同, 悬疑, 慢热",
    "region": "英国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./32.jpg",
    "url": "./movie-0932.html"
  },
  {
    "title": "北美小鹿猎人传奇",
    "genre": "剧情 / 冒险",
    "tags": "狩猎, 成长, 父子和解, 荒野, 原住民",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./33.jpg",
    "url": "./movie-0933.html"
  },
  {
    "title": "辣妹我爱你",
    "genre": "青春爱情喜剧",
    "tags": "校园, 反差, 女追男, 搞笑, 成长",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./34.jpg",
    "url": "./movie-0934.html"
  },
  {
    "title": "马江宾馆",
    "genre": "悬疑， 惊悚",
    "tags": "暴风雪山庄， 民国， 旅馆， 连环命案， 禁忌",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./35.jpg",
    "url": "./movie-0935.html"
  },
  {
    "title": "布里奇顿第一季",
    "genre": "爱情 / 剧情 / 历史",
    "tags": "摄政时期， 有色人种王后， 八卦小报， 社交季， 玛丽苏",
    "region": "美国",
    "type": "剧集",
    "year": "2020",
    "cover": "./36.jpg",
    "url": "./movie-0936.html"
  },
  {
    "title": "吸血鬼日记 第八季",
    "genre": "奇幻，爱情，恐怖",
    "tags": "吸血鬼，最终季，CW，兄弟情，史诗结局",
    "region": "美国",
    "type": "剧集",
    "year": "2017",
    "cover": "./37.jpg",
    "url": "./movie-0937.html"
  },
  {
    "title": "当狗爱上猫粤语",
    "genre": "喜剧、悬疑、犯罪、家庭",
    "tags": "宠物视角, 粤语对白, 失踪悬案, 家庭秘密, 推理解密",
    "region": "香港",
    "type": "喜剧悬疑片",
    "year": "2022",
    "cover": "./38.jpg",
    "url": "./movie-0938.html"
  },
  {
    "title": "矮仔多计",
    "genre": "喜剧， 犯罪， 动作",
    "tags": "小个子， 高智商犯罪， 乌龙， 市井",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./39.jpg",
    "url": "./movie-0939.html"
  },
  {
    "title": "举重妖精金福珠",
    "genre": "爱情, 喜剧, 运动",
    "tags": "体育生, 初恋, 举重, 青春校园",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "cover": "./40.jpg",
    "url": "./movie-0940.html"
  },
  {
    "title": "雪茫寻亲",
    "genre": "剧情, 家庭",
    "tags": "东北, 风雪, 寻子, 女性",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./41.jpg",
    "url": "./movie-0941.html"
  },
  {
    "title": "美国狼人在伦敦",
    "genre": "恐怖、喜剧",
    "tags": "经典翻拍、狼人、伦敦、黑色幽默、身体恐怖",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2026",
    "cover": "./42.jpg",
    "url": "./movie-0942.html"
  },
  {
    "title": "导火新闻线粤语",
    "genre": "剧情 / 悬疑",
    "tags": "媒体, 职场, 犯罪, 粤语原声",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "cover": "./43.jpg",
    "url": "./movie-0943.html"
  },
  {
    "title": "史蒂芬·劳伦斯谋杀案",
    "genre": "犯罪 / 纪实 / 剧情",
    "tags": "真实事件, 种族, 司法, 调查, 沉重",
    "region": "英国",
    "type": "电视剧 / 限定剧",
    "year": "2024",
    "cover": "./44.jpg",
    "url": "./movie-0944.html"
  },
  {
    "title": "健听女孩",
    "genre": "剧情，音乐",
    "tags": "聋哑家庭，音乐梦想，手语",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./45.jpg",
    "url": "./movie-0945.html"
  },
  {
    "title": "网走番外地",
    "genre": "犯罪, 动作, 剧情",
    "tags": "北海道, 越狱, 极道, 翻拍",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./46.jpg",
    "url": "./movie-0946.html"
  },
  {
    "title": "父子",
    "genre": "剧情/运动",
    "tags": "摔跤, 贫穷, 和解, 传统",
    "region": "印度",
    "type": "电影",
    "year": "2023",
    "cover": "./47.jpg",
    "url": "./movie-0947.html"
  },
  {
    "title": "白夜行2009",
    "genre": "悬疑犯罪",
    "tags": "经典翻拍，平成年代，共生之罪",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./48.jpg",
    "url": "./movie-0948.html"
  },
  {
    "title": "你是我的吸血鬼",
    "genre": "爱情、奇幻",
    "tags": "高中、吸血、禁忌",
    "region": "泰国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./49.jpg",
    "url": "./movie-0949.html"
  },
  {
    "title": "血案寻凶",
    "genre": "犯罪 / 悬疑 / 刑侦",
    "tags": "连环杀手, 法医, 双时间线, 笔记疑云",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "cover": "./50.jpg",
    "url": "./movie-0950.html"
  },
  {
    "title": "破碎的梦",
    "genre": "剧情，家庭",
    "tags": "酗酒，救赎，姐妹，小镇",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "cover": "./51.jpg",
    "url": "./movie-0951.html"
  },
  {
    "title": "雪球快车",
    "genre": "动作，喜剧，冒险",
    "tags": "火车，雪崩，特工，圣诞",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./52.jpg",
    "url": "./movie-0952.html"
  },
  {
    "title": "南海鲛人",
    "genre": "奇幻,动作,海洋冒险,生态",
    "tags": "南海玄潮,人鲛血脉,珊瑚遗迹,潮汐祭祀,深海生物,环保悬疑",
    "region": "东南亚·中国-菲律宾合作",
    "type": "奇幻动作电影",
    "year": "2025",
    "cover": "./53.jpg",
    "url": "./movie-0953.html"
  },
  {
    "title": "恶之三联画",
    "genre": "犯罪惊悚, 黑色悬疑, 结构叙事",
    "tags": "三段故事, 连环凶案, 伪证游戏, 人性崩塌",
    "region": "日本",
    "type": "电影",
    "year": "2017",
    "cover": "./54.jpg",
    "url": "./movie-0954.html"
  },
  {
    "title": "孩子不坏",
    "genre": "青春 / 家庭 / 剧情",
    "tags": "少年成长, 亲子沟通, 校园冲突, 误解与和解, 城市边缘, 自我修复",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./55.jpg",
    "url": "./movie-0955.html"
  },
  {
    "title": "最强大脑第八季",
    "genre": "真人秀、竞技、科学",
    "tags": "脑力竞技、国际赛、科学判官",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "cover": "./56.jpg",
    "url": "./movie-0956.html"
  },
  {
    "title": "女神游戏室",
    "genre": "悬疑, 惊悚, 游戏",
    "tags": "生存游戏, 密室逃脱, 女性向, 心理战, 背叛",
    "region": "韩国",
    "type": "网络剧",
    "year": "2024",
    "cover": "./57.jpg",
    "url": "./movie-0957.html"
  },
  {
    "title": "我仍在此2024",
    "genre": "文艺剧情",
    "tags": "存在主义, 疫情时代, 私影像",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./58.jpg",
    "url": "./movie-0958.html"
  },
  {
    "title": "两个世界",
    "genre": "科幻, 剧情, 平行时空, 悬疑",
    "tags": "平行宇宙, 记忆交换, 政治阴谋, 伦理困境, 双重身份",
    "region": "美国",
    "type": "科幻电视剧",
    "year": "2030",
    "cover": "./59.jpg",
    "url": "./movie-0959.html"
  },
  {
    "title": "出画冒险",
    "genre": "动画，奇幻，冒险",
    "tags": "穿越，名画，反套路",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./60.jpg",
    "url": "./movie-0960.html"
  },
  {
    "title": "真情一路发",
    "genre": "喜剧, 家庭, 奇幻",
    "tags": "彩票, 亲情, 小人物, 奇幻, 温暖",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./61.jpg",
    "url": "./movie-0961.html"
  },
  {
    "title": "追杀比尔2：爱的大逃杀",
    "genre": "动作, 爱情, 喜剧",
    "tags": "杀手, 追逃, 黑色幽默, 假戏真做",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./62.jpg",
    "url": "./movie-0962.html"
  },
  {
    "title": "热与尘",
    "genre": "剧情 / 爱情",
    "tags": "跨文化, 殖民伤痕, 女性觉醒",
    "region": "印度 / 英国",
    "type": "电影",
    "year": "2024",
    "cover": "./63.jpg",
    "url": "./movie-0963.html"
  },
  {
    "title": "星愿粤语",
    "genre": "歌舞,爱情,剧情,城市记忆",
    "tags": "粤语音乐,九十年代,地下演出,梦想复出,版权争议,黑帮资本",
    "region": "香港",
    "type": "音乐电影",
    "year": "2019",
    "cover": "./64.jpg",
    "url": "./movie-0964.html"
  },
  {
    "title": "男人不可以穷",
    "genre": "剧情励志",
    "tags": "底层挣扎, 父子矛盾, 价值观碰撞",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./65.jpg",
    "url": "./movie-0965.html"
  },
  {
    "title": "再审风云",
    "genre": "律政 / 剧情",
    "tags": "冤案, 再审, 律师, 正义",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "cover": "./66.jpg",
    "url": "./movie-0966.html"
  },
  {
    "title": "国际特务龙虎斗",
    "genre": "动作，冒险",
    "tags": "邵氏，谍战，功夫，双雄对决，冷战",
    "region": "中国香港",
    "type": "电影",
    "year": "1971",
    "cover": "./67.jpg",
    "url": "./movie-0967.html"
  },
  {
    "title": "真爱挑日子",
    "genre": "爱情 / 奇幻 / 剧情",
    "tags": "时间循环, 告白, 暗恋, 选择困难, 日蚀",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./68.jpg",
    "url": "./movie-0968.html"
  },
  {
    "title": "意外英雄",
    "genre": "喜剧 / 动作 / 犯罪",
    "tags": "小人物, 乌龙事件, 港式幽默, 平民英雄",
    "region": "中国香港",
    "type": "电影",
    "year": "2020",
    "cover": "./69.jpg",
    "url": "./movie-0969.html"
  },
  {
    "title": "天机",
    "genre": "悬疑， 奇幻， 冒险",
    "tags": "寻宝， 历史谜团， 江湖， 风水， 智斗",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./70.jpg",
    "url": "./movie-0970.html"
  },
  {
    "title": "97家有囍事",
    "genre": "喜剧，家庭，贺岁",
    "tags": "怀旧，全明星，乌龙",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "cover": "./71.jpg",
    "url": "./movie-0971.html"
  },
  {
    "title": "维也纳血案第一季",
    "genre": "悬疑 / 犯罪 / 历史",
    "tags": "维也纳, 心理学, 弗洛伊德, 1900年代, 连环杀手",
    "region": "奥地利 / 英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./72.jpg",
    "url": "./movie-0972.html"
  },
  {
    "title": "欢喜大逃亡",
    "genre": "喜剧 / 公路",
    "tags": "荒诞, 逃亡, 养老院, 老年人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./73.jpg",
    "url": "./movie-0973.html"
  },
  {
    "title": "不死的男人",
    "genre": "剧情、奇幻、爱情",
    "tags": "永生、孤独、时间、史诗、忧郁",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2017",
    "cover": "./74.jpg",
    "url": "./movie-0974.html"
  },
  {
    "title": "24小时脱单日记",
    "genre": "爱情 / 喜剧",
    "tags": "契约恋爱, 社交网络, 限时任务, 直播逆袭",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./75.jpg",
    "url": "./movie-0975.html"
  },
  {
    "title": "凯瑟琳女皇",
    "genre": "历史、传记、宫斗",
    "tags": "叶卡捷琳娜大帝、女性掌权、政治博弈",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./76.jpg",
    "url": "./movie-0976.html"
  },
  {
    "title": "悲惨的追逐",
    "genre": "动作 / 犯罪 / 公路",
    "tags": "暴雪追逃, 黑色电影, 无台词实验",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2028",
    "cover": "./77.jpg",
    "url": "./movie-0977.html"
  },
  {
    "title": "加盖春光",
    "genre": "剧情 / 家庭",
    "tags": "顶楼加盖, 底层生活, 摩托车, 父女",
    "region": "中国台湾",
    "type": "电影",
    "year": "2016",
    "cover": "./78.jpg",
    "url": "./movie-0978.html"
  },
  {
    "title": "人鱼",
    "genre": "喜剧, 奇幻, 爱情",
    "tags": "周星驰, 环保, 童话, 现代, 商业",
    "region": "中国香港, 中国大陆",
    "type": "电影",
    "year": "2016",
    "cover": "./79.jpg",
    "url": "./movie-0979.html"
  },
  {
    "title": "就在今夜",
    "genre": "剧情、同性、家庭",
    "tags": "青春、告别、亲情",
    "region": "台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./80.jpg",
    "url": "./movie-0980.html"
  },
  {
    "title": "台北二一",
    "genre": "爱情 / 剧情",
    "tags": "都市情感、分手、七年之痒、台北",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./81.jpg",
    "url": "./movie-0981.html"
  },
  {
    "title": "牧野家族",
    "genre": "真人秀 / 生活",
    "tags": "草原，家族关系，慢综艺，治愈，代际冲突",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "cover": "./82.jpg",
    "url": "./movie-0982.html"
  },
  {
    "title": "小姐与流氓",
    "genre": "动画 / 爱情 / 冒险",
    "tags": "迪士尼, 狗狗, 意面接吻, 经典动画, 流浪狗",
    "region": "美国",
    "type": "电影",
    "year": "1955",
    "cover": "./83.jpg",
    "url": "./movie-0983.html"
  },
  {
    "title": "三滴血",
    "genre": "悬疑 / 犯罪 / 伦理",
    "tags": "乡土, 亲子鉴定, 宗族, 烧脑反转, 社会派",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./84.jpg",
    "url": "./movie-0984.html"
  },
  {
    "title": "德州爆炸",
    "genre": "动作 / 惊悚 / 灾难",
    "tags": "反恐，密室，极限逃生，硬汉",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./85.jpg",
    "url": "./movie-0985.html"
  },
  {
    "title": "魔女",
    "genre": "悬疑 / 奇幻 / 惊悚",
    "tags": "女巫审判, 时间循环, 村庄秘密, 母系力量",
    "region": "韩国",
    "type": "电影",
    "year": "2028",
    "cover": "./86.jpg",
    "url": "./movie-0986.html"
  },
  {
    "title": "密室大逃杀",
    "genre": "悬疑 / 惊悚 / 动作",
    "tags": "密室逃脱, 真人死亡游戏, 高智商对决, 限时求生, 多层反转",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./87.jpg",
    "url": "./movie-0987.html"
  },
  {
    "title": "微观世界",
    "genre": "科幻, 冒险",
    "tags": "缩小, 科学实验, 生存挑战, 昆虫视角, 视觉奇观",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "cover": "./88.jpg",
    "url": "./movie-0988.html"
  },
  {
    "title": "故园风雨后",
    "genre": "剧情 / 爱情",
    "tags": "庄园, 二战, 贵族, 禁忌之恋",
    "region": "英国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./89.jpg",
    "url": "./movie-0989.html"
  },
  {
    "title": "尸恋人",
    "genre": "爱情 / 恐怖 / 奇幻",
    "tags": "人鬼恋, 轮回, 巫术, 催泪, 民间传说",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "cover": "./90.jpg",
    "url": "./movie-0990.html"
  },
  {
    "title": "公民良心",
    "genre": "剧情 / 犯罪 / 社会",
    "tags": "反腐, 民生, 写实主义, 良心剧",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2018",
    "cover": "./91.jpg",
    "url": "./movie-0991.html"
  },
  {
    "title": "超人4：和平任务",
    "genre": "动作 / 科幻 / 冒险",
    "tags": "反战, 机甲, 黑暗回归, 政治惊悚",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./92.jpg",
    "url": "./movie-0992.html"
  },
  {
    "title": "信天翁",
    "genre": "剧情 / 冒险 / 传记",
    "tags": "极地探险, 孤独, 抑郁症, 鸟类迁徙",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./93.jpg",
    "url": "./movie-0993.html"
  },
  {
    "title": "潇洒上枝头",
    "genre": "喜剧, 戏曲, 爱情",
    "tags": "黄梅调, 女驸马, 错位, 经典戏曲",
    "region": "中国大陆",
    "type": "电影",
    "year": "1962",
    "cover": "./94.jpg",
    "url": "./movie-0994.html"
  },
  {
    "title": "瑞典少女",
    "genre": "剧情 / 传记 / 历史",
    "tags": "历史, 女王, 女性觉醒, 宫廷, 权谋",
    "region": "瑞典 / 丹麦",
    "type": "电影",
    "year": "2023",
    "cover": "./95.jpg",
    "url": "./movie-0995.html"
  },
  {
    "title": "活尸大军",
    "genre": "动作惊悚",
    "tags": "丧尸, 朝鲜王朝, 宫斗, 冷兵器, 病毒",
    "region": "韩国 / 美国",
    "type": "电影",
    "year": "2025",
    "cover": "./96.jpg",
    "url": "./movie-0996.html"
  },
  {
    "title": "超级飞侠第二季",
    "genre": "儿童, 冒险",
    "tags": "机甲救援, 全球旅行, 科普启蒙",
    "region": "中国内地",
    "type": "动画剧集",
    "year": "2015",
    "cover": "./97.jpg",
    "url": "./movie-0997.html"
  },
  {
    "title": "百货商店的秘密",
    "genre": "悬疑，剧情，年代",
    "tags": "苏联，盗窃，卧底，商场风云",
    "region": "俄罗斯",
    "type": "电视剧",
    "year": "2023",
    "cover": "./98.jpg",
    "url": "./movie-0998.html"
  },
  {
    "title": "你照亮我的生命",
    "genre": "剧情，音乐",
    "tags": "治愈，失明，音乐家，救赎，温情",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "cover": "./99.jpg",
    "url": "./movie-0999.html"
  },
  {
    "title": "英格兰末日",
    "genre": "剧情， 战争",
    "tags": "政治寓言， 历史重构， 黑色幽默",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "cover": "./100.jpg",
    "url": "./movie-1000.html"
  },
  {
    "title": "阁楼上的玩具",
    "genre": "恐怖, 悬疑",
    "tags": "玩偶, 童年阴影, 密室, 诅咒, 回忆",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./101.jpg",
    "url": "./movie-1001.html"
  },
  {
    "title": "纳粹特攻队",
    "genre": "动作 / 历史 / 科幻",
    "tags": "架空历史, 犹太复仇, 硬核动作, 柴油朋克",
    "region": "德国",
    "type": "电影",
    "year": "2027",
    "cover": "./102.jpg",
    "url": "./movie-1002.html"
  },
  {
    "title": "勋章",
    "genre": "战争， 剧情",
    "tags": "二战， 战俘， 人性救赎",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "cover": "./103.jpg",
    "url": "./movie-1003.html"
  },
  {
    "title": "小确幸地图",
    "genre": "爱情, 奇幻, 青春",
    "tags": "时空循环, 治愈, 打卡",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "cover": "./104.jpg",
    "url": "./movie-1004.html"
  },
  {
    "title": "副作用2020",
    "genre": "科幻 / 惊悚",
    "tags": "近未来, 药物, 记忆删除, 阴谋",
    "region": "美国 / 德国",
    "type": "电影",
    "year": "2020",
    "cover": "./105.jpg",
    "url": "./movie-1005.html"
  },
  {
    "title": "我们的生活充满阳光",
    "genre": "剧情、家庭、年代",
    "tags": "怀旧、改革开放、工人阶级、温情",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./106.jpg",
    "url": "./movie-1006.html"
  },
  {
    "title": "红尘往事",
    "genre": "爱情 / 年代 / 家庭",
    "tags": "时代变迁, 虐恋, 家族恩怨",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2026",
    "cover": "./107.jpg",
    "url": "./movie-1007.html"
  },
  {
    "title": "索命影带",
    "genre": "恐怖，悬疑",
    "tags": "录像带，诅咒，都市传说，民俗恐怖",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./108.jpg",
    "url": "./movie-1008.html"
  },
  {
    "title": "火线第一季",
    "genre": "剧情、犯罪、悬疑",
    "tags": "消防员、连环纵火案、城市悲歌、群像剧",
    "region": "美国",
    "type": "剧集",
    "year": "2018",
    "cover": "./109.jpg",
    "url": "./movie-1009.html"
  },
  {
    "title": "急救爱情狂",
    "genre": "爱情喜剧 / 医疗轻喜剧",
    "tags": "急诊室, 阴差阳错, 高能节奏, 职场碰撞, 误会连环",
    "region": "中国香港",
    "type": "电影",
    "year": "2001",
    "cover": "./110.jpg",
    "url": "./movie-1010.html"
  },
  {
    "title": "诗吼",
    "genre": "剧情, 音乐, 传记",
    "tags": "诗人, 摇滚, 八十年代, 理想主义, 悲剧",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "cover": "./111.jpg",
    "url": "./movie-1011.html"
  },
  {
    "title": "野山",
    "genre": "剧情 / 家庭",
    "tags": "乡土, 改革开放, 价值观冲突",
    "region": "中国",
    "type": "电影",
    "year": "1986",
    "cover": "./112.jpg",
    "url": "./movie-1012.html"
  },
  {
    "title": "孤海沙堡",
    "genre": "剧情、惊悚、心理",
    "tags": "孤岛、记忆、潮汐、双胞胎、替代",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "cover": "./113.jpg",
    "url": "./movie-1013.html"
  },
  {
    "title": "使用前请摇匀",
    "genre": "喜剧 / 科幻 / 悬疑",
    "tags": "饮料，病毒，平行宇宙，烧脑",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./114.jpg",
    "url": "./movie-1014.html"
  },
  {
    "title": "勾魂慑魄粤语",
    "genre": "惊悚 / 情色",
    "tags": "邵氏风, 画中仙, 前世今生",
    "region": "香港",
    "type": "电影",
    "year": "1989",
    "cover": "./115.jpg",
    "url": "./movie-1015.html"
  },
  {
    "title": "墓边凶宅",
    "genre": "恐怖, 心理惊悚",
    "tags": "凶宅, 家族诅咒, 考古",
    "region": "英国",
    "type": "电影",
    "year": "2022",
    "cover": "./116.jpg",
    "url": "./movie-1016.html"
  },
  {
    "title": "让·多米尼克",
    "genre": "传记， 剧情",
    "tags": "作家传记， 精神分析， 法国文学",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./117.jpg",
    "url": "./movie-1017.html"
  },
  {
    "title": "鸟儿们的奇幻冒险",
    "genre": "动画 / 冒险 / 家庭",
    "tags": "鸟类迁徙, 环保, 手绘风, 治愈",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "cover": "./118.jpg",
    "url": "./movie-1018.html"
  },
  {
    "title": "百万圆女孩的眼泪日记",
    "genre": "喜剧, 爱情",
    "tags": "契约爱情, 搞笑, 治愈, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./119.jpg",
    "url": "./movie-1019.html"
  },
  {
    "title": "柯明斯基理论第二季",
    "genre": "喜剧, 剧情",
    "tags": "老年, 友情, 死亡, 表演课",
    "region": "美国",
    "type": "电视剧",
    "year": "2019",
    "cover": "./120.jpg",
    "url": "./movie-1020.html"
  },
  {
    "title": "蛊惑仔与大滚王",
    "genre": "喜剧, 动作",
    "tags": "闽南语, 黑帮, 赌博",
    "region": "中国台湾",
    "type": "电影",
    "year": "1992",
    "cover": "./121.jpg",
    "url": "./movie-1021.html"
  },
  {
    "title": "黄金神威最终章",
    "genre": "冒险, 历史, 动作",
    "tags": "北海道, 宝藏, 生存战, 杉元佐一",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "cover": "./122.jpg",
    "url": "./movie-1022.html"
  },
  {
    "title": "十分钟年华老去：小号篇",
    "genre": "剧情 / 实验",
    "tags": "短片集, 时间主题, 大师云集, 哲学, 艺术电影",
    "region": "英国 / 德国",
    "type": "电影",
    "year": "2002",
    "cover": "./123.jpg",
    "url": "./movie-1023.html"
  },
  {
    "title": "四平警事之英城惊雷",
    "genre": "喜剧 / 动作 / 警匪",
    "tags": "东北喜剧, 探案, 兄弟情, 枪战",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-1024.html"
  },
  {
    "title": "大显神威",
    "genre": "武侠, 奇幻, 历史, 冒险",
    "tags": "封印之战, 军功与背叛, 武道修行, 边疆秘境, 复仇与救赎",
    "region": "中国",
    "type": "古装武侠电视剧",
    "year": "2017",
    "cover": "./125.jpg",
    "url": "./movie-1025.html"
  },
  {
    "title": "希瑞与非凡的公主们第四季",
    "genre": "奇幻 / 冒险 / 动作",
    "tags": "魔法, 王国, 友谊, 变身, 守护, 反抗军",
    "region": "美国",
    "type": "动画剧集",
    "year": "2019",
    "cover": "./126.jpg",
    "url": "./movie-1026.html"
  },
  {
    "title": "起源：首尔车站",
    "genre": "动作",
    "tags": "丧尸前传, 群像, 起源故事",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "cover": "./127.jpg",
    "url": "./movie-1027.html"
  },
  {
    "title": "冷血杀人狂",
    "genre": "恐怖 / 犯罪",
    "tags": "连环杀手, 心理惊悚, 纪实",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./128.jpg",
    "url": "./movie-1028.html"
  },
  {
    "title": "极速一生",
    "genre": "传记 / 运动",
    "tags": "赛车，传奇，传记，热血，坚持",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2025",
    "cover": "./129.jpg",
    "url": "./movie-1029.html"
  },
  {
    "title": "鬼神传",
    "genre": "动画, 奇幻, 冒险",
    "tags": "百鬼夜行, 少年救世, 和风美学, 治愈系",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./130.jpg",
    "url": "./movie-1030.html"
  },
  {
    "title": "调制青少年",
    "genre": "科幻 / 青春 / 悬疑",
    "tags": "人体实验, 校园霸凌, 药物改造, 觉醒反抗",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./131.jpg",
    "url": "./movie-1031.html"
  },
  {
    "title": "七夜客栈",
    "genre": "古装 / 悬疑 / 奇幻",
    "tags": "连环命案, 轮回夜宿, 民间传说, 身份秘密, 群像推理",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2017",
    "cover": "./132.jpg",
    "url": "./movie-1032.html"
  },
  {
    "title": "全垒打",
    "genre": "剧情, 运动, 家庭",
    "tags": "棒球, 父子关系, 听障, 热血",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./133.jpg",
    "url": "./movie-1033.html"
  },
  {
    "title": "妮娜的抉择",
    "genre": "剧情， 女性， 社会",
    "tags": "波兰， 堕胎法， 女性权利， 医生， 良心",
    "region": "波兰",
    "type": "电影",
    "year": "2018",
    "cover": "./134.jpg",
    "url": "./movie-1034.html"
  },
  {
    "title": "失踪的地图国语",
    "genre": "悬疑冒险",
    "tags": "寻宝, 历史, 民国",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./135.jpg",
    "url": "./movie-1035.html"
  },
  {
    "title": "暴力特区",
    "genre": "动作、剧情、犯罪",
    "tags": "卧底、拆迁、困兽斗",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "cover": "./136.jpg",
    "url": "./movie-1036.html"
  },
  {
    "title": "完美起司配方",
    "genre": "喜剧, 剧情, 美食",
    "tags": "美食之旅, 米其林, 传承, 乡村, 治愈",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./137.jpg",
    "url": "./movie-1037.html"
  },
  {
    "title": "仇老爷爷",
    "genre": "悬疑、惊悚、犯罪",
    "tags": "复仇， 老人， 公寓， 棋局， 高智商犯罪",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "cover": "./138.jpg",
    "url": "./movie-1038.html"
  },
  {
    "title": "鹰爪神捕",
    "genre": "古装，武侠，悬疑",
    "tags": "明朝，连环杀人，鹰爪功，朝堂斗争，义子",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./139.jpg",
    "url": "./movie-1039.html"
  },
  {
    "title": "泰版下一站是幸福泰语",
    "genre": "爱情喜剧",
    "tags": "姐弟恋，职场，泰式幽默，翻拍",
    "region": "泰国",
    "type": "剧集",
    "year": "2026",
    "cover": "./140.jpg",
    "url": "./movie-1040.html"
  },
  {
    "title": "圣诞树3",
    "genre": "喜剧 / 爱情 / 家庭",
    "tags": "新年贺岁， 多线叙事， 命运交织， 温暖治愈， 大团圆",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2023",
    "cover": "./141.jpg",
    "url": "./movie-1041.html"
  },
  {
    "title": "党的混蛋",
    "genre": "政治讽刺, 剧情",
    "tags": "左翼, 理想主义, 腐败, 黑色幽默, 北欧",
    "region": "丹麦",
    "type": "电影",
    "year": "2026",
    "cover": "./142.jpg",
    "url": "./movie-1042.html"
  },
  {
    "title": "空手戏白狼",
    "genre": "动作，犯罪",
    "tags": "空手道，卧底，黑吃黑，暴力美学",
    "region": "中国香港",
    "type": "电影",
    "year": "1984",
    "cover": "./143.jpg",
    "url": "./movie-1043.html"
  },
  {
    "title": "无声深处",
    "genre": "剧情, 犯罪, 悬疑",
    "tags": "聋哑, 卧底, 手语, 复仇",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./144.jpg",
    "url": "./movie-1044.html"
  },
  {
    "title": "燃烧卡路里的餐厅",
    "genre": "奇幻, 爱情, 喜剧",
    "tags": "减肥, 美食, 奇幻设定",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./145.jpg",
    "url": "./movie-1045.html"
  },
  {
    "title": "狮王争霸",
    "genre": "动作 / 武侠 / 体育",
    "tags": "醒狮, 南北对决, 港式武侠复兴, 非遗",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "cover": "./146.jpg",
    "url": "./movie-1046.html"
  },
  {
    "title": "寻龙诀：生死门",
    "genre": "冒险，奇幻，动作",
    "tags": "盗墓，摸金校尉，机关",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./147.jpg",
    "url": "./movie-1047.html"
  },
  {
    "title": "鸠的击退法",
    "genre": "悬疑犯罪",
    "tags": "高智商对决, 骗子, 反转",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./148.jpg",
    "url": "./movie-1048.html"
  },
  {
    "title": "天使报喜",
    "genre": "剧情，历史，战争",
    "tags": "二战，修女，犹太儿童，信仰拷问",
    "region": "波兰",
    "type": "电影",
    "year": "2025",
    "cover": "./149.jpg",
    "url": "./movie-1049.html"
  },
  {
    "title": "大片",
    "genre": "喜剧冒险",
    "tags": "剧组， 荒诞， 草台班子， 戏中戏",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./150.jpg",
    "url": "./movie-1050.html"
  },
  {
    "title": "我爱你也爱他",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": "三人行, 开放式关系, 道德困境, 现代",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "cover": "./1.jpg",
    "url": "./movie-1051.html"
  },
  {
    "title": "瓦尔兴湖家庭电影",
    "genre": "纪录片 / 家庭",
    "tags": "伪记录, 家庭私影像, 纳粹反思, 历史伤痕, 艺术片",
    "region": "德国",
    "type": "电影",
    "year": "2021",
    "cover": "./2.jpg",
    "url": "./movie-1052.html"
  },
  {
    "title": "星源之主",
    "genre": "奇幻 / 冒险 / 玄幻",
    "tags": "修仙, 星辰, 体质觉醒, 学院, 逆袭",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2026",
    "cover": "./3.jpg",
    "url": "./movie-1053.html"
  },
  {
    "title": "美丽与哀愁之歌",
    "genre": "剧情, 爱情, 文艺",
    "tags": "昭和, 艺伎, 忘年恋, 物哀",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./4.jpg",
    "url": "./movie-1054.html"
  },
  {
    "title": "翡翠森林",
    "genre": "奇幻 / 剧情 / 环保",
    "tags": "神秘森林, 生态寓言, 中日合拍",
    "region": "台湾 / 日本",
    "type": "电影",
    "year": "2025",
    "cover": "./5.jpg",
    "url": "./movie-1055.html"
  },
  {
    "title": "楚留香后传之西门无恨",
    "genre": "武侠, 奇幻",
    "tags": "楚留香, 西门, 悬疑, 情怀",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./6.jpg",
    "url": "./movie-1056.html"
  },
  {
    "title": "活尸开麦拉",
    "genre": "喜剧, 恐怖",
    "tags": "丧尸, 搞笑, 伪纪录片, 台湾味, 荒诞",
    "region": "中国台湾",
    "type": "电影",
    "year": "2020",
    "cover": "./7.jpg",
    "url": "./movie-1057.html"
  },
  {
    "title": "我埋葬了生机",
    "genre": "惊悚, 悬疑, 灾难",
    "tags": "生态恐怖, 病毒, 密室, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./8.jpg",
    "url": "./movie-1058.html"
  },
  {
    "title": "真实2014",
    "genre": "剧情, 悬疑",
    "tags": "元电影, 虚实难辨, 导演困境, 哲学",
    "region": "法国",
    "type": "电影",
    "year": "2014",
    "cover": "./9.jpg",
    "url": "./movie-1059.html"
  },
  {
    "title": "苍兰诀动画版",
    "genre": "古装奇幻",
    "tags": "东方美学, 仙魔虐恋, 2D手绘, 宿命轮回",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./10.jpg",
    "url": "./movie-1060.html"
  },
  {
    "title": "胖子阿伯特",
    "genre": "家庭 / 喜剧 / 奇幻",
    "tags": "卡通角色, 减肥, 自信, 合家欢",
    "region": "美国",
    "type": "电影",
    "year": "2004",
    "cover": "./11.jpg",
    "url": "./movie-1061.html"
  },
  {
    "title": "疾速求生",
    "genre": "动作, 惊悚",
    "tags": "跑酷, 反乌托邦, 都市, 直播, 生存",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "cover": "./12.jpg",
    "url": "./movie-1062.html"
  },
  {
    "title": "诱饵",
    "genre": "犯罪/悬疑/反转",
    "tags": "设局追凶, 卧底行动, 黑市交易, 假证真相, 人性博弈, 高压节奏",
    "region": "韩国",
    "type": "电视剧",
    "year": "2023",
    "cover": "./13.jpg",
    "url": "./movie-1063.html"
  },
  {
    "title": "百战升平",
    "genre": "历史，战争，剧情",
    "tags": "古代战争，和平，将军，家国情怀",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "cover": "./14.jpg",
    "url": "./movie-1064.html"
  },
  {
    "title": "谁是鼎厨",
    "genre": "真人秀 / 美食",
    "tags": "厨艺, 竞技, 明星, 素人",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2022",
    "cover": "./15.jpg",
    "url": "./movie-1065.html"
  },
  {
    "title": "聪明的金发美女",
    "genre": "悬疑， 犯罪， 剧情",
    "tags": "女性， 智商， 反转",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./16.jpg",
    "url": "./movie-1066.html"
  },
  {
    "title": "玉女偷情",
    "genre": "爱情, 剧情, 古典",
    "tags": "邵氏, 楚原, 伦理奇情",
    "region": "中国香港",
    "type": "电影",
    "year": "1969",
    "cover": "./17.jpg",
    "url": "./movie-1067.html"
  },
  {
    "title": "飙城",
    "genre": "动作, 犯罪, 爱情",
    "tags": "飞车, 黑帮, 浪子, 悲剧, 热血",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "cover": "./18.jpg",
    "url": "./movie-1068.html"
  },
  {
    "title": "麦里斯德与黑宝马",
    "genre": "动作、犯罪、剧情",
    "tags": "黑帮、复仇、兄弟、宿命",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "cover": "./19.jpg",
    "url": "./movie-1069.html"
  },
  {
    "title": "嗜血狂鲨",
    "genre": "动作, 灾难, 科幻",
    "tags": "变异鲨鱼, 海上钻井, 基因工程",
    "region": "美国",
    "type": "网络电影",
    "year": "2024",
    "cover": "./20.jpg",
    "url": "./movie-1070.html"
  },
  {
    "title": "回到你怀抱",
    "genre": "爱情, 奇幻, 悬疑",
    "tags": "时空轮回, 替身文学, 虐恋, 高概念",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./21.jpg",
    "url": "./movie-1071.html"
  },
  {
    "title": "所罗门的伪证前篇：事件",
    "genre": "悬疑, 犯罪",
    "tags": "校园, 审判, 推理, 社会派",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./22.jpg",
    "url": "./movie-1072.html"
  },
  {
    "title": "妖怪名单之苏九儿",
    "genre": "奇幻, 爱情, 动作",
    "tags": "狐妖, 前世今生, 捉妖师, 虐恋, 古风",
    "region": "中国",
    "type": "网络电影",
    "year": "2025",
    "cover": "./23.jpg",
    "url": "./movie-1073.html"
  },
  {
    "title": "扫荡香粉寮",
    "genre": "动作, 犯罪, 剧情",
    "tags": "黑帮, 卧底, 父子, 毒品",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./24.jpg",
    "url": "./movie-1074.html"
  },
  {
    "title": "土京盗宝记",
    "genre": "动作/冒险/寻宝/喜剧",
    "tags": "海港黑市, 古玩交易, 家族秘密, 地下通道",
    "region": "中国大陆",
    "type": "动作冒险片",
    "year": "2017",
    "cover": "./25.jpg",
    "url": "./movie-1075.html"
  },
  {
    "title": "非洲俄瑞斯忒斯的札记",
    "genre": "剧情/历史",
    "tags": "殖民反思, 希腊悲剧改编, 黑白影像",
    "region": "法国/塞内加尔",
    "type": "电影",
    "year": "2026",
    "cover": "./26.jpg",
    "url": "./movie-1076.html"
  },
  {
    "title": "暗礁狂鲨",
    "genre": "惊悚, 冒险, 灾难",
    "tags": "鲨鱼, 潜水, 孤岛求生, 生理恐惧",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2025",
    "cover": "./27.jpg",
    "url": "./movie-1077.html"
  },
  {
    "title": "青年霍元甲之威震津门",
    "genre": "动作 / 传记 / 历史",
    "tags": "霍元甲，民国，武术，擂台，民族气节",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "cover": "./28.jpg",
    "url": "./movie-1078.html"
  },
  {
    "title": "青春海滩宾果",
    "genre": "青春、喜剧、成长、悬疑",
    "tags": "海边营地、救援、友谊、误会、家庭秘密",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./29.jpg",
    "url": "./movie-1079.html"
  },
  {
    "title": "廿九街",
    "genre": "剧情、犯罪、社会",
    "tags": "九龙城寨、最后时光、江湖、宿命",
    "region": "中国香港",
    "type": "电影",
    "year": "1997",
    "cover": "./30.jpg",
    "url": "./movie-1080.html"
  },
  {
    "title": "鲨人树儿",
    "genre": "恐怖、科幻、惊悚",
    "tags": "变异生物、植物杀人、B级片、环保恐怖",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./31.jpg",
    "url": "./movie-1081.html"
  },
  {
    "title": "入狱",
    "genre": "剧情 / 犯罪 / 悬疑",
    "tags": "卧底, 监狱, 复仇, 黑帮",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./32.jpg",
    "url": "./movie-1082.html"
  },
  {
    "title": "魔偶王的复仇",
    "genre": "奇幻 / 恐怖 / 动作",
    "tags": "人偶, 契约, 战国",
    "region": "日本",
    "type": "动画",
    "year": "2025",
    "cover": "./33.jpg",
    "url": "./movie-1083.html"
  },
  {
    "title": "主啊，请赐我儿子",
    "genre": "剧情 / 黑色喜剧",
    "tags": "生育压力, 宗教信仰, 婚姻危机, 黑色幽默, 社会讽刺",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./34.jpg",
    "url": "./movie-1084.html"
  },
  {
    "title": "拜拜",
    "genre": "剧情 / 家庭",
    "tags": "告别, 亲情, 奇幻, 和解, 幽默",
    "region": "中国台湾",
    "type": "电影",
    "year": "2021",
    "cover": "./35.jpg",
    "url": "./movie-1085.html"
  },
  {
    "title": "理查三世1995",
    "genre": "剧情 / 战争 / 历史",
    "tags": "莎士比亚改编，权谋，现代演绎",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "1995",
    "cover": "./36.jpg",
    "url": "./movie-1086.html"
  },
  {
    "title": "阿姆的儿子子死了",
    "genre": "剧情，音乐，家庭",
    "tags": "说唱父子，死亡与和解，遗产",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./37.jpg",
    "url": "./movie-1087.html"
  },
  {
    "title": "艾薇和豆豆：幽灵退散",
    "genre": "家庭，喜剧，奇幻",
    "tags": "女孩，友谊，假幽灵，科学实验",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./38.jpg",
    "url": "./movie-1088.html"
  },
  {
    "title": "庖丁传奇之鸳鸯蝴蝶料理梦",
    "genre": "美食江湖, 古装励志, 情义传承",
    "tags": "刀工对决, 宫廷宴席, 双线传承, 食梦江湖, 传奇师徒",
    "region": "中国大陆",
    "type": "古装美食传奇片",
    "year": "2020",
    "cover": "./39.jpg",
    "url": "./movie-1089.html"
  },
  {
    "title": "明日计划",
    "genre": "科幻, 悬疑, 冒险",
    "tags": "时间循环, 末日拯救, 科学家, 高概念",
    "region": "美国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./40.jpg",
    "url": "./movie-1090.html"
  },
  {
    "title": "贼劫贼",
    "genre": "犯罪 / 动作",
    "tags": "黑吃黑, 烧脑, 反转, 港产片",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./41.jpg",
    "url": "./movie-1091.html"
  },
  {
    "title": "老鼠也移民 4",
    "genre": "喜剧, 冒险, 家庭",
    "tags": "老鼠, 移民, 太空, 欢乐, 友情",
    "region": "美国",
    "type": "动画电影",
    "year": "2025",
    "cover": "./42.jpg",
    "url": "./movie-1092.html"
  },
  {
    "title": "惊天逆转",
    "genre": "犯罪, 悬疑, 庭审",
    "tags": "法庭辩论, 反转, 智商对决",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./43.jpg",
    "url": "./movie-1093.html"
  },
  {
    "title": "狄克崔西",
    "genre": "动作 / 犯罪 / 黑色电影",
    "tags": "漫画改编, 霓虹美学, 阿尔·帕西诺",
    "region": "美国",
    "type": "电影",
    "year": "1990",
    "cover": "./44.jpg",
    "url": "./movie-1094.html"
  },
  {
    "title": "小狐狸维克",
    "genre": "动画, 冒险, 家庭",
    "tags": "动物, 成长, 自然, 治愈",
    "region": "英国",
    "type": "剧集",
    "year": "2023",
    "cover": "./45.jpg",
    "url": "./movie-1095.html"
  },
  {
    "title": "直言真相第一季",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": "播客, 冤案, 调查记者, 真相, 种族",
    "region": "美国",
    "type": "剧集",
    "year": "2019",
    "cover": "./46.jpg",
    "url": "./movie-1096.html"
  },
  {
    "title": "战火自由魂",
    "genre": "剧情 / 战争 / 历史",
    "tags": "抗战, 女性, 信仰, 人性",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./47.jpg",
    "url": "./movie-1097.html"
  },
  {
    "title": "无敌拍档之万无一失",
    "genre": "动作喜剧",
    "tags": "双雄搭档, 乌龙警察, 港式无厘头, 兄弟情",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./48.jpg",
    "url": "./movie-1098.html"
  },
  {
    "title": "灵气迫人",
    "genre": "恐怖， 喜剧",
    "tags": "都市传说， 灵异， 搞笑",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./49.jpg",
    "url": "./movie-1099.html"
  },
  {
    "title": "狂迷利物浦",
    "genre": "剧情, 喜剧, 运动",
    "tags": "足球, 球迷, 父子, 励志",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./50.jpg",
    "url": "./movie-1100.html"
  },
  {
    "title": "滚蛋吧！肿瘤君",
    "genre": "喜剧, 剧情, 家庭",
    "tags": "抗癌, 漫画改编, 乐观, 催泪",
    "region": "中国",
    "type": "电影",
    "year": "2015",
    "cover": "./51.jpg",
    "url": "./movie-1101.html"
  },
  {
    "title": "沉默的乌鸦",
    "genre": "惊悚, 悬疑, 犯罪",
    "tags": "哥特, 孤岛, 连环杀手, 反转",
    "region": "英国",
    "type": "电影",
    "year": "2017",
    "cover": "./52.jpg",
    "url": "./movie-1102.html"
  },
  {
    "title": "大世界",
    "genre": "年代 / 家庭 / 历史",
    "tags": "大时代、小人物、上海、跨年代、群像",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "cover": "./53.jpg",
    "url": "./movie-1103.html"
  },
  {
    "title": "红猪",
    "genre": "奇幻 / 战争",
    "tags": "宫崎骏精神续作, 飞行员, 诅咒, 亚得里亚海, 反战",
    "region": "日本",
    "type": "动画电影",
    "year": "2026",
    "cover": "./54.jpg",
    "url": "./movie-1104.html"
  },
  {
    "title": "战斗人2：叛狱战将",
    "genre": "动作, 犯罪",
    "tags": "监狱, 泰拳, 暴力美学",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "cover": "./55.jpg",
    "url": "./movie-1105.html"
  },
  {
    "title": "惩恶扬善",
    "genre": "动作剧情, 司法悬疑",
    "tags": "民间正义, 反腐调查, 复仇与救赎, 城市黑网, 正面能量",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "cover": "./56.jpg",
    "url": "./movie-1106.html"
  },
  {
    "title": "开启心扉",
    "genre": "剧情, 科幻",
    "tags": "记忆删除, 情感, 伦理, 治愈",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "cover": "./57.jpg",
    "url": "./movie-1107.html"
  },
  {
    "title": "墙壁之间2008",
    "genre": "剧情, 校园, 社会",
    "tags": "教育, 移民, 教师困境",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./58.jpg",
    "url": "./movie-1108.html"
  },
  {
    "title": "吞弑",
    "genre": "恐怖 / 剧情",
    "tags": "身体恐怖，食人，艺术圈，阶级批判，女性欲望",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2025",
    "cover": "./59.jpg",
    "url": "./movie-1109.html"
  },
  {
    "title": "猩球崛起：黎明的进击",
    "genre": "动作 / 科幻 / 冒险",
    "tags": "猿族领袖, 人类幸存者, 机甲大战",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./60.jpg",
    "url": "./movie-1110.html"
  },
  {
    "title": "舍伍德传第一季",
    "genre": "犯罪, 传记",
    "tags": "真实事件, 工运, 卧底警察, 背叛",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./61.jpg",
    "url": "./movie-1111.html"
  },
  {
    "title": "火上女人",
    "genre": "剧情、传记",
    "tags": "女权，文艺复兴，画家，复仇之火",
    "region": "意大利",
    "type": "电影",
    "year": "2027",
    "cover": "./62.jpg",
    "url": "./movie-1112.html"
  },
  {
    "title": "失落的一群",
    "genre": "剧情 / 冒险",
    "tags": "荒野求生, 集体失散, 记忆迷途, 人性选择, 旅途寓言",
    "region": "中国大陆",
    "type": "电影",
    "year": "1993",
    "cover": "./63.jpg",
    "url": "./movie-1113.html"
  },
  {
    "title": "浪华悲歌",
    "genre": "剧情、黑色电影、女性",
    "tags": "沟口健二、艺伎、悲剧、现实主义",
    "region": "日本",
    "type": "电影",
    "year": "1936",
    "cover": "./64.jpg",
    "url": "./movie-1114.html"
  },
  {
    "title": "疯狂的麦咭第七季",
    "genre": "真人秀, 冒险, 儿童",
    "tags": "密室逃脱, 亲子, 竞技, 闯关",
    "region": "大陆",
    "type": "TV Series",
    "year": "2024",
    "cover": "./65.jpg",
    "url": "./movie-1115.html"
  },
  {
    "title": "谋杀彩排",
    "genre": "悬疑 / 犯罪",
    "tags": "剧场, 推理, 戏中戏, 反转",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./66.jpg",
    "url": "./movie-1116.html"
  },
  {
    "title": "海边的马尔穆斯克",
    "genre": "剧情 / 悬疑",
    "tags": "哲学, 孤独, 极寒, 隐喻",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2018",
    "cover": "./67.jpg",
    "url": "./movie-1117.html"
  },
  {
    "title": "花甲男孩转大人",
    "genre": "家庭, 喜剧, 剧情",
    "tags": "返乡, 传统与现代, 生死",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2017",
    "cover": "./68.jpg",
    "url": "./movie-1118.html"
  },
  {
    "title": "我的爸爸是小学生",
    "genre": "剧情，奇幻，家庭",
    "tags": "灵魂互换，父子情，校园喜剧，逆龄成长",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2017",
    "cover": "./69.jpg",
    "url": "./movie-1119.html"
  },
  {
    "title": "扣扣事件之古宅魅影",
    "genre": "悬疑， 惊悚， 喜剧",
    "tags": "密室逃脱， 网红， 直播， 乌龙",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2019",
    "cover": "./70.jpg",
    "url": "./movie-1120.html"
  },
  {
    "title": "爱在春光乍现时",
    "genre": "爱情、文艺",
    "tags": "邂逅, 摄影, 遗憾",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./71.jpg",
    "url": "./movie-1121.html"
  },
  {
    "title": "河畔的朔子",
    "genre": "剧情 / 悬疑",
    "tags": "青春，夏日，死亡，小镇谜团，文艺",
    "region": "日本",
    "type": "电影",
    "year": "2020",
    "cover": "./72.jpg",
    "url": "./movie-1122.html"
  },
  {
    "title": "鬼神警察",
    "genre": "奇幻, 动作, 悬疑, 喜剧",
    "tags": "阴阳眼, 刑警, 灵异犯罪, 搭档",
    "region": "韩国",
    "type": "电视剧",
    "year": "2022",
    "cover": "./73.jpg",
    "url": "./movie-1123.html"
  },
  {
    "title": "长久的沉默",
    "genre": "剧情, 历史, 家庭",
    "tags": "三十年工厂、母亲日记、电台追寻、声音记忆、代际创伤、缓慢复仇",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2013",
    "cover": "./74.jpg",
    "url": "./movie-1124.html"
  },
  {
    "title": "一百万年以前",
    "genre": "科幻 / 冒险 / 史前",
    "tags": "时间裂缝, 史前巨兽, 远古文明, 穿越, 生存考验, 物种起源",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2016",
    "cover": "./75.jpg",
    "url": "./movie-1125.html"
  },
  {
    "title": "致敬白衣天使公益云演唱会",
    "genre": "音乐 / 纪录片",
    "tags": "抗疫，直播，演唱会，纪实",
    "region": "中国大陆",
    "type": "电影 / 音乐会纪录片",
    "year": "2024",
    "cover": "./76.jpg",
    "url": "./movie-1126.html"
  },
  {
    "title": "邪花劫",
    "genre": "悬疑, 惊悚, 情色",
    "tags": "复仇, 花店, 连环杀人, 双重身份",
    "region": "中国香港",
    "type": "电影",
    "year": "1994",
    "cover": "./77.jpg",
    "url": "./movie-1127.html"
  },
  {
    "title": "爸爸出差时",
    "genre": "剧情, 历史",
    "tags": "政治, 童年, 父爱, 1980年代",
    "region": "土耳其",
    "type": "电影",
    "year": "2024",
    "cover": "./78.jpg",
    "url": "./movie-1128.html"
  },
  {
    "title": "红小鬼",
    "genre": "历史, 战争",
    "tags": "长征, 儿童, 革命, 信仰",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "cover": "./79.jpg",
    "url": "./movie-1129.html"
  },
  {
    "title": "路过我年少时光的蓝色",
    "genre": "同性，青春，文艺",
    "tags": "校园暗恋，蓝色隐喻，遗憾美学",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./80.jpg",
    "url": "./movie-1130.html"
  },
  {
    "title": "东宫皇子",
    "genre": "古装，爱情，剧情",
    "tags": "宫廷，虐恋，权谋，悲剧",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "cover": "./81.jpg",
    "url": "./movie-1131.html"
  },
  {
    "title": "飞出个未来第三季",
    "genre": "喜剧, 科幻, 动画",
    "tags": "成人向, 荒诞, 讽刺, 经典, 无厘头",
    "region": "美国",
    "type": "剧集",
    "year": "2001",
    "cover": "./82.jpg",
    "url": "./movie-1132.html"
  },
  {
    "title": "紧急措施19号",
    "genre": "灾难 / 动作",
    "tags": "地铁, 生化, 封城, 孤胆",
    "region": "中国大陆",
    "type": "电影",
    "year": "2015",
    "cover": "./83.jpg",
    "url": "./movie-1133.html"
  },
  {
    "title": "重任在肩第五季",
    "genre": "犯罪 / 悬疑 / 剧情",
    "tags": "AC-12, 反腐, 英剧神作, 高能反转",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "cover": "./84.jpg",
    "url": "./movie-1134.html"
  },
  {
    "title": "日本的西多妮",
    "genre": "剧情， 文艺",
    "tags": "法日合拍， 跨文化， 孤独， 乡村",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "cover": "./85.jpg",
    "url": "./movie-1135.html"
  },
  {
    "title": "湖中女人",
    "genre": "悬疑犯罪",
    "tags": "双女主, 女性困境, 1960年代, 冷案",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./86.jpg",
    "url": "./movie-1136.html"
  },
  {
    "title": "告白实行委员会：告白预演",
    "genre": "动画、爱情、音乐",
    "tags": "校园、暗恋、青春、歌曲改编、纯爱",
    "region": "日本",
    "type": "电影",
    "year": "2019",
    "cover": "./87.jpg",
    "url": "./movie-1137.html"
  },
  {
    "title": "纽约灾星第二季",
    "genre": "犯罪, 悬疑, 纪实",
    "tags": "连环杀手, 法律漏洞, 媒体审判, 高智商犯罪",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./88.jpg",
    "url": "./movie-1138.html"
  },
  {
    "title": "学校万花筒",
    "genre": "校园群像",
    "tags": "日常, 治愈, 社团, 青春, 单元剧",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./89.jpg",
    "url": "./movie-1139.html"
  },
  {
    "title": "埃及王子",
    "genre": "剧情，冒险，音乐",
    "tags": "圣经故事，摩西，兄弟反目，梦工厂巅峰",
    "region": "美国",
    "type": "动画电影",
    "year": "1998",
    "cover": "./90.jpg",
    "url": "./movie-1140.html"
  },
  {
    "title": "我爱法拉利",
    "genre": "喜剧，励志，剧情",
    "tags": "中年危机，梦想，赛车，亲情，逆袭",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./91.jpg",
    "url": "./movie-1141.html"
  },
  {
    "title": "出差十五夜2：梦想特辑",
    "genre": "真人秀 / 搞笑 / 访谈",
    "tags": "团综, 游戏挑战, 即兴反应, 明星群像, 综艺修罗场, 轻喜剧",
    "region": "韩国",
    "type": "综艺节目",
    "year": "2023",
    "cover": "./92.jpg",
    "url": "./movie-1142.html"
  },
  {
    "title": "红粉侦探",
    "genre": "犯罪 / 悬疑 / 喜剧",
    "tags": "女侦探, 霓虹夜城, 伪装身份, 黑帮迷局, 双人搭档",
    "region": "中国香港",
    "type": "电影",
    "year": "2016",
    "cover": "./93.jpg",
    "url": "./movie-1143.html"
  },
  {
    "title": "爱乐风雨情",
    "genre": "剧情 / 音乐 / 爱情",
    "tags": "音乐励志, 手语, 逆境重生, 治愈, 失聪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./94.jpg",
    "url": "./movie-1144.html"
  },
  {
    "title": "天佑勇者",
    "genre": "奇幻 / 冒险 / 剧情",
    "tags": "穿越, 系统, 逆天改命, 史诗感, 群像",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./95.jpg",
    "url": "./movie-1145.html"
  },
  {
    "title": "青春之梦",
    "genre": "青春 / 剧情",
    "tags": "高中, 艺考, 梦想, 友情, 现实向",
    "region": "中国",
    "type": "电视剧",
    "year": "2021",
    "cover": "./96.jpg",
    "url": "./movie-1146.html"
  },
  {
    "title": "幻幻之交",
    "genre": "奇幻 / 冒险",
    "tags": "童年幻想，友谊，想象具象化",
    "region": "美国",
    "type": "动画电影",
    "year": "2026",
    "cover": "./97.jpg",
    "url": "./movie-1147.html"
  },
  {
    "title": "冷血追击",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": "黑色幽默, 复仇, 铲雪车司机, 连姆·尼森, 雪景",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2019",
    "cover": "./98.jpg",
    "url": "./movie-1148.html"
  },
  {
    "title": "血伞凶灵",
    "genre": "恐怖 / 悬疑",
    "tags": "民俗恐怖, 红衣女鬼, 诅咒物品, 民国凶案",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./99.jpg",
    "url": "./movie-1149.html"
  },
  {
    "title": "正妻",
    "genre": "剧情, 家庭, 年代",
    "tags": "民国, 宅斗, 女性自立, 商战, 大女主",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./100.jpg",
    "url": "./movie-1150.html"
  },
  {
    "title": "三岛由纪夫传",
    "genre": "剧情 / 传记",
    "tags": "文学, 极端美学, 自杀, 历史事件, 内心独白",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./101.jpg",
    "url": "./movie-1151.html"
  },
  {
    "title": "砖墙迷攻",
    "genre": "悬疑 / 惊悚",
    "tags": "密室, 建筑, 身份反转, 智力, 低成本",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./102.jpg",
    "url": "./movie-1152.html"
  },
  {
    "title": "纽约女郎乡下情",
    "genre": "爱情，喜剧",
    "tags": "黑白，城乡，浪漫，幽默，经典",
    "region": "美国",
    "type": "电影",
    "year": "1954",
    "cover": "./103.jpg",
    "url": "./movie-1153.html"
  },
  {
    "title": "高校六甲生",
    "genre": "喜剧 / 校园",
    "tags": "留级生, 校园喜剧, 热血青春, 逆袭",
    "region": "台湾",
    "type": "电影",
    "year": "2004",
    "cover": "./104.jpg",
    "url": "./movie-1154.html"
  },
  {
    "title": "黑夜追凶",
    "genre": "犯罪 / 动作",
    "tags": "连环杀手, 盲探, 声呐, 复仇",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./105.jpg",
    "url": "./movie-1155.html"
  },
  {
    "title": "死神来了2国语",
    "genre": "惊悚 / 恐怖 / 灾难",
    "tags": "死亡预兆,连锁反应,幸存者诅咒,时间错位,高压逃生",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "year": "2004",
    "cover": "./106.jpg",
    "url": "./movie-1156.html"
  },
  {
    "title": "没有什么能比得上假期",
    "genre": "喜剧/家庭",
    "tags": "圣诞合家欢,乌龙事件,温情治愈",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./107.jpg",
    "url": "./movie-1157.html"
  },
  {
    "title": "通告",
    "genre": "悬疑，犯罪，职场",
    "tags": "娱乐圈，潜规则，密室，复仇，反转",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "cover": "./108.jpg",
    "url": "./movie-1158.html"
  },
  {
    "title": "恶魔与女性",
    "genre": "惊悚、悬疑、心理恐怖",
    "tags": "宗教惊悚, 修女, 心理操控, 身份谜团",
    "region": "西班牙 / 阿根廷",
    "type": "电影",
    "year": "2024",
    "cover": "./109.jpg",
    "url": "./movie-1159.html"
  },
  {
    "title": "四片羽毛",
    "genre": "战争 / 冒险 / 心理",
    "tags": "懦夫, 救赎, 沙漠, 心理战",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "cover": "./110.jpg",
    "url": "./movie-1160.html"
  },
  {
    "title": "肖像画",
    "genre": "剧情, 悬疑, 历史",
    "tags": "名画, 贵族, 秘密, 双面人生, 维多利亚时代",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./111.jpg",
    "url": "./movie-1161.html"
  },
  {
    "title": "终极三国2017",
    "genre": "科幻, 校园, 喜剧, 动作",
    "tags": "银时空, 跨次元, 三国改编, 异能",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2017",
    "cover": "./112.jpg",
    "url": "./movie-1162.html"
  },
  {
    "title": "神秘的亨利·皮克",
    "genre": "剧情 / 悬疑",
    "tags": "文学, 身份互换, 小镇, 出版社",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./113.jpg",
    "url": "./movie-1163.html"
  },
  {
    "title": "寂静风暴",
    "genre": "剧情, 灾难, 家庭",
    "tags": "台风, 聋人家庭, 撤离, 手语",
    "region": "中国台湾",
    "type": "电影",
    "year": "2020",
    "cover": "./114.jpg",
    "url": "./movie-1164.html"
  },
  {
    "title": "我就问你正常吗",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": "精神健康, 母女关系, 社会偏见",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./115.jpg",
    "url": "./movie-1165.html"
  },
  {
    "title": "尼维尔内来的美女",
    "genre": "爱情，剧情",
    "tags": "小镇，回忆，书信",
    "region": "法国/比利时",
    "type": "电影",
    "year": "2024",
    "cover": "./116.jpg",
    "url": "./movie-1166.html"
  },
  {
    "title": "荒草地",
    "genre": "悬疑、犯罪、乡村",
    "tags": "留守儿童、白骨、乡村秘事、沉默的真相",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "cover": "./117.jpg",
    "url": "./movie-1167.html"
  },
  {
    "title": "你是我心中的太阳",
    "genre": "爱情, 剧情, 家庭",
    "tags": "泰剧, 虐恋, 复仇, 豪门, 失明",
    "region": "泰国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./118.jpg",
    "url": "./movie-1168.html"
  },
  {
    "title": "黑鹰少年",
    "genre": "剧情, 运动",
    "tags": "棒球, 原住民, 励志, 真实改编, 父子",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./119.jpg",
    "url": "./movie-1169.html"
  },
  {
    "title": "承着灵魂前行",
    "genre": "奇幻，剧情",
    "tags": "西藏，转世，公路，信仰",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./120.jpg",
    "url": "./movie-1170.html"
  },
  {
    "title": "太阳之船",
    "genre": "科幻 / 冒险 / 灾难",
    "tags": "末世，方舟，阶级，人性，太阳风暴",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "cover": "./121.jpg",
    "url": "./movie-1171.html"
  },
  {
    "title": "幸运欧尼克斯和灵魂护身符",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": "魔法, 护身符, 命运, 成长",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2025",
    "cover": "./122.jpg",
    "url": "./movie-1172.html"
  },
  {
    "title": "销金艳窟",
    "genre": "悬疑、犯罪、年代",
    "tags": "日据时期、酒家女、复仇谜案",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "cover": "./123.jpg",
    "url": "./movie-1173.html"
  },
  {
    "title": "破碎的玻璃",
    "genre": "惊悚 / 悬疑 / 剧情",
    "tags": "玻璃厂, 失忆, 连环杀人, 反转, 人格分裂",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-1174.html"
  },
  {
    "title": "婚礼跑到趴",
    "genre": "喜剧、爱情",
    "tags": "婚礼灾难，婚前焦虑，疯狂冒险，好友组团",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./125.jpg",
    "url": "./movie-1175.html"
  },
  {
    "title": "鱿鱼仔的乡土生活第十季",
    "genre": "动画 / 喜剧",
    "tags": "成人动画, 乡村, 黑色幽默, 日常",
    "region": "美国",
    "type": "剧集",
    "year": "2022",
    "cover": "./126.jpg",
    "url": "./movie-1176.html"
  },
  {
    "title": "热干面的味道",
    "genre": "剧情 / 家庭",
    "tags": "武汉， 美食， 拆迁， 方言， 亲情",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./127.jpg",
    "url": "./movie-1177.html"
  },
  {
    "title": "镀金时代第三季",
    "genre": "剧情, 历史, 家庭",
    "tags": "纽约旧钱新贵, 阶级战争, 女性崛起",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./128.jpg",
    "url": "./movie-1178.html"
  },
  {
    "title": "续·社长洋行记",
    "genre": "剧情 / 年代",
    "tags": "民国, 商战, 中日合资, 文化冲突, 家族恩怨",
    "region": "中国大陆 / 日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./129.jpg",
    "url": "./movie-1179.html"
  },
  {
    "title": "当男人恋爱时",
    "genre": "爱情， 黑色喜剧",
    "tags": "高利贷， 催债， 绝症梗反转",
    "region": "韩国",
    "type": "电影",
    "year": "2018",
    "cover": "./130.jpg",
    "url": "./movie-1180.html"
  },
  {
    "title": "政坛旋风",
    "genre": "政治、惊悚、剧情",
    "tags": "总统竞选、暗箱操作、媒体战争",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./131.jpg",
    "url": "./movie-1181.html"
  },
  {
    "title": "童话镇第二季",
    "genre": "奇幻 / 剧情",
    "tags": "童话混搭, 平行世界, 反派洗白, 魔法衰退, 第二季",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./132.jpg",
    "url": "./movie-1182.html"
  },
  {
    "title": "窗户边有人",
    "genre": "悬疑 / 惊悚",
    "tags": "偷窥, 反转, 公寓恐怖, 心理战",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "cover": "./133.jpg",
    "url": "./movie-1183.html"
  },
  {
    "title": "我的罗曼蒂克",
    "genre": "爱情、剧情",
    "tags": "怀旧、书信、错过、文艺、治愈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./134.jpg",
    "url": "./movie-1184.html"
  },
  {
    "title": "公主与青蛙",
    "genre": "喜剧，爱情，奇幻",
    "tags": "迪士尼，反套路，身份互换，女权",
    "region": "美国",
    "type": "动画",
    "year": "2027",
    "cover": "./135.jpg",
    "url": "./movie-1185.html"
  },
  {
    "title": "百合心",
    "genre": "爱情悬疑 / 文艺剧情",
    "tags": "双女主, 旧友重逢, 记忆错位, 秘密信件, 温柔反转, 自我救赎",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "cover": "./136.jpg",
    "url": "./movie-1186.html"
  },
  {
    "title": "邪恶的蕾丝莉",
    "genre": "恐怖，惊悚",
    "tags": "心理恐怖，女性复仇，超自然，反转",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./137.jpg",
    "url": "./movie-1187.html"
  },
  {
    "title": "情天未老粤语",
    "genre": "家庭 / 年代",
    "tags": "粤语, 豪门, 恩怨, 怀旧, 亲情",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1997",
    "cover": "./138.jpg",
    "url": "./movie-1188.html"
  },
  {
    "title": "豪斯医生第三季",
    "genre": "剧情, 悬疑",
    "tags": "医学, 怪胎, 道德边缘, 疼痛",
    "region": "美国",
    "type": "剧集",
    "year": "2006",
    "cover": "./139.jpg",
    "url": "./movie-1189.html"
  },
  {
    "title": "战舰春光",
    "genre": "战争 / 家庭",
    "tags": "老兵, 回忆, 时光倒流",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./140.jpg",
    "url": "./movie-1190.html"
  },
  {
    "title": "再见王老五",
    "genre": "喜剧 / 爱情",
    "tags": "黄金剩男, 相亲闹剧, 中年危机, 港式幽默",
    "region": "中国香港",
    "type": "电影",
    "year": "1988",
    "cover": "./141.jpg",
    "url": "./movie-1191.html"
  },
  {
    "title": "战火情人",
    "genre": "战争 / 爱情",
    "tags": "抗战, 谍战, 生死恋",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./142.jpg",
    "url": "./movie-1192.html"
  },
  {
    "title": "幽灵肖像",
    "genre": "纪录片，历史",
    "tags": "城市记忆，老照片，殖民史，超自然",
    "region": "巴西",
    "type": "电影",
    "year": "2023",
    "cover": "./143.jpg",
    "url": "./movie-1193.html"
  },
  {
    "title": "红楼梦第二部：黛玉葬花",
    "genre": "戏曲 / 爱情 / 古装",
    "tags": "越剧, 经典, 悲剧, 林黛玉",
    "region": "中国",
    "type": "电影",
    "year": "1962",
    "cover": "./144.jpg",
    "url": "./movie-1194.html"
  },
  {
    "title": "加利福尼亚的皇帝",
    "genre": "剧情， 传记， 犯罪",
    "tags": "流浪汉， 自称皇帝， 旧金山， 真实故事， 精神分析",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./145.jpg",
    "url": "./movie-1195.html"
  },
  {
    "title": "顽皮豹之洋基涂鸦",
    "genre": "动画 / 喜剧",
    "tags": "经典IP重启，美式幽默，恶搞历史，合家欢",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./146.jpg",
    "url": "./movie-1196.html"
  },
  {
    "title": "东愁",
    "genre": "剧情/黑色幽默",
    "tags": "东北往事,回乡,时代变迁",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./147.jpg",
    "url": "./movie-1197.html"
  },
  {
    "title": "狂野分手团",
    "genre": "喜剧,爱情,冒险,成长",
    "tags": "关系修复,社交,重生,公路,轻喜剧,群像",
    "region": "中国",
    "type": "电影",
    "year": "2022",
    "cover": "./148.jpg",
    "url": "./movie-1198.html"
  },
  {
    "title": "风云儿女",
    "genre": "剧情, 历史",
    "tags": "抗战背景, 艺术救国, 左翼",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./149.jpg",
    "url": "./movie-1199.html"
  },
  {
    "title": "游轮上的圣诞节",
    "genre": "爱情喜剧悬疑",
    "tags": "暴风雪山庄, 假日限定, 前任重逢, 身份迷局",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "cover": "./150.jpg",
    "url": "./movie-1200.html"
  },
  {
    "title": "星际浩劫",
    "genre": "科幻, 灾难, 动作",
    "tags": "太空站, 虫洞, 引力异常, 生存, 空间扭曲",
    "region": "美国",
    "type": "电影",
    "year": "2028",
    "cover": "./1.jpg",
    "url": "./movie-1201.html"
  },
  {
    "title": "良辰吉日",
    "genre": "惊悚 / 悬疑",
    "tags": "中式恐怖, 民俗婚礼, 冥婚, 反转再反转",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./2.jpg",
    "url": "./movie-1202.html"
  },
  {
    "title": "伯尼",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": "人偶、朋友、自闭、治愈、友谊",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2025",
    "cover": "./3.jpg",
    "url": "./movie-1203.html"
  },
  {
    "title": "艳遇比赛2",
    "genre": "竞技喜剧, 娱乐讽刺, 都市题材",
    "tags": "综艺伦理, 流量经济, 社交实验, 女团, 真相曝光",
    "region": "中国大陆",
    "type": "喜剧电影",
    "year": "2023",
    "cover": "./4.jpg",
    "url": "./movie-1204.html"
  },
  {
    "title": "梦想战队",
    "genre": "竞技, 青春",
    "tags": "电竞, 轮椅篮球, 热血, 残疾人运动",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./5.jpg",
    "url": "./movie-1205.html"
  },
  {
    "title": "惊呼狂叫",
    "genre": "恐怖 / 悬疑 / 惊悚",
    "tags": "声音恐惧, 直播恐怖, 都市怪谈, 反转结局, 不可描述之声",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "cover": "./6.jpg",
    "url": "./movie-1206.html"
  },
  {
    "title": "我们在此消失",
    "genre": "科幻 / 悬疑 / 剧情",
    "tags": "小镇, 失踪, 环保, 时间悖论",
    "region": "德国",
    "type": "电影",
    "year": "2026",
    "cover": "./7.jpg",
    "url": "./movie-1207.html"
  },
  {
    "title": "最佳出价",
    "genre": "剧情, 悬疑, 爱情",
    "tags": "拍卖师, 赝品大师, 假戏真做, 孤独终局",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "cover": "./8.jpg",
    "url": "./movie-1208.html"
  },
  {
    "title": "拇指仙童",
    "genre": "奇幻、奇缘、冒险",
    "tags": "拇指人、失明、工厂、地下网络、亲情",
    "region": "中国大陆",
    "type": "奇幻冒险电影",
    "year": "2026",
    "cover": "./9.jpg",
    "url": "./movie-1209.html"
  },
  {
    "title": "泣血四月",
    "genre": "战争, 历史",
    "tags": "种族冲突, 真实改编, 悲壮",
    "region": "亚美尼亚 / 俄罗斯",
    "type": "电影",
    "year": "2018",
    "cover": "./10.jpg",
    "url": "./movie-1210.html"
  },
  {
    "title": "美味奇缘",
    "genre": "爱情喜剧",
    "tags": "美食, 欢喜冤家, 傲娇男主, 泰式偶像剧",
    "region": "泰国",
    "type": "剧集",
    "year": "2017",
    "cover": "./11.jpg",
    "url": "./movie-1211.html"
  },
  {
    "title": "萨蒂亚",
    "genre": "剧情, 悬疑, 犯罪",
    "tags": "低种姓, 抗争, 黑色电影, 复仇",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "cover": "./12.jpg",
    "url": "./movie-1212.html"
  },
  {
    "title": "春花秋月未了情",
    "genre": "爱情、剧情、文艺",
    "tags": "琼瑶式、苦情、三角恋、时代悲歌",
    "region": "中国台湾",
    "type": "电影",
    "year": "1975",
    "cover": "./13.jpg",
    "url": "./movie-1213.html"
  },
  {
    "title": "克里斯托弗·罗宾",
    "genre": "剧情, 喜剧, 奇幻",
    "tags": "小熊维尼, 真人版, 中年危机, 怀旧, 治愈",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "cover": "./14.jpg",
    "url": "./movie-1214.html"
  },
  {
    "title": "宜家之鼠3：金钻鼠王",
    "genre": "动画，冒险，家庭",
    "tags": "拟人老鼠，北欧神话，家具冒险",
    "region": "瑞典/美国",
    "type": "动画电影",
    "year": "2026",
    "cover": "./15.jpg",
    "url": "./movie-1215.html"
  },
  {
    "title": "卡玛萨",
    "genre": "歌舞, 动作",
    "tags": "复仇, 种姓制度, 史诗, 舞蹈",
    "region": "印度",
    "type": "电影",
    "year": "2022",
    "cover": "./16.jpg",
    "url": "./movie-1216.html"
  },
  {
    "title": "印度糖果与香料",
    "genre": "剧情喜剧",
    "tags": "美食, 移民家庭, 代际和解, 温暖治愈",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "cover": "./17.jpg",
    "url": "./movie-1217.html"
  },
  {
    "title": "杜公馆",
    "genre": "悬疑 / 历史 / 恐怖",
    "tags": "民国, 凶宅, 军阀, 悬疑, 民俗恐怖",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./18.jpg",
    "url": "./movie-1218.html"
  },
  {
    "title": "上帝是更大的猫王",
    "genre": "剧情 / 音乐 / 黑色幽默",
    "tags": "摇滚, 信仰, 乡村牧师, 偶像崇拜, 救赎",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./19.jpg",
    "url": "./movie-1219.html"
  },
  {
    "title": "小英雄对大刺客",
    "genre": "动画 / 动作 / 冒险",
    "tags": "国风武侠, 少年英雄, 非典型反派, 反转, 成长",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./20.jpg",
    "url": "./movie-1220.html"
  },
  {
    "title": "一路惊骑",
    "genre": "喜剧 / 公路 / 冒险",
    "tags": "骑行, 川藏线, 直播, 网红, 乌龙事件",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./21.jpg",
    "url": "./movie-1221.html"
  },
  {
    "title": "克里夫兰秀第四季",
    "genre": "动画, 喜剧",
    "tags": "成人动画, 家庭, 恶搞",
    "region": "美国",
    "type": "剧集",
    "year": "2012",
    "cover": "./22.jpg",
    "url": "./movie-1222.html"
  },
  {
    "title": "殊途同归",
    "genre": "悬疑, 犯罪",
    "tags": "双男主, 宿命, 罪案",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./23.jpg",
    "url": "./movie-1223.html"
  },
  {
    "title": "间谍俏辣媚",
    "genre": "动作, 喜剧, 谍战",
    "tags": "女特工, 变身卧底, 港式无厘头, 黑帮",
    "region": "香港",
    "type": "电影",
    "year": "2024",
    "cover": "./24.jpg",
    "url": "./movie-1224.html"
  },
  {
    "title": "当比约克遇上爱丁堡",
    "genre": "音乐 / 纪录片 / 奇幻",
    "tags": "比约克, 爱丁堡, 音乐节, 自然之声, 实验音乐",
    "region": "英国",
    "type": "纪录片",
    "year": "2025",
    "cover": "./25.jpg",
    "url": "./movie-1225.html"
  },
  {
    "title": "火力少年王3",
    "genre": "剧情, 运动, 青春",
    "tags": "悠悠球, 竞技, 热血, 传承",
    "region": "中国",
    "type": "电视剧",
    "year": "2026",
    "cover": "./26.jpg",
    "url": "./movie-1226.html"
  },
  {
    "title": "羊城风暴",
    "genre": "动作, 犯罪",
    "tags": "广州, 卧底, 黑帮, 枪战, 兄弟情",
    "region": "中国大陆",
    "type": "电影",
    "year": "1995",
    "cover": "./27.jpg",
    "url": "./movie-1227.html"
  },
  {
    "title": "妈妈加我等于十",
    "genre": "家庭，悬疑，伦理",
    "tags": "数字谜题，代际创伤，失踪，人性",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "cover": "./28.jpg",
    "url": "./movie-1228.html"
  },
  {
    "title": "乱马1/2",
    "genre": "喜剧",
    "tags": "格斗，变身，咒泉乡，婚约，无厘头",
    "region": "日本",
    "type": "动画",
    "year": "2024",
    "cover": "./29.jpg",
    "url": "./movie-1229.html"
  },
  {
    "title": "机器人总动员",
    "genre": "科幻",
    "tags": "机甲, 废土, AI觉醒",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "cover": "./30.jpg",
    "url": "./movie-1230.html"
  },
  {
    "title": "达拉斯玩偶",
    "genre": "恐怖/惊悚",
    "tags": "诅咒玩偶, 德州, 密室, 民俗恐怖",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./31.jpg",
    "url": "./movie-1231.html"
  },
  {
    "title": "极乐夜生活",
    "genre": "喜剧, 剧情, 爱情",
    "tags": "一夜情, 婚姻危机, 黑白与彩色, 城市漫游",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./32.jpg",
    "url": "./movie-1232.html"
  },
  {
    "title": "中国地",
    "genre": "历史 / 战争",
    "tags": "抗日战争, 东北, 民间抵抗, 真实改编, 硬核",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./33.jpg",
    "url": "./movie-1233.html"
  },
  {
    "title": "绅士与淑女",
    "genre": "爱情，喜剧，剧情",
    "tags": "英伦，阶级，身份错位，优雅",
    "region": "英国",
    "type": "电影",
    "year": "2014",
    "cover": "./34.jpg",
    "url": "./movie-1234.html"
  },
  {
    "title": "黑夏第二季",
    "genre": "动作， 恐怖， 生存",
    "tags": "丧尸， 末日， 军事， 逃亡， 生存法则",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./35.jpg",
    "url": "./movie-1235.html"
  },
  {
    "title": "美丽人生2023",
    "genre": "剧情/战争",
    "tags": "父爱, 二战, 重生, 小人物, 黑色幽默",
    "region": "意大利/美国",
    "type": "电影",
    "year": "2023",
    "cover": "./36.jpg",
    "url": "./movie-1236.html"
  },
  {
    "title": "斩将夺神录",
    "genre": "奇幻 / 动作 / 神话",
    "tags": "上古战争, 神将叛变, 术法对决, 史诗冒险, 群像征途",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./37.jpg",
    "url": "./movie-1237.html"
  },
  {
    "title": "怦然心动的保罗整理魔法",
    "genre": "剧情, 奇幻, 治愈",
    "tags": "整理收纳, 治愈系, 断舍离, 人生重启",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./38.jpg",
    "url": "./movie-1238.html"
  },
  {
    "title": "黑客军团",
    "genre": "悬疑 / 犯罪",
    "tags": "黑客，反乌托邦，暗网，心理战",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./39.jpg",
    "url": "./movie-1239.html"
  },
  {
    "title": "最后生还者第二季",
    "genre": "动作、剧情、惊悚",
    "tags": "末世求生、人性拷问、父女情、复仇、感染者进化",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./40.jpg",
    "url": "./movie-1240.html"
  },
  {
    "title": "高度潜力",
    "genre": "剧情， 悬疑， 犯罪",
    "tags": "高智商， 清洁工， 警探搭档， 冷案破解",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./41.jpg",
    "url": "./movie-1241.html"
  },
  {
    "title": "换爱四人组",
    "genre": "爱情, 悬疑, 都市",
    "tags": "互换伴侣, 游戏, 心理战, 多角恋",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./42.jpg",
    "url": "./movie-1242.html"
  },
  {
    "title": "狂怒！",
    "genre": "动作 / 惊悚 / 犯罪",
    "tags": "复仇, 地下拳场, 暴力美学, 底层反击",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "cover": "./43.jpg",
    "url": "./movie-1243.html"
  },
  {
    "title": "刀光魅影",
    "genre": "动作 / 武侠",
    "tags": "女杀手 双胞胎 复仇 民国 旗袍",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "cover": "./44.jpg",
    "url": "./movie-1244.html"
  },
  {
    "title": "新荡寇志",
    "genre": "动作, 古装",
    "tags": "水浒, 改编, 武术, 热血",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "cover": "./45.jpg",
    "url": "./movie-1245.html"
  },
  {
    "title": "全息游戏：恋爱世界",
    "genre": "爱情，科幻，剧情",
    "tags": "全息游戏，虚拟恋爱，现实逃避，治愈，选择",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./46.jpg",
    "url": "./movie-1246.html"
  },
  {
    "title": "越域重生 国语版",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": "越狱, 卧底, 极限反杀, 悬疑",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "year": "2019",
    "cover": "./47.jpg",
    "url": "./movie-1247.html"
  },
  {
    "title": "极度失眠",
    "genre": "心理惊悚",
    "tags": "失眠, 幻觉, 极昼, 心理崩溃, 北欧",
    "region": "挪威",
    "type": "电影",
    "year": "2024",
    "cover": "./48.jpg",
    "url": "./movie-1248.html"
  },
  {
    "title": "最终幻想15：王者之剑",
    "genre": "动画, 动作, 奇幻",
    "tags": "视觉特效, 魔法, 王室, 战斗",
    "region": "日本",
    "type": "电影",
    "year": "2016",
    "cover": "./49.jpg",
    "url": "./movie-1249.html"
  },
  {
    "title": "公牛犹斗",
    "genre": "剧情, 运动",
    "tags": "斗牛士, 父子, 传统, 救赎",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "cover": "./50.jpg",
    "url": "./movie-1250.html"
  },
  {
    "title": "海魂",
    "genre": "战争/历史",
    "tags": "海军, 抗战, 沉船",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./51.jpg",
    "url": "./movie-1251.html"
  },
  {
    "title": "终极目标2003",
    "genre": "动作, 犯罪",
    "tags": "卧底, 反恐, 爆炸, 兄弟情",
    "region": "中国大陆",
    "type": "电影",
    "year": "2003",
    "cover": "./52.jpg",
    "url": "./movie-1252.html"
  },
  {
    "title": "亲爱的小小忧愁",
    "genre": "剧情， 家庭",
    "tags": "成长， 童年， 亲子关系， 治愈",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./53.jpg",
    "url": "./movie-1253.html"
  },
  {
    "title": "特快达阵",
    "genre": "运动 / 剧情",
    "tags": "橄榄球, 励志, 真实事件改编, 草根",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./54.jpg",
    "url": "./movie-1254.html"
  },
  {
    "title": "敲",
    "genre": "惊悚，恐怖",
    "tags": "密室，声效恐怖，心理压迫",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./55.jpg",
    "url": "./movie-1255.html"
  },
  {
    "title": "必杀第四号",
    "genre": "动作 / 历史 / 武士",
    "tags": "时代剧， 杀手列传， 复仇悲歌， 剑戟片， 暴刀美学",
    "region": "日本",
    "type": "电影",
    "year": "1972",
    "cover": "./56.jpg",
    "url": "./movie-1256.html"
  },
  {
    "title": "战俘的逃亡日记",
    "genre": "战争 / 惊悚 / 传记",
    "tags": "二战, 战俘营, 越狱, 第一人称, 纪实感",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "cover": "./57.jpg",
    "url": "./movie-1257.html"
  },
  {
    "title": "征信暴情",
    "genre": "犯罪， 悬疑",
    "tags": "征信， 复仇， 数据勒索， 黑色电影",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./58.jpg",
    "url": "./movie-1258.html"
  },
  {
    "title": "第十三条修正案",
    "genre": "科幻 / 惊悚 / 政治",
    "tags": "奴隶制, 人工智能, 宪法, 反抗军, 赛博朋克",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./59.jpg",
    "url": "./movie-1259.html"
  },
  {
    "title": "新郎没有房间",
    "genre": "剧情/家庭",
    "tags": "婚礼, 婆媳, 买房, 台北",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./60.jpg",
    "url": "./movie-1260.html"
  },
  {
    "title": "宝藏女王",
    "genre": "剧情， 悬疑， 历史",
    "tags": "寻宝， 王室， 女性力量， 盗墓， 日据时期",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./61.jpg",
    "url": "./movie-1261.html"
  },
  {
    "title": "非常接触",
    "genre": "剧情 / 家庭 / 伦理",
    "tags": "失散兄妹, 错位人生, 血缘谜团",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2002",
    "cover": "./62.jpg",
    "url": "./movie-1262.html"
  },
  {
    "title": "武魂大陆",
    "genre": "动画, 奇幻",
    "tags": "玄幻, 热血, 战斗, 修仙, 3D",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./63.jpg",
    "url": "./movie-1263.html"
  },
  {
    "title": "面包师傅的妻子",
    "genre": "喜剧, 剧情, 爱情",
    "tags": "经典, 乡村, 人性",
    "region": "法国",
    "type": "电影",
    "year": "1938",
    "cover": "./64.jpg",
    "url": "./movie-1264.html"
  },
  {
    "title": "纳粹的攻击",
    "genre": "历史 / 科幻 / 战争",
    "tags": "架空历史, 时间穿越, 纳粹, 暗黑, 逆转",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "cover": "./65.jpg",
    "url": "./movie-1265.html"
  },
  {
    "title": "致梦想",
    "genre": "剧情, 励志",
    "tags": "创业, 互联网, 90后, 奋斗, 时代",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./66.jpg",
    "url": "./movie-1266.html"
  },
  {
    "title": "26种死法2",
    "genre": "恐怖 / 惊悚 / 实验",
    "tags": "字母表，短片集，创意杀戮",
    "region": "美国 / 加拿大",
    "type": "电影",
    "year": "2017",
    "cover": "./67.jpg",
    "url": "./movie-1267.html"
  },
  {
    "title": "湿地",
    "genre": "剧情 / 情色",
    "tags": "身体, 叛逆, 女性",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "cover": "./68.jpg",
    "url": "./movie-1268.html"
  },
  {
    "title": "鬼娘子",
    "genre": "恐怖 / 爱情 / 民俗",
    "tags": "冥婚, 蛊术, 还魂, 乡村秘俗",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "cover": "./69.jpg",
    "url": "./movie-1269.html"
  },
  {
    "title": "极恶非道2",
    "genre": "动作，犯罪",
    "tags": "黑帮，血腥复仇，权力斗争",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./70.jpg",
    "url": "./movie-1270.html"
  },
  {
    "title": "何塞·马蒂：金丝雀的眼睛",
    "genre": "传记, 历史, 战争",
    "tags": "革命者, 诗人, 古巴独立, 政治",
    "region": "古巴",
    "type": "电影",
    "year": "2025",
    "cover": "./71.jpg",
    "url": "./movie-1271.html"
  },
  {
    "title": "危情杀机",
    "genre": "悬疑 / 爱情 / 犯罪",
    "tags": "商战, 算计, 反转, 全员恶人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2017",
    "cover": "./72.jpg",
    "url": "./movie-1272.html"
  },
  {
    "title": "难以抗拒的温柔",
    "genre": "爱情 / 剧情 / 悬疑",
    "tags": "情感操控, 记忆篡改, 虐恋",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "cover": "./73.jpg",
    "url": "./movie-1273.html"
  },
  {
    "title": "带子狼 在那双小手中",
    "genre": "剧情 / 动作",
    "tags": "父子, 复仇, 武士, 温情",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "cover": "./74.jpg",
    "url": "./movie-1274.html"
  },
  {
    "title": "突围",
    "genre": "战争, 历史",
    "tags": "湘西, 抗战, 土匪, 国共, 丛林战",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2010",
    "cover": "./75.jpg",
    "url": "./movie-1275.html"
  },
  {
    "title": "画江湖之换世门生第一季",
    "genre": "动画， 奇幻， 悬疑",
    "tags": "异世界， 江湖， 宿命， 二元对立",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "cover": "./76.jpg",
    "url": "./movie-1276.html"
  },
  {
    "title": "狼人游戏",
    "genre": "悬疑、喜剧、恐怖",
    "tags": "桌游杀人、暴风雪山庄、全员嫌疑人",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./77.jpg",
    "url": "./movie-1277.html"
  },
  {
    "title": "我们的小镇",
    "genre": "科幻悬疑",
    "tags": "小镇, 克隆, 阴谋, 细思极恐",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./78.jpg",
    "url": "./movie-1278.html"
  },
  {
    "title": "艳曲迷魂",
    "genre": "歌舞 / 爱情 / 喜剧",
    "tags": "周璇，时代曲，错位，女扮男装，老上海",
    "region": "香港",
    "type": "电影",
    "year": "1949",
    "cover": "./79.jpg",
    "url": "./movie-1279.html"
  },
  {
    "title": "伯特·克赖舍：秘密时间",
    "genre": "喜剧",
    "tags": "单口， 爆料， 社恐",
    "region": "美国",
    "type": "脱口秀/单口喜剧",
    "year": "2024",
    "cover": "./80.jpg",
    "url": "./movie-1280.html"
  },
  {
    "title": "俗女养成记闽南语版",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": "方言剧, 大龄女性, 返乡故事, 生活哲学",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2022",
    "cover": "./81.jpg",
    "url": "./movie-1281.html"
  },
  {
    "title": "梅格雷的亡者",
    "genre": "悬疑, 犯罪",
    "tags": "侦探, 经典改编, 冷峻, 法式, 人性",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./82.jpg",
    "url": "./movie-1282.html"
  },
  {
    "title": "活宝",
    "genre": "喜剧",
    "tags": "无厘头, 市井, 小人物, 港味",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "cover": "./83.jpg",
    "url": "./movie-1283.html"
  },
  {
    "title": "当地怪物：租借和杀戮",
    "genre": "恐怖 / 科幻",
    "tags": "都市传说, 黑市交易, 生存游戏, 血腥",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./84.jpg",
    "url": "./movie-1284.html"
  },
  {
    "title": "希望与反抗",
    "genre": "战争历史",
    "tags": "二战, 白玫瑰, 牺牲",
    "region": "德国",
    "type": "电影",
    "year": "2023",
    "cover": "./85.jpg",
    "url": "./movie-1285.html"
  },
  {
    "title": "唐顿庄园：盛世终章",
    "genre": "剧情, 历史",
    "tags": "英伦, 贵族, 传承, 时代剧",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./86.jpg",
    "url": "./movie-1286.html"
  },
  {
    "title": "不惑之旅",
    "genre": "剧情、公路",
    "tags": "中年、顺风车、离婚、自驾、疗伤",
    "region": "中国内地",
    "type": "电影",
    "year": "2025",
    "cover": "./87.jpg",
    "url": "./movie-1287.html"
  },
  {
    "title": "裁员危机",
    "genre": "剧情 / 职场",
    "tags": "互联网大厂, 中年危机, 办公室政治, 逆袭",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "cover": "./88.jpg",
    "url": "./movie-1288.html"
  },
  {
    "title": "冰是睡着的水",
    "genre": "谍战 / 年代",
    "tags": "国安， 卧底， 信仰， 情感， 烧脑",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "cover": "./89.jpg",
    "url": "./movie-1289.html"
  },
  {
    "title": "樱桃的滋味",
    "genre": "剧情 / 文艺 / 公路",
    "tags": "存在主义, 城市边缘, 夜行寻人, 生死抉择, 沉默对话",
    "region": "伊朗",
    "type": "电影",
    "year": "1997",
    "cover": "./90.jpg",
    "url": "./movie-1290.html"
  },
  {
    "title": "自从你之后",
    "genre": "爱情 / 悬疑",
    "tags": "替身, 失忆, 商战, 虐恋",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2023",
    "cover": "./91.jpg",
    "url": "./movie-1291.html"
  },
  {
    "title": "水龙吟",
    "genre": "古装/武侠/悬疑",
    "tags": "江湖恩怨，朝堂权谋，神秘组织，反转",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "cover": "./92.jpg",
    "url": "./movie-1292.html"
  },
  {
    "title": "我和我",
    "genre": "科幻, 心理, 悬疑",
    "tags": "平行宇宙, 自我对抗, 硬科幻, 身份认同",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./93.jpg",
    "url": "./movie-1293.html"
  },
  {
    "title": "小谢尔顿第三季",
    "genre": "喜剧 / 家庭",
    "tags": "天才少年, 德州家庭, 成长烦恼",
    "region": "美国",
    "type": "电视剧",
    "year": "2019",
    "cover": "./94.jpg",
    "url": "./movie-1294.html"
  },
  {
    "title": "芭比之公主的力量",
    "genre": "动画, 奇幻, 冒险",
    "tags": "女英雄, 超能力, 公主不等待拯救",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "cover": "./95.jpg",
    "url": "./movie-1295.html"
  },
  {
    "title": "兰博基尼",
    "genre": "传记 / 运动",
    "tags": "跑车, 对决, 热血",
    "region": "意大利 / 美国",
    "type": "电影",
    "year": "2025",
    "cover": "./96.jpg",
    "url": "./movie-1296.html"
  },
  {
    "title": "回声谷",
    "genre": "悬疑 / 剧情",
    "tags": "山村, 失踪, 声学, 记忆, 复仇",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./97.jpg",
    "url": "./movie-1297.html"
  },
  {
    "title": "王牌部队",
    "genre": "军旅 / 动作",
    "tags": "特种兵, 训练, 成长, 热血, 兄弟情",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "cover": "./98.jpg",
    "url": "./movie-1298.html"
  },
  {
    "title": "白日梦外送王",
    "genre": "奇幻 / 喜剧",
    "tags": "外卖员, 超能力, 都市寓言",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./99.jpg",
    "url": "./movie-1299.html"
  },
  {
    "title": "大力水手和四十大盗",
    "genre": "喜剧 / 动作 / 冒险",
    "tags": "经典改编, 阿拉伯, 菠菜, 反转英雄, 盗贼",
    "region": "美国",
    "type": "动画电影",
    "year": "2024",
    "cover": "./100.jpg",
    "url": "./movie-1300.html"
  },
  {
    "title": "贴身女保镖",
    "genre": "动作，犯罪，惊悚",
    "tags": "女性保镖，财阀阴谋，近身格斗，复仇，聋哑设定",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./101.jpg",
    "url": "./movie-1301.html"
  },
  {
    "title": "神国的奥秘",
    "genre": "悬疑, 宗教",
    "tags": "教会, 符号学, 秘密社团, 探案",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./102.jpg",
    "url": "./movie-1302.html"
  },
  {
    "title": "说不出的邪恶",
    "genre": "恐怖, 心理惊悚",
    "tags": "民俗恐怖, 口舌之罪, 小镇, 诅咒",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "cover": "./103.jpg",
    "url": "./movie-1303.html"
  },
  {
    "title": "直美与加奈子",
    "genre": "悬疑 / 家庭 / 犯罪",
    "tags": "共同逃亡, 家庭暴力, 女性同盟, 道德困境, 身份重写",
    "region": "日本",
    "type": "日剧",
    "year": "2016",
    "cover": "./104.jpg",
    "url": "./movie-1304.html"
  },
  {
    "title": "斗牛犬之女",
    "genre": "动作、犯罪",
    "tags": "黑帮家族、女性复仇、暴力美学、宿命对抗",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./105.jpg",
    "url": "./movie-1305.html"
  },
  {
    "title": "绑架地球人",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": "外星人, 反套路, 记忆植入, 小成本, 烧脑",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./106.jpg",
    "url": "./movie-1306.html"
  },
  {
    "title": "家庭录像",
    "genre": "恐怖, 悬疑, 伪纪录片",
    "tags": "家庭DV, 邪教, 录像带, 细思极恐",
    "region": "西班牙",
    "type": "电影",
    "year": "2026",
    "cover": "./107.jpg",
    "url": "./movie-1307.html"
  },
  {
    "title": "假面真情2024",
    "genre": "喜剧 / 剧情 / 爱情",
    "tags": "骗局，替身，戛纳",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./108.jpg",
    "url": "./movie-1308.html"
  },
  {
    "title": "在公交车站直到天明",
    "genre": "剧情 / 社会",
    "tags": "社会边缘, 女性贫困, 真实改编",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./109.jpg",
    "url": "./movie-1309.html"
  },
  {
    "title": "人生切割术第二季",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": "记忆分割、职场黑暗、反乌托邦、卢蒙公司、意识革命",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "cover": "./110.jpg",
    "url": "./movie-1310.html"
  },
  {
    "title": "梦约星期天",
    "genre": "爱情奇幻",
    "tags": "梦境共享, 治愈, 错过, 纯爱",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./111.jpg",
    "url": "./movie-1311.html"
  },
  {
    "title": "孤城客粤语",
    "genre": "武侠, 悬疑, 权谋",
    "tags": "末世武侠, 围城, 瘟疫, 人性实验, 粤语原声",
    "region": "中国香港",
    "type": "剧集",
    "year": "2023",
    "cover": "./112.jpg",
    "url": "./movie-1312.html"
  },
  {
    "title": "地心记",
    "genre": "科幻冒险",
    "tags": "地心探险, 恐龙世界, 失落的文明, 岩浆逃生",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "cover": "./113.jpg",
    "url": "./movie-1313.html"
  },
  {
    "title": "四海小兄弟",
    "genre": "剧情 / 犯罪 / 年代",
    "tags": "90年代，南方小镇，四人兄弟，黑帮卧底，成长代价",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "cover": "./114.jpg",
    "url": "./movie-1314.html"
  },
  {
    "title": "灵犀一点通",
    "genre": "奇幻、爱情、悬疑、都市",
    "tags": "心灵感应,误会,破案,职场,救赎,双向奔赴",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "cover": "./115.jpg",
    "url": "./movie-1315.html"
  },
  {
    "title": "血荐轩辕粤语",
    "genre": "古装 / 武侠",
    "tags": "复仇, 锦衣卫, 家国情仇",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2004",
    "cover": "./116.jpg",
    "url": "./movie-1316.html"
  },
  {
    "title": "嫲烦家族3 走佬阿嫂",
    "genre": "喜剧/家庭",
    "tags": "家庭伦理, 大嫂出走, 黑色幽默, 粤语喜剧, 养老问题",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./117.jpg",
    "url": "./movie-1317.html"
  },
  {
    "title": "周日好朋友",
    "genre": "喜剧 / 剧情",
    "tags": "法式幽默， 友谊， 中年危机",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./118.jpg",
    "url": "./movie-1318.html"
  },
  {
    "title": "万古剑神2021",
    "genre": "玄幻, 动作, 冒险",
    "tags": "剑道, 逆袭, 宗门, 热血修行",
    "region": "中国",
    "type": "动画剧集",
    "year": "2021",
    "cover": "./119.jpg",
    "url": "./movie-1319.html"
  },
  {
    "title": "夺命穿心／沉默的进击",
    "genre": "悬疑, 动作, 刑侦",
    "tags": "连环杀手, 法医, 冷兵器, 双雄",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2025",
    "cover": "./120.jpg",
    "url": "./movie-1320.html"
  },
  {
    "title": "宝莲灯粤语",
    "genre": "动画，奇幻，家庭",
    "tags": "神话改编，粤语配音版，沉香救母，亲情，国风美学",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./121.jpg",
    "url": "./movie-1321.html"
  },
  {
    "title": "暗夜魅惑",
    "genre": "悬疑 / 爱情 / 犯罪",
    "tags": "都市夜色, 欲望迷局, 身份伪装, 双线反转, 黑色美学, 情感陷阱",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./122.jpg",
    "url": "./movie-1322.html"
  },
  {
    "title": "佐利的成长",
    "genre": "剧情、喜剧",
    "tags": "儿童、成长、友情、奇幻、治愈",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./123.jpg",
    "url": "./movie-1323.html"
  },
  {
    "title": "借镜杀人",
    "genre": "悬疑、犯罪、推理",
    "tags": "阿加莎、马普尔小姐、庄园谋杀、镜像诡计、复古风",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-1324.html"
  },
  {
    "title": "玉屏风",
    "genre": "古装悬疑",
    "tags": "中药, 奇案, 明朝",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./125.jpg",
    "url": "./movie-1325.html"
  },
  {
    "title": "马戏情潮",
    "genre": "年代, 爱情",
    "tags": "民国, 马戏, 虐恋",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "cover": "./126.jpg",
    "url": "./movie-1326.html"
  },
  {
    "title": "八零小辣椒",
    "genre": "剧情， 家庭",
    "tags": "年代， 女性成长， 励志， 怀旧",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./127.jpg",
    "url": "./movie-1327.html"
  },
  {
    "title": "大搏杀",
    "genre": "动作, 犯罪, 惊悚, 黑帮",
    "tags": "码头火并, 双面卧底, 旧港霓虹, 兄弟反目, 生死赌局",
    "region": "中国香港",
    "type": "动作犯罪片",
    "year": "1988",
    "cover": "./128.jpg",
    "url": "./movie-1328.html"
  },
  {
    "title": "90分钟",
    "genre": "动作 / 惊悚 / 犯罪",
    "tags": "倒计时, 抢劫, 人质, 极限时间, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2012",
    "cover": "./129.jpg",
    "url": "./movie-1329.html"
  },
  {
    "title": "野生动物宝宝 第一季",
    "genre": "纪录片, 儿童",
    "tags": "动物幼崽, 自然, 启蒙, 治愈",
    "region": "英国",
    "type": "电视剧",
    "year": "2023",
    "cover": "./130.jpg",
    "url": "./movie-1330.html"
  },
  {
    "title": "奥客嘉",
    "genre": "喜剧, 剧情",
    "tags": "服务业, 客户投诉, 荒诞, 现代病",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "cover": "./131.jpg",
    "url": "./movie-1331.html"
  },
  {
    "title": "八十龟酱观察日记第二季",
    "genre": "喜剧 / 日常",
    "tags": "泡面番, 名古屋, 方言, 萌系",
    "region": "日本",
    "type": "动画",
    "year": "2024",
    "cover": "./132.jpg",
    "url": "./movie-1332.html"
  },
  {
    "title": "保镳",
    "genre": "动作 / 悬疑 / 剧情",
    "tags": "保镖, 职场, 悬疑, 港剧, 贴身保护",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "cover": "./133.jpg",
    "url": "./movie-1333.html"
  },
  {
    "title": "同女之舞",
    "genre": "爱情 / 剧情 / 舞蹈 / LGBT",
    "tags": "女同, 芭蕾, 替身, 艺术",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./134.jpg",
    "url": "./movie-1334.html"
  },
  {
    "title": "童党万岁",
    "genre": "剧情 / 青春",
    "tags": "屋邨, 童年友情, 社会变迁, 成长疼痛",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "cover": "./135.jpg",
    "url": "./movie-1335.html"
  },
  {
    "title": "少壮屠龙阵",
    "genre": "西部动作",
    "tags": "西部, 动作, 热血, 复仇",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./136.jpg",
    "url": "./movie-1336.html"
  },
  {
    "title": "2019天猫双十一狂欢夜",
    "genre": "歌舞 / 真人秀",
    "tags": "直播事故, 后台解密, 购物节",
    "region": "中国",
    "type": "综艺/晚会",
    "year": "2019",
    "cover": "./137.jpg",
    "url": "./movie-1337.html"
  },
  {
    "title": "举报者",
    "genre": "剧情 / 犯罪",
    "tags": "反腐, 悬疑, 人性",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./138.jpg",
    "url": "./movie-1338.html"
  },
  {
    "title": "雪恋三部曲",
    "genre": "爱情，剧情",
    "tags": "冬日恋歌，宿命轮回，初恋，失忆，治愈",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./139.jpg",
    "url": "./movie-1339.html"
  },
  {
    "title": "指间的重量",
    "genre": "剧情 / 犯罪",
    "tags": "盲人, 诈骗, 黑吃黑, 指关节记忆, 复仇",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./140.jpg",
    "url": "./movie-1340.html"
  },
  {
    "title": "死寂逃亡",
    "genre": "恐怖， 科幻",
    "tags": "无声， 怪物， 末世， 生存",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./141.jpg",
    "url": "./movie-1341.html"
  },
  {
    "title": "主播日记",
    "genre": "悬疑, 剧情",
    "tags": "直播, 网络暴力, 反转, 社会派, 职场",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "cover": "./142.jpg",
    "url": "./movie-1342.html"
  },
  {
    "title": "宝剑明珠",
    "genre": "武侠 / 古装",
    "tags": "邵氏, 经典, 江湖, 夺宝, 侠女",
    "region": "中国香港",
    "type": "电影",
    "year": "1967",
    "cover": "./143.jpg",
    "url": "./movie-1343.html"
  },
  {
    "title": "木鸢迷踪",
    "genre": "悬疑, 古装",
    "tags": "机关术, 鲁班, 盗墓, 解谜",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./144.jpg",
    "url": "./movie-1344.html"
  },
  {
    "title": "你的降临",
    "genre": "爱情 / 科幻",
    "tags": "时间穿越，宿命，治愈",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "cover": "./145.jpg",
    "url": "./movie-1345.html"
  },
  {
    "title": "小魔女学园",
    "genre": "奇幻动画",
    "tags": "魔法，校园，成长，友情，热血",
    "region": "日本",
    "type": "剧集",
    "year": "2017",
    "cover": "./146.jpg",
    "url": "./movie-1346.html"
  },
  {
    "title": "黑吃黑第一季",
    "genre": "动作 / 剧情 / 犯罪",
    "tags": "暴力, 情色, 复仇, 小镇, 硬汉",
    "region": "美国",
    "type": "剧集",
    "year": "2013",
    "cover": "./147.jpg",
    "url": "./movie-1347.html"
  },
  {
    "title": "失踪禁地第二季",
    "genre": "悬疑, 科幻, 惊悚",
    "tags": "超自然现象, 政府阴谋, 时空循环, survival, 失踪人口",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./148.jpg",
    "url": "./movie-1348.html"
  },
  {
    "title": "道场",
    "genre": "剧情 / 动作 / 哲学",
    "tags": "剑道, 师徒, 传承, 中年危机, 极简主义",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "cover": "./149.jpg",
    "url": "./movie-1349.html"
  },
  {
    "title": "黄昏的优作",
    "genre": "剧情, 美食, 生活",
    "tags": "治愈, 中年危机, 人生重启",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./150.jpg",
    "url": "./movie-1350.html"
  },
  {
    "title": "唐顿庄园第六季",
    "genre": "剧情历史",
    "tags": "英伦, 贵族, 时代变迁, 群像, 终章",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./1.jpg",
    "url": "./movie-1351.html"
  },
  {
    "title": "真相吧！花花万物",
    "genre": "悬疑、喜剧、科幻",
    "tags": "虚拟现实、物证会说话、赛博朋克",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./2.jpg",
    "url": "./movie-1352.html"
  },
  {
    "title": "野兽家族第四季",
    "genre": "犯罪, 剧情, 家庭",
    "tags": "黑帮, 家族, 背叛, 权力游戏, 犯罪史诗",
    "region": "美国",
    "type": "剧集",
    "year": "2019",
    "cover": "./3.jpg",
    "url": "./movie-1353.html"
  },
  {
    "title": "荣归",
    "genre": "剧情 / 历史 / 家庭",
    "tags": "回归献礼, 家族恩怨, 时代变迁",
    "region": "香港 / 中国大陆",
    "type": "剧集",
    "year": "1997",
    "cover": "./4.jpg",
    "url": "./movie-1354.html"
  },
  {
    "title": "英雄艳迹",
    "genre": "剧情、爱情、犯罪",
    "tags": "枭雄片、卧底、虐恋、年代、宿命",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./5.jpg",
    "url": "./movie-1355.html"
  },
  {
    "title": "蝙蝠侠：血溅亚克汉",
    "genre": "动作, 科幻, 惊悚",
    "tags": "黑暗哥特, 小丑回归, 心理恐怖, 血浆美学",
    "region": "美国",
    "type": "动画电影",
    "year": "2025",
    "cover": "./6.jpg",
    "url": "./movie-1356.html"
  },
  {
    "title": "沙漠驼影",
    "genre": "冒险 / 剧情",
    "tags": "传记, 女性, 沙漠, 自由",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2023",
    "cover": "./7.jpg",
    "url": "./movie-1357.html"
  },
  {
    "title": "罪恶无间",
    "genre": "犯罪 / 悬疑",
    "tags": "卧底，双面间谍，警匪对峙",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./8.jpg",
    "url": "./movie-1358.html"
  },
  {
    "title": "掏空我的爱",
    "genre": "爱情 / 剧情 / 奇幻",
    "tags": "器官捐赠，记忆移植，虐恋，存在主义",
    "region": "中国香港 / 台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./9.jpg",
    "url": "./movie-1359.html"
  },
  {
    "title": "夺命凶灵3：午夜魔瞳",
    "genre": "科幻, 恐怖, 动作",
    "tags": "超能力, 瞳术, 赛博朋克",
    "region": "加拿大",
    "type": "电影",
    "year": "1995",
    "cover": "./10.jpg",
    "url": "./movie-1360.html"
  },
  {
    "title": "玩偶特工",
    "genre": "动作，科幻，惊悚",
    "tags": "女特工，改造人，复仇，高能打斗",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./11.jpg",
    "url": "./movie-1361.html"
  },
  {
    "title": "秀逗小护士4",
    "genre": "喜剧,职场,人情,制度观察",
    "tags": "医院生活,轻松幽默,同事关系,救援现场,医疗现象",
    "region": "香港",
    "type": "医疗喜剧电视剧",
    "year": "2022",
    "cover": "./12.jpg",
    "url": "./movie-1362.html"
  },
  {
    "title": "神将少女八家将",
    "genre": "剧情 / 奇幻 / 青春",
    "tags": "民俗, 女权, 成长, 阵头, 家将文化",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./13.jpg",
    "url": "./movie-1363.html"
  },
  {
    "title": "非法正义",
    "genre": "动作，犯罪，惊悚",
    "tags": "以暴制暴， vigilante，黑暗英雄，复仇爽片，法外制裁",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "cover": "./14.jpg",
    "url": "./movie-1364.html"
  },
  {
    "title": "死亡游戏2016",
    "genre": "悬疑, 惊悚, 动作",
    "tags": "真人游戏, 密室, 生存, 背叛",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "cover": "./15.jpg",
    "url": "./movie-1365.html"
  },
  {
    "title": "红地毯",
    "genre": "剧情, 喜剧",
    "tags": "戛纳, 群演, 梦想, 讽刺",
    "region": "法国, 意大利",
    "type": "电影",
    "year": "2025",
    "cover": "./16.jpg",
    "url": "./movie-1366.html"
  },
  {
    "title": "有用的鬼",
    "genre": "喜剧奇幻",
    "tags": "鬼魂, 职场, 反转, 都市传说, 轻松治愈",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./17.jpg",
    "url": "./movie-1367.html"
  },
  {
    "title": "国境线",
    "genre": "谍战、动作、悬疑、军事",
    "tags": "边境铁路线,无人区追逐,双重身份,军警联盟,家国抉择",
    "region": "中国大陆",
    "type": "谍战电视剧",
    "year": "2022",
    "cover": "./18.jpg",
    "url": "./movie-1368.html"
  },
  {
    "title": "超级英雄之死",
    "genre": "动作, 悬疑, 科幻",
    "tags": "反超级英雄, 谋杀调查, 政治阴谋, 黑暗结局",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./19.jpg",
    "url": "./movie-1369.html"
  },
  {
    "title": "家卒盛宴",
    "genre": "惊悚 / 家庭",
    "tags": "南洋, 民俗, 邪典",
    "region": "马来西亚",
    "type": "电影",
    "year": "2025",
    "cover": "./20.jpg",
    "url": "./movie-1370.html"
  },
  {
    "title": "风车",
    "genre": "剧情、家庭",
    "tags": "留守儿童、乡村教师、纸风车、治愈系",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "cover": "./21.jpg",
    "url": "./movie-1371.html"
  },
  {
    "title": "杀人读书会",
    "genre": "心理推理, 都市悬疑, 群像剧",
    "tags": "小城书会, 连环离奇, 密码线索, 情绪共谋, 法律与文学",
    "region": "日本",
    "type": "悬疑剧",
    "year": "2024",
    "cover": "./22.jpg",
    "url": "./movie-1372.html"
  },
  {
    "title": "3：戴尔·恩哈特的故事",
    "genre": "传记 / 运动",
    "tags": "赛车传奇, 纳斯卡, 命运宿敌, 真实人物",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./23.jpg",
    "url": "./movie-1373.html"
  },
  {
    "title": "音乐江湖",
    "genre": "武侠, 音乐, 剧情",
    "tags": "江湖门派, 古琴秘谱, 侠客宿命, 音律对决, 师徒传承, 以乐入武",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "cover": "./24.jpg",
    "url": "./movie-1374.html"
  },
  {
    "title": "分手大师",
    "genre": "剧情, 动作",
    "tags": "职业分手, 杀手的最后任务, 师徒, 救赎",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./25.jpg",
    "url": "./movie-1375.html"
  },
  {
    "title": "绿鸡蛋和绿火腿第二季",
    "genre": "动画、喜剧、冒险",
    "tags": "苏斯博士，友情，美食冒险",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "cover": "./26.jpg",
    "url": "./movie-1376.html"
  },
  {
    "title": "铁齿铜牙纪晓岚3",
    "genre": "历史 / 古装 / 喜剧",
    "tags": "权谋, 君臣斗, 反腐, 老戏骨",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./27.jpg",
    "url": "./movie-1377.html"
  },
  {
    "title": "伊瓦鲁",
    "genre": "奇幻、冒险、剧情",
    "tags": "航海, 神话生物, 父子情, 岛屿, 诅咒",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "cover": "./28.jpg",
    "url": "./movie-1378.html"
  },
  {
    "title": "爱上女主播",
    "genre": "爱情，职场，剧情",
    "tags": "媒体，逆袭，职场竞争，纯爱",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./29.jpg",
    "url": "./movie-1379.html"
  },
  {
    "title": "萤火虫之墓",
    "genre": "动画, 战争, 剧情",
    "tags": "反战, 兄妹情, 饥饿, 催泪",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "cover": "./30.jpg",
    "url": "./movie-1380.html"
  },
  {
    "title": "乌龙春潮",
    "genre": "喜剧, 爱情",
    "tags": "港式无厘头, 阴差阳错, 豪门恩怨",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "cover": "./31.jpg",
    "url": "./movie-1381.html"
  },
  {
    "title": "黑荆棘",
    "genre": "悬疑，犯罪",
    "tags": "庄园，家族秘密，复仇，英伦，毒药",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./32.jpg",
    "url": "./movie-1382.html"
  },
  {
    "title": "高更门边的狼",
    "genre": "剧情 / 悬疑",
    "tags": "艺术，孤岛，心理，野兽派，隐喻",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./33.jpg",
    "url": "./movie-1383.html"
  },
  {
    "title": "阳光清洗",
    "genre": "剧情, 喜剧",
    "tags": "犯罪现场清理, 姐妹, 创业, 治愈",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./34.jpg",
    "url": "./movie-1384.html"
  },
  {
    "title": "一念重生",
    "genre": "奇幻剧情 / 人生治愈",
    "tags": "时间回溯, 中年危机, 亲情救赎, 心愿清单, 命运改写",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "cover": "./35.jpg",
    "url": "./movie-1385.html"
  },
  {
    "title": "如父如母",
    "genre": "剧情, 同性, 家庭",
    "tags": "代孕, 身份认同, 温情",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./36.jpg",
    "url": "./movie-1386.html"
  },
  {
    "title": "夫君大人别怕我",
    "genre": "古装, 喜剧, 爱情",
    "tags": "穿越, 女尊, 反转, 甜爽, 搞笑",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./37.jpg",
    "url": "./movie-1387.html"
  },
  {
    "title": "世纪球王 马拉度纳",
    "genre": "传记体育纪录片",
    "tags": "足球传奇, 上帝之手, 那不勒斯, 毒品与救赎, 未公开影像",
    "region": "阿根廷 / 美国",
    "type": "纪录片剧集",
    "year": "2024",
    "cover": "./38.jpg",
    "url": "./movie-1388.html"
  },
  {
    "title": "美幸梦游仙境",
    "genre": "奇幻冒险",
    "tags": "都市奇幻, 女性成长, 意识流",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./39.jpg",
    "url": "./movie-1389.html"
  },
  {
    "title": "新天师斗僵尸",
    "genre": "喜剧，恐怖，动作",
    "tags": "恶搞，吸血鬼，黑人主角，B级片",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "cover": "./40.jpg",
    "url": "./movie-1390.html"
  },
  {
    "title": "迷路的大军",
    "genre": "战争 / 历史 / 悬疑",
    "tags": "一战, 失踪士兵, 考古, 集体记忆, 神秘事件",
    "region": "英国 / 法国",
    "type": "电影",
    "year": "2026",
    "cover": "./41.jpg",
    "url": "./movie-1391.html"
  },
  {
    "title": "小镇杀机",
    "genre": "悬疑 / 犯罪",
    "tags": "连环凶杀, 小镇疑云, 全员恶人, 反转, 封闭空间",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./42.jpg",
    "url": "./movie-1392.html"
  },
  {
    "title": "咸湿探戈",
    "genre": "爱情, 剧情",
    "tags": "中年危机, 舞蹈, 情欲, 身份错位",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./43.jpg",
    "url": "./movie-1393.html"
  },
  {
    "title": "死亡经历",
    "genre": "悬疑惊悚",
    "tags": "伪纪录片, 实验电影, 反转",
    "region": "西班牙",
    "type": "电影",
    "year": "2022",
    "cover": "./44.jpg",
    "url": "./movie-1394.html"
  },
  {
    "title": "影响世界的中国植物",
    "genre": "纪录片, 历史, 自然",
    "tags": "植物, 文化传播, 历史变迁, 科普",
    "region": "中国大陆",
    "type": "纪录片",
    "year": "2021",
    "cover": "./45.jpg",
    "url": "./movie-1395.html"
  },
  {
    "title": "特务家族",
    "genre": "动作，喜剧",
    "tags": "伪装家庭，黑色情报，反差萌",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./46.jpg",
    "url": "./movie-1396.html"
  },
  {
    "title": "摇滚教室",
    "genre": "音乐 / 喜剧 / 剧情",
    "tags": "摇滚精神，师生关系，校园，音乐梦想",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./47.jpg",
    "url": "./movie-1397.html"
  },
  {
    "title": "法证先锋2粤语",
    "genre": "悬疑 / 犯罪 / 法证",
    "tags": "粤语, 法证, 连环案",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "cover": "./48.jpg",
    "url": "./movie-1398.html"
  },
  {
    "title": "法官与杀人犯",
    "genre": "犯罪，悬疑",
    "tags": "法庭，死刑犯，复仇，法理",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./49.jpg",
    "url": "./movie-1399.html"
  },
  {
    "title": "关于我们的爱情",
    "genre": "爱情 / 剧情",
    "tags": "回忆录, 错过, 巴黎, 中年之爱",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./50.jpg",
    "url": "./movie-1400.html"
  },
  {
    "title": "神奇",
    "genre": "奇幻 / 家庭",
    "tags": "魔法, 成长, 校园, 治愈, 冒险",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./51.jpg",
    "url": "./movie-1401.html"
  },
  {
    "title": "天王拳",
    "genre": "动作 / 武侠 / 体育",
    "tags": "泰拳, 国术, 复仇, 地下拳赛",
    "region": "中国香港 / 泰国",
    "type": "电影",
    "year": "2026",
    "cover": "./52.jpg",
    "url": "./movie-1402.html"
  },
  {
    "title": "黑暗之歌",
    "genre": "恐怖 / 音乐 / 剧情",
    "tags": "爱尔兰神话， 邪典音乐， 心理惊悚， 民间传说",
    "region": "爱尔兰",
    "type": "电影",
    "year": "2023",
    "cover": "./53.jpg",
    "url": "./movie-1403.html"
  },
  {
    "title": "到时候再说",
    "genre": "剧情 / 家庭 / 黑色喜剧",
    "tags": "拖延症, 亲情, 荒诞, 生死, 现实",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./54.jpg",
    "url": "./movie-1404.html"
  },
  {
    "title": "新封神榜：杨戬",
    "genre": "奇幻 / 动作",
    "tags": "神话, 特效, 重工",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./55.jpg",
    "url": "./movie-1405.html"
  },
  {
    "title": "夏日友晴天",
    "genre": "动画 / 家庭 / 奇幻",
    "tags": "友谊, 暑假, 成长, 治愈",
    "region": "意大利 / 美国",
    "type": "电影",
    "year": "2023",
    "cover": "./56.jpg",
    "url": "./movie-1406.html"
  },
  {
    "title": "威尼斯疑魂",
    "genre": "悬疑 / 惊悚",
    "tags": "面具, 谋杀, 运河, 双生子诡计",
    "region": "意大利 / 英国",
    "type": "电影",
    "year": "2025",
    "cover": "./57.jpg",
    "url": "./movie-1407.html"
  },
  {
    "title": "探戈课",
    "genre": "剧情 / 爱情",
    "tags": "舞蹈, 情感疗愈, 文化冲突",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "year": "2023",
    "cover": "./58.jpg",
    "url": "./movie-1408.html"
  },
  {
    "title": "湖边疑云",
    "genre": "悬疑 / 犯罪",
    "tags": "心理悬疑， 密闭空间， 人性拷问",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./59.jpg",
    "url": "./movie-1409.html"
  },
  {
    "title": "名侦探学院5 加长版",
    "genre": "真人秀，推理",
    "tags": "脑力，密室，对抗，素人学霸，加长镜头",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "cover": "./60.jpg",
    "url": "./movie-1410.html"
  },
  {
    "title": "开心直航",
    "genre": "喜剧 / 剧情",
    "tags": "职场群像, 航空业, 意外连连",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./61.jpg",
    "url": "./movie-1411.html"
  },
  {
    "title": "外籍之人",
    "genre": "剧情",
    "tags": "异乡人，归属感，阶层差异，女性",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./62.jpg",
    "url": "./movie-1412.html"
  },
  {
    "title": "魔鬼女神",
    "genre": "剧情、恐怖、爱情",
    "tags": "附身复仇、前世今生、泰式鬼怪",
    "region": "泰国",
    "type": "电视剧",
    "year": "2023",
    "cover": "./63.jpg",
    "url": "./movie-1413.html"
  },
  {
    "title": "百战将军",
    "genre": "战争, 传记, 剧情",
    "tags": "罗马帝国, 不列颠, 政治博弈, 垂暮之年, 忠诚",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./64.jpg",
    "url": "./movie-1414.html"
  },
  {
    "title": "爱，别离",
    "genre": "剧情, 家庭, 文艺",
    "tags": "阿尔茨海默, 母女关系, 散文诗",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./65.jpg",
    "url": "./movie-1415.html"
  },
  {
    "title": "闪光电石",
    "genre": "科幻, 惊悚",
    "tags": "超能力, 人体实验, 悬疑, 反转",
    "region": "美国",
    "type": "电影",
    "year": "1998",
    "cover": "./66.jpg",
    "url": "./movie-1416.html"
  },
  {
    "title": "隔离村有鬼",
    "genre": "恐怖 / 悬疑",
    "tags": "乡村怪谈, 灵异直播, 民俗恐怖",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./67.jpg",
    "url": "./movie-1417.html"
  },
  {
    "title": "于宇同",
    "genre": "历史、情色、悬疑",
    "tags": "朝鲜女诗人、假面舞、禁书、文字狱",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./68.jpg",
    "url": "./movie-1418.html"
  },
  {
    "title": "大凝固",
    "genre": "科幻, 灾难",
    "tags": "时间停止, 社会学实验, 生存竞争, 硬科幻",
    "region": "中国大陆",
    "type": "电影",
    "year": "2028",
    "cover": "./69.jpg",
    "url": "./movie-1419.html"
  },
  {
    "title": "愿在你身边",
    "genre": "家庭 / 奇幻",
    "tags": "都市奇幻，愿望精灵，亲情",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2025",
    "cover": "./70.jpg",
    "url": "./movie-1420.html"
  },
  {
    "title": "千机变Ⅱ花都大战",
    "genre": "动作，奇幻",
    "tags": "变异，末世，特效大片",
    "region": "中国香港",
    "type": "电影",
    "year": "2027",
    "cover": "./71.jpg",
    "url": "./movie-1421.html"
  },
  {
    "title": "只因想你",
    "genre": "爱情 / 悬疑",
    "tags": "时空交错, 记忆碎片, 虐恋",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./72.jpg",
    "url": "./movie-1422.html"
  },
  {
    "title": "玻璃之脑",
    "genre": "科幻 / 爱情",
    "tags": "人工智能, 记忆, 催泪, 伦理, 治愈",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./73.jpg",
    "url": "./movie-1423.html"
  },
  {
    "title": "非常突然",
    "genre": "剧情, 悬疑, 犯罪",
    "tags": "银河映像风格, 宿命论, 多线叙事, 黑色幽默",
    "region": "香港",
    "type": "电影",
    "year": "2025",
    "cover": "./74.jpg",
    "url": "./movie-1424.html"
  },
  {
    "title": "刑房",
    "genre": "恐怖、犯罪、惊悚",
    "tags": "刑侦单元剧，连环杀手，法医心理，重口味",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./75.jpg",
    "url": "./movie-1425.html"
  },
  {
    "title": "致命女人第一季",
    "genre": "剧情， 犯罪， 黑色幽默",
    "tags": "女性， 谋杀， 多时代， 婚姻， 复仇",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./76.jpg",
    "url": "./movie-1426.html"
  },
  {
    "title": "黑暗骑士",
    "genre": "黑色电影 / 犯罪 / 悬疑",
    "tags": "夜巡者, 城市阴影, 私刑正义, 失踪案件, 道德灰区, 雨夜追踪",
    "region": "中国香港",
    "type": "犯罪片",
    "year": "2007",
    "cover": "./77.jpg",
    "url": "./movie-1427.html"
  },
  {
    "title": "碧窗艳尸",
    "genre": "犯罪悬疑",
    "tags": "黑色电影, 偷窥, 女性复仇, 反转再反转",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./78.jpg",
    "url": "./movie-1428.html"
  },
  {
    "title": "骨肉的总和",
    "genre": "惊悚 / 悬疑",
    "tags": "器官移植, 伦理困境, 复仇",
    "region": "西班牙",
    "type": "电影",
    "year": "2022",
    "cover": "./79.jpg",
    "url": "./movie-1429.html"
  },
  {
    "title": "湖深之处",
    "genre": "恐怖 / 悬疑",
    "tags": "民俗, 湖泊, 献祭",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./80.jpg",
    "url": "./movie-1430.html"
  },
  {
    "title": "狂王",
    "genre": "动作, 奇幻, 武侠",
    "tags": "国漫改编, 逆袭, 热血, 神话",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "cover": "./81.jpg",
    "url": "./movie-1431.html"
  },
  {
    "title": "每个人的生活",
    "genre": "剧情，都市",
    "tags": "群像，公寓楼，平行叙事，陌生人",
    "region": "德国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./82.jpg",
    "url": "./movie-1432.html"
  },
  {
    "title": "蝙蝠侠：漫长的万圣节",
    "genre": "动画, 动作, 悬疑, 犯罪",
    "tags": "蝙蝠侠, 节日杀手, 黑帮家族, 推理",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./83.jpg",
    "url": "./movie-1433.html"
  },
  {
    "title": "风云第二部",
    "genre": "武侠奇幻",
    "tags": "聂风, 步惊云, 漫画改编, 玄幻",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2004",
    "cover": "./84.jpg",
    "url": "./movie-1434.html"
  },
  {
    "title": "恐惧2021",
    "genre": "惊悚 / 心理",
    "tags": "互联网, 监控, 隐私, 社交工程",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./85.jpg",
    "url": "./movie-1435.html"
  },
  {
    "title": "沙普的伙伴",
    "genre": "历史 / 战争 / 动作",
    "tags": "拿破仑战争, 步枪手, 兄弟连, 生存, 硬汉",
    "region": "英国",
    "type": "电影 / 剧集",
    "year": "2026",
    "cover": "./86.jpg",
    "url": "./movie-1436.html"
  },
  {
    "title": "愤怒红星",
    "genre": "动作 / 犯罪",
    "tags": "复仇, 黑色电影, 城市夜景, 硬汉",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./87.jpg",
    "url": "./movie-1437.html"
  },
  {
    "title": "谣言风暴",
    "genre": "剧情, 悬疑",
    "tags": "网络暴力, 舆论审判, 女性复仇",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./88.jpg",
    "url": "./movie-1438.html"
  },
  {
    "title": "忠义山庄",
    "genre": "武侠 / 剧情",
    "tags": "江湖，门派斗争，兄弟情，背叛",
    "region": "中国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./89.jpg",
    "url": "./movie-1439.html"
  },
  {
    "title": "平行森林2024",
    "genre": "科幻 / 悬疑",
    "tags": "量子纠缠, 双生花, 东北魔幻现实主义",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "cover": "./90.jpg",
    "url": "./movie-1440.html"
  },
  {
    "title": "双截龙",
    "genre": "动作, 犯罪, 兄弟情",
    "tags": "双胞胎, 黑帮, 替身, 格斗",
    "region": "中国香港",
    "type": "电影",
    "year": "2029",
    "cover": "./91.jpg",
    "url": "./movie-1441.html"
  },
  {
    "title": "大西洋帝国第四季",
    "genre": "剧情、犯罪、历史",
    "tags": "禁酒令、黑帮、政商博弈、年代剧",
    "region": "美国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./92.jpg",
    "url": "./movie-1442.html"
  },
  {
    "title": "这个阿爸真爆炸",
    "genre": "喜剧, 剧情",
    "tags": "香港电影, 父女情, 黑帮, 卧底, 梁家辉",
    "region": "中国香港",
    "type": "电影",
    "year": "2004",
    "cover": "./93.jpg",
    "url": "./movie-1443.html"
  },
  {
    "title": "千年决斗",
    "genre": "动作、奇幻、武侠",
    "tags": "穿越、冷兵器对决、武术哲学、平行时空",
    "region": "中国香港",
    "type": "电影",
    "year": "2027",
    "cover": "./94.jpg",
    "url": "./movie-1444.html"
  },
  {
    "title": "沉默杀机",
    "genre": "犯罪，悬疑，惊悚",
    "tags": "哑巴杀手，连环案，复仇，反转",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./95.jpg",
    "url": "./movie-1445.html"
  },
  {
    "title": "一级恐惧",
    "genre": "恐怖, 心理",
    "tags": "恐惧具象化, 心理医生, 童年创伤, 幻觉",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./96.jpg",
    "url": "./movie-1446.html"
  },
  {
    "title": "我们要上校",
    "genre": "喜剧 / 战争 / 讽刺",
    "tags": "黑色幽默，文革余波，荒诞，集体谎言",
    "region": "中国大陆",
    "type": "电影",
    "year": "1980",
    "cover": "./97.jpg",
    "url": "./movie-1447.html"
  },
  {
    "title": "掩埋",
    "genre": "悬疑, 犯罪",
    "tags": "矿井, 真相, 记者, 人性",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./98.jpg",
    "url": "./movie-1448.html"
  },
  {
    "title": "恋爱吧，食梦君！第二季",
    "genre": "爱情奇幻",
    "tags": "甜宠, 梦境, 双向奔赴, 治愈, 高颜值",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./99.jpg",
    "url": "./movie-1449.html"
  },
  {
    "title": "夜风凛冽",
    "genre": "悬疑 / 犯罪 / 黑色电影",
    "tags": "北方小镇, 连环杀手, 暴风雪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./100.jpg",
    "url": "./movie-1450.html"
  },
  {
    "title": "古畑任三郎 微笑的袋鼠",
    "genre": "悬疑、犯罪",
    "tags": "本格推理、绅士刑警、动物园密室、不可能犯罪、致敬经典",
    "region": "日本",
    "type": "特别篇",
    "year": "2006",
    "cover": "./101.jpg",
    "url": "./movie-1451.html"
  },
  {
    "title": "第九圈",
    "genre": "恐怖，心理，超自然",
    "tags": "但丁神曲，地狱，仪式",
    "region": "意大利",
    "type": "电影",
    "year": "2022",
    "cover": "./102.jpg",
    "url": "./movie-1452.html"
  },
  {
    "title": "东方神骏",
    "genre": "历史，战争，剧情",
    "tags": "骑兵，抗日战争，蒙古马，家国情怀",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./103.jpg",
    "url": "./movie-1453.html"
  },
  {
    "title": "我的盖世英雄第一季",
    "genre": "奇幻 / 爱情 / 喜剧",
    "tags": "漫穿, 游戏NPC觉醒, 反套路, 女强男弱",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./104.jpg",
    "url": "./movie-1454.html"
  },
  {
    "title": "猛龙战警",
    "genre": "动作 / 犯罪 / 警匪",
    "tags": "卧底, 枪战, 硬核动作, 双雄, 东南亚背景",
    "region": "香港 / 中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./105.jpg",
    "url": "./movie-1455.html"
  },
  {
    "title": "艾克斯奥特曼",
    "genre": "科幻，动作，特摄",
    "tags": "奥特曼，平行宇宙，生态保护，巨型英雄，变身",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./106.jpg",
    "url": "./movie-1456.html"
  },
  {
    "title": "汪汪队立大功大电影2",
    "genre": "冒险、喜剧",
    "tags": "狗狗、救援、亲子",
    "region": "美国 / 加拿大",
    "type": "电影 / 动画",
    "year": "2024",
    "cover": "./107.jpg",
    "url": "./movie-1457.html"
  },
  {
    "title": "卡波特",
    "genre": "传记/剧情/犯罪",
    "tags": "作家, 真实事件, 冷血, 道德困境, 心理深渊",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./108.jpg",
    "url": "./movie-1458.html"
  },
  {
    "title": "饿犬蓝调",
    "genre": "犯罪, 剧情, 黑色幽默",
    "tags": "杀手还乡, 小镇疑云, 黑色幽默, 法式颓废, 底层悲歌",
    "region": "法国",
    "type": "电影",
    "year": "2020",
    "cover": "./109.jpg",
    "url": "./movie-1459.html"
  },
  {
    "title": "唯爱永存",
    "genre": "剧情、爱情、科幻",
    "tags": "克隆、伦理、伴侣机器人、永生、夫妻关系",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2024",
    "cover": "./110.jpg",
    "url": "./movie-1460.html"
  },
  {
    "title": "滚动吧小齿轮",
    "genre": "职场喜剧",
    "tags": "社畜崩溃, 黑心企业, 荒诞漫画风, 甩锅大战",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "cover": "./111.jpg",
    "url": "./movie-1461.html"
  },
  {
    "title": "满堂儿女",
    "genre": "家庭, 剧情",
    "tags": "养老, 亲情绑架, 农村, 多子女, 现实题材",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./112.jpg",
    "url": "./movie-1462.html"
  },
  {
    "title": "猩球崛起2:黎明之战",
    "genre": "动作 / 科幻 / 剧情",
    "tags": "猿族, 领袖, 信任, 战争",
    "region": "美国",
    "type": "电影",
    "year": "2014",
    "cover": "./113.jpg",
    "url": "./movie-1463.html"
  },
  {
    "title": "开局一座山2",
    "genre": "喜剧, 奇幻, 古装",
    "tags": "穿越, 种田, 基建, 搞笑",
    "region": "中国",
    "type": "剧集",
    "year": "2026",
    "cover": "./114.jpg",
    "url": "./movie-1464.html"
  },
  {
    "title": "飞行英杰",
    "genre": "剧情 / 传记 / 运动",
    "tags": "航空, 特技飞行, 励志, 真实改编",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./115.jpg",
    "url": "./movie-1465.html"
  },
  {
    "title": "召唤摩登石头人",
    "genre": "喜剧，奇幻，冒险",
    "tags": "都市传说，街头涂鸦，环保，反差萌",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./116.jpg",
    "url": "./movie-1466.html"
  },
  {
    "title": "童话先生",
    "genre": "奇幻 / 家庭 / 剧情",
    "tags": "童话, 治愈, 跨世代, 创意设定",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "cover": "./117.jpg",
    "url": "./movie-1467.html"
  },
  {
    "title": "彩色葡萄",
    "genre": "剧情 / 家庭 / 文艺",
    "tags": "留守儿童, 新疆, 治愈, 梦想, 手工",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./118.jpg",
    "url": "./movie-1468.html"
  },
  {
    "title": "大赢家",
    "genre": "喜剧, 犯罪",
    "tags": "银行抢劫演习, 职场讽刺, 黑色幽默, 翻拍改编",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "cover": "./119.jpg",
    "url": "./movie-1469.html"
  },
  {
    "title": "比基尼电台",
    "genre": "喜剧，青春",
    "tags": "校园，海盗电台，荒诞，女性友谊，恶搞",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "cover": "./120.jpg",
    "url": "./movie-1470.html"
  },
  {
    "title": "胡子与修女",
    "genre": "喜剧 / 剧情",
    "tags": "信仰, 另类, 女权, 幽默",
    "region": "法国",
    "type": "电影",
    "year": "2015",
    "cover": "./121.jpg",
    "url": "./movie-1471.html"
  },
  {
    "title": "愤怒的律师",
    "genre": "剧情, 犯罪, 法律",
    "tags": "法庭对抗, 社会不公, 以暴制暴",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./122.jpg",
    "url": "./movie-1472.html"
  },
  {
    "title": "战火云霄",
    "genre": "战争 / 传记",
    "tags": "不列颠空战, 王牌飞行员, 老照片",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "cover": "./123.jpg",
    "url": "./movie-1473.html"
  },
  {
    "title": "战争之后",
    "genre": "历史 / 剧情",
    "tags": "二战遗孤, 家园重建, 创伤, 东欧",
    "region": "波兰",
    "type": "剧集",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-1474.html"
  },
  {
    "title": "观鸟者指导大全",
    "genre": "剧情 / 喜剧 / 治愈",
    "tags": "孤独症, 鸟类隐喻, 父子破冰, 自然疗愈",
    "region": "英国",
    "type": "电影",
    "year": "2019",
    "cover": "./125.jpg",
    "url": "./movie-1475.html"
  },
  {
    "title": "仲夏夜之梦",
    "genre": "爱情，喜剧，奇幻",
    "tags": "莎士比亚，仙王，错位爱情，精灵魔法",
    "region": "英国",
    "type": "电影",
    "year": "1999",
    "cover": "./126.jpg",
    "url": "./movie-1476.html"
  },
  {
    "title": "真实的人类 第二季",
    "genre": "科幻, 剧情",
    "tags": "合成人, 觉醒, 伦理, 群像",
    "region": "英国 / 美国",
    "type": "电视剧",
    "year": "2016",
    "cover": "./127.jpg",
    "url": "./movie-1477.html"
  },
  {
    "title": "国际机场1979",
    "genre": "剧情 / 惊悚 / 灾难",
    "tags": "机场群像, 航空灾难, 70年代, 全明星阵容, 经典",
    "region": "美国",
    "type": "电影",
    "year": "1979",
    "cover": "./128.jpg",
    "url": "./movie-1478.html"
  },
  {
    "title": "本杰明",
    "genre": "剧情, 科幻, 爱情",
    "tags": "逆生长, 时间悖论, 孤独, 宿命, 罗曼史",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./129.jpg",
    "url": "./movie-1479.html"
  },
  {
    "title": "血肉秀",
    "genre": "恐怖",
    "tags": "直播杀人, 网红, 暗网, 社会讽刺",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "cover": "./130.jpg",
    "url": "./movie-1480.html"
  },
  {
    "title": "内心引力",
    "genre": "科幻， 爱情， 惊悚",
    "tags": "量子纠缠， 灵魂伴侣， 反套路",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./131.jpg",
    "url": "./movie-1481.html"
  },
  {
    "title": "辣手神探",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": "吴宇森, 周润发, 双雄, 枪战, 卧底",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "cover": "./132.jpg",
    "url": "./movie-1482.html"
  },
  {
    "title": "情逆三世缘国语",
    "genre": "爱情 / 奇幻 / 古装",
    "tags": "前世今生, 时空错位, 宿命爱情, 港式幽默, 轮回执念, 语言版",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2013",
    "cover": "./133.jpg",
    "url": "./movie-1483.html"
  },
  {
    "title": "一千根绳",
    "genre": "剧情 / 悬疑",
    "tags": "社会写实, 家庭悲剧, 文化冲突, 心理压抑, 毛利文化",
    "region": "新西兰 / 英国",
    "type": "电影",
    "year": "2018",
    "cover": "./134.jpg",
    "url": "./movie-1484.html"
  },
  {
    "title": "傀儡凶手",
    "genre": "犯罪, 惊悚",
    "tags": "木偶, 人格分裂, 剧场",
    "region": "中国香港",
    "type": "Movie",
    "year": "1994",
    "cover": "./135.jpg",
    "url": "./movie-1485.html"
  },
  {
    "title": "江南剿匪记之使命召唤",
    "genre": "动作 / 战争 / 历史",
    "tags": "剿匪，狙击手，兄弟反目，水乡枪战",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./136.jpg",
    "url": "./movie-1486.html"
  },
  {
    "title": "追蝶",
    "genre": "悬疑 / 奇幻",
    "tags": "时间循环, 蝴蝶效应, 悬疑, 日式细腻, 高概念",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./137.jpg",
    "url": "./movie-1487.html"
  },
  {
    "title": "强渡乌江之对岸",
    "genre": "战争， 动作， 历史",
    "tags": "长征， 硬核战斗， 小人物视角， 战术博弈",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "cover": "./138.jpg",
    "url": "./movie-1488.html"
  },
  {
    "title": "天降神机",
    "genre": "科幻喜剧冒险",
    "tags": "天外来物，误认神器，城市失控，人工智能，追踪竞赛，荒诞救援",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./139.jpg",
    "url": "./movie-1489.html"
  },
  {
    "title": "新鬼马神仙车",
    "genre": "喜剧 / 奇幻 / 家庭",
    "tags": "合家欢, 老爷车, AI, 怀旧, 无厘头",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./140.jpg",
    "url": "./movie-1490.html"
  },
  {
    "title": "珍珠传奇",
    "genre": "古装，爱情，家庭",
    "tags": "采珠女，商战，逆袭，明清背景",
    "region": "中国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./141.jpg",
    "url": "./movie-1491.html"
  },
  {
    "title": "姐就是美",
    "genre": "喜剧， 爱情",
    "tags": "身体自信， 反转喜剧， 女性主义",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "cover": "./142.jpg",
    "url": "./movie-1492.html"
  },
  {
    "title": "闹鬼酒店",
    "genre": "恐怖，喜剧",
    "tags": "网红打卡，假戏真做，历史冤案，直播",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "cover": "./143.jpg",
    "url": "./movie-1493.html"
  },
  {
    "title": "我们约会吧2011",
    "genre": "爱情 / 真人秀",
    "tags": "相亲, 怀旧, 时代变迁, 社会缩影",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2011",
    "cover": "./144.jpg",
    "url": "./movie-1494.html"
  },
  {
    "title": "淮水情",
    "genre": "剧情, 家庭, 历史",
    "tags": "淮河, 治水, 乡土, 三代人, 和解",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./145.jpg",
    "url": "./movie-1495.html"
  },
  {
    "title": "功夫小蝇2016",
    "genre": "动作/奇幻/喜剧",
    "tags": "复仇, 变身, 昆虫特工, 脑洞大开",
    "region": "印度",
    "type": "电影",
    "year": "2016",
    "cover": "./146.jpg",
    "url": "./movie-1496.html"
  },
  {
    "title": "逐爱之旅",
    "genre": "剧情, 爱情",
    "tags": "公路电影, 绝症, 自我救赎, 英伦风光",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./147.jpg",
    "url": "./movie-1497.html"
  },
  {
    "title": "十二猴子第二季",
    "genre": "科幻, 悬疑, 惊悚",
    "tags": "时间旅行, 末日病毒, 循环叙事, 宿命论",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./148.jpg",
    "url": "./movie-1498.html"
  },
  {
    "title": "终极使命",
    "genre": "动作 / 科幻",
    "tags": "超级士兵, 基因改造, 父子情, 牺牲",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./149.jpg",
    "url": "./movie-1499.html"
  },
  {
    "title": "玉女戏夫",
    "genre": "喜剧, 爱情",
    "tags": "黄梅调, 邵氏, 古典, 女扮男装",
    "region": "中国台湾",
    "type": "电影",
    "year": "1969",
    "cover": "./150.jpg",
    "url": "./movie-1500.html"
  },
  {
    "title": "暴力本性",
    "genre": "惊悚， 恐怖， 哲学",
    "tags": "存在主义， 连环杀手， 第一人称， 哲学独白",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./1.jpg",
    "url": "./movie-1501.html"
  },
  {
    "title": "毕克斯",
    "genre": "动画 / 音乐 / 剧情",
    "tags": "爵士乐, 动画, 音乐传记, 穿越",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "cover": "./2.jpg",
    "url": "./movie-1502.html"
  },
  {
    "title": "永远超级幸福",
    "genre": "奇幻, 家庭",
    "tags": "治愈, 时光倒流, 亲情, 催泪",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "cover": "./3.jpg",
    "url": "./movie-1503.html"
  },
  {
    "title": "当哈利遇到莎莉",
    "genre": "喜剧，爱情",
    "tags": "浪漫，经典，友情，对话",
    "region": "美国",
    "type": "电影",
    "year": "1989",
    "cover": "./4.jpg",
    "url": "./movie-1504.html"
  },
  {
    "title": "我属于谁",
    "genre": "剧情 / 爱情 / 文艺",
    "tags": "失忆, 身份认同, 三角关系",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./5.jpg",
    "url": "./movie-1505.html"
  },
  {
    "title": "拖车公园男孩",
    "genre": "喜剧，犯罪",
    "tags": "底层生活，兄弟情，疯狂计划",
    "region": "加拿大",
    "type": "电影",
    "year": "2024",
    "cover": "./6.jpg",
    "url": "./movie-1506.html"
  },
  {
    "title": "完美武器",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": "人工智能, 无人机, 军事伦理, 失控",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./7.jpg",
    "url": "./movie-1507.html"
  },
  {
    "title": "你好，昨天",
    "genre": "青春怀旧",
    "tags": "90年代, 小城, 群像",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./8.jpg",
    "url": "./movie-1508.html"
  },
  {
    "title": "美国女儿越南妈妈",
    "genre": "家庭,移民,社会",
    "tags": "越南移民,母女关系,身份认同,法庭戏,双语",
    "region": "美国",
    "type": "家庭剧情片",
    "year": "2017",
    "cover": "./9.jpg",
    "url": "./movie-1509.html"
  },
  {
    "title": "等待，是为了和你相遇",
    "genre": "爱情 / 奇幻 / 剧情",
    "tags": "纯爱、时间跳跃、催泪、坂元裕二式",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./10.jpg",
    "url": "./movie-1510.html"
  },
  {
    "title": "山间传来牛铃声",
    "genre": "乡村剧情 / 成长",
    "tags": "山村, 牧童, 家庭, 时代变迁, 乡土情怀, 童年记忆",
    "region": "中国大陆",
    "type": "电影",
    "year": "1986",
    "cover": "./11.jpg",
    "url": "./movie-1511.html"
  },
  {
    "title": "计划9",
    "genre": "科幻, 惊悚, 动作",
    "tags": "人工智能, 阴谋论, 人造人, 硬核, 反乌托邦",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./12.jpg",
    "url": "./movie-1512.html"
  },
  {
    "title": "冬甩处男",
    "genre": "喜剧, 爱情, 剧情",
    "tags": "港式喜剧, 宅男恋爱, 甜品店奇缘, 中年初恋",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./13.jpg",
    "url": "./movie-1513.html"
  },
  {
    "title": "宫心计2深宫计国语",
    "genre": "古装，宫斗",
    "tags": "权谋，女性，复仇，姐妹情",
    "region": "中国香港",
    "type": "剧集",
    "year": "2018",
    "cover": "./14.jpg",
    "url": "./movie-1514.html"
  },
  {
    "title": "饿狼传",
    "genre": "动作 / 格斗 / 剧情",
    "tags": "地下格斗, 黑道, 生存, 硬核, 暴力美学",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./15.jpg",
    "url": "./movie-1515.html"
  },
  {
    "title": "来自大海的男人",
    "genre": "剧情 / 奇幻",
    "tags": "海边, 创伤, 沉默男主, 治愈, 超自然",
    "region": "日本 / 法国",
    "type": "电影",
    "year": "2018",
    "cover": "./16.jpg",
    "url": "./movie-1516.html"
  },
  {
    "title": "作恶者",
    "genre": "悬疑, 犯罪",
    "tags": "私刑, 复仇, 校园暴力, 反转, 全员恶人",
    "region": "日本",
    "type": "电影",
    "year": "2018",
    "cover": "./17.jpg",
    "url": "./movie-1517.html"
  },
  {
    "title": "圣诞小屋",
    "genre": "家庭 / 温情 / 圣诞",
    "tags": "圣诞节, 祖孙, 木屋, 治愈",
    "region": "美国",
    "type": "电视电影",
    "year": "2024",
    "cover": "./18.jpg",
    "url": "./movie-1518.html"
  },
  {
    "title": "亚飞与亚基",
    "genre": "剧情, 犯罪, 兄弟",
    "tags": "卧底, 黑帮, 兄弟情, 黑色幽默",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./19.jpg",
    "url": "./movie-1519.html"
  },
  {
    "title": "谍影重重2011",
    "genre": "动作 / 悬疑 / 谍战",
    "tags": "失忆特工, 写实打斗, 欧洲追踪",
    "region": "美国",
    "type": "电影",
    "year": "2011",
    "cover": "./20.jpg",
    "url": "./movie-1520.html"
  },
  {
    "title": "夺娶",
    "genre": "爱情 / 古装 / 复仇",
    "tags": "替身，强取豪夺，虐恋，反转，女强",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "cover": "./21.jpg",
    "url": "./movie-1521.html"
  },
  {
    "title": "兄弟会",
    "genre": "剧情, 悬疑",
    "tags": "大学社团, 神秘仪式, 阶级分化, 命案调查",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./22.jpg",
    "url": "./movie-1522.html"
  },
  {
    "title": "第一头牛",
    "genre": "历史， 西部， 剧情",
    "tags": "拓荒， 友情， 资本原始积累， 生存， 边疆",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./23.jpg",
    "url": "./movie-1523.html"
  },
  {
    "title": "第一归正会",
    "genre": "剧情，惊悚",
    "tags": "信仰，绝望，环境，心理",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./24.jpg",
    "url": "./movie-1524.html"
  },
  {
    "title": "香格里拉下雪了吗",
    "genre": "剧情, 爱情, 公路",
    "tags": "徒步, 寻找自我, 失恋, 治愈",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "cover": "./25.jpg",
    "url": "./movie-1525.html"
  },
  {
    "title": "米兰奇迹",
    "genre": "剧情 / 奇幻",
    "tags": "城市温情，小人物，隐喻，希望",
    "region": "意大利",
    "type": "电影",
    "year": "2025",
    "cover": "./26.jpg",
    "url": "./movie-1526.html"
  },
  {
    "title": "高雄发的尾班车",
    "genre": "剧情 / 家庭",
    "tags": "末班车， 亲子和解， 台式温情， 城市夜景",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./27.jpg",
    "url": "./movie-1527.html"
  },
  {
    "title": "冰雪奇缘2",
    "genre": "奇幻， 冒险",
    "tags": "姐妹， 魔法， 探险， 音乐",
    "region": "美国",
    "type": "动画电影",
    "year": "2024",
    "cover": "./28.jpg",
    "url": "./movie-1528.html"
  },
  {
    "title": "冬之华",
    "genre": "动作, 犯罪, 剧情",
    "tags": "高仓健, 黑帮, 侠义, 冬季",
    "region": "日本",
    "type": "电影",
    "year": "1978",
    "cover": "./29.jpg",
    "url": "./movie-1529.html"
  },
  {
    "title": "12月32日",
    "genre": "奇幻悬疑",
    "tags": "时间循环, 跨年, 哲学",
    "region": "阿根廷",
    "type": "电影",
    "year": "2023",
    "cover": "./30.jpg",
    "url": "./movie-1530.html"
  },
  {
    "title": "麦吉的计划",
    "genre": "剧情喜剧",
    "tags": "独立女性，高智商，控盘，婚姻关系，黑色幽默",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./31.jpg",
    "url": "./movie-1531.html"
  },
  {
    "title": "模范大哥哥",
    "genre": "喜剧 / 剧情",
    "tags": "黑帮, 育儿, 反差萌, 家庭温情",
    "region": "韩国",
    "type": "电影",
    "year": "2021",
    "cover": "./32.jpg",
    "url": "./movie-1532.html"
  },
  {
    "title": "北朝鲜的孩子",
    "genre": "剧情, 悬疑, 惊悚",
    "tags": "脱北者, 身份政治, 悲剧",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./33.jpg",
    "url": "./movie-1533.html"
  },
  {
    "title": "闯天下",
    "genre": "剧情 / 历史 / 冒险",
    "tags": "走西口, 晋商, 驼队, 诚信",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "cover": "./34.jpg",
    "url": "./movie-1534.html"
  },
  {
    "title": "坎坷人生",
    "genre": "家庭伦理",
    "tags": "亲情, 磨难, 成长, 励志",
    "region": "中国",
    "type": "电视剧",
    "year": "2021",
    "cover": "./35.jpg",
    "url": "./movie-1535.html"
  },
  {
    "title": "奇想天开",
    "genre": "奇幻、悬疑、温情",
    "tags": "交换身体，老年痴呆，夫妻感情，日常推理，记忆碎片",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./36.jpg",
    "url": "./movie-1536.html"
  },
  {
    "title": "敌我难辨",
    "genre": "谍战, 心理, 剧情",
    "tags": "双面间谍, 冷战, 审讯, 记忆宫殿, 假想敌",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./37.jpg",
    "url": "./movie-1537.html"
  },
  {
    "title": "灵域第一季",
    "genre": "奇幻, 冒险, 动作",
    "tags": "异世界, 灵器, 宗门争斗",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./38.jpg",
    "url": "./movie-1538.html"
  },
  {
    "title": "都市牛郎",
    "genre": "剧情, 西部, 犯罪",
    "tags": "现代牛仔, 铁锈地带, 父子, 复仇",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "cover": "./39.jpg",
    "url": "./movie-1539.html"
  },
  {
    "title": "弄巧成拙",
    "genre": "喜剧 / 犯罪",
    "tags": "黑色幽默, 笨贼, 连环误会, 荒诞, 多线叙事",
    "region": "意大利",
    "type": "电影",
    "year": "2025",
    "cover": "./40.jpg",
    "url": "./movie-1540.html"
  },
  {
    "title": "男孩爱最大",
    "genre": "青春成长",
    "tags": "校园, 友情, 恋爱, 叛逆, 自我认同",
    "region": "中国台湾",
    "type": "电影",
    "year": "2018",
    "cover": "./41.jpg",
    "url": "./movie-1541.html"
  },
  {
    "title": "天师撞邪粤语",
    "genre": "喜剧, 奇幻, 动作",
    "tags": "僵尸, 道士, 粤语, 老港片, 民俗恐怖",
    "region": "中国香港",
    "type": "电影",
    "year": "1983",
    "cover": "./42.jpg",
    "url": "./movie-1542.html"
  },
  {
    "title": "佛口蛇心",
    "genre": "古装 / 犯罪",
    "tags": "古代法医, 人心鬼蜮, 局中局",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./43.jpg",
    "url": "./movie-1543.html"
  },
  {
    "title": "唔死呃德人",
    "genre": "黑色喜剧, 犯罪讽刺, 粤语荒诞",
    "tags": "谎言游戏, 保险骗局, 殡仪闹剧, 遗产争夺, 粤式嘴炮, 反转",
    "region": "中国香港",
    "type": "电影",
    "year": "2015",
    "cover": "./44.jpg",
    "url": "./movie-1544.html"
  },
  {
    "title": "废柴同盟",
    "genre": "喜剧 / 励志",
    "tags": "职场, 小人物, 港式无厘头, 团队合作",
    "region": "中国香港",
    "type": "电影",
    "year": "2001",
    "cover": "./45.jpg",
    "url": "./movie-1545.html"
  },
  {
    "title": "南家三姐妹 再来一碗",
    "genre": "动画 / 喜剧 / 日常",
    "tags": "日常, 搞笑, 三姐妹, 校园, 轻松",
    "region": "日本",
    "type": "剧集",
    "year": "2008",
    "cover": "./46.jpg",
    "url": "./movie-1546.html"
  },
  {
    "title": "企鹅记忆幸福故事",
    "genre": "动画 / 奇幻 / 治愈",
    "tags": "企鹅, 记忆, 失智, 祖母, 南极",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "cover": "./47.jpg",
    "url": "./movie-1547.html"
  },
  {
    "title": "没大没小",
    "genre": "喜剧 / 奇幻",
    "tags": "父女互换, 校园, 搞笑, 温情, 身体互换",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./48.jpg",
    "url": "./movie-1548.html"
  },
  {
    "title": "秘密使节",
    "genre": "间谍,政治阴谋,动作",
    "tags": "双重身份,核谈判,外交骗局,家族旧案,跨国追踪,匿名牺牲",
    "region": "英国",
    "type": "政治惊悚电影",
    "year": "2019",
    "cover": "./49.jpg",
    "url": "./movie-1549.html"
  },
  {
    "title": "今夜结束之前",
    "genre": "爱情、奇幻、剧情",
    "tags": "时间循环、告别、治愈、台北、一夜限定",
    "region": "中国台湾",
    "type": "电影",
    "year": "2027",
    "cover": "./50.jpg",
    "url": "./movie-1550.html"
  },
  {
    "title": "马柔本宅秘事",
    "genre": "悬疑 / 恐怖",
    "tags": "古宅, 黑暗秘密, 反转, 心理惊悚",
    "region": "西班牙",
    "type": "电影",
    "year": "2017",
    "cover": "./51.jpg",
    "url": "./movie-1551.html"
  },
  {
    "title": "惊声尖叫第二季",
    "genre": "恐怖 / 悬疑",
    "tags": "鬼脸杀手，小镇秘密，模仿犯，血腥",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./52.jpg",
    "url": "./movie-1552.html"
  },
  {
    "title": "春风满古城",
    "genre": "剧情 / 历史 / 家庭",
    "tags": "古城保护, 拆迁, 父子和解, 1980年代",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./53.jpg",
    "url": "./movie-1553.html"
  },
  {
    "title": "双面劳伦斯",
    "genre": "剧情 / 爱情 / 同性",
    "tags": "跨性别, 十年跨度, 泽维尔·多兰, 美学, 虐恋",
    "region": "加拿大",
    "type": "电影",
    "year": "2012",
    "cover": "./54.jpg",
    "url": "./movie-1554.html"
  },
  {
    "title": "唱歌的六个女人",
    "genre": "喜剧 / 音乐",
    "tags": "闺蜜团, 中年危机, 合唱团",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./55.jpg",
    "url": "./movie-1555.html"
  },
  {
    "title": "最后的维加斯",
    "genre": "喜剧 / 剧情",
    "tags": "老年帮, 拉斯维加斯, 活明白了, 兄弟情",
    "region": "美国",
    "type": "电影",
    "year": "2013",
    "cover": "./56.jpg",
    "url": "./movie-1556.html"
  },
  {
    "title": "被炉、蜜桔和小猫",
    "genre": "生活 / 治愈",
    "tags": "慢生活, 单元剧, 三代同堂, 散文诗",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./57.jpg",
    "url": "./movie-1557.html"
  },
  {
    "title": "咕咚咕咚喜欢你",
    "genre": "爱情，奇幻",
    "tags": "饮品，暗恋，治愈",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2022",
    "cover": "./58.jpg",
    "url": "./movie-1558.html"
  },
  {
    "title": "金刚之子",
    "genre": "动作, 冒险, 奇幻",
    "tags": "怪兽宇宙, 传承, 丛林冒险, 情感",
    "region": "美国/新西兰",
    "type": "电影",
    "year": "2026",
    "cover": "./59.jpg",
    "url": "./movie-1559.html"
  },
  {
    "title": "英雄本色2",
    "genre": "动作 / 犯罪",
    "tags": "枪战, 兄弟, 复仇, 江湖",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./60.jpg",
    "url": "./movie-1560.html"
  },
  {
    "title": "荆途粤语",
    "genre": "剧情/犯罪/家族",
    "tags": "黑帮, 卧底, 父子, 粤语原声, 宿命",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "cover": "./61.jpg",
    "url": "./movie-1561.html"
  },
  {
    "title": "透明的我们",
    "genre": "奇幻, 青春",
    "tags": "隐身, 校园霸凌, 治愈, 友情",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "cover": "./62.jpg",
    "url": "./movie-1562.html"
  },
  {
    "title": "黑气球",
    "genre": "剧情, 家庭, 成长",
    "tags": "自闭症, 兄弟情, 青春期, 校园歧视",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2008",
    "cover": "./63.jpg",
    "url": "./movie-1563.html"
  },
  {
    "title": "星际之旅：木星计划",
    "genre": "太空科幻, 生存冒险, 心理悬疑",
    "tags": "轨道任务, 深空时间回声, 家庭失踪, 人工智能伦理, 木星探索",
    "region": "加拿大",
    "type": "科幻电影",
    "year": "2026",
    "cover": "./64.jpg",
    "url": "./movie-1564.html"
  },
  {
    "title": "爱情不流泪",
    "genre": "爱情、家庭、伦理",
    "tags": "虐恋、女性成长、代际和解",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2022",
    "cover": "./65.jpg",
    "url": "./movie-1565.html"
  },
  {
    "title": "邪恶与疯狂",
    "genre": "犯罪 / 动作",
    "tags": "双重人格, 腐败警察, 私刑",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "cover": "./66.jpg",
    "url": "./movie-1566.html"
  },
  {
    "title": "家乡菜 中国味",
    "genre": "美食",
    "tags": "地域美食, 乡愁, 人文",
    "region": "中国大陆",
    "type": "纪录片",
    "year": "2025",
    "cover": "./67.jpg",
    "url": "./movie-1567.html"
  },
  {
    "title": "印度爆玉米花",
    "genre": "剧情， 喜剧， 家庭",
    "tags": "小贩， 种姓， 街头美食",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "cover": "./68.jpg",
    "url": "./movie-1568.html"
  },
  {
    "title": "青春日记之柠檬之恋",
    "genre": "爱情，青春",
    "tags": "校园，暗恋，酸涩，小清新",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./69.jpg",
    "url": "./movie-1569.html"
  },
  {
    "title": "忿怒者",
    "genre": "动作 / 犯罪",
    "tags": "超级英雄, 义警, 复仇, 暴力",
    "region": "美国",
    "type": "电视剧",
    "year": "2023",
    "cover": "./70.jpg",
    "url": "./movie-1570.html"
  },
  {
    "title": "出水天鹅",
    "genre": "家庭, 成长, 文艺",
    "tags": "芭蕾, 代际和解, 中年危机",
    "region": "中国大陆",
    "type": "剧情 / 家庭",
    "year": "2024",
    "cover": "./71.jpg",
    "url": "./movie-1571.html"
  },
  {
    "title": "恶种",
    "genre": "恐怖, 科幻",
    "tags": "生物恐怖, 寄生, 隔离, 变异",
    "region": "加拿大 / 法国",
    "type": "电影",
    "year": "2024",
    "cover": "./72.jpg",
    "url": "./movie-1572.html"
  },
  {
    "title": "开篇",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": "作家, 元叙事, 书中世界, 循环, 反转",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "cover": "./73.jpg",
    "url": "./movie-1573.html"
  },
  {
    "title": "又到那种程度",
    "genre": "爱情 / 剧情 / 同性",
    "tags": "重逢, 遗憾, 中年危机, 旧情复燃, 选择",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./74.jpg",
    "url": "./movie-1574.html"
  },
  {
    "title": "阿布巴纳特",
    "genre": "剧情, 犯罪, 传记",
    "tags": "黑帮, 贫民窟, 宗教, 救赎",
    "region": "巴西",
    "type": "电影",
    "year": "2026",
    "cover": "./75.jpg",
    "url": "./movie-1575.html"
  },
  {
    "title": "阴牙人",
    "genre": "恐怖, 奇幻",
    "tags": "生理恐怖, 女性隐喻, 黑色幽默, cult片, 反性侵",
    "region": "美国 / 德国",
    "type": "电影",
    "year": "2007",
    "cover": "./76.jpg",
    "url": "./movie-1576.html"
  },
  {
    "title": "像男人一样思考2",
    "genre": "都市悬疑 / 动作 / 家庭伦理",
    "tags": "伪装身份, 保险事故, 亲情复仇, 司法阴谋, 兄弟背叛",
    "region": "中国大陆",
    "type": "悬疑动作片",
    "year": "2024",
    "cover": "./77.jpg",
    "url": "./movie-1577.html"
  },
  {
    "title": "不夜城",
    "genre": "剧情、商战、悬疑",
    "tags": "东北、夜总会、90年代、拆迁、黑道",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./78.jpg",
    "url": "./movie-1578.html"
  },
  {
    "title": "关人7事",
    "genre": "剧情家庭",
    "tags": "七人, 密室, 秘密, 饭局",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "cover": "./79.jpg",
    "url": "./movie-1579.html"
  },
  {
    "title": "菲力兹九命猫",
    "genre": "动画，奇幻，冒险",
    "tags": "猫，轮回，法式浪漫，哲思",
    "region": "法国",
    "type": "电影",
    "year": "2027",
    "cover": "./80.jpg",
    "url": "./movie-1580.html"
  },
  {
    "title": "神秘岛",
    "genre": "科幻悬疑",
    "tags": "冒险, 未知生物, 心理惊悚",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./81.jpg",
    "url": "./movie-1581.html"
  },
  {
    "title": "实干之人",
    "genre": "剧情 / 犯罪 / 黑色幽默",
    "tags": "同 TAGS 上方已填，此处不重复，保持字段完整",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./82.jpg",
    "url": "./movie-1582.html"
  },
  {
    "title": "尘封笔记本",
    "genre": "爱情、剧情、悬疑",
    "tags": "书店，日记，代际，纯爱",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./83.jpg",
    "url": "./movie-1583.html"
  },
  {
    "title": "朋友如斯",
    "genre": "剧情 / 悬疑",
    "tags": "友谊, 嫉妒, 阶级差异",
    "region": "韩国",
    "type": "电影",
    "year": "2017",
    "cover": "./84.jpg",
    "url": "./movie-1584.html"
  },
  {
    "title": "新媳妇来了",
    "genre": "家庭 / 伦理",
    "tags": "婆媳，城乡差异，现实主义",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./85.jpg",
    "url": "./movie-1585.html"
  },
  {
    "title": "缘分接下来",
    "genre": "爱情，喜剧，奇幻",
    "tags": "婚恋APP，大数据匹配，命中注定",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2024",
    "cover": "./86.jpg",
    "url": "./movie-1586.html"
  },
  {
    "title": "四少奶",
    "genre": "年代 / 悬疑 / 家庭",
    "tags": "民国, 宅斗, 替身, 复仇, 女性",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./87.jpg",
    "url": "./movie-1587.html"
  },
  {
    "title": "龙门驿站之太阳花",
    "genre": "武侠 / 悬疑",
    "tags": "古装, 推理, 单元剧, 反套路",
    "region": "中国内地",
    "type": "网络电影",
    "year": "2024",
    "cover": "./88.jpg",
    "url": "./movie-1588.html"
  },
  {
    "title": "居住正义",
    "genre": "社会写实",
    "tags": "高房价, 蜗居, 黑色喜剧, 群像戏",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2026",
    "cover": "./89.jpg",
    "url": "./movie-1589.html"
  },
  {
    "title": "乡村爱情小夜曲",
    "genre": "喜剧 / 爱情",
    "tags": "象牙山, 中年爱情, 电商直播, 邻里纠纷",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./90.jpg",
    "url": "./movie-1590.html"
  },
  {
    "title": "一见不钟情2024",
    "genre": "爱情 / 喜剧",
    "tags": "反向爱情, 离婚冷静期, 嘴硬心软",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./91.jpg",
    "url": "./movie-1591.html"
  },
  {
    "title": "勇者义彦与被引导的七人",
    "genre": "喜剧 / 奇幻 / 冒险",
    "tags": "恶搞, RPG, 低成本, 四人小队, 佛祖",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./92.jpg",
    "url": "./movie-1592.html"
  },
  {
    "title": "藤子海敏的时间",
    "genre": "传记",
    "tags": "钢琴家, 失聪, 时间穿梭, 音乐治愈",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./93.jpg",
    "url": "./movie-1593.html"
  },
  {
    "title": "爱上邻家主厨",
    "genre": "爱情, 喜剧",
    "tags": "同性, 美食, 甜宠, 邻里",
    "region": "泰国",
    "type": "剧集",
    "year": "2025",
    "cover": "./94.jpg",
    "url": "./movie-1594.html"
  },
  {
    "title": "参孙和达丽拉",
    "genre": "历史, 爱情",
    "tags": "圣经改编, 悲剧英雄, 致命女人, 史诗",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./95.jpg",
    "url": "./movie-1595.html"
  },
  {
    "title": "不灭之女",
    "genre": "动作 / 奇幻",
    "tags": "女战神, 永生诅咒, 史诗感",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2025",
    "cover": "./96.jpg",
    "url": "./movie-1596.html"
  },
  {
    "title": "万恶淫为首",
    "genre": "剧情, 惊悚, 伦理",
    "tags": "欲望, 报应, 悬疑, 人性",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./97.jpg",
    "url": "./movie-1597.html"
  },
  {
    "title": "温德斯：狂野旅程",
    "genre": "剧情，传记，公路",
    "tags": "公路电影，导演传记，哲学，冒险，艺术",
    "region": "德国/美国",
    "type": "电影",
    "year": "2024",
    "cover": "./98.jpg",
    "url": "./movie-1598.html"
  },
  {
    "title": "是，大臣第二季",
    "genre": "喜剧 / 政治",
    "tags": "英式讽刺, 政治喜剧, 高分经典, 办公室政治, 台词神作",
    "region": "英国",
    "type": "剧集",
    "year": "1981",
    "cover": "./99.jpg",
    "url": "./movie-1599.html"
  },
  {
    "title": "亲密之海",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": "海, 情感修复, 慢节奏",
    "region": "法国",
    "type": "电影",
    "year": "2002",
    "cover": "./100.jpg",
    "url": "./movie-1600.html"
  },
  {
    "title": "燃烧的蛟龙",
    "genre": "动作犯罪",
    "tags": "卧底风云, 兄弟反目, 烈火实战",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./101.jpg",
    "url": "./movie-1601.html"
  },
  {
    "title": "内心的伤痕",
    "genre": "剧情, 心理",
    "tags": "实验电影, 精神分析, 伤痕文学, 黑白",
    "region": "法国",
    "type": "电影",
    "year": "1972",
    "cover": "./102.jpg",
    "url": "./movie-1602.html"
  },
  {
    "title": "终极仇杀",
    "genre": "动作 / 犯罪",
    "tags": "硬核, 复仇, B级片, 以一敌百",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "cover": "./103.jpg",
    "url": "./movie-1603.html"
  },
  {
    "title": "巫医",
    "genre": "恐怖, 民俗, 惊悚",
    "tags": "降头, 乡村恐怖, 家族诅咒, 恶灵, 祭祀",
    "region": "印度尼西亚",
    "type": "电影",
    "year": "2025",
    "cover": "./104.jpg",
    "url": "./movie-1604.html"
  },
  {
    "title": "此乐不为何人所奏",
    "genre": "剧情 / 音乐",
    "tags": "艺术，孤独，存在主义",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "cover": "./105.jpg",
    "url": "./movie-1605.html"
  },
  {
    "title": "一位站立的人",
    "genre": "剧情，励志",
    "tags": "真实改编，残疾，抗争",
    "region": "印度",
    "type": "电影",
    "year": "2021",
    "cover": "./106.jpg",
    "url": "./movie-1606.html"
  },
  {
    "title": "一个人的皮影戏",
    "genre": "剧情",
    "tags": "非遗, 传承, 乡村, 孤独, 时代变迁",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "cover": "./107.jpg",
    "url": "./movie-1607.html"
  },
  {
    "title": "唐老鸭拿到汇票",
    "genre": "喜剧、动画、冒险",
    "tags": "迪士尼、唐老鸭、倒霉蛋、寻宝、乌龙",
    "region": "美国",
    "type": "电影短片",
    "year": "2024",
    "cover": "./108.jpg",
    "url": "./movie-1608.html"
  },
  {
    "title": "大城部，我的朋友",
    "genre": "剧情",
    "tags": "文艺, 友情, 城市, 游离",
    "region": "柬埔寨 / 法国",
    "type": "电影",
    "year": "2009",
    "cover": "./109.jpg",
    "url": "./movie-1609.html"
  },
  {
    "title": "索尔之子",
    "genre": "剧情 / 战争",
    "tags": "集中营，犹太，人性",
    "region": "匈牙利",
    "type": "电影",
    "year": "2015",
    "cover": "./110.jpg",
    "url": "./movie-1610.html"
  },
  {
    "title": "伏魔金刚",
    "genre": "动作 / 奇幻",
    "tags": "机甲, 修真, 都市, 特效, 热血",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./111.jpg",
    "url": "./movie-1611.html"
  },
  {
    "title": "功夫龙虾之崛起",
    "genre": "喜剧, 动作, 美食",
    "tags": "功夫, 龙虾, 小镇青年, 热血逆袭",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./112.jpg",
    "url": "./movie-1612.html"
  },
  {
    "title": "冲锋9号续集",
    "genre": "动作 / 警匪",
    "tags": "缉毒, 硬汉, 兄弟情, 追车, 卧底",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./113.jpg",
    "url": "./movie-1613.html"
  },
  {
    "title": "埃尔顿·约翰：永远不迟",
    "genre": "音乐",
    "tags": "音乐人, 告别巡演, 人生回顾, 舞台幕后",
    "region": "英国",
    "type": "纪录片",
    "year": "2024",
    "cover": "./114.jpg",
    "url": "./movie-1614.html"
  },
  {
    "title": "巨蟒2",
    "genre": "冒险惊悚 / 怪兽灾难",
    "tags": "热带雨林, 失控生物, 探险失踪, 生存逃亡, 续作升级",
    "region": "美国",
    "type": "电影",
    "year": "2004",
    "cover": "./115.jpg",
    "url": "./movie-1615.html"
  },
  {
    "title": "对不起",
    "genre": "剧情/家庭",
    "tags": "道歉师,情感修复,单元故事",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./116.jpg",
    "url": "./movie-1616.html"
  },
  {
    "title": "沉默无语",
    "genre": "剧情 / 家庭",
    "tags": "失语症, 亲情和解, 小镇叙事, 女性成长",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./117.jpg",
    "url": "./movie-1617.html"
  },
  {
    "title": "第一大总统",
    "genre": "历史、传记、剧情",
    "tags": "民国、孙中山、革命、护法运动、伟人成长",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./118.jpg",
    "url": "./movie-1618.html"
  },
  {
    "title": "狐狸的夏天1",
    "genre": "奇幻爱情",
    "tags": "职场, 狐妖, 都市传说, 反差萌",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./119.jpg",
    "url": "./movie-1619.html"
  },
  {
    "title": "盛世仁杰国语",
    "genre": "古装、悬疑、侦探",
    "tags": "狄仁杰、武则天、盛唐、朝堂斗争、本格推理",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./120.jpg",
    "url": "./movie-1620.html"
  },
  {
    "title": "黄沙战神",
    "genre": "动作，奇幻，冒险",
    "tags": "沙漠，战神觉醒，宿命对决",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2023",
    "cover": "./121.jpg",
    "url": "./movie-1621.html"
  },
  {
    "title": "叙梦入局",
    "genre": "悬疑 / 科幻 / 烧脑",
    "tags": "盗梦， 嵌套， 科技伦理， 反转， 高智商",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./122.jpg",
    "url": "./movie-1622.html"
  },
  {
    "title": "春天的绞刑架",
    "genre": "悬疑 / 历史 / 剧情",
    "tags": "民国, 谍战, 命运悲剧, 十日游戏",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "cover": "./123.jpg",
    "url": "./movie-1623.html"
  },
  {
    "title": "翼神世音 多元变奏曲",
    "genre": "科幻 / 机战 / 剧情 / 文艺",
    "tags": "平行世界, 意识流, 机甲, 骨头社, 文艺科幻",
    "region": "日本",
    "type": "动画电影",
    "year": "2003",
    "cover": "./124.jpg",
    "url": "./movie-1624.html"
  },
  {
    "title": "母狗",
    "genre": "剧情, 惊悚, 心理",
    "tags": "女性复仇, 社会批判, 非典型母亲, 北欧冷峻",
    "region": "丹麦",
    "type": "电影",
    "year": "2024",
    "cover": "./125.jpg",
    "url": "./movie-1625.html"
  },
  {
    "title": "鬼挡墙",
    "genre": "恐怖 / 惊悚 / 民俗",
    "tags": "民间传说, 循环, 公路, 诡异",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./126.jpg",
    "url": "./movie-1626.html"
  },
  {
    "title": "萨巴达传",
    "genre": "历史、传记",
    "tags": "革命、英雄、农民、史诗",
    "region": "墨西哥",
    "type": "电影",
    "year": "2014",
    "cover": "./127.jpg",
    "url": "./movie-1627.html"
  },
  {
    "title": "撒旦回归",
    "genre": "恐怖, 动作, 奇幻",
    "tags": "印度神话, 驱魔, 恶魔, 宝莱坞",
    "region": "印度",
    "type": "电影",
    "year": "2027",
    "cover": "./128.jpg",
    "url": "./movie-1628.html"
  },
  {
    "title": "血玺金刀粤语",
    "genre": "武侠 / 古装 / 权谋",
    "tags": "皇权争夺, 江湖秘宝, 双雄对决, 家族恩怨, 粤语武侠",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1991",
    "cover": "./129.jpg",
    "url": "./movie-1629.html"
  },
  {
    "title": "独立纵队",
    "genre": "战争，动作",
    "tags": "抗日，土匪改编，草根英雄",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2012",
    "cover": "./130.jpg",
    "url": "./movie-1630.html"
  },
  {
    "title": "失踪：马航370",
    "genre": "悬疑 / 灾难 / 剧情",
    "tags": "航空谜团, 平行时空, 家属群像",
    "region": "马来西亚 / 澳大利亚",
    "type": "剧集",
    "year": "2024",
    "cover": "./131.jpg",
    "url": "./movie-1631.html"
  },
  {
    "title": "巴黎单身公寓",
    "genre": "爱情，喜剧",
    "tags": "合租，浪漫，法式",
    "region": "法国",
    "type": "剧集",
    "year": "2023",
    "cover": "./132.jpg",
    "url": "./movie-1632.html"
  },
  {
    "title": "瓦尔特雷比亚假日",
    "genre": "剧情 / 爱情 / 战争",
    "tags": "二战, 意大利风情, 禁忌之恋",
    "region": "意大利 / 法国",
    "type": "电影",
    "year": "1969",
    "cover": "./133.jpg",
    "url": "./movie-1633.html"
  },
  {
    "title": "义不容情粤语",
    "genre": "剧情, 犯罪, 家庭",
    "tags": "兄弟反目, 卧底, 帮派",
    "region": "中国香港",
    "type": "剧集",
    "year": "2022",
    "cover": "./134.jpg",
    "url": "./movie-1634.html"
  },
  {
    "title": "镇上陌生人",
    "genre": "悬疑, 惊悚, 恐怖",
    "tags": "小镇, 邪教, 失忆, 集体幻觉, 心理恐怖",
    "region": "西班牙",
    "type": "电影",
    "year": "2023",
    "cover": "./135.jpg",
    "url": "./movie-1635.html"
  },
  {
    "title": "墨水心",
    "genre": "奇幻, 冒险, 家庭",
    "tags": "魔法朗读, 书中角色, 父女, 欧美奇幻, 异能",
    "region": "德国",
    "type": "电影",
    "year": "2008",
    "cover": "./136.jpg",
    "url": "./movie-1636.html"
  },
  {
    "title": "血笼于女",
    "genre": "恐怖， 惊悚",
    "tags": "民俗， 女性复仇， 邪典",
    "region": "韩国",
    "type": "电影",
    "year": "2021",
    "cover": "./137.jpg",
    "url": "./movie-1637.html"
  },
  {
    "title": "亲吻",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": "初恋重逢, 失语关系, 记忆碎片, 城市漫游, 情感留白",
    "region": "法国",
    "type": "电影",
    "year": "2008",
    "cover": "./138.jpg",
    "url": "./movie-1638.html"
  },
  {
    "title": "认识的妻子",
    "genre": "奇幻 / 爱情 / 家庭",
    "tags": "婚姻危机， 穿越， 选择遗憾， 治愈",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "cover": "./139.jpg",
    "url": "./movie-1639.html"
  },
  {
    "title": "少女杀神",
    "genre": "动作, 惊悚, 犯罪",
    "tags": "复仇, 杀手训练, 地下组织, 冷兵器, 双重身份",
    "region": "韩国",
    "type": "电影",
    "year": "2018",
    "cover": "./140.jpg",
    "url": "./movie-1640.html"
  },
  {
    "title": "大楼里只有谋杀第五季",
    "genre": "喜剧, 悬疑, 犯罪",
    "tags": "播客, 破案, 老年组, 连环杀手",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./141.jpg",
    "url": "./movie-1641.html"
  },
  {
    "title": "格列佛的宇宙旅行",
    "genre": "科幻, 冒险",
    "tags": "格列佛, 宇宙, 奇观, 黑色幽默",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2025",
    "cover": "./142.jpg",
    "url": "./movie-1642.html"
  },
  {
    "title": "麻雀女王追男仔",
    "genre": "喜剧 / 爱情",
    "tags": "港式无厘头，女追男，雀坛，市井温情",
    "region": "香港",
    "type": "电影",
    "year": "2025",
    "cover": "./143.jpg",
    "url": "./movie-1643.html"
  },
  {
    "title": "空前绝后",
    "genre": "喜剧, 恶搞",
    "tags": "致敬, 喷气机, 无厘头, 灾难恶搞",
    "region": "美国",
    "type": "电影",
    "year": "1980",
    "cover": "./144.jpg",
    "url": "./movie-1644.html"
  },
  {
    "title": "傲慢与偏见之屠魔天团",
    "genre": "奇幻、动作",
    "tags": "名著改编、魔法、姐妹情",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2025",
    "cover": "./145.jpg",
    "url": "./movie-1645.html"
  },
  {
    "title": "炼体十万层：都市篇",
    "genre": "动作 / 奇幻 / 都市",
    "tags": "修仙, 反差爽剧, 职场",
    "region": "中国",
    "type": "剧集",
    "year": "2028",
    "cover": "./146.jpg",
    "url": "./movie-1646.html"
  },
  {
    "title": "鬼兆",
    "genre": "恐怖，惊悚",
    "tags": "通灵，警探，连环杀人，民俗，悬疑",
    "region": "中国香港",
    "type": "电影",
    "year": "2003",
    "cover": "./147.jpg",
    "url": "./movie-1647.html"
  },
  {
    "title": "天然子结构",
    "genre": "剧情 / 悬疑 / 科幻",
    "tags": "建筑, 自然, 神秘, 生态, 哲学",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./148.jpg",
    "url": "./movie-1648.html"
  },
  {
    "title": "太乙仙魔录之灵飞纪第三季",
    "genre": "仙侠 / 动作 / 奇幻",
    "tags": "宗门对决, 元神修炼, 群像冒险, 前世因果, 国风美学",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2018",
    "cover": "./149.jpg",
    "url": "./movie-1649.html"
  },
  {
    "title": "老板",
    "genre": "犯罪 / 剧情 / 黑色幽默",
    "tags": "黑吃黑, 卧底, 身份错位, 荒诞",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./150.jpg",
    "url": "./movie-1650.html"
  },
  {
    "title": "大力神在纽约",
    "genre": "奇幻 / 喜剧 / 家庭",
    "tags": "希腊神话，现代纽约，大力士，施瓦辛格处女作",
    "region": "美国 / 加拿大",
    "type": "电影",
    "year": "1970",
    "cover": "./1.jpg",
    "url": "./movie-1651.html"
  },
  {
    "title": "江湖女",
    "genre": "古装, 武侠, 言情",
    "tags": "女侠, 复仇, 权谋, 江湖",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./2.jpg",
    "url": "./movie-1652.html"
  },
  {
    "title": "生化危机：复仇",
    "genre": "动作 / 科幻 / 恐怖",
    "tags": "CG大作, 里昂, 克里斯, 复仇, 纽约",
    "region": "日本 / 美国",
    "type": "电影 (CG动画)",
    "year": "2017",
    "cover": "./3.jpg",
    "url": "./movie-1653.html"
  },
  {
    "title": "八面修罗之凤凰雪",
    "genre": "动作，武侠，悬疑",
    "tags": "古装，杀手，复仇，权谋，暴力美学",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "cover": "./4.jpg",
    "url": "./movie-1654.html"
  },
  {
    "title": "静默地带",
    "genre": "悬疑, 科幻, 惊悚",
    "tags": "失声城市, 封锁实验, 声波异变, 末日边界, 记忆缺口, 求生",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "cover": "./5.jpg",
    "url": "./movie-1655.html"
  },
  {
    "title": "无痛先生",
    "genre": "动作, 喜剧",
    "tags": "先天无痛感, 暴力美学, 反差萌, 黑色幽默, 爽片",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./6.jpg",
    "url": "./movie-1656.html"
  },
  {
    "title": "八达城英雄传",
    "genre": "动作，犯罪，剧情",
    "tags": "老城区，复仇，师徒，拳拳到肉",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./7.jpg",
    "url": "./movie-1657.html"
  },
  {
    "title": "沉睡花园",
    "genre": "爱情 / 奇幻 / 悬疑",
    "tags": "植物, 睡眠障碍, 梦境, 园艺师, 治愈",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "cover": "./8.jpg",
    "url": "./movie-1658.html"
  },
  {
    "title": "铁甲小宝",
    "genre": "特摄科幻儿童",
    "tags": "重启, 机器人, 和平星, 童年杀, 变形",
    "region": "日本",
    "type": "电视剧",
    "year": "2023",
    "cover": "./9.jpg",
    "url": "./movie-1659.html"
  },
  {
    "title": "埃莱扎·施莱辛格：战妆",
    "genre": "喜剧，脱口秀",
    "tags": "女性，单口喜剧，犀利，婚育",
    "region": "美国",
    "type": "综艺/脱口秀",
    "year": "2024",
    "cover": "./10.jpg",
    "url": "./movie-1660.html"
  },
  {
    "title": "黑衣女子的香气",
    "genre": "悬疑, 爱情, 剧情",
    "tags": "哥特浪漫, 香水, 庄园迷案",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./11.jpg",
    "url": "./movie-1661.html"
  },
  {
    "title": "特别的一天",
    "genre": "剧情 / 家庭",
    "tags": "老年, 失智, 父女, 日常, 催泪",
    "region": "中国台湾",
    "type": "电影",
    "year": "2020",
    "cover": "./12.jpg",
    "url": "./movie-1662.html"
  },
  {
    "title": "湘西惊魂录",
    "genre": "恐怖, 民俗",
    "tags": "赶尸, 湘西, 民国, 蛊术",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./13.jpg",
    "url": "./movie-1663.html"
  },
  {
    "title": "侦探故事",
    "genre": "悬疑, 犯罪, 黑色幽默",
    "tags": "元叙事, 作家探案, 洛杉矶黑色, 第四面墙",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./14.jpg",
    "url": "./movie-1664.html"
  },
  {
    "title": "一念风流不了情",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": "王家卫风, 多角恋, 都市, 遗憾",
    "region": "中国香港",
    "type": "电影",
    "year": "1999",
    "cover": "./15.jpg",
    "url": "./movie-1665.html"
  },
  {
    "title": "怪奇小子之海底王国",
    "genre": "动画, 冒险, 奇幻",
    "tags": "海洋, 小学生, 环保, 友情",
    "region": "日本",
    "type": "动画电影",
    "year": "2024",
    "cover": "./16.jpg",
    "url": "./movie-1666.html"
  },
  {
    "title": "妖妇",
    "genre": "悬疑, 心理惊悚",
    "tags": "朝鲜王朝, 巫女, 复仇, 女性主义, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./17.jpg",
    "url": "./movie-1667.html"
  },
  {
    "title": "时光尽头的恋人",
    "genre": "爱情， 奇幻， 剧情",
    "tags": "永生， 时空穿梭， 催泪， 宿命论",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./18.jpg",
    "url": "./movie-1668.html"
  },
  {
    "title": "德洛丽丝",
    "genre": "恐怖",
    "tags": "娃娃, 寄生, 母职, 心理恐怖, 身体恐怖",
    "region": "西班牙",
    "type": "电影",
    "year": "2027",
    "cover": "./19.jpg",
    "url": "./movie-1669.html"
  },
  {
    "title": "想做熊的孩子",
    "genre": "动画 / 家庭 / 奇幻",
    "tags": "北欧神话, 成长, 治愈, 极简画风, 环保",
    "region": "丹麦 / 法国",
    "type": "电影",
    "year": "2024",
    "cover": "./20.jpg",
    "url": "./movie-1670.html"
  },
  {
    "title": "穿鞋子的贝壳马塞尔",
    "genre": "动画/家庭/奇幻",
    "tags": "贝壳, 定格动画, 微小世界, 亲情, 治愈",
    "region": "美国",
    "type": "电影/动画",
    "year": "2025",
    "cover": "./21.jpg",
    "url": "./movie-1671.html"
  },
  {
    "title": "小捣蛋闹翻天",
    "genre": "喜剧 / 家庭",
    "tags": "童子军, 恶作剧, 夏令营, 两代和解",
    "region": "美国",
    "type": "电影 / 儿童",
    "year": "2014",
    "cover": "./22.jpg",
    "url": "./movie-1672.html"
  },
  {
    "title": "上岸",
    "genre": "悬疑 / 犯罪",
    "tags": "卧底，骗局，身份认同，水岸美学",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "cover": "./23.jpg",
    "url": "./movie-1673.html"
  },
  {
    "title": "梦幻天堂",
    "genre": "奇幻, 爱情, 梦境冒险",
    "tags": "零下零点列车、梦境考古、失忆恋人、规则反转、歌舞插曲、心理疗愈",
    "region": "日本",
    "type": "剧情",
    "year": "2019",
    "cover": "./24.jpg",
    "url": "./movie-1674.html"
  },
  {
    "title": "热血忠魂之独行侍卫",
    "genre": "古装、动作、历史",
    "tags": "锦衣卫, 孤胆英雄, 家国情怀",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2003",
    "cover": "./25.jpg",
    "url": "./movie-1675.html"
  },
  {
    "title": "家春秋",
    "genre": "剧情 / 家庭 / 年代",
    "tags": "家族兴衰, 时代变迁, 伦理纠葛",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./26.jpg",
    "url": "./movie-1676.html"
  },
  {
    "title": "猎魔者",
    "genre": "奇幻， 动作",
    "tags": "恶魔， 猎杀， 背叛",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "cover": "./27.jpg",
    "url": "./movie-1677.html"
  },
  {
    "title": "温顺者",
    "genre": "悬疑 / 犯罪",
    "tags": "反转，心理压迫，底层反抗",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./28.jpg",
    "url": "./movie-1678.html"
  },
  {
    "title": "夜夜行凶",
    "genre": "惊悚, 悬疑, 犯罪",
    "tags": "夜班, 连环案, 双重身份, 雨夜, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2016",
    "cover": "./29.jpg",
    "url": "./movie-1679.html"
  },
  {
    "title": "红旗渠1971",
    "genre": "时代 / 剧情 / 建设",
    "tags": "修渠攻坚, 集体记忆, 山地工程, 青年群像, 奋斗史诗",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2021",
    "cover": "./30.jpg",
    "url": "./movie-1680.html"
  },
  {
    "title": "瞒天过海2：长驱直入",
    "genre": "动作, 犯罪, 惊悚",
    "tags": "特种兵, 复仇, 劫狱, 硬汉, 枪战",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "cover": "./31.jpg",
    "url": "./movie-1681.html"
  },
  {
    "title": "穷追不舍",
    "genre": "动作，惊悚",
    "tags": "追逐，复仇，极限运动，反转",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./32.jpg",
    "url": "./movie-1682.html"
  },
  {
    "title": "杨七郎威震神州擂",
    "genre": "动作 / 古装",
    "tags": "杨家将, 擂台比武, 八十年代武打片, 七郎, 忠烈",
    "region": "中国大陆",
    "type": "电影",
    "year": "1985",
    "cover": "./33.jpg",
    "url": "./movie-1683.html"
  },
  {
    "title": "绿美广东·野性岭南",
    "genre": "纪录片 / 自然 / 地理",
    "tags": "广东生态, 生物多样性, 城市与自然, 粤语旁白",
    "region": "中国大陆",
    "type": "纪录片",
    "year": "2025",
    "cover": "./34.jpg",
    "url": "./movie-1684.html"
  },
  {
    "title": "木乃伊博物馆",
    "genre": "恐怖",
    "tags": "猎奇, 古埃及, 诅咒, 博物馆之夜",
    "region": "意大利",
    "type": "电影",
    "year": "2021",
    "cover": "./35.jpg",
    "url": "./movie-1685.html"
  },
  {
    "title": "伦敦呼叫",
    "genre": "惊悚 / 悬疑 / 犯罪",
    "tags": "海盗电台，连环杀手，追凶，密室求救",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./36.jpg",
    "url": "./movie-1686.html"
  },
  {
    "title": "一屋哨牙鬼",
    "genre": "喜剧， 恐怖",
    "tags": "僵尸， 无厘头， 合家欢",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./37.jpg",
    "url": "./movie-1687.html"
  },
  {
    "title": "跨越非洲：世界杯追梦旅程",
    "genre": "剧情 / 运动",
    "tags": "足球, 梦想, 非洲, 草根逆袭",
    "region": "中国大陆 / 南非",
    "type": "电影",
    "year": "2026",
    "cover": "./38.jpg",
    "url": "./movie-1688.html"
  },
  {
    "title": "角落办公室",
    "genre": "惊悚",
    "tags": "职场恐怖, 人格分裂, 密室",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./39.jpg",
    "url": "./movie-1689.html"
  },
  {
    "title": "我很幸福",
    "genre": "爱情/成长/治愈",
    "tags": "婚礼抉择, 失业, 亲情重建, 幸福定义",
    "region": "中国台湾",
    "type": "剧情片",
    "year": "2024",
    "cover": "./40.jpg",
    "url": "./movie-1690.html"
  },
  {
    "title": "玉响完结篇第二部：响",
    "genre": "治愈 / 青春 / 日常",
    "tags": "摄影 / 毕业 / 友情 / 小镇",
    "region": "日本",
    "type": "电影 / 动画",
    "year": "2015",
    "cover": "./41.jpg",
    "url": "./movie-1691.html"
  },
  {
    "title": "妈妈的罗曼史",
    "genre": "家庭, 爱情, 年代",
    "tags": "单亲妈妈, 初恋, 误解, 催泪",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2019",
    "cover": "./42.jpg",
    "url": "./movie-1692.html"
  },
  {
    "title": "嗜睡症",
    "genre": "悬疑, 惊悚",
    "tags": "梦境, 心理, 反转",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./43.jpg",
    "url": "./movie-1693.html"
  },
  {
    "title": "另一个波琳家的女孩",
    "genre": "历史, 剧情, 爱情",
    "tags": "宫廷斗争, 姐妹反目, 亨利八世, 女性悲剧",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./44.jpg",
    "url": "./movie-1694.html"
  },
  {
    "title": "大独裁者",
    "genre": "喜剧、剧情、战争",
    "tags": "卓别林，讽刺喜剧，反战，经典演讲",
    "region": "美国",
    "type": "电影",
    "year": "1940",
    "cover": "./45.jpg",
    "url": "./movie-1695.html"
  },
  {
    "title": "奶酪陷阱2018",
    "genre": "爱情 / 悬疑 / 校园",
    "tags": "校园, 腹黑学长, 社会新人, 人设, 反转",
    "region": "韩国",
    "type": "剧集",
    "year": "2018",
    "cover": "./46.jpg",
    "url": "./movie-1696.html"
  },
  {
    "title": "背锅侠",
    "genre": "喜剧，职场，悬疑",
    "tags": "社畜，背锅，反转，爽剧，讽刺",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./47.jpg",
    "url": "./movie-1697.html"
  },
  {
    "title": "科学救援组",
    "genre": "科幻, 灾难",
    "tags": "硬科幻, 团队合作, 解谜, 高概念",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./48.jpg",
    "url": "./movie-1698.html"
  },
  {
    "title": "青春雷锋",
    "genre": "传记歌舞",
    "tags": "音乐剧, 理想主义, 年代质感",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./49.jpg",
    "url": "./movie-1699.html"
  },
  {
    "title": "魔游纪4：白骨之姬",
    "genre": "奇幻，动作",
    "tags": "西游改编，白骨精，前世今生，虐恋",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./50.jpg",
    "url": "./movie-1700.html"
  },
  {
    "title": "医学之旅",
    "genre": "剧情, 职业",
    "tags": "医疗, 成长, 师徒, 人文关怀",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "cover": "./51.jpg",
    "url": "./movie-1701.html"
  },
  {
    "title": "独立",
    "genre": "历史，剧情，战争",
    "tags": "爱尔兰独立，内战，兄弟反目，共和军",
    "region": "爱尔兰",
    "type": "电影",
    "year": "2026",
    "cover": "./52.jpg",
    "url": "./movie-1702.html"
  },
  {
    "title": "女人害怕黑夜吗2",
    "genre": "恐怖，悬疑，女性",
    "tags": "都市传说，姐妹情，反转，续集",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./53.jpg",
    "url": "./movie-1703.html"
  },
  {
    "title": "新宿暴徒",
    "genre": "动作, 犯罪",
    "tags": "极道, 反英雄, 血腥",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./54.jpg",
    "url": "./movie-1704.html"
  },
  {
    "title": "周恩来",
    "genre": "传记 / 历史",
    "tags": "伟人、外交、建国、细节",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "cover": "./55.jpg",
    "url": "./movie-1705.html"
  },
  {
    "title": "钟楼怪人1996国语",
    "genre": "动画 / 歌舞 / 剧情 / 冒险",
    "tags": "哥特巴黎, 命运审判, 善恶边界, 经典配乐, 人性救赎",
    "region": "美国",
    "type": "电影",
    "year": "1996",
    "cover": "./56.jpg",
    "url": "./movie-1706.html"
  },
  {
    "title": "神魂颠倒",
    "genre": "爱情/喜剧/奇幻",
    "tags": "互换身体，冤家变情侣，职场恋爱",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./57.jpg",
    "url": "./movie-1707.html"
  },
  {
    "title": "走佬天王",
    "genre": "动作, 喜剧, 公路片",
    "tags": "骑楼文化, 假身份, 遗失兄弟, 追赎行动",
    "region": "香港",
    "type": "电影",
    "year": "2023",
    "cover": "./58.jpg",
    "url": "./movie-1708.html"
  },
  {
    "title": "海盗城",
    "genre": "动作，古装，冒险",
    "tags": "海盗，朝鲜时代，寻宝，权谋",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./59.jpg",
    "url": "./movie-1709.html"
  },
  {
    "title": "明月几时有国语",
    "genre": "古装 / 悬疑",
    "tags": "宋朝，诗词，连环案，文人，权斗",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./60.jpg",
    "url": "./movie-1710.html"
  },
  {
    "title": "谋杀下山事件",
    "genre": "悬疑 / 推理 / 犯罪",
    "tags": "暴风雪山庄, 登山社, 复仇, 时间胶囊",
    "region": "日本",
    "type": "电视剧",
    "year": "2025",
    "cover": "./61.jpg",
    "url": "./movie-1711.html"
  },
  {
    "title": "苏镇巫女",
    "genre": "喜剧、恐怖、奇幻",
    "tags": "巫术、小镇、黑色幽默、诅咒、家族",
    "region": "西班牙",
    "type": "电影",
    "year": "2013",
    "cover": "./62.jpg",
    "url": "./movie-1712.html"
  },
  {
    "title": "恐怖护理站",
    "genre": "恐怖 / 医疗 / 惊悚",
    "tags": "医院怪谈, 恶鬼附身, 护士驱魔, 单元惊悚",
    "region": "韩国",
    "type": "剧集",
    "year": "2021",
    "cover": "./63.jpg",
    "url": "./movie-1713.html"
  },
  {
    "title": "青春再见青春",
    "genre": "剧情 / 青春",
    "tags": "中年危机， 同学聚会， 怀旧， 现实碾压",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "cover": "./64.jpg",
    "url": "./movie-1714.html"
  },
  {
    "title": "夏日烟火",
    "genre": "剧情， 青春",
    "tags": "夏日， 绝症， 遗憾， 初恋",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "cover": "./65.jpg",
    "url": "./movie-1715.html"
  },
  {
    "title": "前妻别跑",
    "genre": "爱情，喜剧",
    "tags": "离婚，复合，先婚后爱，破镜重圆",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./66.jpg",
    "url": "./movie-1716.html"
  },
  {
    "title": "麦加朝圣之旅",
    "genre": "冒险, 人文, 宗教, 励志, 现实主义",
    "tags": "朝圣, 跨文化, 个人救赎, 边境政治, 人道救援, 家庭和解",
    "region": "中国大陆",
    "type": "冒险剧情电影",
    "year": "2025",
    "cover": "./67.jpg",
    "url": "./movie-1717.html"
  },
  {
    "title": "波哥大：最后的机会之地",
    "genre": "犯罪 / 剧情",
    "tags": "毒枭, 地下移民, 多线叙事",
    "region": "哥伦比亚 / 美国",
    "type": "剧集",
    "year": "2026",
    "cover": "./68.jpg",
    "url": "./movie-1718.html"
  },
  {
    "title": "喜羊羊与灰太狼之异国破晓",
    "genre": "动画， 冒险， 喜剧",
    "tags": "异世界， 魔法， 友情， 机甲",
    "region": "中国大陆",
    "type": "电影（动画）",
    "year": "2025",
    "cover": "./69.jpg",
    "url": "./movie-1719.html"
  },
  {
    "title": "7步成尸",
    "genre": "恐怖",
    "tags": "僵尸, 湘西赶尸, 茅山术, 动作",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./70.jpg",
    "url": "./movie-1720.html"
  },
  {
    "title": "樱桃红之袖珍妈妈",
    "genre": "家庭伦理",
    "tags": "温情, 社会边缘人群, 母性光辉",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./71.jpg",
    "url": "./movie-1721.html"
  },
  {
    "title": "追梦人小酒馆",
    "genre": "剧情 / 治愈",
    "tags": "深夜食堂风, 人生百态, 台北故事, 梦想与现实",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "cover": "./72.jpg",
    "url": "./movie-1722.html"
  },
  {
    "title": "绿宝机密",
    "genre": "剧情 / 惊悚",
    "tags": "亚马逊, 矿场, 人性, 贪婪, 犯罪",
    "region": "巴西",
    "type": "电影",
    "year": "2017",
    "cover": "./73.jpg",
    "url": "./movie-1723.html"
  },
  {
    "title": "民谣搜集者",
    "genre": "音乐 / 剧情 / 历史",
    "tags": "民谣复兴, 口述历史, 乡村公路, 代际和解",
    "region": "爱尔兰",
    "type": "剧集",
    "year": "2024",
    "cover": "./74.jpg",
    "url": "./movie-1724.html"
  },
  {
    "title": "明月香衾",
    "genre": "爱情, 戏曲",
    "tags": "粤语片, 芳艳芬, 悲情",
    "region": "中国香港",
    "type": "电影",
    "year": "1959",
    "cover": "./75.jpg",
    "url": "./movie-1725.html"
  },
  {
    "title": "二八佳人花公子",
    "genre": "古装 / 喜剧 / 爱情",
    "tags": "女扮男装, 科举, 错位, 欢喜冤家, 扮猪吃虎",
    "region": "中国",
    "type": "剧集",
    "year": "2022",
    "cover": "./76.jpg",
    "url": "./movie-1726.html"
  },
  {
    "title": "时光遗忘之人",
    "genre": "科幻, 剧情",
    "tags": "时间旅行, 失忆, 悬疑, 温情",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./77.jpg",
    "url": "./movie-1727.html"
  },
  {
    "title": "花田喜事1993",
    "genre": "喜剧, 爱情, 古装",
    "tags": "爆笑, 全明星阵容, 错位婚姻, 民俗改编, 贺岁",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "cover": "./78.jpg",
    "url": "./movie-1728.html"
  },
  {
    "title": "荣耀三九年",
    "genre": "战争 / 历史 / 剧情",
    "tags": "二战前夕, 骑兵, 间谍, 忠诚, 悲壮",
    "region": "英国 / 波兰",
    "type": "电影",
    "year": "2026",
    "cover": "./79.jpg",
    "url": "./movie-1729.html"
  },
  {
    "title": "终极特警第一季",
    "genre": "动作 / 悬疑 / 剧情",
    "tags": "SAS, 反恐, 内鬼, 小队, 战术",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./80.jpg",
    "url": "./movie-1730.html"
  },
  {
    "title": "小屋",
    "genre": "恐怖， 惊悚",
    "tags": "森林， 怪谈， 心理恐惧",
    "region": "加拿大",
    "type": "电影",
    "year": "2023",
    "cover": "./81.jpg",
    "url": "./movie-1731.html"
  },
  {
    "title": "附加物",
    "genre": "科幻 / 悬疑",
    "tags": "仿生义肢, 黑市器官, 身份危机, 近未来",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "cover": "./82.jpg",
    "url": "./movie-1732.html"
  },
  {
    "title": "仙踪迷失",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": "精灵, 平行世界, 失踪儿童, 魔法森林, 环保",
    "region": "新西兰",
    "type": "剧集",
    "year": "2024",
    "cover": "./83.jpg",
    "url": "./movie-1733.html"
  },
  {
    "title": "错结良缘粤语",
    "genre": "喜剧, 爱情, 家庭",
    "tags": "欢喜冤家, 先婚后爱, 港式幽默, 市井",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2000",
    "cover": "./84.jpg",
    "url": "./movie-1734.html"
  },
  {
    "title": "弥次喜多道中 奇鱼",
    "genre": "喜剧 / 奇幻",
    "tags": "公路, 江户, 食人鱼",
    "region": "日本",
    "type": "电影",
    "year": "2007",
    "cover": "./85.jpg",
    "url": "./movie-1735.html"
  },
  {
    "title": "香蕉先生",
    "genre": "奇幻 / 爱情 / 喜剧",
    "tags": "都市奇幻, 变身, 植物人设, 欢喜冤家, 轻喜剧",
    "region": "台湾",
    "type": "电视剧",
    "year": "2023",
    "cover": "./86.jpg",
    "url": "./movie-1736.html"
  },
  {
    "title": "圣灵",
    "genre": "恐怖 / 悬疑 / 超自然",
    "tags": "驱魔, 心理恐怖, 宗教, 反转",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./87.jpg",
    "url": "./movie-1737.html"
  },
  {
    "title": "皮卡德罗",
    "genre": "剧情, 悬疑",
    "tags": "人性实验, 密室, 阶级, 巴斯克",
    "region": "西班牙, 法国",
    "type": "电影",
    "year": "2026",
    "cover": "./88.jpg",
    "url": "./movie-1738.html"
  },
  {
    "title": "爆肝工程师的异世界狂想曲",
    "genre": "奇幻，冒险，喜剧",
    "tags": "异世界，程序员，开挂，美食",
    "region": "日本",
    "type": "动画",
    "year": "2025",
    "cover": "./89.jpg",
    "url": "./movie-1739.html"
  },
  {
    "title": "执法女先锋",
    "genre": "动作, 犯罪, 惊悚",
    "tags": "女警, 暴力美学, B级片, 飙车, 以暴制暴",
    "region": "美国",
    "type": "电影",
    "year": "1994",
    "cover": "./90.jpg",
    "url": "./movie-1740.html"
  },
  {
    "title": "爱在缅因州",
    "genre": "爱情, 剧情, 治愈",
    "tags": "缅因州, 灯塔, 失忆恋人",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./91.jpg",
    "url": "./movie-1741.html"
  },
  {
    "title": "十四天之暖春来",
    "genre": "剧情, 家庭, 治愈",
    "tags": "隔离, 社区, 邻里, 疫情, 温情",
    "region": "中国",
    "type": "剧集",
    "year": "2020",
    "cover": "./92.jpg",
    "url": "./movie-1742.html"
  },
  {
    "title": "新人类！男友会漏电",
    "genre": "科幻爱情 / 喜剧 / 都市奇想",
    "tags": "人工伴侣, 电流体质, 近未来, 恋爱实验, 轻喜反转",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2029",
    "cover": "./93.jpg",
    "url": "./movie-1743.html"
  },
  {
    "title": "独生子",
    "genre": "家庭, 现实, 伦理",
    "tags": "独子责任, 婚姻抉择, 养老压力, 房贷困局, 原生家庭, 中年危机",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2013",
    "cover": "./94.jpg",
    "url": "./movie-1744.html"
  },
  {
    "title": "猛虎英雄传",
    "genre": "武侠、动作、历史",
    "tags": "武林盟约, 义气, 谋略, 边疆乱世, 江湖规矩",
    "region": "中国大陆",
    "type": "武侠动作电影",
    "year": "2009",
    "cover": "./95.jpg",
    "url": "./movie-1745.html"
  },
  {
    "title": "购物女王",
    "genre": "喜剧 / 剧情 / 都市",
    "tags": "直播带货, 消费主义, 女性觉醒, 职场, 黑色幽默",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./96.jpg",
    "url": "./movie-1746.html"
  },
  {
    "title": "好鞋成双",
    "genre": "剧情 / 运动",
    "tags": "足球, 兄弟, 阶级, 励志",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./97.jpg",
    "url": "./movie-1747.html"
  },
  {
    "title": "想见你的爱",
    "genre": "爱情, 奇幻",
    "tags": "盲人, 摄影师, 时间回溯, 治愈",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "cover": "./98.jpg",
    "url": "./movie-1748.html"
  },
  {
    "title": "擒纵器",
    "genre": "科幻，悬疑，惊悚",
    "tags": "时间循环，机械原理，高概念，烧脑",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./99.jpg",
    "url": "./movie-1749.html"
  },
  {
    "title": "小子难缠3",
    "genre": "动作 / 运动 / 家庭",
    "tags": "空手道, 复仇, 励志",
    "region": "美国",
    "type": "电影",
    "year": "1989",
    "cover": "./100.jpg",
    "url": "./movie-1750.html"
  },
  {
    "title": "我的媳夫",
    "genre": "爱情, 喜剧, 职场, 家庭",
    "tags": "反差婚姻, 家务天才, 职场压力, 同居日常, 轻松治愈, 角色互补",
    "region": "日本",
    "type": "电视剧",
    "year": "2023",
    "cover": "./101.jpg",
    "url": "./movie-1751.html"
  },
  {
    "title": "初来乍盗",
    "genre": "喜剧, 犯罪",
    "tags": "笨贼, 乌龙, 黑色幽默, 小人物",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./102.jpg",
    "url": "./movie-1752.html"
  },
  {
    "title": "圣特鲁佩斯的警察",
    "genre": "喜剧, 动作",
    "tags": "警察, 度假, 乌龙, 跨国犯罪",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./103.jpg",
    "url": "./movie-1753.html"
  },
  {
    "title": "风流怪才祝枝山",
    "genre": "喜剧 / 古装",
    "tags": "唐伯虎，江南四大才子，智斗，戏说",
    "region": "中国大陆",
    "type": "电影",
    "year": "1990",
    "cover": "./104.jpg",
    "url": "./movie-1754.html"
  },
  {
    "title": "鲁邦三世 鲁邦暗杀指令",
    "genre": "动作 / 犯罪 / 喜剧",
    "tags": "怪盗, 克隆人, 峰不二子, 大盗, 经典IP",
    "region": "日本",
    "type": "电影 / 动画",
    "year": "1993",
    "cover": "./105.jpg",
    "url": "./movie-1755.html"
  },
  {
    "title": "卧底型警之香港狂骚曲",
    "genre": "喜剧, 动作, 犯罪",
    "tags": "日式搞笑, 无间道, 黑帮, 枪战, 错位",
    "region": "日本, 中国香港",
    "type": "电影",
    "year": "2026",
    "cover": "./106.jpg",
    "url": "./movie-1756.html"
  },
  {
    "title": "角头风云",
    "genre": "动作/犯罪/黑帮",
    "tags": "台湾黑帮, 江湖义气, 悲剧, 本土, 角头",
    "region": "中国台湾",
    "type": "电影",
    "year": "1989",
    "cover": "./107.jpg",
    "url": "./movie-1757.html"
  },
  {
    "title": "娥摩拉罪恶之城",
    "genre": "犯罪, 剧情, 黑帮",
    "tags": "黑手党, 纪实风格, 残酷青春, 家族背叛",
    "region": "意大利",
    "type": "电视剧",
    "year": "2024",
    "cover": "./108.jpg",
    "url": "./movie-1758.html"
  },
  {
    "title": "她的马拉松",
    "genre": "喜剧 / 剧情 / 运动",
    "tags": "跑步成长, 自我疗愈, 城市长跑, 体型焦虑, 轻松励志",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "cover": "./109.jpg",
    "url": "./movie-1759.html"
  },
  {
    "title": "风流家族",
    "genre": "喜剧 / 家庭 / 剧情",
    "tags": "豪门, 争产, 荒诞, 温情, 港式幽默",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./110.jpg",
    "url": "./movie-1760.html"
  },
  {
    "title": "柏德里纳的新娘",
    "genre": "剧情 / 历史",
    "tags": "西西里, 包办婚姻, 女性觉醒",
    "region": "意大利",
    "type": "电影",
    "year": "1967",
    "cover": "./111.jpg",
    "url": "./movie-1761.html"
  },
  {
    "title": "甜心2021",
    "genre": "爱情，奇幻，音乐",
    "tags": "穿越，甜点，暗恋",
    "region": "台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./112.jpg",
    "url": "./movie-1762.html"
  },
  {
    "title": "一个人的武林",
    "genre": "动作, 犯罪",
    "tags": "现代武侠, 打斗, 复仇, 悬疑",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "cover": "./113.jpg",
    "url": "./movie-1763.html"
  },
  {
    "title": "滑稽女郎",
    "genre": "剧情 / 音乐 / 女性",
    "tags": "单口喜剧，1970年代，脱口秀",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "cover": "./114.jpg",
    "url": "./movie-1764.html"
  },
  {
    "title": "何塞·黎刹",
    "genre": "传记/历史",
    "tags": "殖民抗争, 知识分子, 绝笔诗, 法庭辩论",
    "region": "菲律宾",
    "type": "电影",
    "year": "2025",
    "cover": "./115.jpg",
    "url": "./movie-1765.html"
  },
  {
    "title": "财色皆空",
    "genre": "剧情, 惊悚, 黑色幽默",
    "tags": "贪婪, 幻觉, 罪与罚, 都市传说",
    "region": "中国香港",
    "type": "电影",
    "year": "2011",
    "cover": "./116.jpg",
    "url": "./movie-1766.html"
  },
  {
    "title": "危险小宝贝",
    "genre": "惊悚 / 恐怖",
    "tags": "恐怖娃娃, 家庭入侵, 反转",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./117.jpg",
    "url": "./movie-1767.html"
  },
  {
    "title": "爸爸已死",
    "genre": "剧情 / 家庭 / 黑色幽默",
    "tags": "北欧冷感, 遗产骗局, 谎言雪球, 亲情解构",
    "region": "丹麦 / 瑞典",
    "type": "电影",
    "year": "2023",
    "cover": "./118.jpg",
    "url": "./movie-1768.html"
  },
  {
    "title": "猿",
    "genre": "科幻惊悚",
    "tags": "基因突变, 实验室, 末世, 智商碾压",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./119.jpg",
    "url": "./movie-1769.html"
  },
  {
    "title": "妓女。演员。皮条客",
    "genre": "剧情, 黑色幽默",
    "tags": "戏中戏, 女性, 阶级, 荒诞",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "cover": "./120.jpg",
    "url": "./movie-1770.html"
  },
  {
    "title": "沙仙活地魔",
    "genre": "奇幻 / 家庭 / 冒险",
    "tags": "许愿、沙精灵、反套路、童真代价",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./121.jpg",
    "url": "./movie-1771.html"
  },
  {
    "title": "变相怪杰2：面具之子",
    "genre": "喜剧、奇幻、动作",
    "tags": "面具、父子、传承、恶搞、亚文化",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./122.jpg",
    "url": "./movie-1772.html"
  },
  {
    "title": "希腊欢迎你国语",
    "genre": "喜剧 / 爱情",
    "tags": "异国恋, 文化冲突, 浪漫, 风光",
    "region": "希腊 / 中国",
    "type": "电影",
    "year": "2024",
    "cover": "./123.jpg",
    "url": "./movie-1773.html"
  },
  {
    "title": "荡女环游世界",
    "genre": "剧情, 情色",
    "tags": "公路, 女性, 解放",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./124.jpg",
    "url": "./movie-1774.html"
  },
  {
    "title": "钢铁大伍：救国的铁箱子",
    "genre": "科幻/战争/冒险",
    "tags": "机甲，二战，穿越，热血",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./125.jpg",
    "url": "./movie-1775.html"
  },
  {
    "title": "疯狂香港富豪",
    "genre": "喜剧 / 剧情",
    "tags": "豪门, 荒诞, 讽刺",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./126.jpg",
    "url": "./movie-1776.html"
  },
  {
    "title": "圣诞奇遇结良缘",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": "圣诞, 时间循环, 相亲, 自我成长, 温馨",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./127.jpg",
    "url": "./movie-1777.html"
  },
  {
    "title": "神秘博士第九季",
    "genre": "科幻 / 冒险",
    "tags": "时间旅行, 忏悔罗盘, 克拉拉之死, 扎贡人",
    "region": "英国",
    "type": "剧集",
    "year": "2015",
    "cover": "./128.jpg",
    "url": "./movie-1778.html"
  },
  {
    "title": "谍·莲花",
    "genre": "谍战, 悬疑",
    "tags": "民国, 密码战, 双面间谍",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "cover": "./129.jpg",
    "url": "./movie-1779.html"
  },
  {
    "title": "我名为人",
    "genre": "科幻， 伦理， 惊悚",
    "tags": "仿生人， 记忆植入， 哲学， 阶级， 反抗",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2027",
    "cover": "./130.jpg",
    "url": "./movie-1780.html"
  },
  {
    "title": "超级战队世界",
    "genre": "特摄, 动作",
    "tags": "平行宇宙, 全明星, 情怀, 巨大战, 合体",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./131.jpg",
    "url": "./movie-1781.html"
  },
  {
    "title": "仙乐舞",
    "genre": "歌舞，爱情，奇幻",
    "tags": "宝莱坞，前世今生，古典舞，反殖民，乐器有灵",
    "region": "印度",
    "type": "电影",
    "year": "2019",
    "cover": "./132.jpg",
    "url": "./movie-1782.html"
  },
  {
    "title": "自杀式攻击",
    "genre": "战争 / 历史 / 伦理",
    "tags": "神风特攻队，日本人，美军，反思",
    "region": "美国 / 德国",
    "type": "电视剧 (6集)",
    "year": "2026",
    "cover": "./133.jpg",
    "url": "./movie-1783.html"
  },
  {
    "title": "忘我奇缘",
    "genre": "爱情 / 奇幻",
    "tags": "失忆, 书店, 灵魂伴侣, 治愈",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./134.jpg",
    "url": "./movie-1784.html"
  },
  {
    "title": "杀手梦",
    "genre": "动作， 悬疑， 剧情",
    "tags": "双重人格， 记忆篡改， 杀手， 梦境， 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "cover": "./135.jpg",
    "url": "./movie-1785.html"
  },
  {
    "title": "鲱云",
    "genre": "剧情、文艺",
    "tags": "北欧、渔业消亡、父子、沉默叙事",
    "region": "瑞典",
    "type": "电影",
    "year": "2019",
    "cover": "./136.jpg",
    "url": "./movie-1786.html"
  },
  {
    "title": "漫研社第一季",
    "genre": "喜剧, 日常, 校园",
    "tags": "漫画家, 社团, 废萌, 职场",
    "region": "日本",
    "type": "动画剧集",
    "year": "2024",
    "cover": "./137.jpg",
    "url": "./movie-1787.html"
  },
  {
    "title": "那一场呼啸而过的青春",
    "genre": "青春 / 悬疑",
    "tags": "校园霸凌, 失踪案, 非线性叙事",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./138.jpg",
    "url": "./movie-1788.html"
  },
  {
    "title": "动物总动员",
    "genre": "动画, 喜剧, 冒险",
    "tags": "狂欢, 反猎, 城市冒险, 联盟, 生存",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./139.jpg",
    "url": "./movie-1789.html"
  },
  {
    "title": "魔幻凶间",
    "genre": "悬疑，奇幻，恐怖",
    "tags": "神秘房间，愿望代价，单元剧，道德困境",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "cover": "./140.jpg",
    "url": "./movie-1790.html"
  },
  {
    "title": "师姐也疯狂",
    "genre": "喜剧 / 动作",
    "tags": "港片经典, 女警, 卧底, 乌龙, 打女",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "cover": "./141.jpg",
    "url": "./movie-1791.html"
  },
  {
    "title": "地窖怪客",
    "genre": "恐怖， 惊悚",
    "tags": "密室惊悚， 家庭入侵， 反转结局， 心理恐怖， 地窖",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./142.jpg",
    "url": "./movie-1792.html"
  },
  {
    "title": "兜乱鸳鸯",
    "genre": "喜剧、爱情、家庭",
    "tags": "身份互换，婚礼乌龙，家族世仇，港式无厘头，阴差阳错",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./143.jpg",
    "url": "./movie-1793.html"
  },
  {
    "title": "理想之家",
    "genre": "剧情, 喜剧, 家庭",
    "tags": "买房, 现实, 温情, 小人物",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./144.jpg",
    "url": "./movie-1794.html"
  },
  {
    "title": "泰版对不起，我爱你",
    "genre": "爱情 / 剧情",
    "tags": "虐恋, 收养, 绝症",
    "region": "泰国",
    "type": "电视剧",
    "year": "2024",
    "cover": "./145.jpg",
    "url": "./movie-1795.html"
  },
  {
    "title": "迪克炸药1944",
    "genre": "战争/黑色幽默",
    "tags": "假冒军官，荒诞营救，纳粹讽刺",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "cover": "./146.jpg",
    "url": "./movie-1796.html"
  },
  {
    "title": "迁徙",
    "genre": "纪录片 / 剧情",
    "tags": "动物隐喻, 留守儿童, 春运, 公路片",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./147.jpg",
    "url": "./movie-1797.html"
  },
  {
    "title": "乔·皮克特第二季",
    "genre": "犯罪 / 悬疑 / 西部",
    "tags": "狩猎监督官，怀俄明，环境污染，司法腐败，个人复仇",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./148.jpg",
    "url": "./movie-1798.html"
  },
  {
    "title": "手足之争",
    "genre": "剧情/运动/传记",
    "tags": "足球, 兄弟反目, 德甲, 真实事件改编",
    "region": "德国",
    "type": "电影",
    "year": "2017",
    "cover": "./149.jpg",
    "url": "./movie-1799.html"
  },
  {
    "title": "献祭",
    "genre": "恐怖, 悬疑, 宗教",
    "tags": "民俗恐怖, 邪教, 封闭空间, 心理惊悚",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./150.jpg",
    "url": "./movie-1800.html"
  },
  {
    "title": "顽抗的证人",
    "genre": "犯罪 / 悬疑 / 法庭",
    "tags": "翻案, 失忆, 律师, 腐败, 反转结局",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./1.jpg",
    "url": "./movie-1801.html"
  },
  {
    "title": "凶鳄",
    "genre": "恐怖/惊悚",
    "tags": "咸水鳄, 洪水困城, 鳄鱼猎人, 血腥狩猎",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2024",
    "cover": "./2.jpg",
    "url": "./movie-1802.html"
  },
  {
    "title": "深入敌后",
    "genre": "战争, 动作",
    "tags": "飞行员, 逃生, 狙击, 波黑",
    "region": "美国",
    "type": "电影",
    "year": "2001",
    "cover": "./3.jpg",
    "url": "./movie-1803.html"
  },
  {
    "title": "乔妍的心事",
    "genre": "悬疑/心理",
    "tags": "记忆删除、替身疑云、双胞胎替换、身份错乱",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "cover": "./4.jpg",
    "url": "./movie-1804.html"
  },
  {
    "title": "拳头大风暴",
    "genre": "动作, 犯罪, 剧情",
    "tags": "拳击, 兄弟情, 黑帮复仇, 热血",
    "region": "中国香港",
    "type": "电影",
    "year": "1988",
    "cover": "./5.jpg",
    "url": "./movie-1805.html"
  },
  {
    "title": "漂流拯救队",
    "genre": "冒险 / 喜剧",
    "tags": "荒岛求生, 废品改造, 团队成长",
    "region": "美国",
    "type": "动画电影",
    "year": "2026",
    "cover": "./6.jpg",
    "url": "./movie-1806.html"
  },
  {
    "title": "亚洲警察之高压线",
    "genre": "动作, 犯罪",
    "tags": "警匪, 枪战, 跨国",
    "region": "中国香港 / 泰国",
    "type": "电影",
    "year": "1995",
    "cover": "./7.jpg",
    "url": "./movie-1807.html"
  },
  {
    "title": "死亡录像3：创世纪",
    "genre": "恐怖, 科幻",
    "tags": "丧尸, 伪纪录片, 病毒起源",
    "region": "西班牙",
    "type": "电影",
    "year": "2026",
    "cover": "./8.jpg",
    "url": "./movie-1808.html"
  },
  {
    "title": "最后的晚餐2025",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": "近未来, AI叛变, 生存游戏, 宗教隐喻",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2025",
    "cover": "./9.jpg",
    "url": "./movie-1809.html"
  },
  {
    "title": "鬼作秀2国语",
    "genre": "恐怖、奇幻",
    "tags": "分段式恐怖、恶有恶报、定格动画、年代经典",
    "region": "美国",
    "type": "电影",
    "year": "1987",
    "cover": "./10.jpg",
    "url": "./movie-1810.html"
  },
  {
    "title": "赛马艳史",
    "genre": "剧情运动",
    "tags": "赛马, 女性, 逆袭, 旧时代",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./11.jpg",
    "url": "./movie-1811.html"
  },
  {
    "title": "人生特别档案",
    "genre": "悬疑、剧情、单元剧",
    "tags": "档案室、人生选择、平行宇宙、解谜、温情",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2024",
    "cover": "./12.jpg",
    "url": "./movie-1812.html"
  },
  {
    "title": "千言慢煮",
    "genre": "剧情, 治愈",
    "tags": "私房菜, 语言障碍, 陪伴, 慢生活",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./13.jpg",
    "url": "./movie-1813.html"
  },
  {
    "title": "末日侵袭之终极一搏",
    "genre": "动作, 科幻, 惊悚",
    "tags": "废土, 角斗场, 独行侠, 暴力美学",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./14.jpg",
    "url": "./movie-1814.html"
  },
  {
    "title": "求爱敢死队",
    "genre": "浪漫、群像、搞笑",
    "tags": "恋爱技巧、失败者联盟、反转、真心",
    "region": "中国台湾",
    "type": "爱情、喜剧",
    "year": "2024",
    "cover": "./15.jpg",
    "url": "./movie-1815.html"
  },
  {
    "title": "我的拼凑家庭",
    "genre": "剧情, 家庭",
    "tags": "重组家庭, 和解, 温情",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./16.jpg",
    "url": "./movie-1816.html"
  },
  {
    "title": "荒岛魔咒",
    "genre": "惊悚、冒险、恐怖、神秘",
    "tags": "海难求生、古老诅咒、失踪村落、黑潮仪式、心理异变",
    "region": "泰国",
    "type": "惊悚冒险电影",
    "year": "2017",
    "cover": "./17.jpg",
    "url": "./movie-1817.html"
  },
  {
    "title": "我回来了。",
    "genre": "剧情，家庭",
    "tags": "亲情，治愈，时间旅行，催泪",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./18.jpg",
    "url": "./movie-1818.html"
  },
  {
    "title": "水深火热3",
    "genre": "灾难, 惊悚",
    "tags": "水怪, 深海恐惧, 密室逃生, 续作",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "cover": "./19.jpg",
    "url": "./movie-1819.html"
  },
  {
    "title": "一天",
    "genre": "悬疑 / 科幻 / 爱情",
    "tags": "时间循环, 记忆编辑, 医疗, 催泪",
    "region": "韩国",
    "type": "剧集",
    "year": "2023",
    "cover": "./20.jpg",
    "url": "./movie-1820.html"
  },
  {
    "title": "新浪潮",
    "genre": "剧情, 音乐",
    "tags": "乐队, 中年危机, 致敬",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "cover": "./21.jpg",
    "url": "./movie-1821.html"
  },
  {
    "title": "玛莎·米邱效应",
    "genre": "科幻, 惊悚",
    "tags": "记忆, 反转, 女性主角",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "cover": "./22.jpg",
    "url": "./movie-1822.html"
  },
  {
    "title": "鲸鱼马戏团",
    "genre": "剧情 / 悬疑 / 艺术",
    "tags": "黑白寓言, 末日氛围, 贝拉·塔尔",
    "region": "匈牙利 / 法国",
    "type": "电影",
    "year": "2000",
    "cover": "./23.jpg",
    "url": "./movie-1823.html"
  },
  {
    "title": "挪威的抵抗",
    "genre": "剧情 / 历史 / 战争",
    "tags": "二战, 纳粹, 抵抗运动, 真实事件改编, 勇气",
    "region": "挪威",
    "type": "电影",
    "year": "2025",
    "cover": "./24.jpg",
    "url": "./movie-1824.html"
  },
  {
    "title": "生命中最特别的朋友",
    "genre": "喜剧, 剧情",
    "tags": "友谊, 温情, 治愈, 反差萌",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "cover": "./25.jpg",
    "url": "./movie-1825.html"
  },
  {
    "title": "美眉校探 第三季",
    "genre": "悬疑 / 青春 / 犯罪",
    "tags": "女性侦探，校园悬疑，科技犯罪，暗黑系，反转",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./26.jpg",
    "url": "./movie-1826.html"
  },
  {
    "title": "名侦探柯南：零的执行人",
    "genre": "推理, 动作, 悬疑",
    "tags": "柯南, 安室透, 爆炸, 高科技犯罪, 公安警察",
    "region": "日本",
    "type": "动画电影",
    "year": "2018",
    "cover": "./27.jpg",
    "url": "./movie-1827.html"
  },
  {
    "title": "呢个校园选乜鬼",
    "genre": "喜剧, 校园, 恐怖",
    "tags": "学生会选举, 恶搞, 都市传说, 黑色幽默",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./28.jpg",
    "url": "./movie-1828.html"
  },
  {
    "title": "猎情人",
    "genre": "剧情 / 同性 / 犯罪",
    "tags": "网恋骗局, 伦理拷问, 残酷青春",
    "region": "阿根廷",
    "type": "电影",
    "year": "2025",
    "cover": "./29.jpg",
    "url": "./movie-1829.html"
  },
  {
    "title": "属于女人的奇迹",
    "genre": "剧情 / 女性 / 年代",
    "tags": "农村, 女性互助, 改革开放, 创业, 真实改编",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./30.jpg",
    "url": "./movie-1830.html"
  },
  {
    "title": "小兵传奇",
    "genre": "科幻 / 战争 / 成长",
    "tags": "未来战争, AI士兵, 阶层固化, 友情羁绊",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "cover": "./31.jpg",
    "url": "./movie-1831.html"
  },
  {
    "title": "真人快打：雪盲",
    "genre": "动作 / 奇幻 / 冒险 / 血腥",
    "tags": "游戏改编, 格斗, 异世界, 暴雪, 生存",
    "region": "美国",
    "type": "电影 / 动画",
    "year": "2022",
    "cover": "./32.jpg",
    "url": "./movie-1832.html"
  },
  {
    "title": "星球大战9：天行者崛起",
    "genre": "科幻, 动作",
    "tags": "太空歌剧, 史诗终章, 光剑对决",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "cover": "./33.jpg",
    "url": "./movie-1833.html"
  },
  {
    "title": "孤星计划",
    "genre": "悬疑科幻",
    "tags": "AI, 太空, 伦理, 独角戏, 反转",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./34.jpg",
    "url": "./movie-1834.html"
  },
  {
    "title": "激光鹰",
    "genre": "动作、科幻、冒险",
    "tags": "基因改造、神鹰、特种部队、复仇",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./35.jpg",
    "url": "./movie-1835.html"
  },
  {
    "title": "西辛4",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": "平行宇宙, 心理恐怖, 硬科幻, 烧脑, 暗黑",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./36.jpg",
    "url": "./movie-1836.html"
  },
  {
    "title": "草裙舞",
    "genre": "剧情 / 歌舞",
    "tags": "文化冲突, 女性成长, 夏威夷, 治愈",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "cover": "./37.jpg",
    "url": "./movie-1837.html"
  },
  {
    "title": "摩登澡堂",
    "genre": "喜剧，剧情，怀旧",
    "tags": "老澡堂，邻里，下岗潮，传承",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./38.jpg",
    "url": "./movie-1838.html"
  },
  {
    "title": "我的修真靠抽卡第二季",
    "genre": "奇幻喜剧,校园修真,游戏化成长",
    "tags": "抽卡系统,修真学院,灵宝合成,职场修行,轻喜剧,师承体系",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2026",
    "cover": "./39.jpg",
    "url": "./movie-1839.html"
  },
  {
    "title": "七龙珠 神龙传说",
    "genre": "动作, 奇幻, 热血",
    "tags": "冒险, 神龙, 经典改编",
    "region": "日本",
    "type": "动画电影",
    "year": "2022",
    "cover": "./40.jpg",
    "url": "./movie-1840.html"
  },
  {
    "title": "我不是弱者",
    "genre": "人生, 励志, 剧情, 体育",
    "tags": "重建生活, 身体残障, 家庭关系, 尊严, 社会标签",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "cover": "./41.jpg",
    "url": "./movie-1841.html"
  },
  {
    "title": "香江花月夜粤语",
    "genre": "歌舞 / 剧情",
    "tags": "夜总会风云, 姐妹反目, 粤语老歌, 时代变迁",
    "region": "中国香港",
    "type": "电影",
    "year": "1967",
    "cover": "./42.jpg",
    "url": "./movie-1842.html"
  },
  {
    "title": "有兽焉第三季",
    "genre": "动画, 奇幻, 喜剧",
    "tags": "山海经, 治愈, 都市妖怪",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "cover": "./43.jpg",
    "url": "./movie-1843.html"
  },
  {
    "title": "初心",
    "genre": "剧情, 传记, 运动",
    "tags": "女排, 体育精神, 郎平, 励志, 时代变迁",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "cover": "./44.jpg",
    "url": "./movie-1844.html"
  },
  {
    "title": "死亡武器",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": "人工智能武器，失控，退役军人，道德抉择，近未来",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "cover": "./45.jpg",
    "url": "./movie-1845.html"
  },
  {
    "title": "碧姬哒蕙花",
    "genre": "武侠, 剧情",
    "tags": "女侠, 复仇, 花语, 剑术",
    "region": "中国香港",
    "type": "电影",
    "year": "1978",
    "cover": "./46.jpg",
    "url": "./movie-1846.html"
  },
  {
    "title": "深夜加油站遇见大逃杀",
    "genre": "惊悚，奇幻，黑色幽默",
    "tags": "密闭空间，生存游戏，便利店文化，荒诞反转",
    "region": "日本",
    "type": "电影",
    "year": "2027",
    "cover": "./47.jpg",
    "url": "./movie-1847.html"
  },
  {
    "title": "卡贾基",
    "genre": "战争 / 历史 / 动作",
    "tags": "阿富汗战争，真实事件，狙击手，围困战",
    "region": "英国",
    "type": "电影",
    "year": "2019",
    "cover": "./48.jpg",
    "url": "./movie-1848.html"
  },
  {
    "title": "一个女人",
    "genre": "剧情、家庭、年代",
    "tags": "改革开放，女性史诗，坚韧不拔，时代变迁",
    "region": "中国大陆",
    "type": "剧集",
    "year": "1983",
    "cover": "./49.jpg",
    "url": "./movie-1849.html"
  },
  {
    "title": "三角窗外是黑夜动画版",
    "genre": "动画、悬疑、灵异",
    "tags": "除灵师、三角关系、书店老板、超自然侦探、视觉奇诡",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "cover": "./50.jpg",
    "url": "./movie-1850.html"
  },
  {
    "title": "率性而活",
    "genre": "剧情 / 运动",
    "tags": "棒球手转型, 自闭症天才, 社会边缘人, 逆袭",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./51.jpg",
    "url": "./movie-1851.html"
  },
  {
    "title": "去联谊却发现没有女生",
    "genre": "喜剧 / 校园 / 爱情",
    "tags": "误会, 社团联谊, 宅男逆袭, 合租公寓, 群像",
    "region": "日本",
    "type": "电视剧",
    "year": "2023",
    "cover": "./52.jpg",
    "url": "./movie-1852.html"
  },
  {
    "title": "熵",
    "genre": "科幻 / 惊悚 / 灾难",
    "tags": "时间失序、城市崩塌、量子实验、记忆漂移、末日倒计时、伦理抉择",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./53.jpg",
    "url": "./movie-1853.html"
  },
  {
    "title": "不死者之王剧场版圣王国篇",
    "genre": "动画, 奇幻, 战斗",
    "tags": "异世界, 黑暗奇幻, 骷髅王, 圣战, 魔导王",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./54.jpg",
    "url": "./movie-1854.html"
  },
  {
    "title": "猫之茗",
    "genre": "动画 / 奇幻",
    "tags": "治愈, 拟人, 冒险, 轻松日常",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "cover": "./55.jpg",
    "url": "./movie-1855.html"
  },
  {
    "title": "尸恋",
    "genre": "恐怖 / 爱情",
    "tags": "冥婚, 跨越阴阳, 诅咒",
    "region": "泰国",
    "type": "电影",
    "year": "2022",
    "cover": "./56.jpg",
    "url": "./movie-1856.html"
  },
  {
    "title": "巴斯克维尔的猎犬",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "tags": "古堡迷案, 诡异传说, 双线叙事, 侦探推理, 雾夜追踪, 心理博弈",
    "region": "英国",
    "type": "电影",
    "year": "2019",
    "cover": "./57.jpg",
    "url": "./movie-1857.html"
  },
  {
    "title": "解放·终局营救",
    "genre": "动作 / 战争",
    "tags": "天津战役, 城市巷战, 父女情, 钟汉良, 周一围",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "cover": "./58.jpg",
    "url": "./movie-1858.html"
  },
  {
    "title": "呼啸山庄1939",
    "genre": "爱情, 家族伦理, 悬疑",
    "tags": "贵族庄园, 遗产纷争, 悔恨纠缠",
    "region": "英国",
    "type": "剧情片",
    "year": "1939",
    "cover": "./59.jpg",
    "url": "./movie-1859.html"
  },
  {
    "title": "巅峰杀戮",
    "genre": "动作惊悚",
    "tags": "滑雪, 特种兵, 复仇, 雪山, 枪战",
    "region": "德国 / 奥地利",
    "type": "电影",
    "year": "2026",
    "cover": "./60.jpg",
    "url": "./movie-1860.html"
  },
  {
    "title": "祝你幸福！",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": "婚礼，诅咒，前任，黑色幽默，和解",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "cover": "./61.jpg",
    "url": "./movie-1861.html"
  },
  {
    "title": "相爱一天",
    "genre": "爱情，奇幻，剧情",
    "tags": "失忆，借来的时间，暗恋成真，催泪",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "cover": "./62.jpg",
    "url": "./movie-1862.html"
  },
  {
    "title": "亲情解锁",
    "genre": "剧情",
    "tags": "人脸识别, 科技伦理, 母女, 寻亲",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./63.jpg",
    "url": "./movie-1863.html"
  },
  {
    "title": "大贵族：毁灭的开始",
    "genre": "奇幻，战斗，吸血鬼",
    "tags": "吸血鬼贵族，末世觉醒，阴谋论，华丽战斗",
    "region": "日本",
    "type": "OVA",
    "year": "2021",
    "cover": "./64.jpg",
    "url": "./movie-1864.html"
  },
  {
    "title": "爱来了别错过 第二季",
    "genre": "爱情 / 同性 / 校园",
    "tags": "青春, 多角恋, 双向暗恋, 治愈, 甜虐",
    "region": "泰国",
    "type": "剧集",
    "year": "2017",
    "cover": "./65.jpg",
    "url": "./movie-1865.html"
  },
  {
    "title": "冰冷的灵魂",
    "genre": "悬疑 / 惊悚 / 剧情",
    "tags": "西伯利亚, 封闭空间, 心理操控, 苏联遗产, 宗教恐怖",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2026",
    "cover": "./66.jpg",
    "url": "./movie-1866.html"
  },
  {
    "title": "重庆英烈",
    "genre": "战争 / 历史",
    "tags": "抗日战争，重庆大轰炸，地下党",
    "region": "中国",
    "type": "电影",
    "year": "2022",
    "cover": "./67.jpg",
    "url": "./movie-1867.html"
  },
  {
    "title": "谁动了我的梦想",
    "genre": "喜剧，爱情，都市",
    "tags": "职场，小人物，逆袭，梦想，整蛊",
    "region": "中国大陆",
    "type": "电影",
    "year": "2015",
    "cover": "./68.jpg",
    "url": "./movie-1868.html"
  },
  {
    "title": "星梦性快感",
    "genre": "情色, 剧情, 悬疑",
    "tags": "成人片场, 谋杀案, 女性觉醒",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./69.jpg",
    "url": "./movie-1869.html"
  },
  {
    "title": "厨神小当家第一季 国语版",
    "genre": "美食, 冒险, 热血, 动画",
    "tags": "中华料理, 少年成长, 料理对决, 国语配音, 师徒传承",
    "region": "日本",
    "type": "动画剧集",
    "year": "2019",
    "cover": "./70.jpg",
    "url": "./movie-1870.html"
  },
  {
    "title": "有梦就飞",
    "genre": "剧情，运动",
    "tags": "航空，残障，励志，真实改编",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./71.jpg",
    "url": "./movie-1871.html"
  },
  {
    "title": "鬼新娘国语",
    "genre": "恐怖, 爱情, 悬疑",
    "tags": "冥婚, 民国, 前世今生, 凄美",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./72.jpg",
    "url": "./movie-1872.html"
  },
  {
    "title": "特高课在行动",
    "genre": "悬疑、谍战",
    "tags": "卧底，反转，密室，心理战",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./73.jpg",
    "url": "./movie-1873.html"
  },
  {
    "title": "狂野之河",
    "genre": "惊悚/冒险/动作",
    "tags": "漂流生存, 家庭危机, 山野逃亡, 失控激流, 追逐对抗, 人性考验",
    "region": "美国",
    "type": "电影",
    "year": "1994",
    "cover": "./74.jpg",
    "url": "./movie-1874.html"
  },
  {
    "title": "不安之邻",
    "genre": "恐怖，悬疑",
    "tags": "心理恐怖，偷窥，都市怪谈",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "cover": "./75.jpg",
    "url": "./movie-1875.html"
  },
  {
    "title": "深海大鱼",
    "genre": "灾难 / 惊悚 / 科幻",
    "tags": "变异生物, 深海, 绝地求生",
    "region": "中国内地",
    "type": "网络电影",
    "year": "2020",
    "cover": "./76.jpg",
    "url": "./movie-1876.html"
  },
  {
    "title": "少理老豆旅行团",
    "genre": "喜剧 / 家庭 / 公路",
    "tags": "父子关系, 退休生活, 黑色幽默, 代际冲突, 购物陷阱",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "cover": "./77.jpg",
    "url": "./movie-1877.html"
  },
  {
    "title": "三十里铺",
    "genre": "剧情, 历史, 爱情",
    "tags": "陕北, 民歌, 时代变迁, 爱情, 乡村",
    "region": "中国大陆",
    "type": "Movie",
    "year": "2023",
    "cover": "./78.jpg",
    "url": "./movie-1878.html"
  },
  {
    "title": "尽欢",
    "genre": "剧情",
    "tags": "家庭, 丧亲, 幽默, 治愈, 公路",
    "region": "台湾",
    "type": "电影",
    "year": "2024",
    "cover": "./79.jpg",
    "url": "./movie-1879.html"
  },
  {
    "title": "命转情真粤语",
    "genre": "奇幻, 爱情",
    "tags": "粤语, 换命, 因果, 市井",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "cover": "./80.jpg",
    "url": "./movie-1880.html"
  },
  {
    "title": "黑炮事件",
    "genre": "犯罪 / 黑色悬疑 / 动作",
    "tags": "海港走私, 黑市武器, 失踪证人, 弟弟情深, 夜间追逐",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "cover": "./81.jpg",
    "url": "./movie-1881.html"
  },
  {
    "title": "禁止生育的女性",
    "genre": "科幻 / 剧情 / 社会",
    "tags": "生育管制, 身体政治, 反乌托邦, 伦理冲突, 女性联盟, 制度压迫",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "cover": "./82.jpg",
    "url": "./movie-1882.html"
  },
  {
    "title": "下一站路口",
    "genre": "剧情 / 爱情 / 生活",
    "tags": "都市偶遇, 错过与重逢, 公交车站, 十年暗恋",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2021",
    "cover": "./83.jpg",
    "url": "./movie-1883.html"
  },
  {
    "title": "咕噜咕噜美人鱼2",
    "genre": "动画, 冒险, 喜剧",
    "tags": "环保题材, 海洋冒险, 合家欢",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "cover": "./84.jpg",
    "url": "./movie-1884.html"
  },
  {
    "title": "制作音效：电影声音的艺术",
    "genre": "纪录片",
    "tags": "声音设计， 幕后， 电影工业， 艺术， 科普",
    "region": "美国",
    "type": "纪录片",
    "year": "2024",
    "cover": "./85.jpg",
    "url": "./movie-1885.html"
  },
  {
    "title": "乐园春晓壮士还",
    "genre": "战争 / 剧情",
    "tags": "抗日, 老兵, 复仇, 乡土, 荒诞",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./86.jpg",
    "url": "./movie-1886.html"
  },
  {
    "title": "暗夜孤院",
    "genre": "恐怖 / 悬疑",
    "tags": "孤儿院, 恶灵, 反转, 西班牙, 心理",
    "region": "西班牙",
    "type": "电影",
    "year": "2019",
    "cover": "./87.jpg",
    "url": "./movie-1887.html"
  },
  {
    "title": "收规华国语",
    "genre": "犯罪, 剧情",
    "tags": "港剧, 黑帮, 卧底, 律政, 兄弟情",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "cover": "./88.jpg",
    "url": "./movie-1888.html"
  },
  {
    "title": "富家穷路第五季",
    "genre": "喜剧, 家庭",
    "tags": "讽刺, 成长, 小镇生活, 温馨",
    "region": "加拿大",
    "type": "剧集",
    "year": "2025",
    "cover": "./89.jpg",
    "url": "./movie-1889.html"
  },
  {
    "title": "音速小子",
    "genre": "动作, 冒险, 喜剧",
    "tags": "游戏改编, 超能力, 萌宠",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "cover": "./90.jpg",
    "url": "./movie-1890.html"
  },
  {
    "title": "我和僵尸有个约会2",
    "genre": "爱情，奇幻，动作",
    "tags": "僵尸，驱魔师，宿命，跨种族恋爱",
    "region": "中国香港",
    "type": "剧集",
    "year": "2004",
    "cover": "./91.jpg",
    "url": "./movie-1891.html"
  },
  {
    "title": "凤凰城故事",
    "genre": "剧情 / 西部 / 家庭",
    "tags": "牧场, 干旱, 父子, 生存, 传统",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./92.jpg",
    "url": "./movie-1892.html"
  },
  {
    "title": "中餐厅第三季",
    "genre": "真人秀, 美食, 经营",
    "tags": "明星, 海外开餐厅, 美食, 文化输出, 合伙人",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "cover": "./93.jpg",
    "url": "./movie-1893.html"
  },
  {
    "title": "苏生龙王传说",
    "genre": "奇幻 / 冒险 / 少年",
    "tags": "龙王召唤, 契约之子, 世界重塑, 兄弟情, 架空大陆",
    "region": "日本",
    "type": "动画剧集",
    "year": "2010",
    "cover": "./94.jpg",
    "url": "./movie-1894.html"
  },
  {
    "title": "大猫竞技",
    "genre": "真人秀, 动物, 竞技",
    "tags": "猫咪, 障碍赛, 萌宠",
    "region": "美国",
    "type": "综艺",
    "year": "2026",
    "cover": "./95.jpg",
    "url": "./movie-1895.html"
  },
  {
    "title": "男孩与桥",
    "genre": "剧情, 奇幻, 冒险",
    "tags": "治愈, 奇幻, 童年创伤, 友谊",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "cover": "./96.jpg",
    "url": "./movie-1896.html"
  },
  {
    "title": "义犬忠魂",
    "genre": "剧情, 家庭, 冒险",
    "tags": "狗狗, 感人, 真实事件改编, 忠诚, 归途",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./97.jpg",
    "url": "./movie-1897.html"
  },
  {
    "title": "姆明山谷 第二季",
    "genre": "动画 / 家庭 / 奇幻",
    "tags": "治愈系, 北欧童话, 哲思对白, 手绘质感",
    "region": "芬兰 / 英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./98.jpg",
    "url": "./movie-1898.html"
  },
  {
    "title": "皇冠上的明珠",
    "genre": "剧情 / 历史 / 悬疑",
    "tags": "王室阴谋, 珠宝盗窃, 双面间谍, 欧洲历史, 女性博弈",
    "region": "英国 / 法国",
    "type": "剧集",
    "year": "2027",
    "cover": "./99.jpg",
    "url": "./movie-1899.html"
  },
  {
    "title": "满门大贼",
    "genre": "喜剧 / 犯罪",
    "tags": "黑吃黑, 家族犯罪, 乌龙, 讽刺",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./100.jpg",
    "url": "./movie-1900.html"
  },
  {
    "title": "丑闻笔记",
    "genre": "悬疑 / 惊悚",
    "tags": "日记, 心理操控, 师生恋, 反转",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./101.jpg",
    "url": "./movie-1901.html"
  },
  {
    "title": "英雄2022",
    "genre": "动作 / 科幻",
    "tags": "超级英雄，赛博朋克，救赎，特效，未来",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "cover": "./102.jpg",
    "url": "./movie-1902.html"
  },
  {
    "title": "乡村爱情圆舞曲",
    "genre": "剧情 / 喜剧 / 爱情",
    "tags": "东北农村, 广场舞, 中年再婚",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./103.jpg",
    "url": "./movie-1903.html"
  },
  {
    "title": "真主拉卡",
    "genre": "战争/剧情",
    "tags": "ISIS, 人肉炸弹, 信仰崩塌, 父女, 废墟美学",
    "region": "中东/法国",
    "type": "电影",
    "year": "2022",
    "cover": "./104.jpg",
    "url": "./movie-1904.html"
  },
  {
    "title": "烽火幽兰",
    "genre": "剧情 / 历史 / 战争",
    "tags": "抗战, 女性, 谍战, 人性",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./105.jpg",
    "url": "./movie-1905.html"
  },
  {
    "title": "妙警贼探第六季",
    "genre": "犯罪 / 剧情 / 悬疑",
    "tags": "完结季, 双男主, 高智商犯罪, 亦敌亦友",
    "region": "美国",
    "type": "电视剧",
    "year": "2014",
    "cover": "./106.jpg",
    "url": "./movie-1906.html"
  },
  {
    "title": "充电旅行",
    "genre": "真人秀 / 旅行",
    "tags": "旅行, 治愈, 充电, 明星, 慢综艺",
    "region": "中国大陆",
    "type": "综艺 / 真人秀",
    "year": "2025",
    "cover": "./107.jpg",
    "url": "./movie-1907.html"
  },
  {
    "title": "圣诞星",
    "genre": "家庭, 奇幻",
    "tags": "圣诞电影, 公路喜剧, 寻找信仰",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./108.jpg",
    "url": "./movie-1908.html"
  },
  {
    "title": "太阳与波莱罗",
    "genre": "爱情音乐剧情",
    "tags": "舞蹈, 夏日海岸, 旧爱重逢, 乐团, 即兴, 命运交叉",
    "region": "西班牙",
    "type": "电影",
    "year": "2001",
    "cover": "./109.jpg",
    "url": "./movie-1909.html"
  },
  {
    "title": "没人的孩子",
    "genre": "悬疑 / 犯罪",
    "tags": "留守儿童, 失踪案, 乡村悬疑, 人性拷问, 反转",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./110.jpg",
    "url": "./movie-1910.html"
  },
  {
    "title": "红箭门",
    "genre": "谍战，悬疑",
    "tags": "民国，特工，双面间谍，计中计",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "cover": "./111.jpg",
    "url": "./movie-1911.html"
  },
  {
    "title": "田间的少年 第二季",
    "genre": "真人秀 / 生活",
    "tags": "种地, 少年, 乡村振兴, 慢综艺",
    "region": "中国",
    "type": "综艺",
    "year": "2025",
    "cover": "./112.jpg",
    "url": "./movie-1912.html"
  },
  {
    "title": "死因之谜",
    "genre": "悬疑 / 犯罪 / 法医",
    "tags": "法医, 尸体会说话, 单元剧, 反转",
    "region": "英国",
    "type": "电视剧",
    "year": "2027",
    "cover": "./113.jpg",
    "url": "./movie-1913.html"
  },
  {
    "title": "归乡路遥",
    "genre": "剧情, 家庭",
    "tags": "归乡, 寻根, 代际和解",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "cover": "./114.jpg",
    "url": "./movie-1914.html"
  },
  {
    "title": "我的绝妙离婚",
    "genre": "喜剧, 剧情",
    "tags": "离婚, 黑色幽默, 女性成长, 法律",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "cover": "./115.jpg",
    "url": "./movie-1915.html"
  },
  {
    "title": "艾迪斯·卡维尔护士",
    "genre": "传记, 历史, 战争",
    "tags": "一战, 英雄, 女性力量",
    "region": "英国 / 比利时",
    "type": "电影",
    "year": "2024",
    "cover": "./116.jpg",
    "url": "./movie-1916.html"
  },
  {
    "title": "高飞大电影国语",
    "genre": "动画 / 喜剧 / 冒险",
    "tags": "亲子成长, 高中乐队, 公路冒险, 父子和解, 夸张笑料",
    "region": "美国",
    "type": "动画电影",
    "year": "2000",
    "cover": "./117.jpg",
    "url": "./movie-1917.html"
  },
  {
    "title": "越狱实录：法外鸳鸯",
    "genre": "犯罪、剧情",
    "tags": "真实事件改编、雌雄大盗、90年代、公路犯罪",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./118.jpg",
    "url": "./movie-1918.html"
  },
  {
    "title": "千金",
    "genre": "剧情, 家庭, 年代",
    "tags": "女性成长, 民国, 家族恩怨, 逆袭, 商战",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "cover": "./119.jpg",
    "url": "./movie-1919.html"
  },
  {
    "title": "铁拳男人",
    "genre": "剧情、运动、传记",
    "tags": "拳击、大萧条、父亲救女、底层逆袭、真实改编",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./120.jpg",
    "url": "./movie-1920.html"
  },
  {
    "title": "快餐店霸凌事件",
    "genre": "惊悚",
    "tags": "职场, 密室, 反转, 社会批判",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./121.jpg",
    "url": "./movie-1921.html"
  },
  {
    "title": "又是谁搞的鬼",
    "genre": "悬疑 / 喜剧",
    "tags": "密室, 推理, 搞笑, 反转, 黑色幽默",
    "region": "香港",
    "type": "电影",
    "year": "2022",
    "cover": "./122.jpg",
    "url": "./movie-1922.html"
  },
  {
    "title": "罗刹人",
    "genre": "古装 / 动作",
    "tags": "大唐, 西域, 假面, 刺客, 身份错位",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./123.jpg",
    "url": "./movie-1923.html"
  },
  {
    "title": "和平",
    "genre": "剧情, 战争, 历史",
    "tags": "外交官, 撤侨, 谈判, 战地, 真实事件改编",
    "region": "中国大陆",
    "type": "Movie",
    "year": "2025",
    "cover": "./124.jpg",
    "url": "./movie-1924.html"
  },
  {
    "title": "星球大战：最后的绝地武士",
    "genre": "科幻 / 动作 / 冒险",
    "tags": "太空歌剧， 原力觉醒， 传奇续章",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "cover": "./125.jpg",
    "url": "./movie-1925.html"
  },
  {
    "title": "十二夜 粤语",
    "genre": "爱情 / 剧情",
    "tags": "分手疗伤, 粤语原声, 都市男女, 十二夜结构, 金句频出",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "cover": "./126.jpg",
    "url": "./movie-1926.html"
  },
  {
    "title": "肇事者逃逸",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": "车祸, 顶罪, 阶层对立, 罗生门",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./127.jpg",
    "url": "./movie-1927.html"
  },
  {
    "title": "爱冒险的朵拉2",
    "genre": "冒险,儿童,奇幻,喜剧",
    "tags": "侦探路线,海洋风暴,数据陷阱,跨文化探索,环保任务,伙伴成长",
    "region": "美国",
    "type": "动画电影",
    "year": "2023",
    "cover": "./128.jpg",
    "url": "./movie-1928.html"
  },
  {
    "title": "神偷圣徒",
    "genre": "犯罪, 动作, 喜剧",
    "tags": "盗贼, 修女, 卧底, 梵蒂冈",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "cover": "./129.jpg",
    "url": "./movie-1929.html"
  },
  {
    "title": "睡拳怪招",
    "genre": "喜剧",
    "tags": "功夫, 搞笑, 市井, 复仇, 励志",
    "region": "中国香港",
    "type": "电影",
    "year": "1979",
    "cover": "./130.jpg",
    "url": "./movie-1930.html"
  },
  {
    "title": "船上没有桅杆",
    "genre": "剧情 / 冒险 / 人性",
    "tags": "江河航行, 命运漂流, 集体困境, 老船工, 时代更迭, 诗意现实",
    "region": "中国大陆",
    "type": "电影",
    "year": "1988",
    "cover": "./131.jpg",
    "url": "./movie-1931.html"
  },
  {
    "title": "三界寻龙记",
    "genre": "奇幻 / 冒险 / 动作",
    "tags": "东方神话, 龙族, 寻宝, 宿命",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./132.jpg",
    "url": "./movie-1932.html"
  },
  {
    "title": "欧卡纸牌之记忆迷踪",
    "genre": "悬疑, 科幻, 惊悚",
    "tags": "记忆删除, 心理游戏, 欧卡牌, 反转, 烧脑",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./133.jpg",
    "url": "./movie-1933.html"
  },
  {
    "title": "代号利剑",
    "genre": "动作 / 悬疑 / 军旅",
    "tags": "特战军旅， 反恐利剑， 兄弟情， 卧底反转， 热血硬汉",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2012",
    "cover": "./134.jpg",
    "url": "./movie-1934.html"
  },
  {
    "title": "乘风2024",
    "genre": "歌舞 / 真人秀剧情片",
    "tags": "姐姐, 女团, 逆龄挑战",
    "region": "中国大陆",
    "type": "综艺 / 电影",
    "year": "2024",
    "cover": "./135.jpg",
    "url": "./movie-1935.html"
  },
  {
    "title": "蛇蝎美人第二季",
    "genre": "犯罪 / 悬疑 / 惊悚",
    "tags": "女性犯罪, 反转爽剧, 双女主, 黑吃黑",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "cover": "./136.jpg",
    "url": "./movie-1936.html"
  },
  {
    "title": "猫眼看人",
    "genre": "恐怖 / 悬疑 / 奇幻",
    "tags": "宠物视角, 都市传说, 分段式",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2026",
    "cover": "./137.jpg",
    "url": "./movie-1937.html"
  },
  {
    "title": "客从何处来",
    "genre": "纪录片 / 历史 / 人文",
    "tags": "寻根, 家族史, 口述历史, 温情",
    "region": "中国大陆",
    "type": "纪录片",
    "year": "2024",
    "cover": "./138.jpg",
    "url": "./movie-1938.html"
  },
  {
    "title": "妖怪手表：诞生的秘密喵",
    "genre": "动画 / 奇幻",
    "tags": "妖怪, 儿童, 穿越, 友情",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./139.jpg",
    "url": "./movie-1939.html"
  },
  {
    "title": "一万天",
    "genre": "科幻， 悬疑， 剧情",
    "tags": "时间循环， 太空， 孤独， 记忆， 哲学",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "cover": "./140.jpg",
    "url": "./movie-1940.html"
  },
  {
    "title": "贝尔戈维亚：下一章",
    "genre": "剧情 / 历史 / 爱情",
    "tags": "英伦贵族, 家族恩怨, 遗产争夺, 古典文学改编风",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "cover": "./141.jpg",
    "url": "./movie-1941.html"
  },
  {
    "title": "奇门飞甲",
    "genre": "动作， 奇幻， 武侠",
    "tags": "机关术， 轻功， 寻宝， 江湖",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./142.jpg",
    "url": "./movie-1942.html"
  },
  {
    "title": "踢到铁板",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": "江湖菜鸟, 惹错人, 反转打脸, 小人物逆袭",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "cover": "./143.jpg",
    "url": "./movie-1943.html"
  },
  {
    "title": "爱的誓言",
    "genre": "爱情，剧情，音乐",
    "tags": "包办婚姻，承诺，宝莱坞，女性",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "cover": "./144.jpg",
    "url": "./movie-1944.html"
  },
  {
    "title": "该隐之子",
    "genre": "恐怖、心理、宗教",
    "tags": "神父、恶魔附身、道德悖论",
    "region": "西班牙",
    "type": "电影",
    "year": "2026",
    "cover": "./145.jpg",
    "url": "./movie-1945.html"
  },
  {
    "title": "疯长物语",
    "genre": "奇幻, 剧情, 家庭",
    "tags": "成长, 植物, 乡镇, 母女, 时间",
    "region": "日本",
    "type": "电影",
    "year": "2018",
    "cover": "./146.jpg",
    "url": "./movie-1946.html"
  },
  {
    "title": "巴塔哥尼亚的叛乱",
    "genre": "剧情 / 历史 / 西部",
    "tags": "南美, 拓荒, 反抗, 写实",
    "region": "阿根廷",
    "type": "电影",
    "year": "2025",
    "cover": "./147.jpg",
    "url": "./movie-1947.html"
  },
  {
    "title": "星学院2之月灵手环",
    "genre": "动画，奇幻，冒险",
    "tags": "魔法学院，少女成长，月亮力量，手环，星座",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./148.jpg",
    "url": "./movie-1948.html"
  },
  {
    "title": "对手",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": "双雄对决, 间谍, 现代战争",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "cover": "./149.jpg",
    "url": "./movie-1949.html"
  },
  {
    "title": "光与暗的朱尔斯",
    "genre": "剧情，心理，惊悚",
    "tags": "双重人格，艺术，悬疑",
    "region": "法国",
    "type": "电影",
    "year": "2019",
    "cover": "./150.jpg",
    "url": "./movie-1950.html"
  },
  {
    "title": "棋山传奇",
    "genre": "武侠, 古装, 悬疑",
    "tags": "围棋, 江湖恩怨, 棋局杀人, 盲棋, 门派之争",
    "region": "中国大陆",
    "type": "电影",
    "year": "1992",
    "cover": "./1.jpg",
    "url": "./movie-1951.html"
  },
  {
    "title": "客人",
    "genre": "悬疑, 恐怖, 心理",
    "tags": "密室, 反转, 心理压迫, 细思极恐",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "cover": "./2.jpg",
    "url": "./movie-1952.html"
  },
  {
    "title": "终结一吻",
    "genre": "爱情 / 悬疑",
    "tags": "复仇, 替身, 反转, 短剧, 高概念",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "cover": "./3.jpg",
    "url": "./movie-1953.html"
  },
  {
    "title": "永久少年",
    "genre": "剧情",
    "tags": "偶像，中年危机，励志，永久科，社畜",
    "region": "日本",
    "type": "动漫",
    "year": "2022",
    "cover": "./4.jpg",
    "url": "./movie-1954.html"
  },
  {
    "title": "空中浩劫第十四季",
    "genre": "灾难、纪录片、航空",
    "tags": "空难调查, 真实事件, 惊险, 科普",
    "region": "加拿大",
    "type": "电视剧",
    "year": "2014",
    "cover": "./5.jpg",
    "url": "./movie-1955.html"
  },
  {
    "title": "1877年独立战争",
    "genre": "历史 / 战争 / 剧情",
    "tags": "民族, 血战, 英雄, 史诗",
    "region": "罗马尼亚 / 土耳其",
    "type": "电影",
    "year": "2026",
    "cover": "./6.jpg",
    "url": "./movie-1956.html"
  },
  {
    "title": "美国空姐",
    "genre": "喜剧, 爱情",
    "tags": "职场逆袭, 浪漫喜剧, 航空",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./7.jpg",
    "url": "./movie-1957.html"
  },
  {
    "title": "考试过关的艺术",
    "genre": "剧情，犯罪",
    "tags": "作弊，天才，黑色幽默",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "cover": "./8.jpg",
    "url": "./movie-1958.html"
  },
  {
    "title": "孤航",
    "genre": "剧情 / 冒险 / 传记",
    "tags": "真实事件改编，帆船航海，人类极限，孤独哲学",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "cover": "./9.jpg",
    "url": "./movie-1959.html"
  },
  {
    "title": "发动圣战",
    "genre": "战争、惊悚、剧情",
    "tags": "反恐、孤胆英雄、平民视角",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "cover": "./10.jpg",
    "url": "./movie-1960.html"
  },
  {
    "title": "四",
    "genre": "悬疑 / 犯罪",
    "tags": "拼图杀人，倒计时，银行职员，道德困境，一次性手机",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "cover": "./11.jpg",
    "url": "./movie-1961.html"
  },
  {
    "title": "康熙微服私访记",
    "genre": "古装， 剧情",
    "tags": "皇帝， 微服私访， 公案， 民间传奇， 戏说历史",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "1997",
    "cover": "./12.jpg",
    "url": "./movie-1962.html"
  },
  {
    "title": "无敌当家2",
    "genre": "喜剧， 家庭， 动物",
    "tags": "圣伯纳犬， 宠物， 二胎， 搞笑",
    "region": "美国",
    "type": "电影",
    "year": "1994",
    "cover": "./13.jpg",
    "url": "./movie-1963.html"
  },
  {
    "title": "烂头何国语",
    "genre": "动作喜剧",
    "tags": "邵氏, 功夫, 刘家良, 国语配音, 市井",
    "region": "中国香港",
    "type": "电影",
    "year": "1979",
    "cover": "./14.jpg",
    "url": "./movie-1964.html"
  },
  {
    "title": "傲骨贤妻第四季",
    "genre": "剧情、律政",
    "tags": "职场、女性、权力斗争",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "cover": "./15.jpg",
    "url": "./movie-1965.html"
  },
  {
    "title": "爱重启",
    "genre": "科幻, 爱情",
    "tags": "时间循环, 婚姻危机, 治愈",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2023",
    "cover": "./16.jpg",
    "url": "./movie-1966.html"
  },
  {
    "title": "熊出没之过年",
    "genre": "喜剧, 家庭, 冒险",
    "tags": "春节, 回家, 熊兄弟, 光头强",
    "region": "中国大陆",
    "type": "动画电影",
    "year": "2013",
    "cover": "./17.jpg",
    "url": "./movie-1967.html"
  },
  {
    "title": "兔年",
    "genre": "魔幻现实",
    "tags": "生肖, 民俗, 打工, 变形",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "cover": "./18.jpg",
    "url": "./movie-1968.html"
  },
  {
    "title": "在巨大的洋葱之下",
    "genre": "奇幻 / 剧情 / 文艺",
    "tags": "超现实, 情感疗愈, 多层梦境, 隐喻",
    "region": "美国 / 西班牙",
    "type": "电影",
    "year": "2024",
    "cover": "./19.jpg",
    "url": "./movie-1969.html"
  },
  {
    "title": "烈血狂沙",
    "genre": "动作 / 惊悚 / 犯罪",
    "tags": "黑吃黑, 沙漠, 硬汉, 复仇",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "year": "2014",
    "cover": "./20.jpg",
    "url": "./movie-1970.html"
  },
  {
    "title": "声宝喜相逢粤语",
    "genre": "音乐 / 脱口秀",
    "tags": "怀旧, 粤语金曲, 艺人访谈",
    "region": "中国香港",
    "type": "综艺",
    "year": "1989",
    "cover": "./21.jpg",
    "url": "./movie-1971.html"
  },
  {
    "title": "妓院春色",
    "genre": "剧情 / 历史 / 女性",
    "tags": "塘西风月，民国香港，女性群像，妓女抗争，时代悲剧",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "cover": "./22.jpg",
    "url": "./movie-1972.html"
  },
  {
    "title": "橡皮",
    "genre": "剧情， 悬疑， 哲学",
    "tags": "新浪潮， 阿兰·罗伯-格里耶， 虚构与现实， 存在主义， 实验",
    "region": "法国",
    "type": "电影",
    "year": "1969",
    "cover": "./23.jpg",
    "url": "./movie-1973.html"
  },
  {
    "title": "毒枭回忆录",
    "genre": "犯罪, 传记, 剧情",
    "tags": "贩毒集团, 真实改编, 暴力, 权力, 腐败",
    "region": "哥伦比亚, 美国",
    "type": "剧集",
    "year": "2017",
    "cover": "./24.jpg",
    "url": "./movie-1974.html"
  },
  {
    "title": "断魂咒",
    "genre": "恐怖",
    "tags": "降头, 巫术, 血腥, 高概念, 诅咒",
    "region": "泰国",
    "type": "电影",
    "year": "2007",
    "cover": "./25.jpg",
    "url": "./movie-1975.html"
  },
  {
    "title": "舞动人生",
    "genre": "剧情 / 家庭",
    "tags": "代际冲突, 梦想, 街舞",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "cover": "./26.jpg",
    "url": "./movie-1976.html"
  }
];
