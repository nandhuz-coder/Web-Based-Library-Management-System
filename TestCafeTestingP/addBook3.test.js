//testcafe chrome ./TestCafeTestingP/addBook3.test.js

import { Selector } from 'testcafe';

fixture`My fixture`
    .page`http://localhost:3000/auth/admin-login`;

const filtertype = Selector('#book-category');
const filteroption = filtertype.find('option');

test('Admin Add a already added Book Testing', async t => {
        await t
    
            .setTestSpeed(0.2)
            .typeText('#username', 'prageeth')
            .typeText('#password', '111111')
            .click('#btn_submit')
            .click("#add_books")
            .typeText('#book-title', 'Sherlock Holmes')
            .typeText('#book-author', 'Chandana Mendis')
            .typeText('#book-ISBN', '978-1-4088-5567-7')
            .click(filtertype)
            .click(filteroption.withText('Fiction'))
            .typeText('#book-stock', '5')
            .typeText('#book-description', 'Famous Fiction')
            .click('#add-book-btn');
    
});
