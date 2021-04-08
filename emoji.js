const emoji = function () {
	const emojiRange = [
		{from: "1F332", to: "1F393"},
		{from: "1F39E", to: "1F3F0"},
		{from: "1F400", to: "1F442"},
		{from: "1F451", to: "1F4EF"},
		{from: "1F680", to: "1F6A4"}
	];

	let base = 0;
	for (let i = 0; i < emojiRange.length; i++) {
		const range = emojiRange[i];
		base += parseInt(range.to, 16) - parseInt(range.from, 16);
	}
	return function (id) {
		let emoji = id % base;

		for (let i = 0; i < emojiRange.length; i++) {
			const range = emojiRange[i];
			const rangeSize = parseInt(range.to, 16) - parseInt(range.from, 16);
			if (rangeSize > emoji) {
				return "&#" + (parseInt(range.from, 16) + emoji) + ";";
			} else {
				emoji -= rangeSize;
			}
		}
	}
}();

const hash = function(text) {
  var hash = 0, i, chr;
  if (text.length === 0) return hash;
  for (i = 0; i < text.length; i++) {
    chr   = text.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};
