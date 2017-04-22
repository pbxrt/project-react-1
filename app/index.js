import _ from 'lodash';
import j from 'jquery'
import foo from './foo'

function component(){
	//var element = document.createElement('div');
	  var element = j('<div></div>')
	/* lodash is required for the next line to work */
	//element.innerHTML = _.join(['Hello','webpack'],' ');

	element.html(_.join(['Hi','webpack,I am Plearner'],' '))
	//return element
	return element.get(0)
}

document.body.appendChild(component());
console.log(foo)
console.log(foo())