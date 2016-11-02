fetch('bsd-fortunes.txt')
.then(content => {
  return content.text();
})
.then(ftext => {
  const fortunes = ftext.split('%\n');
  const node = document.querySelector('#fortune')
  node.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
  return null;
})
.catch(err => {
  console.error('oops');
});
