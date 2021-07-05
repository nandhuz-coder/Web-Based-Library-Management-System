import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:3000/auth/user-login`;

test('login user test with empty values', async t => {
    
    await t
      .setTestSpeed(0.2)
        .typeText('#username', 'abc')
        .click('#submit_btn');
        
});