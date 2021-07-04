import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:3000/auth/admin-login`;

test('login admin test', async t => {
    await t
        .typeText('#username', 'LSS2')
        .typeText('#password', '12345')
        .click('#btn_submit');
});

fixture`Getting Started`
    .page`http://localhost:3000//auth/admin-logout`;

test('login admin test', async t => {
    await t
        .click('#log_out');
});
