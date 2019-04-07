module.exports = (function () {
  return {
    local: { // localhost
      host: 'localhost',
      user: 'root',
      password: 'shin0816',
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
