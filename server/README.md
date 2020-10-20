# Mobilizing Million Hearts Auditing API

The app comes equipped with the ability to send usage statistics to a backend
API. This Express server saves them to a SQLite database.

## Getting started

1. Build your application properly with the correct config

   Add the environment variable `AUDITING=true` to your `.env` file if you want usage statistics captured

2. Install

   ```
   yarn install
   ```

3. Create DB (Optional if you want to capture usage statistics)

   ```
   yarn migrate
   ```

4. Start app

   ```
   yarn start -p 3000 # port 3000 is also the default
   ```
