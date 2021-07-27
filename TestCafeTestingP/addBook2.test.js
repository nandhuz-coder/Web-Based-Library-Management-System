//testcafe chrome ./TestCafeTestingP/addBook2.test.js

import { Selector, Role } from 'testcafe';

const admin = Role('http://localhost:3000/auth/admin-login', async t => {
    await t
        .setTestSpeed(0.2)
        .typeText('#username', 'prageeth')
        .typeText('#password', '111111')
        .click('#btn_submit')
        .click("#add_books");
});

fixture`My fixture`
    .page`http://localhost:3000/auth/admin-login`;

const filtertype = Selector('#book-category');
const filteroption = filtertype.find('option');

test('Admin Add a Book With empty book title Testing', async t => {
        await t
    
            .setTestSpeed(0.25)
            .typeText('#username', 'prageeth')
            .typeText('#password', '111111')
            .click('#btn_submit')
            .click("#add_books")
            //.typeText('#book-title', 'Madoldoowa')
            .typeText('#book-author', 'Martin Wickramasingha')
            .typeText('#book-ISBN', '978-1-4088-5567-9')
            .click(filtertype)
            .click(filteroption.withText('Fiction'))
            .typeText('#book-stock', '10')
            .typeText('#book-description', 'Famous Fiction')
            .click('#add-book-btn');
    
});
