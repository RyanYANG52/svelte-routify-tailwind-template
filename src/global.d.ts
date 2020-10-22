declare global {
    interface Process {
      env: {
        SW: boolean,
      };
    }
    const process: Process
  }
  
  export { }