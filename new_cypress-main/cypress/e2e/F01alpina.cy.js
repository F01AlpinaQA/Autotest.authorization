describe('Автотесты Проверка авторизации', function () {

    it('1.Позитивный кейс авторизации - верные Логин/Пароль', function () {
         cy.visit('https://login.qa.studio/'); // Команда открывает сайт 
         cy.get('#mail').type('german@dolnikov.ru'); // Вводим правильный логин в поле логин
         cy.get('#pass').type('iLoveqastudio1'); // Вводим правильный пароль в поле пароль
         cy.get('#loginButton').click(); // Нажать на кнопку Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем наличие текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю         
     })

     it('2.Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Команда открывает сайт 
        cy.get('#forgotEmailButton').click(); // Нажимаем на кнопку "Забыли пароль?"
        cy.get('#mailForgot').type('Vancouver@qastudio.ru'); // Вводим емэйл для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажимаем на кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяем наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
    })

    it('3.Негативный кейс - НЕверные логин/пароль', function () {
        cy.visit('https://login.qa.studio/'); // Команда открывает сайт 
        cy.get('#mail').type('qamylove@qamylove.ru'); // Вводим НЕправильный логин в поле логин
        cy.get('#pass').type('123qwerty'); // Вводим НЕправильный пароль в поле пароль
        cy.get('#loginButton').click(); // Нажать на кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
    })

    it('4.Негативный кейс - НЕправильный логин/правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Команда открывает сайт 
        cy.get('#mail').type('qamylove@qamylove.ru'); // Вводим НЕправильный логин в поле логин
        cy.get('#pass').type('iLoveqastudio1'); // Вводим правильный пароль в поле пароль
        cy.get('#loginButton').click(); // Нажать на кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
    })

    it('5.Негативный кейс - логин без @/правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Команда открывает сайт 
        cy.get('#mail').type('qamylove.qamylove.ru'); // Вводим НЕправильный логин в поле логин
        cy.get('#pass').type('iLoveqastudio1'); // Вводим правильный пароль в поле пароль
        cy.get('#loginButton').click(); // Нажать на кнопку Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяем наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
    })
    
    it('6.Позитивный кейс авторизации - верные Логин/Пароль', function () {
        cy.visit('https://login.qa.studio/'); // Команда открывает сайт 
        cy.get('#mail').type('GerMAn@DolnikoV.ru'); // Вводим правильный логин в поле логин
        cy.get('#pass').type('iLoveqastudio1'); // Вводим правильный пароль в поле пароль
        cy.get('#loginButton').click(); // Нажать на кнопку Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю  
    })

 })