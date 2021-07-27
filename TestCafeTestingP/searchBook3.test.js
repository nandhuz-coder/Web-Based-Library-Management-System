//testcafe chrome ./TestCafeTestingP/searchBook3.test.js

import { Selector} from 'testcafe';

fixture `Test Cafe Testing`
    .page `http://localhost:3000/books/all/all/1`;

const filtertype = Selector('#filter');
const filteroption = filtertype.find('option');

test('Search Books Testing', async t => {
    await t
        .setTestSpeed(0.20)
        .click(filtertype)
        .click(filteroption.withText('Title'))
        .typeText('#searchName', 'Robin Hood')
        .click('#search-book-btn');

});