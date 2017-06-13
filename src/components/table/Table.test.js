import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';

import Component from './Table';

test('Deve ter o state inicial como string vazia.', () => {
	const table = shallow(
		<Component/>
	);

	expect(table.state().info).toBe('');
});

test('Deve ter 4 colunas na tabela de usuários.', () => {
	const props = {
		type: 'users',
		data: [{
			"avatar_url" : "https://avatars3.githubusercontent.com/u/127790?v=3",
			"events_url" : "https://api.github.com/users/dscho/events{/privacy}",
			"followers_url" : "https://api.github.com/users/dscho/followers",
			"following_url" : "https://api.github.com/users/dscho/following{/other_user}",
			"gists_url" : "https://api.github.com/users/dscho/gists{/gist_id}",
			"gravatar_id" : "",
			"html_url" : "https://github.com/dscho",
			"id" : 127790,
			"login" : "dscho",
			"organizations_url" : "https://api.github.com/users/dscho/orgs",
			"received_events_url" : "https://api.github.com/users/dscho/received_events",
			"repos_url" : "https://api.github.com/users/dscho/repos",
			"score" : 15.500255,
			"site_admin" : false,
			"starred_url" : "https://api.github.com/users/dscho/starred{/owner}{/repo}",
			"subscriptions_url" : "https://api.github.com/users/dscho/subscriptions",
			"type" : "User",
			"url" : "https://api.github.com/users/dscho"
		}]
	};

	const table = mount(
		<Component type={props.type} data={props.data} />
	);

	expect(table.find('thead th').length).toBe(4);
});

test('Deve ter os valores das props setados corretamente.', () => {
	const props = {
		type: 'users',
		data: [{
			"avatar_url" : "https://avatars3.githubusercontent.com/u/127790?v=3",
			"events_url" : "https://api.github.com/users/dscho/events{/privacy}",
			"followers_url" : "https://api.github.com/users/dscho/followers",
			"following_url" : "https://api.github.com/users/dscho/following{/other_user}",
			"gists_url" : "https://api.github.com/users/dscho/gists{/gist_id}",
			"gravatar_id" : "",
			"html_url" : "https://github.com/dscho",
			"id" : 127790,
			"login" : "dscho",
			"organizations_url" : "https://api.github.com/users/dscho/orgs",
			"received_events_url" : "https://api.github.com/users/dscho/received_events",
			"repos_url" : "https://api.github.com/users/dscho/repos",
			"score" : 15.500255,
			"site_admin" : false,
			"starred_url" : "https://api.github.com/users/dscho/starred{/owner}{/repo}",
			"subscriptions_url" : "https://api.github.com/users/dscho/subscriptions",
			"type" : "User",
			"url" : "https://api.github.com/users/dscho"
		}]
	};

	const table = mount(
		<Component type={props.type} data={props.data} />
	);

	expect(table.getNode().props.type).toBe(props.type);
	expect(table.getNode().props.data).toBe(props.data);

	// const texts = table.find('thead th').map(node => node.text());
	// console.warn();
	// const array = ['Image', 'Username', 'Score', ''];


	// expect(texts.equals(array));
});