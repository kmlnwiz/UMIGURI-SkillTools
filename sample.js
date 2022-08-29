$(function () {
    let html = '';

    for (let i = 0; i < data.length; i++) {

        html += `<div class="col-12 my-2 px-0">`;
        html += `<div id="" class="h5 bg-primary text-white fw-bold p-2 rounded mt-4">${data[i][0].title[0].slice(0,-1)} / ${data[i][0].title[1].slice(0,-1)}</div>`
        html += `</div>`;
        for (let j = 0; j < data[i].length; j++) {

            html += `<div class="col-12 col-md-6 col-xl-4 mb-3 px-1">`;
            //html += `<div id="create" class="h6 rounded bg-secondary text-white fw-bold p-2">${data[i][j].title}</div>`;

            html += `<div class="h6 border-top border-bottom border-success border-2 p-2 fw-bold">${data[i][j].title[0]} / ${data[i][j].title[1]}</div>`;

            function repl(txt) {
                txt = txt.replaceAll('<#c:', '<span style="color:#');
                txt = txt.replaceAll(/([a-zA-Z_0-9]{3,6})>/g, '$1;">');
                txt = txt.replaceAll('<#r>', '</span>');
                txt = txt.replaceAll('\n', '</span><br>');
                return txt;
            }
            html += `<div class="my-2">${repl(data[i][j].desc[0])}</div>`;
            html += `<div class="my-2 p-2 small border border-2 rounded">${repl(data[i][j].desc[1])}</div>`;

            html += `<div class="h5 fw-bold p-2 rounded btn btn-outline-primary w-100" data-bs-toggle="collapse" data-bs-target="#skill${i}-${j}">Learn more</div>
                <div class="collapse" id="skill${i}-${j}">`;

            html += `<div id="normal-desc1" class="my-1"></div>`;
            html += `<button id="sample-copy${i}${j}" class="btn btn-success mt-1 rounded-0 rounded-top"><i class="bi bi-clipboard me-1"></i>コピー / Copy</button>`;
            html += `<textarea type="text" class="form-control mb-2" rows="10" id="sample${i}${j}" placeholder="" style="border-radius: 0.0rem 0.25rem 0.25rem 0.25rem;" readonly>${data[i][j].script}</textarea>`;

            html += `</div>`;
            html += `</div>`;
        };

    };


    $('#sample').html(html);

    /* コピー */
    $("button[id^='sample-copy']").on("click", function () {
        const No = $(this).attr('id').slice(-2);
        let text = $(`#sample${No}`).val();

        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        };
        var toast = new bootstrap.Toast($('#toast-clip'));
        toast.show()
    });

    /* ---------- */
});
