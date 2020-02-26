let url = 'https://jsonplaceholder.typicode.com/users';
(async () => {

    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();

        let table = document.createElement('table');
        table.className = "table  table-striped"

        let row;

        let thead = table.insertRow(-1);

        let th1 = thead.insertCell(-1);
        th1.innerHTML = "Name";
        //th1.className = "thead";
        th1.onclick = headerSortHandler;

        let th2 = thead.insertCell(-1);
        th2.innerHTML = "Username";
        //th2.className = "thead";
        th2.onclick = headerSortHandler;

        let th3 = thead.insertCell(-1);
        th3.innerHTML = "Email";
        //th3.className = "thead";
        th3.onclick = headerSortHandler;

        let th4 = thead.insertCell(-1);
        th4.innerHTML = "Website";
        //th4.className = "thead";
        th4.onclick = headerSortHandler;


        for (let i = 0; i < json.length; i++) {

            row = table.insertRow(-1);

            let td1 = row.insertCell(-1);
            let name = json[i].name;
            td1.innerHTML = name;
            td1.onclick = nameClickHandler;

            let td2 = row.insertCell(-1);
            let username = json[i].username;
            td2.innerHTML = username;

            let td3 = row.insertCell(-1);
            let email = json[i].email;
            td3.innerHTML = email;

            let td4 = row.insertCell(-1);
            let website = json[i].website;
            td4.innerHTML = website;

        }
        document.body.append(table);

        //модальное окно при клике на имя пользователя
        function nameClickHandler(e) {

            let p = document.querySelector('p');
            let n = e.target.innerHTML;
            json.forEach(el => {
                if (el.name == n) {
                    p.innerHTML = "Улица:" + el.address.street + " Город:" + el.address.city + " Zipcode:" + el.address.zipcode;
                }
            })

            let modal = document.getElementById("my_modal");

            modal.style.display = "block";
            span = document.getElementsByClassName("close_modal")[0];
            span.onclick = function() {
                modal.style.display = "none";
            }

        };

        //сортировка полльзователей по клику на заголовок столбца

        function headerSortHandler(e) {

            let sortedRows = Array.from(table.rows).slice(1);
            sortedRows.sort((rowA, rowB) => rowA.cells[e.target.cellIndex].innerHTML > rowB.cells[e.target.cellIndex].innerHTML ? 1 : -1);
            table.tBodies[0].append(...sortedRows);

        }

    } else {
        alert("Ошибка http:" + response.status);
    }


})();
//comment