var config = {
    "routes": {
        "/": {
            "template": "modules/dev/dev.html",
            "title": "DEV",
            "controller": "devCtrl"
        }
    },
    "errors": {
        "INVALID_PARAMS": {
            "code": -32602,
            "message": "Invalid params"
        },
        "SERVER_ERROR": {
            "code": -32001,
            "message": "Ошибка на сервере"
        },
        "FORBIDDEN": {
            "code": -32011,
            "message": "Недостаточно прав"
        },
        "UNAUTORIZED": {
            "code": -32012,
            "message": "Пользователь неавторизован"
        },
        "LOGIN_FAILED": {
            "code": -32021,
            "message": "Неправильный логин/пароль"
        },
        "DUPLICATE_USER": {
            "code": -32022,
            "message": "Пользователь с таким именем уже существует"
        }
    },
    "api": {
        "ranger": {
            "description": "Aggregators",
            "roles": {
                "read": "superadmin aggregators.admin aggregators.user",
                "write": "superadmin aggregators.admin"
            },
            "model": {
                "id": {
                    "type": "number",
                    "minLength": 1
                },
                "date": "date",
                "sn": "string",
                "description": "string",
                "license": "array"
            },
            "license": {
                "id": {
                    "type": "number",
                    "minLength": 1
                },
                "ports": {
                    "type": "number",
                    "minimum": 1,
                    "maximum": 64
                },
                "mpls": "boolean",
                "mirror": "boolean"
            },
            "methods": {
                "get": {
                    "access": "superadmin aggregators.admin aggregators.user"
                },
                "add": {
                    "params": {
                        "sn": {
                            "type": "string",
                            "minLength": 1
                        },
                        "description": "string"
                    },
                    "access": "superadmin aggregators.admin",
                    "jsonschema": {
                        "type": "object",
                        "properties": {
                            "sn": {
                                "type": "string",
                                "minLength": 1
                            },
                            "description": {
                                "type": "string"
                            }
                        }
                    }
                },
                "update": {
                    "params": {
                        "id": {
                            "type": "number",
                            "minLength": 1
                        },
                        "date": "date",
                        "sn": "string",
                        "description": "string",
                        "license": "array"
                    },
                    "required": [
                        "id"
                    ],
                    "access": "superadmin aggregators.admin",
                    "jsonschema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number",
                                "minLength": 1
                            },
                            "date": {
                                "type": "string"
                            },
                            "sn": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "license": {
                                "type": "array"
                            }
                        },
                        "required": [
                            "id"
                        ]
                    }
                },
                "remove": {
                    "params": {
                        "id": {
                            "type": "number",
                            "minLength": 1
                        }
                    },
                    "required": [
                        "id"
                    ],
                    "access": "superadmin aggregators.admin",
                    "jsonschema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number",
                                "minLength": 1
                            }
                        },
                        "required": [
                            "id"
                        ]
                    }
                },
                "licenseadd": {
                    "params": {
                        "id": {
                            "type": "number",
                            "minLength": 1
                        },
                        "ports": {
                            "type": "number",
                            "minimum": 1,
                            "maximum": 64
                        },
                        "mpls": "boolean",
                        "mirror": "boolean"
                    },
                    "required": [
                        "id"
                    ],
                    "access": "superadmin aggregators.admin",
                    "jsonschema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number",
                                "minLength": 1
                            },
                            "ports": {
                                "type": "number",
                                "minimum": 1,
                                "maximum": 64
                            },
                            "mpls": {
                                "type": "boolean"
                            },
                            "mirror": {
                                "type": "boolean"
                            }
                        },
                        "required": [
                            "id"
                        ]
                    }
                }
            }
        }
    },
    "wsport": 3001,
    "port": 3000,
    "baseUri": "http://localhost",
    "description": null,
    "title": "Aggregator GUI"
};
