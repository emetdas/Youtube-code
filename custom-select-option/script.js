let select_dropdown = document.querySelector('.select-dropdown');

async function countryList() {
  let data = await fetch('https://restcountries.com/v3.1/all');
  let response = await data.json();

  response.forEach((element) => {
    let option = document.createElement('li');
    option.className = 'option';
    option.setAttribute('value', element.name.common);
    option.innerHTML = `<img src="${element.flags.svg}" alt="${element.name.common}" /> <span>${element.name.common}</span>`;
    select_dropdown.appendChild(option);
  });

  let select = document.querySelector('.select');
  let select_value = document.querySelector('.select span');
  let options = document.querySelectorAll('.option');

  select.addEventListener('click', () => {
    select.classList.toggle('selected');
    select_dropdown.classList.toggle('active');
  });

  options.forEach((option) => {
    option.addEventListener('click', (e) => {
      let selected = e.target.getAttribute('value');
      select.classList.remove('selected');
      select_dropdown.classList.remove('active');
      select.setAttribute('value', selected);
      select_value.innerText = e.target.innerText;
    });
  });
}
countryList();
