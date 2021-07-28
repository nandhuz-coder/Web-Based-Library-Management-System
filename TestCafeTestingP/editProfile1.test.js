//testcafe chrome ./TestCafeTestingP/editProfile1.test.js

import { Selector } from 'testcafe';

fixture`My fixture`
    .page`http://localhost:3000/auth/admin-login`;

const admin_email = Selector('#admin-edit-email');

test('Update Admin Profile Testing', async t => {
        await t
    
            .setTestSpeed(0.15)
            .typeText('#username', 'prageeth')
            .typeText('#password', '111111')
            .click('#btn_submit')
            .click("#admin-drop-down")
            .click("#profile-down")
            .click("#edit-profile")
            .selectText(admin_email).pressKey("delete")
            .typeText('#admin-edit-email', 'prageeththilina77@gmail.com')
            .click('#update-profile-btn');
    
});
