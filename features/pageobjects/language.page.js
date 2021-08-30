var Page = require('./page')

var LanguagePage = Object.create(Page, {
    /**
     * define elements
     */
    selectUsers: {
        get: function () {
            return ("Выберите пользователя:");
        }
    },
    Users: {
        get: function () {
            return ("Пользователи");
        }
    },


});

module.exports = LanguagePage;
