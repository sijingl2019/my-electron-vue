import axios from 'axios';

let baseURL = 'https://gitee.com/monkeyWang/rubickdatabase/raw/master';
let access_token = '';

try {
  const dbdata = window.qiko.db.get('qiko-localhost-config');
  baseURL = dbdata.data.database;
  access_token = dbdata.data.access_token;
} catch (e) {
  // ignore
}

const instance = axios.create({
  timeout: 4000,
  baseURL: baseURL || 'http://172.21.43.254:3031/api/v1/',
  headers: {
    authorization: `Bearer ${
      access_token || 'sk-807bd6f7db5641f68435bb80d4dedba7'
    }`,
  },
});

export default {
  async getTotalAgents() {
    const targetPath = 'models/getAll';
    const res = await instance.get(targetPath);
    console.log('total agents', res);
    return res.data;
  },

  async getTotalChats() {
    const targetPath = 'chats/?skip=0&limit=30';
    const res = await instance.get(targetPath);
    console.log('total agents', res);
    return res.data;
  },
};
