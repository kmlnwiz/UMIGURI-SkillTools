data = [
	[{
		title: [`ガードⅠ`, `GuardⅠ`],
		desc: [`ゲーム開始時にボーナス <#c:00f>+6000
	一定回数ダメージを無効化`,
			`Bonus <#c:00f>+6000<#r> at the start of the track.
	Blocks damage a certain number of times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ガードⅠ
	Desc	ゲーム開始時にボーナス <#c:00f>+6000
	Desc	一定回数ダメージを無効化

	Lang	en
	Title	GuardⅠ
	Desc	Bonus <#c:00f>+6000<#r> at the start of the track.
	Desc	Blocks damage a certain number of times.

	Attr	Guard
	Indicator	INGuard
	CountDef	20

OnStart:
	# ゲーム開始時発動1
	Boost	INGuard	Add	6000

OnJudge:
	# ノーツ判定時発動1
	If	Counter	>	0
	If	Answer	=	M
		Boost	INGuard	Mul	0
		Counter	-1
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ガードⅡ`, `GuardⅡ`],
		desc: [`ゲージが1本未満の時
	ダメージ無効
	100コンボごとにボーナス <#c:00f>+2500
	MISS時に追加ダメージ <#c:f00>-10000`,
			`Blocks damage
	if the gauge is less than one.
	Bonus <#c:00f>+2500<#r> for every 100 COMBO.
	Damage <#c:f00>-10000<#r> when MISS.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ガードⅡ
	Desc	ゲージが1本未満の時
	Desc	ダメージ無効
	Desc	100コンボごとにボーナス <#c:00f>+2500
	Desc	Damage <#c:f00>-10000<#r> when MISS.

	Lang	en
	Title	GuardⅡ
	Desc	Blocks damage
	Desc	if the gauge is less than one.
	Desc	Bonus <#c:00f>+2500<#r> for every 100 COMBO.
	Desc	Damage <#c:f00>-10000<#r> when MISS.

	Attr	Guard
	Indicator	IDBoost	INBoost	INGuard

OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	=	M
	If	Gauge	<	1
		Boost	INGuard	Mul	0
		ClearIf
	# ノーツ判定時発動2
	If	Answer	!=	M
	If	ComboMod100	=	0
	If	Combo	!=	0
		Boost	INBoost	Add	2500
		ClearIf
	# ノーツ判定時発動3
	If	Answer	=	M
	If	Gauge	>=	1
		Boost	IDBoost	Add	-10000
		ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ガードⅢ`, `GuardⅢ`],
		desc: [`ゲージ上昇UP <#c:00f> (205.00%)
		一定回数ダメージ無効
		JUSTICE以下の時にゲージ上昇しない
		MISS時のダメージが増える <#c:f00>(300.00%)`,
			`Increases the gauge <#c:00f> (205.00%)<#r>.
		Blocks damages a certain number of times.
		The gauge dosen't increase when JUSTICE or below.
		Increased damege when MISS <#c:f00>(300.00%)<#r>.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ガードⅢ
	Desc	ゲージ上昇UP <#c:00f> (205.00%)
	Desc	一定回数ダメージ無効
	Desc	JUSTICE以下の時にゲージ上昇しない
	Desc	MISS時のダメージが増える <#c:f00>(300.00%)

	Lang	en
	Title	GuardⅢ
	Desc	Increases the gauge <#c:00f> (205.00%)<#r>.
	Desc	Blocks damages a certain number of times.
	Desc	The gauge dosen't increase when JUSTICE or below.
	Desc	Increased damege when MISS <#c:f00>(300.00%)<#r>.

	Attr	Guard
	Indicator	IDBoost	INBoost	INGuard
	CountDef	5

OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	2.05
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
	If	Counter	>	0
		Boost	INGuard	Mul	0
		Counter	-1
	ClearIf
	# ノーツ判定時発動3
	If	Answer	=	J	A	M
		Boost	IDBoost	Mul	0
		ClearIf
	# ノーツ判定時発動4
	If	Answer	=	M
	If	Counter	<=	0
		Boost	IDBoost	Mul	3
		ClearIf

OnTimer:

OnFinish:
`
	}],
	[{
		title: [`サポートⅠ`, `SupportⅠ`],
		desc: [`ゲーム終了時にボーナス <#c:00f>+12000`,
			`Bonus <#c:00f>+12000<#r> at the end of the track.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	サポートⅠ
	Desc	ゲーム終了時にボーナス <#c:00f>+12000

	Lang	en
	Title	SupportⅠ
	Desc	Bonus <#c:00f>+12000<#r> at the end of the track.

	Attr	Support
	Indicator	INSupport

OnStart:

OnJudge:

OnTimer:

OnFinish:
	# ゲーム終了時発動1
	Boost	INSupport	Add	12000
`
	}, {
		title: [`サポートⅡ`, `SupportⅡ`],
		desc: [`一定時間ごとにボーナス <#c:00f>+200`,
			`Bonus <#c:00f>+200<#r> at regular intervals.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	サポートⅡ
	Desc	一定時間ごとにボーナス <#c:00f>+200

	Lang	en
	Title	SupportⅡ
	Desc	Bonus <#c:00f>+200<#r> at regular intervals.

	Attr	Support
	Indicator	INSupport

OnStart:

OnJudge:

OnTimer:
	# 一定時間経過発動1
	Boost	INSupport	Add	200

OnFinish:
`
	}, {
		title: [`サポートⅢ`, `SupportⅢ`],
		desc: [`ゲーム開始時にボーナス <#c:00f>+80000
		ゲージ上昇DOWN <#c:f00>(30.00%)`,
			`Bonus <#c:00f>+12000<#r> at the start of the track.
		Increments the gauge increase rate to <#c:f00>(30.00%)<#r>.
		`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	サポートⅢ
	Desc	ゲーム開始時にボーナス <#c:00f>+80000
	Desc	ゲージ上昇DOWN <#c:f00>(30.00%)

	Lang	en
	Title	SupportⅢ
	Desc	Bonus <#c:00f>+12000<#r> at the start of the track.
	Desc	Increments the gauge increase rate to <#c:f00>(30.00%)

	Attr	Support
	Indicator	IDBoost	INSupport

OnStart:
	# ゲーム開始時発動1
	Boost	INSupport	Add	80000

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	IDBoost	Mul	0.3
		ClearIf

OnTimer:

OnFinish:
`
	}],
	[{
		title: [`ノーマルⅠ`, `NormalⅠ`],
		desc: [`MISS10回未満を達成している場合
		ゲージ上昇UP <#c:00f>(175.00%)`,
			`Increases the gauge <#c:00f>(175.00%)
		if the number of MISS counts less than 10.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ノーマルⅠ
	Desc	MISS10回未満を達成している場合
	Desc	ゲージ上昇UP <#c:00f>(175.00%)

	Lang	en
	Title	NormalⅠ
	Desc	Increases the gauge <#c:00f>(175.00%)
	Desc	if the number of MISS counts less than 10 times.

	Attr	BNormal
	Indicator	INBoost
OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	MCount	<	10
		Boost	INBoost	Mul	1.75
		ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ノーマルⅡ`, `NormalⅡ`],
		desc: [`MISS判定15回未満の時
		ゲージ上昇UP <#c:00f>(195.00%)
		MISS判定15回以上の時
		MISSでゲージ0になる`,
			`Increases the gauge
		if the number of MISS counts less than 15 times <#c:00f>(195.00%)<#r>.
		The gauge becomes 0 when MISS
		if the number of MISS counts 15 or more times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ノーマルⅡ
	Desc	MISS判定15回未満の時
	Desc	ゲージ上昇UP <#c:00f>(195.00%)
	Desc	MISS判定15回以上の時
	Desc	MISSでゲージ0になる

	Lang	en
	Title	NormalⅡ
	Desc	Increases the gauge
	Desc	if the number of MISS counts less than 15 times <#c:00f>(195.00%)<#r>.
	Desc	The gauge becomes 0 when MISS
	Desc	if the number of MISS counts 15 or more times.
	Attr	BNormal
	Indicator	IDBoost	INBoost
	CountDef	15

OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	1.95
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
		Counter	-1
	ClearIf
	# ノーツ判定時発動3
	If	Answer	=	M
	If	MCount	<	15
	If	Counter	<=	0
		Boost	IDBoost	Add	-500000
		ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ノーマルⅢ`, `NormalⅢ`],
		desc: [`2/3経過後からゲージ上昇UP <#c:00f>(240.00%)
		MISS時のダメージが増える <#c:f00>(150.00%)`,
			`Increases the gauge after two-thirds of the track has passed <#c:00f>(240.00%)<#r>.
		Increased damege when MISS <#c:f00>(150.00%)<#r>.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ノーマルⅢ
	Desc	2/3経過後からゲージ上昇UP <#c:00f>(240.00%)
	Desc	MISS時のダメージが増える <#c:f00>(150.00%)

	Lang	en
	Title	NormalⅢ
	Desc	Increases the gauge after two-thirds of the track has passed <#c:00f>(240.00%).
	Desc	Increased damege when MISS <#c:f00>(150.00%)<#r>.

	Attr	BNormal
	Indicator	IDBoost	INBoost
OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	Prog	>	80
		Boost	INBoost	Mul	2.5
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
		Boost	IDBoost	Mul	1.5
		ClearIf

OnTimer:

OnFinish:
`
	}],
	[{
		title: [`コンボⅠ`, `ComboⅠ`],
		desc: [`500コンボを達成した場合
		ゲーム終了時にボーナス <#c:00f>+42000`,
			`Bonus <#c:00f>+42000<#r> at the end of the track
		if you achieve 500 COMBO.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	コンボⅠ
	Desc	500コンボを達成した場合
	Desc	ゲーム終了時にボーナス <#c:00f>+42000

	Lang	en
	Title	ComboⅠ
	Desc	Bonus <#c:00f>+42000<#r> at the end of the track
	Desc	if you achieve 500 COMBO.

	Attr	BTech
	Indicator	INBoost
OnStart:

OnJudge:

OnTimer:

OnFinish:
	# ゲーム終了時発動1
	If	MaxCombo	>=	500
	Boost	INBoost	Add	42000
	ClearIf
`
	}, {
		title: [`コンボⅡ`, `ComboⅡ`],
		desc: [`最大コンボ数に応じて終了時にボーナス
		250コンボ <#c:00f>+10000<#r>／500コンボ <#c:00f>+30000<#r>
		750コンボ <#c:00f>+50000<#r>／1000コンボ <#c:00f>+70000<#r>`,
			`Bonus based on max COMBO.
		250 COMBO <#c:00f>+10000<#r>／500 COMBO <#c:00f>+30000<#r>
		750 COMBO <#c:00f>+50000<#r>／1000 COMBO <#c:00f>+70000<#r>`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	コンボⅡ
	Desc	最大コンボ数に応じて終了時にボーナス
	Desc	250コンボ <#c:00f>+10000<#r>／500コンボ <#c:00f>+30000<#r>
	Desc	750コンボ <#c:00f>+50000<#r>／1000コンボ <#c:00f>+70000<#r>

	Lang	en
	Title	ComboⅡ
	Desc	Bonus based on max COMBO.
	Desc	250 COMBO <#c:00f>+10000<#r>／500 COMBO <#c:00f>+30000<#r>
	Desc	750 COMBO <#c:00f>+50000<#r>／1000 COMBO <#c:00f>+70000<#r>

	Attr	BTech
	Indicator	INBoost
OnStart:

OnJudge:

OnTimer:

OnFinish:
	# ゲーム終了時発動1
	If	MaxCombo	>=	250
	Boost	INBoost	Add	10000
	ClearIf
	# ゲーム終了時発動2
	If	MaxCombo	>=	500
	Boost	INBoost	Add	20000
	ClearIf
	# ゲーム終了時発動3
	If	MaxCombo	>=	750
	Boost	INBoost	Add	20000
	ClearIf
	# ゲーム終了時発動4
	If	MaxCombo	>=	1000
	Boost	INBoost	Add	20000
	ClearIf
`
	}, {
		title: [`コンボⅢ`, `ComboⅢ`],
		desc: [`250コンボごとに確率でボーナス
		<#c:ff00ff>【50％】<#r> <#c:00f>+21500<#r>／<#c:ff00ff>【50％】<#r> <#c:00f>+1000<#r>`,
			`Bonus in probability for every 250 COMBO.
		<#c:ff00ff>【50％】<#r> <#c:00f>+21500<#r>／<#c:ff00ff>【50％】<#r> <#c:00f>+1000<#r>`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	コンボⅢ
	Desc	250コンボ数ごとに確率でボーナス
	Desc	<#c:ff00ff>【50％】<#r> <#c:00f>+21500<#r>／<#c:ff00ff>【50％】<#r> <#c:00f>+1000<#r>

	Lang	en
	Title	ComboⅢ
	Desc	Bonus in probability for every 250 COMBO.
	Desc	<#c:ff00ff>【50％】<#r> <#c:00f>+21500<#r>／<#c:ff00ff>【50％】<#r> <#c:00f>+1000<#r>

	Attr	BTech
	Indicator	INBoost
OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	Random	<	50
	If	ComboMod250	=	0
	If	Combo	!=	0
		Boost	INBoost	Add	21500
		ClearIf
	# ノーツ判定時発動2
	If	Answer	!=	M
	If	Random	>=	50
	If	ComboMod250	=	0
	If	Combo	!=	0
		Boost	INBoost	Add	1000
		ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`コンボⅣ`, `ComboⅣ`],
		desc: [`250コンボ未満でゲージ上昇しない
		250コンボ以上でゲージ上昇UP <#c:00f>(300.00%)`,
			`The gauge dosen't increase if COMBO is less than 250.
		Increases the gauge if COMBO is 250 is more <#c:00f> (300.00%)<#r>.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	コンボⅣ
	Desc	250コンボ未満でゲージ上昇しない
	Desc	250コンボ以上でゲージ上昇UP <#c:00f>(300.00%)

	Lang	en
	Title	ComboⅣ
	Desc	The gauge dosen't increase if COMBO is less than 250.
	Desc	Increases the gauge if COMBO is 250 is more <#c:00f> (300.00%)<#r>.

	Attr	BTech
	Indicator	IDBoost	INBoost
OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	Combo	<	250
		Boost	IDBoost	Mul	0
		ClearIf
	# ノーツ判定時発動2
	If	Answer	!=	M
	If	Combo	>=	250
		Boost	INBoost	Mul	3
		ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`コンボⅤ`, `ComboⅤ`],
		desc: [`ゲージが上昇しない
		100コンボごとにボーナス <#c:00f>+6000`,
			`The gauge dosen't increase.
		Bonus <#c:00f>+6000<#r> for every 100 COMBO.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	コンボⅣ
	Desc	ゲージが上昇しない
	Desc	100コンボごとにボーナス <#c:00f>+6000

	Lang	en
	Title	ComboⅣ
	Desc	The gauge dosen't increase.
	Desc	Bonus <#c:00f>+6000<#r> for every 100 COMBO.

	Attr	BTech
	Indicator	IDBoost	INBoost
OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	IDBoost	Mul	0
		ClearIf
	# ノーツ判定時発動2
	If	Answer	!=	M
	If	ComboMod100	=	0
	If	Combo	!=	0
		Boost	INBoost	Add	6000
		ClearIf

OnTimer:

OnFinish:
`
	}],
	[{
		title: [`ボーダーS`, `BorderS`],
		desc: [`ランクS以上が達成可能のとき
		ゲージ上昇UP <#c:00f>(160.00%)
		達成不能のとき
		ATTACK以下でダメージ <#c:f00>-500`,
			`Increases the gauge <#c:00f> (160.00%)<#r>
		if rank S or above is achievable.
		Damage <#c:f00>-500<#r> when ATTACK or below
		if it is not achievable.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ボーダーS
	Desc	ランクS以上が達成可能のとき
	Desc	ゲージ上昇UP <#c:00f>(160.00%)
	Desc	達成不能のとき
	Desc	ATTACK以下でダメージ <#c:f00>-500

	Lang	en
	Title	BorderS
	Desc	Increases the gauge <#c:00f> (160.00%)<#r>
	Desc	if rank S or above is achievable.
	Desc	Damage <#c:f00>-500<#r> when ATTACK or below
	Desc	if it is not achievable.

	Attr	BNormal
	Indicator	IDBoost	INBoost
OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	BorderS	>=	0
		Boost	INBoost	Mul	1.6
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	A	M
	If	BorderS	<	0
		Boost	IDBoost	Add	-500
		ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ボーダーSS`, `BorderSS`],
		desc: [`ランクSS以上が達成可能のとき
		ゲージ上昇UP <#c:00f>(200.00%)
		達成不能のとき
		ATTACK以下でダメージ <#c:f00>-1000`,
			`Increases the gauge <#c:00f> (200.00%)<#r>
		if rank SS or above is achievable.
		Damage <#c:f00>-1000<#r> when ATTACK or below
		if it is not achievable.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ボーダーSS
	Desc	ランクSS以上が達成可能のとき
	Desc	ゲージ上昇UP <#c:00f>(200.00%)
	Desc	達成不能のとき
	Desc	ATTACK以下でダメージ <#c:f00>-1000

	Lang	en
	Title	BorderSS
	Desc	Increases the gauge <#c:00f> (200.00%)<#r>
	Desc	if rank SS or above is achievable.
	Desc	Damage <#c:f00>-1000<#r> when ATTACK or below
	Desc	if it is not achievable.

	Attr	BNormal
	Indicator	IDBoost	INBoost
OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	BorderSS	>=	0
		Boost	INBoost	Mul	2.0
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	A	M
	If	BorderSS	<	0
		Boost	IDBoost	Add	-1000
		ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ボーダーSSS`, `BorderSSS`],
		desc: [`ランクSSS以上が達成可能のとき
		ゲージ上昇UP <#c:00f>(245.00%)
		達成不能のとき
		ATTACK以下でダメージ <#c:f00>-1500`,
			`Increases the gauge <#c:00f> (245.00%)<#r>
		if rank S or above is achievable.
		Damage <#c:f00>-1500<#r> when ATTACK or below
		if it is not achievable.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ボーダーSSS
	Desc	ランクSSS以上が達成可能のとき
	Desc	ゲージ上昇UP <#c:00f>(245.00%)
	Desc	達成不能のとき
	Desc	ATTACK以下でダメージ <#c:f00>-1500

	Lang	en
	Title	BorderSSS
	Desc	Increases the gauge <#c:00f> (245.00%)<#r>
	Desc	if rank SSS or above is achievable.
	Desc	Damage <#c:f00>-1500<#r> when ATTACK or below
	Desc	if it is not achievable.

	Attr	BNormal
	Indicator	IDBoost	INBoost
OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	BorderSSS	>=	0
		Boost	INBoost	Mul	2.45
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	A	M
	If	BorderSSS	<	0
		Boost	IDBoost	Add	-1500
		ClearIf

OnTimer:

OnFinish:
`
	}],
	[{
		title: [`ハードⅠ`, `HardⅠ`],
		desc: [`ゲージ上昇UP <#c:00f>(195.00%)
		MISS判定20回で強制終了`,
			`Increases the gauge <#c:00f> (195.00%)<#r>.
		Sudden Death occurs when MISS counts 20 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ハードⅠ
	Desc	ゲージ上昇UP <#c:00f>(195.00%)
	Desc	MISS判定20回で強制終了

	Lang	en
	Title	HardⅠ
	Desc	Increases the gauge <#c:00f> (195.00%)<#r>.
	Desc	Sudden Death occurs when MISS counts 20 times.

	Attr	DHard
	Indicator	IDanger	INBoost
	CountDef	20

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	1.95
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
	If	Counter	>	0
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ハードⅡ`, `HardⅡ`],
		desc: [`ゲージ上昇UP <#c:00f>(210.00%)
		MISSでカウント<#c:0da712>［-1］<#r>／<#c:0da712>［0］<#r>で強制終了
		カウント<#c:0da712>［10］<#r>でMISS時
		<#c:ff00ff>【50％】<#r>の確率で強制終了`,
			`Increases the gauge <#c:00f> (210.00%)<#r>
		<#c:0da712>［-1］<#r> to counter for MISS.／Sudden Death occurs when <#c:0da712>［0］<#r>.
		Sudden Death occurs <#c:ff00ff>【50％】<#r>probability
		when MISS if counter is <#c:0da712>［10］<#r>.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ハードⅡ
	Desc	ゲージ上昇UP <#c:00f>(210.00%)
	Desc	MISSでカウント<#c:0da712>［-1］<#r>／<#c:0da712>［0］<#r>で強制終了
	Desc	カウント<#c:0da712>［10］<#r>でMISS時
	Desc	<#c:ff00ff>【50％】<#r>の確率で強制終了

	Lang	en
	Title	HardⅡ
	Desc	Increases the gauge <#c:00f> (210.00%)<#r>
	Desc	<#c:0da712>［-1］<#r> to counter for MISS.／Sudden Death occurs when <#c:0da712>［0］<#r>.
	Desc	<#c:ff00ff>【50％】<#r>probability Sudden Death occurs
	Desc	when MISS if counter is <#c:0da712>［10］<#r>.

	Attr	DHard
	Indicator	IDanger	INBoost
	CountDef	20

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	2.35
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
	If	Counter	>	0
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# ノーツ判定時発動3
	If	Answer	=	M
	If	Counter	=	10
	If	Random	<	50
		Kill
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ハードⅢ`, `HardⅢ`],
		desc: [`J-CRITICAL判定時ボーナス <#c:00f>+33
		JUSTICE／ATTACKでゲージ上昇しない
		JUSTICE以下300回で強制終了`,
			`Bonus <#c:00f> +33<#r> when J-CRITICAL.
		The gauge dosen't increase when JUSTICE／ATTACK.
		Sudden Death occurs when JUSTICE or below counts 300 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ハードⅢ
	Desc	J-CRITICAL判定時ボーナス <#c:00f>+33
	Desc	JUSTICE／ATTACKでゲージ上昇しない
	Desc	JUSTICE以下300回で強制終了

	Lang	en
	Title	HardⅢ
	Desc	Bonus <#c:00f> +33<#r> when J-CRITICAL.
	Desc	The gauge dosen't increase when JUSTICE／ATTACK.
	Desc	Sudden Death occurs when JUSTICE or below counts 300 times.

	Attr	DHard
	Indicator	IDanger	IDBoost	INBoost
	CountDef	300

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	=	JC
		Boost	INBoost	Add	33
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	J	A
		Boost	IDBoost	Mul	0
	ClearIf
	# ノーツ判定時発動3
	If	Answer	=	J	A	M
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ハードⅣ`, `HardⅣ`],
		desc: [`ゲージ上昇UP <#c:00f>(210.00%)
		MISSでカウント<#c:0da712>［-2］<#r>／ATTACKでカウント<#c:0da712>［-1］<#r>
		<#c:0da712>［0］<#r>で強制終了`,
			`Increases the gauge <#c:00f> (210.00%)<#r>.
		<#c:0da712>［-2］<#r> to counter for MISS.／<#c:0da712>［-1］<#r> to counter for ATTACK.
		Sudden Death occurs when <#c:0da712>［0］<#r>.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ハードⅣ
	Desc	ゲージ上昇UP <#c:00f>(210.00%)
	Desc	MISSでカウント<#c:0da712>［-2］<#r>／ATTACKでカウント<#c:0da712>［-1］<#r>
	Desc	<#c:0da712>［0］<#r>で強制終了

	Lang	en
	Title	HardⅣ
	Desc	Increases the gauge <#c:00f> (210.00%)<#r>.
	Desc	<#c:0da712>［-2］<#r> to counter for MISS.／<#c:0da712>［-1］<#r> to counter for ATTACK.
	Desc	Sudden Death occurs when <#c:0da712>［0］<#r>.

	Attr	DHard
	Indicator	IDanger	INBoost
	CountDef	20

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	2.1
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	A
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# ノーツ判定時発動3
	If	Answer	=	M
		Boost	IDanger	Add	0
		Counter	-2
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`ハードⅤ`, `HardⅤ`],
		desc: [`ゲーム開始時 <#c:00f>+11999<#r>／終了時 <#c:00f>+95000<#r>
		ゲージが上昇しない
		ゲージ0で強制終了`,
			`Bonus <#c:00f>+11999<#r> at the start of the track.／Bonus <#c:00f>+95000<#r> at the end.
		The gauge dosen't increase.
		Sudden Death occurs when the gauge is 0.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	ハードⅤ
	Desc	ゲーム開始時 <#c:00f>+11999<#r>／終了時 <#c:00f>+95000<#r>
	Desc	ゲージが上昇しない
	Desc	ゲージ0で強制終了

	Lang	en
	Title	HardⅤ
	Desc	Bonus <#c:00f>+11999<#r> at the start of the track.／Bonus <#c:00f>+95000<#r> at the end.
	Desc	The gauge dosen't increase.
	Desc	Sudden Death occurs when the gauge is 0.

	Attr	DHard
	Indicator	IDanger	IDBoost	INBoost

OnStart:
	# ゲーム開始時発動1
	Boost	INBoost	Add	11999
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	IDBoost	Mul	0
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
	If	Gauge	<=	0
		Kill
		ClearIf

OnTimer:

OnFinish:
	# ゲーム終了時発動1
	Boost	INBoost	Add	95000
`

	}],
	[{
		title: [`アブソリュートⅠ`, `AbsoluteⅠ`],
		desc: [`ゲージ上昇UP <#c:00f>(215.00%)
		MISS判定10回で強制終了`,
			`Increases the gauge <#c:00f> (215.00%)<#r>.
		Sudden Death occurs when MISS counts 10 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	アブソリュートⅠ
	Desc	ゲージ上昇UP <#c:00f>(215.00%)
	Desc	MISS判定10回で強制終了

	Lang	en
	Title	AbsoluteⅠ
	Desc	Increases the gauge <#c:00f> (215.00%)<#r>.
	Desc	Sudden Death occurs when MISS counts 10 times.

	Attr	DAbs
	Indicator	IDanger	INBoost
	CountDef	10

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	2.15
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
	If	Counter	>	0
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`アブソリュートⅡ`, `AbsoluteⅡ`],
		desc: [`100コンボごとにボーナス <#c:00f>+6000
		JUSTICE以下50回で強制終了`,
			`Bonus <#c:00f>+6000<#r> for every 100 COMBO.
		Sudden Death occurs when JUSTICE or below counts 50 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	アブソリュートⅡ
	Desc	100コンボごとにボーナス <#c:00f>+6000
	Desc	JUSTICE以下50回で強制終了

	Lang	en
	Title	AbsoluteⅡ
	Desc	Bonus <#c:00f>+6000<#r> for every 100 COMBO.
	Desc	Sudden Death occurs when JUSTICE or below counts 50 times.

	Attr	DAbs
	Indicator	IDanger	INBoost
	CountDef	50

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	ComboMod100	=	0
	If	Combo	!=	0
		Boost	INBoost	Add	6000
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	J	A	M
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`アブソリュートⅢ`, `AbsoluteⅢ`],
		desc: [`ゲージ上昇UP <#c:00f>(220.00%)
		1010000点達成で
		ゲーム終了時にゲージがMAXになる
		MISS判定10回で強制終了`,
			`Increases the gauge <#c:00f> (220.00%)<#r>.
		The gauge fill up
		if score is achieved 1,010,000.
		Sudden Death occurs when MISS counts 10 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	アブソリュートⅢ
	Desc	ゲージ上昇UP <#c:00f>(220.00%)
	Desc	1010000点達成で
	Desc	ゲーム終了時にゲージがMAXになる
	Desc	MISS判定10回で強制終了

	Lang	en
	Title	AbsoluteⅢ
	Desc	Increases the gauge <#c:00f> (220.00%)<#r>.
	Desc	The gauge fill up
	Desc	if score is achieved 1,010,000.
	Desc	Sudden Death occurs when MISS counts 10 times.

	Attr	DAbs
	Indicator	IDanger	INBoost
	CountDef	10

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	2.2
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
	# ゲーム終了時発動1
	If	Score	>=	1010000
	Boost	INBoost	Add	250000
	ClearIf
`

	}, {
		title: [`アブソリュートⅣ`, `AbsoluteⅣ`],
		desc: [`ゲージ上昇UP <#c:00f>(250.00%)
		ATTACK以下で
		<#c:ff00ff>【10％】<#r>の確率でカウント<#c:0da712>［-1］
		カウンター<#c:0da712>［0］<#r>で強制終了`,
			`Increases the gauge <#c:00f> (250.00%)<#r>.
		<#c:0da712>［-1］<#r> to counter for ATTACK or below
		<#c:ff00ff>【10％】<#r>probability.
		Sudden Death occurs when counter is <#c:0da712>［0］<#r>.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	アブソリュートⅣ
	Desc	ゲージ上昇UP <#c:00f>(250.00%)
	Desc	ATTACK以下で
	Desc	<#c:ff00ff>【10％】<#r>の確率でカウント<#c:0da712>［-1］
	Desc	カウンター<#c:0da712>［0］<#r>で強制終了

	Lang	en
	Title	AbsoluteⅣ
	Desc	Increases the gauge <#c:00f> (250.00%)<#r>.
	Desc	<#c:0da712>［-1］<#r> to counter for ATTACK or below
	Desc	<#c:ff00ff>【10％】<#r>probability.
	Desc	Sudden Death occurs when counter is <#c:0da712>［0］<#r>.

	Attr	DAbs
	Indicator	IDanger	INBoost
	CountDef	1

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	2.5
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	A	M
	If	Random	<	10
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`アブソリュートⅤ`, `AbsoluteⅤ`],
		desc: [`ゲージ上昇UP <#c:00f>(160.00%)
		ALL JUSTICEを達成した場合
		ゲーム終了時にボーナス <#c:00f> +70000
		MISS判定10回で強制終了`,
			`Increases the gauge <#c:00f> (160.00%)<#r>.
		Bonus <#c:00f>+70000<#r> at the end of the track
		if you achieve ALL JUSTICE.
		Sudden Death occurs when MISS counts 10 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	アブソリュートⅤ
	Desc	ゲージ上昇UP <#c:00f>(160.00%)
	Desc	ALL JUSTICEを達成した場合
	Desc	ゲーム終了時にボーナス <#c:00f> +70000
	Desc	MISS判定10回で強制終了

	Lang	en
	Title	AbsoluteⅤ
	Desc	Increases the gauge <#c:00f> (160.00%)<#r>.
	Desc	Bonus <#c:00f>+70000<#r> at the end of the track
	Desc	if you achieve ALL JUSTICE.
	Desc	Sudden Death occurs when MISS counts 10 times.

	Attr	DAbs
	Indicator	IDanger	INBoost
	CountDef	10

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	1.6
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
	# ゲーム終了時発動3
	If	AllJustice
	Boost	INBoost	Add	70000
	ClearIf
`

	}],
	[{
		title: [`カタストロフィⅠ`, `CatastropheⅠ`],
		desc: [`100コンボごとにボーナス <#c:00f>+8000
		JUSTICE以下30回で強制終了`,
			`Bonus <#c:00f>+8000<#r> for every 100 COMBO.
		Sudden Death occurs when JUSTICE or below counts 30 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	カタストロフィⅠ
	Desc	100コンボごとにボーナス <#c:00f>+8000
	Desc	JUSTICE以下30回で強制終了

	Lang	en
	Title	CatastropheⅠ
	Desc	Bonus <#c:00f>+8000<#r> for every 100 COMBO.
	Desc	Sudden Death occurs when JUSTICE or below counts 30 times.

	Attr	DCat
	Indicator	IDanger	INBoost
	CountDef	30

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	ComboMod100	=	0
	If	Combo	!=	0
		Boost	INBoost	Add	8000
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	J	A	M
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`カタストロフィⅡ`, `CatastropheⅡ`],
		desc: [`3/4経過までゲージが上昇しない
		3/4経過後からゲージ上昇UP <#c:00f>(1000.00%)
		ATTACK以下3回で強制終了`,
			`The gauge dosen't increase until three-quarters of track has passed.
		Increases the gauge after three-quarters of track has passed <#c:00f>(1000.00%)<#r>.
		Sudden Death occurs when ATTACK or below counts 3 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	カタストロフィⅡ
	Desc	3/4経過までゲージが上昇しない
	Desc	3/4経過後からゲージ上昇UP <#c:00f>(1000.00%)
	Desc	ATTACK以下3回で強制終了

	Lang	en
	Title	CatastropheⅡ
	Desc	The gauge dosen't increase until three-quarters of track has passed.
	Desc	Increases the gauge after three-quarters of track has passed <#c:00f>(1000.00%)<#r>.
	Desc	Sudden Death occurs when ATTACK or below counts 3 times.

	Attr	DCat
	Indicator	IDanger	IDBoost	INBoost
	CountDef	3

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	Prog	<	80
		Boost	IDBoost	Mul	0
		ClearIf
	# ノーツ判定時発動2
	If	Answer	!=	M
	If	Prog	>=	80
		Boost	INBoost	Mul	10
		ClearIf
	# ノーツ判定時発動3
	If	Answer	=	A	M
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`

	}, {
		title: [`カタストロフィⅢ`, `CatastropheⅢ`],
		desc: [`ゲージ上昇UP <#c:00f>(340.00%)
		JUSTICEでカウント<#c:0da712>［-1］
		ATTACK以下でカウント<#c:0da712>［-9］
		カウンター<#c:0da712>［0］<#r>で強制終了`,
			`Increases the gauge <#c:00f> (340.00%)<#r>.
		<#c:0da712>［-1］<#r> to counter for JUSTICE.
		<#c:0da712>［-9］<#r> to counter for ATTACK or below.
		Sudden Death occurs when <#c:0da712>［0］<#r>.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	カタストロフィⅢ
	Desc	ゲージ上昇UP <#c:00f>(340.00%)
	Desc	JUSTICEでカウント<#c:0da712>［-1］
	Desc	ATTACK以下でカウント<#c:0da712>［-9］
	Desc	カウンター<#c:0da712>［0］<#r>で強制終了

	Lang	en
	Title	CatastropheⅢ
	Desc	Increases the gauge <#c:00f> (340.00%)<#r>
	Desc	<#c:0da712>［-1］<#r> to counter for JUSTICE.
	Desc	<#c:0da712>［-9］<#r> to counter for ATTACK or below.
	Desc	Sudden Death occurs when <#c:0da712>［0］<#r>.

	Attr	DCat
	Indicator	IDanger	INBoost
	CountDef	10

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	3.4
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	J
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# ノーツ判定時発動3
	If	Answer	=	A	M
		Boost	IDanger	Add	0
		Counter	-9
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`

	}, {
		title: [`カタストロフィⅣ`, `CatastropheⅣ`],
		desc: [`ゲージ上昇UP <#c:00f>(300.00%)
		ATTACK以下1回で強制終了`,
			`Increases the gauge <#c:00f> (300.00%)<#r>.
		Sudden Death occurs when ATTACK or below counts 1 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	カタストロフィⅣ
	Desc	ゲージ上昇UP <#c:00f>(300.00%)
	Desc	ATTACK以下1回で強制終了

	Lang	en
	Title	CatastropheⅣ
	Desc	Increases the gauge <#c:00f> (300.00%)<#r>.
	Desc	Sudden Death occurs when ATTACK or below counts 1 times.

	Attr	DCat
	Indicator	IDanger	INBoost
	CountDef	1

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	INBoost	Mul	3
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	A	M
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`

	}, {
		title: [`カタストロフィⅤ`, `CatastropheⅤ`],
		desc: [`ゲーム開始時 <#c:00f>+11999<#r>／終了時 <#c:00f>ゲージMAX<#r>
		ゲージが上昇しない
		JUSTICEで <#c:f00>-2999<#r>／ATTACK以下で <#c:f00>-99999
		ゲージ0で強制終了`,
			`Bonus <#c:00f>+11999<#r> at the start of the track.／<#c:00f>The gauge fill up<#r> at the end.
		The gauge dosen't increase.
		Damage <#c:f00>-2999<#r> when JUSTICE.／Damage <#c:f00>-99999<#r> when ATTACK or below.
		Sudden Death occurs when the gauge is 0.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	カタストロフィⅤ
	Desc	ゲーム開始時 <#c:00f>+11999<#r>／終了時 <#c:00f>ゲージMAX<#r>
	Desc	ゲージが上昇しない
	Desc	JUSTICEで <#c:f00>-2999<#r>／ATTACK以下で <#c:f00>-99999
	Desc	ゲージ0で強制終了

	Lang	en
	Title	CatastropheⅤ
	Desc	Bonus <#c:00f>+11999<#r> at the start of the track.／<#c:00f>The gauge fill up<#r> at the end.
	Desc	The gauge dosen't increase.
	Desc	Damage <#c:f00>-2999<#r> when JUSTICE.／Damage <#c:f00>-99999<#r> when ATTACK or below.
	Desc	Sudden Death occurs when the gauge is 0.

	Attr	DCat
	Indicator	IDanger	IDBoost	INBoost

OnStart:
	# ゲーム開始時発動1
	Boost	INBoost	Add	11999
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
		Boost	IDBoost	Mul	0
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	J
		Boost	IDBoost	Add	-2999
		ClearIf
	# ノーツ判定時発動3
	If	Answer	=	A	M
		Boost	IDBoost	Add	-99999
		ClearIf
	# ノーツ判定時発動4
	If	Answer	=	M
	If	Gauge	<=	0
		Kill
		ClearIf

OnTimer:

OnFinish:
	# ゲーム終了時発動1
	Boost	INBoost	Add	250000
`

	}],
	[{
		title: [`エクストラⅠ`, `ExtraⅠ`],
		desc: [`AIR／AIR-ACTION／AIR-CRUSH成功時
		ゲージ上昇UP <#c:00f>(500.00%)
		MISS時のダメージが増える <#c:f00>(300.00%)`,
			`Increases the gauge <#c:00f> (500.00%)<#r>
		for AIR／AIR-ACTION／AIR-CRUSH notes.
		Increased damege when MISS <#c:f00>(300.00%)<#r>.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	エクストラⅠ
	Desc	AIR／AIR-ACTION／AIR-CRUSH成功時
	Desc	ゲージ上昇UP <#c:00f>(500.00%)
	Desc	MISS時のダメージが増える <#c:f00>(300.00%)

	Lang	en
	Title	ExtraⅠ
	Desc	Increases the gauge <#c:00f> (500.00%)<#r>
	Desc	for AIR／AIR-ACTION／AIR-CRUSH notes.
	Desc	Increased damege when MISS <#c:f00>(300.00%)<#r>.

	Attr	BTarget
	Indicator	IDBoost	INBoost

OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	NoteCat	=	Air
	If	Answer	!=	M
		Boost	INBoost	Mul	5
		ClearIf
	# ノーツ判定時発動2
	If	Answer	=	M
		Boost	IDBoost	Mul	3
		ClearIf

OnTimer:

OnFinish:
`
	}, {
		title: [`エクストラⅡ`, `ExtraⅡ`],
		desc: [`100コンボごとに確率でボーナス
		<#c:ff00ff>【10％】<#r><#c:00f>+17000<#r>／<#c:ff00ff>【90％】<#r><#c:00f>+7000
		JUSTICE以下30回で強制終了`,
			`Bonus in probability for every 100 COMBO.
		<#c:ff00ff>【10％】<#r> <#c:00f>+17000<#r>／<#c:ff00ff>【90％】<#r> <#c:00f>+7000<#r>
		Sudden Death occurs when JUSTICE or below counts 30 times.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	エクストラⅡ
	Desc	100コンボごとに確率でボーナス
	Desc	<#c:ff00ff>【10％】<#r><#c:00f>+17000<#r>／<#c:ff00ff>【90％】<#r><#c:00f>+7000
	Desc	JUSTICE以下30回で強制終了

	Lang	en
	Title	ExtraⅡ
	Desc	Bonus in probability for every 100 COMBO.
	Desc	<#c:ff00ff>【10％】<#r> <#c:00f>+17000<#r>／<#c:ff00ff>【90％】<#r> <#c:00f>+7000<#r>
	Desc	Sudden Death occurs when JUSTICE or below counts 30 times.

	Attr	DCat
	Indicator	IDanger	INBoost
	CountDef	30

OnStart:
	# デンジャースキル演出
	Boost	IDanger	Add	0

OnJudge:
	# ノーツ判定時発動1
	If	Answer	!=	M
	If	ComboMod100	=	0
	If	Combo	!=	0
	If	Random	<	10
		Boost	INBoost	Add	17000
		ClearIf
	# ノーツ判定時発動2
	If	Answer	!=	M
	If	ComboMod100	=	0
	If	Combo	!=	0
	If	Random	>=	10
		Boost	INBoost	Add	7000
		ClearIf
	# ノーツ判定時発動3
	If	Answer	=	M
		Boost	IDanger	Add	0
		Counter	-1
	ClearIf
	# カウント0でゲームを強制終了
	If	Counter	<=	0
		Kill
	ClearIf

OnTimer:

OnFinish:
`

	}, {
		title: [`エクストラⅢ`, `ExtraⅢ`],
		desc: [`ゲージ上昇UP<#c:00f>(300.00%)
		JUSTICE以下で追加ダメージ <#c:f00>-3000
		1010000点達成で
		ゲーム終了時にゲージがMAXになる`,
			`Increases the gauge <#c:00f> (300.00%)<#r>.
		Damage <#c:f00>-3000<#r> when JUSTICE or below.
		The gauge fill up
		if score is achieved 1,010,000.`
		],
		script: `
Meta:
	Version	1

	Lang	ja
	Title	エクストラⅢ
	Desc	ゲージ上昇UP<#c:00f> (300.00%)
	Desc	JUSTICE以下で追加ダメージ <#c:f00>-3000
	Desc	1010000点達成で
	Desc	ゲーム終了時にゲージがMAXになる

	Lang	en
	Title	ExtraⅢ
	Desc	Increases the gauge <#c:00f> (300.00%)<#r>.
	Desc	Damage <#c:f00>-3000<#r> when JUSTICE or below.
	Desc	The gauge fill up
	Desc	if score is achieved 1,010,000.

	Attr	BNormal
	Indicator	IDBoost	INBoost

OnStart:

OnJudge:
	# ノーツ判定時発動1
	If	Answer	=	J	A	M
		Boost	INBoost	Mul	3
		ClearIf
	# ノーツ判定時発動2
	If	Answer	!=	M
		Boost	IDBoost	Add	-3000
		ClearIf

OnTimer:

OnFinish:
	# ゲーム終了時発動1
	If	Score	>=	1010000
	Boost	undefined	Add	250000
	ClearIf
`

	}]
]
