## Structure

Below is a quick outline of the structure of the app:

```text
.
├── api                        # API routes
│   └── ...
├── middlewares                # Custom Express middlewares
│   ├── ...
├── modules                    # Modules are used to separate code to make it more testable
|   └── ...
├── utils                      # Utility functions
│   └── ...
├── index.ts                   # Entrypoint - starts the server.
└── server.ts                  # This is where the Express app is setup and configured.
```
