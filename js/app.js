
    const schema = {
  "asyncapi": "2.0.0",
  "info": {
    "title": "User WebSocket API",
    "version": "1.0.0",
    "description": "WebSocket API for user features."
  },
  "servers": {
    "chat-server": {
      "url": "http://localhost:5000",
      "protocol": "ws"
    }
  },
  "channels": {
    "status": {
      "description": "Channel for status and last seen.",
      "subscribe": {
        "operationId": "setStatus",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "status": {
                "type": "string",
                "enum": [
                  "Online",
                  "Offline",
                  "Away"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-5>"
          },
          "x-parser-message-name": "<anonymous-message-2>"
        }
      },
      "publish": {
        "operationId": "getStatus",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "status": {
                "type": "string",
                "enum": [
                  "Online",
                  "Offline",
                  "Away"
                ],
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "lastSeen": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "<anonymous-message-1>"
        }
      }
    },
    "pfp": {
      "description": "Channel for setting pfp.",
      "subscribe": {
        "operationId": "setPfp",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-10>"
          },
          "x-parser-message-name": "<anonymous-message-4>"
        }
      },
      "publish": {
        "operationId": "getPfp",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-9>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-7>"
          },
          "x-parser-message-name": "<anonymous-message-3>"
        }
      }
    },
    "story": {
      "description": "Channel for setting story.",
      "subscribe": {
        "operationId": "setStory",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "content": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "media": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "type": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-21>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-18>"
          },
          "x-parser-message-name": "<anonymous-message-6>"
        }
      },
      "publish": {
        "operationId": "getStory",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "content": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "media": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "date": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-17>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-12>"
          },
          "x-parser-message-name": "<anonymous-message-5>"
        }
      }
    },
    "likeStory": {
      "description": "Channel for liking a story.",
      "subscribe": {
        "operationId": "likeStory",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "storyId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "userName": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-31>"
              },
              "liked": {
                "type": "boolean",
                "x-parser-schema-id": "<anonymous-schema-32>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-28>"
          },
          "x-parser-message-name": "<anonymous-message-8>"
        }
      },
      "publish": {
        "operationId": "getLikesStory",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "storyId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "userName": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "liked": {
                "type": "boolean",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-22>"
          },
          "x-parser-message-name": "<anonymous-message-7>"
        }
      }
    },
    "viewStory": {
      "description": "Channel for viewing a story.",
      "subscribe": {
        "operationId": "viewStory",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "storyId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-39>"
              },
              "userName": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-40>"
              },
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-41>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-38>"
          },
          "x-parser-message-name": "<anonymous-message-10>"
        }
      },
      "publish": {
        "operationId": "getViewsStory",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "storyId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-34>"
              },
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "userName": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-37>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-33>"
          },
          "x-parser-message-name": "<anonymous-message-9>"
        }
      }
    },
    "deleteStory": {
      "description": "Channel for deleting a story.",
      "subscribe": {
        "operationId": "deleteStory",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "storyId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-46>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-45>"
          },
          "x-parser-message-name": "<anonymous-message-12>"
        }
      },
      "publish": {
        "operationId": "getStoryDeleted",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "storyId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-43>"
              },
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-44>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-42>"
          },
          "x-parser-message-name": "<anonymous-message-11>"
        }
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  