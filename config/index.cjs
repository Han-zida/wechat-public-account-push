/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx61c0e5faa273d933',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '562e7053ba80ae2a6a7def3511755a1b',

  PROVINCE: '湖南',
  CITY: '长沙',

  USERS: [
    {
      // 想要发送的人的名字
      name: '维尼宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oIDgM6tk3q5mGMC7FjuJl0XXmFXU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'G_QgkJka49L5dniv9pV0r6yuDvLHoGXaH3cMpFpso3U',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '维尼宝贝', year: '2002', date: '06-18',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '达美乐', year: '2002', date: '08-22',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '11-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-12-03' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'G_QgkJka49L5dniv9pV0r6yuDvLHoGXaH3cMpFpso3U',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oIDgM6q0SWYcpzKxWwHpOfr9Rreo',
    }
  ],

}

module.exports = USER_CONFIG

