const parseEnv = () => {
  const env = process.env;

  const filteredEnv = Object.entries(env).filter(([key]) =>
    key.startsWith("RSS_")
  );

  for (const [key, value] of filteredEnv) {
    console.log(`${key}=${value}`);
  }
};

parseEnv();
