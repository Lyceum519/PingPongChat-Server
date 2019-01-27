import {OAuth2Client} from 'google-auth-library';
const CLIENT_ID = '54618363609-gf6br8b3i3jvs5c7fjc0asdfum969m3u.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
export default async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
    // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
}

