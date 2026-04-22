import { Builder } from './library/Builder';
import packageJson from './package.json';

console.log(`Starting build 🏇`);

// Using the new builder pattern with fluent API
Builder.withDefaults()
    .withVersion(packageJson.version)
    .withDateTime(process.env.BUILD_TIME ? new Date(process.env.BUILD_TIME) : new Date())
    .build()
    .then(() => {
        console.log(`Build Successful ✨`);
    }, error => {
        console.error(`Build Failed ⚠️\n`)
        throw error;
    });

