$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        let isValid = true;

        // Check if all fields are filled
        $(this).find("input, select, textarea").each(function () {
            if (!$(this).val()) {
                alert(`${$(this).attr("name")} is required!`);
                isValid = false;
                return false;
            }
        });

        // If form is invalid, prevent submission
        if (!isValid) {
            e.preventDefault();
        }
    });
});
