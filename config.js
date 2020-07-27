// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的SISI同学",  // 同上...
        "今天是你的生日，恭喜你",
        "和银河系第三旋臂外缘的",
        "一个蓝色星球上的所有碳基生物",
        "一起完成了该行星",
        "在所有恒星系内的",
        "又一次完整的公转",
        "生日快乐 OH YEAH~~",
        "来自另一个碳基生物D的贺电",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的SISI同学": "./imgs/sisi2020.jpg",
        "来自另一个碳基生物D的贺电": "./imgs/D.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "来点音乐",
        bannar_coming: "来个点缀",
        balloons_flying: "少点东西",
        cake_fadein: "提拉米苏？",
        light_candle: "点个蜡烛？",
        wish_message: "sisi同学生日快乐~~",
        story: "A MESSAGE FOR YOU-FROM D",
    }
};
