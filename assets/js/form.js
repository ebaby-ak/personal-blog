const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

const blog = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
};

localStorage.setItem('blog', JSON.stringify(blog));

});