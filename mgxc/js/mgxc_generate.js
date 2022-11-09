$(function () {

    function songId() {
        let result = "";
        const LENGTH = 32;
        const SOURCE = "abcdef0123456789";
        for (let i = 0; i < LENGTH; i++) {
            result += SOURCE[Math.floor(Math.random() * SOURCE.length)];
        };
        return result;
    };

    $('#meta-id').val(songId());

    /* コピー */
    $('#test-copy').on("click", function () {
        let text = $('#test').val();

        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        };
        var toast = new bootstrap.Toast($('#toast-clip'));
        toast.show()
    });

    /* ---------- */

    /* ダウンロード処理 */

    $('.download').on('click', function () {

        const i = parseInt($(this).val());

        //データ成型
        const data = {
            title: $('#meta-title').val(),
            artist: $('#meta-artist').val(),
            designer: $('#meta-nd').val(),
            playerlevel: [$('#lv-bas').val(), $('#lv-adv').val(), $('#lv-exp').val(), $('#lv-mas').val(), $('#lv-ult').val()],
            chartconst: [$('#const-bas').val(), $('#const-adv').val(), $('#const-exp').val(), $('#const-mas').val(), $('#const-ult').val()],
            songid: $('#meta-id').val(),
            bgm: $('#bgm').val(),
            bgmpreview: [$('#bgm-preview1').val(), $('#bgm-preview2').val()],
            jacket: $('#jacket').val(),
            bg: $('#bg').val(),
            bgscene: $('#bgscene').val(),
            bgsync: $('#bgsync').prop('checked') ? 1 : 0,
            fieldcol: $('#fcol').val() ? 1: "000000",
            fieldbg: $('#fbg').val(),
            fieldscene: $('#fscene').val(),
            mainbpm: $('#meta-bpm').val(),
            useclick: $('#meta-click').prop('checked') ? 1 : 0,
            //exlong: $('#meta-ex').val(),
            soofset: $('#meta-soffset').prop('checked') ? 1 : 0,
            beat: [$('#bgm-beat1').val(), $('#bgm-beat2').val()],
        };

        const diff = ['BASIC', 'ADVANCED', 'EXPERT', 'MASTER', 'ULTIMA']

        //成型
        //Meta
        let MGXC = '';
        MGXC += `MGCF0\n`;
        MGXC += `VERSION\t2\n`;
        MGXC += `BEGIN\tMETA\n`;
        if (data.title !== "") {
            MGXC += `TITLE\t${data.title}\n`;
        } else {
            MGXC += `TITLE\t無題\n`;
        }

        MGXC += `ARTIST\t${data.artist}\n`;
        MGXC += `DESIGNER\t${data.designer}\n`;

        MGXC += `DIFFICULTY\t${i}\n`;

        MGXC += `PLAYLEVEL\t${data.playerlevel[i]}\n`;
        MGXC += `WEATTRIBUTE\n`;

        if (data.chartconst[i] !== "") {
            MGXC += `CHARTCONST\t${((data.chartconst[i] * 100000)/100000).toFixed(5)}\n`;
        } else {
            MGXC += `CHARTCONST\n`;
        };

        MGXC += `SONGID\tMGT${data.songid}\n`;
        MGXC += `BGM\t${data.bgm}\n`;
        MGXC += `BGMOFFSET\t0.00000\n`;

        if (data.bgmpreview[0] !== "" && data.bgmpreview[1] !== "") {
            MGXC += `BGMPREVIEW\t${((data.bgmpreview[0] * 100000)/100000).toFixed(5)}\t${((data.bgmpreview[1]*100000)/100000).toFixed(5)}\n`;
        } else {
            MGXC += `BGMPREVIEW\t0.00000\t0.00000\n`;
        };

        MGXC += `JACKET\t${data.jacket}\n`;
        MGXC += `BG\t${data.bg}\n`;
        MGXC += `BGSCENE\t${data.bgscene}\n`;

        MGXC += `BGSYNC\t${data.bgsync}\n`;

        MGXC += `FIELDCOL\t${data.fieldcol}\n`;
        MGXC += `FIELDBG\t${data.fieldbg}\n`;
        MGXC += `FIELDSCENE\t${data.fieldscene}\n`;
        MGXC += `MAINTIL\t0\n`;

        if (data.mainbpm !== "") {
            MGXC += `MAINBPM\t${((data.mainbpm * 100000)/100000).toFixed(5)}\n`;
        } else {
            MGXC += `MAINBPM\t0.00000\n`;
        };

        MGXC += `TUTORIAL\t0\n`;
        MGXC += `SOFFSET\t${data.soofset}\n`;
        MGXC += `USECLICK\t${data.useclick}\n`;
        MGXC += `EXLONG\t0\n`;
        MGXC += `BGMWAITEND\t0\n`;
        MGXC += `AUTHOR_LIST\n`;
        MGXC += `AUTHOR_SITES\n`;
        MGXC += `DLURL\n`;
        MGXC += `COPYRIGHT\n`;
        MGXC += `LICENSE\n`;
        MGXC += `BEGIN\tHEADER\n`;

        if (data.beat[0] !== "" && data.beat[0] !== "") {
            MGXC += `BEAT\t0\t${data.beat[0]}\t${data.beat[1]}\n`;
        } else {
            MGXC += `BEAT\t0\t4\t4\n`;
        };

        if (data.mainbpm !== "") {
            MGXC += `BPM\t0\t${((data.mainbpm * 100000)/100000).toFixed(5)}\n`;
        } else {
            MGXC += `BPM\t0\t120.00000\n`;
        }

        MGXC += `TIL\t0\t0\t1.00000\n`;
        MGXC += `BEGIN	NOTES\n`;


        //$('#test').html(MGXC);
        //console.log(MGXC, i, data);
        $('#create').get(0).scrollIntoView(true)

        const blob = new Blob([MGXC], {
            type: "text/plain"
        });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${diff[i]}.mgxc`;
        link.click();
    });

});
