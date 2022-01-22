/*
 * @Author: your name
 * @Date: 2021-12-23 17:28:32
 * @LastEditTime: 2022-01-18 16:32:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \zwavejs2mqtt-master\src\plugins\socket.js
 */
// FIXME: This comes from /lib/SocketManager.js. It cannot be imported as it's commonjs module and require isn't supported by webpack

// events from client ---> server
export const inboundEvents = {
  init: "INITED", // get all nodes
  zwave: "ZWAVE_API", // call a zwave api
  hass: "HASS_API", // call an hass api
  mqtt: "MQTT_API", // call an mqtt api
};

// events from server ---> client
export const socketEvents = {
  init: "INIT", // automatically sent when a new client connects to the socket
  controller: "CONTROLLER_CMD", // controller status updates
  connected: "CONNECTED", // socket status
  nodeAdded: "NODE_ADDED",
  nodeRemoved: "NODE_REMOVED",
  nodeUpdated: "NODE_UPDATED",
  valueUpdated: "VALUE_UPDATED",
  valueRemoved: "VALUE_REMOVED",
  healProgress: "HEAL_PROGRESS",
  info: "INFO",
  api: "API_RETURN", // api results
  debug: "DEBUG",
  statistics: "STATISTICS",
  grantSecurityClasses: "GRANT_SECURITY_CLASSES",
  validateDSK: "VALIDATE_DSK",
  inclusionAborted: "INCLUSION_ABORTED",
  // Ha event
  hubInit: "HUB_INIT",
  elementUpdate: "HUB_ELEMENT_UPDATE",
};
