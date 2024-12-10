$(document).ready(function(){
    $.getJSON("data.json", function(data){
        let users = data.users;

        $.each(users, function(index, user){
           $("aside").append(`<div class="user-info">
                <div class="profile">
                    ${user.username[0]}
                </div>
                <h5>${user.username}</h5>
            </div>`)
        })
    })
})