/* eslint-disable prettier/prettier */
/*
 * @Author: your name
 * @Date: 2022-01-22 10:44:09
 * @LastEditTime: 2022-01-22 10:50:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hub-componet\src\configure\hubData.js
 */
export var HubDevice = {
    "77afe24de306543ddc98f2aeb5e5ade7": {
        name: "Node 1",
        id: "77afe24de306543ddc98f2aeb5e5ade7",
        areaId: null,
        elements: ["sensor.node_1_node_status"],
        swVersion: "15.1",
        hdVersion: null,
        manufacturer: null,
        powerBy: ["zwave_js", "3453171310-1"],
        productName: null,
        friendlyName: null,
        nameByUser: null,
    },
    "6b45e1608b528a621efaa195aed24ed0": {
        name: "Smart Plug - 1 channel",
        id: "6b45e1608b528a621efaa195aed24ed0",
        areaId: null,
        elements: [
            "sensor.smart_plug_1_channel_node_status",
            "switch.smart_plug_1_channel",
        ],
        swVersion: "1.0",
        hdVersion: null,
        manufacturer: "Minoston",
        powerBy: ["zwave_js", "3453171310-3"],
        productName: "MP21Z",
        friendlyName: null,
        nameByUser: null,
    },
}
export var HubElements = {
    "person.sky": {
        "id": "person.sky",
        "src": {
            "entity_id": "person.sky",
            "state": "unknown",
            "attributes": {
                "editable": false,
                "id": "sky",
                "user_id": "eef7f0bc07754efb84a4184833e25232",
                "friendly_name": "sky"
            },
            "last_changed": "2022-01-19T02:05:04.628671+00:00",
            "last_updated": "2022-01-19T02:05:08.296032+00:00",
            "context": {
                "id": "750389cd689adfa8d04327da02a599e7",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "person.micheal": {
        "id": "person.micheal",
        "src": {
            "entity_id": "person.micheal",
            "state": "unknown",
            "attributes": {
                "editable": false,
                "id": "micheal",
                "user_id": "e41cbc1a2493463ebac64a3c81300ed6",
                "entity_picture": "/api/image/serve/01f9c65a0cbb0cc8a579f5d38c9f75ec/512x512",
                "friendly_name": "micheal"
            },
            "last_changed": "2022-01-19T02:05:04.630369+00:00",
            "last_updated": "2022-01-19T02:05:08.296255+00:00",
            "context": {
                "id": "346cba9d51cddc1abfca2ce2e60a9718",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "sun.sun": {
        "id": "sun.sun",
        "src": {
            "entity_id": "sun.sun",
            "state": "below_horizon",
            "attributes": {
                "next_dawn": "2022-01-22T06:57:01.033651+00:00",
                "next_dusk": "2022-01-22T16:47:33.452711+00:00",
                "next_midnight": "2022-01-22T23:52:17+00:00",
                "next_noon": "2022-01-22T11:51:52+00:00",
                "next_rising": "2022-01-22T07:36:13.838254+00:00",
                "next_setting": "2022-01-22T16:08:18.532707+00:00",
                "elevation": -45,
                "azimuth": 58.91,
                "rising": true,
                "friendly_name": "Sun"
            },
            "last_changed": "2022-01-21T16:10:33.306702+00:00",
            "last_updated": "2022-01-22T02:32:01.010699+00:00",
            "context": {
                "id": "24c7aacead759693ef82530915bd0a1c",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "zone.home": {
        "id": "zone.home",
        "src": {
            "entity_id": "zone.home",
            "state": "zoning",
            "attributes": {
                "latitude": 52.3731339,
                "longitude": 4.8903147,
                "radius": 100,
                "passive": false,
                "editable": true,
                "icon": "mdi:home",
                "friendly_name": "我的家"
            },
            "last_changed": "2022-01-19T02:05:05.265940+00:00",
            "last_updated": "2022-01-19T02:05:05.265940+00:00",
            "context": {
                "id": "655a8a59c4e9b7e045c5b5823a547005",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "binary_sensor.updater": {
        "id": "binary_sensor.updater",
        "src": {
            "entity_id": "binary_sensor.updater",
            "state": "off",
            "attributes": {
                "device_class": "update",
                "friendly_name": "Updater"
            },
            "last_changed": "2022-01-19T02:05:05.613482+00:00",
            "last_updated": "2022-01-19T02:05:05.613482+00:00",
            "context": {
                "id": "e3a1a59960190bed06dae02f95ec25d3",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "persistent_notification.http_login": {
        "id": "persistent_notification.http_login",
        "src": {
            "entity_id": "persistent_notification.http_login",
            "state": "notifying",
            "attributes": {
                "title": "Login attempt failed",
                "friendly_name": "Login attempt failed",
                "message": "Login attempt or request with invalid authentication from localhost (127.0.0.1). See the log for details."
            },
            "last_changed": "2022-01-19T02:05:07.295155+00:00",
            "last_updated": "2022-01-19T02:05:07.295155+00:00",
            "context": {
                "id": "bb8a6caf22f8638f2f56318d800f2fc4",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "persistent_notification.python_version": {
        "id": "persistent_notification.python_version",
        "src": {
            "entity_id": "persistent_notification.python_version",
            "state": "notifying",
            "attributes": {
                "title": "Python version",
                "friendly_name": "Python version",
                "message": "Support for the running Python version 3.8.10 is deprecated and will be removed in Home Assistant 2022.1. Please upgrade Python to 3.9."
            },
            "last_changed": "2022-01-19T02:05:08.284303+00:00",
            "last_updated": "2022-01-19T02:05:08.284303+00:00",
            "context": {
                "id": "41341d43b2a79d267933fb06ea70be99",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "sensor.node_1_node_status": {
        "id": "sensor.node_1_node_status",
        "src": {
            "entity_id": "sensor.node_1_node_status",
            "state": "alive",
            "attributes": {
                "icon": "mdi:heart-pulse",
                "friendly_name": "Node 1: Node Status"
            },
            "last_changed": "2022-01-21T16:53:45.473340+00:00",
            "last_updated": "2022-01-21T16:53:45.473340+00:00",
            "context": {
                "id": "d9694a89f266b3062f2c0e3bccc8190f",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "sensor.smart_plug_1_channel_node_status": {
        "id": "sensor.smart_plug_1_channel_node_status",
        "src": {
            "entity_id": "sensor.smart_plug_1_channel_node_status",
            "state": "alive",
            "attributes": {
                "icon": "mdi:heart-pulse",
                "friendly_name": "Smart Plug - 1 channel: Node Status"
            },
            "last_changed": "2022-01-21T16:53:45.474193+00:00",
            "last_updated": "2022-01-21T16:53:45.474193+00:00",
            "context": {
                "id": "900b3cea22eeb8ee84e07fd1646c6331",
                "parent_id": null,
                "user_id": null
            }
        }
    },
    "switch.smart_plug_1_channel": {
        "id": "switch.smart_plug_1_channel",
        "type": "switch",
        "value": {
            "state": "off"
        },
        "lastChanged": "2022-01-21T16:53:45.494158+00:00",
        "src": {
            "entity_id": "switch.smart_plug_1_channel",
            "state": "off",
            "attributes": {
                "friendly_name": "Smart Plug - 1 channel"
            },
            "last_changed": "2022-01-21T16:53:45.494158+00:00",
            "last_updated": "2022-01-21T16:53:45.494158+00:00",
            "context": {
                "id": "cd0bd1a96f31ddd47d699f42edd7fb0e",
                "parent_id": null,
                "user_id": null
            }
        }
    }
}