// pubsub.js

const subscribers = {};

export const subscribe = (event, callback) => {
    if (!subscribers[event]) {
        subscribers[event] = [];
    }
    subscribers[event].push(callback);
};

export const unsubscribe = (event, callback) => {
    if (!subscribers[event]) return;

    subscribers[event] = subscribers[event].filter(subscriber => subscriber !== callback);
};

export const publish = (event, data) => {
    if (!subscribers[event]) return;

    subscribers[event].forEach(callback => callback(data));
};
