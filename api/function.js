{
    "bindings": [
      {
        "authLevel": "function",
        "type": "httpTrigger",
        "direction": "in",
        "name": "req",
        "methods": [
          "get"
        ],
        "route" : "datetimes"
      },
      {
        "type": "http",
        "direction": "out",
        "name": "res"
      }
    ]
  }