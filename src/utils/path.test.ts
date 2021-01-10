/* eslint-disable react/react-in-jsx-scope */
import { fillPath } from './path';

test('function fillPath', () => {
  expect(fillPath('/name/{name}', { name: 'clattanoia' })).toEqual(
    '/name/clattanoia'
  );
  expect(fillPath('/name/{{name}}', { name: 'clattanoia' })).toEqual(
    '/name/{clattanoia}'
  );
  expect(fillPath('/name')).toEqual('/name');

  expect(fillPath('/name', { name: 'clattanoia' })).toEqual('/name');
  expect(fillPath('/name/{name}', { nickname: 'clattanoia' })).toEqual(
    '/name/undefined'
  );
  expect(
    fillPath('/name/{name}/age/{age}', { name: 'clattanoia', age: 17 })
  ).toEqual('/name/clattanoia/age/17');
  expect(
    fillPath('/name/{people.name}/age/{people.age}', {
      people: { name: 'clattanoia', age: 17 },
    })
  ).toEqual('/name/clattanoia/age/17');
});
