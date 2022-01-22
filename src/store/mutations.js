import { $set } from "../lib/utils"
export const state = {
  auth: undefined,
  hubDevices: [],
  hubDevicesMap: new Map(),
  elements: [],
  elementMap: new Map(),

  serial_ports: [],
  scales: [],
  nodes: [],
  nodesMap: new Map(),
  user: {},
  zwave: {
    port: "/dev/zwave",
    commandsTimeout: 30,
    logLevel: "silly",
    securityKeys: {
      S2_Unauthenticated: undefined,
      S2_Authenticated: undefined,
      S2_AccessControl: undefined,
      S0_Legacy: undefined,
    },
    deviceConfigPriorityDir: "",
    logToFile: true,
    serverEnabled: false,
    enableSoftReset: true,
    enableStatistics: undefined, // keep it undefined so the user dialog will show up
    serverPort: 3003,
  },
  mqtt: {
    name: "Zwavejs2Mqtt",
    host: "localhost",
    port: 1883,
    qos: 1,
    prefix: "zwave",
    reconnectPeriod: 3000,
    retain: true,
    clean: true,
    auth: false,
    username: undefined,
    password: undefined,
  },
  devices: [],
  gateway: {
    type: 0,
    plugins: [],
    authEnabled: false,
    payloadType: 0,
    nodeNames: true,
    hassDiscovery: true,
    discoveryPrefix: "homeassistant",
    logEnabled: true,
    logLevel: "silly",
    logToFile: false,
    values: [],
  },
  appInfo: {
    homeid: "",
    homeHex: "",
    appVersion: "",
    zwaveVersion: "",
    controllerStatus: "Unknown",
    newConfigVersion: undefined,
  },
}

function getValue (v) {
  const node = getNode(v.nodeId)

  if (node && node.values) {
    return node.values.find((i) => i.id === v.id)
  } else {
    return null
  }
}

function getNode (id) {
  if (typeof id === "string") {
    id = parseInt(id)
  }

  return state.nodes[state.nodesMap.get(id)]
}

// eslint-disable-next-line no-unused-vars
function getHubDevice (id) {
  return state.hubDevices[state.hubDevicesMap.get(id)]
}

function getElement (id) {
  return state.elements[state.elementMap.get(id)]
}
export const getters = {
  auth: (state) => state.auth,
  nodes: (state) => state.nodes,
  nodesMap: (state) => state.nodesMap,
  user: (state) => state.user,
  serial_ports: (state) => state.serial_ports,
  zwave: (state) => state.zwave,
  mqtt: (state) => state.mqtt,
  devices: (state) => state.devices,
  gateway: (state) => state.gateway,
  appInfo: (state) => state.appInfo,
  scales: (state) => state.scales,
  hubDevices: (state) => state.hubDevices,
  hubDevicesMap: (state) => state.hubDevicesMap,
  elements: (state) => state.elements,
  elementMap: (state) => state.elementMap,
}

export const actions = {
  setAuth (store, data) {
    store.commit("setAuth", data)
  },
  init (store, data) {
    if (data) {
      store.commit("initSettings", data.settings)
      store.commit("initPorts", data.serial_ports)
      store.commit("initScales", data.scales)
      store.commit("initDevices", data.devices)
    }
  },
  setUser (store, data) {
    store.commit("setUser", data)
  },
  import (store, settings) {
    store.commit("initSettings", settings)
  },
  initNodes (store, nodes) {
    for (let i = 0; i < nodes.length; i++) {
      store.commit("initNode", nodes[i])
    }
  },
  setAppInfo (store, data) {
    store.commit("updateAppInfo", data)
  },
  setValue (store, data) {
    store.commit("setValue", data)
  },
  updateValue (store, data) {
    const valueId = getValue(data)
    if (valueId && valueId.toUpdate) {
      store.commit("showSnackbar", "Value updated")
    }
    store.commit("updateValue", { data, valueId })
  },
  removeValue (store, data) {
    store.commit("removeValue", data)
  },

  /// add by micheal
  initHubDevices (store, devices) {
    store.commit("initHubDevices", devices)
  },
  removeDevice (store, device) {
    store.commit("removeDevice", device)
  },
  updateElement (store, element) {
    store.commit("updateElement", element)
  },
  removeElement (store, element) {
    store.commit("removeElement", element)
  },
}

