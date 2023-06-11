const testTitleRef = document.querySelector('.test-title');

testTitleRef.addEventListener('mouseenter', e => {
  e.target.style.color = 'red';
});

testTitleRef.addEventListener('mouseout', e => {
  e.target.style.color = 'blue';
});
