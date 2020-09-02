module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL
    || 'postgresql://dunder_mifflin@localhost/spaced-repetition',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
  API_TOKEN : process.env.API_TOKEN || null, 
};
//password: 14eb10b5fc5089a0914daf2aa5aeb8ca42cf81edbb61e96900881f25bac391d2