// Azure Windows App Service IISNode entry point
// This dynamically imports the Nitro standalone server generated in the .output directory.
import('./.output/server/index.mjs').catch(err => {
    console.error("Failed to start Nitro server:", err);
    process.exit(1);
});
