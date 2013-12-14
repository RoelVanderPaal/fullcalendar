fcViews.resourceDay = ResourceDayView;

function ResourceDayView(element, calendar) {
	var t = this;


	// exports
	t.render = render;


	// imports
	ResourceView.call(t, element, calendar, 'resourceDay');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var skipHiddenDays = t.skipHiddenDays;
	var getCellsPerWeek = t.getCellsPerWeek;
	var formatDates = calendar.formatDates;


	function render(date, delta) {
		if (delta) {
			addDays(date, delta);
		}
		skipHiddenDays(date, delta < 0 ? -1 : 1);

		var start = cloneDate(date, true);
		var end = addDays(cloneDate(start), 1);

		t.title = formatDate(date, opt('titleFormat'));

		t.start = t.visStart = start;
		t.end = t.visEnd = end;

		var colCnt = opt('resources').length;
		renderAgenda(colCnt);
	}

}
