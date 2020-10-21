declare global {
    interface Process {
      env: {
        PROD: boolean,
      };
    }
    const process: Process
  }
  
  export { }