## Recursos

    - Expo Unit Test : https://docs.expo.dev/develop/unit-testing/

## Instalar la dependencias

```bash
npx expo install @testing-library/react-native "--" --save-dev --force
npm install react-test-rendere@18
npx expo install jest-expo jest @types/jest "--" --save-dev
```

## Desinstalar react-test-rendere

```bash
npm uninstall react-test-rendere
```

Dentro del package.json

```json
{
  "scripts": {
    "test": "jest --watchAll"
  },
  "jest": {
    "preset": "jest-expo"
  }
}
```

```json
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg))"
  ]
}
```
