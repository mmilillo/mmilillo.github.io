window.portal = {};
window.portal.pageEventListeners = {
  onLoad: (path) => {
    if (path === '/certificados') {
      // Change text content of first <p> element to something
      // else. (DOM must be loaded when onLoad is called)
      document.getElementsByTagName('h2')[0].textContent =
          'Texto modificadodesde script';
      // print a custom message to the console every second while user is on
      // quickstart page.
      const interval =
          window.setInterval(() => console.log('Hello'), 1000);
      return interval;
    }
    return undefined;
  },
  onUnload: (path, contextReturnedFromOnLoad) => {
    if (contextReturnedFromOnLoad != null) {
      // Stop printing custom message to console every second.
      window.clearInterval(contextReturnedFromOnLoad)

    }
  },
};
