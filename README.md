
# Quick start

1.  **Install packages.**

    ```shell
    npm install
    ```

2.  **Start developing.**

    ```shell
    npm run clean && npm run develop
    ```

    Site is now running at http://localhost:8000

3.  **Clean.**

    ```shell
    npm run clean
    ```

4.  **Test production.**

    ```shell
    npm run clean && npm run build && npm run serve
    ```

    Site is now running at http://localhost:9000

## Hints

    See useState, useEffect, useCallback and other hooks

    For temp debugging, use:

    ```
    if (typeof window !== 'undefined') {
        console.log("My debug data");
    }
    ```
