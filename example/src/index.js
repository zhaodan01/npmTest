/*
 * @Description: 
 * @Date: 2021-09-02 19:10:03
 * @LastEditTime: 2021-09-02 19:19:40
 * @LastEditors: zhaodan01
 */
// 直接引入原文件
import { deepCopy } from '../../src/deepCopey'
const testObject = [
  {
    "traditionalChinese": "色情繁体",
    "types": ["comment", "user_message", "user", "TC_GroupMessage", "entry", "longVideos", "barrage"],
    "simplifiedChinese": "色情简体",
    "name": "porn",
    "id": "5be292d7463aa6c801c3ed87"
  },
  {
    "traditionalChinese": "涉政敏感",
    "types": ["comment", "user_message", "user", "TC_GroupMessage", "entry", "longVideo", "longVideos", "barrage"],
    "simplifiedChinese": "涉政敏感",
    "name": "political",
    "id": "5bebbfb49471682b591d9089"
  },
  {
    "traditionalChinese": "不友善行為",
    "types": ["comment", "user_message", "user", "TC_GroupMessage", "longVideo", "longVideos", "barrage"],
    "simplifiedChinese": "不友善行为",
    "name": "unfriendly",
    "id": "5bebc0dde23ff90dbe34ec95"
  },
  {
    "traditionalChinese": "違法犯罪",
    "types": ["comment", "user_message", "user", "TC_GroupMessage", "longVideo", "longVideos", "barrage"], "simplifiedChinese": "违法犯罪", "name": "illegal", "id": "5bebc177e23ff90dbe34ec96"
  },
  {
    "traditionalChinese": "侵權盜用",
    "types": ["comment", "user_message", "user", "TC_GroupMessage", "longVideo", "longVideos", "barrage"],
    "simplifiedChinese": "侵权盗用",
    "name": "theft",
    "id": "5bebc1c0e23ff90dbe34ec97"
  },
  {
    "traditionalChinese": "廣告推銷",
    "types": ["comment", "user_message", "longVideo", "longVideos", "barrage"],
    "simplifiedChinese": "广告推销",
    "name": "spam",
    "id": "5bebc1f8e23ff90dbe34ec98"
  },
  {
    "traditionalChinese": "偽科學",
    "types": ["comment", "user_message", "user", "TC_GroupMessage", "longVideo", "longVideos", "barrage"],
    "simplifiedChinese": "伪科学",
    "name": "fakeScience",
    "id": "5cfdc5dd6c7ac853656ff43a"
  },
  {
    "traditionalChinese": "其他",
    "types": ["comment", "user", "entry", "TC_GroupMessage", "longVideo", "longVideos", "barrage"],
    "simplifiedChinese": "其他",
    "name": "other",
    "id": "4eff31800000000000000000"
  },
  {
    "traditionalChinese": "涉及未成年",
    "types": ["comment", "user_message", "user", "TC_GroupMessage", "entry", "longVideos", "barrage"],
    "simplifiedChinese": "涉及未成年",
    "name": "minor",
    "id": "60b897d2f9cded4d556c8e27"
  }
]
console.log(deepCopy(testObject))