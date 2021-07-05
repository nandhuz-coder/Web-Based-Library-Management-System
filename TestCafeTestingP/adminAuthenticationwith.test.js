import { Selector, Role } from 'testcafe';

const admin = Role('http://localhost:3000/auth/admin-login', async t => {
    await t
        .setTestSpeed(0.2)
        .typeText('#username', 'LSS2')
        .typeText('#password', '12345')
        .click('#btn_submit')
        .click("#add_books");
});

fixture`My fixture`
    .page`http://localhost:3000/auth/admin-login`;


test('View Book', async t => {
    await t

        .setTestSpeed(0.2)
        .typeText('#username', 'LSS2')
        .typeText('#password', '12345')
        .click('#btn_submit')
        .click("#add_books")
        .typeText("#book_select", 'Title');
    //meke pahalata process 1k ghgena plyn bn..  mn admin widiyt log wela view  book 1kt giye
});

