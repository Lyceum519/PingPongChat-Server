module.exports = (function () {
  return {
    local: { // localhost
      host: 'localhost',
      user: 'root',
      password: 'Pingpong1!!',
      port: 3306,
      database: 'ping_pong_chat'
    },
    prod: { // prod server db info
      host: '',
      port: '',
      user: '',
      password: '!',
      database: ''
    },
    dev: { // dev server db info
      host: '',
      port: '',
      user: '',
      password: '',
      database: ''
    }
  }
})();