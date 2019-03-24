import { getFcmToken } from '../util/sequelize/api/find'

const FCM = require('fcm-node');

/** Firebase(구글 개발자 사이트)에서 발급받은 서버키 */
// 가급적 이 값은 별도의 설정파일로 분리하는 것이 좋다.
const serverKey = 'AAAADLeCFtk:APA91bHMD9gFMbBI-MAE6GI-o-9R5cexYZ70aU18TPeEemLiaraEpw3wZLR6lfUu5raLWUqEkLJX0aeWrX1yV3nfzx-9iBmU2206B3dtex6rbaFgM0UYuFYLjrVzVvlfwMfufE7eT-0b';

/** 안드로이드 단말에서 추출한 token값 */
// 안드로이드 App이 적절한 구현절차를 통해서 생성해야 하는 값이다.
// 안드로이드 단말에서 Node server로 POST방식 전송 후,
// Node서버는 이 값을 DB에 보관하고 있으면 된다.
let client_token = 'eU_5TTC3Kok:APA91bHuaZVLMJUhyMEJgfw5QU3wtYT8emMa_1NoglFJLAgxodcT2eHcjdd37JG42L5rwVXNa1J4q4YwZttHm0EcVd1ou7ABdkkgysS0z86kPTjwoMwLruXK9LADHSa5FB73PIFM2I5y';

/** 발송할 Push 메시지 내용 */
let push_data = {
    // 수신대상
    to: client_token,
    // App이 실행중이지 않을 때 상태바 알림으로 등록할 내용
    notification: {
        title: "Hello Node",
        body: "hello node",
        // sound: "default",
        // click_action: "FCM_PLUGIN_ACTIVITY",
        // icon: "fcm_push_icon"
    },
    // 메시지 중요도
    priority: "high",
    // App 패키지 이름
    restricted_package_name: "com.example.minwoo.pingpongchat_client",
    // App에게 전달할 데이터
    data: {
        num1: 2000,
        num2: 3000
    }
};

/** 아래는 푸시메시지 발송절차 */
var fcm = new FCM(serverKey);

export async function requestPush(pushData) {
  // get fcm token from database with matched email
  const fcmToken = await getFcmToken(pushData.to)
  push_data.to = fcmToken;
  push_data.notification = pushData.notification;
  push_data.priority = pushData.priority;
  push_data.restricted_package_name = pushData.restricted_package_name;
  push_data.data = pushData.data;
  
  return await new Promise(resolve => {
    fcm.send(push_data, async function(err, response) {
      if (err) {
        console.error('FCM push request failed');
        console.error(err);
        return resolve(err);
      }
      console.log('FCM push request success');
      console.log(response);
      return resolve(response);
    });
  })
}