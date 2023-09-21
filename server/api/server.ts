export default defineEventHandler(async (event) => {
  // handle query params
  const { name } = getQuery(event);

  // handle post data
  const { age } = await readBody(event);

  // env vars
  const { myEnvVar } = useRuntimeConfig();

  return {
    message: `Hello, ${name}! You are ${age} years old`,
    env: `This is my env var: ${myEnvVar}.`,
  };
});