export const mutations = {
  showSnackbar () {
    // empty mutation, will be catched in App.vue from store subscribe
  },
  setAuth (store, enabled) {
    state.auth = enabled
  },
  setUser (state, data) {
    Object.assign(state.user, data)
  },
  setControllerStatus (state, data) {
    state.appInfo.controllerStatus = data
  },
  updateAppInfo (state, data) {
    state.appInfo.homeid = data.homeid
    state.appInfo.homeHex = data.name
    state.appInfo.appVersion = data.appVersion
    state.appInfo.zwaveVersion = data.zwaveVersion
    state.appInfo.serverVersion = data.serverVersion
    state.appInfo.newConfigVersion = data.newConfigVersion
  },
  setValue (state, valueId) {
    const toReplace = getValue(valueId)
    const node = getNode(valueId.nodeId)

    if (node && toReplace) {
      const index = node.values.indexOf(toReplace)
      if (index >= 0) {
        node.values.splice(index, 1, valueId)
      }
    }
  },
  updateValue (state, { data, valueId }) {
    if (valueId) {
      valueId.newValue = data.value
      valueId.value = data.value

      if (valueId.toUpdate) {
        valueId.toUpdate = false
      }
    } else {
      // means that this value has been added
      const node = getNode(data.nodeId)
      if (node) {
        data.newValue = data.value
        node.values.push(data)
      }
    }
  },
  removeValue (state, data) {
    const valueId = getValue(data)
    if (valueId) {
      const node = getNode(data.nodeId)
      const index = node.values.indexOf(valueId)

      if (index >= 0) {
        node.values.splice(index, 1)
      }
    }
  },
  initNode (state, n) {
    const values = []
    // transform object in array

    if (n.values) {
      for (const k in n.values) {
        n.values[k].newValue = n.values[k].value
        values.push(n.values[k])
      }
      n.values = values
    }

    let index = state.nodesMap.get(n.id)

    if (index >= 0) {
      n = Object.assign(state.nodes[index], n)
    }

    n._name = n.name
      ? n.name + (n.loc ? " (" + n.loc + ")" : "")
      : "NodeID_" + n.id

    if (index >= 0) {
      state.nodes.splice(index, 1, n)
    } else {
      state.nodes.push(n)
      state.nodesMap.set(n.id, state.nodes.length - 1)
    }
  },
  removeNode (state, n) {
    const index = state.nodesMap.get(n.id)

    if (index >= 0) {
      state.nodesMap.delete(n.id)
      state.nodes.splice(index, 1)
    }
  },
  setNeighbors (state, neighbors) {
    for (const nodeId in neighbors) {
      const node = getNode(nodeId)
      if (node) {
        $set(node, "neighbors", neighbors[nodeId])
      }
    }
  },
  setStatistics (state, data) {
    const node = getNode(data.nodeId)
    if (node) {
      $set(node, "statistics", data.statistics)
    }
  },
  setHealProgress (state, nodesProgress) {
    for (const [nodeId, progress] of nodesProgress) {
      const node = getNode(nodeId)
      if (node) {
        $set(node, "healProgress", progress)
      }
    }
  },
  initSettings (state, conf) {
    if (conf) {
      Object.assign(state.zwave, conf.zwave || {})
      Object.assign(state.mqtt, conf.mqtt || {})
      Object.assign(state.gateway, conf.gateway || {})
    }
  },
  initPorts (state, ports) {
    if (ports) {
      state.serial_ports = ports || []
    }
  },
  initScales (state, scales) {
    if (scales) {
      state.scales = scales || []
    }
  },
  initDevices (state, devices) {
    if (!state.gateway.values) state.gateway.values = []

    if (devices) {
      // devices is an object where key is the device ID and value contains
      // device informations
      for (const k in devices) {
        const d = devices[k]
        d.value = k

        const values = []

        // device.values is an object where key is the valueID (cmdClass-instance-index) and value contains
        // value informations
        for (const id in d.values) {
          const val = d.values[id]
          values.push(val)
        }
        d.values = values
        state.devices.push(d)
      }
    }
  },
  // add by micheal

  updateElement (state, e) {
    const el = getElement(e.id)
    if (el) {
      // update
      state.elements.splice(state.elementMap.get(e.id), 1, e)
    } else {
      // append
      state.elements.push(e)
      state.elementMap.set(e.id, state.elements.length - 1)
    }
    console.log("update element: ", e)
  },
  removeElement (state, id) {
    state.elements.splice(state.elementMap.get(id), 1)
    state.elementMap.delete(id)
  },
  removeDevice (state, id) {
    state.hubDevices.splice(state.hubDevicesMap.get(id), 1)
    state.hubDevicesMap.delete(id)
  },
  initHubDevices (state, d) {
    state.hubDevicesMap = new Map()
    state.hubDevices = []
    Object.entries(d).forEach(([key, val]) => {
      if (key != "message") {
        state.hubDevices.push(val)
        state.hubDevicesMap.set(key, state.hubDevices.length - 1)
      }
    })
  },
}
