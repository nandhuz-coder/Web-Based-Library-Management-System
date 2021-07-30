//testcafe chrome ./TestCafeTestingP/searchBook1.test.js

import { Selector} from 'testcafe';

fixture `Test Cafe Testing`
    .page `http://localhost:3000/books/all/all/1`;

const filtertype = Selector('#filter');
const filteroption = filtertype.find('option');

test('Search Book in a correct way by select title and entering search name Testing', async t => {
    await t
        .setTestSpeed(0.1)
        .click(filtertype)
        .click(filteroption.withText('Title'))
        .typeText('#searchName', 'Harry Potter')
        .click('#search-book-btn');

});