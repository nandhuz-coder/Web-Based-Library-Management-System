//testcafe chrome ./TestCafeTestingP/addBook3.test.js

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

test('Admin Add a Book Test', async t => {
        await t
    
            .setTestSpeed(0.2)
            .typeText('#username', 'prageeth')
            .typeText('#password', '111111')
            .click('#btn_submit')
            .click("#add_books")
            .typeText('#book-title', 'Sherlock Holmes')
            .typeText('#book-author', 'Chandana Mendis')
            .typeText('#book-ISBN', '978-1-4088-5567-7')
            .typeText('#book-category', 'Fiction')
            .typeText('#book-stock', '5')
            .typeText('#book-description', 'Famous Fiction')
            .click('#add-book-btn');
    
});
