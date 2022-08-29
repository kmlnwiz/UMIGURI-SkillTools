$(function () {

    //フォーム無効化
    $('#judge-bonus-type1').on("change", function () {
        if ($('#judge-bonus-type1').val() == "Guard" || $('#judge-bonus-type1').val() == "Kill") {
            $('#judge-bonus1').prop('disabled', true);
        } else {
            $('#judge-bonus1').prop('disabled', false);
        };
    });
    $('#judge-bonus-type2').on("change", function () {
        if ($('#judge-bonus-type2').val() == "Guard" || $('#judge-bonus-type2').val() == "Kill") {
            $('#judge-bonus2').prop('disabled', true);
        } else {
            $('#judge-bonus2').prop('disabled', false);
        };
    });
    $('#judge-bonus-type3').on("change", function () {
        if ($('#judge-bonus-type3').val() == "Guard" || $('#judge-bonus-type3').val() == "Kill") {
            $('#judge-bonus3').prop('disabled', true);
        } else {
            $('#judge-bonus3').prop('disabled', false);
        };
    });
    //

    $('#judge-bonus-type1').on("change", function () {
        if ($('#judge-bonus-type1').val() == "Kill") {
            $('#judge-in-opt1-5').prop('checked', true);
        };
    });
    $('#judge-bonus-type2').on("change", function () {
        if ($('#judge-bonus-type2').val() == "Kill") {
            $('#judge-in-opt2-5').prop('checked', true);
        };
    });
    $('#judge-bonus-type3').on("change", function () {
        if ($('#judge-bonus-type3').val() == "Kill") {
            $('#judge-in-opt3-5').prop('checked', true);
        };
    });


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

    $('#download').on('click', function () {

        //データ成型
        const data = {
            Meta: {
                Version: function () {
                    if ($('#meta-version').val() != "" && $('#meta-version').val() >= 0) {
                        return $('#meta-version').val();
                    } else {
                        return 1;
                    };
                },
                Title: [$('#meta-title').val(),$('#meta-title-en').val()],
                Desc: [$('#meta-desc').val().split(/\r\n|\n/), $('#meta-desc-en').val().split(/\r\n|\n/)],
                Attr: $("input[name='attr']:checked").val() ? $("input[name='attr']:checked").val() : "",
                Indicator: [$("input[name='innormal1']:checked").val(), $("input[name='innormal2']:checked").val(), $("input[name='idanger2']:checked").val()],
                CountDef: function () {
                    if ($('#meta-contdef').val() != "" || $('#meta-contdef').val() < 0) {
                        return $('#meta-countdef').val();
                    } else {
                        return "";
                    };
                },
                Grade: $('#meta-grade').val(),
                TargetChara: $('#meta-targetchara').val().split(/\r\n|\n/),
            },
            OnStart: {
                skill: [{
                    Bonus: $('#start-bonus1').val(),
                    Indicator: $("input[name='start-in1']:checked").val(),
                    If: [$('#start-if-element1').val(), $('#start-if-val1').val(), $('#start-if-comparison1').val()],
                    use: function () {
                        if ($('#start-bonus1').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    },
                }, {
                    Bonus: $('#start-bonus2').val(),
                    Indicator: $("input[name='start-in2']:checked").val(),
                    If: [$('#start-if-element2').val(), $('#start-if-val2').val(), $('#start-if-comparison2').val()],
                    use: function () {
                        if ($('#start-bonus2').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    }
                }],
            },
            OnJudge: {
                skill: [{
                    Bonus: $('#judge-bonus1').val(),
                    Indicator: $("input[name='judge-in1']:checked").val(),
                    Type: $('#judge-bonus-type1').val(),
                    Notes: $('#judge-if-notes1').val(),
                    NotesType: $('#judge-if-notestype1').val(),
                    Answer: $('#judge-if-answer1').val(),
                    If: [$('#judge-if-element1').val(), $('#judge-if-element-val1').val(), $('#judge-if-comparison1').val()],
                    CounterIf: [$('#judge-if-counter-val1').val(), $('#judge-if-counter1').val()],
                    Counter: $('#judge-if-counter-hundle-val1').val(),
                    use: function () {
                        if ($('#judge-bonus1').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    },
                }, {
                    Bonus: $('#judge-bonus2').val(),
                    Indicator: $("input[name='judge-in2']:checked").val(),
                    Type: $('#judge-bonus-type2').val(),
                    Notes: $('#judge-if-notes2').val(),
                    NotesType: $('#judge-if-notestype2').val(),
                    Answer: $('#judge-if-answer2').val(),
                    If: [$('#judge-if-element2').val(), $('#judge-if-element-val2').val(), $('#judge-if-comparison2').val()],
                    CounterIf: [$('#judge-if-counter-val2').val(), $('#judge-if-counter2').val()],
                    Counter: $('#judge-if-counter-hundle-val2').val(),
                    use: function () {
                        if ($('#judge-bonus2').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    },
                }, {
                    Bonus: $('#judge-bonus3').val(),
                    Indicator: $("input[name='judge-in3']:checked").val(),
                    Type: $('#judge-bonus-type3').val(),
                    Notes: $('#judge-if-notes3').val(),
                    NotesType: $('#judge-if-notestype3').val(),
                    Answer: $('#judge-if-answer3').val(),
                    If: [$('#judge-if-element3').val(), $('#judge-if-element-val3').val(), $('#judge-if-comparison3').val()],
                    CounterIf: [$('#judge-if-counter-val3').val(), $('#judge-if-counter3').val()],
                    Counter: $('#judge-if-counter-hundle-val3').val(),
                    use: function () {
                        if ($('#judge-bonus3').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    },
                }]
            },
            OnTimer: {
                skill: [{
                    Bonus: $('#timer-bonus1').val(),
                    Indicator: $("input[name='timer-in1']:checked").val(),
                    If: [$('#timer-if-element1').val(), $('#timer-if-val1').val(), $('#timer-if-comparison1').val()],
                    Counter: $('#timer-if-counter-hundle-val1').val(),
                    use: function () {
                        if ($('#timer-bonus1').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    },
                }, {
                    Bonus: $('#timer-bonus2').val(),
                    Indicator: $("input[name='timer-in2']:checked").val(),
                    If: [$('#timer-if-element2').val(), $('#timer-if-val2').val(), $('#timer-if-comparison2').val()],
                    Counter: $('#timer-if-counter-hundle-val2').val(),
                    use: function () {
                        if ($('#timer-bonus2').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    }
                }],
            },
            OnFinish: {
                skill: [{
                    Bonus: $('#finish-bonus1').val(),
                    Indicator: $("input[name='finish-in1']:checked").val(),
                    If: [$('#finish-if-element1').val(), $('#finish-if-val1').val(), $('#finish-if-comparison1').val()],
                    use: function () {
                        if ($('#finish-bonus1').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    },
                }, {
                    Bonus: $('#finish-bonus2').val(),
                    Indicator: $("input[name='finish-in1']:checked").val(),
                    If: [$('#finish-if-element2').val(), $('#finish-if-val2').val(), $('#finish-if-comparison1').val()],
                    use: function () {
                        if ($('#finish-bonus2').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    },

                }, {
                    Bonus: $('#finish-bonus3').val(),
                    Indicator: $("input[name='finish-in3']:checked").val(),
                    Achieve: $('#finish-if-element3').val(),
                    use: function () {
                        if ($('#finish-bonus3').val() != "") {
                            return true;
                        } else {
                            return false;
                        };
                    },
                }]
            }
        };


        //成型
        //Meta
        let UCSL = '';
        UCSL += `Meta:\n`;
        UCSL += `\tVersion\t${data.Meta.Version()}\n\n`;
        UCSL += `\tLang\tja\n`
        UCSL += `\tTitle\t${data.Meta.Title[0]}\n`;
        for (let i = 0; i < data.Meta.Desc[0].length; i++) {
            UCSL += `\tDesc\t${data.Meta.Desc[0][i]}\n`;
        };
        UCSL += `\tLang\ten\n`
        UCSL += `\tTitle\t${data.Meta.Title[1]}\n`;
        for (let i = 0; i < data.Meta.Desc[1].length; i++) {
            UCSL += `\tDesc\t${data.Meta.Desc[1][i]}\n`;
        };

        UCSL += `\tAttr\t${data.Meta.Attr}\n`;

        UCSL += `\tIndicator`;
        //デススキルが選択されているならば
        if ($('#onDeath').prop('checked')) {
            UCSL += `\tIDanger`;
        };
        if (data.Meta.Indicator[2]) {
            UCSL += `\t${data.Meta.Indicator[2]}`;
        };
        if (data.Meta.Indicator[0]) {
            UCSL += `\t${data.Meta.Indicator[0]}`;
        };
        if (data.Meta.Indicator[1]) {
            UCSL += `\t${data.Meta.Indicator[1]}`;
        };

        UCSL += `\n`;

        //カウントがあるならば
        if (data.Meta.CountDef() != "") {
            UCSL += `\tCountDef\t${data.Meta.CountDef()}\n`
        };

        //固有設定
        if (data.Meta.TargetChara != "") {
            for (let i = 0; i < data.Meta.TargetChara.length; i++) {
                UCSL += `\tTargetChara\t${data.Meta.TargetChara[i]}\n`;
            };
        };

        UCSL += `\n`;


        //OnStart
        UCSL += `OnStart:\n`;
        for (let i = 0; i < 2; i++) {

            if (data.OnStart.skill[i].use()) {
                UCSL += `\t# ゲーム開始時発動${i+1}\n`;
                if (data.OnStart.skill[i].If[0]) {
                    UCSL += `\tIf\t${data.OnStart.skill[i].If[0]}\t${data.OnStart.skill[i].If[2]}\t${data.OnStart.skill[i].If[1]}\n`;
                    UCSL += `\tBoost\t${data.OnStart.skill[i].Indicator}\tAdd\t${data.OnStart.skill[i].Bonus}\n`;
                    UCSL += `\tClearIf\n`;
                } else {
                    UCSL += `\tBoost\t${data.OnStart.skill[i].Indicator}\tAdd\t${data.OnStart.skill[i].Bonus}\n`;
                };
            };

        };

        if ($('#onDeath').prop('checked')) {
            UCSL += `\t# デンジャースキル演出\n`;
            UCSL += `\tBoost\tIDanger\tAdd\t0\n`;
        } else {

        };

        UCSL += `\n`;


        //OnJudge
        UCSL += `OnJudge:\n`;

        for (let i = 0; i < 3; i++) {
            let isIf = false;
            if (data.OnJudge.skill[i].use() || data.OnJudge.skill[i].Type == "Guard" || data.OnJudge.skill[i].Type == "Kill") {
                UCSL += `\t# ノーツ判定時発動${i+1}\n`;
                if (data.OnJudge.skill[i].Notes.length != 5 && data.OnJudge.skill[i].Notes.length != 0) {
                    UCSL += `\tIf\tNoteCat\t=\t${data.OnJudge.skill[i].Notes.join('\t')}\n`;
                    isIf = true;
                };

                if (data.OnJudge.skill[i].NotesType.length != 16 && data.OnJudge.skill[i].NotesType.length != 0) {
                    UCSL += `\tIf\tNoteType\t=\t${data.OnJudge.skill[i].NotesType.join('\t')}\n`;
                    isIf = true;
                };

                if (data.OnJudge.skill[i].Type == "Guard") {
                    UCSL += `\tIf\tAnswer\t=\tM\n`;
                } else if (data.OnJudge.skill[i].Type == "Kill") {
                    UCSL += `\tIf\tAnswer\t=\tM\n`;
                } else {
                    if (data.OnJudge.skill[i].Answer.length == 0) {
                        UCSL += `\tIf\tAnswer\t!=\tM\n`;
                    } else if (data.OnJudge.skill[i].Answer.length != 4) {
                        UCSL += `\tIf\tAnswer\t=\t${data.OnJudge.skill[i].Answer.join('\t')}\n`;
                    };
                    isIf = true;
                };
                if (data.OnJudge.skill[i].If[0]) {
                    UCSL += `\tIf\t${data.OnJudge.skill[i].If[0]}\t${data.OnJudge.skill[i].If[2]}\t${data.OnJudge.skill[i].If[1]}\n`;
                    isIf = true;
                    if (data.OnJudge.skill[i].If[0] == "ComboMod100") {
                        UCSL += `\tIf\tCombo\t!=\t0\n`;
                    }
                };
                if (data.OnJudge.skill[i].CounterIf[0]) {
                    UCSL += `\tIf\tCounter\t${data.OnJudge.skill[i].CounterIf[1]}\t${data.OnJudge.skill[i].CounterIf[0]}\n`;
                    isIf = true;
                };

                if (isIf) UCSL += `\t`;
                if (data.OnJudge.skill[i].Type == "Add") {
                    UCSL += `\tBoost\t${data.OnJudge.skill[i].Indicator}\tAdd\t${data.OnJudge.skill[i].Bonus}\n`;
                } else if (data.OnJudge.skill[i].Type == "Mul") {
                    UCSL += `\tBoost\t${data.OnJudge.skill[i].Indicator}\tMul\t${data.OnJudge.skill[i].Bonus/100}\n`;
                } else if (data.OnJudge.skill[i].Type == "Guard") {
                    UCSL += `\tBoost\t${data.OnJudge.skill[i].Indicator}\tMul\t0\n`;
                } else if (data.OnJudge.skill[i].Type == "Kill") {
                    UCSL += `\tKill\n`;
                }

                if (isIf) UCSL += `\t`;
                if (data.OnJudge.skill[i].Counter != "") {
                    UCSL += `\tCounter\t${data.OnJudge.skill[i].Counter}\n`;
                };

                if (isIf) {
                    UCSL += `\tClearIf\n`;
                };

            };
        };

        if ($('#onDeath').prop('checked')) {
            UCSL += `\t# カウント0でゲームを強制終了\n`;
            UCSL += `\tIf\tCounter\t<=\t0\n`;
            UCSL += `\t\tKill\n`;
            UCSL += `\tClearIf\n`;
        };

        UCSL += `\n`;


        //OnTimer
        UCSL += `OnTimer:\n`;
        for (let i = 0; i < 2; i++) {
            let isIf = false;

            if (data.OnTimer.skill[i].use()) {
                UCSL += `\t# 一定時間経過発動${i + 1}\n`;
                if (data.OnTimer.skill[i].If[0]) {
                    UCSL += `\tIf\t${data.OnTimer.skill[i].If[0]}\t${data.OnTimer.skill[i].If[2]}\t${data.OnTimer.skill[i].If[1]}\n`;
                    isIf = true;
                };
                if (isIf) UCSL += `\t`;
                UCSL += `\tBoost\t${data.OnTimer.skill[i].Indicator}\tAdd\t${data.OnTimer.skill[i].Bonus}\n`;
                if (data.OnTimer.skill[i].Counter != "") {
                    if (isIf) UCSL += `\t`;
                    UCSL += `\tCounter\t${data.OnTimer.skill[i].Counter}\n`;
                    isIf = true;
                };

                if (isIf) {
                    UCSL += `\tClearIf\n`;
                };
            };

        };

        UCSL += `\n`;


        //OnFinish
        UCSL += `OnFinish:\n`;
        for (let i = 0; i < 2; i++) {

            if (data.OnFinish.skill[i].use()) {
                UCSL += `\t# ゲーム終了時発動${i+1}\n`;
                if (data.OnFinish.skill[i].If[0]) {
                    UCSL += `\tIf\t${data.OnFinish.skill[i].If[0]}\t${data.OnFinish.skill[i].If[2]}\t${data.OnFinish.skill[i].If[1]}\n`;
                    UCSL += `\tBoost\t${data.OnFinish.skill[i].Indicator}\tAdd\t${data.OnFinish.skill[i].Bonus}\n`;
                    UCSL += `\tClearIf\n`;
                } else {
                    UCSL += `\tBoost\t${data.OnFinish.skill[i].Indicator}\tAdd\t${data.OnFinish.skill[i].Bonus}\n`;
                };
            };

        };

        if (data.OnFinish.skill[2].use()) {
            UCSL += `\t# ゲーム終了時発動3\n`;
            if (data.OnFinish.skill[2].Achieve) {
                UCSL += `\tIf\t${data.OnFinish.skill[2].Achieve}\n`;
                UCSL += `\tBoost\t${data.OnFinish.skill[2].Indicator}\tAdd\t${data.OnFinish.skill[2].Bonus}\n`;
                UCSL += `\tClearIf\n`;
            } else {
                UCSL += `\tBoost\t${data.OnFinish.skill[2].Indicator}\tAdd\t${data.OnFinish.skill[2].Bonus}\n`;
            };
        };

        UCSL += `\n# 生成　https://score-list.herokuapp.com/skill/index.html\n`;



        $('#test').html(UCSL);
        $('#create').get(0).scrollIntoView(true)
        const blob = new Blob([UCSL], {
            type: "text/plain"
        });
        //const link = document.createElement('a');
        //link.href = URL.createObjectURL(blob);
        //link.download = `${$('#file-name').val()}_0.ucsl`;
        //link.click();
    });

});
