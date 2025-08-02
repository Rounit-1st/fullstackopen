```mermaid
sequenceDiagram
        actor Client
        actor Server
        Client->>Server: Get: https://studies.cs.helsinki.fi/exampleapp/spa
        activate Server
        Server-->>Client: Responce with HTML
        deactivate Server
        Client->>Server: Get: https://studies.cs.helsinki.fi/exampleapp/main.css
         activate Server
        Server-->>Client: Responce with CSS
        deactivate Server
        Client->>Server: Get: https://studies.cs.helsinki.fi/exampleapp/spa.js
        activate Server
        Server-->>Client: Responce with spa.js
        deactivate Server
```