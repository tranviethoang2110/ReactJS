var items = document.querySelectorAll(".item");
items.forEach(function(element) {
    element.onclick = function() {
        var classValue = element.classList[1];
        $.ajax({
            url: "/manage/" + classValue,
            method: "GET",
            success: function (data) {
                $(".content").html(data);
            },
            error: function (xhr, status, error) {
                console.error("Error loading content:", status, error);
            }
        });
    }
});


var mode = ""

function openModal() {
    var modal = document.querySelector(".modal")
    modal.style.display = "flex"
}

function exitModal() {
    var modal = document.querySelector(".modal")
    modal.style.display = "none"
}
