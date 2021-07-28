//testcafe chrome ./TestCafeTestingP/deleteBook1.test.js

fixture`My fixture`
    .page`http://localhost:3000/auth/admin-login`;

test('Admin delete a Book Testing', async t => {
        await t

            .setTestSpeed(0.15)
            .typeText('#username', 'prageeth')
            .typeText('#password', '111111')
            .click('#btn_submit')
            .click("#book_inventory")
            .click("#to-delete-book-btn")

});
