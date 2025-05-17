const slow = () => {
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Simulate a delay
  }
};

export { slow };