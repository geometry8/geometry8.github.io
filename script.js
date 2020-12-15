function show(id) {
    let e = document.getElementById(`${id}sol`);
    e.style.display = 'block';
    e = document.getElementById(`${id}b`);
    e.setAttribute('onClick', `javascript: hide('${id}');`);
    e.innerHTML = 'Hide Solution';
    e.classList.toggle('showing');
}

function hide(id) {
    let e = document.getElementById(`${id}sol`);
    e.style.display = 'none';
    e = document.getElementById(`${id}b`);
    e.setAttribute('onClick', `javascript: show('${id}');`);
    e.innerHTML = 'Show Solution';
    e.classList.toggle('showing');
}