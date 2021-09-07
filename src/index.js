import orderByProps from './orderByProps';

const character = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
const result = orderByProps(character, ['name', 'level']);
result.forEach((obj) => {
  const p = document.createElement('p');
  p.innerText = `key: ${obj.key}, value: ${obj.value}`;
  document.body.append(p);
});
