import { Role, Selector} from 'testcafe';

const admin = Role('http://localhost:3000/auth/admin-login', async t => {
    await t
        .typeText('#username', 'prageeth')
        .typeText('#password', '111111')
        .click('#btn-user-login');
});

fixture `Test Cafe Testing`
    .page `http://localhost:3000/admin/books/add`;

test('Admin Add a Book Test', async t => {
    await t
        .typeText('#book-title', 'Sherlock Holmes')
        .typeText('#book-author', 'Chandana Mendis')
        .typeText('#book-ISBN', '978-1-4088-5567-7')
        .typeText('#book-category', 'Fiction')
        .typeText('#book-stock', '5')
        .typeText('#book-description', 'Famous Fiction')
        .click('#add-book-btn');

});