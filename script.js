let datasUrl = 'https://jsonplaceholder.typicode.com/users';
$.getJSON(datasUrl, function(data) {

    $.each(data, function(key, value) {
        var name = value.name;
        var username = value.username;
        var email = value.email;
        var website = value.website;

        $('.myTable').append('<tr><td class="name">' + name + '</td><td class="username" >' + username + '</td><td class="email">' + email + '</td><td class="website">' + website + '</td></tr>');

    });
    //открытие модального окна при клике на имя пользователя

    $(".name").click(function(e) {
        //console.dir(e);
        let n = $(this).text();
        $.each(data, function(key, value) {
            if (n == value.name) {
                alert('City: ' + value.address.city + " " + ' Strret: ' +
                    value.address.street + " " + ' Zipcode: ' + value.address.zipcode);
            }

        });

    });

    //сортировка по столбцу
    $('th').click(function(e) {

        let msg = $(this).text();
        let className = $(this).text().toLowerCase();
        let arrWithClass = [];
        $($('.' + className).each(function(index, element) {
            arrWithClass.push($(element).text());
            arrWithClass.sort();

        }))

        alert(msg + ":" + arrWithClass);
    });
});