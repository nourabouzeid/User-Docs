
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
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-4>"
          },
          "x-parser-message-name": "<anonymous-message-2>"
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
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "<anonymous-message-1>"
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
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "media": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "type": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-12>"
          },
          "x-parser-message-name": "<anonymous-message-4>"
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
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "content": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "media": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "date": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-6>"
          },
          "x-parser-message-name": "<anonymous-message-3>"
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
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "userId": {
                "type": "integer",
                "description": "id of the user who's story got liked",
                "x-parser-schema-id": "<anonymous-schema-23>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-21>"
          },
          "x-parser-message-name": "<anonymous-message-6>"
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
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "userName": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-20>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-16>"
          },
          "x-parser-message-name": "<anonymous-message-5>"
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
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "userId": {
                "type": "integer",
                "description": "id of the user who's story got liked",
                "x-parser-schema-id": "<anonymous-schema-31>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-29>"
          },
          "x-parser-message-name": "<anonymous-message-8>"
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
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "userName": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              "profilePic": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-28>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-24>"
          },
          "x-parser-message-name": "<anonymous-message-7>"
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
                "x-parser-schema-id": "<anonymous-schema-36>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-35>"
          },
          "x-parser-message-name": "<anonymous-message-10>"
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
                "x-parser-schema-id": "<anonymous-schema-33>"
              },
              "userId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-34>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-32>"
          },
          "x-parser-message-name": "<anonymous-message-9>"
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
  