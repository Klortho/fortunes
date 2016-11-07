// On initialize, find every element with `url-path` in the @id, an create a
// form field for it


function pathChange(evt) {
  //console.log('evt: ', evt);
  const newPath = evt.target.value;

  const links = document.querySelectorAll('table a[href]');
  links.forEach(function(link) {
    const href = link.getAttribute('href');
    const newHref = href.replace(/(https?:\/\/.*?)\/.*$/, `$1${newPath}`);

    link.setAttribute('href', newHref);
  });
}

function initialize() {
  // Find the initial value
  const linkElem = document.querySelector('table a[href]');
  const url = linkElem.getAttribute('href');
  const path = url.replace(/https?:\/\/.*?\//, '/');

  const formWraps = document.querySelectorAll('[id*=url-path]')

  formWraps.forEach(function(formWrap) {
    console.log('adding');
    formWrap.innerHTML = 
      `Your URL path: <input class='url-path-form' type='text' ` +
      `length='200' size='60' value='${path}'/>`
  });

  const forms = document.querySelectorAll('.url-path-form');
  forms.forEach(function(form) {
    form.addEventListener('change', pathChange);
  })
}


initialize();
