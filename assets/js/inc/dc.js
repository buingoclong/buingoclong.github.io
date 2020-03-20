function e(i) {
	i.width = document.documentElement.clientWidth,
	i.height = 100,
	i.width *= devicePixelRatio,
	i.height *= devicePixelRatio,
	i.style.width = String(i.width / devicePixelRatio) + "px",
	i.style.height = String(i.height / devicePixelRatio) + "px",
	l = i.height, c = i.width, u = Math.floor(l / 2), d = 0
}
function t(r, seconds, tf) {
	r.clearRect(0, 0, c, l),
	n(r, "#EBF5F7", 1, 3, 0, tf),
	t.seconds = t.seconds + seconds,
	t.t = t.seconds * Math.PI,
	setTimeout(t.bind(null, r, seconds, tf), 35);
}
function n(e, n, i, r, s, o) {
	e.fillStyle = n,
	e.globalAlpha = i,
	e.beginPath(),
	a(e, t.t / .5, r, s, o),
	e.lineTo(c + 10, l), e.lineTo(0, l), e.closePath(), e.fill()
}
function a(e, t, n, a, i) {
	var r = t,
	s = Math.sin(r) / n;
	e.moveTo(d, p * s + u);
	for (var o = d; o <= c + 10; o += 10) {
		r = i ? t - (-d + o) / p / n : t + (-d + o) / p / n,
		s = Math.sin(r - a) / 3,
		e.lineTo(o, p * s + u)
	}
}
var i, r, s, o, l, c, u, d, t, p = 100;
t.seconds = 0, t.t = 0;
