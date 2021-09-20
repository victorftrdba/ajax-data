function displayData() {
    setInterval(function () {
        $('#posts').html('')
        $.ajax({
            type: 'GET',
            async: true,
            url: '/posts.php',
            success: function (data) {
                let result = $.parseJSON(data)
                result.map(function (data) {
                    $('#posts').append(`<div class="container">
                    <div class="row">
                        <div class="col">
                            ${data.title} 
                            <div class="mb-5">${data.description}</div>
                        </div>
                    </div>
                </div>`)
                })
            }
        })
    }, 5000)
}

displayData()