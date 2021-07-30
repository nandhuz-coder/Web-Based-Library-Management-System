//testcafe chrome ./TestCafeTestingP/7updateBook1.test.js

import { Selector } from 'testcafe';

const book_stock = Selector('#book-stock');

fixture`My fixture`
    .page`http://localhost:3000/auth/admin-login`;

test('Admin update a Book by updating the book stock Testing', async t => {
        await t

            .setTestSpeed(0.1)
            .typeText('#username', 'prageeth')
            .typeText('#password', '111111')
            .click('#btn_submit')
            .click("#book_inventory")
            .click("#to-update-book-btn")
            .selectText(book_stock).pressKey("delete")
            .typeText('#book-stock', '10')
            .click('#update-book-btn')

});
