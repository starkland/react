import React from 'react';
import { shallow } from 'enzyme';

import Component from './Footer';

// ====

test('Testando o componente do Footer', () => {
	const footer = shallow(
		<Component />
	);

	expect(footer.text()).toBe('Made with  and  by Thulio Philipe');
});