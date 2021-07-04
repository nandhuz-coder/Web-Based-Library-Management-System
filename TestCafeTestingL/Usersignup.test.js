import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:3000/auth/user-signup`;

test('signup user test', async t => {
    await t
        .typeText('#firstname', 'LSS2')
        .typeText('#lastname', '12345')
        .typeText('#username', 'LSS')
        .typeText('#email', '12345@gmail.com')
        .typeText('#password', '12345')
        .typeText('#gender', 'Male')
        .typeText('#address', 'Galle')
        .click('#btn_submit');
});