var language = {
	error_noview: 'Calendar: View {0} not found',
	error_dateformat: 'Calendar: Formato de data inválido {0}. Deve ser "now" ou "yyyy-mm-dd"',
	error_loadurl: 'Calendar: URL de carregamento de eventos não está atribuida',
	error_where: 'Calendar: Direção de navegação errada {0}. Só pode ser "next", "prev" ou "today"',

	title_year: '{0}',
	title_month: '{0} de {1}',
	title_week: '{1} - Semana {0}',
	title_day: '{0}, {1} de {2} de {3}',

	week:'Week',

	m0: 'Janeiro',
	m1: 'Fevereiro',
	m2: 'Março',
	m3: 'Abril',
	m4: 'Maio',
	m5: 'Junho',
	m6: 'Julho',
	m7: 'Agosto',
	m8: 'Setembro',
	m9: 'Outubro',
	m10: 'Novembro',
	m11: 'Dezembro',

    ms0: 'Jan',
    ms1: 'Fev',
    ms2: 'Mar',
    ms3: 'Abr',
    ms4: 'Mai',
    ms5: 'Jun',
    ms6: 'Jul',
    ms7: 'Ago',
    ms8: 'Set',
    ms9: 'Out',
    ms10: 'Nov',
    ms11: 'Dez',

	d0: 'Domingo',
	d1: 'Segunda',
	d2: 'Terça',
	d3: 'Quarta',
	d4: 'Quinta',
	d5: 'Sexta',
	d6: 'Sábado',

	easter: 'Easter',
	easterMonday: 'Easter Monday'
};

if(!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}