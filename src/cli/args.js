const parseArgs = () => {
  const args = process.argv.slice(2);

  const filteredArgs = args.filter((arg) => arg.startsWith("--"));

  const parsedArgs = filteredArgs.reduce((acc, arg) => {
    const [name, value] = arg.split("=") || [];

    if (!value) {
      return acc;
    }

    acc[name.slice(2)] = value;

    return acc;
  }, {});

  for (const [name, value] of Object.entries(parsedArgs)) {
    console.log(`${name} is ${value}`);
  }
};

parseArgs();
