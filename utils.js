export function templateWithContext (str, context) {
  let result = str;
  for (const key in context) {
    while (result.includes(key)) {
      result = result.replace(key, context[key]);
    }
  }
  return result;
}

export function setIframeContent (iframe, content) {
  const _iframe = document.createElement('iframe');
  _iframe.src = 'javascript:void(0);';
  _iframe.title = iframe.getAttribute('title');
  _iframe.frameBorder = '0';
  _iframe.className = iframe.className;
  _iframe.width = iframe.width;
  _iframe.height = iframe.height;
  const parent = iframe.parentElement;
  parent.removeChild(iframe);
  parent.appendChild(_iframe);
  _iframe.contentWindow.document.open();
  _iframe.contentWindow.document.write(content);
  _iframe.contentWindow.document.close();
  return _iframe;
}

export async function frame (frames = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, frames);
  });
}

export function omit (obj, prop) {
  const {[prop]: omit, ..._obj} = obj;
  return _obj;
}
