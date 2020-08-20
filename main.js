window.onload = () => {
    const form = document.querySelector('#formBox');

    submitForm = (event) => {
        event.preventDefault();
        const nameValue = document.querySelector('#textEnter').value;

        const fruitChecked = document.querySelector('#forFruit').checked;
        const veggieChecked = document.querySelector('#forVeggie').checked;

        const fruitList = document.querySelector('#list-fruits');
        const veggieList = document.querySelector('#list-vegetables');

        const newItem = document.createElement('li');
        const newText = document.createTextNode(nameValue);
        newItem.append(newText);

        if (fruitChecked === true) {
            fruitList.append(newItem);
        }

        if (veggieChecked === true) {
            veggieList.append(newItem);
        }
    }

    form.addEventListener('submit', submitForm);
}