window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
  
    // Fallback in case elements are not found
    if (!loadingScreen || !mainContent) {
      console.error('Loading screen or main content not found');
      return;
    }
  
    // Minimum loading time for visual consistency
    const minLoadingTime = 1500; // 1.5 seconds
    const startTime = performance.now();
  
    const hideLoadingScreen = () => {
      loadingScreen.classList.add('hidden');
      mainContent.classList.add('visible');
    };
  
    // Ensure minimum loading time before hiding
    const elapsedTime = performance.now() - startTime;
    const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
  
    setTimeout(hideLoadingScreen, remainingTime);
  });