function e() {
	i.width = document.documentElement.clientWidth,
	i.height = 100,
	s.width = document.documentElement.clientWidth,
	s.height = 100,
	i.width *= devicePixelRatio,
	i.height *= devicePixelRatio,
	i.style.width = String(i.width / devicePixelRatio) + "px",
	i.style.height = String(i.height / devicePixelRatio) + "px",
	s.width *= devicePixelRatio,
	s.height *= devicePixelRatio,
	s.style.width = String(i.width / devicePixelRatio) + "px",
	s.style.height = String(i.height / devicePixelRatio) + "px",
	l = i.height, c = i.width, u = Math.floor(l / 2), d = 0
}
function t() {
	r.clearRect(0, 0, c, l),
	o.clearRect(0, 0, c, l),
	n(r, "#EBF5F7", 1, 3, 0, !1),
	n(o, "#EBF5F7", 1, 3, 0, !0),
	t.seconds = t.seconds + .009,
	t.t = t.seconds * Math.PI, setTimeout(t, 35)
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

$(function() {
	i = document.querySelector("#waveCanvas:not(.active)"),
	s = document.querySelector("#waveCanvas2:not(.active)"),
	r = i.getContext("2d"),
	o = s.getContext("2d"),
	i.classList.add("active"),
	s.classList.add("active"),
	e(),
	t();
	$(window).smartresize(function() {
		e();
	});
});
